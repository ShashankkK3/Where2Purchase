// SearchBar.jsx
import "./searchbar.css"
export default function SearchBar() {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search for products..." />
      <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  );
}
