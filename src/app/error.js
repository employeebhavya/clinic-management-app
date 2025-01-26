"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Something went wrong</h1>
        <p className="text-lg mb-6">
          {error?.message || "An unexpected error has occurred."}
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
