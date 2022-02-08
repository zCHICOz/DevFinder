import './body.css';

function Body({ data }) {
  return (
    <main className="card-body-container">
      <div className="user-info">
        <h2>Repos</h2>
        <span>{ data.repos }</span>
      </div>
      <div className="user-info">
        <h2>Followers</h2>
        <span>{ data.followers }</span>
      </div>
      <div className="user-info">
        <h2>Following</h2>
        <span>{ data.following }</span>
      </div>
    </main>
  );
}

export default Body;
