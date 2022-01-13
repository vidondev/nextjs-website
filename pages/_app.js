import '../styles/globals.css'
import '../styles/header.css'
import store from '../features/store'
import { Provider } from 'react-redux'


export default ({ Component, pageProps }) => {  
  return (
    <Provider store={store}>      
        <Component {...pageProps} />      
    </Provider>    
  )
}