import '../styles/globals.scss'
import store from '../features/store'
import { Provider } from 'react-redux'


export default ({ Component, pageProps }) => {  
  return (
    <Provider store={store}>      
        <Component {...pageProps} />      
    </Provider>    
  )
}