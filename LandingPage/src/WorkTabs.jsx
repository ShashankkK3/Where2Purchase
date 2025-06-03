import "./worktab.css"
export default function WorkTabs({classs,head,info}){

    return(
        
        <div className="outer">
            <div className="inner"><i className={classs}></i></div>
            <h6>{head}</h6>
            <p>{info}</p>
            
            
        </div>
    );
}