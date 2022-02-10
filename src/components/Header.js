function Home({ reloadApp }) {
  return (
    <header style={styles.container}>
      <h1
        style={styles.title}
        onClick={() => reloadApp()}
      >
        devfinder
      </h1>
    </header>
  );
}

const styles = {
  container: {
    marginBottom: '40px',
  },
  title: {
    fontSize: '1.5em',
    cursor: 'pointer',
  }
}

export default Home;
