import type {Country} from "./types.ts";
import * as React from "react";

interface CountryListProps {
    countries: Country[];
    onSelect: (country: Country) => void; // interfejs funkcji po to abyśmy mogli przekazać ją między komponentami
}

const CountryList: React.FC<CountryListProps> = ({countries, onSelect})=> {
    return (
        <ul>
            {countries.map((country) => (
                <li
                    key={country.name.common}
                    style={{ cursor: "pointer", marginBottom: "0.5rem" }}
                    onClick={() => onSelect(country)}
                >
                    {country.name.common} – {country.region}
                </li>
            ))}
        </ul>
    );
}

export default CountryList