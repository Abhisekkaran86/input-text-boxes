import React, { useState } from "react";
import styles from "./styles";
import googleLogo from "../Div/logo/googleLogo.svg";
import appleLogo from "../Div/logo/appleLogo.svg";
import { validateCredentials, handleGoogleSignIn, handleAppleSignIn, handleEmailSignIn } from "./authFunctions";
import Google from "./google";

const SocialSignIn = ({  onAppleSignIn }) => {
  return (
    <div className={styles.socialContainer}>
      {/* <button
                type="button"
                onClick={handleGoogleSignIn}
                className={styles.socialButton}
            
                <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2" />
                Sign in with Google
            </button>
  */}
  <Google/>
      <button type="button" onClick={onAppleSignIn} className={styles.socialButton}>
        <img src={appleLogo} alt="Apple" className="w-5 h-5 mr-2" />
        Sign in with Apple
      </button>
    </div>
  );
};

const EmailSignIn = ({ onEmailSignIn, onForgotPassword, onSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { errors, validate } = validateCredentials(email, password);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    if (validate()) {
      onEmailSignIn(email, password);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Sign In</h2>
      <p className={styles.subtext}>Your Social Campaigns</p>

      <SocialSignIn onGoogleSignIn={handleGoogleSignIn} onAppleSignIn={handleAppleSignIn} />

      <div className={styles.dividerContainer}>
        <div className={styles.divider}></div>
        <span className={styles.subtext}>Or sign in with email</span>
        <div className={styles.divider}></div>
      </div>

      <input
        type="email"
        placeholder="Email"
        className={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {errors.email && <p className={styles.error}>{errors.email}</p>}

      <input
        type="password"
        placeholder="Password"
        className={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {errors.password && <p className={styles.error}>{errors.password}</p>}

      <div className={styles.forgotPasswordContainer}>
        <button type="button" onClick={onForgotPassword} className={styles.signUpButton}>
          Forgot Password?
        </button>
      </div>

      <button type="submit" className={styles.signInButton}>
        Sign In
      </button>

      <p className={styles.signUpText}>
        Not a Member yet?{" "}
        <button type="button" onClick={onSignUp} className={styles.signUpButton}>
          Sign up
        </button>
      </p>
    </form>
  );
};

const SignIn = ({ onEmailSignIn, onGoogleSignIn, onAppleSignIn, onForgotPassword, onSignUp }) => {
  return (
    <div className={styles.container}>
      <EmailSignIn onEmailSignIn={handleEmailSignIn} onForgotPassword={onForgotPassword} onSignUp={onSignUp} />
    </div>
  );
};

export default SignIn;
