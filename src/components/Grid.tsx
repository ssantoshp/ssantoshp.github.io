import styles from './grid.module.css';
import Spline from '@splinetool/react-spline';
import { Icon } from '@iconify/react';

const santosh = ['Santosh', '桑托什', 'サントシュ', '산토시', 'Сантош', 'संतोष', 'سانتوش', 'סנטוש', 'சந்தோஷ்'];

export default function Grid() {
  return (
    <div className={styles.container}> 

        <div className={styles.header}>
            <h1>Santosh Passoubady</h1>
            <a>Santosh</a>
        </div>

        <div className={styles.desc}>
            <p>Quick description... + Socials</p>
        </div>

        <div className={styles.about}>
            <h2>About</h2>
            <p>Writing...</p>
            <Icon icon="octicon:download-16" />
        </div>

        <div className={styles.school}>
            <h3>School</h3>
            <p>U1 Math + CS at McGill University.</p>
        </div>

        <div className={styles.work}>
            <h3>Work</h3>
            <p>Working as a Software Engineer at Stathera, focusing on data platform development. </p>
            <a>Download Resume</a>
        </div>
    </div>
  )
}