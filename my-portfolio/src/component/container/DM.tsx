"use client";

import type React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../DMcard";

const ContactSection = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(""); // New: For success/error message
  const [feedbackType, setFeedbackType] = useState<"error" | "success" | "">(
    ""
  ); // New: To control color

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback("");
    setFeedbackType("");

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFeedback("Please fill in all required fields.");
      setFeedbackType("error");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFeedback("Please enter a valid email address.");
      setFeedbackType("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          content: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFeedback("Message sent successfully! I'll get back to you soon.");
      setFeedbackType("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setFeedback("Something went wrong. Please try again later.");
      setFeedbackType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="relative bg-[#ffffff83] dark:bg-gray-900 border-gray-200 dark:border-gray-800 border">
      <CardHeader>
        <CardTitle className="text-slate-600">Contact me Here</CardTitle>
        <CardDescription className="text-gray-800 dark:text-gray-400">
          I'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit} className="relative z-10">
        <CardContent>
          <div className="grid gap-4">
            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          {/* <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 transition-opacity"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button> */}
          <div className="w-full">
            {feedback && (
              <p
                className={`text-center text-sm mb-1 ${
                  feedbackType === "error" ? "text-red-500" : "text-green-700"
                }`}
              >
                {feedback}
              </p>
            )}
            <button
              type="submit"
              className=" text-white py-2 rounded-lg w-full bg-gradient-to-br from-slate-600 to-slate-600 hover:opacity-90 transition-opacity"
            >
              <span> {isSubmitting ? "Sending..." : "Send Message"}</span>
            </button>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactSection;
