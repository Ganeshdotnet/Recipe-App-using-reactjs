import { createContext, useState } from "react";
import { data } from "react-router-dom";


/* api key= */
export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [searchparams, setSearchparams] = useState('')
    const [recipelist,setRecipelist]=useState([]);
    const[favourites,setFavourites]=useState([]);
    async function handleSubmit() {
        try {
            const response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchparams}`);
            const data=await response.json();
            
            if(data?.data?.recipes){
                setRecipelist(data?.data?.recipes);
                setSearchparams('')
            }
        } catch (error) {
            console.log(error);

        }

    }
    function handlefav(getRecipe) {
        let favrecipies=[...favourites];
        if(favrecipies.some(item=>item.id===getRecipe.id)){
            return 
        }
        favrecipies.push(getRecipe);
        setFavourites(favrecipies);
        
    }
    

    return <GlobalContext.Provider value={{ searchparams, setSearchparams, handleSubmit,recipelist ,favourites,setFavourites,handlefav}}>{children}</GlobalContext.Provider>
}