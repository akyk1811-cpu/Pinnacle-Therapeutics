"use client";

import { FormEvent, useState } from "react";

const focusAreas = [
  ["01", "Cardiometabolic care", "Placeholder for your therapeutic focus and scientific approach."],
  ["02", "Gastroenterology", "Placeholder for portfolio, pipeline, or patient-care narrative."],
  ["03", "Respiratory health", "Placeholder for a clinically reviewed area of expertise."],
  ["04", "Everyday wellness", "Placeholder for responsible consumer-health offerings."]
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState("");

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Sending…");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", { method: "POST", body: JSON.stringify(Object.fromEntries(form)), headers: { "Content-Type": "application/json" } });
    setStatus(response.ok ? "Thank you. Your message has been received." : "We could not send your message. Please try again later.");
    if (response.ok) event.currentTarget.reset();
  }

  return <main>
    <header className="nav"><a className="brand" href="#top" aria-label="Pinnacle Therapeutics home"><span className="mark">P</span><span>PINNACLE<br/><em>THERAPEUTICS</em></span></a><button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="navigation">Menu</button><nav id="navigation" className={menuOpen ? "open" : ""}><a href="#about">About</a><a href="#focus">Focus areas</a><a href="#products">Products</a><a href="#contact" className="nav-cta">Contact us</a></nav></header>

    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">Pinnacle Therapeutics · coming soon</p><h1>Progress, made <i>personal.</i></h1><p className="lede">We are building a pharmaceutical company grounded in rigorous science, responsible partnerships, and a simple belief: better health should move closer to everyone.</p><a className="button" href="#about">Discover our story <span>→</span></a></div><div className="hero-art" aria-hidden="true"><div className="orb orb-a"/><div className="orb orb-b"/><div className="orb orb-c"/><p>SCIENCE<br/>WITH<br/>PURPOSE</p></div></section>

    <section className="statement" id="about"><p className="eyebrow">Our foundation</p><h2>We pair scientific curiosity with the care to do things properly.</h2><p>Company vision, mission, history, leadership, manufacturing capabilities, and certifications will be added here following internal and regulatory review.</p></section>

    <section className="focus" id="focus"><div><p className="eyebrow">Where we focus</p><h2>Care that meets real life.</h2></div><div className="focus-grid">{focusAreas.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><a href="#contact" aria-label={`Enquire about ${title}`}>Explore <b>↗</b></a></article>)}</div></section>

    <section className="products" id="products"><div><p className="eyebrow">Our portfolio</p><h2>Built with intent. Shared with care.</h2><p>Product information will appear here only after the relevant approvals, medical review, and country-specific compliance checks are complete.</p><a href="#contact" className="text-link">Connect with our team →</a></div><div className="product-card"><span>PINNACLE / 01</span><div className="capsule"/><p>Product catalogue<br/><strong>Coming soon</strong></p></div></section>

    <section className="contact" id="contact"><div><p className="eyebrow">Get in touch</p><h2>Let’s begin a thoughtful conversation.</h2><p>For business, careers, and general enquiries. Medical information and adverse-event contact channels will be added before launch.</p></div><form onSubmit={submitForm}><label>Full name<input required name="name" autoComplete="name" maxLength={100}/></label><label>Work email<input required name="email" type="email" autoComplete="email" maxLength={254}/></label><label>Message<textarea required name="message" rows={4} maxLength={2000}/></label><input className="trap" name="companyWebsite" tabIndex={-1} autoComplete="off" aria-hidden="true"/><button className="button" type="submit">Send enquiry <span>→</span></button><p className="form-status" aria-live="polite">{status}</p></form></section>

    <footer><a className="brand" href="#top"><span className="mark">P</span><span>PINNACLE<br/><em>THERAPEUTICS</em></span></a><p>© {new Date().getFullYear()} Pinnacle Therapeutics. All rights reserved.</p><div><a href="#">Privacy</a><a href="#">Terms</a></div></footer>
  </main>;
}
