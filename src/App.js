import { useState } from 'react';
import api from './services/api';

import Header from './components/Header';
import SearchBox from './components/SearchBox';
import Card from './components/Card';

import './index.css';

function App() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showMessageError, setShowMessageError] = useState(false);

  function loadUserInfo() {
    setUsername('');
    setIsLoading(false);

    api.get(`/users/${username}`)
    .then(res => {
      const userData = {
        avatar: res.data.avatar_url,
        bio: res.data.bio,
        company: res.data.company,
        followers: res.data.followers,
        following: res.data.following,
        location: res.data.location,
        username: res.data.login,
        name: res.data.name,
        repos: res.data.public_repos,
        twitter: res.data.twitter_username,
        link: res.data.blog,
        createdAt: res.data.created_at,
        url: res.data.url
      };
      
      setShowMessageError(false);
      setData(userData);
      setIsLoading(false);
      setShowCard(true);
    })
    .catch(err => {
      setShowCard(false);
      setData([]);
      setShowMessageError(true);
      setIsLoading(false);
    })
  };

  return (
    <div className="container">
      <Header />
      <SearchBox
        username={username}
        setUsername={setUsername}
        loadUserInfo={loadUserInfo}
      />

      {
        isLoading && 'Carregando...'
      }

      {
        showCard &&
        <Card
          data={data}
        />
      }

      {
        showMessageError && <h2 className="message-error">Erro ao buscar dados do usuário!</h2>
      }
    </div>
  );
}

export default App;
