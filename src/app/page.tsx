import Hero from '@/components/Hero/Hero';
import './page.scss';
import Concerts from '@/components/Concerts/Concerts';
import Artists from '@/components/Artists/Artists';
import Contact from '@/components/Contact/Contact';

const Home = () => {
  return (
    <div className='mainPage'>
      <Hero />
      <Concerts />
      <Artists />
      <Contact />
    </div>
  );
}

export default Home;
