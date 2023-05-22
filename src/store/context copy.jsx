import { createContext, useState } from "react";
import useFetch from "../helper/customHooks/useFetch";

const ListingContext = createContext(null);

function ListProvider({ children }) {
  const currentUrl = window.location.pathname;
  console.log("currentPage", currentUrl);
  const [selectedItem, setSelectedItem] = useState(null);
  const [peoples, setPeoples] = useState(true);
  const [planets, setPlanets] = useState(true);
  const [peopleData, loading1] = useFetch("https://swapi.dev/api/people");
  const [planetsData, loading2] = useFetch("https://swapi.dev/api/planets");

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <ListingContext.Provider
      value={{
        peopleData,
        planetsData,
        loading1,
        loading2,
        selectItem,
        selectedItem,
        peoples,
        planets,
        setPeoples,
        setPlanets,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
}

export { ListProvider, ListingContext };
