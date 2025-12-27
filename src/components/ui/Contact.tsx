import { SignInButton } from "./SignInButton"
import { useState, useEffect } from "react"
import { auth } from "@/firebase"
import { onAuthStateChanged, type User } from "firebase/auth"
import { Form } from "./Form"

function Contact() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div className="flex justify-center p-10">Loading...</div>;

  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-italic mb-4">Contact Me</h1>
        {!user ? (
        <>
          <SignInButton user={user}/>
          <div>
            <h3 className="text-2xl mb-2 mt-4">Why Sign In?</h3>
            <p className="blurb max-w-lg mb-6">
              Signing in is a form of verification that helps me ensure that the messages I receive are from genuine users.This helps me manage and respond to inquiries more effectively.
            </p>
          </div>
        </>
      ) : (
        <div className="w-full max-w-md">
          <p className="mb-4 mt-2 text-sm">Signed in as {user?.email}</p>
          <div className="mt-2 mb-4">
             <SignInButton user={user}/>
          </div>
          <Form userEmail={user.email!} />
        </div>
      )}
      </div>
    </>
  )
}

export default Contact