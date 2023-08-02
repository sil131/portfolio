import expense from '../assets/expenseTracker.png'
import netflic from '../assets/netflixClone.png'
import greeny from '../assets/greenyEarth.png'
function Projects (){
    return(
        <section className="projects section" id="projects">
        <h2 className="projects-title">Algunos De Mis Proyectos</h2>
        <div className="projects-container">
          <div className="project-container project-card section">
            <img
              src={expense}
              alt="expense-tracker"
              loading="lazy"
              className="project-pic"
            />
            <h3 className="project-title">Expense Tracker</h3>
            <p className="project-details">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              ratione vel inventore labore commodi modi quos culpa aut saepe!
              Alias!
            </p>
            <a href="#" target="_blank" className="project-link">Mira Esto</a>
          </div>
          <div className="project-container project-card section">
            <img
              src={netflic}
              alt="netflic-clone"
              loading="lazy"
              className="project-pic"
            />
            <h3 className="project-title">Netflix Clone</h3>
            <p className="project-details">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              ratione vel inventore labore commodi modi quos culpa aut saepe!
              Alias!
            </p>
            <a href="#" target="_blank" className="project-link">Mira Esto</a>
          </div>
          <div className="project-container project-card section">
            <img
              src={greeny}
              alt="greeny-earth"
              loading="lazy"
              className="project-pic"
            />
            <h3 className="project-title">Greeny Earth</h3>
            <p className="project-details">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              ratione vel inventore labore commodi modi quos culpa aut saepe!
              Alias!
            </p>
            <a href="#" target="_blank" className="project-link">Mira esto</a>
          </div>
        </div>
      </section>
        )
    }
    export default Projects