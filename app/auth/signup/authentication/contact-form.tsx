"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
//   const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // toast({
    //   title: "Form submitted",
    //   description: "We'll get back to you soon!",
    // });
    // Reset form
    setFormData({ name: "", email: "", description: "" });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Image section - hidden on small screens */}
      <div className="hidden md:block md:w-1/2 bg-lime-950">
        <img
          src="/placeholder.svg?height=800&width=600"
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

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-lime-950">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 border-lime-900/20 focus-visible:ring-lime-950"
                  placeholder="Your name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-lime-950">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 border-lime-900/20 focus-visible:ring-lime-950"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-lime-950">
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 min-h-[150px] border-lime-900/20 focus-visible:ring-lime-950"
                  placeholder="How can we help you?"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-lime-950 hover:bg-lime-900 text-white"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
