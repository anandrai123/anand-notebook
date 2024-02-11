import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    let navigate = useNavigate();
    const [credential, setCredential] = useState({email:"",password:""})
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0NGVkZDBjNWFhNGFjODViMjEzNDIzIn0sImlhdCI6MTY4MjIzODkyOH0._LdL7Ivt34LeqgCAm7ABlBb0vZLkNwWf8b2SaLWZby4",
            },
            body: JSON.stringify({email:credential.email, password:credential.password})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
              localStorage.setItem('token',json.authtoken);
              navigate("/");
              props.showAlert("Logged in Successfully","success")
          }
          else{
            props.showAlert(json.error,"danger")
          }
    }
    const onChange = (e)=>{
        setCredential({...credential, [e.target.name]: e.target.value})
    }
  return (
    <div className="mt-2">
        <h2 className="my-3">Login to continue to anandNoteBook</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-2">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control my-2"
            id="exampleInputEmail1"
            value={credential.email}
            onChange={onChange}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control my-2"
            value={credential.password}
            onChange={onChange}
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
       
        <button type="submit" className="btn btn-primary my-2" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
