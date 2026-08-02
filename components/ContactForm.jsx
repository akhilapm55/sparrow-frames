"use client";

import { useEffect, useState } from "react";
import {
  STARTING_RATES,
  EVENT_PACKAGES,
  COMBO_PACKAGES,
  findPackage,
} from "@/data/packages";
import { openWhatsApp } from "@/data/studio";

const OTHER_SERVICES = [
  "Custom Framing",
  "Photo Restoration",
  "Something else",
];

// Package ids used by links that don't map to a package in the rate card.
const EXTRA_SERVICE_IDS = { restoration: "Photo Restoration" };

export default function ContactForm() {
  const [service, setService] = useState(EVENT_PACKAGES[0].name);

  // The package cards link here as /contact?package=<id>. Read it on mount so
  // the enquiry arrives already naming the package the visitor clicked.
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("package");
    if (!id) return;
    const preset = findPackage(id)?.name || EXTRA_SERVICE_IDS[id];
    if (preset) setService(preset);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    openWhatsApp([
      `Hello Sparrow Frames, I would like to enquire about ${data.get("service")}.`,
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      data.get("email") && `Email: ${data.get("email")}`,
      `Enquiry for: ${data.get("service")}`,
      data.get("date") && `Preferred date: ${data.get("date")}`,
      data.get("message") && `\n${data.get("message")}`,
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field-row">
        <label className="field">
          <span>Your name *</span>
          <input type="text" name="name" required />
        </label>
        <label className="field">
          <span>Phone *</span>
          <input type="tel" name="phone" required />
        </label>
      </div>

      {/* Optional — the reply comes back on WhatsApp, so an address is only
          useful for sending galleries and invoices later. */}
      <label className="field">
        <span>Email</span>
        <input type="email" name="email" />
      </label>

      <div className="field-row">
        <label className="field">
          <span>What do you need?</span>
          <select
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <optgroup label="Starting rates">
              {STARTING_RATES.map((rate) => (
                <option key={rate.id}>{rate.name}</option>
              ))}
            </optgroup>
            <optgroup label="Single events">
              {EVENT_PACKAGES.map((pkg) => (
                <option key={pkg.id}>{pkg.name}</option>
              ))}
            </optgroup>
            <optgroup label="Combos">
              {COMBO_PACKAGES.map((pkg) => (
                <option key={pkg.id}>{pkg.name}</option>
              ))}
            </optgroup>
            <optgroup label="Framing & other">
              {OTHER_SERVICES.map((name) => (
                <option key={name}>{name}</option>
              ))}
            </optgroup>
          </select>
        </label>
        <label className="field">
          <span>Preferred date</span>
          <input type="date" name="date" />
        </label>
      </div>

      <label className="field">
        <span>Tell us about the shoot</span>
        <textarea
          name="message"
          placeholder="Venue, number of events, dates, anything specific you want captured…"
        ></textarea>
      </label>

      <button className="btn" type="submit">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.2-5.2A8.5 8.5 0 1 1 21 11.5z" />
        </svg>
        Send on WhatsApp
      </button>
      <p className="form-note">
        This opens WhatsApp with your enquiry already written out — nothing is
        sent until you press send there. We reply within one working day,
        including Saturdays.
      </p>
    </form>
  );
}
