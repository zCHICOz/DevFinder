import { FaTwitter, FaLink, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import './footer.css';

function Footer({ data }) {
  return (
    <footer className="card-footer-container">
      <section>
        <a href="#" className="item" target="_blank">
          <FaMapMarkerAlt size={24} color="#FFF" className="icon-footer" />
          <span>{ data.location || 'No data.' }</span>
        </a>
        <a href={data.link} className="item" target="_blank" rel="noreferrer">
          <FaLink size={24} color="#FFF" className="icon-footer" />
          <span>{ data.link || 'No data.' }</span>
        </a>
      </section>

      <section>
        <a href={`https://twitter.com/${data.twitter}`} className="item" target="_blank" rel="noreferrer">
          <FaTwitter size={24} color="#FFF" className="icon-footer" />
          <span>{ data.twitter ? `@ ${data.twitter}` : 'No data.' }</span>
        </a>
        <a href="#" className="item" target="_blank">
          <FaBuilding size={24} color="#FFF" className="icon-footer" />
          <span>{ data.company || 'No data.' }</span>
        </a>
      </section>
    </footer>
  );
}

export default Footer;
