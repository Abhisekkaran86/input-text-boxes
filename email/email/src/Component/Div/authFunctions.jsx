


export const validateCredentials = (email, password) => {
    let errors = {};

    if (!email) {
        errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Invalid email format";
    }

    if (!password) {
        errors.password = "Password is required";
    } else if (password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
    }

    return {
        errors,
        validate: () => Object.keys(errors).length === 0,
    };
};
export const handleGoogleSignIn = () => {
    console.log("Google Sign-In Clicked!");  // Debugging Log
    return signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log("Google User:", result.user);
            // You can redirect the user or save user data here
            // For example, redirect to a dashboard
            window.location.href = '/dashboard'; // Example redirect
        })
        .catch((error) => {
            console.error("Google Sign-In Error:", error.message);
            // Handle the error (e.g., show a notification)
        });
};


export const handleAppleSignIn = () => {
    alert("no function")
    // console.log("Apple Sign In Clicked");
};

export const handleEmailSignIn = (email, password) => {
    //console.log("Email Sign In Attempted");
    console.log("Email:", email);
    console.log("Password:", password);
};
