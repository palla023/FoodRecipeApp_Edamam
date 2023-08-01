import React,{useState} from 'react'
import Products from './Products';

const App = () => {
  //to store the user input data
  const [search,setSearch] = useState('');
  //to store the api data
  const [data,setData] = useState([]);
//https://developer.edamam.com/recipe-search-api-v2-changelog   for URL
// https://developer.edamam.com/edamam-docs-recipe-api-v1 
//https://developer.edamam.com/admin/applications     for key
//change Obj from 0 to 30
  const YOUR_APP_ID = "fcffa34d";
  const YOUR_APP_KEY ="d781b3f49c9295972990669c1004f9a7";
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)  //The “hits” section of the response contains all the search results for the recipe query based on relevance. These will include all the corresponding data for the recipes
    )
  }
  return (
    <div>
      <center>
        <h4>Food Recipe App</h4>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/> <br/>
          <input type="submit" className="btn btn-primary" value="Search"/>
        </form>
        {/* whenever we have taken data from api, check the data length by ternary operator */}
        {data.length>=1 ? <Products  data={data}/>:null}
      </center>
    </div>
  )
}

export default App
