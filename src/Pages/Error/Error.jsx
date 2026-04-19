import React from "react";
import { useNavigate } from "react-router";

const Error = ({ statusCode = "404", message = "Page Not Found" }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Code */}
        <h1 className="text-9xl font-extrabold text-indigo-600 tracking-widest">
          {statusCode}
        </h1>

        {/* Decorative Badge */}

        <div className="mt-8">
          <p className="text-2xl md:text-3xl font-light leading-normal text-gray-800">
            {message}
          </p>
          <p className="mt-4 mb-8 text-gray-500">
            Sorry about that! Please check the URL or click the button below to
            return to the homepage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="px-8 py-3 font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-md"
            >
              Go Home
            </button>

            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 font-semibold rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
