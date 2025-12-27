"use client";

import { auth, googleProvider } from "@/firebase";
import { signInWithPopup, signOut, type User } from "firebase/auth";
import { Button } from "@/components/ui/button";

export function SignInButton({ user }: { user: User | null }) {
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

  return (
    <Button 
      className="mb-2"
      variant={user ? "destructive" : "default"} 
      onClick={handleAuth}
    >
      {user ? "Logout" : "Sign in with Google"}
    </Button>
  );
}