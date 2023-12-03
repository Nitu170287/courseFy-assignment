import SearchIcon from "@mui/icons-material/Search";
import "./style.css";

const SearchBar = ({  onChange }) => {
  return (
    <div className="search-box">
      <SearchIcon className="search-icon" />
      <input
        type="text"
        placeholder="Search"
        
        onChange={onChange}
      />
    </div>
  );
};
export default SearchBar;
