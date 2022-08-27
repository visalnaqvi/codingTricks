import style from "../../../../styles/preview.module.css"
import Nav from "./side-navigation";
import text from "../../../../styles/Text.module.css"
import Tags from "../../../../comps/tags"
import CodeSection from "../../../../comps/codeSection/codeSection";
import Link from "next/link"
const Preview = () => {
    return ( 
        <div className={style.wrap}>
          <div className={style.path}>
                <Link href="/">Home</Link> &#x0003E; HTML/CSS/JS Side Navigation Bar
            </div>
        <Tags texts={["HTML",'CSS','JavaScript','Navigation Bar']}></Tags>
         <h1 className={text.h1}>HTML/CSS/JS Side Navigation Bar</h1>
         <h2 className={text.h2}>Browse this design in React.js Code</h2>
         <h2 className={text.h2Bold}>Live Preview Click to Use</h2>
         <div className={style.preview}>
            <Nav></Nav>
         </div>
         <CodeSection></CodeSection>
        </div>
     );
}
 
export default Preview;