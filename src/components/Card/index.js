import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import './card.css';

function Card({ data }) {
  return (
    <section className="card-container">
      <Header data={data} />
      <Body data={data} />
      <Footer data={data} />
    </section>
  );
}

export default Card;
