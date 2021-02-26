import React, { useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'
// import { render } from "@testing-library/react";

class Login extends React.Component {


  state = {
    credentials: {
      username: "",
      password: "",
    },
    error: "",
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
      error: "",
    });
  };

  login = (e) => {
    e.preventDefualt();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        this.props.history.push("/protected");
        // console.log(res)
      })
      .catch((err) => this.setState({ error: err.response.data.error }));
  }

  // useEffect(() => {
  //   getData();
  // });

  render() {
    return (
      <StyledLogih>
        <h1>
          Welcome to the Bubble App!
          
        <p>Build a login page here</p>
        </h1>
        <div>
          <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <p style={{ color: `red`, fontSize: "14px" }}> {this.state.error} </p>
            <button>Log in</button>
          </form>
        </div>

      </StyledLogih>
    );
  }

};

export default Login;

const StyledLogih = styled.div`
  display: flex;
  flex-flow: center;
  margin: 0 0 36px;
  padding: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  margin-right: 6px;
  color: #204963;
`

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.