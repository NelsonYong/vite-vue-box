import { State } from './state';

const mutations = {
  setCurrentUser: (state: State, payload: any) => {
    state.currentUser = { ...state.currentUser, ...payload };
  },
};

export default mutations;
