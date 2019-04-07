export const state = () => ({ drawer: null });
export const mutations = {
	changeDrawer(state) {
		state.drawer = !state.drawer;
	}
};
export const actions = {
	toggleDrawer: ({ commit }) => {
		commit('changeDrawer');
	}
};
export const getters = {
	getDrawer: ({ drawer }) => drawer
};
