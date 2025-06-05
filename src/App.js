import './App.css';
import './index.css';
import Carousel from './Carousel';
import Header from './Header';
import ContactIcons from './ContactIcons';
import Description from './Description';

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-yellow-200 via-amber-300 to-orange-400 text-black'>
 <Header />
<Carousel />
 <ContactIcons />
 <Description />
 </div>
  );
}

export default App;
