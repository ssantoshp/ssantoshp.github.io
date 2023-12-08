import styles from './grid.module.css';

type ProjectProps = {
    title: string;
    shortDescription: string;
    description: string;
    date: string;
    link: string
    imageUrl: string;
  };
  
  export default function Project({ title, shortDescription, description, date, link, imageUrl}: ProjectProps) {
    return (
      <div className='grid grid-cols-1 mb-5 xl:grid-cols-4'>

        <div className='col-span-2'>
            <div className="flex justify-start gap-3 items-center">
                <h4>[ {title} ]</h4> 
                <p className='text-sm text-stone-500'>{date}</p>
            </div>

            <h6 className="mb-1 mt-1">{shortDescription}</h6>

            <p className="mb-2 text-base text-stone-500" dangerouslySetInnerHTML={{ __html: description }} />

            <a className={`${styles.download}`} href={link} target="_blank" rel="noopener noreferrer">
            <span className={`iconify ${styles.myIconifyStyles}`} data-icon="octicon:arrow-up-right-24"></span> 
                View on Github
            </a>
        </div>
        
        <div className='col-span-2 w-full pt-4 pb-4 pl-4 lg:pr-4 md:pr-4 sm:pr-4 flex items-center justify-center'>
            <img className="rounded-md border-2 border-slate-200 bg-slate-300 p-0.5 shadow-lg" src={imageUrl} alt="project demo"/>
        </div>

      </div>
    );
  }
