import './App.scss';
import AuthProvider from './context/authContext';
import Login from './components/todo/login';

function App() {
  return (
    <AuthProvider>
      <Login/>
      
    </AuthProvider>
  );
}

export default App;