import React, { useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ListingContext } from "../store/context";
import PeopleItem from "../components/Listing/listingComponents/individualComponent/PeopleItem";
import PlanetItem from "../components/Listing/listingComponents/individualComponent/PlanetItem";
import SpinnerComponent from "../components/spinner/Spinner";
import useFetch from "../helper/customHooks/useFetch";
import axios from "axios";

function ListItem() {
  const { selectedItem } = useContext(ListingContext);
  const params = useParams();

  const { data: item, loading } = !selectedItem
    ? useFetch(`https://swapi.dev/api/${params.item}/${params.id}`)
    : { data: null, loading: false };

  if (params.item == "people")
    return loading ? (
      <SpinnerComponent />
    ) : (
      <PeopleItem data={selectedItem ? selectedItem : item} url={params} />
    );
  if (params.item == "planets")
    return loading ? (
      <SpinnerComponent />
    ) : (
      <PlanetItem data={selectedItem ? selectedItem : item} url={params} />
    );
}

export default ListItem;
