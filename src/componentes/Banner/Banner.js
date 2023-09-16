import { Fragment } from "react";
import "./Banner.css";

function Banner() {
  return (
    <Fragment>
      <header className="banner">
        <img
          src="./imagens/logo.jpg"
          alt="O banner principal da página do CineLista"
        />
      </header>
    </Fragment>
  );
}

export default Banner;
