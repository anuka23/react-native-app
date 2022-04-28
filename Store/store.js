import {createStore} from 'easy-peasy';
import {action, thunk} from 'easy-peasy';
import axios from 'axios';

const store = createStore({
  list: null,
  saveBusinesses: action((state, payload) => {
    state.list = payload;
  }),
  fetchBusinesses: thunk(async (actions, payload) => {
    // actions.setStatus(false);
    const {data} = await axios.get(
      `https://staging.admin.haavoo.com/api/business?city=&area=&search_query=${payload.search_query}page=1&type=&category=&sort=&lat=19.1397888&lng=72.892416`,
    );
    actions.saveBusinesses(data?.data?.data);
    // actions.setLength(data?.data?.total);
    // actions.setStatus(true);
  }),
});

export default store;
