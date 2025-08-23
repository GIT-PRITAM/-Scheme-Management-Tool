import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // If you want to call API or do authentication here
        if (onLogin) onLogin(formData);

        console.log("Login Data:", formData);

        // After login, navigate to dashboard
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-full max-w-md shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

                    {/* Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className="input input-bordered"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-4">
                        <button className="btn btn-primary">Login</button>
                    </div>

                    {/* Signup Link */}
                    <p className="text-center text-sm mt-2">
                        Don't have an account?{" "}
                        <a href="/" className="link link-primary">
                            Sign up here
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
