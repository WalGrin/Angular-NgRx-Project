import {Component, Input, OnInit} from '@angular/core';
import {BackendErrorsInterface} from '../../../types/backendErrors.interface';

@Component({
  selector: 'mc-error-message',
  template: '<div>{{messageProps}}</div>'
})
export class ErrorMessageComponent {
  @Input('message') messageProps = 'Something went wrong';
}
