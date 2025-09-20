"use client";

import React from 'react';

export default function FallbackForm({ email }: { email: string }) {
  const to = (email || 'growth@elevair.org').trim();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
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
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-3">
      <input name="name" placeholder="Name" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" />
      <input type="email" name="email" placeholder="Email" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" />
      <input name="phone" placeholder="Phone" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" />
      <input name="company" placeholder="Company" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" />
      <textarea name="message" placeholder="How do leads come in? Where do they stall?" className="rounded-md bg-white/5 border border-white/10 px-3 py-2 min-h-[120px]"></textarea>
      <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-md bg-cyan-400 px-4 py-2 font-semibold text-slate-900 hover:bg-cyan-300">Email us</button>
    </form>
  );
}
