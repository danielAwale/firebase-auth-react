import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  });

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("user was signed out!!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>
            {`We have a secret word for you ${authUser.email} ! It is FIREBASE`}
          </p>
          <button onClick={signOutUser}>Sign Out</button>
        </>
      ) : (
        <>You do not have access to the secret word!!!</>
      )}
    </div>
  );
};

export default AuthDetails;
