import {Component, Input, OnInit} from '@angular/core';
import {BackendErrorsInterface} from '../../../types/backendErrors.interface';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss']
})
export class BackendErrorMessagesComponent implements OnInit{
  // @Input() backendErrors: BackendErrorsInterface обычно пишется так,
  // но при таком способе переменную инпута тежело отличить от обычной
  // переменной в дальнейшем коде
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface; // так
  // сразу видно, что переменная пришла от инпута

  errorMessages: string[];
  constructor() {}

  ngOnInit() {
    this.errorMessages = Object.keys(this.backendErrorsProps).map((name: string) => {
      const messages = this.backendErrorsProps[name].join(', ');

      return `${name} ${messages}`;
    });
  }

}
