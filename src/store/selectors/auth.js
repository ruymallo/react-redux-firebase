import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import has from 'lodash/fp/has';

export const getAuthErrorMessage = get('auth.authError');

export const getFirebase = get('firebase');

export const getUserEmail = pipe(getFirebase, get('auth.email'));

export const isLoggedIn = pipe(getFirebase, has('auth.uid'));