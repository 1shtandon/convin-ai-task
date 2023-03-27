import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Mycard from "./components/card/card.component";
import CardList from "./components/cardlist/cardlist.component";
import Bucket from "./routes/Bucket/bucket.component";
import NavBar from "./routes/Navbar/navbar.component";

const App = () => {
  const data = {
    name: "card1",
    link: "www.google.com",
    bucketId: 1
  }
  return (
    <Routes>
      <Route path="/" element={<NavBar />} >
        <Route path="bucket/*" element=
          {
            <Bucket />
          } />
      </Route>
    </Routes>
  );
}

export default App;