import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

export function Feedbacks() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate("/version1");
  };

  return (
    <form onSubmit={handleSubmit} className="text-start">
      <p className="mb-4 text-center">
        <strong>Feedbacks </strong>
      </p>

      <div className="mb-3 text-start">
        <label htmlFor="email" className="form-label">
          Email ou Nom D'utilisateur
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mb-3 text-start">
        <label htmlFor="message" className="form-label">
          Inserez vos préoccupations ou soucis avez l'application
        </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3} placeholder="Bonjour, j'ai des soucis avec......"/>
      </div>

      <p className="fs-6">
        <small>
          Si Vous voulez retourner a la page d'accueil cliquez{" "}
          <a href="#">ici</a>. Si vous n'avez pas de compte cliquez{" "}
          <a href="#">ici</a> pour vous s'inscrire.
        </small>
      </p>

      <Alert variant="danger" className="d-none d-lg-block fs-6">
        Error: Resize your browser to show the responsive offcanvas toggle.
      </Alert>

      <button className="btn btn-primary" type="submit">
        Envoyer
      </button>
    </form>
  );
}
