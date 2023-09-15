
import { createStore } from 'vuex';

export const store = createStore({
  state: {
    menuOpen: false,
  },
  mutations: {
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
  },
});
