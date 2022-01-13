import { Disclosure } from "@headlessui/react"
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from "classnames";


const ActiveLink = ({ children, activeClassName, ...props }) => {
    const { asPath } = useRouter()
    const child = Children.only(children)
    const childClassName = child.props.className || ''
  
    // pages/index.js will be matched via props.href
    // pages/about.js will be matched via props.href
    // pages/[slug].js will be matched via props.as
    const className =
      asPath === props.href || asPath === props.as
        ? `${childClassName} ${activeClassName}`.trim()
        : childClassName
  
    return (
      <Link {...props}>
        {React.cloneElement(child, {
          className: className || null,
        })}
      </Link>
    )
  }


const colors = {
    'text': {
        'blue': 'text-blue-500',
        'orange': 'text-orange-500',
        'green': 'text-green-500',
        'purple': 'text-purple-500',
        'rose': 'text-rose-500',
        'yellow': 'text-yellow-900',
        'indigo': 'text-indigo-500',
    },
    'bg': {
        'blue': 'after:bg-blue-500',
        'orange': 'after:bg-orange-500',
        'green': 'after:bg-green-500',
        'purple': 'after:bg-purple-500',
        'rose': 'after:bg-rose-500',
        'yellow': 'after:bg-yellow-900',
        'indigo': 'after:bg-indigo-500',
    }
}



export default () => {

    
const nav = [
    { name: '電視動畫系列', href: '/anime', color: 'blue'},
    { name: '電影', href: '/movie', color: 'orange'},
    { name: '商品', href: '/goods', color: 'green'},
    { name: '應用程式', href: '/apps', color: 'purple'},
    { name: '遊戲', href: '/game', color: 'rose'},
    { name: '活動', href: '/event', color: 'yellow'},
    { name: '卡牌遊戲', href: '#', color: 'indigo'},
    { name: '寶可夢圖鑒', href: '#', color: ''}
]
 function getClassNames(color, href) {
    const router = useRouter()
    const isCurrent =  href === router.route;
    return classNames(       
        'text-sm block py-18px text-center hover:after:rounded-t-md hover:text-white',
        {[colors['text'][color]]: color && !isCurrent},
        {[colors['bg'][color]]:color},
        {'current': isCurrent},
        {'text-white': isCurrent},        
        {'after:rounded-t-md': isCurrent},        
    )
}
    return (
        <Disclosure as="header" className={`w-screen global-header`}>       
            <div className="max-w-8xl mx-auto px-5">
                <div className="flex items-center space-x-1">                    
                    <div className="grow md:flex-none header-logo">
                        <Link href="/">
                            <a>
                                <img
                                    className="mx-auto"
                                    src="/assets/images/logo.png"
                                    alt="Pokemon Logo"
                                    width={130}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="hidden md:block grow">
                        <div className="flex">
                            {nav.map((item) => (
                                <div className={`nav-item w-3/6`} key={item.name}>
                                    <Link href={item.href}>
                                        <a className={getClassNames(item.color, item.href)}>
                                            {item.name}
                                        </a>        
                                    </Link>                                    
                                </div>
                            ))}                           
                        </div>
                    </div>
                </div>
            </div>                 
        </Disclosure>
    )
}