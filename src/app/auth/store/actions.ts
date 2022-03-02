import {createAction, props} from '@ngrx/store';
import {ActionTypes} from 'src/app/auth/store/actionTypes';
import {RegisterRequestInterface} from '../types/registerRequest.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisterRequestInterface>()
);
