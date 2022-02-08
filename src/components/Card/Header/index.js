import { useEffect, useState} from 'react';
import months from './months';

import './header.css';

function Header({ data }) {
  const [date, setDate] = useState(new Date());
  useEffect(() => setDate(new Date(data.createdAt)), [data]);

  return (
    <header className="card-header-container">
      <div className="main-infos">
        <a href={data.url} target="_blank" rel="noreferrer">
          <img src={data.avatar} alt="Avatar GitHub" />
        </a>

        <div className="texts">
          <div className="username">
            <h2>{ data.name }</h2>
            <span>@{ data.username }</span>
          </div>

          <p>
            {
              data.bio ? data.bio : 'This profile has no bio.'
            }
          </p>
        </div>
      </div>

      <span className="joined-info">
        {
          `Joined ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
        }
      </span>
    </header>
  );
}

export default Header;
