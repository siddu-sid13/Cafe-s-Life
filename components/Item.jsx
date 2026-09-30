import star from '../assets/Star.svg'

export default function Item(){
    console.log(star)
    return (
        <>
            <div className="item">
                <div className="item-details">
                    <h3 className="item-name">Chocolate Ice Cream Crepe</h3>
                    <div className="item-price-rating">
                        <p className="item-price">₹249</p>
                        <span>5/5 </span>
                        <img src={star} alt="star" />
                    </div>
                    <p className="item-description">
                        Soft crepe filled and topped with rich chocolate, banana and creamy vanilla ice cream.
                    </p>
                </div>
            </div>
        </>
    )
}