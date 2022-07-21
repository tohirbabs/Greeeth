import Carousel from "carousel-react-rcdev";
import {
  birthdays,
  easter,
  mothersday,
  valentine,
  weddings,
} from "../../assets/GetInvolved";

const Carouseler = () => {
  return (
    <Carousel>
      <img src={valentine} alt="imagem" title="imagem" />
      <img src={weddings} alt="imagem" title="imagem" />
      <img src={birthdays} alt="imagem" title="imagem" />
      <img src={easter} alt="imagem" title="imagem" />
      <img src={mothersday} alt="imagem" title="imagem" />
    </Carousel>
  );
};

export default Carouseler;
