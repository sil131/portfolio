import imagenHero from "../assets/pexels-photo-4974907.jpeg"

function Hero({isDarkMode}) {
    return (
      <div className="section">
            <section className="hero" id="about">
                <img src={imagenHero} alt="" loading="lazy" className="hero-img"/>
                <div className="bio animate__animated animate__shakeX">
                    <h2 className="bio-title">MI PORTFOLIO</h2>
                    <p className="bio-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sed dolorem
                        fugit sapiente porro veniam pariatur dolore nostrum delectus inventore tempore
                        minus nemo, iste ullam illo laboriosam maiores repudiandae quos!
                    </p>
                </div>
            </section>
        </div>

    )
}
export default Hero;