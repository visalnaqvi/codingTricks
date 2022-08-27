import '../styles/globals.css'
import SideNav from '../comps/sideNav'
import NavBar from '../comps/nav'
import Footer from '../comps/footer'
function MyApp({ Component, pageProps }) {
  return (
    <>
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
