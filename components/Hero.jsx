
import appLogo from 'url:../assets/icon.svg'
export default function Hero() {

    return (
        <>
            <section className="hero-section">
                <nav>
                    <img src={appLogo} alt="logo" />
                    <ul className="links-to-pages">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li className='book-table-btn'><a href="#">Book a Table</a></li>
                    </ul>
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