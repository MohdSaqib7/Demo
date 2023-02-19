import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <div></div>
      <Container />
      <Footer />
      <h3 className='doveloper'>Designed & Developed by Mohd Saqib</h3>
    </div>
  );
}

export default App;
