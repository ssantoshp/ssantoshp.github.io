import styles from './grid.module.css';
import Link from 'next/link';

const santosh = ['Santosh', '桑托什', 'サントシュ', '산토시', 'Сантош', 'संतोष', 'سانتوش', 'סנטוש', 'சந்தோஷ்'];

export default function Grid() {
  return (

    <>

    <div className={styles.container}> 

        <div className={styles.header}>
            <h1>Santosh Passoubady</h1>
            <a>Santosh</a>
        </div>

        <div className={styles.empty}></div>

        <div className={styles.desc}>
            <p>Moving fast and breaking things.</p>
            <div className={styles.socials}>

                {/* Make this a component?? */}

                <Link href="https://github.com/ssantoshp" rel="noopener noreferrer" style={{ color: "inherit"}} target="_blank">
                    <span className={`iconify ${styles.socialItem}`} data-icon="bi:github"></span>
                </Link>

                <Link href="https://www.linkedin.com/in/ssantoshp/" rel="noopener noreferrer" style={{ color: "inherit"}} target="_blank">
                    <span className={`iconify ${styles.socialItem}`} data-icon="bi:linkedin"></span>
                </Link>

                <Link href="https://discordapp.com/users/759478394865057874" rel="noopener noreferrer" style={{ color: "inherit"}} target="_blank">
                    <span className={`iconify ${styles.socialItem}`} data-icon="bi:discord"></span>
                </Link>

                <Link href="https://twitter.com/_santoshp_" rel="noopener noreferrer" style={{ color: "inherit"}} target="_blank">
                    <span className={`iconify ${styles.socialItem}`} data-icon="bi:twitter-x"></span>
                </Link>
                
                <Link href="mailto:santoshpassoubady@gmail.com" rel="noopener noreferrer" style={{ color: "inherit"}} target="_blank">
                   <span className={`iconify ${styles.socialItem}`} data-icon="ion:mail-sharp"></span>
                </Link>

            </div>
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
            <a className={styles.download} href="/file/Resume.pdf" download> 
            <span className={`iconify ${styles.myIconifyStyles}`} data-icon="octicon:download-16"></span> 
            Download Resume
            </a>
        </div>
    </div>
    </>
  )
}