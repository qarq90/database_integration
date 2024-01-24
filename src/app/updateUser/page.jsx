"use client"

import React, { useState } from "react";

export default function Page() {
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const SubmitForm = async () => {
        const options = {
            method: "POST",
            body: JSON.stringify({
                name: userDetails.name,
                email: userDetails.email,
                password: userDetails.password,
                phone: userDetails.phoneNumber,
            }),
        };

        const response = await fetch("http://localhost:3000/api/updateUser", options);
        const data = await response.json();
        console.log(data);
    };

    return (
        <div>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={userDetails.password}
                onChange={handleChange}
            />
            <label htmlFor="password">Phone Number</label>
            <input
                type="phoneNumber"
                id="phoneNumber"
                name="phoneNumber"
                value={userDetails.phoneNumber}
                onChange={handleChange}
            />
            <button type="submit" onClick={SubmitForm}>
                Sign Up
            </button>
        </div>
    );
}
