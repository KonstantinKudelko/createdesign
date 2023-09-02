"use client";

import { useState } from "react";
import { ArrowNavLink } from "./arrow-nav-link";

const ADDRESS_BOOK_ID = 320756;

export const NewsletterForm = () => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const onSubmitForm = async (event) => {
    event.preventDefault();
    setLoading(true);

    const body = new FormData();
    body.append("id", ADDRESS_BOOK_ID);
    body.append(
      "emails",
      JSON.stringify([
        {
          email: event.target.email.value,
        },
      ])
    );
    const response = await fetch(
      `https://api.sendpulse.com/addressbooks/${ADDRESS_BOOK_ID}/emails`,
      {
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.ok) {
      setLoading(false);
      setSuccess(true);
    }
  };

  return (
    <div className="flex flex-col basis-80">
      <span className="mb-6 block text-white uppercase font-light">
        Newsletter
      </span>

      {isSuccess ? (
        <p className="mb-12 text-gray font-light">
          Your email is added to our list!
        </p>
      ) : (
        <p className="mb-12 text-gray font-light">
          Subscribe now - don’t miss our super deals, new magazine issues and
          more.
        </p>
      )}

      {!isSuccess && (
        <form className="flex flex-col" onSubmit={onSubmitForm}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="py-4 mb-8 bg-transparent border-b border-b-gray text-gray"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-between"
          >
            <span className="block mb-4 text-lg text-gray uppercase font-light">
              Subscribe
            </span>

            <ArrowNavLink />
          </button>
        </form>
      )}
    </div>
  );
};
