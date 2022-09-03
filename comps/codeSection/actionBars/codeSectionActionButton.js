import style from "../../../styles/CodeSection.module.css";
import "react";
const CodeSection = () => {
  
  return (
    <div className={style.wrap}>
      <div className={style.topNav}>
        <ul className={style.ul}>
          <li onClick={(e)=>{
            document.querySelectorAll(".code").forEach((code)=>{
                code.classList.remove(style.active);
            })
            document.querySelector('.codehtml').classList.add(style.active);
            document.querySelectorAll("li").forEach((code)=>{
                code.classList.remove(style.active);
            })
            e.target.classList.add(style.active)
          }} className={`${style.li} ${style.active}`}>HTML</li>
          <li onClick={(e)=>{
            document.querySelectorAll(".code").forEach((code)=>{
                code.classList.remove(style.active);
            })
            document.querySelector('.codecss').classList.add(style.active);
            document.querySelectorAll("li").forEach((code)=>{
                code.classList.remove(style.active);
            })
            e.target.classList.add(style.active)
          }} className={style.li}>css</li>
          <li onClick={(e)=>{
            document.querySelectorAll(".code").forEach((code)=>{
                code.classList.remove(style.active);
            })
            document.querySelector('.codejs').classList.add(style.active);
            document.querySelectorAll("li").forEach((code)=>{
                code.classList.remove(style.active);
            })
            e.target.classList.add(style.active)
          }} className={style.li}>JavaScript</li>
        </ul>
      </div>
      <div className={style.codeEditor}>
        <div className={`${style.code} code codehtml ${style.active}`}>
          <code>
          &#x0003C;div class=&quot;navigation&quot;&#x0003E;<br></br><br></br>
        &#x0003C;div class=&quot;menuToggle&quot;&#x0003E;&#x0003C;/div&#x0003E;<br></br>
        &#x0003C;div class=&quot;menu&quot;&#x0003E;<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x0003C;ul&#x0003E;<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    &#x0003C;li style=&quot;--i:0.1s;&quot;&#x0003E;<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        &#x0003C;a href=&quot;#&quot;&#x0003E;&#x0003C;ion-icon name=&quot;chatbubble-ellipses-outline&quot;&#x0003E;&#x0003C;/ion-icon&#x0003E;&#x0003C;/a&#x0003E;<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#x0003C;/li&#x0003E;<br></br>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x0003C;li style=&quot;--i:0.2s;&quot;&#x0003E;<br></br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x0003C;a href=&quot;#&quot;&#x0003E;&#x0003C;ion-icon name=&quot;logo-whatsapp&quot;&#x0003E;&#x0003C;/ion-icon&#x0003E;&#x0003C;/a&#x0003E;<br></br>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x0003C;/li&#x0003E;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x0003C;li style=&quot;--i:0.3s;&quot;&#x0003E;<br></br>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x0003C;a href=&quot;#&quot;&#x0003E;&#x0003C;ion-icon name=&quot;call-outline&quot;&#x0003E;&#x0003C;/ion-icon&#x0003E;&#x0003C;/ion-icon&#x0003E;&#x0003C;/a&#x0003E;<br></br>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x0003C;/li&#x0003E;<br></br>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x0003C;/ul&#x0003E;<br></br>
        &#x0003C;/div&#x0003E;<br></br>
    &#x0003C;/div&#x0003E;<br></br>
          </code>
        </div>
        <div className={`${style.code} code codecss`}>
          <code>
       

          &#x0002A;&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;margin: 0;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding: 0;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;box-sizing: border-box;<br></br>
&#x0007D;<br></br>

body&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display: flex;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;justify-content: center;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align-items: center;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min-height: 100vh;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color: #FF5757;<br></br>
&#x0007D;<br></br>

.navigation&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position: relative;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display: flex;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;justify-content: center;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align-items: center;<br></br>
&#x0007D;<br></br>

.menuToggle&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position: relative;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 70px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 70px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color: #fff;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-radius: 70px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cursor: pointer;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display: flex;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;justify-content: center;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align-items: center;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;box-shadow: 0 15px 25px rgba(0,0,0,0.15);<br></br>
&#x0007D;<br></br>

.menuToggle::before&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: &quot;+&quot;;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position: absolute;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-size: 3rem;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-weight: 700;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: crimson;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition: 1.5s;<br></br>
&#x0007D;<br></br>

.menuToggle.active::before&#x0007B;<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: rotate(225deg);<br></br>
&#x0007D;<br></br>

.menu&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position: absolute;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 30px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 30px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color: #fff;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-radius: 70px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z-index: -1;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition: transform 0.5s, width 0.5s, height 0.5s;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition-delay: 1s,0.5s,0.5s;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition-timing-function: cubic-bezier(0.75,0.82,0.165,1);<br></br>
&#x0007D;<br></br>

.menuToggle.active ~ .menu&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 240px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 70px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z-index: 1;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: translateY(-100px);<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition-delay: 0s,0.5s,0.5s;<br></br>
&#x0007D;<br></br>

.menu::before&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: &quot;&quot;;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position: absolute;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 16px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 16px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color: #fff;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;left: calc(50% - 8px);<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bottom: 4px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: rotate(45deg);<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-radius: 2px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition: 0.5s;<br></br>
&#x0007D;<br></br>
.menuToggle.active ~ .menu::before&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bottom: -6px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition-delay: 0.5s;<br></br>
&#x0007D;<br></br>
.menu ul&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position: relative;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display: flex;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;justify-content: center;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align-items: center;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 80px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gap: 40px
&#x0007D;<br></br>

.menu ul li&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;list-style: none;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cursor: pointer;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;opacity: 0;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;visibility: hidden;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: translateY(-30px);<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition: 0.25s;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition-delay: calc(0s + 0.3s);<br></br>
&#x0007D;<br></br>   

.menuToggle.active ~ .menu ul li&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;opacity: 1;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;visibility: visible;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: translateY(0px);<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition-delay: calc(0.75s + 0.3s);<br></br>
&#x0007D;<br></br>

.menu ul li a&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display: block;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-size: 2rem;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text-decoration: none;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: #555;<br></br>
&#x0007D;<br></br>

.menu ul li:hover a&#x0007B;<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: crimson;<br></br>
&#x0007D;<br></br>

          </code>
        </div>
        <div className={`${style.code} code codejs`}>
            <code>
            &#x0003C;script&#x0003E;<br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  const menuToggle = document.querySelector(&quot;.menuToggle&quot;);<br></br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; menuToggle.addEventListener(&quot;click&quot;,function()&#x0007B;<br></br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   menuToggle.classList.toggle(&quot;active&quot;);<br></br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x0007D;)<br></br>
&#x0003C;/script&#x0003E;<br></br>
&#x0003C;script type=&quot;module&quot; src=&quot;https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js&quot;&#x0003E;&#x0003C;/script&#x0003E;<br></br>
&#x0003C;script nomodule src=&quot;https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js&quot;&#x0003E;&#x0003C;/script&#x0003E;
            </code>
        </div>
      </div>
    </div>
  );
};

export default CodeSection;
