import { onAuthStateChanged } from "firebase/auth";
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
  return (
    <div>
      {authUser ? (
        <>
          {" "}
          {`We have a secret word for you ${authUser.email} ! It is FIREBASE`}
        </>
      ) : (
        <>You do not have access to the secret word!!!</>
      )}
    </div>
  );
};

export default AuthDetails;
