import { SignInButton } from "./SignInButton"
import { useState, useEffect } from "react"
import { auth, db } from "@/firebase"
import { onAuthStateChanged, type User } from "firebase/auth"
import { collection, onSnapshot, query } from "firebase/firestore"
import { Form } from "./Form"

function Contact() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<Array<any>>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user?.email === "awr7648@gmail.com") {
      const q = query(collection(db, "Messages"));
      const unsubscribeMessages = onSnapshot(q, (snapshot) => {
        const messagesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMessages(messagesData);
      });
      return () => unsubscribeMessages();
    }
  }, [user]);

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
      ) : user.email === "awr7648@gmail.com" ? (
        <div className="w-full">
          <p className="mb-4 mt-2 text-sm">Welcome admin {user?.email}</p>
            <div className="mt-2 mb-4">
                <SignInButton user={user}/>
            </div>
            <h2 className="text-2xl mb-4">Submitted Messages</h2>
            {messages.length === 0 ? (
              <p>No messages submitted yet.</p>
            ) : (
              <ul className="space-y-2 w-[75vw] mx-auto">
                {messages.map((message) => (
                  <li key={message.id} className="border p-2 rounded w-full text-left">
                    <p><strong>Name:</strong> {message.name}</p>
                    <p><strong> Email:</strong> {message.userEmail}</p>
                    <p><strong>Contact Email:</strong> {message.contactEmail}</p>
                    <p><strong>Message:</strong> {message.message}</p>
                  </li>
                ))}
              </ul>
            )}
        </div>
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