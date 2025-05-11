import React from "react";
import LoginPage from "./login";
import RegistrationForm from "./authentication/page";

const page = () => {
  return (
    <div className="py:24 md:px-24 md:py-24 flex w-full min-h-screen flex-col items-center justify-center bg-muted p-6 md:p-10">
      <RegistrationForm />
    </div>
  );
};

export default page;
