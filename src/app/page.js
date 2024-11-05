"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  getUsers,
  saveUser,
  setLoggedInUser,
  initializeUsers,
} from "../app/utils/localStorage";
import RegistrationForm from "./form/customerRegistrationForm";

export default function Home() {
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Initialize users when the component mounts
    initializeUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = getUsers();

    // Check if the user is already registered
    const registeredUser = users.find((user) => user.email === email);

    if (registeredUser) {
      // User exists, check location
      if (registeredUser.location === location) {
        // Store logged-in user email in local storage
        setLoggedInUser(email);
        // Redirect to face recognition page
        router.push("/face-recognition");
      } else {
        setMessage("Location mismatch. Please try again.");
      }
    } else {
      // Register new user
      saveUser(email, location);
      setMessage("Registration successful! Please log in.");
    }
  };

  return (
    // <div>
    //     <h1>User Registration/Login</h1>
    //     <form onSubmit={handleSubmit}>
    //         <input
    //             type="email"
    //             placeholder="Enter your email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             required
    //         />
    //         <input
    //             type="text"
    //             placeholder="Enter your location"
    //             value={location}
    //             onChange={(e) => setLocation(e.target.value)}
    //             required
    //         />
    //         <button type="submit">Submit</button>
    //     </form>
    //     {message && <p>{message}</p>}
    // </div>
    <RegistrationForm />
  );
}
