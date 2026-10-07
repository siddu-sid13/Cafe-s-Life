

export default function Item(props) {
    const star = new URL('../assets/Star.svg', import.meta.url).href;
    console.log(star)
    return (
        <>
            <div className="item">
                <div className="item-details">
                    <div className="item-name-price-container">
                        <h3 className="item-name">{props.itemName}</h3>
                        <div className="item-price-rating">
                            <p className="item-price">{props.itemPrice}</p>
                            <span className="rating">{props.itemRating}<img src={star} alt="star" /></span>
                            
                        </div>
                    </div>

                    <p className="item-description">
                        {props.itemDescription}
                    </p>
                </div>
            </div>
        </>
    )
}