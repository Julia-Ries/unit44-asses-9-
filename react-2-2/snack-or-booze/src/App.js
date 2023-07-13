import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from './Menu';
import FoodOrDrinkItem from "./FoodOrDrinkItem";
import AddItem from "./AddItem";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const [snacksData, drinksData] = await Promise.all([
        SnackOrBoozeApi.getSnacks(),
        SnackOrBoozeApi.getDrinks()
      ]);


      setSnacks(snacksData);
      setDrinks(drinksData);
      setIsLoading(false);
    }
    fetchData();
  }, []);



  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} >
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} category = "Snacks" title="snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} category= "Drinks" title="drinks" />
            </Route>
            <Route path="/snacks/:id">
              <FoodOrDrinkItem 
              snacks={snacks} 
              drinks={drinks}
              category = "Snacks" 
              cantFind="/not-found" />
            </Route>
            <Route path="/drinks/:id">
              <FoodOrDrinkItem 
              snacks={snacks}
              drinks={drinks} 
              category="Drinks" 
              cantFind="/not-found" />
            </Route>
            <Route exact path="/add" >
              <AddItem />
              </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}
export default App;
