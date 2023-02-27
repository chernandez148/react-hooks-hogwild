import React from "react";

function SideNav({ handelFilteredHogs, handleSort }) {
  return (
    <div>
      <form style={{ textAlign: "left" }}>
        <h3 style={{ marginBottom: "10px" }}>Filter</h3>
        <input
          style={{ marginLeft: "15px" }}
          type="checkbox"
          id="greased"
          name="grease"
          onClick={handelFilteredHogs}
        />
        <label htmlFor="filter"> Greased (6)</label>
      </form>
      <h3 style={{ marginBottom: "10px", textAlign: "left" }}>Sort by...</h3>
      <select
        style={{ margin: "10px", display: "flex" }}
        name="sortHogs"
        id="sortHogs"
        onChange={handleSort}
      >
        <option>Sort by...</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default SideNav;
