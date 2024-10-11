"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import axiosInstance from "@/lib/axiosInstance";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your Username");
      return;
    }

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

    if (!confirmPassword) {
      setError("Please enter confirm password");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post("/users/register", {
        userName: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });

      // Handle successful registration response
      if (response.data && response.data.error) {
        setError(response.data.message);
        return;
      }

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        alert("success");
        router.push("/")
        setTimeout(() => {
          window.location.reload();
        }, 50);
      }
    } catch (error) {
      // Handle login error
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  const handleHidePassword = (e) => {
    e.preventDefault();
    setIsShowPassword(!isShowPassword);
  };

  const handleHideConfirmPassword = (e) => {
    e.preventDefault();
    setIsShowConfirmPassword(!isShowConfirmPassword);
  };

  return (
    <div className="flex items-center justify-center mt-28">
      <div className="w-96 border rounded bg-white px-7 py-10">
        <form onSubmit={handleSignUp}>
          <h4 className="text-2xl mb-7">Create Your Account</h4>

          <input
            type="text"
            placeholder="Username"
            className="input-box"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
            <input
              type={isShowPassword ? "Password" : "text"}
              placeholder="Password"
              className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isShowPassword ? (
              <FaRegEye
                className="cursor-pointer text-blue-500"
                onClick={handleHidePassword}
              />
            ) : (
              <FaRegEyeSlash
                className="cursor-pointer text-slate-500"
                onClick={handleHidePassword}
              />
            )}
          </div>

          <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
            <input
              type={isShowConfirmPassword ? "Password" : "text"}
              placeholder="Confirm Password"
              className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {isShowConfirmPassword ? (
              <FaRegEye
                className="cursor-pointer text-blue-500"
                onClick={handleHideConfirmPassword}
              />
            ) : (
              <FaRegEyeSlash
                className="cursor-pointer text-slate-500"
                onClick={handleHideConfirmPassword}
              />
            )}
          </div>

          {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
          {error && errorResponse()}

          <button type="submit" className="btn-primary">
            Create Account
          </button>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-primary underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;