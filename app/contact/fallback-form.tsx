"use client";

import React from 'react';
import LoadingButton from '../../components/LoadingButton';

export default function FallbackForm({ email }: { email: string }) {
  const to = (email || 'growth@elevair.org').trim();

  async function handleSubmit() {
    // Create a promise that resolves after a short delay to simulate processing
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // Get form data from the form element
        const form = document.querySelector('form[data-contact-form]') as HTMLFormElement;
        if (!form) return resolve();
        
        const fd = new FormData(form);
        const name = (fd.get('name') as string) || '';
        const fromEmail = (fd.get('email') as string) || '';
        const phone = (fd.get('phone') as string) || '';
        const company = (fd.get('company') as string) || '';
        const message = (fd.get('message') as string) || '';
        const subject = encodeURIComponent('Consultation request');
        const body = encodeURIComponent(
          `Name: ${name}\nEmail: ${fromEmail}\nPhone: ${phone}\nCompany: ${company}\n\nMessage:\n${message}`
        );
        const href = `mailto:${to}?subject=${subject}&body=${body}`;
        window.location.href = href;
        resolve();
      }, 500);
    });
  }

  return (
    <form data-contact-form className="mt-8 grid grid-cols-1 gap-3">
      <input 
        name="name" 
        placeholder="Name" 
        className="rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent" 
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        className="rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent" 
        required 
      />
      <input 
        name="phone" 
        placeholder="Phone" 
        className="rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent" 
      />
      <input 
        name="company" 
        placeholder="Company" 
        className="rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent" 
      />
      <textarea 
        name="message" 
        placeholder="How do leads come in? Where do they stall?" 
        className="rounded-md bg-white/5 border border-white/10 px-3 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent" 
        required
      />
      <LoadingButton 
        onClick={handleSubmit}
        className="mt-2"
        variant="primary"
      >
        Email us
      </LoadingButton>
    </form>
  );
}
