import { PrismaClient } from "@prisma/client"
import MainLayout from '../../layouts/MainLayout';
import Card from "../../components/posts/card";
import Category from "../../components/category";

const prisma = new PrismaClient()
export default function TopicCategory( { title, categories,category }) {
    return <>
        <MainLayout title={title}>
            <div className={`mt-16`}>
                <Category categories={categories} />
                <div className='my-5 grid md:grid-cols-4 gap-3 grid-cols-2'>
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