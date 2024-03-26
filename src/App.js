import React from "react";
import { getAuth, signInWithPopup, OAuthProvider } from "firebase/auth";
function App() {
  const auth = getAuth();
  const provider = new OAuthProvider("apple.com");
  const handleSignInWithApple = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        // Apple credential
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;
        console.log(user, "user====>");
        console.log(accessToken, "accessToken====>");
        console.log(idToken, "idToken====>");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The credential that was used.
        const credential = OAuthProvider.credentialFromError(error);
        console.log(error, "error====>");
        console.log(errorCode, "errorCode====>");
        console.log(errorMessage, "errorMessage====>");
        console.log(email, "email====>");
        console.log(credential, "credential====>");
      });
  };
  return (
    <div>
      <button onClick={() => handleSignInWithApple()}>
        Sign In With Apple
      </button>
    </div>
  );
}
export default App;
