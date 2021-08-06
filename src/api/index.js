import axios from 'axios'

const URL = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    if (country) {
        try {
            const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(`${URL}/countries/${country}`);
            return { confirmed, recovered, deaths, lastUpdate };
        } catch (error) {

        }
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(URL);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios(`${URL}/daily`)
        const modifiedData = data.map((dailyData, index) => ({

            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return modifiedData;
    } catch (error) {

    }
}


export const fetchCountry = async () => {
    try {
        const { data: { countries } } = await axios.get(`${URL}/countries`)
        return countries.map(country => country.name)

    } catch (error) {
        console.log(error)
    }
}