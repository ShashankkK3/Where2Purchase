import "./footerTab.css"
export default function FooterTab({head,arr}){
    let list=arr.map((i)=> <><a href="/">{i}</a><br /></> )

    return(
      <div className="foot">
        <h6>{head}</h6>
        <p>{list}</p>

      </div>  
    );
}
