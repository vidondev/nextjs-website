import Header from "../components/header"
import Footer from "../components/footer";
import Banner from "../components/banner";

const MainLayout = ({ children}) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header className='grow'/>
      <main className='grow'>{children}</main>
      <Footer className='grow'/>
    </div>
  )
  
}

export default MainLayout;