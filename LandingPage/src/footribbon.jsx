
export default function FootRibbon(){
    let style={
        backgroundColor:"#3AB9B9",
        textAlign:"center",
        marginBottom:"7px",
        height:"70px",
        paddingTop:"1px",
        marginTop:"30px"

    }
    
    let hstyle={
        marginTop:"10px",
        marginBottom:"2px"
    }
    let para={
        fontSize:"7px"
    }
    let b={
        fontSize:"7px",
        marginRight:"4px",
        backgroundColor:"white",
        border:"0.1px solid",
        borderRadius:"2px"
    }

    return(
        <div style={style}>
            <h6 style={hstyle}>Ready to Find What You're Looking For?</h6>
            <p style={para}>Join thousands of shoppers connecting with local retailers in real-time.</p>
            <button style={b}>Sign up as Shopper</button>
            <button style={b}>Register Your Shop</button>
        </div>

    );
}