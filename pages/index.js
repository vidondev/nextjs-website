import MainLayout from '../layouts/MainLayout';
import BannerCard from '../components/bannerCard';
import Card from '../components/posts/card';
import { PrismaClient } from "@prisma/client"
import Link from 'next/link';
const prisma = new PrismaClient()
const Index = ({ banners, bannerCards, topics }) => (
  <MainLayout banners={banners}>    
    <div className='grid md:grid-cols-2 gap-3 grid-cols-1'>
      {bannerCards.map((bannerCard, index) => {
        return <div className='' key={index}>
          <BannerCard image={bannerCard.image}/>
        </div>
      })}      
    </div>
    <div className='my-5 grid md:grid-cols-4 gap-3 grid-cols-2'>
      {topics.map( (topic) => {
        return <Card topic={topic} showHeader={true} key={topic.id}/>
      })}                  
    </div>      
    <div className={`my-[40px]`}>
      <Link href={`/topics`}>
        <a className={`leading-none max-w-[245px] md:max-w-[330px] block rounded-full bg-zinc-700 hover:bg-white border-zinc-700 border font-bold mx-auto text-center text-white hover:text-zinc-700 text-sm md:text-lg transition duration-200 `}>          
          <span className='w-0 min-h-[45px] md:min-h-[60px] inline-block align-middle'></span>
          <span>瀏覽更多最新消息</span></a>
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
