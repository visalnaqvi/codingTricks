import style from "../../styles/CodeSection.module.css";
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
            &lt;div class=&quot;navigation active&quot; &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;h2 class=&quot;title&quot;
            &gt;Users&lt;/h2 &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            class=&quot;bg&quot; &gt;&lt;/div &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;li
            position=&quot;20px&quot; &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;span class=&quot;img&quot;
            &gt;&lt;img src=&quot;./1.jpg&quot; / &gt;&lt;/span &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div class=&quot;info&quot; &gt;
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;p
            class=&quot;name&quot; &gt;&lt;span class=&quot;status green&quot;
            &gt;&lt;/span &gt;James Edward&lt;/p &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;p
            class=&quot;role&quot; &gt;Manager | 22.3k&lt;/p &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/div &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;/li &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;li position=&quot;90px&quot; &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;span class=&quot;img&quot; &gt;&lt;img src=&quot;./2.jpg&quot; /
            &gt;&lt;/span &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;div class=&quot;info&quot; &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;p class=&quot;name&quot; &gt;&lt;span class=&quot;status
            green&quot; &gt;&lt;/span &gt;Brian Timothy&lt;/p &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;p class=&quot;role&quot; &gt;Manager | 22.3k&lt;/p &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;/div &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;/li &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;li position=&quot;160px&quot; &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;span class=&quot;img&quot; &gt;&lt;img src=&quot;./3.jpg&quot; /
            &gt;&lt;/span &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;div class=&quot;info&quot; &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;p class=&quot;name&quot; &gt;&lt;span class=&quot;status
            red&quot; &gt;&lt;/span &gt;Joshua Kenneth&lt;/p &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;p class=&quot;role&quot; &gt;Manager | 22.3k&lt;/p &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;/div &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;/li &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;li position=&quot;230px&quot; &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;span class=&quot;img&quot; &gt;&lt;img src=&quot;./4.jpg&quot; /
            &gt;&lt;/span &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;div class=&quot;info&quot; &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;p class=&quot;name&quot; &gt;&lt;span class=&quot;status
            green&quot; &gt;&lt;/span &gt;Steven Paul&lt;/p &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;p class=&quot;role&quot; &gt;Manager | 22.3k&lt;/p &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;/div &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;/li &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;li position=&quot;300px&quot; &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;span class=&quot;img&quot; &gt;&lt;img src=&quot;./5.jpg&quot; /
            &gt;&lt;/span &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;div class=&quot;info&quot; &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;p class=&quot;name&quot; &gt;&lt;span class=&quot;status
            red&quot; &gt;&lt;/span &gt;Matthew Anthony&lt;/p &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;p class=&quot;role&quot; &gt;Manager | 22.3k&lt;/p &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;/div &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;/li &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul &gt;<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &lt;div class=&quot;toggle&quot; &gt;&lt;/div &gt;<br></br>
            &lt;/div &gt;<br></br>
          </code>
        </div>
        <div className={`${style.code} code codecss`}>
          <code>
          &#x0002A;&#x0007B;<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding&#x0003A; 0;<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;margin&#x0003A; 0;<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;box-sizing&#x0003A; border-box;<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-family&#x0003A; &quot;Poppins&quot;, sans-serif;<br></br>
    &#x0007D;<br></br>

    .title&#x0007B;<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display&#x0003A; none;<br></br>
    &#x0007D;<br></br>

    body&#x0007B;<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color&#x0003A;  #273150;<br></br>
    &#x0007D;<br></br>

    .navigation&#x0007B;<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-left&#x0003A; 5px solid #01081f;<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position&#x0003A; fixed;<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding-top&#x0003A; 20px;<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-radius&#x0003A; 20px;<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width&#x0003A; 80px;<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height&#x0003A; calc(100vh - 20px);<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color&#x0003A; #01081f;<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition&#x0003A; 0.5s;<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;overflow&#x0003A; hidden;<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bottom&#x0003A; 10px;<br></br>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;left&#x0003A; 10px;<br></br>
    &#x0007D;<br></br>

.navigation.active&#x0007B;<br></br>
    
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width&#x0003A; 300px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-radius&#x0003A; 20px;<br></br>
&#x0007D;<br></br>

.navigation ul li&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position&#x0003A; relative;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color&#x0003A; #fff;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display&#x0003A; flex;<br></br> 
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;justify-content&#x0003A; flex-start;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align-items&#x0003A; center;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height&#x0003A; 70px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width&#x0003A; 300px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition&#x0003A; 0.5 ease;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cursor&#x0003A; pointer;<br></br>
&#x0007D;<br></br>

.navigation .bg&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height&#x0003A; 70px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width&#x0003A; 100%;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-top-left-radius&#x0003A; 70px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-bottom-left-radius&#x0003A; 70px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position&#x0003A; absolute;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;top&#x0003A; 20px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;left&#x0003A; 0;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color&#x0003A; #273150;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition&#x0003A; 0.5s ease-in-out ;<br></br>
&#x0007D;<br></br>

.navigation ul li&#x0003A;hover .info .name&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text-decoration&#x0003A; underline;<br></br>
&#x0007D;<br></br>


.navigation ul li .img&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display&#x0003A; flex;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;justify-content&#x0003A; center;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align-items&#x0003A; center;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width&#x0003A; 75px;<br></br>
&#x0007D;<br></br>

.navigation ul li .info&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition&#x0003A; 0.5s ease-in-out;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding-left&#x0003A; 5px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform&#x0003A; translateX(30px);<br></br>
&#x0007D;<br></br>

.navigation.active ul li .info&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform&#x0003A; translateX(0px);<br></br>
&#x0007D;<br></br>

.navigation ul li .info .name&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display&#x0003A; flex;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;justify-content&#x0003A; flex-start;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align-items&#x0003A; center;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-size&#x0003A; 1em;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-weight&#x0003A; 700;<br></br>
&#x0007D;<br></br>

.status&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;margin-right&#x0003A; 8px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height&#x0003A; 8px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width&#x0003A; 8px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-radius&#x0003A; 100%;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color&#x0003A; #fff;<br></br>
&#x0007D;<br></br>

.status.red&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color&#x0003A; crimson;<br></br>
&#x0007D;<br></br>

.status.green&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color&#x0003A; greenyellow;<br></br>
&#x0007D;<br></br>

.navigation ul li .info .role&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-size&#x0003A; 0.8em;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-weight&#x0003A; 700;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color&#x0003A; #394871;<br></br>
&#x0007D;<br></br>

.navigation ul li .img img&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border&#x0003A; 2px solid #fff;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height&#x0003A; 50px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width&#x0003A; 50px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-radius&#x0003A; 100%;<br></br>
&#x0007D;<br></br>


.navigation .bg&#x0003A;&#x0003A;before&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content&#x0003A; &quot;&quot;;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position&#x0003A; absolute;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width&#x0003A; 20px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height&#x0003A; 20px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;top&#x0003A; -20px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;right&#x0003A; 0px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color&#x0003A;#01081f;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-bottom-right-radius&#x0003A; 50px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;box-shadow&#x0003A; 7.5px 7.5px 0 7.5px #273150;<br></br>
&#x0007D;<br></br>

.navigation .bg&#x0003A;&#x0003A;after&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content&#x0003A; &quot;&quot;;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position&#x0003A; absolute;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width&#x0003A; 20px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height&#x0003A; 20px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bottom&#x0003A; -20px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;right&#x0003A; 0px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color&#x0003A; #01081f;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-top-right-radius&#x0003A; 50px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;box-shadow&#x0003A; 7.5px -7.5px 0 7.5px #273150;<br></br>
&#x0007D;<br></br>


.toggle&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position&#x0003A; absolute;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bottom&#x0003A; 15px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;right&#x0003A; 15px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height&#x0003A; 50px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width&#x0003A; 50px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-radius&#x0003A; 100%;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color&#x0003A; #fff;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;box-shadow&#x0003A; 5px 5px 10px rgba(0,0,0);<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display&#x0003A; flex;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;justify-content&#x0003A; center;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align-items&#x0003A; center;<br></br>
&#x0007D;<br></br>

.toggle&#x0003A;&#x0003A;before&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position&#x0003A; absolute;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content&#x0003A; &quot;&quot;;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-radius&#x0003A; 3px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform&#x0003A; translateY(-5px);<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width&#x0003A; 26px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height&#x0003A; 3px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color&#x0003A; #273150;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition&#x0003A; 1s;<br></br>
&#x0007D;<br></br>

.toggle&#x0003A;&#x0003A;after&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position&#x0003A; absolute;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content&#x0003A; &quot;&quot;;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-radius&#x0003A; 3px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform&#x0003A; translateY(5px);<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width&#x0003A; 26px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height&#x0003A; 3px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color&#x0003A; #273150;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition&#x0003A; 1s;<br></br>
&#x0007D;<br></br>

.navigation.active .toggle&#x0003A;&#x0003A;before&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform&#x0003A; translateY(0px) rotate(-405deg);<br></br>
&#x0007D;<br></br>

.navigation.active .toggle&#x0003A;&#x0003A;after&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform&#x0003A; translateY(0px) rotate(225deg);<br></br>
&#x0007D;<br></br>
          </code>
        </div>
        <div className={`${style.code} code codejs`}>
            <code>
            const nav &#x0003D; document.querySelector&#x00028;&quot;.navigation&quot;&#x00029;;<br></br>
        const bg &#x0003D; document.querySelector&#x00028;&quot;.bg&quot;&#x00029;;<br></br>
        document.querySelector&#x00028;&quot;.toggle&quot;&#x00029;.addEventListener&#x00028;&quot;click&quot;, function &#x00028;&#x00029; &#x0007B;<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   nav.classList.toggle&#x00028;&quot;active&quot;&#x00029;;<br></br>
        &#x0007D;&#x00029;<br></br>
        const lis &#x0003D; document.querySelectorAll&#x00028;&quot;.navigation ul li&quot;&#x00029;;<br></br>
        lis.forEach&#x00028;&#x00028;li&#x00029;&#x0003D;&gt;&#x0007B;<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      li.addEventListener&#x00028;&quot;click&quot;,function&#x00028;&#x00029;&#x0007B;<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          bg.style.top &#x0003D; li.getAttribute&#x00028;&quot;position&quot;&#x00029;;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &#x0007D;&#x00029;<br></br>
        &#x0007D;&#x00029;<br></br>
            </code>
        </div>
      </div>
    </div>
  );
};

export default CodeSection;
