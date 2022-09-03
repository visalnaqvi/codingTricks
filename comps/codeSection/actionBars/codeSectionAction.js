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
          &lt;div class=&quot;navigation&quot;&gt;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;ul&gt;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &lt;li class=&quot;list active&quot;&gt;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       &lt;a href=&quot;#&quot; &gt;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            &lt;span class=&quot;icon&quot;&gt;&lt;ion-icon name=&quot;home-outline&quot;&gt;&lt;/ion-icon&gt;&lt;/span&gt;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         &lt;span class=&quot;text&quot;&gt;Home&lt;/span&gt;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    &lt;/a&gt;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    &lt;/li&gt;<br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;li class=&quot;list&quot;&gt;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;a href=&quot;#&quot; &gt;<br></br>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;span class=&quot;icon&quot;&gt;&lt;ion-icon name=&quot;person-outline&quot;&gt;&lt;/ion-icon&gt;&lt;/span&gt;<br></br>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;span class=&quot;text&quot;&gt;Profile&lt;/span&gt;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;/a&gt;<br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/li&gt; <br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;li class=&quot;list&quot;&gt;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;a href=&quot;#&quot; &gt;<br></br>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;span class=&quot;icon&quot;&gt;&lt;ion-icon name=&quot;chatbubble-ellipses-outline&quot;&gt;&lt;/ion-icon&gt;&lt;/span&gt;<br></br>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;span class=&quot;text&quot;&gt;Message&lt;/span&gt;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;/a&gt;<br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/li&gt;<br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;li class=&quot;list&quot;&gt;<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;a href=&quot;#&quot; &gt;<br></br>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;span class=&quot;icon&quot;&gt;&lt;ion-icon name=&quot;camera-outline&quot;&gt;&lt;/ion-icon&gt;&lt;/span&gt;<br></br>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;span class=&quot;text&quot;&gt;Photos&lt;/span&gt;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/a&gt;<br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/li&gt; <br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;li class=&quot;list&quot;&gt;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;a href=&quot;#&quot; &gt;<br></br>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;span class=&quot;icon&quot;&gt;&lt;ion-icon name=&quot;settings-outline&quot;&gt;&lt;/ion-icon&gt;&lt;/span&gt;<br></br>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;span class=&quot;text&quot;&gt;Settings&lt;/span&gt;<br></br>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/a&gt;<br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/li&gt;<br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div class=&quot;indicator&quot;&gt;
        
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt;<br></br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/ul&gt;<br></br>
   
&lt;/div&gt;<br></br>
          </code>
        </div>
        <div className={`${style.code} code codecss`}>
          <code>
       

&#x0002A;&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;margin: 0;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding: 0;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;box-sizing: border-box;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-family: &quot;Montserrat&quot;, sans-serif;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-weight: 600;<br></br>
&#x0007D;<br></br>

:root&#x0007B;<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--clr:#222327;<br></br>
&#x0007D;<br></br>

body&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display: flex;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;justify-content: center;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align-items: center;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min-height: 100vh;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background: var(--clr);<br></br>
&#x0007D;<br></br>

.navigation&#x0007B;<br></br>
   
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 400px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 70px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background: #fff;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position: relative;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display: flex;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;justify-content: center;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align-items: center;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-radius: 10px;<br></br>
&#x0007D;<br></br>

.navigation ul&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display: flex;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 350px;<br></br>
&#x0007D;<br></br>

.navigation ul li&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position: relative;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;list-style: none;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 70px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 70px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z-index: 1;<br></br>
&#x0007D;<br></br>

.navigation ul li a&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position: relative;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display: flex;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;justify-content: center;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align-items: center;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;flex-direction: column;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 100%;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text-align: center;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-weight: 500;<br></br>
&#x0007D;<br></br>

.navigation ul li a .icon&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position: relative;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display: block;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;line-height: 75px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-size: 1.5rem;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text-align: center;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition: 0.5s;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color:var(--clr);<br></br>
&#x0007D;<br></br>

.navigation ul li.active a .icon&#x0007B;<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: translateY(-32px);<br></br>
&#x0007D;<br></br>

.navigation ul li a .text&#x0007B;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position: absolute;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color:var(--clr);<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-weight: 400;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-size: 0.75em;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;letter-spacing: 0.05em;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition: 0.5s;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;opacity: 0;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: translateY(20px);<br></br>
&#x0007D;<br></br>

.navigation ul li.active a .text&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; opacity: 1;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; transform: translateY(10px);<br></br>
&#x0007D;<br></br>

.indicator&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; position: absolute;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; top: -50%;<br></br>
   
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width: 70px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: 70px;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background: #29fd53;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border-radius: 50%;<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border: 6px solid var(--clr);<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition: 0.5s;<br></br>
&#x0007D;<br></br>

.indicator::before&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; content: &quot;&quot;;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; position: absolute;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; top: 50%;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; left: -22.5px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; width: 20px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; height: 20px;<br></br>
   
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; border-top-right-radius: 20px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; box-shadow: 1px -10px 0 0 var(--clr);<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background: transparent;<br></br>

&#x0007D;<br></br>

.indicator::after&#x0007B;<br></br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  content: &quot;&quot;;<br></br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  position: absolute;<br></br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  top: 50%;<br></br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  right: -22.5px;<br></br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  width: 20px;<br></br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  height: 20px;<br></br>
    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; border-top-left-radius: 20px;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; box-shadow: -1px -10px 0 0 var(--clr);<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; background: transparent;<br></br>

&#x0007D;<br></br>

.navigation ul li:nth-child(1).active ~ .indicator&#x0007B;<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; transform: translate(calc(70px * 0));<br></br>
&#x0007D;<br></br>

.navigation ul li:nth-child(2).active ~ .indicator&#x0007B;<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; transform: translate(calc(70px * 1));<br></br>
&#x0007D;<br></br>

.navigation ul li:nth-child(3).active ~ .indicator&#x0007B;<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: translate(calc(70px * 2));<br></br>
&#x0007D;<br></br>

.navigation ul li:nth-child(4).active ~ .indicator&#x0007B;<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; transform: translate(calc(70px * 3));<br></br>
&#x0007D;<br></br>

.navigation ul li:nth-child(5).active ~ .indicator&#x0007B;<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: translate(calc(70px * 4));<br></br>
&#x0007D;<br></br>



          </code>
        </div>
        <div className={`${style.code} code codejs`}>
            <code>
            &#x0003C;script&#x0003E;
    const list = document.querySelectorAll(&quot;.list&quot;);<br></br>
   
    list.forEach((item)=&#x0003E;&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   item.addEventListener(&quot;click&quot;,(e)=&#x0003E;&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      list.forEach((item)=&#x0003E;&#x0007B;<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          item.classList.remove(&quot;active&quot;); <br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &#x0007D;)     <br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   item.classList.add(&quot;active&quot;);   <br></br>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      &#x0007D;)<br></br>
    &#x0007D;)<br></br>
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
