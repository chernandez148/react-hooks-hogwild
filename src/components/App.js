import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";
import SideNav from "./SideNav";

function App() {
  console.log(hogs);
  const [filteredHogs, setFilteredHogs] = useState(false);
  const [sort, setSort] = useState("");
  console.log(sort);

  function handelFilteredHogs() {
    setFilteredHogs((filteredHogs) => !filteredHogs);
  }

  function toggleSort(sortValue) {
    setSort(sortValue);
  }

  function handleSort(e) {
    toggleSort(e.target.value);
  }

  return (
    <div className="App">
      <Nav />
      <SideNav
        handelFilteredHogs={handelFilteredHogs}
        handleSort={handleSort}
      />
      <HogList
        filteredHogs={filteredHogs}
        sort={sort}
        displayGrid={"ui grid container"}
        hogData={hogs}
      />
    </div>
  );
}

export default App;
