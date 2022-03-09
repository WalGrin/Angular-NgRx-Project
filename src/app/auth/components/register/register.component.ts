import {Component, OnInit} from '@angular/core'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'

import {registerAction} from 'src/app/auth/store/actions/register.actions'
import {Observable} from 'rxjs'
import {isSubmittingSelector, validationErrorsSelector} from '../../store/selectors'
import {AuthService} from '../../services/auth.service'
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface'
import {RegisterRequestInterface} from '../../types/registerRequest.interface'
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(private fb: FormBuilder, private store: Store, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeForm(): void {
    console.log('initializeForm')
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid)
    const request: RegisterRequestInterface = {
      user: this.form.value
    };
    this.store.dispatch(registerAction({request}))
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }
}
