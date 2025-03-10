// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store/index.js";
// ReactDOM.createRoot(document.getElementById("root")).render(
//   // <React.StrictMode>
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>

//   // </React.StrictMode>
// );

// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <BrowserRouter> */}
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    {/* </BrowserRouter> */}
  </Provider>

  // </React.StrictMode>
);
