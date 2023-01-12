import styles from './style';

import { Navbar, Rainbow, Hero, Stats, MainInfo, Locations, Event, Articles, Sponsors, FundsInfo, Footer } from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
      <Rainbow  className={`${styles.boxWidth}`}/> 
    <div className={`${styles.flexCenter}`}>
      <div className='bg-red-200 w-full justify-center flex'>
        <Navbar />
      </div>
      <div className='top-0 h-28' />
    </div>
    <div>

    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Event />
        <MainInfo />
        <Locations />
        <Articles />
        <Sponsors />
        <FundsInfo />
        <Footer />
      </div>
    </div>
  </div>
)

export default App