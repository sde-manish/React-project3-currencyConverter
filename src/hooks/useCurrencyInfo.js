/* 
Hooks?
:Hooks are functions that let you “hook into” React state and lifecycle features from 
function components.

creating a custom hook.
                                                                                */

import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
        console.log(data);
    },[currency]);
    console.log(data);
    return data
}

export default useCurrencyInfo;