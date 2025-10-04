import Hero from '@/components/Hero/Hero';
import './page.scss';
import Concerts from '@/components/Concerts/Concerts';
import Artists from '@/components/Artists/Artists';

const Home = () => {
  return (
    <div className='mainPage'>
      <Hero />
      <Concerts />
      <Artists />
    </div>
  );
}

export default Home;
