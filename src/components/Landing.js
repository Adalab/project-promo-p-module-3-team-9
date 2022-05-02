import landingImage from "../images/tarjetas-molonas.png";

const Landing = () => {
  return (
    <section class="landing">
      <div class="landing__logo">
        <img class="landing__image" src={landingImage} alt="" />
      </div>

      <div class="landing__content">
        <h1 class="landing__title">Crea tu tarjeta de visita</h1>

        <p class="landing__text">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </p>

        <ul class="landing__rectangle">
          <li class="landing__rectangle--item">
            <i class="fa fa-object-ungroup"></i>
            <span class="words">Diseña</span>
          </li>

          <li class="landing__rectangle--item">
            <i class="fa-solid fa-keyboard"></i>
            <span class="words">Rellena</span>
          </li>

          <li class="landing__rectangle--item">
            <i class="fa fa-share-alt"></i>
            <span class="words">Comparte</span>
          </li>
        </ul>

        <button class="landing__button">
          <a class="landing__button--link" href="./create.html">
            comenzar
          </a>
        </button>
      </div>
    </section>
  );
};

export default Landing;
