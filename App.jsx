import Hero from './components/Hero'
import Button from './components/Button'
import Item from './components/Item'

export default function App(){
    const items = [
        {
            id:1,
            itemName : "Chocolate Ice Cream Crepe",
            itemPrice : "₹249",
            rating: "5/5",
            description: "Soft crepe filled and topped with rich chocolate, banana and creamy vanilla ice cream.",
            img: 'url:../assets/Chocolate-Ice-Cream-Crepe.svg'
        },{
            id:2,
            itemName : "Triple Scoop Ice Cream Platter",
            itemPrice : "₹299",
            rating: "5/5",
            description:"A colorful combination of three scoops served with fresh strawberries, waffle and chocolate drizzle.",
            img: 'url:../assets/Triple-Scoop-Ice-Cream-Platter.svg'
        },
        {
            id:3,
            itemName : "Chocolate Fudge Milkshake",
            itemPrice : "₹299",
            rating: "5/5",
            description:"Rich chocolate shake with whipped cream and chocolate drizzle.",
            img: 'url:../assets/Chocolate-Fudge-Milkshake.svg'
        },{
            id:4,
            itemName : "Chocolate Dream Shake",
            itemPrice : "₹219",
            rating: "5/5",
            description:"Rich chocolate shake topped with whipped cream, chocolate drizzle and a cherry.",
            img: 'url:../assets/Chocolate Dream Shake.svg'
        },{
            id:5,
            itemName : "Peach Iced Tea",
            itemPrice : "₹189",
            rating: "5/5",
            description:"Soft crepe filled and topped with rich chocolate, banana and creamy vanilla ice cream.",
            img: 'url:../assets/Chocolate Dream Shake.svg'
        }
    ]
    return (
        <>
            <Hero />
            <Button btnTxt ="Popular Picks"/>
            <div className='items-container'>
                {
                    items.map(item =>(
                        <Item 
                            key={item.id}
                            itemName={item.itemName}
                            itemPrice={item.itemPrice}
                            itemRating={item.rating}
                            itemDescription={item.description}
                            itemImg={item.img}
                            />
                    ))
                }
            </div>
        </>
        
    )
}