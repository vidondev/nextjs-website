import MainLayout from '../../../layouts/MainLayout';
import { PrismaClient } from '@prisma/client';
import moment from 'moment';
import styles from '../../../styles/topic.module.scss';
import ReactHtmlParser from 'html-react-parser'
import Slider from '../../../components/slider';

const prisma = new PrismaClient()

export default function Post({topic}) {
    return (
        <MainLayout>
            <div className={`${styles.topic} my-[25px]`}>
               <div className={`${styles.header} ${styles['bg-'+topic.category.type]}`}>
                   <span>{topic.category.name}</span>
                </div>      
                <div className={`${styles.content}`}>
                    <div className={`mb-[25px]`}>
                        <div className={`${styles.date} ${styles.text} ${styles[topic.category.type]} font-bold`}>{moment(topic.publishDate).format("L")}</div>    
                        <div className={`text-base  md:text-2xl font-bold`}>{topic.title}</div>
                    </div>
                    <div className={``}>
                        <div className={`mb-[20px]`}>
                            <img src={`/assets/images/${topic.image}`} className={`max-w-full mx-auto`}/>
                        </div>
                    </div>
                    <div className={`text-base pb-[20px]`}>
                        { topic.content && ReactHtmlParser(topic.content)}                        
                    </div>
                    <div>
                        <Slider images={topic?.images} />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}


export async function getStaticProps({ params }) {  
    const topic = await prisma.topic.findFirst({
        include: {
            category:true,
            images: true
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
    const paths = topics.map((topic) => ({
        params: { id: topic.id+"", category: topic.category.type },
      }))
    return {
        paths: paths,
        fallback: false,
    }
  }