import { Disclosure } from "@headlessui/react"
import Link from 'next/link'
import ActiveLink from "./activeLink"
import styles from '../styles/header.module.scss'


export default function Header() {
    const nav = [
        { name: '電視動畫系列', href: '/anime', color: 'blue'},
        { name: '電影', href: '/movie', color: 'orange'},
        { name: '商品', href: '/good', color: 'green'},
        { name: '應用程式', href: '/app', color: 'purple'},
        { name: '遊戲', href: '/game', color: 'rose'},
        { name: '活動', href: '/event', color: 'yellow'},
        { name: '卡牌遊戲', href: '#', color: 'indigo'},
        { name: '寶可夢圖鑒', href: '#', color: ''}
    ]
    return (
        <Disclosure as="header" className={styles.header}>       
            <div className={`max-w-8xl mx-auto px-5`}>
                <div className={`flex items-center space-x-6`}>                    
                    <div className={`grow md:flex-none header-logo`}>
                        <Link href="/">
                            <a>
                                <img
                                    className={`mx-auto`}
                                    src="/assets/images/logo.png"
                                    alt="Pokemon Logo"
                                    width={130}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className={`hidden md:block grow`}>
                        <div className={`flex`}>
                            {nav.map((item) => (
                                <div className={`${styles.item} w-3/6`} key={item.name}>
                                    <ActiveLink href={item.href} activeClassName={`${styles.current} text-white after:rounded-t-md`} color={item.color}>
                                        <a>{item.name}</a>        
                                    </ActiveLink>                                    
                                </div>
                            ))}                           
                        </div>
                    </div>
                </div>
            </div>                 
        </Disclosure>
    )
}