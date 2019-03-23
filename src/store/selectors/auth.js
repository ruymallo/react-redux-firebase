import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import has from 'lodash/fp/has';

export const getFirebase = get('firebase');

export const getAuth = pipe(getFirebase, get('auth'));

export const getAuthErrorMessage = pipe(getAuth, get('authError'));

export const getProfile = pipe(getFirebase, get('profile'));

export const getUserEmail = pipe(getAuth, get('email'));

export const isLoggedIn = pipe(getAuth, has('uid'));

export const getUid = pipe(getAuth, get('uid'));

export const getUserInitials = (state) => {
  const profile = getProfile(state);

  if (has('firstName')(profile) && has('lastName')(profile)) {
    return profile.firstName[0] + profile.lastName[0];
  }

  return '';
}