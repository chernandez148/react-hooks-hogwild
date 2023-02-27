import React, { useState } from "react";

function HogTiles({
  name,
  image,
  specialty,
  weight,
  highestMedalAchieved,
  displayColumn,
}) {
  const [toggleHogTileInfo, setToggleHogTileInfo] = useState(false);

  function toggleHogInfo() {
    setToggleHogTileInfo((toggleHogTileInfo) => !toggleHogTileInfo);
  }

  const toggleinfo = toggleHogTileInfo ? "" : "d-none";

  return (
    <div className={displayColumn} onClick={toggleHogInfo}>
      <h3>{name}</h3>
      <img src={image} alt={name} width="100%" />
      <ul className={toggleinfo}>
        <li>Specialty: {specialty}</li>
        <li>{weight} kg</li>
        <li>Award: {highestMedalAchieved}</li>
      </ul>
    </div>
  );
}

export default HogTiles;
