import Link from 'next/link'
import styles from '../styles/footer.module.scss'


export default function Footer() {
    return (
        <div className={`${styles.footer}`}>
            <div className={`${styles.top}`}>
                <div className={`max-w-8xl mx-auto`}>
                    <div className={`flex md:flex-row flex-col py-18px justify-center`}>
                        <div className={`flex md:flex-row flex-col items-center md:space-x-3 mx-10`}>
                            <div className={`text-base md:text-lg text-zinc-600 md:pr-18px mb-[6px] md:mb-0`}>官方帳號</div>
                            <div className={`flex space-x-3`}>                            
                                <img src={`/assets/images/icon_facebook-thumb-132x132-323-thumb-132x132-3942.png`} className={`w-[50px] md:w-[66px]`}/>                                                            
                                <img src={`/assets/images/icon_youtube-thumb-132x132-319-thumb-132x132-3941.png`} className={`w-[50px] md:w-[66px]`}/>                            
                            </div>                            
                        </div>
                        <div className={`flex space-x-3 mx-5 my-5 justify-center`}>                            
                            <img src={`/assets/images/pokemontretta_international_banner_pc.png`} />                            
                            <img src={`/assets/images/nintendo-banner.png`} />                            
                        </div>
                    </div>
                </div>            
            </div>
            <div className={`${styles.bottom} bg-black text-white`}>
                <div className={`max-w-8xl mx-auto`}>
                    <ul className={`${styles.links} flex md:text-sm text-xs justify-center md:justify-start`}>
                        <li>
                            <Link href="/">
                                <a>寶可夢是什麼？</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>使用條款</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Privacy Policy</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>網站地圖</a>
                            </Link>
                        </li>
                    </ul>
                    <div className={`text-xs text-zinc-500 mt-4 leading-loose`}>                        
                        &copy;Pokémon. &copy;Nintendo/Creatures Inc./GAME FREAK inc.<br />
                        &copy;Nintendo, Creatures, GAME FREAK, TV Tokyo, ShoPro, JR Kikaku. &copy;Pokémon. TM and &reg; are trademarks of Nintendo.                        
                    </div>
                </div>
            </div>            
        </div>
    )
}