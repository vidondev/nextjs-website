import styles from '../styles/banner.module.scss'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Slider(props) {  
    const [currentIndex, setIndex] = useState(0);
    const { images = [] } = props  
    const offset = -((currentIndex%images.length)*100)+"%"    
    
    function resetIndex() {
        setIndex(0)
    }

    const router = useRouter()

    // useEffect(() => {            
    //     if(images.length > 1) {            
    //         const interval = setInterval(() => {        
    //             setIndex( currentIndex => currentIndex+1)
    //         }, 3000);
    //         router.events.on('routeChangeComplete',resetIndex);
    //         return () => {                        
    //             router.events.off('routeChangeComplete',resetIndex);
    //             clearInterval(interval);
    //         }            
    //     }
    // }, [currentIndex, resetIndex]);    

    return (  
        <section className={`${styles.slider}`}>            
            <div className={`my-[15px] overflow-hidden border-[1px]`}>
                <div className={`${styles.container}`} style={{transform: `translate3d(${offset}, 0px, 0px)`}}>
                    {images.map( (image, index) => {
                        return <div key={index} className={`${styles.item} flex-none w-full ${index==currentIndex%images.length ? styles.active : ''}`}>
                            <img  className={`w-full mx-auto`} src={`/assets/images/${image.src}`} />                    
                        </div>
                    })}                            
                </div>                
            </div>            
            <div className={`flex justify-between`}>
                {images.length > 1 && images.map( (image, index) => {
                    return <div key={index} className={`${styles.thumbnail} ${index == currentIndex%5 ? styles.active : ''}`}>                                        
                            <img key={index} onClick={() => {setIndex(index) }} className={`max-w-full mx-auto`} src={`/assets/images/${image.src}`} />
                    </div>
                })}                            
            </div>
        </section>      
    )
}
