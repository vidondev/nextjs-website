import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import ActiveLink from "./activeLink"
import styles from '../styles/header.module.scss'
import { MenuIcon } from "@heroicons/react/outline"


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
        <div className={`${styles.header} relative`}>                
            <div className={`max-w-8xl mx-auto px-5`}>
                <div className={`flex items-center md:space-x-6 relative`}>                                     
                    <div className={`grow md:flex-none header-logo`}>
                        <Link href="/">
                            <a>
                                <img
                                    className={`mx-auto w-[105px] md:w-[130px] my-[4px]`}
                                    src="/assets/images/logo.png"
                                    alt="Pokemon Logo"                                    
                                />
                            </a>
                        </Link>
                    </div>
                    <div className={`hidden md:block grow`}>
                        <div className={`flex`}>
                            {nav.map((item) => (
                                <div className={`${styles.item}`} key={item.name}>
                                    <ActiveLink href={item.href} activeClassName={`${styles.current} text-white after:rounded-t-md`} color={item.color}>
                                        <a>{item.name}</a>        
                                    </ActiveLink>                                    
                                </div>
                            ))}                           
                        </div>                        
                    </div>                                        
                </div>
            </div>    
            <div className='md:hidden absolute left-0 top-0 bottom-0'>
                <Menu as="div" className={`relative md:hidden h-full flex`}>
                    <Menu.Button className={`ml-4`}>                    
                        <MenuIcon className={`w-7 h-7`}/>
                    </Menu.Button>
                    <Transition                        
                        className={`top-[100%] absolute z-10  w-screen`}
                        >
                        <Menu.Items as="div" className={`${styles.menu}`}>                            
                            {nav.map((item, index) => (
                                <div className={`border-t-[1px]`} key={index}>
                                    <Menu.Item>
                                        <Link href={item.href}>
                                            <a className={`${styles[item.color]}`}>
                                                <span>{item.name}</span>
                                            </a>        
                                        </Link>                                    
                                    </Menu.Item> 
                                </div>
                                
                            ))}                              
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>                 
    )
}