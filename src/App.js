import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';

function App() {
  return (
    <GithubProvider>
        <AlertProvider>
            <Router>
              <div className='flex flex-col justify-between h-screen'>
                <Navbar />
                <main className='container mx-auto px-3 pb-12'>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/NotFound' element={<NotFound />} />
                    <Route path='/*' element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </Router>
        </AlertProvider>
    </GithubProvider>
  );
}

export default App;
