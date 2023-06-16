import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
