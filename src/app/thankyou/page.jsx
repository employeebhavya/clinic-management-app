export default function ThankYou() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold text-primary mb-4">Thank You!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Your message has been submitted successfully. We will get back to you
          soon.
        </p>
        <a
          href="/"
          className="text-white bg-primary hover:bg-blue-700 rounded-lg px-4 py-2 mt-4 inline-block"
        >
          Go Back to Homepage
        </a>
      </div>
    </div>
  );
}
