const Home = () => {
  return (
    <div>
      <h1>Welcome to ReactAuth Hub</h1>
      <img
        src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4302.jpg"
        alt="Welcome"
        style={{ width: '80%', maxWidth: '400px', margin: '20px auto', display: 'block', borderRadius: '12px' }}
      />
      <p style={{ textAlign: 'center', padding: '0 10px', lineHeight: '1.6' }}>
        This simple React application demonstrates how modern web apps handle authentication and routing. Whether you're a beginner or exploring advanced React concepts,
        this platform helps you understand protected routes, user sessions, and localStorage-based auth. Click Login or Signup to get started!
      </p>
    </div>
  );
};

export default Home;
