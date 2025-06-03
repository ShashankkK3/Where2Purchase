export default function FootRibbon(){
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