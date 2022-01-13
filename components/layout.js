import Header from './header'
import Banner from './banner'
import Footer from './footer'
export default ({children}) => {
    return (
        <div className='flex flex-col h-screen'>
            <Header className='grow'/>
            <main className='grow'>
                <div className='max-w-8xl mx-auto'>{children}</div>
            </main>
            <Footer className='grow'/>
        </div>
    )
}