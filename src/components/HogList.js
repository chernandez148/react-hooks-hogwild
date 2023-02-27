import React from "react";
import HogTiles from "./HogTiles";

function HogList({ hogData, filteredHogs, sort, displayGrid }) {
  const renderFilteredHogData = hogData.filter(
    (filteredHogData) => filteredHogData.greased === true
  );

  const toggleList = filteredHogs ? renderFilteredHogData : hogData;

  if (sort === "weight") {
    toggleList.sort((x, y) =>
      x.weight < y.weight ? 1 : x.weight > y.weight ? -1 : 0
    );
  } else {
    toggleList.sort((x, y) => (x.name > y.name ? 1 : x.name < y.name ? -1 : 0));
  }

  const hogList = toggleList.map((hogData) => {
    return (
      <HogTiles
        key={hogData.name}
        name={hogData.name}
        image={hogData.image}
        specialty={hogData.specialty}
        weight={hogData.weight}
        highestMedalAchieved={hogData.highestMedalAchieved}
        displayColumn={"ui eight wide column"}
      />
    );
  });

  return <div className={displayGrid}>{hogList}</div>;
}

export default HogList;
