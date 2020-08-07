import {markActionsOffline} from 'redux-offline-queue';

const Creators = {
  signInRequest: () => ({
    type: '@auth/REQUEST',
  }),
};

markActionsOffline(Creators, ['signInRequest']);

export function signInRequest() {
  return {
    type: '@auth/REQUEST',
  };
}

export function signInSuccess(data) {
  return {
    type: '@auth/SUCCESS',
    payload: {data},
  };
}

export function signFailure() {
  return {
    type: '@auth/FAILURE',
  };
}
