import Header from "./Header";
import Footer from "./Footer";
import CardPreview from "./CardPreview";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

const Create = (props) => {
  return (
    <>
      <Header />

      <main className="main">
        <CardPreview
          dataCard={props.dataCard}
          handleReset={props.handleReset}
        />

        <form action="/signup" method="post" className="main2">
          <Design
            dataCard={props.dataCard}
            designClassCollapsed={props.designClassCollapsed}
            handleInput={props.handleInput}
            handleCollapsed={props.handleCollapsed}
          />

          <div className="line"></div>

          <Fill
            dataCard={props.dataCard}
            fillClassCollapsed={props.fillClassCollapsed}
            handleInput={props.handleInput}
            handleCollapsed={props.handleCollapsed}
          />

          <div className="line"></div>
          <Share
            dataCard={props.dataCard}
            shareClassCollapsed={props.shareClassCollapsed}
            handleInput={props.handleInput}
            handleCollapsed={props.handleCollapsed}
          />
        </form>
      </main>

      <Footer />
    </>
  );
};

export default Create;