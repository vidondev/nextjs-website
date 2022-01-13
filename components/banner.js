import styles from '../styles/banner.module.css'

export default (props) => {  
    const { banners = [] } = props  
    return (        
        <div className={`${styles.bg}`}>     
            <div className={`max-w-8xl mx-auto`}>
                {banners.map( (banner, index) => (                    
                    <img key={index} className='mx-auto' src={`/assets/images/${banner}`} />                    
                ))}                            
            </div>
            
        </div>
    )
}
