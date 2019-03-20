import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';

export const getAuthErrorMessage = get('auth.authError');

export const getFirebase = get('firebase');

export const getUserEmail = pipe(getFirebase, get('auth.email'));