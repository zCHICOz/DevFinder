import { useState } from 'react';
import api from './services/api';

import Header from './components/Header';
import SearchBox from './components/SearchBox';
import Card from './components/Card';

import './index.css';

function App() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');
  const [msgStatus, setMsgStatus] = useState('Pesquise por um usuário!');
  const [showCard, setShowCard] = useState(false);
  const [showMessageStatus, setShowMessageStatus] = useState(true);

  function reloadApp() {
    setData([]);
    setShowCard(false);
    setMsgStatus('Pesquise por um usuário!');
    setShowMessageStatus(true);
  };

  function loadUserInfo() {
    setShowMessageStatus(true);
    setShowCard(false);
    setUsername('');
    setMsgStatus('Carregando...');

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
        url: res.data.html_url
      };
      
      setData(userData);
      setShowMessageStatus(false);
      setShowCard(true);
    })
    .catch(err => {
      setShowCard(false);
      setData([]);
      setShowMessageStatus(true);
      setMsgStatus('Erro ao buscar dados do usuário!');
    })
  };

  return (
    <div className="container">
      <Header reloadApp={reloadApp} />
      <SearchBox
        username={username}
        setUsername={setUsername}
        loadUserInfo={loadUserInfo}
      />

      {
        showMessageStatus && <h2 className="msg-status">{ msgStatus }</h2>
      }

      <main className="main-content">
        {
          showCard &&
          <Card
            data={data}
          />
        }
      </main>
    </div>
  );
}

export default App;
