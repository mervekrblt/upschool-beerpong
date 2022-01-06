import { useState } from "react";
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
      {!isLoading && <Home></Home>}
    </>
  );
}

export default App;
