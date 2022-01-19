import MainLayout from '../layouts/MainLayout';
import BannerCard from '../components/bannerCard';
import Card from '../components/posts/card';
import { PrismaClient } from "@prisma/client"
import Link from 'next/link';
const prisma = new PrismaClient()
const Index = ({ banners, bannerCards, topics }) => (
  <MainLayout banners={banners}>    
    <div className='grid md:grid-cols-2 gap-3 grid-cols-1 md:mx-0 mx-4'>
      {bannerCards.map((bannerCard, index) => {
        return <div className='' key={index}>
          <BannerCard image={bannerCard.image}/>
        </div>
      })}      
    </div>
    <div className='my-5 grid md:grid-cols-4 gap-3 grid-cols-2 md:mx-0 mx-4'>
      {topics.map( (topic) => {
        return <Card topic={topic} showHeader={true} key={topic.id}/>
      })}                  
    </div>      
    <div>
      <Link href={`/topics`}>
        <a>See more</a>
      </Link>
    </div>
  </MainLayout>
);

export async function getStaticProps(context) {  
  const topics = await prisma.topic.findMany({
    include: {
      category: true
    },
    where: {
      isPublished: true,
      isFeatured: true
    }
  })
  return {
    props: {      
      topics: JSON.parse(JSON.stringify(topics)),
      banners: [
        {
          image: 'banner_1280-thumb-1280x458-16988.png'
        },
        {
          image: 'e3516c0f396990e1eafcbf0120ee3a2e7fda2d93-thumb-1280x458-17088.jpg'
        },
        {
          image: 'fd2d0612953d45fabc7855c07e87f366cbcad93c-thumb-1280x458-16984.png'
        },
        {
          image: 'PC-thumb-1280xauto-16920.jpg'
        },
        {
          image: 'portal_banner_pc_s8b-thumb-1280x458-17232.jpg'
        }
      ],
      bannerCards: [
        { image: 'banner_bdsp.jpg' },
        { image: 'banner_legends.jpg' },
      ]
    }
  }
}

export default Index;
