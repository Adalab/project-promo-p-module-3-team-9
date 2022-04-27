import '../styles/App.scss';
import logoAdalab from '../images/logo-adalab.png';
import logoFontAwesome from '../images/tarjetas-molonas.png';
import { useState } from 'react';
import dataApi from '../services/api';
import CardPreview from './CardPreview';

function App() {
  //constantes de estado
  const [designClassCollapsed, setDesignClassCollapsed] = useState('collapsed');
  const [fillClassCollapsed, setFillClassCollapsed] = useState('collapsed');
  const [shareClassCollapsed, setShareClassCollapsed] = useState('collapsed');
  const [dataCard, setDataCard] = useState({
    palette: '1',
    name: '',
    job: '',
    email: '',
    phone: '',
    photo: '',
    linkedin: '',
    github: '',
  });
  const [dataApi, setDataApi] = useState('');

  //funciones manejadoras
  const handleInput = (event) => {
    const inputValue = event.target.value;
    const inputChanged = event.target.name;
    setDataCard({ ...dataCard, [inputChanged]: inputValue });
  };

  const handleCollapsed = (ev) => {
    const targetId = ev.currentTarget.id;
    if (targetId === 'design') {
      designClassCollapsed === 'collapsed'
        ? setDesignClassCollapsed('')
        : setDesignClassCollapsed('collapsed');
    } else if (targetId === 'fill') {
      fillClassCollapsed === 'collapsed'
        ? setFillClassCollapsed('')
        : setFillClassCollapsed('collapsed');
    } else if (targetId === 'share') {
      shareClassCollapsed === 'collapsed'
        ? setShareClassCollapsed('')
        : setShareClassCollapsed('collapsed');
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    setDataCard({
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    });
  };

  //aquí hacer la llamada a la api para enviar los datos
  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(dataCard).then((response) => {
      setDataApi(response);
    });
  };

  return (
    <div>
      <header className="header">
        <img
          className="header__image-brand"
          src={logoFontAwesome}
          alt="imagen awesome profile cards"
        />
      </header>

      <main className="main">
        <CardPreview data={dataCard} />

        <form action="/signup" method="post" className="main2">
          <fieldset className="design">
            <legend
              id="design"
              className="design__legend js-designLegend"
              onClick={handleCollapsed}
            >
              <div className="design__legend--topLegend">
                <i className="fa-solid fa-object-ungroup design__legend--icon"></i>
                <h2 className="design__title">Diseña</h2>
              </div>
              <i className="fa-solid fa-angle-up design__legend--arrow js-designArrow fa-transform"></i>
            </legend>
            <div className="js-design">
              <div className={`box1 ${designClassCollapsed}`}>
                <h3 className="design__inputname">Colores</h3>
                <div className="design__options">
                  <div className="option">
                    <input
                      className="option__input js-input-1 js-option-input"
                      id="1"
                      type="radio"
                      value="1"
                      name="palette"
                      onChange={handleInput}
                      checked={dataCard.palette === '1'}
                    />
                    <label className="design__options--box" htmlFor="option1">
                      <div className="option1__color1"></div>
                      <div className="option1__color2"></div>
                      <div className="option1__color3"></div>
                    </label>
                  </div>
                  <div className="option">
                    <input
                      className="option__input js-input-2 js-option-input"
                      id="2"
                      type="radio"
                      value="2"
                      name="palette"
                      onChange={handleInput}
                      checked={dataCard.palette === '2'}
                    />
                    <label className="design__options--box" htmlFor="option2">
                      <div className="option2__color1"></div>
                      <div className="option2__color2"></div>
                      <div className="option2__color3"></div>
                    </label>
                  </div>
                  <div className="option">
                    <input
                      className="option__input js-input-3 js-option-input"
                      id="3"
                      type="radio"
                      value="3"
                      name="palette"
                      onChange={handleInput}
                      checked={dataCard.palette === '3'}
                    />
                    <label className="design__options--box" htmlFor="option3">
                      <div className="option3__color1"></div>
                      <div className="option3__color2"></div>
                      <div className="option3__color3"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>

          <div className="line"></div>

          <div
            id="fill"
            className="filled js-desplegable"
            onClick={handleCollapsed}
          >
            <i className="fa-solid fa-keyboard"></i>
            <legend className="filled__text">Rellena</legend>
            <i className="fa-solid fa-angle-up fill-arrow js-icon-rellena fa-transform "></i>
          </div>

          <fieldset
            action="/signup"
            method="post"
            className={`form2 js-fieldset ${fillClassCollapsed}`}
          >
            <label className="label1">Nombre completo</label>
            <input
              type="text"
              className="input js_resetInput"
              name="name"
              placeholder="Ej: Sally Hill"
              onChange={handleInput}
              value={dataCard.name}
              required
            />
            <label className="label">Puesto</label>
            <input
              type="text"
              className="input js_resetInput"
              name="job"
              placeholder="Ej: Front-end unicorn"
              onChange={handleInput}
              value={dataCard.job}
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
              onChange={handleInput}
              value={dataCard.email}
              required
            />

            <label className="label">Teléfono</label>
            <input
              type="tel"
              className="input js_resetInput"
              name="phone"
              placeholder="Ej: 555-55-55-55"
              onChange={handleInput}
              value={dataCard.phone}
              required
            />
            <label className="label">Linkedin</label>
            <input
              type="text"
              className="input js_resetInput"
              name="linkedin"
              placeholder="Ej: /sally-hill-9b3888143/"
              onChange={handleInput}
              value={dataCard.linkedin}
              required
            />
            <label className="label">Github</label>
            <input
              type="text"
              className="input js_resetInput"
              name="github"
              placeholder="Ej: sally-hill"
              onChange={handleInput}
              value={dataCard.github}
              required
            />
          </fieldset>
          <div className="line"></div>
          <fieldset action="/signup" method="post" className="share-container">
            <label
              id="share"
              className="form--heading js-title_share"
              onClick={handleCollapsed}
            >
              <div className="form--heading__left">
                <i className="fa-solid fa-share-nodes"></i>
                <h2 className="share--text">COMPARTE</h2>
              </div>
              <i className="fa-solid fa-angle-up fill-arrow js-shareArrow fa-transform"></i>
            </label>
            <div className="form3 js-share">
              <div className={`form3--section-1 ${shareClassCollapsed}`}>
                <p className="text-share share-error js-text-share"></p>
                <button
                  className="form3--section-1__button js_bntCreate"
                  onClick={handleClickCreateCard}
                >
                  <i className="fa-regular fa-address-card"></i>
                  <p className="button-create">CREAR TARJETA</p>
                </button>
              </div>

              <div className="form3--section-2 js-createHidden js-shareCard">
                <div className="form3--section-2__text">
                  <p className="text-share">La tarjeta ha sido creada</p>
                  <a
                    className="url-share js_shareUrl"
                    href=""
                    target="_blank"
                  ></a>
                </div>

                <button className="form3--section-2__button">
                  <i className="fa-brands fa-twitter"></i>
                  <a
                    href=""
                    className="text-twitter js_shareTwitter"
                    target="_blank"
                  >
                    Compartir en Twitter
                  </a>
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </main>

      <footer className="footer">
        <h4 className="footer__title">Awesome profile-cards @2018</h4>
        <nav className="footer__logo">
          <a href="https://adalab.es/" title="adalab.es">
            <img src={logoAdalab} alt="logo Adalab" />
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
