import getOr from 'lodash/fp/getOr';

const defaultNotifications = [];

export const getFirestoreNotifications = getOr(defaultNotifications, 'firestore.data.notifications');

export const getFirestoreOrderedNotifications = getOr(defaultNotifications,'firestore.ordered.notifications');