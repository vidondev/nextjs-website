import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import ActiveLink from "./activeLink"
import styles from '../styles/header.module.scss'
import { MenuIcon, XIcon } from "@heroicons/react/outline"

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
                <div className={`flex items-center md:space-x-6 relative mx-[15px]`}>                                     
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
                <Menu as="div" className={`relative md:hidden h-full  flex items-center`}>
                {({ open }) => {                    
                    return <>
                        <Menu.Button className={`ml-4 w-7 h-7 relative`}>                    
                            <XIcon className={`absolute  left-0 top-0 right-0 bottom-0 transition ease-linear duration-100 ${open ? 'opacity-1' : 'opacity-0' }`}/>
                            <MenuIcon className={`absolute left-0 top-0 right-0 bottom-0  transition ease-linear duration-100 ${open ? 'opacity-0' : 'opacity-1'}`}/>
                        </Menu.Button>                        
                        <Transition                        
                            className={`top-[100%] absolute z-20  w-screen h-screen`}
                            enter="transition duration-100 ease-linear"
                            enterFrom="transform opacity-0"
                            enterTo="transform opacity-100"
                            leave="transition duration-100 ease-linear"
                            leaveFrom="transform opacity-100"
                            leaveTo="transform opacity-0"
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
                    </>
                }}
                    
                </Menu>
            </div>
        </div>                 
    )
}