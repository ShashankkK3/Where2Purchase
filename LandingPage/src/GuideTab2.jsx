import "./GuideTab.css"
export default function GuideTab({img,head,info,points}){
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