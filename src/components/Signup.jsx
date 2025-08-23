import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = ({ onSignup }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple password match validation
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Pass data to parent or API
        if (onSignup) onSignup(formData);

        console.log("Signup Data:", formData);

        navigate("/dashboard");

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-full max-w-md shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>

                    {/* Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

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

                    {/* Confirm Password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            className="input input-bordered"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-4">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>

                    {/* Login Link */}
                    <p className="text-center text-sm mt-2">
                        Already have an account?{" "}
                        <a href="/login" className="link link-primary">
                            Login here
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
