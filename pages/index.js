import styles from './index.module.css';

import Navbar from '../components/layout/navbar'
import SideNav from '../components/layout/side-navbar'

export default function Home() {
  return (
    <div className="App">
      <SideNav/>

      <div className={styles.Content}>
        <Navbar/>
        <h2 className='Section' id="section-1">section 1</h2>
        <h2 className='Section' id="section-2">section 2</h2>
        <h2 className='Section' id="section-3">section 3</h2>
      </div>
    </div>
  );
}
