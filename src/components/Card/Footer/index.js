import { FaTwitter, FaLink, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import LinkItem from './LinkItem';
import './footer.css';

function Footer({ data }) {
  return (
    <footer className="card-footer-container">
      <section>
        <LinkItem info={data.location} url="#">
          <FaMapMarkerAlt size={24} color="#FFF" className="icon-footer" />
        </LinkItem>

        <LinkItem info={data.link} url={data.link}>
          <FaLink size={24} color="#FFF" className="icon-footer" />
        </LinkItem>
      </section>

      <section>
        <LinkItem
          info={data.twitter}
          url={data.twitter ? `https://twitter.com/${data.twitter}` : '#'}
        >
          <FaTwitter size={24} color="#FFF" className="icon-footer" />
        </LinkItem>

        <LinkItem info={data.company} url="#">
          <FaBuilding size={24} color="#FFF" className="icon-footer" />
        </LinkItem>
      </section>
    </footer>
  );
}

export default Footer;
