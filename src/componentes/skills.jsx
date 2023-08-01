import html5 from '../assets/icons8-html-5.svg'
import css3 from '../assets/icons8-css3.svg'
import javascript from '../assets/icons8-javascript.svg'
import bootstrap from '../assets/icons8-bootstrap.svg'
import react from '../assets/icons8-react-native.svg'
import github from '../assets/icons8-github-128.svg'

function Skills (){
    return(
      <section className="skills section" id="skills">
      <h2 className="skill-header">Mis Mejores Habilidades</h2>

      <div className="skills-wrapper">
        <div className="first-set animate__animated animate__pulse">
          <img
            src={html5}
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src={css3}
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src={javascript}
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </div>

        <div className="second-set animate__animated animate__pulse">
          <img
            src={bootstrap}
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src={react}
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src={github}
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </div>
      </div>
    </section>
    )
}
export default Skills