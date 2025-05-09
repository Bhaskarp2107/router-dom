import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Hello, {user?.name || user?.username} 👋</h1>
      <img
        src="https://img.freepik.com/free-vector/user-interface-design-concept_23-2148812973.jpg"
        alt="Dashboard"
        style={{ width: '80%', maxWidth: '400px', margin: '20px auto', display: 'block', borderRadius: '12px' }}
      />
      <p style={{ textAlign: 'center', padding: '0 10px', lineHeight: '1.6' }}>
        You’ve successfully logged in! This dashboard is your private space to explore. In a full application, you could add settings, data, charts, or even connect to a user API.
        This area is protected and not accessible without authentication. Enjoy your journey with React!
      </p>
    </div>
  );
};

export default Dashboard;
