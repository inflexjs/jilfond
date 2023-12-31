import Vue from 'vue'
import Vuex from 'vuex'
import employees from "@/store/modules/employees";
import common from "@/store/modules/common";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    employees
  }
})
