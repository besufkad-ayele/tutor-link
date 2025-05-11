"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Upload,
  Camera,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";

type FormStep = {
  title: string;
  description: string;
};

type FormErrors = {
  [key: string]: string;
};

const steps: FormStep[] = [
  {
    title: "Personal Information",
    description: "Provide your basic details",
  },
  {
    title: "Credentials",
    description: "Upload your documents",
  },
  {
    title: "Confirmation",
    description: "Review and submit",
  },
];

export default function RegistrationForm() {
//   const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    nationalId: "",
    fanNumber: "",
    kebeleId: "",
    areaOfResidence: "",
    photo: null as File | null,
    cv: null as File | null,
    kebeleIdFile: null as File | null,
    nationalIdFile: null as File | null,
    coverLetter: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const validateStep1 = () => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{9,15}$/.test(formData.phone.replace(/[-()\s]/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.kebeleId.trim()) newErrors.kebeleId = "Kebele ID is required";
    if (!formData.areaOfResidence.trim())
      newErrors.areaOfResidence = "Area of residence is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: FormErrors = {};

    if (!formData.photo) newErrors.photo = "Profile photo is required";
    if (!formData.cv) newErrors.cv = "CV is required";
    if (!formData.kebeleIdFile)
      newErrors.kebeleIdFile = "Kebele ID document is required";
    if (!formData.nationalIdFile)
      newErrors.nationalIdFile = "National ID document is required";
    if (!formData.fanNumber.trim())
      newErrors.fanNumber = "Fan number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        [fieldName]: e.target.files?.[0] || null,
      }));

      // Clear error when user uploads a file
      if (errors[fieldName]) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[fieldName];
          return newErrors;
        });
      }
    }
  };

  const handleContinue = () => {
    if (currentStep === 0) {
      if (validateStep1()) {
        setCurrentStep(1);
      } else {
        // toast({
        //   title: "Missing information",
        //   description: "Please fill in all required fields correctly",
        //   variant: "destructive",
        // });
      }
    } else if (currentStep === 1) {
      if (validateStep2()) {
        setCurrentStep(2);
      } else {
        // toast({
        //   title: "Missing information",
        //   description: "Please upload all required documents",
        //   variant: "destructive",
        // });
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);
    //   toast({
    //     title: "Registration successful",
    //     description: "Your application has been submitted",
    //   });
      setIsSubmitting(false);
    }, 1500);
  };

  // Auto-scroll to the current step container
  useEffect(() => {
    if (containerRefs[currentStep]?.current) {
      containerRefs[currentStep].current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentStep]);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Progress Indicator */}
      <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <div className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    index < currentStep
                      ? "bg-green-500 text-white"
                      : index === currentStep
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  } transition-colors duration-300`}
                >
                  {index < currentStep ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <motion.div
                    className="h-1 w-full bg-gray-200"
                    initial={{ width: 0 }}
                    animate={{
                      backgroundColor:
                        index < currentStep ? "#10b981" : "#e5e7eb",
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="h-full bg-blue-500"
                      initial={{ width: "0%" }}
                      animate={{
                        width: index < currentStep ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium ${
                  index <= currentStep ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <div className="overflow-hidden">
          {/* Step 1: Personal Information */}
          <div
            ref={containerRefs[0]}
            className={`px-4 py-5 sm:p-6 ${
              currentStep === 0 ? "block" : "hidden"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName" className="flex items-center">
                  First Name <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`mt-1 ${
                    errors.firstName
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" /> {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="lastName" className="flex items-center">
                  Last Name <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`mt-1 ${
                    errors.lastName
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" /> {errors.lastName}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="phone" className="flex items-center">
                  Phone Number <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`mt-1 ${
                    errors.phone
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" /> {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="email" className="flex items-center">
                  Email <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`mt-1 ${
                    errors.email
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" /> {errors.email}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="kebeleId" className="flex items-center">
                  Kebele ID <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  id="kebeleId"
                  name="kebeleId"
                  value={formData.kebeleId}
                  onChange={handleInputChange}
                  className={`mt-1 ${
                    errors.kebeleId
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                />
                {errors.kebeleId && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" /> {errors.kebeleId}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="areaOfResidence" className="flex items-center">
                  Area of Residence <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  id="areaOfResidence"
                  name="areaOfResidence"
                  value={formData.areaOfResidence}
                  onChange={handleInputChange}
                  className={`mt-1 ${
                    errors.areaOfResidence
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                />
                {errors.areaOfResidence && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />{" "}
                    {errors.areaOfResidence}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button
                type="button"
                onClick={handleContinue}
                className="flex items-center"
              >
                Continue
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Step 2: Credentials */}
          <div
            ref={containerRefs[1]}
            className={`px-4 py-5 sm:p-6 ${
              currentStep === 1 ? "block" : "hidden"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">Credentials</h2>
            <div className="space-y-6">
              {/* 1. Personal Photo */}
              <div>
                <Label htmlFor="photo" className="flex items-center">
                  Profile Photo <span className="text-red-500 ml-1">*</span>
                </Label>
                <div className="mt-1 flex items-center space-x-4">
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    {formData.photo ? (
                      <img
                        src={
                          URL.createObjectURL(formData.photo) ||
                          "/placeholder.svg"
                        }
                        alt="Profile preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Camera className="h-8 w-8 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <Input
                      id="photo"
                      name="photo"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, "photo")}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("photo")?.click()}
                      className={`flex items-center ${
                        errors.photo ? "border-red-500 text-red-500" : ""
                      }`}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Photo
                    </Button>
                    <p className="text-xs text-gray-500 mt-1">
                      JPG, PNG or GIF up to 2MB
                    </p>
                    {errors.photo && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" /> {errors.photo}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* 2. CV Upload */}
              <div>
                <Label htmlFor="cv" className="flex items-center">
                  CV/Resume <span className="text-red-500 ml-1">*</span>
                </Label>
                <div className="mt-1 flex items-center space-x-4">
                  <div className="p-2 border border-gray-200 rounded-md bg-gray-50 flex items-center min-w-[200px]">
                    {formData.cv ? (
                      <span className="text-sm text-gray-700 truncate max-w-[180px]">
                        {formData.cv.name}
                      </span>
                    ) : (
                      <span className="text-sm text-gray-500">
                        No file chosen
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      id="cv"
                      name="cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange(e, "cv")}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("cv")?.click()}
                      className={`flex items-center ${
                        errors.cv ? "border-red-500 text-red-500" : ""
                      }`}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Upload CV
                    </Button>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF, DOC or DOCX up to 5MB
                    </p>
                    {errors.cv && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" /> {errors.cv}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* 3. Kebele ID Document */}
              <div>
                <Label htmlFor="kebeleIdFile" className="flex items-center">
                  Kebele ID Document{" "}
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <div className="mt-1 flex items-center space-x-4">
                  <div className="p-2 border border-gray-200 rounded-md bg-gray-50 flex items-center min-w-[200px]">
                    {formData.kebeleIdFile ? (
                      <span className="text-sm text-gray-700 truncate max-w-[180px]">
                        {formData.kebeleIdFile.name}
                      </span>
                    ) : (
                      <span className="text-sm text-gray-500">
                        No file chosen
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      id="kebeleIdFile"
                      name="kebeleIdFile"
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileChange(e, "kebeleIdFile")}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() =>
                        document.getElementById("kebeleIdFile")?.click()
                      }
                      className={`flex items-center ${
                        errors.kebeleIdFile ? "border-red-500 text-red-500" : ""
                      }`}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Kebele ID
                    </Button>
                    <p className="text-xs text-gray-500 mt-1">
                      Image or PDF up to 2MB
                    </p>
                    {errors.kebeleIdFile && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />{" "}
                        {errors.kebeleIdFile}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* 4. National ID Document */}
              <div>
                <Label htmlFor="nationalIdFile" className="flex items-center">
                  National ID Document{" "}
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <div className="mt-1 flex items-center space-x-4">
                  <div className="p-2 border border-gray-200 rounded-md bg-gray-50 flex items-center min-w-[200px]">
                    {formData.nationalIdFile ? (
                      <span className="text-sm text-gray-700 truncate max-w-[180px]">
                        {formData.nationalIdFile.name}
                      </span>
                    ) : (
                      <span className="text-sm text-gray-500">
                        No file chosen
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      id="nationalIdFile"
                      name="nationalIdFile"
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileChange(e, "nationalIdFile")}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() =>
                        document.getElementById("nationalIdFile")?.click()
                      }
                      className={`flex items-center ${
                        errors.nationalIdFile
                          ? "border-red-500 text-red-500"
                          : ""
                      }`}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Upload National ID
                    </Button>
                    <p className="text-xs text-gray-500 mt-1">
                      Image or PDF up to 2MB
                    </p>
                    {errors.nationalIdFile && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />{" "}
                        {errors.nationalIdFile}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* 5. Fan Number */}
              <div>
                <Label htmlFor="fanNumber" className="flex items-center">
                  Fan Number <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  id="fanNumber"
                  name="fanNumber"
                  value={formData.fanNumber}
                  onChange={handleInputChange}
                  className={`mt-1 ${
                    errors.fanNumber
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                />
                {errors.fanNumber && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" /> {errors.fanNumber}
                  </p>
                )}
              </div>

              {/* 6. Cover Letter (Optional) */}
              <div>
                <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                <Textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="mt-1"
                  rows={5}
                  placeholder="Write a brief introduction about yourself and your tutoring experience..."
                />
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                className="flex items-center"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button
                type="button"
                onClick={handleContinue}
                className="flex items-center"
              >
                Continue
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Step 3: Confirmation */}
          <div
            ref={containerRefs[2]}
            className={`px-4 py-5 sm:p-6 ${
              currentStep === 2 ? "block" : "hidden"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">Confirmation</h2>
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium text-gray-900 mb-2">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 mb-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">
                    Name:
                  </span>
                  <p className="text-sm text-gray-900">{`${formData.firstName} ${formData.lastName}`}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">
                    Contact:
                  </span>
                  <p className="text-sm text-gray-900">{formData.phone}</p>
                  <p className="text-sm text-gray-900">{formData.email}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">
                    ID Information:
                  </span>
                  <p className="text-sm text-gray-900">
                    Kebele ID: {formData.kebeleId}
                  </p>
                  <p className="text-sm text-gray-900">
                    Fan Number: {formData.fanNumber}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">
                    Location:
                  </span>
                  <p className="text-sm text-gray-900">
                    {formData.areaOfResidence}
                  </p>
                </div>
              </div>

              <h3 className="font-medium text-gray-900 mb-2">Credentials</h3>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 mb-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">
                    Documents:
                  </span>
                  <p className="text-sm text-gray-900">Photo: ✓ Uploaded</p>
                  <p className="text-sm text-gray-900">CV: ✓ Uploaded</p>
                  <p className="text-sm text-gray-900">Kebele ID: ✓ Uploaded</p>
                  <p className="text-sm text-gray-900">
                    National ID: ✓ Uploaded
                  </p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">
                    Cover Letter:
                  </span>
                  <p className="text-sm text-gray-900 line-clamp-3">
                    {formData.coverLetter || "Not provided"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-800 font-medium">
                Please check your email after 10 minutes for further
                instructions and application status.
              </p>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-md">
              <p className="text-sm text-yellow-800">
                By submitting this form, you confirm that all the information
                provided is accurate and complete. False information may result
                in disqualification from the tutor-linking program.
              </p>
            </div>

            <div className="mt-8 flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                className="flex items-center"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
