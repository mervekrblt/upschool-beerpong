import { useState } from "react";
import Home from "./pages/Home";
import OpeningPage from "./pages/OpeningPage";

function App() {
  const [isLoading, setLoadig] = useState(true);
  setTimeout(() => {
    setLoadig(false);
  }, 10000);

  return (
    <>
      {isLoading && <OpeningPage></OpeningPage>}
      {!isLoading && <Home></Home>}
    </>
  );
}

export default App;
