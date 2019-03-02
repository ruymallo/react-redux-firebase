import { LOADING_REQUEST_START, LOADING_REQUEST_END } from '../constants/actionTypes'

export const loadingRequestStart = requestId => ({
  type: LOADING_REQUEST_START,
  requestId
});

export const loadingRequestEnd = requestId => ({
  type: LOADING_REQUEST_END,
  requestId
});