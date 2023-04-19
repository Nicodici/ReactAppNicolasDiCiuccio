import { useForm } from "react-hook-form";
import "./Contacto.css";
export const Contacto = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="formTotal">
      <h1 className="formTitulo">Envianos tu consulta</h1>
      <form className="formContact">
        <div className="contformInputs">
          <label className="formLabels">Nombre</label>
          <input className="formInputs" type="text" name=""></input>
        </div>
        <div className="contformInputs">
          <label className="formLabels">Email </label>
          <input className="formInputs" type="email" name=""></input>
        </div>
        <div className="formTextArea">
          <label className="formLabels">Deje su mensaje:</label>
          <textarea className="textAreaSize" />
        </div>
        <div className="contButton">
          <input className="formSubmit" type="submit" value="Enviar"></input>
        </div>
      </form>
    </div>
  );
};

export default Contacto;
