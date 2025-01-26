"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
