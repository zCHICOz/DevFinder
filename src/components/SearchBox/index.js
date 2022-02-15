import { FaSearch } from 'react-icons/fa';
import './searchBox.css';

function SearchBox({ username, setUsername, loadUserInfo }) {
  return (
    <section className="search-box-container">
      <FaSearch size={28} color="#0178FF" className="icon-search" />
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button
        className="btn-search"
        onClick={() => loadUserInfo()}
      >
        Search
      </button>
    </section>
  );
}

export default SearchBox;
