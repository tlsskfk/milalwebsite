import styles from './style';

import { Navbar, Hero, Stats, MainInfo, Locations, Event, Articles, Sponsors, FundsInfo, Footer } from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <MainInfo />
        <Locations />
        <Event />
        <Articles />
        <Sponsors />
        <FundsInfo />
        <Footer />
      </div>
    </div>
  </div>
)

export default App