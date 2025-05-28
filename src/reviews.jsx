import ReviewCard from "./reviewCard.jsx"
import "./review.css"
export default function Reviews(){
    return(
        <>
        <h6>What People Say</h6>
        <div className="review">
            
            <ReviewCard img="https://thumbs.dreamstime.com/b/close-up-profile-side-photo-pretty-gorgeous-lady-wear-trendy-clothes-demonstrate-beaming-grin-isolated-blue-color-background-269496185.jpg"
        name="Sarah Johnson"
        who="Customer"
        info="I needed a specific art supply for a project. Instead of driving around town checking different stores, I found it instantly with WhereToPurchase!"
        
        />

        <ReviewCard img="https://www.opengovpartnership.org/wp-content/uploads/2021/07/marcoconsalvo-1-scaled.jpg"
        name="David Rodriguez"
        who="Customer"
        info="I was looking for a specific part for my bike. I messaged several shops through the app and found one that had exactly what I needed. Saved me hours of searching!"
        
        />

        <ReviewCard img="https://careers-web-prod.s3.amazonaws.com/wp-content/uploads/2023/07/12165423/Therapist-Hero-mobile.jpg"
        name="Michael Chen"
        who="Bookstore Owner"
        info="As an independent bookstore owner, this platform has brought in new customers who might never have found us otherwise. The chat feature helps us provide personalized service."
        
        />

        

        </div>

        </>
                
    );
}