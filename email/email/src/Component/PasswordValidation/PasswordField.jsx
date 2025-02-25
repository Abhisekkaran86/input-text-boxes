import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SPKBaseInputBox from '../SpkInput/InputBox';

function PasswordInput({ name = "password", value = "", onChange = () => {}, onErrorChange = () => {}, className }) {
    const [password, setPassword] = useState(value);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const validatePassword = (password) => {
        if (!password) return "Password is required";
        if (password.length < 8) return "Password must be at least 8 characters";
        if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter";
        if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter";
        if (!/[0-9]/.test(password)) return "Password must contain at least one number";
        if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) return "Password must contain at least one special character";
        return "";
    };

    const handleChange = (e) => {
        const { value } = e.target;
        const errorMsg = validatePassword(value);
        
        setPassword(value);
        setError(errorMsg);

        // ✅ Only trigger onChange when password is valid
        if (!errorMsg) {
            const passwordObject = { name, value };
            onChange(passwordObject);
        }
    };

    const handleBlur = () => {
        // ✅ Log when clicking anywhere outside and password is valid
        if (!error) {
            console.log({ name, value: password });
        }
    };

    useEffect(() => {
        onErrorChange({ target: { name, value: error } });
    }, [error]);

    useEffect(() => {
        setPassword(value);
    }, [value]);

    return (
        <div className='flex flex-nowrap border justify-center items-center w-full p-1' >
            <SPKBaseInputBox 
                type={showPassword ? "text" : "password"} 
                name={name} 
                value={password} 
                onChange={handleChange} 
                onBlur={handleBlur} // ✅ Logs when clicking anywhere outside
                className={`${className} outline-0 focus:outline-0   w-full `} 
                error={error}
                placeholder="Enter your password"
            />
            <span 
                className={className} 
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? <FaEyeSlash className=' w-full' /> : <FaEye />}
            </span>
            {error &&{error}}
        </div>
    );
}

export default PasswordInput;
