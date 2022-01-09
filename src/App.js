import { useState } from "react";
import Navbar from "./components/base/Navbar";
import Footer from "./components/base/Footer";
import Home from "./pages/Home";
import OpeningPage from "./pages/OpeningPage";
//import '../src/scss/custom.scss'

function App() {
  const [isLoading, setLoadig] = useState(true);
  setTimeout(() => {
    setLoadig(false);
  }, 1000);

  return (
    <>
      {isLoading && <OpeningPage></OpeningPage>}
      {!isLoading && (
        <div className="bg-body">
          <Navbar></Navbar>
          <Home></Home>
          <Footer></Footer>
        </div>
      )}
    </>
  );
}

export default App;
