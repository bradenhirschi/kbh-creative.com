"use client";

import { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async () => {
    const res = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, userEmail, message }),
    });

    console.log(res);
  };

  return (
    <div className="h-full w-full p-4 grid grid-cols-2 gap-4">
      <div>
        <label
          htmlFor="first-name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          First Name
        </label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          placeholder="First Name"
          className="w-full border rounded py-2 px-3"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="last-name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Last Name
        </label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          placeholder="Last Name"
          className="w-full border rounded py-2 px-3"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="col-span-2">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          className="w-full border rounded py-2 px-3"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <div className="col-span-2">
        <label
          htmlFor="message"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          className="w-full border rounded py-2 px-3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div />
      <button onClick={handleSubmit} className="btn">
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
