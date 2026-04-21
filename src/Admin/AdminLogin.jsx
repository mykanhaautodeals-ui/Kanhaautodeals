// FULL PREMIUM AdminLogin.jsx UI
// Replace complete AdminLogin.jsx with this

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const attempts =
      Number(localStorage.getItem("loginAttempts")) || 0;

    const blockedUntil =
      localStorage.getItem("blockedUntil");

    if (
      blockedUntil &&
      Date.now() < Number(blockedUntil)
    ) {
      setError(
        "Blocked for 5 minutes. Try later."
      );
      return;
    }

    if (
      userId === "admin@kanha" &&
      password === "Kanha@123"
    ) {
      localStorage.setItem(
        "kanhaAdmin",
        "true"
      );

      localStorage.setItem(
        "loginTime",
        Date.now()
      );

      localStorage.removeItem(
        "loginAttempts"
      );

      localStorage.removeItem(
        "blockedUntil"
      );

      navigate(
        "/api/kanha/dashboard/google/panel"
      );
    } else {
      const newAttempts =
        attempts + 1;

      localStorage.setItem(
        "loginAttempts",
        newAttempts
      );

      if (
        newAttempts >= 3
      ) {
        localStorage.setItem(
          "blockedUntil",
          Date.now() +
            5 *
              60 *
              1000
        );

        setError(
          "Too many attempts. Blocked for 5 min."
        );
      } else {
        setError(
          `Invalid Login (${3 - newAttempts} attempts left)`
        );
      }
    }
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-black via-gray-950 to-blue-950 flex justify-center items-center px-4 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute w-72 h-72 bg-green-500 blur-[120px] opacity-20 rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500 blur-[120px] opacity-20 rounded-full bottom-10 right-10"></div>

      {/* Card */}
      <div className="relative z-10 w-full mb-20 mt-30 max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[30px] shadow-2xl p-8">

        {/* Logo */}
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl">
            <span className="text-3xl">🔐</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-black text-white text-center">
          Admin Login
        </h1>

        <p className="text-center text-gray-300 mt-2 mb-8">
          Kanha Auto Deals Secure Dashboard
        </p>

        {/* Error */}
        {error && (
          <div className="bg-red-500/20 border border-red-400 text-red-200 text-center py-3 px-4 rounded-2xl mb-5">
            {error}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <input
            type="text"
            placeholder="👤 User ID"
            value={userId}
            onChange={(e) =>
              setUserId(
                e.target.value
              )
            }
            className="w-full h-14 px-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <input
            type="password"
            placeholder="🔑 Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full h-14 px-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <button
            type="submit"
            className="w-full h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-700 text-white font-bold text-xl hover:scale-105 transition shadow-2xl"
          >
            Login →
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Protected Access • Authorized Only
        </p>

      </div>
    </div>
  );
};

export default AdminLogin;