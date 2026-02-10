import { useState,useEffect } from 'react'

const useCurrencyInfo = (currency) => {
    const [data, setdata] = useState({}); // Initialize state to hold currency data

    useEffect(() => {
        const fetchdata=()=>{
            fetch(`https://open.er-api.com/v6/latest/${currency}`) // Fetch exchange rate data for the specified currency
            .then(res=>res.json()) // Parse the response as JSON
            .then(data=>setdata(data)) // Update the state with the fetched data
        }
    }, [currency])

    return data; // Return the currency data to be used in components that call this hook
}

export default useCurrencyInfo; // Export the custom hook for use in other components