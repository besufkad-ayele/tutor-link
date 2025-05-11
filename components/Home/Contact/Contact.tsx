"use client";

import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be at most 500 characters"),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  async function onSubmitContact(values: z.infer<typeof contactFormSchema>) {
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, recipient: "ayebesufkad@gmail.com" }),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        form.reset();
      } else {
        const errorData = await response.json();
        console.error("Email sending failed:", errorData);
        setSubmissionError("Failed to send email. Please try again later.");
        console.log(
          "Error sending email:",
          errorData.error || "Unknown error"
        );
      }
    } catch (error: any) {
      console.error("There was an error sending the email:", error);
      setSubmissionError("Failed to send email. Please check your connection.");
      console.log("Error sending message", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Image section - hidden on small screens */}
      <div className="hidden md:block md:w-1/2 bg-lime-950">
        <img
          src="/images/camera.jpg"
          alt="Contact us"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Form section */}
      <div className="w-full md:w-1/2 p-6 md:p-12 flex items-center justify-center bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-lime-950">Contact Us</h1>
            <p className="mt-2 text-gray-600">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmitContact)}
              className="mt-8 space-y-6"
            >
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your.email@example.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How can we help you?"
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-lime-950 hover:bg-lime-900 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>

              {submissionError && (
                <p className="text-red-500 text-sm mt-2">{submissionError}</p>
              )}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
