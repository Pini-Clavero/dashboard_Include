import { BrowserRouter as Router, Route} from "react-router-dom";

import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar";
import Cards from "./components/Cards";
import SmallCard from "./components/SmallCard";

import Home from "../src/pages/Home"
import Products from "../src/pages/Products"
import Users from "../src/pages/Users"
import WelcomeCard from "./components/WelcomeCard";

import './App.scss';

function App() {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <div className="content w-100">
          <NavBar />
          <WelcomeCard />
          <SmallCard />
          <Cards />
          <Route path="/" exact="true"> <Home /> </Route>
          <Route path="/products" exact="true"> <Products /> </Route>
          <Route path="/users" exact="true" component={Users} />          
          <p>Hola mundo</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
