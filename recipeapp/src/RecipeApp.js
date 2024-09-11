import axios  from 'axios';
import { useEffect, useState } from "react";
import Nav from "./Recipe_components/Nav";
import Banner from "./Recipe_components/Banner";
import List2 from "./Recipe_components/List";
import Copy from "./Recipe_components/Copy";
import Footer from "./Recipe_components/Footer";

const RecipeApp = () =>{
    
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(false);
    const[recipes, setRecipes] = useState([]);
    const[keyWord,setKeyWord] = useState('')
    const[frecipe,setFReciepe]=useState([])
    useEffect(() =>{
        makeApiCall()
    },[])

    //this function will do the filtering
    const handleFilter = () =>{
        const filtered_recipes = recipes.filter((recipes)=>{
            return  recipes.name.toLowerCase().includes(keyWord.toLowerCase())

        })

        setFReciepe(filtered_recipes)
    }

    //make the and get the data for us
    function makeApiCall(){
        axios.get("https://dummyjson.com/recipes")
        .then(function(resp){
            console.log(resp.data.Recipes)
            setLoading(false)
            setRecipes(resp.data.Recipes)
        })
        .catch(function(err){
            console.log(err)
            setLoading(false)
            setError(true)
        })
    }
    return(
        <div className="container-fluid">
            <Nav/>
            <Banner setKeyWord={setKeyWord} handleFilter={handleFilter}/>
            <List2 loading={loading} error={error} recipes={recipes} frecipe={frecipe}/>
            <Footer/>
            <Copy/>
        </div>
    )
}

export default RecipeApp