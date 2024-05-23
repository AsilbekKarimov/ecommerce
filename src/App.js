import logo from './logo.svg';
import './App.css';
import NewsletterAdd from './pages/NewsletterAdd';
import AboutCompany from './pages/AboutCompany';

function App() {
  return (
    <div className="App">
        <NewsletterAdd />
      
        <h1 className='text-primary'></h1>
        <AboutCompany/>
    </div>
  );  
}

export default App;
