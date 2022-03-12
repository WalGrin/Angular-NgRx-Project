import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../shared/types/appState.interface';
import {AuthStateInterface} from '../types/authState.interface';

export const authFeatureSelector = createFeatureSelector<AppStateInterface,
  AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState) => authState.validationErrors
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState) => authState.isLoggedIn
);

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState) => authState.isLoggedIn === false
  // isLoggedIn имеет три состояния:
  // 1) true - если залогинены
  // 2) false - если незалогинены
  // 3) null - незнаем залогинен пользователь или нет
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState) => authState.currentUser
);










