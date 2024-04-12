import React, { useEffect, useState } from "react";
import { auth, provider, provider2 } from "./config";
import { signInWithPopup } from 'firebase/auth';
import SearchJob from "../components/Jobi";

function SignIn() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
      const email = localStorage.getItem('email');
      setIsLoggedIn(!!email);
   }, []);

   const handleGoogleSignIn = () => {
      signInWithPopup(auth, provider).then((data) => {
         localStorage.setItem('email', data.user.email);
         setIsLoggedIn(true);
      });
   }

   const handleGitHubSignIn = () => {
      signInWithPopup(auth, provider2).then((data) => {
         localStorage.setItem('email', data.user.email);
         setIsLoggedIn(true);
      });
   }

   return (
      <>
         {isLoggedIn ? (
            <div className="full-width-container">
               <SearchJob />
            </div>
         ) : (
            <div className="two">
               <h5>----------OR---------</h5>
               <h5>Sign in with:</h5>
               <button onClick={handleGoogleSignIn} style={{ width: '80%', marginLeft: '30px' }}>Google <img src='images/googleicon.jpg' alt='' height={'20px'} /></button>
               <button onClick={handleGitHubSignIn} style={{ width: '80%', marginLeft: '30px', marginTop: '10px' }}>GitHub <img src='images/github.png' alt='' height={'20px'} /></button>
            </div>
         )}
      </>
   );
}

export default SignIn;
