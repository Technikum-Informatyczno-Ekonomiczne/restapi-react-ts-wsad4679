import type { Country } from "./types";

interface CountryDetailsProps {
    country: Country;
    onClose: () => void;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country, onClose }) => {
    return (
        <div className="details-card">
            <h2>{country.name.common}</h2>
            <img
                src={country.flags.svg}
                alt={`Flaga ${country.name.common}`}
                width={180}
            />
            <p>Region: {country.region}</p>
            <p>Stolica: {country.capital ? country.capital[0] : "brak danych"}</p>
            <p>Populacja: {country.population.toLocaleString()}</p>

            <button onClick={onClose}>Ukryj szczegóły</button>
        </div>
    );
};

export default CountryDetails;
