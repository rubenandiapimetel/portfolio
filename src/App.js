import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Rubén Andía",
    location: "Madrid, España",
    email: "rubenandiapimentel@gmail.com",
    availability: "Open for work",
    brand:
      "Bienvenido a mi perfil, aquí encontrarás a un apasionado por la tecnología y por emprender nuevos proyectos.Me considero dinámico, el cambio y saber adaptarse considero que es clave tanto como asumir retos y responsabilidades. Constancia, resiliencia y amor por el aprendizaje constante.Aficionado a la inversión, a la lectura y al deporte por responsabilidad.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
