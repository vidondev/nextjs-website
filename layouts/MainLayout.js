import Header from "../components/header"
import Footer from "../components/footer";
import Banner from "../components/banner";
import Head from "next/head";

const MainLayout = ({ title = "", banners = [], borderColor, children}) => {
  return (
    <>
      <Head>
        <title>{`${title ? title+' | ' : ''} The official Pokémon Website in Hong Kong`}</title>
      </Head>
      <div className={`flex flex-col h-screen`}>
        <Header className={`grow`}/>
        {banners.length > 0 && <Banner banners={banners || []} borderColor={borderColor}/>}
        <main className={`grow`}>
          <div className={`max-w-8xl mx-auto`}>
            <div className={`mx-[15px]`}>{children}</div>            
          </div>
        </main>
        <Footer className={`grow`}/>
      </div>
    </>
    
  )
  
}

export default MainLayout;