import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-green-50 to-white p-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-md w-full">
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 text-green-500 mx-auto mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2l4-4"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Password Reset Successful
        </h1>
        <p className="text-gray-600 mb-8">
          Your password has been successfully reset. You can now log in with
          your new credentials.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 text-white font-medium bg-green-600 hover:bg-green-700 rounded-xl shadow transition-all duration-300"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default Success;
