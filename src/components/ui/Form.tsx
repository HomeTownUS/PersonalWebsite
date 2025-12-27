"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {setDoc, doc, collection} from "firebase/firestore";
import {db} from "@/firebase";

interface FormProps {
    userEmail: string | null;
}

export function Form({ userEmail }: FormProps) {
  const [name, setName] = useState("");
  const [contactEmail, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async () => {
    if (!userEmail) {
      console.error("User email is null. Cannot submit form.");
      return;
    }
    try {
      await setDoc(doc(collection(db, "Contacts","Messages",userEmail)), {name: name, email: contactEmail, message: message, timestamp: new Date()});
      // Clear form fields after submission confirmation
      console.log("Document written successfully");
      setName("");
      setEmail("");
      setMessage("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
    <Input className="mb-2" type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"></Input>
    <Input className="mb-2" type="email" value={contactEmail} onChange={(e) => setEmail(e.target.value)} placeholder="Contact Email"></Input>
    <Input className="mb-2" type="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message"></Input>
    <Button 
      className="mt-2"
      variant="default"
      onClick={submitForm}
      disabled={name === "" || contactEmail === "" || message === ""}>
      Submit
    </Button>
    </div>
  );
}
