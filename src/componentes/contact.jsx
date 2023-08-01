function Contact (){
    return(
<section className="contact" id="contact">
      <h2>Contacto</h2>
      <div className="contact-form-container">
        <div className="contact-form">
          <form action="https://formsubmit.co/sil131@gmail.com " method="POST">
            <div className="form-control">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ingrese su nombre"
                className="input-field"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Correo Electronico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingrese su correo electronico"
                className="input-field"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                cols="60"
                rows="10"
                placeholder="Ingrese su mensaje"
                name="message"
                className="input-field"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value="Enviar"
              id="submit-btn"
              className="submit-btn"
            />
          </form>
        </div>
      </div>
    </section>
        )
    }
    export default Contact