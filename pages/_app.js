import '../styles/globals.css'
import '../styles/global-for-products/action-bar-3.css'
import '../styles/global-for-products/styleMagicCard.css'
import "../styles/slidingText.css"
import SideNav from '../comps/sideNav'
import NavBar from '../comps/nav'
import Footer from '../comps/footer'
import Script from 'next/script'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script strategy="lazyOnload" src={'https://www.googletagmanager.com/gtag/js?id=G-NH84NRVWGV'} />

<Script strategy="lazyOnload" id="analytics">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-NH84NRVWGV', {
        page_path: window.location.pathname,
        });
    `}
</Script>
    <NavBar></NavBar>
    <div className='masterWrap'>
    <div className='sideBarWrap'>
      <SideNav></SideNav>
    </div>
    <div className='mainPage'>
    <Component {...pageProps} />
    </div>
    {/* <div className='sideBarWrap'></div> */}
    </div>
    <Footer></Footer>
    </>
  )
}

export default MyApp
