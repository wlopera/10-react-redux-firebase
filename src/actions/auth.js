import { types } from "../types/types";
import {
  auth,
  signInWithPopup,
  googleAuthProvider,
} from "../firebase/config-firebase";

export const googleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
