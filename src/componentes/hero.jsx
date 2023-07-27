import imagenHero from "../assets/pexels-photo-4974907.jpeg"

function Hero({isDarkMode}) {
    return (
      <div className="section">
            <section className="hero" id="about">
                <img src={imagenHero} alt="" loading="lazy" className="hero-img"/>
                <div className="bio animate__animated animate__shakeX">
                    <h2 className="bio-title">¡Hola! Soy Silvano Cibarelli,</h2>
                    <p className="bio-text">
                    un apasionado desarrollador web que acaba de completar su formación. Mi fascinación por la tecnología me ha llevado a explorar el mundo del desarrollo web, donde he adquirido habilidades sólidas en HTML, CSS, JavaScript y Node.js. </p>
                    <p className="bio-text">Mi enfoque en la resolución de problemas me permite crear soluciones creativas y funcionales. En esta sección de mi portfolio, podrás ver mis proyectos destacados, con un diseño moderno y funcionalidad impecable. Estoy emocionado de compartir mi trabajo y estoy abierto a nuevas oportunidades y colaboraciones emocionantes. ¡Bienvenidos a mi portfolio!



                    </p>
                </div>
            </section>
        </div>

    )
}
export default Hero;