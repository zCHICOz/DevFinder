import './body.css';

function Body({ repos, followers, following }) {
  return (
    <main className="card-body-container">
      <div className="user-info">
        <h2>Repos</h2>
        <span>{ repos || '' }</span>
      </div>
      <div className="user-info">
        <h2>Followers</h2>
        <span>{ followers || '' }</span>
      </div>
      <div className="user-info">
        <h2>Following</h2>
        <span>{ following || '' }</span>
      </div>
    </main>
  );
}

export default Body;
