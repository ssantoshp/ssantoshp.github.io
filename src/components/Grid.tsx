import styles from './grid.module.css';
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
            <p>Moving fast and breaking things.</p>
        </div>

        <div className={styles.about}>
            <h2>Projects</h2>
            <p>Writing...</p>
        </div>

        <div className={styles.school}>
            <h3>School</h3>
            <p>U1 Math + Computer Science at <span>McGill University</span>, with an expected graduation date of <span>May 2025</span>.</p>
        </div>

        <div className={styles.work}>
            <h3>Work</h3>
            <p>Software Engineer Intern (Part-time) at <span>Stathera</span>, focusing on data platform development. </p>
            <br />
            <a className={styles.download}><Icon icon="octicon:download-16" /> Download Resume</a>
        </div>
    </div>
  )
}