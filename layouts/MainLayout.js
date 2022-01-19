import Header from "../components/header"
import Footer from "../components/footer";
import Banner from "../components/banner";
import Head from "next/head";

const MainLayout = ({ title = "", banners, borderColor, children}) => {
  return (
    <>
      <Head>
        <title>{`${title ? title+' | ' : ''} The official Pokémon Website in Hong Kong`}</title>
      </Head>
      <div className={`flex flex-col h-screen`}>
        <Header className={`grow`}/>
        <Banner banners={banners || []} borderColor={borderColor}/>
        <main className={`grow`} style={{paddingBottom: 70}}>
          <div className={`max-w-8xl mx-auto`}>{children}</div>
        </main>
        <Footer className={`grow`}/>
      </div>
    </>
    
  )
  
}

export default MainLayout;