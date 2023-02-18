// import '@/styles/globals.css'
import '../../src/styles/globals.css'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
// import store from '@/redux/store'
// import GetCurrentUser from '@/presets/elements/GetCurrentUser' 
// import AuthComponent from '@/components/auth'
import { applyMiddleware, createStore } from 'redux'
import { NextSeo } from 'next-seo'
import rootReducer from '../store/index'
import thunk from "redux-thunk";
import Head from 'next/head'

const store = createStore(
  rootReducer,
  (applyMiddleware(thunk))
)


function App({ Component, pageProps }) {
  return (
 
    <Provider store={store}>  
      <NextSeo
        title="Vaionex Project"
        description="Vaionex Project Description"
        canonical="https://logs.vaionex.com"
        openGraph={{
          url: 'https://logs.vaionex.com',
          title: 'Vaionex Project',
          description: 'Vaionex Project Description',
          images: [
            {
              url: 'https://4003362596-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FO6Y5aEaDzSHj33Kq8FZF%2Fuploads%2FUrOMdMLTbnwLEB1jEkJO%2FVAIONEX%20GITBOOK%20CARD-1%20(1).png?alt=media&token=fca78ea6-5b47-4ef7-bf0f-990a1f263004',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Vaionex Logs',
        }}
        twitter={{
          handle: '@Vaionex_Corp',
          site: '@Vaionex_Corp',
          cardType: 'summary_large_image',
        }}
      />

      {/* <GetCurrentUser /> */}
      <Component {...pageProps} />
    </Provider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default App
