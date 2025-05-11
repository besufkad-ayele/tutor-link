import FooterSection from "@/components/footer";
import Link from "next/link";
import React from "react";

 const  Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 pt-30">
      <div className="flex-col align-center mx-auto px-0">
        <section className="h-[70vh] px-auto mb-16 text-center bg-[url('/images/camera.jpg')] bg-cover bg-center h-[40vh] flex flex-col justify-center items-center w-full">
          <h2 className="text-4xl font-extrabold text-indigo-700 mb-4 animate-pulse">
            Level Up Your Learning with Tutor Link!
          </h2>
          <p className="text-xl text-gray-600">
            Unlock your potential through expert guidance and supportive
            mentorship.
          </p>
        </section>
        <div className="px-20">
          <section className=" bg-white rounded-xl shadow-lg overflow-hidden mb-12 p-8 md:p-12">
            <div className="md:flex items-center">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-semibold text-indigo-700 mb-4 animate-slide-in-left">
                  🚀 Ignite Your Understanding with Expert Mentors
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our tutors are more than just subject experts; they are
                  passionate mentors ready to spark your curiosity and guide you
                  to mastery. We focus on building a deep understanding and
                  fostering a lifelong love for learning.
                </p>
                <Link
                  href="/tutors"
                  className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 animate-bounce delay-100"
                >
                  Meet Our Mentors
                </Link>
              </div>
              <div className="md:w-1/2 relative h-80 overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/camera.jpg" // Ensure this path is correct in your public/images folder
                  alt="Expert Mentorship"
                  className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="px-20">
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg overflow-hidden mb-12 p-8 md:p-12">
            <div className="md:flex items-center flex-row-reverse">
              <div className="md:w-1/2 text-right">
                <h3 className="text-3xl font-semibold text-blue-700 mb-4 animate-slide-in-right">
                  🧩 Unlock Your Unique Learning Path
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Every student is unique! Our platform empowers you with
                  personalized learning journeys tailored to your individual
                  pace, style, and goals. We adapt to your needs, ensuring
                  effective and engaging learning experiences.
                </p>
                <Link
                  href="/learning-paths"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 animate-bounce delay-150"
                >
                  Explore Your Paths
                </Link>
              </div>
              <div className="md:w-1/2 relative h-[50vh] overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/cat-dog-bg.jpg" // Ensure this path is correct
                  alt="Personalized Learning"
                  className="absolute inset-0 w-full h-full object-cover animate-fade-in delay-50"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="px-20">
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 p-8 md:p-12">
            <div className="md:flex items-center">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-semibold text-green-700 mb-4 animate-slide-in-left">
                  🤝 Connect and Grow Together
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Tutor Link fosters a supportive community where students and
                  mentors connect on a deeper level. Build lasting relationships
                  that encourage growth, boost confidence, and make learning an
                  enjoyable journey.
                </p>
                <Link
                  href="/community"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 animate-bounce delay-200"
                >
                  Join Our Community
                </Link>
              </div>
              <div className="md:w-1/2 relative h-80 overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/drink.png" // Ensure this path is correct
                  alt="Connect and Grow"
                  className="absolute inset-0 w-full h-full object-cover animate-fade-in delay-100"
                />
              </div>
            </div>
          </section>
        </div>

        <section className="text-center py-12">
          <h2 className="text-3xl font-semibold text-indigo-800 mb-6 animate-fade-in">
            Ready to Transform Your Learning Experience?
          </h2>
          <Link
            href="/signup"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 animate-pulse delay-200"
          >
            Sign Up & Start Learning!
          </Link>
        </section>
      </div>{" "}
      <div className="pb-0">
        <FooterSection />
      </div>
    </div>
  );
};

export default Page;

