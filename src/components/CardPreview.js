const CardPreview = (props) => {
  return (
    <section
      className={`main1 js-preview-container palette-${props.data.palette}`}
    >
      <div className="main1__container">
        <div>
          <button
            className="main1__container__reset js_buttonReset"
            //onClick={handleReset}
          >
            <i className="fa-solid fa-trash-can"></i>reset
          </button>

          <div className="main1__container__text">
            <div className="border">
              <p className="main1__container__text--name js-preview-name">
                {props.data.name || 'Nombre Completo'}
              </p>
              <p className="main1__container__text--profession js-preview-job">
                {props.data.job || 'Front-end developer'}
              </p>
            </div>
          </div>

          <div className="main1__container__cat js__profile-image js_reset_image"></div>

          <nav className="main1__container__rrss">
            <a className="js-preview-phone" href={`tel: ${props.data.phone}`}>
              <i className="main1__container__rrss__link fa-solid fa-mobile-screen-button"></i>
            </a>
            <a
              className="js-preview-email"
              href={`mailto: ${props.data.email}`}
            >
              <i className="main1__container__rrss__link fa-solid fa-envelope"></i>
            </a>
            <a className="js-preview-linkedin" href={props.data.linkedin}>
              <i className="main1__container__rrss__link fa-brands fa-linkedin-in"></i>
            </a>
            <a className="js-preview-github" href={props.data.github}>
              <i className="main1__container__rrss__link fa-brands fa-github-alt"></i>
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default CardPreview;
