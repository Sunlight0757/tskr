import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import validator from "validator";
import Input from "../../components/Input";
import Segmented from "../../components/Segmented";
import Button from "../../components/Button";
import { USER_URL } from "../../constants/ApiURL";
import { selectAuth } from "../../store/userSlice";
import ToastHelper from "../../utils/ToastHelper";
import isEmpty from "../../validation/is-empty";

const Signup = () => {
  const user = useSelector(selectAuth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.isAuthenticated) navigate("/");
  }, [user.isAuthenticated, navigate]);

  const lastnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [errors, setErrors] = useState({});
  const [role, setRole] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFirstNameChange = (event) => {
    setErrors({ ...errors, firstname: "" });
    if (isEmpty(event.target.value))
      setErrors({
        ...errors,
        firstname: "First name field is required",
      });
    setFirstName(event.target.value);
  };

  const onLastNameChange = (event) => {
    setErrors({ ...errors, lastname: "" });
    if (isEmpty(event.target.value))
      setErrors({
        ...errors,
        lastname: "Last name field is required",
      });
    setLastName(event.target.value);
  };

  const onEmailChange = (event) => {
    setErrors({ ...errors, email: "" });
    if (!validator.isEmail(event.target.value))
      setErrors({ ...errors, email: "Email is invalid" });
    if (isEmpty(event.target.value))
      setErrors({ ...errors, email: "Email field is required" });
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setErrors({ ...errors, password: "" });
    var password_error = "";
    if (
      !validator.isStrongPassword(event.target.value, {
        minLength: 0,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 0,
      })
    ) {
      password_error += "Password must have at least 1 numeric character\n";
    }
    if (
      !validator.isStrongPassword(event.target.value, {
        minLength: 0,
        minLowercase: 0,
        minUppercase: 1,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      password_error += "Password must have at least 1 upper case character\n";
    }
    if (
      !validator.isStrongPassword(event.target.value, {
        minLength: 0,
        minLowercase: 1,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      password_error += "Password must have at least 1 lower case character\n";
    }
    if (
      !validator.isStrongPassword(event.target.value, {
        minLength: 8,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      password_error += "Password length must be greater than 8 characters";
    }
    setErrors({ ...errors, password: password_error });
    if (isEmpty(event.target.value))
      setErrors({
        ...errors,
        password: "Password field is required",
      });
    setPassword(event.target.value);
  };

  const onFirstNameEnterKeyPress = (event) => {
    if (event.keyCode === 13) {
      onFirstNameChange(event);
      lastnameRef.current.focus();
    }
  };

  const onLastNameEnterKeyPress = (event) => {
    if (event.keyCode === 13) {
      onLastNameChange(event);
      emailRef.current.focus();
    }
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
      .post(USER_URL, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        role: role,
      })
      .then((res) => {
        ToastHelper(res.data);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setErrors({});
      })
      .catch((err) => setErrors({ ...errors, ...err.response.data }));
  };

  return (
    <div className="bg-[#FFEDE8] text-[#222] text-[15px]">
      <div className="flex flex-col items-center max-w-[650px] m-auto pt-[120px] pb-72">
        <div className="text-[32px] font-bold leading-10 mb-16">Register</div>
        <div className="flex flex-col items-center bg-white w-full rounded-lg border border-[#E9E9E9] p-[50px]">
          <Segmented
            name="role-group"
            value={Number(role)}
            onChange={() => setRole(!role)}
            controlRef={useRef()}
            segments={[
              {
                label: "I'm a Client",
                value: false,
                ref: useRef(),
              },
              {
                label: "I'm a Freelancer",
                value: true,
                ref: useRef(),
              },
            ]}
          />
          <div className="flex flex-col gap-6 font-medium mb-8 w-full">
            <div className="flex gap-6 w-full">
              <div className="flex-1">
                <span className="block mb-[5px]">First Name</span>
                <Input
                  type="text"
                  placeholder="Enter first name"
                  value={firstname}
                  error={Boolean(errors.firstname)}
                  helperText={errors.firstname ? errors.firstname : ""}
                  onChange={onFirstNameChange}
                  onKeyDown={onFirstNameEnterKeyPress}
                />
              </div>
              <div className="flex-1">
                <span className="block mb-[5px]">Last Name</span>
                <Input
                  type="text"
                  placeholder="Enter last name"
                  value={lastname}
                  error={Boolean(errors.lastname)}
                  helperText={errors.lastname ? errors.lastname : ""}
                  inputRef={lastnameRef}
                  onChange={onLastNameChange}
                  onKeyDown={onLastNameEnterKeyPress}
                />
              </div>
            </div>
            <div>
              <span className="block mb-[5px]">Email</span>
              <Input
                type="email"
                placeholder="Enter email address"
                autocomplete="email"
                value={email}
                error={Boolean(errors.email)}
                helperText={errors.email ? errors.email : ""}
                inputRef={emailRef}
                onChange={onEmailChange}
                onKeyDown={onEmailEnterKeyPress}
              />
            </div>
            <div>
              <span className="block mb-[5px]">Password</span>
              <Input
                type="password"
                placeholder="Enter password"
                autocomplete="password"
                value={password}
                error={Boolean(errors.password)}
                helperText={errors.password ? errors.password : ""}
                inputRef={passwordRef}
                onChange={onPasswordChange}
                onKeyDown={onPasswordEnterKeyPress}
              />
            </div>
          </div>
          <Button
            size="large"
            onClick={handleSubmit}
            disabled={
              errors.firstname !== "" ||
              errors.lastname !== "" ||
              errors.email !== "" ||
              errors.password !== ""
            }
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
