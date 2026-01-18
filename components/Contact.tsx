'use client';

import { useState } from "react";

export default function Contact() {
   console.log("CONTACT COMPONENT RENDERED");
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  console.log("SUBMIT CLICKED", form);

  setLoading(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log("API RESPONSE:", data);

    alert("Message submitted successfully");
    setForm({ name: "", email: "", course: "", message: "" });
  } catch {
    alert("Something went wrong");
  } finally {
    setLoading(false);
  }
};


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

  return (
    <section id="contact" className="w-full bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">

        {/* Left */}
        <div>
          <h2 className="text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-600">
            Fill the form and our team will reach out.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl space-y-6 border">

          <input
  name="name"
  required
  value={form.name}
  onChange={handleChange}
  placeholder="Full Name"
  className="w-full border px-4 py-3 rounded-lg"
/>

<input
  type="email"
  name="email"
  required
  value={form.email}
  onChange={handleChange}
  placeholder="Email"
  className="w-full border px-4 py-3 rounded-lg"
/>

<select
  name="course"
  required
  value={form.course}
  onChange={handleChange}
  className="w-full border px-4 py-3 rounded-lg"
>

            <option value="">Select Course</option>
            <option value="Hadoop">Hadoop</option>
            <option value="AWS">AWS</option>
            <option value="Linux">Linux</option>
            <option value="Machine Learning">Machine Learning</option>
          </select>

         <textarea
  name="message"
  required
  value={form.message}
  onChange={handleChange}
  placeholder="Your requirement"
  rows={4}
  className="w-full border px-4 py-3 rounded-lg"
/>


         <button
  type="submit"
  disabled={loading}
  className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold disabled:opacity-60"
>
  {loading ? "Submitting..." : "Submit"}
</button>

        </form>
      </div>
    </section>
  );
}
