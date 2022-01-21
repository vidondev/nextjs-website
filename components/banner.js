import styles from '../styles/banner.module.scss'
import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

export default function Banner(props) {  
    const [currentIndex, setIndex] = useState(0);
    const { banners = [] } = props  
    const offset = -((currentIndex%banners.length)*100)+"%"    
    
    function resetIndex() {
        setIndex(0)
    }

    const router = useRouter()

    useEffect(() => {            
        if(banners.length > 1) {            
            const interval = setInterval(() => {        
                setIndex( currentIndex => currentIndex+1)
            }, 3000);
            router.events.on('routeChangeComplete',resetIndex);
            return () => {                        
                router.events.off('routeChangeComplete',resetIndex);
                clearInterval(interval);
            }            
        }
    }, [currentIndex, resetIndex]);    

    return (  
        <section >
            <div className={`border-b-4 ${styles.bg}`}>     
                <div className={`max-w-8xl mx-auto overflow-hidden`}>
                        <div className={`${styles.container} flex flex-nowrap md:mx-[15px]`} style={{transform: `translate3d(${offset}, 0px, 0px)`}}>
                            {banners.map( (banner, index) => {
                                return <div key={index} className={`${styles.item} flex-none w-full ${index==currentIndex%banners.length ? styles.active : ''}`}>
                                    <img  className={`w-full mx-auto`} src={`/assets/images/${banner.image}`} />                    
                                </div>
                            })}                            
                        </div>                
                </div>
            </div>   
            {banners.length > 1 && 
                <div className='flex justify-center items-center my-3'>
                    <button onClick={ () => {setIndex( currentIndex <= 0 ? banners.length-1 : currentIndex-1)}} className={`mr-5`}><ChevronLeftIcon className={`w-8 h-8 text-gray-500`}/></button>
                    {banners.map( (banner, index) => {
                        return <button key={index} onClick={() => {setIndex(index) }} className={`w-3 h-3 mx-1 ${index==currentIndex%banners.length ? 'bg-gray-900' : 'bg-gray-500'}`}></button>
                    })}
                    <button onClick={ () => {setIndex(currentIndex+1)}} className={`ml-5`}><ChevronRightIcon className={`w-8 h-8 text-gray-500`}/></button>
                </div>
            }
        </section>      
    )
}
