import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {registerAction, registerFailureAction, registerSuccessAction} from '../actions/register.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AuthService} from '../../services/auth.service';
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface';
import {of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() => this.actions$.pipe( // в стрим actions$
    // попадают все action которые происходят
    ofType(registerAction),  // на данной строке происходит фильтр по action
    // и после него мы пропускаем только registerAction
    switchMap(({request}) => { // перехватываем текущий Observable и как аргумент в switchMap
    // получаем registerAction, из которого деструктурированием получаем его props
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
              return registerSuccessAction({currentUser});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(registerFailureAction({errors: errorResponse.error.errors}));
          })
        );
      })
  ));

  constructor(private actions$: Actions, private authService: AuthService) {}

}







