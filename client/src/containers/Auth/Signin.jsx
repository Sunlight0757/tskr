import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import validator from "validator";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import { USER_URL } from "../../constants/ApiURL";
import { selectAuth } from "../../store/userSlice";
import ToastHelper from "../../utils/ToastHelper";
import isEmpty from "../../validation/is-empty";

const Signin = () => {
  const user = useSelector(selectAuth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.isAuthenticated) navigate("/dashboard");
  }, [user.isAuthenticated, navigate]);

  const emailRef = useRef();
  const passwordRef = useRef();

  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remembered, setRemembered] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("tskr-email") &&
      localStorage.getItem("tskr-password")
    ) {
      setEmail(localStorage.getItem("tskr-email"));
      setPassword(localStorage.getItem("tskr-password"));
      setRemembered(true);
      setErrors({ email: "", password: "" });
    }
  }, []);

  const onEmailChange = (event) => {
    if (isEmpty(event.target.value))
      setErrors({ ...errors, email: "Email field is required" });
    else if (!validator.isEmail(event.target.value))
      setErrors({ ...errors, email: "Email is invalid" });
    else setErrors({ ...errors, email: "" });
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    if (isEmpty(event.target.value))
      setErrors({
        ...errors,
        password: "Password field is required",
      });
    else setErrors({ ...errors, password: "" });
    setPassword(event.target.value);
  };

  const onEmailEnterKeyPress = (event) => {
    if (event.keyCode === 13) {
      onEmailChange(event);
      passwordRef.current.focus();
    }
  };

  const onPasswordEnterKeyPress = (event) => {
    if (event.keyCode === 13) {
      onPasswordChange(event);
      if (errors.email !== "" || errors.password !== "")
        ToastHelper({
          status: "Error",
          msg: "Please check all fields again",
        });
      else handleSubmit();
    }
  };

  const handleSubmit = () => {
    axios
      .put(USER_URL, { email: email, password: password })
      .then((res) => {
        ToastHelper(res.data);
        localStorage.setItem("jwtToken", res.data.token);
        if (remembered) {
          localStorage.setItem("tskr-email", email);
          localStorage.setItem("tskr-password", password);
        } else {
          localStorage.removeItem("tskr-email");
          localStorage.removeItem("tskr-password");
        }
        navigate("/dashboard");
      })
      .catch((err) => ToastHelper(err.response.data));
  };

  return (
    <div className="bg-[#FFEDE8] text-[#222] text-[15px]">
      <div className="flex flex-col items-center max-w-[650px] m-auto pt-[120px] pb-72">
        <div className="text-[32px] font-bold leading-10 mb-16">Log In</div>
        <div className="flex flex-col items-center bg-white w-full rounded-lg border border-[#E9E9E9] shadow-[0px 6px 15px 0px #404F680D] p-[50px]">
          <div className="flex flex-col items-center gap-5 font-medium mb-9">
            <span className="text-xl leading-[26px]">Welcome back!</span>
            <span>
              Don't have an account?{" "}
              <NavLink
                to="/signup"
                className="font-normal text-[#5BBB7B] cursor-pointer"
              >
                Sign Up!
              </NavLink>
            </span>
          </div>
          <div className="flex flex-col gap-6 font-medium mb-8 w-full">
            <Input
              type="email"
              placeholder="Enter email address"
              autoComplete="email"
              label="Email Address"
              value={email}
              error={Boolean(errors.email)}
              helperText={errors.email ? errors.email : ""}
              inputRef={emailRef}
              onChange={onEmailChange}
              onKeyDown={onEmailEnterKeyPress}
            />
            <Input
              type="password"
              placeholder="Enter password"
              autoComplete="password"
              label="Password"
              value={password}
              error={Boolean(errors.password)}
              helperText={errors.password ? errors.password : ""}
              inputRef={passwordRef}
              onChange={onPasswordChange}
              onKeyDown={onPasswordEnterKeyPress}
            />
            <div className="flex justify-between">
              <Checkbox
                label="Remember me"
                checked={remembered}
                onChange={() => setRemembered(!remembered)}
              />
              <NavLink
                to="/forgot-password"
                className="underline outline-none hover:text-[#51A36C] focus:text-[#5BBB7B]"
              >
                Forgot Password?
              </NavLink>
            </div>
          </div>
          <Button
            className="w-full"
            type="primary"
            size="large"
            onClick={handleSubmit}
            disabled={errors.email !== "" || errors.password !== ""}
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
