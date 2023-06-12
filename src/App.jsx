import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Spinners from './components/Spinners/Spinners';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className='App' style={{ overflow: 'hidden' }}>
      {loading ? (
        <Spinners />
      ) : (
        <>
          <Navbar />
          <Home />
          <Sidebar />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
