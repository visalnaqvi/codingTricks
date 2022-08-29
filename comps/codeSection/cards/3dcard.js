import style from "../../../styles/CodeSection.module.css";
import "react";
const CodeSection = () => {
  return (
    <div className={style.wrap}>
      <div className={style.topNav}>
        <ul className={style.ul}>
          <li
            onClick={(e) => {
              document.querySelectorAll(".code").forEach((code) => {
                code.classList.remove(style.active);
              });
              document.querySelector(".codehtml").classList.add(style.active);
              document.querySelectorAll("li").forEach((code) => {
                code.classList.remove(style.active);
              });
              e.target.classList.add(style.active);
            }}
            className={`${style.li} ${style.active}`}
          >
            HTML
          </li>
          <li
            onClick={(e) => {
              document.querySelectorAll(".code").forEach((code) => {
                code.classList.remove(style.active);
              });
              document.querySelector(".codecss").classList.add(style.active);
              document.querySelectorAll("li").forEach((code) => {
                code.classList.remove(style.active);
              });
              e.target.classList.add(style.active);
            }}
            className={style.li}
          >
            css
          </li>
          <li
            onClick={(e) => {
              document.querySelectorAll(".code").forEach((code) => {
                code.classList.remove(style.active);
              });
              document.querySelector(".codejs").classList.add(style.active);
              document.querySelectorAll("li").forEach((code) => {
                code.classList.remove(style.active);
              });
              e.target.classList.add(style.active);
            }}
            className={style.li}
          >
            JavaScript
          </li>
        </ul>
      </div>
      <div className={style.codeEditor}>
        <div className={`${style.code} code codehtml ${style.active}`}>
          <code>
            &#x0003C;div class=&#x00022;card&#x00022;&#x0003E;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x0003C;div
            class=&#x00022;ineer_card&#x00022;&#x0003E;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x0003C;div class=&#x00022;card_faces
            card_face--front&#x00022;&#x0003E;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x0003C;h2&#x0003E;what we
            do?&#x0003C;/h2&#x0003E;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x0003C;/div&#x0003E;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x0003C;div class=&#x00022;card_faces
            card_face--back&#x00022;&#x0003E;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x0003C;div
            class=&#x00022;card_content&#x00022;&#x0003E;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x0003C;div class=&#x00022;card_header&#x00022;&#x0003E;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x0003C;h3&#x0003E;what we
            do?&#x0003C;/h3&#x0003E;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x0003C;/div&#x0003E;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x0003C;div class=&#x00022;card_body&#x00022;&#x0003E;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x0003C;p&#x0003E;Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Exercitationem illum laborum
            in<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ipsam sapiente optio ipsa maiores
            modi, omnis quisquam eligendi, fugiat quis nam inventore<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; minima aliquam perspiciatis
            consequuntur facere!<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x0003C;/p&#x0003E;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x0003C;/div&#x0003E;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x0003C;/div&#x0003E;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &#x0003C;/div&#x0003E;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x0003C;/div&#x0003E;<br></br>
            &#x0003C;/div&#x0003E;<br></br>
          </code>
        </div>
        <div className={`${style.code} code codecss`}>
          <code>
            body&#x0007B;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  display: flex;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  justify-content: center;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  align-items: center;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  background-color: #444444;<br></br>
            &#x0007D;<br></br>
            .card &#x0007B;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  margin: 100px 20px;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  height: 60vh;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  width: 280px;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  perspective: 1000px;<br></br>
            &#x0007D;<br></br>
            .ineer_card &#x0007B;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; width: 100%;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; height: 100%;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; transition: transform 1s;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; transform-style: preserve-3d;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; position: relative;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cursor: pointer;<br></br>
            &#x0007D;<br></br>
            .ineer_card.is-flipped &#x0007B;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; transform: rotateY(180deg);<br></br>
            &#x0007D;<br></br>
            .card_faces &#x0007B;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  position: absolute;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  width: 100%;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  height: 100%;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  backface-visibility: hidden;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  -webkit-backface-visibility: hidden;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  overflow: hidden;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  border-radius: 16px;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);<br></br>
            &#x0007D;<br></br>
            .card_face--front &#x0007B;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; display: flex;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; background-color: #5551aa;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; align-items: center;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; justify-content: center;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; transform-style: preserve-3d;<br></br>
            &#x0007D;<br></br>
            .card_face--front h2 &#x0007B;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; color: white;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; font-size: 32px;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; text-transform: uppercase;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; font-family: &#x00022;Josefin Sans&#x00022;, sans-serif;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; font-size: small;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; text-shadow: 0px 8px 2px rgba(0, 0, 0, 0.2);<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; letter-spacing: 8px;<br></br>
            &#x0007D;<br></br>
            .card_face--back &#x0007B;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; background-color: white;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; transform: rotateY(180deg);<br></br>
            &#x0007D;<br></br>
            .card_content &#x0007B;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; width: 100%;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; height: 100%;<br></br>
            &#x0007D;<br></br>
            .card_header &#x0007B;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; padding: 30px 30px 40px;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; position: relative;<br></br>
            &#x0007D;<br></br>
            .card_header h3 &#x0007B;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-family: &#x00022;Josefin Sans&#x00022;, sans-serif;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: white;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding-top: 20px;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text-transform: uppercase;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-size: x-small;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;letter-spacing: 10px;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;line-height: 23px;<br></br>
            &#x0007D;<br></br>
            .card_header:after &#x0007B;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: &#x00022;&#x00022;;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display: block;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position: absolute;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;top: 0;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;left: 0;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;right: 0;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bottom: 0;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z-index: -1;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-radius: 0px 0px 50% 0px;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background: rgb(2,0,36);<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background: linear-gradient(90deg, rgba(2,0,36,1) 0%,
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);<br></br>
            &#x0007D;<br></br>
            .card_body &#x0007B;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding: 30px;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-family: &#x00022;Josefin Sans&#x00022;, sans-serif;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-size: 13px;<br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;line-height: 20px;<br></br>
            &#x0007D;<br></br>
          </code>
        </div>
        <div className={`${style.code} code codejs`}>
          <code>
          const cards = document.querySelectorAll(&#x00022;.ineer_card&#x00022;);<br></br>
         cards.forEach(function (card) &#x0007B;<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    card.addEventListener(&#x00022;click&#x00022;, function () &#x0007B;<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        card.classList.toggle(&#x00022;is-flipped&#x00022;);<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &#x0007D;)<br></br>
        &#x0007D;);<br></br>
          </code>
        </div>
      </div>
    </div>
  );
};

export default CodeSection;
