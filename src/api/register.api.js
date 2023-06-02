import axios from "axios";
import { registerUrl } from "./apiUrl.api";
import {
  signUpSuccess,
  signUpFailed,
  signUpStart,
} from "../store/user/user.action";

const registerApi = async (userData, dispatch, navigate) => {
  try {
    dispatch(signUpStart(true));
    const responce = await axios.post(registerUrl, userData);
    if (responce.status) {
      const data = responce.data;
      dispatch(signUpSuccess(data));
      navigate("/home");
      return data;
    }
    return responce;
  } catch (error) {
    dispatch(signUpFailed(error));
    console.log(error);
  }
};

export default registerApi;
