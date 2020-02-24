import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [],
    loading: false
  },

  mutations: {
    SET_QUESTIONS(state, data) {
      state.questions = data;
    },
    SET_LOADING(state, data) {
      state.loading = data;
    }
  },
  actions: {
    CREATE_QUESTION({ dispatch }, question) {
      return fetch(
        `https://podcast-js-app-d1526.firebaseio.com/questions.json`,
        {
          method: "POST",
          body: JSON.stringify(question),
          headers: { "Content-Type": "application/json" }
        }
      )
        .then(res => res.json())
        .then(res => console.log(res))
        .then(res => dispatch("SET_QUSTIONS", res));
    },

    LOAD_QUESTIONS({ commit }) {
      commit("SET_LOADING", true);
      return fetch(`https://podcast-js-app-d1526.firebaseio.com/questions.json`)
        .then(res => res.json())
        .then(res => commit("SET_QUESTIONS", res))
        .then(res => commit("SET_LOADING", false));
    },

    SET_QUSTIONS({ commit, dispatch }, question) {
      const allQuestions = dispatch("LOAD_QUESTIONS");
      allQuestions.push(question);
      commit("SET_QUESTIONS", allQuestions);
    }
  },
  modules: {}
});
