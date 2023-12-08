'use client'
import styles from './grid.module.css';
import Link from 'next/link';
import Project from './Project';
import { useEffect, useRef, useState } from "react";
import { useRandomReveal } from 'react-random-reveal'

const santoshVariations = ['Santosh', 'சந்தோஷ்', '桑托什', 'سانتوش', 'サントシュ', 'Сантош', 'संतोष', '산토시', 'סנטוש'];

export default function Grid() {

    const [currentVariationIndex, setCurrentVariationIndex] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);

      const intervalId = setInterval(() => {
        setCurrentVariationIndex(prevIndex => (prevIndex + 1) % santoshVariations.length);
      }, 3500); 

      return () => clearInterval(intervalId);
    }, []);

    const AddSuspenseComponent = () => {
        const characters = useRandomReveal({
          isPlaying: true,
          duration: 0.5,
          characters: santoshVariations[currentVariationIndex],
          updateInterval: 0.065,
          characterSet: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '#', '@', '&', '%', '$', '!', '?', '{', '}', '[', ']', '(', ')', '<', '>', '/', '\\', '|', '-', '_', '+', '=', '*', '~']
        });
      
        return characters;
    };

  return (
    <>
    <div className={styles.container}> 

        <div className={styles.header}>
            <h1>Santosh Passoubady</h1>
            <a>{isClient ? (
                 <AddSuspenseComponent />
              ) : (
                "???????"
              )}
              </a>
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

                <Link href="https://santoshpassoubady.medium.com/" rel="noopener noreferrer" style={{ color: "inherit"}} target="_blank">
                   <span className={`iconify ${styles.socialItem}`} data-icon="bi:medium"></span>
                </Link>
                
                <Link href="mailto:santoshpassoubady@gmail.com" rel="noopener noreferrer" style={{ color: "inherit"}} target="_blank">
                   <span className={`iconify ${styles.socialItem}`} data-icon="ion:mail-sharp"></span>
                </Link>

            </div>
        </div>

        <div className={styles.about}>
            <h2>Projects</h2>
            <p>Here are some of the projects I've worked on.</p>
            <br />

            <Project 
            title="Mirror" 
            date="November 2023"
            shortDescription='A virtual clothing try-on webapp.'
            description="with Mooez Muhammad, Roko Baljak and Louis Wei" 
            link="https://github.com/ssantoshp/mirror"
            imageUrl='/img/mirror.png'
            />

            <Project
            title="ByteDetective"
            date="July 2023"
            shortDescription='A semantic search engine for your photos.'
            description=""
            link="https://github.com/ssantoshp/bytedetective"
            imageUrl='/img/bytedetective.png'
            />

            <Project
            title="Inhouse"
            date="June 2023"
            shortDescription='GPT, but synced with your Google Drive.'
            description="with Tianyi Xu"
            link="https://github.com/ssantoshp/inhouse"
            imageUrl='/img/inhouse.png'
            />

            <Project
            title="Alexandr"
            date="January 2022"
            shortDescription='Grammarly, but for french.'
            description=""
            link="https://github.com/ssantoshp/alexandr"
            imageUrl='/img/alexandr.png'
            />

            <Project
            title="Empyrial"
            date="May 2021"
            shortDescription='A simple and powerful portfolio backtesting engine.'
            description=""
            link="https://github.com/ssantoshp/empyrial"
            imageUrl='/img/empyrial.png'
            />

            {/*
            <h4>Mirror</h4>
            <h4>ByteDetective</h4>
            <h4>Inhouse</h4>
            <h4>Empyrial</h4>
            <h4>Alexandr</h4>
             */}

        </div>

        <div className={styles.school}>
            <h3>School</h3>
            <p>U1 Math + Computer Science at <span>McGill University</span>, with an expected graduation date of <span>May 2025</span>.</p>

            <br />
            <p>President of <span>McGill's Poker Club</span></p>
        </div>

        <div className={styles.work}>
            <h3>Work</h3>
            <span>May 2023 - Present</span>
            <p>Software Engineer Intern at <span>Stathera</span>, focusing on data platform development. </p>
            <br />

            <p>Looking for a <span>Summer 2024</span> internship.</p>

            <br />

            <a className={styles.download} href="/file/Resume.pdf" download> 
            <span className={`iconify ${styles.myIconifyStyles}`} data-icon="octicon:download-16"></span> 
            Download Resume
            </a>
        </div>

        <div className={styles.faq}>
            <h3>FAQ</h3>

            <b>Where are you located?</b>
            <p>Montreal, QC, Canada.</p>

            <br />

            <b>Why do you code?</b>
            <p>Because it feels like magic (when it works).</p>

            <br />

            <b>Which technology do you advocate most?</b>
            <p>Svelte ❤️</p>

            <br />

            <b>What are you currently learning?</b>
            <p>I am learning about distributed systems, and how to build them.</p>

            <br />

            <b>Who are your tech role models?</b>
            <p>- George Hotz</p>
            <p>- Palmer Luckey</p>
            <p>- Lucy Guo</p>

            <br />

            <b>What important truth do very few people agree with you on?</b>
            <p>Don't follow your passion. Instead, find something you're good at, and then become passionate about it.</p>


        </div>
    </div>
    </>
  )
}