import React from "react";
import { HomeUi } from "./style";
import Header from "../../Components/Header";
import CarouselComponent from "../../Components/Corusel/Corusell";
import Cards from "../../Components/Card/Cards";
import ThePerfect from "../../Components/ThePerfect/ThePerfect";
import Comuty from "../../Components/Comunty/Comuty";
import Whycode from "../../Components/Whycode/Whycode";
import Invest from "../../Components/Invest/Invest";
import Hasty from "../../Components/Hasty/Hasty";
import Award from "../../Components/Award/Award";
import Form from "../../Components/Form/Form";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <HomeUi>
      <Header />
      <CarouselComponent />
      <Cards />
      <ThePerfect />
      <Comuty />
      <Whycode />
      <Invest />
      <Hasty />
      <Award />
      <Form />
      <Footer />
    </HomeUi>
  );
};

export default Home;
