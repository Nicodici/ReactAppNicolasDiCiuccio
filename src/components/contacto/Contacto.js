import "./Contacto.css";
export const Contacto = () => {
  return (
    <div className="formTotal">
      <div class="card">
        <span class="title">Dejanos tu mensaje</span>
        <form class="form">
          <div class="group">
            <input placeholder="" type="text" required="" />
            <label for="name">Nombre</label>
          </div>
          <div class="group">
            <input
              placeholder=""
              type="email"
              id="email"
              name="email"
              required=""
            />
            <label for="email">Email</label>
          </div>
          <div class="group">
            <textarea
              placeholder=""
              id="comment"
              name="comment"
              rows="5"
              required=""
            ></textarea>
            <label for="comment">Comentarios</label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
