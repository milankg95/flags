import react, { useState, useEffect } from 'react'
import axios from 'axios'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom"

const FlagItem = () => {
    const [flagData, setFlagData] = useState('srb')

    const { id } = useParams()

    useEffect(async () => {
        if (id) {
            const fetchedData = await axios(
                `https://restcountries.com/v3.1/alpha/${id}`,
            );
           
            setFlagData(fetchedData.data);
        }
    }, [])

    console.log('flag data:')
    console.log(flagData)

    return (
        <h1>{ id }</h1>
    )
}

export default FlagItem