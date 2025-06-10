import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import './styles/navbar.css'
import './styles/content.css'
import './styles/working.css'
import './styles/infoRibbon.css'
import './styles/Guide.css'
import './styles/review.css'
import './styles/footer.css'
import './styles/reviewCard.css'
import './styles/searchbar.css'
import './styles/worktab.css'
import './styles/footerTab.css'
import './styles/GuideTab.css'

// Navbar Component
function Content(){
  return(
      <div className="Content">
      <h2 className="Chead">Find Products at Local Shops <span>Instantly</span></h2>
      <p className="Cdes">Connect with nearby stores, check product availability in real-time, and get directions—all in one place.</p>
      <SearchBar/>

  </div>

  );
  
}
function Footer() {
  let style = {
    display: "inline",
    fontSize: "4px",
    textAlign: "left",
    marginLeft: "14px"
  }

  return (
    <>
      <div className="outermost">
        <div className="upper">
          <h6>WhereToPurchase</h6>
          <p>Connecting shoppers with local retailers in real-time.</p>
        </div>


        <FooterTab head="For Shoppers" arr={["Find Products", "How it Works", "Browse Shops",]} />
        <FooterTab head="For Shopkeepers" arr={["Register Your Shop", "Merchant Dashboard", "Pricing"]} />
        <FooterTab head="Company" arr={["About Us", "Contact", "Privacy Policy"]} />







      </div>


      <footer
        style={{
          display: 'flex',
          height:"70px",
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: '#f8f8f8',
          borderTop: '1px solid #ddd',
        }}
      >
        <span style={{ fontSize: '21px', color: '#555' }}>© 2025 WhereToPurchase. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '29px' }}>
          <i className="fab fa-twitter " style={{ cursor: 'pointer', fontSize: '21px'}}></i>
          <i className="fab fa-facebook  " style={{ cursor: 'pointer', fontSize: '21px' }}></i>
          <i className="fab fa-instagram" style={{ cursor: 'pointer', fontSize: '21px' }}></i>
        </div>
      </footer>


    </>
  );
}
function FooterTab({head,arr}){
  let list=arr.map((i)=> <><a href="/">{i}</a><br /></> )

  return(
    <div className="foot">
      <h6>{head}</h6>
      <p>{list}</p>

    </div>  
  );
}
 function FootRibbon(){
  let style={
      backgroundColor:"#3AB9B9",
      textAlign:"center",
      marginBottom:"7px",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      height:"250px",
      paddingTop:"1px",
      marginTop:"30px"
  }
  
  let hstyle={
      marginTop:"10px",
      marginBottom:"2px",
      fontSize: "32px",
      color: "white"
  }
  let para={
      fontSize:"17px",
      color: "white",
      marginBottom: "20px"
  }
  let buttonContainer = {
      display: "flex",
      gap: "20px",
      justifyContent: "center"
  }
  let b={
      fontSize:"17px",
      backgroundColor:"white",
      border:"none",
      borderRadius:"4px",
      padding: "12px 24px",
      cursor: "pointer",
      transition: "all 0.3s ease"
  }

  return(
      <div style={style}>
          <h6 style={hstyle}>Ready to Find What You're Looking For?</h6>
          <p style={para}>Join thousands of shoppers connecting with local retailers in real-time.</p>
          <div style={buttonContainer}>
              <button style={b}>Sign up as Shopper</button>
              <button style={b}>Register Your Shop</button>
          </div>
      </div>
  );
}
function Guide(){
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
 function GuideTab({img,head,info,points}){
  const list=points.map((point)=><li>{point}</li>);
  let style={
      fontSize:"17px",
      
  }
  
  return(
      <div className="gout">
          
          <div className="Guidecontent">
              <h6>{head}</h6>
              <p style={style}>{info}</p>
              <p style={style}>{list}</p>
          </div>
          <div className="GuideImage">
              <img src={img} alt="image" />
          </div>
      </div>
  );
}
function GuideTab2({img,head,info,points}){
  const list=points.map((point)=><li>{point}</li>);
  let style={
      fontSize:"17px",
      
  }
  
  return(
      <div className="gout">
          <div className="GuideImage">
              <img src={img} alt="image" />
          </div>
          <div className="Guidecontent">
              <h6>{head}</h6>
              <p style={style}>{info}</p>
              <p style={style}>{list}</p>
          </div>
      </div>
  );
}
function InfoRibbon(){
  return(
      <>
      <div className="ribbon">
          <h6>Everything You Need in One Place</h6>
          <p>WhereToPurchase makes shopping local easier and more convenient than ever before.</p>
      </div>
      </>
  );
}
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">WhereToPurchase</div>
      <nav className="navbar__links">
        <a href="/">Find Products</a>
        <a href="/shops">Shops</a>
        <a href="/how-it-works">How It Works</a>
        <button className="btn-login">Log in</button>
        <button className="btn-signup">Sign up</button>
      </nav>
    </header>
  );
}

function ReviewCard({img,name,who,info}) {
  return (
      <div className="rout">
          <div className="profile">
              <div className="pim">
                  <img src={img} alt="image" />


              </div>
              <div className="pco">
                  <p className="one">{name}</p>
                  <p className="two">{who}</p>

              </div>

          </div>
          <div className="info">
              <p>{info}</p>

          </div>

      </div>




  );
}

function Reviews(){
  return(
      <>
      <br />
      <br />
      
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

function SearchBar() {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search for products..." />
      <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  );
  
}

function Working(){
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

function WorkTabs({classs,head,info}){

  return(
      
      <div className="outer">
          <div className="inner"><i className={classs}></i></div>
          <h6>{head}</h6>
          <p>{info}</p>
          
          
      </div>
  );
}


function App() {
  return (
    <div className="app">
      <Navbar />
      <Content />
      <Working />
      <InfoRibbon />
      <Guide />
      <Reviews />
      <FootRibbon />
      <Footer />
    </div>
  )
}

export default App 