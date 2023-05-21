import React, { useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ListingContext } from "../../store/context";
import PeopleItem from "../../components/Listing/listingComponents/individualComponent/PeopleItem";
import PlanetItem from "../../components/Listing/listingComponents/individualComponent/PlanetItem";
import SpinnerComponent from "../../components/spinner/Spinner";
import useFetch from "../../helper/customHooks/useFetch";
import axios from "axios";

function ListItem() {
  const { selectedItem, peopleData, planetsData, loading1, loading2 } =
    useContext(ListingContext);
  const params = useParams();
  // const [item, loading] = !selectedItem
  //   ? useFetch(`https://swapi.dev/api/${params.item}/${params.id}`)
  //   : [null, false];

  console.log("itemsPeople", peopleData);
  console.log("itemsPlanets", planetsData);
  console.log("params", params);

  if (params.item == "people")
    return loading1 ? (
      <SpinnerComponent />
    ) : (
      <PeopleItem
        data={selectedItem ? selectedItem : peopleData[params.id - 1]}
      />
    );
  if (params.item == "planets")
    return loading2 ? (
      <SpinnerComponent />
    ) : (
      <PlanetItem data={selectedItem ? selectedItem : item} />
    );
}

export default ListItem;
