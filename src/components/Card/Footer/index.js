import { FaTwitter, FaLink, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import LinkItem from './LinkItem';
import './footer.css';

function Footer({ location, link, twitter, company }) {
  return (
    <footer className="card-footer-container">
      <section>
        <LinkItem info={location}>
          <FaMapMarkerAlt size={24} color="#FFF" className="icon-footer" />
        </LinkItem>

        <LinkItem info={link} url={link}>
          <FaLink size={24} color="#FFF" className="icon-footer" />
        </LinkItem>
      </section>

      <section>
        <LinkItem
          info={twitter}
          url={twitter && `https://twitter.com/${twitter}`}
        >
          <FaTwitter size={24} color="#FFF" className="icon-footer" />
        </LinkItem>

        <LinkItem info={company}>
          <FaBuilding size={24} color="#FFF" className="icon-footer" />
        </LinkItem>
      </section>
    </footer>
  );
}

export default Footer;
