import './Search.css';
import useDebounce from '../../Hooks/useDebounce';

function Search({ setSearchTerm }) {
    // Debounce function should call setSearchTerm with a delay
    const debounce = useDebounce((event) => setSearchTerm(event.target.value), 500);

    return (
        <input 
            type="text" 
            className="Search-bar" 
            placeholder="Enter Pokemon Name" 
            onChange={debounce} 
        />
    );
}

export default Search;
