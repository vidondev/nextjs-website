import { PrismaClient } from "@prisma/client"
import MainLayout from '../../layouts/MainLayout';
import Link from 'next/link';
import { useRouter } from "next/router";
import Card from "../../components/posts/card";

const prisma = new PrismaClient()
export default function Category( { title, categories,category }) {
    const router = useRouter()
    return <>
        <MainLayout title={title}>
            <div className={`mt-16`}>
                <h2 className={`text-center`}>最新資訊</h2>
                <div className={`bg-white rounded flex py-18px px-18px text-base mt-10 items-center`}>
                    <div className={`mr-14`}>類別</div>
                    <ul className={`category flex space-x-2`}>
                        <li className={`item all`}>
                            <Link href={`/topics`}><a>全部</a></Link>
                        </li>
                        {categories?.map( ( category ) => {                            
                            return <li key={category.id} className={`item ${category.type} ${router.query.category == category.type && 'active'}`}>
                                <Link href={`/topics/${category.type}`} as={`/topics/${category.type}`}>
                                    <a>{category.name}</a>                                    
                                </Link>
                            </li>
                        })}                        
                    </ul>
                </div>   
                <div className='my-5 grid md:grid-cols-4 gap-3 grid-cols-2 md:mx-0 mx-4'>
                    {category?.topics.map( (topic) => {
                        return <Card topic={topic} showHeader={true} key={topic.id}/>
                    })}                  
                </div>      
            </div>
        </MainLayout>
    </>
}

export async function getStaticProps({ params }) {  
    const category = await prisma.category.findFirst({
        where: {
            type: params.category
        },
        include: {
            topics: {
                include: {
                    category: true
                }
                

            }
        }
    })    
    const categories = await prisma.category.findMany()   
    return {
      props: {   
        title: `${category.name} | 最新資訊`,
        categories: JSON.parse(JSON.stringify(categories)),
        category: JSON.parse(JSON.stringify(category))
      }
    }
}

export async function getStaticPaths() {
    const categories = await prisma.category.findMany()    
    return {
        paths: categories.map((category) => `/topics/${category.type}`) || [],
        fallback: true,
    }
}