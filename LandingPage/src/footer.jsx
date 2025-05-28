import FooterTab from "./footerTab";
import "./footer.css"
export default function Footer() {
    let style={
        display:"inline",
        fontSize:"4px",
        textAlign:"left",
        marginLeft:"14px"
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
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f8f8f8',
        borderTop: '1px solid #ddd',
      }}
    >
      <span style={{ fontSize: '5px', color: '#555' }}>© 2025 WhereToPurchase. All rights reserved.</span>
      <div style={{ display: 'flex', gap: '15px' }}>
        <i className="fab fa-twitter " style={{ cursor: 'pointer', fontSize:'7px' }}></i>
        <i className="fab fa-facebook  " style={{ cursor: 'pointer', fontSize:'7px' }}></i>
        <i className="fab fa-instagram" style={{ cursor: 'pointer', fontSize:'7px' }}></i>
      </div>
    </footer>
            

        </>
    );
}