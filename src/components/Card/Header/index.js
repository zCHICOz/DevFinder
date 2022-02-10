import { useEffect, useState} from 'react';
import months from './months';

import './header.css';

function Header({ data }) {
  const [date, setDate] = useState(new Date());
  useEffect(() => setDate(new Date(data.createdAt)), [data]);

  return (
    <header className="card-header-container">
      <a href={data.url} target="_blank" rel="noreferrer">
        <img src={data.avatar} alt="Avatar GitHub" />
      </a>

      <section className="texts">
        <div className="user-container">
          <div>
            <a href={data.url} className="name" target="_blank" rel="noreferrer">
              { data.name }
            </a>

            <a href={data.url} className="userName" target="_blank" rel="noreferrer">
              @{ data.username }
            </a>
          </div>

          <span className="joined-info">
            {
              `Joined ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
            }
          </span>

        </div>

        <p>
          {
            data.bio ? data.bio : 'This profile has no bio.'
          }
        </p>
      </section>
    </header>
  );
}

export default Header;
