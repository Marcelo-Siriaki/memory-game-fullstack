import { Link } from "react-router-dom";
import NotFound from "../../assets/error-404.svg";
import "./style.css";

function PageNotFound() {
  return (
    <div className="main-container-error">
      <img src={NotFound} alt="Imagem de erro 404" className="img-error" />

      <Link className="link" to="/">
        Voltar ao início
      </Link>
    </div>
  );
}

export default PageNotFound;
