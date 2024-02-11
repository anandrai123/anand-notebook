import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
    let navigate = useNavigate();
    const [credential, setCredential] = useState({name:"",email:"",password:""})
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({name:(credential.firstname).concat(" " ,credential.lastname),email:credential.email, password:credential.password})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
              localStorage.setItem('token',json.authtoken);
              navigate("/");
              props.showAlert("Account Created Successfully","success")
          }
          else{
            //   alert(json.error);
                props.showAlert(json.error,"danger")
          }
    }
    const onChange = (e)=>{
        setCredential({...credential, [e.target.name]: e.target.value})
    }
  return (
    <div className="mt-2">
        <h2 className="my-3">Create an account to use anandNoteBook</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group my-2">
          <label htmlFor="exampleInputName1">First Name</label>
          <input
            type="firstname"
            name="firstname"
            className="form-control my-2"
            id="exampleInputName1"
            value={credential.firstname}
            onChange={onChange}
            minLength={3} required
            aria-describedby="nameHelp"
            placeholder="Enter first name"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputName2">Last Name</label>
          <input
            type="lastname"
            name="lastname"
            className="form-control my-2"
            id="exampleInputName2"
            value={credential.lastname}
            onChange={onChange}
            minLength={3} required
            aria-describedby="name2Help"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control my-2"
            id="exampleInputEmail1"
            value={credential.email}
            onChange={onChange}
            minLength={5} required
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
            minLength={5} required
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputPassword2">Confirm Password</label>
          <input
            type="cpassword"
            name="cpassword"
            className="form-control my-2"
            value={credential.cpassword}
            onChange={onChange}
            minLength={5} required
            id="exampleInputcPassword2"
            placeholder="Confirm Password"
          />
        </div>
       
        <button type="submit" className="btn btn-primary my-2" >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup
