import React from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";




export const Login: React.FC<any> = () => {

  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate("/version1");
  }

  return (
    <form onSubmit={handleSubmit} className="text-start">
      <p className="mb-4 text-center">
        <strong>Login</strong>
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
        <label htmlFor="password" className="form-label">
          Mot De Passe
        </label>
        <input type="password" className="form-control" id="password" />
      </div>

      <p className="fs-6">
          <small>
          Si Vous n'avez pas de compte ? Inscrivez-vous <a href="#">ici</a>. Si
          vous avez oublié votre <b>Mot de passe</b> cliquez <a href="#">ici</a> pour
          la récupération du mot de passe.
          </small>
      </p>

      <div className="mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />

        <label className="form-check-label ms-2" htmlFor="exampleCheck1">
          Etes vous un Admin ?
        </label>
      </div>

      <Alert variant="danger" className="d-none d-lg-block fs-6">
        Error: Resize your browser to show the responsive offcanvas toggle.
      </Alert>

      <button className="btn btn-primary" type="submit">
        connexion
      </button>
    </form>
  );
};

/*
**Sign Up Button:** (Button to submit the registration form)
- **Already have an account? Log in here.** (Link to the login page)
*/

export default function LoginsPage() {
  return (
    <Login />
  );
}
