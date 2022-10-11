import "./styles/App.css";

import Navbar from "./components/UI/Navbar/Navbar";

function App(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default App;
