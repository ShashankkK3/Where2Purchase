import SearchBar from "./searchbar.jsx"
import "./content.css"
export default function Content(){
    return(
        <div className="Content">
        <h2 className="Chead">Find Products at Local Shops <span>Instantly</span></h2>
        <p className="Cdes">Connect with nearby stores, check product availability in real-time, and get directions—all in one place.</p>
        <SearchBar/>

    </div>

    );
    
}