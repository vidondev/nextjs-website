import MainLayout from '../../../layouts/MainLayout';
import { PrismaClient } from '@prisma/client';
import moment from 'moment';
import Card from '../../../components/posts/card';

const prisma = new PrismaClient()

export default function Post({topic}) {
    return (
        <MainLayout>
            <div className={`my-[25px]`}>
                <Card topic={topic} showHeader={true}/>                
            </div>
        </MainLayout>
    )
}


export async function getStaticProps({ params }) {  
    const topic = await prisma.topic.findFirst({
        include: {
            category:true
        },
        where: {
            id: parseInt(params.id)
        }
    })
    return {
        props: {
            topic: JSON.parse(JSON.stringify(topic))
        }
    }
}


export async function getStaticPaths() {    
    const topics = await prisma.topic.findMany({
        include: {
            category: true
        }
    })    
    console.log(topics)
    const paths = topics.map((topic) => ({
        params: { id: topic.id+"", category: topic.category.type },
      }))
    return {
        paths: paths,
        fallback: false,
    }
  }