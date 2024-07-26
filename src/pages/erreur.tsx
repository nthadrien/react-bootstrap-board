import { useRouteError, isRouteErrorResponse, redirect, useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/loadingSpinner";
import { Container, Button } from "react-bootstrap";
import Footer from "../components/footer";
import { ReactHTMLElement, ReactInstance } from "react";

export default function ErrorPage() {

  const error = useRouteError();
  const navigate = useNavigate();

  const relocateTo =() => navigate(-1);
  const backToHome = () => navigate("/resumes");

  const LocationComponents = () => (
    <Container>
      <Button onClick={relocateTo} className="mx-3" variant="warning" >Page Precendente</Button>
      <Button onClick={backToHome} className="mx-3" variant="success">Acceil  </Button>
    </Container>
  )

  if (isRouteErrorResponse(error)) return (
    <main className="max-container p-4 d-flex flex-column align-items-center justify-content-evenly">
      <h1>{error?.status} Oops!</h1>

      <h2> Désolé, une erreur inattendue s'est produite.</h2>
      <h3>{error?.statusText}</h3>
      <LoadingSpinner />
      <p className="text-danger"> Erreur: {error?.data} </p>
      <LocationComponents />
    </main>
  )

  return (
    <div>
      <h1>Oops!</h1>
      <h2> Désolé, une erreur inattendue s'est produite.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, velit autem vitae nisi hic asperiores soluta ducimus amet neque assumenda et distinctio repudiandae. Voluptate illum non, blanditiis sit odit inventore!
      </p>
      <LoadingSpinner />
      <LocationComponents />
    </div>
  );
}