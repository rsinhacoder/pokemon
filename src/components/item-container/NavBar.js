import logo from "../../assets/items/pokedex.png";
import { Howl } from "howler";


const NavBar = ({
  pokemonsTypes,
  searchFilterFunction,
  typeFilterFunction,
}) => {
  

  return (
    <nav className="nav-bar">
      <img
        src={logo}
        className="logo"
        height="50px"
   
      />

      <div className="filters">
        <div className="search-container">
          <input
            className="search-input"
            id="searchFilter"
            type="text"
            placeholder="Pokemon search..."
            onChange={(event) => searchFilterFunction(event.target.value)}
            
          />
        </div>

        
      </div>
    </nav>
  );
};

export default NavBar;
