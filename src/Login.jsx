// Login.js
import React, { useContext, useEffect, useRef, useState } from 'react';
import AuthContext from './AuthContext';
import axios from 'axios'; 

let LOGIN_URL = '/auth';
const Login = () => {

let {setAuth} = useContext(AuthContext); 
let userRef = useRef();
let errRef = useRef();

let [user,setUser]= useState('');
let [pwd,setPwd]= useState('');
let [errMsg,seterrMsg]= useState('');
let [success,setSuccess]= useState(false);
  
useEffect(()=>{
  userRef.current.focus();
},[]);
  
useEffect(()=>{
  seterrMsg('')
},[user,pwd]);                               


let hindleSubmit = async (e)=>{
  e.preventDefault();

  try {
let resposne = await axios.post(LOGIN_URL,
  JSON.stringify({user,pwd}),
  {
    headers:{ 'Content-Typr': 'applications/json'},
    withCredentials:true

  });
  let accessToken = resposne?.data?.accessToken;
  let roules = resposne?.data?.roles;
    setAuth({user,pwd});
    setUser('');
    setPwd('');
    setSuccess(true);
  } catch(err) {
if(!err.resposne){
seterrMsg("NO Server Response");

} else if(err.resposne?.status === 400){
  seterrMsg("Unothrized");

} else {
  seterrMsg("Login Faild");
}



  }

}


return (
  <>
  { success ? (
<section>
  <h1> You are logged in!</h1>
  <br/>
  <p><a href='#'>Go to Home</a></p>

</section>) : (

<section>
<p ref={errRef} className={ errMsg ? "errmsg" : "offscreen"}>
{errMsg}
</p>
<h1>Sign In</h1>
<form onSubmit={hindleSubmit}>
<label>Username</label>
<input type='text' id='username' 
ref={userRef} 
onChange={(e) => setUser(e.target.value)}
value={user} required />

<label>Password</label>
<input type='password' id='password' 
onChange={(e) => setPwd(e.target.value)}
value={[pwd]} required />
<button>Sign In</button>
<p>
  Need an Account? <br/>
  <span>
    <a href='#'>Sign Up</a>
  </span>
</p>
</form>
</section>
  )}
  </>
  );
};

export default Login;
