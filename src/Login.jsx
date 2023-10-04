import React, { useEffect, useRef, useState } from 'react';


const Login = () => {

// let userRef = useRef();
// let errRef = useRef();

// let [user,setUser]= useState('');
// let [pwd,setPwd]= useState('');
// let [errMsg,seterrMsg]= useState('');
// let [success,setSuccess]= useState(false);
  
// useEffect(()=>{
//   userRef.current.focus();
// },[]);
  
// useEffect(()=>{
//   seterrMsg('')
// },[user,pwd]);                               


// let hindleSubmit =  (e)=>{
//   e.preventDefault();

//     setSuccess(true);

// }


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
