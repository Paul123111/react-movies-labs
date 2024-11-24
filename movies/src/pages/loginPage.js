import { Card } from "@mui/material";
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/authContext";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, app } from "../firebase/firebase";

const LoginPage = (props) => {

  const userLoggedIn = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);

  // const onSubmit = async (e) => {
  //   console.log("submitted");

  //   e.preventDefault();
  //   if(!isSigningIn) {
  //     setIsSigningIn(true);
  //     await doSignInWithEmailAndPassword(email, password);
  //   }
  // };

  const signIn = (e) => {
    e.preventDefault();
    console.log(email + ", " + password);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential);
    // ...
  })
  .catch((error) => {
    console.log(error);
  });
}

  // const defaultValues = {
  //   email:"",
  //   password:""
  // };

  // const {
  //   control,
  //   formState: { errors },
  //   handleSubmit,
  //   reset,
  // } = useForm(defaultValues);

  return (
    <>
      <Card>
        <h1>Login</h1>
        <form onSubmit={signIn}>
          <input
            type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}  value={email} class="input-field"
          ></input>

          <input
            type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password} class="input-field"
          ></input>
        
          <button type="submit" name="submit" class="input-submit" value="sign in">Sign in</button>
        </form>

      </Card>

      
    </>
  );
};
export default LoginPage;