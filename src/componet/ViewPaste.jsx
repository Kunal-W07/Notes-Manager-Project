import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);

  if (!paste) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center">
        <p className="text-xl text-red-500">Paste not found!</p>
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard
      .writeText(paste.content)
      .then(() => toast.success("Content copied to clipboard!"))
      .catch(() => toast.error("Failed to copy content."));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 shadow-md text-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Notes Manager</h1>
          <a href="/" className="hover:text-blue-400">
            Back to Home
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md relative">
          {/* Copy Button */}
          <button
            className="absolute top-6 right-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            onClick={handleCopy}
          >
            Copy Content
          </button>

          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            Paste Details
          </h2>

          {/* Title Input */}
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-gray-400 mb-2">
                Title
              </label>
              <input
                id="title"
                type="text"
                className="w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-gray-200 focus:outline-none"
                value={paste.title}
                disabled
              />
            </div>

            {/* Content Textarea */}
            <div>
              <label htmlFor="content" className="block text-gray-400 mb-2">
                Content
              </label>
              <textarea
                id="content"
                className="w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-gray-200 min-h-[200px] focus:outline-none"
                value={paste.content}
                disabled
                rows={10}
              />
            </div>

            {/* Additional Info */}
            <div className="text-sm text-gray-400 mt-4">
              <p>
                <span className="font-semibold">Created At:</span>{" "}
                {new Date(paste.createdAt).toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Paste ID:</span> {paste._id}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;
