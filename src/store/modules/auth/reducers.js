import produce from 'immer';

const INITIAL_STATE = {
  repositories: null,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SUCCESS': {
        draft.repositories = action.payload;
        draft.loading = false;
        break;
      }
      case '@auth/FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
