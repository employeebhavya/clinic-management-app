export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-primary to-indigo-700 text-white">
      <div className="text-center">
        <svg
          className="w-16 h-16 mb-4 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
        <p className="text-lg font-medium">Loading, please wait...</p>
      </div>
    </div>
  );
}
