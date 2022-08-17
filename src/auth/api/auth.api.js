import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { alertService } from "../../core/alert-service";
import { auth } from "../../firebase/auth";

const authApi = {
  login: (user) => {
    return signInWithEmailAndPassword(auth, user.email, user.password);
  },
  register: (user) => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((result) => {
        alertService.success();
      })
      .catch((badRequest) => console.log(badRequest));
  },
  loginWithGoogle: async (callback) => {
    const googleProvider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, googleProvider);
    callback(result);
  },
};
export { authApi };
