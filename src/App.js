import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Content from './components/Content';
import SuggestedContent from './components/SuggestedContent';

function App() {
  return (
    <>
    <div className='container mx-auto flex gap-10 justify-center'>
    <NavBar/>
    <Content/>
    <SuggestedContent />
    
    </div>
  
    </>
  );
}

export default App;
