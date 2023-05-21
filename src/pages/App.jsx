import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listing from "./listing/index";
import ListItem from "./listing/ListItem";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/listing" Component={Listing} />
          <Route path="/:item/:id" Component={ListItem} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
