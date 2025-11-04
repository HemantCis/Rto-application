// components/ForgotPassword.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}api/auth/forgot-password`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        });
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response?.data?.message, {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="text-[#4b599b] px-6 pt-8">
          <h2 className="text-3xl font-bold text-center">Forgot Password</h2>
          <p className="text-gray-600 text-center mt-2 text-sm">
            {isSubmitted
              ? "Check your email for reset instructions"
              : "Enter your email to reset your password"}
          </p>
        </div>

        {/* Form */}
        <div className="px-6 py-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4b599b] focus:border-[#4b599b] transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              {/* Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  We'll send you a link to reset your password. Please check
                  your inbox and spam folder.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#4b599b] cursor-pointer text-white py-3 px-4 rounded-lg hover:bg-blue-900 focus:ring-2 focus:ring-[#4b599b] focus:ring-offset-2 transition-colors font-medium"
              >
                Send Reset Link
              </button>

              {/* Back to Login Link */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Remember your password?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-[#4b599b] hover:text-[#4b599b]"
                  >
                    Back to Login
                  </Link>
                </p>
              </div>
            </form>
          ) : (
            /* Success Message */
            <div className="space-y-6 text-center">
              {/* Success Icon */}
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Success Message */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Check Your Email
                </h3>
                <p className="text-sm text-gray-600">
                  We've sent a password reset link to{" "}
                  <strong>{formData.email}</strong>. The link will expire in 1
                  hour.
                </p>
              </div>

              {/* Didn't Receive Email */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">
                  Didn't receive the email?
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm font-medium text-[#4b599b] hover:text-[#4b599b] underline"
                >
                  Click here to try again
                </button>
              </div>

              {/* Back to Login Button */}
              <Link
                href="/login"
                className="block w-full bg-[#4b599b] cursor-pointer text-white py-3 px-4 rounded-lg hover:bg-blue-900 focus:ring-2 focus:ring-[#4b599b] focus:ring-offset-2 transition-colors font-medium text-center"
              >
                Back to Login
              </Link>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
