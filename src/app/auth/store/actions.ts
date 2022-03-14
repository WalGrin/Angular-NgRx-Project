import {ActionTypes} from 'src/app/auth/store/actionTypes';

export class RegisterAction {
  static readonly type = ActionTypes.REGISTER;
  constructor(public username: string, password: string, email: string) {
  }
}
