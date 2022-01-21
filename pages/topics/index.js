import { PrismaClient } from "@prisma/client"
import MainLayout from '../../layouts/MainLayout';
import Card from "../../components/posts/card";
import Category from "../../components/category";

const prisma = new PrismaClient()
export default function TopicPage( { title, categories,topics }) {
    return <>
        <MainLayout title={title}>
            <div className={`mt-16`}>
                <Category categories={categories} />
                <div className='my-5 grid md:grid-cols-4 gap-3 grid-cols-2'>
                    {topics.map( (topic) => {
                        return <Card topic={topic} showHeader={true} key={topic.id}/>
                    })}                  
                </div>      
            </div>
        </MainLayout>
    </>
}

export async function getStaticProps({ params }) {  
    const categories = await prisma.category.findMany()   
    const topics = await prisma.topic.findMany({
        include: {
            category: true
        }
    })
    return {
      props: {   
        title: `最新資訊`,
        categories: JSON.parse(JSON.stringify(categories)),
        topics: JSON.parse(JSON.stringify(topics))
      }
    }
}