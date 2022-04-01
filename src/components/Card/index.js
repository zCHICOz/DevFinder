import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import './card.css';

function Card({ data }) {
  return (
    <section className="card-container">
      <Header
        avatar={data.avatar}
        bio={data.bio}
        createdAt={data.createdAt}
        name={data.name}
        url={data.url}
        username={data.username}
      />
      <Body
        repos={data.repos} 
        followers={data.followers}
        following={data.following}
      />
      <Footer
        company={data.company}
        link={data.link}
        location={data.location}
        twitter={data.twitter}
      />
    </section>
  );
}

export default Card;
