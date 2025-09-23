
import CountryList from "./CountryList";
import {useEffect, useState} from "react";
import type {Country} from "./types.ts";
import SearchBar from "./SearchBar.tsx";
import CountryDetails from "./CountryDetails.tsx";

function App() {

    const [countries, setCountries] = useState<Country[]>([]);

    const [loading, setLoading] = useState(true); // w przechowuje true i false dla warunkowego wyświetlania jsx
    const [error, setError] = useState<Error | null>(null); // w przechowuje true i false dla warunkowego wyświetlania jsx
    const [searchText, setSearchText] = useState(""); // służy za zapisywanie wprowadzonego tekstu w inpucie
    const [filter, setFilter] = useState(""); // zpaisuje wybrany element selecta
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null); // przechowuje wybrany kraj do wyświetlenia szczegółów


    async function fetchCountriesFromApi(){
        setLoading(true);
        fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags")
            .then(response => {
                if(!response.ok) throw new Error("Błąd pobierania danych");
                return response.json()
            })
            .then( (data: Country[])  => {setCountries(data); setLoading(false)} )
            .catch(error =>{
                setError(error);
                setLoading(false);
            })
    }
    useEffect(() => {fetchCountriesFromApi()}, [])

    const filteredCountries = countries.filter((country) => {
        const matchesSearch = country.name.common
            .toLowerCase()
            .includes(searchText.toLowerCase());
        const matchesFilter = filter ? country.region === filter : true;
        return matchesSearch && matchesFilter;
    });

    return (

            <div className="app-container">
                <h1>Kraje świata</h1>

                <SearchBar
                    searchText={searchText}
                    setSearchText={setSearchText}
                    filter={filter}
                    setFilter={setFilter}
                />

                {loading && <p>Ładowanie danych...</p>}
                {error && <p>Coś poszło nie tak: {error.message}</p>}
                {!loading && !error && filteredCountries.length === 0 && (
                    <p>Brak wyników do wyświetlenia</p>
                )}

                {!loading && !error && !selectedCountry && (
                    <CountryList
                        countries={filteredCountries}
                        onSelect={setSelectedCountry}
                    />
                )}

                {selectedCountry && (
                    <CountryDetails
                        country={selectedCountry}
                        onClose={() => setSelectedCountry(null)}
                    />
                )}

                <p>dodatkowy test</p>
            </div>


    )
}

export default App
