import { createContext, useState } from "react";

const ListingContext = createContext(null);

function ListProvider({ children }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [peoples, setPeoples] = useState(true);
  const [planets, setPlanets] = useState(true);
  const [peopleData, setPeopleData] = useState([]);
  const [planetsData, setPlanetsData] = useState([]);

  const [searchResult, setSearchResult] = useState({});

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <ListingContext.Provider
      value={{
        peopleData,
        planetsData,
        setPeopleData,
        setPlanetsData,
        selectItem,
        selectedItem,
        peoples,
        planets,
        setPeoples,
        setPlanets,
        searchResult,
        setSearchResult,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
}

export { ListProvider, ListingContext };
