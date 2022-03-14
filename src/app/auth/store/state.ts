import {Action, State, StateContext} from '@ngxs/store';
import {AuthStateInterface} from '../types/authState.interface';
import {Injectable} from '@angular/core';
import {RegisterAction} from './actions';

@State<AuthStateInterface>({
  name: 'auth',
  defaults: {
    isSubmitting: false
  }
})
@Injectable()
export class AuthState {
 @Action(RegisterAction)
 registerAction(ctx: StateContext<AuthStateInterface>) {
   const state = ctx.getState();
   ctx.setState({
     ...state,
     isSubmitting: true
   });
 }
}
