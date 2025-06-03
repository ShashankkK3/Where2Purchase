import "./reviewCard.css"
export default function ReviewCard({img,name,who,info}) {
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