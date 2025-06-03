import WorkTabs from "./WorkTabs";
import "./working.css"

export default function Working(){
    return(
        <>
        <h6>How It Works</h6>
        <div className="working">
            
            <WorkTabs classs="fa-solid fa-magnifying-glass" head="Search For Products" info="Enter what you're looking for and find local shops that have it in stock."/>
            <WorkTabs classs="fa-regular fa-comment" head="Chat with Shopkeepers" info="Ask about product details, availability, pricing, or special requests."/>
            <WorkTabs classs="fa-solid fa-location-dot" head="Visit the Shop" info="Get directions to the store and make your purchase with confidence."/>
        </div>
        </>
        

    );
}