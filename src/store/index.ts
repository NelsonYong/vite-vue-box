import { createStore } from 'vuex';
import { createState, State } from './state';
import mutations from './mutation';

const state = createState();

const store = createStore<State>({
  state,
  mutations,
});

export default store;
