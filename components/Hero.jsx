
import appLogo from 'url:../assets/icon.svg'
import menuIcon from 'url:../assets/menu-icon.svg'
import closeIcon from 'url:../assets/close-icon.svg'
import {useState} from 'react'
export default function Hero() {
    const [isSidebarShown,setIsSidebarShown] = useState(false)
    function handleCloseIcon(){

        setIsSidebarShown(prevRes => !prevRes)
    }
    function handleMenuIcon(){
        setIsSidebarShown(prevRes => !prevRes)
    }

    return (
        <>
            <section className="hero-section">
                <nav>
                    <img src={appLogo} alt="logo" />
                    <ul  className={`links-to-pages ${isSidebarShown ? "sidebar" : "hide"}`}>
                        <li onClick={handleCloseIcon}><a href="#"><img className='close-icon' src={closeIcon} alt="" /></a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li className='book-table-btn'><a href="#">Book a Table</a></li>
                        
                    </ul>
                    <ul className="links-to-pages links-to-pages-display-none">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li className='book-table-btn'><a href="#">Book a Table</a></li>
                    </ul>
                    <img onClick={handleMenuIcon} className={`menu-icon `} src={menuIcon} alt="" />
                </nav>

                <section className="hero-text">
                    <p>Taste the Vibe.</p>
                    <h1>Where Great Coffee Meets Great Music</h1>
                    <p>Enjoy handcrafted food, specialty coffee, and live performances in a vibrant atmosphere.</p>
                    <div className="hero-btns-container">
                        <a href="#" className="hero-btn explore-events-btn">Explore events</a>
                        <a href="#" className="hero-btn view-menu-btn">View Menu</a>
                    </div>
                </section>
            </section>
        </>
    )
}