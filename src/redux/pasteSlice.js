// import { createSlice } from '@reduxjs/toolkit'
// import toast from 'react-hot-toast';
// // import notify from '../componet/notify';


// // localStorage is used store the data in key values format
// //JSON.parse(localStorage.getItem("pastes")) used fetch the data in localstorage

// const initialState = {
//   pastes:localStorage.getItem("pastes")
//   ? JSON.parse(localStorage.getItem("pastes")) : []
// }

// export const pasteslice = createSlice({
//   name: 'paste',
//   initialState,
//   reducers: {
//     addToPastes: (state, action) => {
//       const paste = action.payload;
//       state.pastes.push(paste);

//       // Save updated array to localStorage
//       localStorage.setItem("pastes", JSON.stringify(state.pastes));

//       // Show a success toast
//       toast.success("Paste created successfully!");
//     },
//     updateToPastes: (state,action) => {
//       const paste = action.payload
//       const index = state.pastes.findIndex((item) =>
//       item._id === paste._id)
//       if(index >=0){
//         state.pastes[index] = paste

//         localStorage.setItem("pastes",JSON.stringify
//           (state.pastes));
//           toast.success("Paste Updated");
//       }  
//     },
//     resetAllPastes: (state, action) => {
//       state.pastes = [];
//       localStorage.removeItem("pastes");
      
//     },
//     removeFromPastes: (state, action) => {
//       const pasteId = action.payload;
//       console.log(pasteId)

//       if(index >= 0){
//         state.pastes.splice(index, 1);
//         localStorage.setItem("pastes", JSON.stringify(state.pastes));
//         toast.success("Paste deleted");
//       }
      
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const {  addToPastes, updateToPastes, resetAllPastes,removeFromPastes } = pasteslice.actions

// export default pasteslice.reducer

// import { createSlice } from '@reduxjs/toolkit';
// import toast from 'react-hot-toast';

// const initialState = {
//      pastes:localStorage.getItem("pastes")
//      ? JSON.parse(localStorage.getItem("pastes")) : []
//    }

// export const pasteslice = createSlice({
//   name: 'paste',
//   initialState,
//   reducers: {
//     addToPastes: (state, action) => {
//       const paste = action.payload;
//       state.pastes.push(paste);

//       // Save updated array to localStorage
//       localStorage.setItem("pastes", JSON.stringify(state.pastes));

//       // Show a success toast
//       toast.success("Paste created successfully!");
//     },
//     updateToPastes: (state, action) => {
//       const paste = action.payload;
//       const index = state.pastes.findIndex((item) => item._id === paste._id);
//       if (index >= 0) {
//         state.pastes[index] = paste;

//         localStorage.setItem("pastes", JSON.stringify(state.pastes));
//         toast.success("Paste Updated");
//       } else {
//         console.error("Paste not found for update.");
//       }
//     },
//     resetAllPastes: (state) => {
//       state.pastes = [];
//       localStorage.removeItem("pastes");
//       toast.success("All pastes have been reset.");
//     },
//     removeFromPastes: (state, action) => {
//       const pasteId = action.payload;
//       const index = state.pastes.findIndex((item) => item.id === pasteId);
    
//       if (index >= 0) {
//         state.pastes.splice(index, 1);
//         localStorage.setItem("pastes", JSON.stringify(state.pastes));
//         toast.success("Paste deleted");
//       } else {
//         console.error(`Paste with ID ${pasteId} not found.`);
//       }
//     },
//   },
// });

// export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteslice.actions;

// export default pasteslice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteslice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);

      // Save updated array to localStorage
      localStorage.setItem("pastes", JSON.stringify(state.pastes));

      // Show a success toast
      toast.success("Paste created successfully!");
    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if (index >= 0) {
        state.pastes[index] = paste;

        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Updated");
      } else {
        console.error("Paste not found for update.");
      }
    },
    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("All pastes have been reset.");
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item) => item._id === pasteId);  // Use _id here

      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste deleted");
      } else {
        console.error(`Paste with ID ${pasteId} not found.`);
      }
    },
  },
});

export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteslice.actions;

export default pasteslice.reducer;


