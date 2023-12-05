import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import BookForm from "./features/BookForm/Form"
import AppRouter from "./AppRouter"
import Header from "./Header"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <BookForm></BookForm> */}
      <AppRouter />;
    </Provider>
  </React.StrictMode>,
)
