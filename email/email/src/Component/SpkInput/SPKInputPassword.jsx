import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SPKBaseInputBox from "./InputBox";

const SPKInputPassword = ({ 
  className, 
  value = "", 
  onChange, 
  onBlur, 
  placeholder, 
  required = false 
}) => {
  const [password, setPassword] = useState(value);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (required && !password) {
      setError("Password is required");
    } else {
      setError("");
    }
  }, [required, password]);

  // Password validation function
  const validatePassword = (password) => {
    if (!password) return required ? "Password is required" : "";
    if (password.length < 8) return "Password must be at least 8 characters";
    if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter";
    if (!/[0-9]/.test(password)) return "Password must contain at least one number";
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) return "Password must contain at least one special character";
    return "";
  };

  // Handle input change
  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (onChange) onChange(e);
    setError(validatePassword(newPassword));
  };

  // Handle blur event
  const handleBlur = (e) => {
    setTouched(true);
    setError(validatePassword(password));
    if (onBlur) onBlur(e);
  };

  return (
    <div className="relative w-full">
      <SPKBaseInputBox
        type={showPassword ? "text" : "password"}
        name="password"
        value={password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error}
        placeholder={placeholder}
        className={`border w-full ${className}`}
      />
      <span 
        onClick={() => setShowPassword(!showPassword)} 
        className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
  );
};

export default SPKInputPassword;
