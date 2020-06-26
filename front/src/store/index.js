import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logined: false,
    user_data: null,
    won: null,
    total: 0,
    bet: 0.05,
    bet_items_undo: [],
    bet_items: [],
    std_num: 1,
    story: [],
    items: [
      {id:  0,   color: 'green'},
      {id:  1,   color: 'red',   class: 'items_1st_12'},
      {id:  2,   color: 'black', class: 'items_1st_12'},
      {id:  3,   color: 'red',   class: 'items_1st_12'},
      {id:  4,   color: 'black', class: 'items_1st_12'},
      {id:  5,   color: 'red',   class: 'items_1st_12'},
      {id:  6,   color: 'black', class: 'items_1st_12'},
      {id:  7,   color: 'red',   class: 'items_1st_12'},
      {id:  8,   color: 'black', class: 'items_1st_12'},
      {id:  9,   color: 'red',   class: 'items_1st_12'},
      {id: 10,   color: 'black', class: 'items_1st_12'},
      {id: 11,   color: 'black', class: 'items_1st_12'},
      {id: 12,   color: 'red',   class: 'items_1st_12'},
      {id: 13,   color: 'black', class: 'items_2nd_12'},
      {id: 14,   color: 'red',   class: 'items_2nd_12'},
      {id: 15,   color: 'black', class: 'items_2nd_12'},
      {id: 16,   color: 'red',   class: 'items_2nd_12'},
      {id: 17,   color: 'black', class: 'items_2nd_12'},
      {id: 18,   color: 'red',   class: 'items_2nd_12'},
      {id: 19,   color: 'red',   class: 'items_2nd_12'},
      {id: 20,   color: 'black', class: 'items_2nd_12'},
      {id: 21,   color: 'red',   class: 'items_2nd_12'},
      {id: 22,   color: 'black', class: 'items_2nd_12'},
      {id: 23,   color: 'red',   class: 'items_2nd_12'},
      {id: 24,   color: 'black', class: 'items_2nd_12'},
      {id: 25,   color: 'red',   class: 'items_3rd_12'},
      {id: 26,   color: 'black', class: 'items_3rd_12'},
      {id: 27,   color: 'red',   class: 'items_3rd_12'},
      {id: 28,   color: 'black', class: 'items_3rd_12'},
      {id: 29,   color: 'black', class: 'items_3rd_12'},
      {id: 30,   color: 'red',   class: 'items_3rd_12'},
      {id: 31,   color: 'black', class: 'items_3rd_12'},
      {id: 32,   color: 'red',   class: 'items_3rd_12'},
      {id: 33,   color: 'black', class: 'items_3rd_12'},
      {id: 34,   color: 'red',   class: 'items_3rd_12'},
      {id: 35,   color: 'black', class: 'items_3rd_12'},
      {id: 36,   color: 'red',   class: 'items_3rd_12'}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
