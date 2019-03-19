import get from 'lodash/fp/get';

export const getAuthErrorMessage = get('auth.authError');

export const getFirebase = get('firebase');