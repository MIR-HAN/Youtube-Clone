import React, { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import api from "../utils/Api";

//Create Context
export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const [videos, setVideos] = useState();

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] =useState(null);

    useEffect(()=>{
        // define selected type
const type = selectedCategory.type;
// if type == menu stop function running
if(type === 'menu') return;
// set loading true
setIsLoading(true);

const url = 
type === 'home'? '/home':
type === 'trending'? '/trending':
type === 'category'?
`/search?query=${selectedCategory.name}`: '';

   api.get(url)
   .then((res)=> setVideos(res.data.data))
   .catch((err)=> setError(err.message))
   .finally(()=> setIsLoading(false));
    },[selectedCategory])

    return <VideoContext.Provider value={{
        selectedCategory, setSelectedCategory, 
        videos, error, isLoading
    }}>
        {children}
    </VideoContext.Provider>

};

