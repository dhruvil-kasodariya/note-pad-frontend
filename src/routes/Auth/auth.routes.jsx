import { Fragment, useState } from "react";
import loginApi from "../../api/login.api";
import registerApi from "../../api/register.api";
import AuthForm from "../../componets/authForm.componet";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const inialSignInObj = {
  useremail: "",
  password: "",
};
const inialSignUpObj = {
  username: "",
  useremail: "",
  password: "",
};

const Auth = () => {
  const [signUpData, setSignUpData] = useState(inialSignUpObj);
  const [signInData, setSignInData] = useState(inialSignInObj);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignInChange = async (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };
  const handleSignUpChange = async (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const { useremail, username, password } = signUpData;
    if (!useremail || !username || !password) {
      !username && toast("enter user name");
      !useremail && toast("enter usern email");
      !password && toast("enter password");
      return;
    }
    await registerApi(signUpData, dispatch, navigate);
  };
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const { password, useremail } = signInData;
    if (!password || !useremail) {
      !useremail && toast("enter email");
      !password && toast("enter password");
      return;
    }
    await loginApi(signInData, dispatch, navigate);
  };
  return (
    <Fragment>
      <AuthForm
        handleSignInChange={handleSignInChange}
        handleSignUpChange={handleSignUpChange}
        handleSignInSubmit={handleSignInSubmit}
        handleSignUpSubmit={handleSignUpSubmit}
      />
      <Toaster />
    </Fragment>
  );
};
export default Auth;
