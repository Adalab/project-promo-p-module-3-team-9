const Share = (props) => {
  const handleShareCollapsed = (ev) => {
    const targetId = ev.currentTarget.id;
    props.handleCollapsed(targetId);
  };
  return (
    <fieldset action="/signup" method="post" className="share-container">
      <label
        id="share"
        className="form--heading js-title_share"
        onClick={handleShareCollapsed}
      >
        <div className="form--heading__left">
          <i className="fa-solid fa-share-nodes"></i>
          <h2 className="share--text">COMPARTE</h2>
        </div>
        <i
          className={`fa-solid fa-angle-up fill-arrow js-shareArrow ${props.shareArrow}`}
        ></i>
      </label>
      <div className="form3 js-share">
        <div className={`form3--section-1 ${props.shareClass}`}>
          <p className="text-share share-error js-text-share"></p>
          <button
            className="form3--section-1__button js_bntCreate"
            onClick={props.handleClickCreateCard}
          >
            <i className="fa-regular fa-address-card"></i>
            <p className="button-create">CREAR TARJETA</p>
          </button>
        </div>

        <div className="form3--section-2 js-createHidden js-shareCard">
          <div className="form3--section-2__text">
            <p className="text-share">La tarjeta ha sido creada</p>
            <a className="url-share js_shareUrl" href="" target="_blank"></a>
          </div>

          <button className="form3--section-2__button">
            <i className="fa-brands fa-twitter"></i>
            <a href="" className="text-twitter js_shareTwitter" target="_blank">
              Compartir en Twitter
            </a>
          </button>
        </div>
      </div>
    </fieldset>
  );
};

export default Share;
