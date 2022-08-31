import style from "../../../../styles/preview.module.css"
import PreviewComp from "./assets/preview";
import text from "../../../../styles/Text.module.css"
import Tags from "../../../../comps/tags"
import CodeSection from "../../../../comps/codeSection/codeSection";
import Link from "next/link"
import Head from "next/head";
const Preview = () => {
    return ( 
        <div className={style.wrap}>
                <Head>
        <title>HTML/CSS/JS Side User Panel - HTML/ CSS/ JavaScript Code Snippet</title>

        <meta name="description" content="Coding Tricks - HTML/ CSS/ JavaScript Elements Code Snippet for Side User Panel Bar using HTML CSS JavaScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <div className={style.path}>
                <Link href="/">Home</Link> &#x0003E; HTML/CSS/JS Side User Panel Bar
            </div>
        <Tags texts={["HTML",'CSS','JavaScript','Navigation Bar','Side Navigation','User Panel']}></Tags>
        
         <h2 className={text.h2Bold}>Live Preview Click to Use</h2>
         <div className={style.preview}>
            <PreviewComp></PreviewComp>
         </div>
         <br></br>
         <br></br>
         <h1 className={text.h1ProductPage}>HTML/CSS/JS Side User Panel</h1>
         <h2 className={text.h2ProductPage}>Side User Panel Bar Code HTML/CSS/JavaScript</h2>
         <CodeSection></CodeSection>
         <article>
         <h1 className={text.h1ProductPage}>Need a user panel?</h1>
        <p className={text.pArticleText}>Well do you have lots of users communicating on your app and want to add a nice easy to use <strong>side user panel</strong> to your application.</p>
        <p className={text.pArticleText}>We got you covered. Here we have a modern <strong>side user panel</strong> developed using <strong>HTML CSS and JavaScript</strong> which will help you organise and manage your users.</p>
        <p className={text.pArticleText}>We have used pure <strong>HTML CSS and JavaScript</strong> to develop this design. You dont need to put any extra effort to make the code working. Just copy all the <strong>HTML CSS JavaScript code</strong> and paste it in your code.</p>
        <p className={text.pArticleText}>Navigation is made easy using profile picture and name of user. The panel can be used in two states active or closed. In active state panel display all the information about the user. Code is very simple and easy to use, you can add more information to dispaly inside each tab. In closed state panel displays users profile picture for navigation purpose.</p>
        <p className={text.pArticleText}>Follow us on Instagram and subscribe us on youtube for more such <strong>HTML CSS JavaScript code snippets.</strong></p>
         </article>

        </div>
     );
}
 
export default Preview;