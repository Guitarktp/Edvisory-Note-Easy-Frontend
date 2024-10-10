"use client"

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import axiosInstance from "@/lib/axiosInstance";
import React, { useState, useEffect } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(true);

    const handleLogin = async (e) => {
        e.preventDefault();
    
        if (!email) {
          setError("Please enter your email");
          return;
        }
    
        // if (!validateEmail(email)) {
        //   setError("Please enter a valid email address (ex.@).");
        //   return;
        // }
    
        if (!password) {
          setError("Please enter your password");
          return;
        }
    
        setError("");
    
        try {
          const response = await axiosInstance.post("/users/login", {
            email: email,
            password: password
          });
    
          if (response.data && response.data.accessToken) {
            localStorage.setItem("token", response.data.accessToken);
            alert("Login Success")
            // Swal.fire({
            //   title: "Login Success",
            //   text: "Click ok button to continue.",
            //   icon: "success",
            //   confirmButtonText: "Continue",
            // });
            // navigate("/");  
            window.location.reload();
          }
        } catch (error) {
          if (error) {
            setError("Invalid email or password. Please try again");
            return;
          }     
        }
      }
      const handleHidePassword = (e) => {
        e.preventDefault();
        setIsShowPassword(!isShowPassword);
      }

    return (
        <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Welcome Back!</h4>
  
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
            <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
              <input
                type={isShowPassword ? "Password": "text"}
                placeholder="Password"
                className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isShowPassword ? (<FaRegEye 
                className="cursor-pointer text-blue-500"
                onClick={handleHidePassword}
              />):(<FaRegEyeSlash
                className="cursor-pointer text-slate-500"
                onClick={handleHidePassword}
              />)}
              
            </div>
  
            
  
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            {error && errorResponse()}
  
            <button type="submit" className="btn-primary">
              Login
            </button>
  
            <p className="text-sm text-center mt-4">
              Not registered yet?{" "}
              <Link href="/register" className="font-medium text-primary underline">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>

    )
}

export default Login