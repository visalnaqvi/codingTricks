import Head from 'next/head'
import NavBar from '../comps/nav'
import Tags from '../comps/tags'
import style from "../styles/Home.module.css"
import text from "../styles/Text.module.css"
import ItemPreviewGrid from '../comps/item-preview/grid'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Coding Tricks - HTML/ CSS/ JavaScript Elements Code Snippet</title>

        <meta name="description" content="Coding Tricks - HTML/ CSS/ JavaScript Elements Code Snippet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
     
      <main className={style.mainWrapper}>
          <Tags texts = {['HTML','CSS','JavaScript','Navigation']}></Tags>
          <h1 className={text.h1}>HTML, CSS, JavaScript Elements</h1>
          <h2 className={text.h2}>Browse high quality HTML/CSS elemnt templates for your next project</h2>
         <ItemPreviewGrid></ItemPreviewGrid>
      </main>
     
    </div>
  )
}
