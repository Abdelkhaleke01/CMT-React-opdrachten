import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        
        {/* Header / Navbar */}
        <div className="p-6 flex items-center gap-2">
          <svg
            className="h-8 w-8 text-blue-600 dark:text-blue-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path d="M3 7l9-4 9 4-9 4-9-4z" />
            <path d="M3 12l9 4 9-4" />
            <path d="M3 17l9 4 9-4" />
          </svg>
          <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Workcation
          </span>
        </div>

        {/* Image */}
        <img
          src="/workcation.jpg"
          alt="Workcation"
          className="w-full h-48 object-cover"
        />

        {/* Text Content */}
        <div className="p-6 space-y-3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            You can work from anywhere.{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Take advantage of it.
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you're
            not on vacation.
          </p>

          <button className="mt-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
            BOOK YOUR ESCAPE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
