const Fill = (props) => {
  return (
    <>
      <div
        id="fill"
        className="filled js-desplegable"
        onClick={props.handleCollapsed}
      >
        <i className="fa-solid fa-keyboard"></i>
        <legend className="filled__text">Rellena</legend>
        <i className="fa-solid fa-angle-up fill-arrow js-icon-rellena fa-transform "></i>
      </div>
      <fieldset
        action="/signup"
        method="post"
        className={`form2 js-fieldset ${props.fillClassCollapsed}`}
      >
        <label className="label1">Nombre completo</label>
        <input
          type="text"
          className="input js_resetInput"
          name="name"
          placeholder="Ej: Sally Hill"
          onChange={props.handleInput}
          value={props.dataCard.name}
          required
        />
        <label className="label">Puesto</label>
        <input
          type="text"
          className="input js_resetInput"
          name="job"
          placeholder="Ej: Front-end unicorn"
          onChange={props.handleInput}
          value={props.dataCard.job}
          required
        />

        <label className="label">Imagen de perfil</label>

        <div className="container">
          <label
            className="form2-submit js__profile-trigger"
            htmlFor="user-photo"
          >
            Añadir imagen
          </label>
          <input
            type="file"
            className="input-file js__profile-upload-btn"
            id="user-photo"
          />
          <span className="div 	js__profile-preview js_reset_previewimg"></span>
        </div>

        <label className="label">Email</label>
        <input
          type="email"
          className="input js_resetInput"
          name="email"
          placeholder="Ej: sally.hill@gmail.com"
          onChange={props.handleInput}
          value={props.dataCard.email}
          required
        />

        <label className="label">Teléfono</label>
        <input
          type="tel"
          className="input js_resetInput"
          name="phone"
          placeholder="Ej: 555-55-55-55"
          onChange={props.handleInput}
          value={props.dataCard.phone}
          required
        />
        <label className="label">Linkedin</label>
        <input
          type="text"
          className="input js_resetInput"
          name="linkedin"
          placeholder="Ej: /sally-hill-9b3888143/"
          onChange={props.handleInput}
          value={props.dataCard.linkedin}
          required
        />
        <label className="label">Github</label>
        <input
          type="text"
          className="input js_resetInput"
          name="github"
          placeholder="Ej: sally-hill"
          onChange={props.handleInput}
          value={props.dataCard.github}
          required
        />
      </fieldset>
    </>
  );
};

export default Fill;
