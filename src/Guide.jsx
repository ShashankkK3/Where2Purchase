import GuideTab from "./GuideTab.jsx"
import GuideTab2 from "./GuideTab2.jsx"
export default function Guide(){
    return(
        <>
        <h6></h6>
        <GuideTab img="https://thumbs.dreamstime.com/b/city-map-transparent-magnifying-glass-abstract-town-plan-vector-d-illustration-127779550.jpg"
        head="Find What You Need Locally"
            info="No more wasted trips to stores that don't have what you need. See real-time inventory and confirm availability before you go."
            points={["Real-time inventory checks with local merchants",
"Direct messaging with store owners",
"Map directions to each store location"]}
        />
        <GuideTab2  img="https://th.bing.com/th/id/OIP.u_h4v0HiBLWf9Q8yv9DV1QHaE8?w=600&h=400&rs=1&pid=ImgDetMain"
        head="For Shop Owners"
            info="Join our marketplace of local retailers and connect directly with customers looking for your products."
            points={["List your inventory and get discovered",
"Chat with interested customers",
"Increase foot traffic to your physical store"]}
        
        />
        
        </>
        

    );
}