"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");
  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("Sending…");
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/contact", { method: "POST", body: JSON.stringify(Object.fromEntries(form)), headers: { "Content-Type": "application/json" } });
      setStatus(response.ok ? "Thank you. Your message has been received." : "We could not send your message. Please try again later.");
      if (response.ok) event.currentTarget.reset();
    } catch { setStatus("We could not send your message. Please try again later."); }
  }
  return <form onSubmit={submitForm}><label>Full name<input required name="name" autoComplete="name" maxLength={100}/></label><label>Work email<input required name="email" type="email" autoComplete="email" maxLength={254}/></label><label>Message<textarea required name="message" rows={4} maxLength={2000}/></label><input className="trap" name="companyWebsite" tabIndex={-1} autoComplete="off" aria-hidden="true"/><button className="button" type="submit">Send enquiry <span>→</span></button><p className="form-status" aria-live="polite">{status}</p></form>;
}
