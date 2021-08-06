import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchCountry} from '../../api'

const CountryPicker = ({handleCountryChange}) => {

    const [countries, setCountries] = useState([])

    const fetchAPI = async () => {
        setCountries(await fetchCountry());
    }
    useEffect(() => {
        fetchAPI()
    }, [])
    
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect onChange={(event) => handleCountryChange(event.target.value) }>
                <option value=''>Global</option>
                {
                    countries &&
                    countries.map(country => {
                        return <option key={country} value={country}>{country}</option>
                    })
                }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker