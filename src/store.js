import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import axiosAuth from "./axios-auth"
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    name: null,
    email: "",
    password: null
  },
  mutations: {
  AUTH_USER(state, userData){
    this.email = userData.email;
  }
  },
  actions: {
    signUp({commit}, authData ){
    axiosAuth.post("accounts:signUp?key=AIzaSyBa8icmYuKOxhhvObiDjKJonBWwD92cCcg", {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    }).then(res => {
      console.log(res);
      commit("AUTH_USER",{
        email: res.data.email
      });

      // local storage
      localStorage.setItem("email", res.data.email);


  router.push({path:"/dashboard"});
    }).catch(error => {
      if (error.response) {
        console.log(error.response.data.error.message);
        commit("SET_ERROR", error.response.data.error.message);
      }
    })
  },

  }
});
