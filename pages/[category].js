import MainLayout from "../layouts/MainLayout";
import Card from "../components/posts/card";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const Index = ({ banners = [], topics = [], title }) => {
  return <MainLayout banners={banners} title={title}>        
    <div className='my-5 grid md:grid-cols-4 gap-3 grid-cols-2 md:mx-0 mx-4'>
      {topics?.map( (topic) => {
        return <Card topic={topic} showHeader={false} key={topic.id}/>
      })}                  
    </div>      
  </MainLayout>
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
      },
      banners: true
    }
  })
  return {
    props: {      
      title: category.name,
      banners: JSON.parse(JSON.stringify(category.banners)),
      topics: JSON.parse(JSON.stringify(category.topics)),
    }
  }
}


export async function getStaticPaths() {
  const categories = await prisma.category.findMany()    
  return {
      paths: categories.map((category) => `/${category.type}`) || [],
      fallback: false,
  }
}


export default Index;