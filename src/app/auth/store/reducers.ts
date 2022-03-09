import {AuthStateInterface} from '../types/authState.interface'
import {Action, createReducer, on} from '@ngrx/store'
import {registerAction, registerFailureAction, registerSuccessAction} from './actions/register.actions'

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: false,
  validationErrors: null
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({ // тут все после => return
      ...state,
      isSubmitting: true,
      validationErrors: null // для удаления предыдущих ошибок пользователя,
      // которые показывались валидатором при фетче
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({ // тут все после => return
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}



