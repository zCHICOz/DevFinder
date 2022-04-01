import { useEffect, useState} from 'react';
import months from './months';

import './header.css';

function Header({ url, avatar, name, username, bio, createdAt }) {
  const [date, setDate] = useState(new Date());
  useEffect(() => setDate(new Date(createdAt)), [createdAt]);

  return (
    <header className="card-header-container">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={avatar} alt="Avatar GitHub" />
      </a>

      <section className="texts">
        <div className="user-container">
          <div>
            <a href={url} className="name" target="_blank" rel="noreferrer">
              { name }
            </a>

            <a href={url} className="userName" target="_blank" rel="noreferrer">
              @{ username }
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
            bio ? bio : 'This profile has no bio.'
          }
        </p>
      </section>
    </header>
  );
}

export default Header;
