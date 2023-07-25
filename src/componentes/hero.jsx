import imagenHero from "../assets/pexels-photo-4974907.jpeg"

function Hero({isDarkMode}) {
    return (
      <div className="section">
            <section className="hero" id="about">
                <img src={imagenHero} alt="" loading="lazy" className="hero-img"/>
                <div className="bio animate__animated animate__shakeX">
                    <h2 className="bio-title">¡Hola! Soy Silvano Cibarelli,</h2>
                    <p className="bio-text">
                    
Desarrollador Web

Bienvenido a mi portfolio. Soy un apasionado desarrollador web con experiencia en la creación de sitios y aplicaciones web. Mi objetivo es diseñar y desarrollar soluciones digitales innovadoras y atractivas que brinden una experiencia excepcional a los usuarios.

Explora mi trabajo y descubre cómo combino mi habilidad en tecnologías de vanguardia con un enfoque creativo para crear proyectos únicos y funcionales. ¡Espero que disfrutes explorando mi mundo digital!

¡Gracias por visitar!

                    </p>
                </div>
            </section>
        </div>

    )
}
export default Hero;