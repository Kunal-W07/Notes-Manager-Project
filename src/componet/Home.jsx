// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
// import { addToPastes, updateToPastes } from "../redux/pasteSlice";

// const Home = () =>{
//     const [title,setTitle] = useState("");
//     const [value,setValue] = useState('');
//     const [searchParam, setsearchParam] = useSearchParams();
//     const pasteId = searchParam.get("pasteId");
//     const dispatch = useDispatch();
//     const allPastes = useSelector((state) =>
//     state.paste.pastes);

//     useEffect(() =>{
//         console.log("inside use effect");
//         if(pasteId){
//             const paste = allPastes.find((p) => p._id === pasteId);
//             console.log("page found");
//             setTitle(paste.title);
//             setValue(paste.content);
//         }

//     },[pasteId])

//     function createPaste(){
//         const paste = {
//           title: title,
//           content: value,
//           _id: pasteId ||
//               Date.now().toString(36),
//               createdAt: new Date().toISOString(),
//         }
//         if(pasteId){
//             //update
//             dispatch(updateToPastes(paste));

//         }
//         else{
//             dispatch(addToPastes(paste));

//         }
//         setTitle('');
//         setValue('');
//         setsearchParam({});

//     }
//     return (
//         <div>
//             <div className="flex flex-row gap-7
//              place-content-between
//             ">

//             <input
//             className='p-1 rounded-2xl mt-2
//             w-[66%] pl-3'
//             type="text" placeholder="Enter the title" value={title}
//             onChange={(e)=> setTitle(e.target.value)}></input>
//             <button
//             className='p-2 rounded-2xl mt-2'
//             onClick={createPaste}>

//                 {
//                     pasteId ? "Update my Paste" : "Create My Paste"
//                 }

//             </button>
//             </div>
//             <div className="mt-8">
//                 <textarea
//                 className="rounded-2xl mt-4,
//                 min-w-[500px] p-4"
//                 value={value} placeholder="Enter the Content"
//                 onChange={(e)=>setValue(e.target.value)}
//                 rows={20}

//                 />
//             </div>
//         </div>

//     )
// }
// export default Home;

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParam, setSearchParam] = useSearchParams();
  const pasteId = searchParam.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPastes]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }
    setTitle("");
    setValue("");
    setSearchParam({});
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
            <li>
              <a href="/pastes" className="hover:text-blue-400">
                My Pastes
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            {pasteId ? "Update Paste" : "Create a New Paste"}
          </h2>

          <div className="space-y-4">
            <input
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Enter the title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-gray-200 min-h-[200px] focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={value}
              placeholder="Enter the content"
              onChange={(e) => setValue(e.target.value)}
            />

            <button
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              onClick={createPaste}
            >
              {pasteId ? "Update My Paste" : "Create My Paste"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
