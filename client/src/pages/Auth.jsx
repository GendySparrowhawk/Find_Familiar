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

  const handleSubmit = async (e)=> {
    e.preventDefault()

    try {
        const resolverName = isLogin ? 'login' : 'register'
        const { data: userData } = await authenticateUser()
        setFormData({ ...initalFormData})

        setState(oldState => ({
            ...oldState,
            user: userData[resolverName]
        }))
        setErrorMessage('')
        navigate("/")
    } catch(err) {
        setErrorMessage(err.message)
    }
  }

  return (
    <>
    <section className='auth'> 
        <form onSubmit={handleSubmit}>
            <h2></h2>
        </form>
    </section>
    </>
  )
}
