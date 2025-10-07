

export default function App() {
  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Left Panel */}
      <div className="w-1/3 border-r border-gray-300 p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Left Panel</h2>
        {/* Yaha Tree / Search bar aayega */}
      </div>

      {/* Right Panel */}
      <div className="flex-1 p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Right Panel</h2>
        {/* Yaha content viewer aayega */}
      </div>
    </div>
  );
}

// LeftPanel.jsx
export default function LeftPanel() {
  return (
    <div className="w-1/3 border-r border-gray-300 p-4 overflow-y-auto">
      {/* Search Section */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      {/* Tree View Section */}
      <div className="mt-4">
        <h3 className="text-md font-semibold mb-2">Registry Tree</h3>
        <ul className="space-y-1">
          <li className="cursor-pointer hover:bg-gray-200 px-2 py-1 rounded">
            Root Key 1
          </li>
          <li className="cursor-pointer hover:bg-gray-200 px-2 py-1 rounded">
            Root Key 2
          </li>
          <li className="cursor-pointer hover:bg-gray-200 px-2 py-1 rounded">
            Root Key 3
          </li>
        </ul>
      </div>
    </div>
  );
}


