import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import has from 'lodash/fp/has';

export const getAuthErrorMessage = get('auth.authError');

export const getFirebase = get('firebase');

export const getUserEmail = pipe(getFirebase, get('auth.email'));

export const isLoggedIn = pipe(getFirebase, has('auth.uid'));

export const getUserInitials = (state) => {
  const profile = get('firebase.profile')(state);
  if (has('firstName')(profile) && has('lastName')(profile)) {
    return profile.firstName[0] + profile.lastName[0];
  }

  return '';
}