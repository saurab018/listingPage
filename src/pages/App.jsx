import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listing from "./index";
import ListItem from "./ListItem";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Listing} />
          <Route path="/:item/:id" Component={ListItem} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
