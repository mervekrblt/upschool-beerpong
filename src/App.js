import { useState } from "react";
import Navbar from "./components/base/Navbar";
import Home from "./pages/Home";
import OpeningPage from "./pages/OpeningPage";
//import '../src/scss/custom.scss'

function App() {
  const [isLoading, setLoadig] = useState(true);
  setTimeout(() => {
    setLoadig(false);
  }, 10000);

  return (
    <>
      {isLoading && <OpeningPage></OpeningPage>}
      {!isLoading && (
        <>
          <Navbar></Navbar>
          <Home></Home>
        </>
      )}
    </>
  );
}

export default App;
