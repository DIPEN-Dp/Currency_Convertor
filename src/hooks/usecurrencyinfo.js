import { useState,useEffect } from 'react'

const useCurrencyInfo = (currency) => {
    const [data, setdata] = useState({}); // Initialize state to hold currency data

    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setdata(res.rates))
    }, [currency])

    return data;
}

export default useCurrencyInfo; // Export the custom hook for use in other components