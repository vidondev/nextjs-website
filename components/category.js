import { useRouter } from "next/router"
import Link from 'next/link'


export default function Category(props) {
    const router = useRouter()
    const { categories } = props;
    return (
        <>
            <h2 className={`text-center text-lg md:text-2xl`}>最新資訊</h2>
            <div className={`bg-white rounded flex py-18px px-18px text-base mt-5 md:mt-10 items-center justify-start flex-col md:flex-row`}>
            <div className={`text-sm md:mr-14 md:mb-0 mb-3 mr-0 flex-none`}>類別</div>
                <ul className={`category flex-wrap flex space-x-2 text-xs md:text-base`}>
                    <li className={`item all ${!router.query.category && 'active'}`}>
                        <Link href={`/topics`}><a>全部</a></Link>
                    </li>
                    {categories?.map( ( category ) => {                            
                        return <li key={category.id} className={`item ${category.type} ${router.query.category == category.type ? 'active' : ''}`}>
                            <Link href={`/topics/${category.type}`} as={`/topics/${category.type}`}>
                                <a>{category.name}</a>                                    
                            </Link>
                        </li>
                    })}                        
                </ul>
            </div>   
        </>
    )
}