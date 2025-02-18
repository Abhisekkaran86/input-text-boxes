import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import styles from './styles'; // Ensure this file exists and exports `socialButton`

const Google = () => {
    return (
        <GoogleLogin
            className={styles.socialButton} // Ensure styles.socialButton is properly defined in your CSS/JS module
            onSuccess={(credentialResponse) => {
                console.log(credentialResponse); // Handle the successful login response
            }}
            onError={() => {
                console.log('Login Failed'); // Handle errors if login fails
            }}
        />
    );
};

export default Google;
