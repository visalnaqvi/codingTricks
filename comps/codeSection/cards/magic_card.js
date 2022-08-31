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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     Magic Card<br></br>
      &#x0003C;/div&#x0003E;<br></br>
          </code>
        </div>
        <div className={`${style.code} code codecss`}>
          <code>
          @property --rotate &#x0007B;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  syntax: &#x00022;&#x0003C;angle&#x0003E;&#x00022;;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  initial-value: 132deg;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  inherits: false;<br></br>
  &#x0007D;<br></br>
  
 
  
  
  body &#x0007B;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  min-height: 100vh;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  background: #212534;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  display: flex;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  align-items: center;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  flex-direction: column;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  padding-top: 2rem;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  padding-bottom: 2rem;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  box-sizing: border-box;<br></br>
  &#x0007D;<br></br>
  
  
  .card &#x0007B;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  background: #191c29;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  width: calc(65vh / 1.5);<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  height: 65vh;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  padding: 3px;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  position: relative;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  border-radius: 6px;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  justify-content: center;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  align-items: center;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  text-align: center;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  display: flex;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  font-size: 1.5em;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  color: #fff;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  cursor: pointer;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  font-family: cursive;<br></br>
    
  &#x0007D;<br></br>
  
  .card:hover &#x0007B;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  background-color: transparent;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  overflow: hidden;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  color: rgb(88 199 250 / 100%);<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  transition: color 1s;<br></br>
  &#x0007D;<br></br>
 
  
  
  .card::before &#x0007B;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  content: &#x00022;&#x00022;;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  width: 104%;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  height: 102%;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  border-radius: 8px;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  transition: 0.5s ease;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    position: absolute;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    z-index: -1;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    top: -1%;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    left: -2%;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    animation: spin 2.5s linear infinite;<br></br>
  &#x0007D;<br></br>
  
  .card::after &#x0007B;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  position: absolute;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  transition: 0.5 ease;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  content: &#x00022;&#x00022;;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  top: calc(65vh / 6);<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  left: 0;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  right: 0;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  z-index: -1;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  height: 100%;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  width: 100%;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  opacity: 0;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  margin: 0 auto;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  transform: scale(0.8);<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  filter: blur(calc(65vh / 6));<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    opacity: 1;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  transition: opacity .5s;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  animation: spin 2.5s linear infinite;<br></br>
  &#x0007D;<br></br>
  
  @keyframes spin &#x0007B;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  0% &#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    --rotate: 0deg;<br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#x0007D;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100% &#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   --rotate: 360deg;<br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x0007D;<br></br>
  &#x0007D;<br></br>
  
 
          </code>
        </div>
        <div className={`${style.code} code codejs`}>
          <code>
            
            <strong>Not Applicable</strong>
         
          </code>
        </div>
      </div>
    </div>
  );
};

export default CodeSection;
