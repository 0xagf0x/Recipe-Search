import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  
  const APP_ID = '90cc4722';
  const APP_KEY = 'cceff0819eb59c1c4b888e52890fe97c';
  
  //States
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery]= useState('chicken');

  useEffect(() => {
    console.log('running');
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    //get the data (use backticks to inser the variables into the URL)
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    //convert data to json 
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearchResults = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return(
    <div className='App'>
      <form onSubmit={getSearchResults} className="search-form">
        <input className="search-bar" type="text" value ={search} onChange={updateSearch} ></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe 
          key = {recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories.toFixed(0)}
          ingredients = {recipe.recipe.ingredients}
          image = {recipe.recipe.image}
          />
        ))};
      </div>
    
    </div>
  );
}





export default App;
