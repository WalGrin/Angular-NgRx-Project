import {CurrentUserInterface} from '../../shared/types/currentUser.interface'
import {BackendErrorsInterface} from '../../shared/types/backendErrors.interface'

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null; // null так как мы в самом начале
  // currentUser не зафетчен, а когда мы его получаем, тогда и записывается
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}


















