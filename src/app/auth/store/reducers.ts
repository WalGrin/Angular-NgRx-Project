import {AuthStateInterface} from '../types/authState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {registerAction} from './actions/register.actions';

const initialState: AuthStateInterface = {
  isSubmitting: false
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({ // тут все после => return
      ...state,
      isSubmitting: true
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}

