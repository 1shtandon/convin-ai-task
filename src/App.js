import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Mycard from "./components/card/card.component";
import CardList from "./components/cardlist/cardlist.component";
import Bucket from "./routes/Bucket/bucket.component";
import NavBar from "./routes/Navbar/navbar.component";
import History from "./routes/History/history.component";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<NavBar />} >
        <Route path="bucket/*" element=
          {
            <Bucket />
          } />
        <Route path="/history" element={<History />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;