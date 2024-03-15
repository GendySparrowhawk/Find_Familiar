import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useStore } from "../store";
import { useMutation, gql } from "@apollo/client";

const initalFormData = {
  email: "",
  username: "",
  identifier: "",
  password: "",
};

const REGISTER_USER = gql`
mutation RegisterUser($email: String!, $username: String!, password: String!) {
    register(email: $email, username: $username, password: $password) {
        _id
        email
        username
        campaigns {
            _id
            name
        }
    }
}
`;

const LOGIN_USER = gql`
mutation LoginUser($identifier: String!, password: String!) {
    login(identifier: $identifier, password: $password) {
        _id
        email
        username
        campaigns {
            _id
            name
        }
    }
}
`;

function Auth({ isLogin }) {
  const { setState } = useStore();
  const [formData, setFormData] = useState(initalFormData);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [authenticateUser] = useMutation(isLogin ? LOGIN_USER : REGISTER_USER, {
    variables: formData,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resolverName = isLogin ? "login" : "register";
      const { data: userData } = await authenticateUser();
      setFormData({ ...initalFormData });

      setState((oldState) => ({
        ...oldState,
        user: userData[resolverName],
      }));
      setErrorMessage("");
      navigate("/");
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <>
      <section className="auth">
        <form onSubmit={handleSubmit}>
          <h2>{isLogin ? "Log In" : "Register"}</h2>
          {errorMessage ? <p>{errorMessage}</p> : ""}

          {isLogin ? (
            <>
              <div className="mb-3">
                <label
                  htmlFor="formBasicIdentifier"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username or Email:
                </label>
                <input
                  id="formBasicIdentifier"
                  type="text"
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleInputChange}
                  placeholder="Enter username or email"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </>
          ) : (
            <>
              <div className="mb-3">
                <label
                  htmlFor="formBasicUsername"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username:
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Enter username"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="formBasicEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="formBasicPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password:
                </label>
                <input
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Passowrd must include one: !@#$%^&*()"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </>
          )}
          <div className="nav-control mb-3 d-flex">
            {isLogin ? (
              <>
                <span className="me-1">Don't have an Account?</span>
                <NavLink to="/register">Register</NavLink>
              </>
            ) : (
              <>
                <span className="me-1">Already have an Account?</span>
                <NavLink to="/login">Log In</NavLink>
              </>
            )}
          </div>

          <Button className="my-btn" type="submit">
            Submit
          </Button>
        </form>
      </section>
    </>
  );
}

export default Auth;
