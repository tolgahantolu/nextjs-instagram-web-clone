import store from "./store";
import { setUser } from "./store/authSlice";

export const userHandle = (data) => {
  store.dispatch(setUser(data));
};
