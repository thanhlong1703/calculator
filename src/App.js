import "./App.css";
import Calculator from "./components/calculator/Calculator";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Calculator />
      </Provider>
    </React.Fragment>
  );
}

export default App;
