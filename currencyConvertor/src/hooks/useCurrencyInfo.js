
import { useEffect, useState } from 'react';



//custom hooks


function  useCurrencyInfo(currency) {
  const [data, setData] = useState({})

    useEffect(() => {
      fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
      .then((res) => res.json()) //convert into json format
      .then((res) => setData(res[currency]))
    }, [currency])  //currency is dependicies
console.log(data);
    return data;

}
export default useCurrencyInfo







//revise

// import {useState, useEffect} from "react";

//  function useCurrencyInfo(currency) {
//   const [data, setData] = useState({}) 
//     useEffect(() => {
//       fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
//    .then((res) => res.json())
//    .then((res) => setData(res[currency]))  // getting information from fetch the api using .then 


//     }, [currency])

//       return data;
//   }

// export default useCurrencyInfo


