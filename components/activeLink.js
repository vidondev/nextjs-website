import Link from 'next/link'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, {Children} from 'react'
import { colors } from '../globals/constants'
import { useEffect } from 'react'

const ActiveLink = ({ children, activeClassName, ...props }) => {
    const { asPath } = useRouter()
    const child = Children.only(children)    
    const isCurrent = asPath === props.href || asPath === props.as  
    const { color } = props  
    const className = classNames(       
        'text-sm block py-18px text-center hover:after:rounded-t-md hover:text-white',
        {[colors['text'][color]]: color && !isCurrent},
        {[colors['after-bg'][color]]:color},
        {[activeClassName]:isCurrent}
    )
    
  
    return (
      <Link {...props}>{React.cloneElement(child, {className: className})}</Link>
    )
}

export default ActiveLink