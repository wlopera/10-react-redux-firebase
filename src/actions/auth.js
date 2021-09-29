import { types } from "../types/types";
import {
  auth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  googleAuthProvider,
} from "../firebase/config-firebase";

export const googleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
  };
};

export const emailAndPasswordLogin = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      console.log(user);
      // dispatch(login(user.uid, user.displayName));
    });
  };
};

export const register = (email, password, username) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      async ({ user }) => {
        await updateProfile(user, { displayName: username });

        dispatch(login(user.uid, user.displayName));
      }
    );
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
