import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Navbar from "./componet/Navbar";
import Home from "./componet/Home";
import Paste from "./componet/Paste";
import ViewPaste from "./componet/viewPaste";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div>
        <Navbar />
        <Paste />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div>
        <Navbar />
        <ViewPaste />
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
        {/* <h1 className="text-5xl font-bold underline">
      Hello world!
    </h1> */}
      </div>
    </>
  );
}

export default App;
