import styles from './grid.module.css';
import Spline from '@splinetool/react-spline';


export default function Grid() {
  return (
    <div className={styles.container}> 

        <div className={styles.header}>
            <h1>Santosh Passoubady</h1>
            <p>@ssantoshp</p>
        </div>

        <div className={styles.desc}>
            <h2>Hi, I'm Santosh.</h2>
            <p>I'm a software engineer and student based in Montreal, Canada.</p>
        </div>

        <div className={styles.about}>
            <h2>About</h2>
            <p>Writing...</p>
        </div>

        <div className={styles.school}>
            <h3>School</h3>
            <p>Currently studying Math + CS at McGill University.</p>
        </div>

        <div className={styles.work}>
            <h3>Work</h3>
            <p>Working as a Software Engineer at Stathera, focusing on data platform development.</p>
        </div>
    </div>
  )
}