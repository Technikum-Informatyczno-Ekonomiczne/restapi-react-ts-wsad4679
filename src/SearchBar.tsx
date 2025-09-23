
interface SearchBarProps {
    searchText: string;
    setSearchText: (text: string) => void;
    filter: string;
    setFilter: (filter: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
                                                 searchText,
                                                 setSearchText,
                                                 filter,
                                                 setFilter,
                                             }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Szukaj..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />

            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="">Wszystkie</option>
                <option value="Europe">Europa</option>
                <option value="Asia">Azja</option>
                <option value="Africa">Afryka</option>
                <option value="Americas">Ameryki</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    );
};

export default SearchBar;
