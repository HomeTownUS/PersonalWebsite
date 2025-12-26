"use client";

import { useState, useEffect } from "react";
import { auth, googleProvider } from "@/firebase";
import { signInWithPopup, signOut, onAuthStateChanged, type User } from "firebase/auth";
import { Button } from "@/components/ui/button";

export function SignInButton() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // 1. Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const handleAuth = async () => {
    if (user) {
      // Logic for Logout
      try {
        await signOut(auth);
        console.log("Signed out successfully");
      } catch (error) {
        console.error("Logout error", error);
      }
    } else {
      // Logic for Login
      try {
        await signInWithPopup(auth, googleProvider);
      } catch (error) {
        console.error("Login error", error);
      }
    }
  };

  if (loading) return <Button disabled>Loading...</Button>;

  return (
    <Button 
      variant={user ? "destructive" : "default"} 
      onClick={handleAuth}
    >
      {user ? "Logout" : "Sign in with Google"}
    </Button>
  );
}