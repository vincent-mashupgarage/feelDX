"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Infrastructure Projects?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Partner with FEELDX to bring innovation and expertise to your next
          project.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="lg"
              style={{ backgroundColor: "#1E3D59" }}
              className="text-white px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </DialogTrigger>
          <ContactModal />
        </Dialog>
      </div>
    </section>
  );
}

export function ContactModal() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const canSubmit = Object.values(form).every((v) => v.trim() !== "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 400);
  };

  const resetForm = () => {
    setForm({ name: "", email: "", subject: "", message: "" });
    setSubmitted(false);
  };

  return (
    <DialogContent className="sm:max-w-[500px] bg-white text-gray-900 border border-gray-200">
      {submitted ? (
        <div className="flex flex-col items-center text-center space-y-4 py-10">
          <CheckCircle2 className="h-14 w-14 text-green-500" />
          <h3 className="text-2xl font-semibold text-gray-900">Thank you!</h3>
          <p className="text-gray-600">
            Your message has been sent successfully. We&apos;ll get back to you
            soon.
          </p>
          <DialogClose asChild>
            <Button
              onClick={resetForm}
              style={{ backgroundColor: "#1E3D59" }}
              className="text-white px-6 py-2 mt-2"
            >
              Close
            </Button>
          </DialogClose>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription>
              We&apos;re here to help with any questions you may have. Reach out
              and we&apos;ll respond as soon as we can.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              id="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-white border-gray-300 text-gray-900"
            />
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-white border-gray-300 text-gray-900"
            />
          </div>
          <Input
            id="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="bg-white border-gray-300 text-gray-900"
          />
          <Textarea
            id="message"
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="bg-white border-gray-300 text-gray-900"
          />
          <DialogFooter>
            <Button
              type="submit"
              size="lg"
              disabled={!canSubmit}
              style={{ backgroundColor: "#1E3D59" }}
              className="text-white w-full disabled:opacity-50"
            >
              Send Message
            </Button>
          </DialogFooter>
        </form>
      )}
    </DialogContent>
  );
}
