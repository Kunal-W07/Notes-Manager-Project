// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeFromPastes } from "../redux/pasteSlice";
// import toast from "react-hot-toast";

// const Paste = () => {
//   const pastes = useSelector((state) => state.paste.pastes);
//   const [searchTerm, setSearchTerm] = useState("");

//   const dispatch = useDispatch();
//   const filteredData = pastes.filter((paste) =>
//     paste.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   function handleDelete(pasteId) {
//     console.log("Deleting Paste ID:", pasteId);
//     dispatch(removeFromPastes(pasteId));
//   }

//   return (
//     <div>
//       <input
//         className="p-2 rounded-2xl min-w-[600px] mt-5"
//         type="search"
//         placeholder="Search Here"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="flex flex-col gap-5 mt-5">
//         {filteredData.length > 0 &&
//           filteredData.map((paste) => {
//             return (
//               <div key={paste.id} className="border">
//                 <div>{paste.title}</div>
//                 <div>{paste.content}</div>

//                 <div className="flex flex-row gap-4 place-content-evenly">
//                   <button>
//                     <a href={`/?pasteId=${paste?._id}`}>Edit</a>
//                   </button>

//                   <button>
//                     <a
//                       href={`/pastes/${paste?._id}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       View
//                     </a>
//                   </button>

//                   <button onClick={() => handleDelete(paste.id)}>Delete</button>

//                   <button
//                     onClick={() => {
//                       navigator.clipboard
//                         .writeText(paste?.content)
//                         .then(() => toast.success("Copied Text"))
//                         .catch((err) => {
//                           console.error("Failed to copy text: ", err);
//                           toast.error("Failed to copy text");
//                         });
//                     }}
//                   >
//                     Copy
//                   </button>

//                   <button>Share</button>
//                 </div>
//                 <div>{paste.createdAt}</div>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

// export default Paste;

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeFromPastes } from "../redux/pasteSlice";
// import toast from "react-hot-toast";

// const Paste = () => {
//   const pastes = useSelector((state) => state.paste.pastes);
//   const [searchTerm, setSearchTerm] = useState("");
//   const dispatch = useDispatch();

//   const filteredData = pastes.filter((paste) =>
//     paste.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   function handleDelete(pasteId) {
//     console.log("Deleting Paste ID:", pasteId);
//     dispatch(removeFromPastes(pasteId));
//     toast.success("Paste deleted successfully!");
//   }

//   function handleShare(paste) {
//     const shareData = {
//       title: paste.title,
//       text: paste.content,
//       url: window.location.origin + `/?pasteId=${paste._id}`,
//     };

//     if (navigator.share) {
//       navigator
//         .share(shareData)
//         .then(() => toast.success("Shared successfully!"))
//         .catch((error) => toast.error("Failed to share."));
//     } else {
//       toast.error("Sharing is not supported in this browser.");
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-200">
//       {/* Navbar */}
//       <nav className="bg-gray-800 p-4 shadow-md text-gray-200 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Paste Manager</h1>
//           <ul className="flex space-x-6">
//             <li><a href="/" className="hover:text-blue-400">Home</a></li>
//             <li><a href="/pastes" className="hover:text-blue-400">My Pastes</a></li>
//           </ul>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="max-w-5xl mx-auto p-6">
//         <div className="bg-gray-800 p-6 rounded-lg shadow-md">
//           <input
//             className="w-full p-3 mb-4 border border-gray-700 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             type="search"
//             placeholder="Search Here"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />

//           <div className="space-y-4">
//             {filteredData.length > 0 ? (
//               filteredData.map((paste) => (
//                 <div key={paste._id} className="p-4 bg-gray-700 rounded-lg shadow-md">
//                   <h3 className="text-xl font-semibold text-blue-400">{paste.title}</h3>
//                   <p className="text-gray-300 mt-2">{paste.content}</p>

//                   <div className="flex flex-wrap gap-4 mt-4">
//                     <a
//                       href={`/?pasteId=${paste._id}`}
//                       className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center"
//                     >
//                       Edit
//                     </a>

//                     <a
//                       href={`/pastes/${paste._id}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center"
//                     >
//                       View
//                     </a>

//                     <button
//                       onClick={() => handleDelete(paste._id)}
//                       className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                     >
//                       Delete
//                     </button>

//                     <button
//                       onClick={() => {
//                         navigator.clipboard
//                           .writeText(paste.content)
//                           .then(() => toast.success("Copied to clipboard!"))
//                           .catch((err) => toast.error("Failed to copy text."));
//                       }}
//                       className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                     >
//                       Copy
//                     </button>

//                     <button
//                       onClick={() => handleShare(paste)}
//                       className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                     >
//                       Share
//                     </button>
//                   </div>

//                   <p className="text-sm text-gray-400 mt-2">Created at: {new Date(paste.createdAt).toLocaleString()}</p>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-400">No pastes found.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Paste;

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeFromPastes } from "../redux/pasteSlice";
// import toast from "react-hot-toast";

// const Paste = () => {
//   const pastes = useSelector((state) => state.paste.pastes);
//   const [searchTerm, setSearchTerm] = useState("");

//   const dispatch = useDispatch();
//   const filteredData = pastes.filter((paste) =>
//     paste.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   function handleDelete(pasteId) {
//     console.log("Deleting Paste ID:", pasteId);
//     dispatch(removeFromPastes(pasteId));
//     toast.success("Paste deleted successfully!");
//   }

//   function handleShare(paste) {
//     const shareData = {
//       title: paste.title,
//       text: paste.content,
//       url: window.location.origin + `/?pasteId=${paste._id}`,
//     };

//     if (navigator.share) {
//       navigator
//         .share(shareData)
//         .then(() => toast.success("Shared successfully!"))
//         .catch((error) => toast.error("Failed to share."));
//     } else {
//       toast.error("Sharing is not supported in this browser.");
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
//       <input
//         className="w-full p-3 mb-4 border border-gray-700 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         type="search"
//         placeholder="Search Here"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="space-y-4">
//         {filteredData.length > 0 ? (
//           filteredData.map((paste) => (
//             <div key={paste._id} className="p-4 bg-gray-800 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-blue-400">{paste.title}</h3>
//               <p className="text-gray-300 mt-2">{paste.content}</p>
//               <div className="flex flex-wrap gap-4 mt-4">
//                 <a
//                   href={`/?pasteId=${paste._id}`}
//                   className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center"
//                 >
//                   Edit
//                 </a>
//                 <a
//                   href={`/pastes/${paste._id}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center"
//                 >
//                   View
//                 </a>
//                 <button
//                   onClick={() => handleDelete(paste._id)}
//                   className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                 >
//                   Delete
//                 </button>
//                 <button
//                   onClick={() => {
//                     navigator.clipboard
//                       .writeText(paste.content)
//                       .then(() => toast.success("Copied to clipboard!"))
//                       .catch(() => toast.error("Failed to copy text."));
//                   }}
//                   className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                 >
//                   Copy
//                 </button>
//                 <button
//                   onClick={() => handleShare(paste)}
//                   className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                 >
//                   Share
//                 </button>
//               </div>
//               <p className="text-sm text-gray-400 mt-2">
//                 Created at: {new Date(paste.createdAt).toLocaleString()}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-400">No pastes found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    console.log("Deleting Paste ID:", pasteId); // Check the paste ID
    dispatch(removeFromPastes(pasteId));
  }

  function handleShare(paste) {
    const shareData = {
      title: paste.title,
      text: paste.content,
      url: window.location.origin + `/?pasteId=${paste._id}`,
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => toast.success("Shared successfully!"))
        .catch((error) => toast.error("Failed to share."));
    } else {
      toast.error("Sharing is not supported in this browser.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 shadow-md text-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Notes Manager</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-blue-400">
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6">
        <input
          className="w-full p-3 mb-4 border border-gray-700 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="search"
          placeholder="Search Here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="space-y-6">
          {filteredData.length > 0 ? (
            filteredData.map((paste) => (
              <div
                key={paste._id} // Ensure the key matches the ID used for deletion
                className="p-4 bg-gray-800 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-blue-400">
                  {paste.title}
                </h3>
                <p className="text-gray-300 mt-2">{paste.content}</p>
                <div className="flex flex-wrap gap-4 mt-4 justify-end">
                  <a
                    href={`/?pasteId=${paste._id}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Edit
                  </a>
                  <a
                    href={`/pastes/${paste._id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    View
                  </a>
                  <button
                    onClick={() => handleDelete(paste._id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard
                        .writeText(paste.content)
                        .then(() => toast.success("Copied to clipboard!"))
                        .catch(() => toast.error("Failed to copy text."));
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => handleShare(paste)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Share
                  </button>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Created at: {new Date(paste.createdAt).toLocaleString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No pastes found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Paste;
