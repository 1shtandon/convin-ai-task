import React from "react";
import { Route, Routes } from "react-router-dom";
import Mycard from "./components/card/card.component";
import NavBar from "./routes/Navbar/navbar.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />} >
        <Route path="bucket/*" element=
          {
            // render my card component along with the bucket name
            <Mycard />
          } />
      </Route>
    </Routes>
  );
}

export default App;