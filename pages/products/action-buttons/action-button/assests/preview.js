import { useEffect } from "react"
import Script from 'next/script'
const PreviewComp = () => {
    useEffect(()=>{
        const list = document.querySelectorAll('.list');
   
   list.forEach((item)=>{
       item.addEventListener('click',(e)=>{
           list.forEach((item)=>{
               item.classList.remove('active'); 
           })     
           item.classList.add('active');   
       })
   })
       })
    return ( 
       
        <div className="wrap-pre">
                        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
<Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>

           <p className="msg">Preview currently unavailable on this device</p>
        <div className="navigation-action">
    <ul>
        <li className="list active">
            <a>
                <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                <span className="text">Home</span>
            </a>
        </li>
        <li className="list">
            <a>
                <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                <span className="text">Profile</span>
            </a>
        </li>  <li className="list">
            <a>
                <span className="icon"><ion-icon name="chatbubble-ellipses-outline"></ion-icon></span>
                <span className="text">Message</span>
            </a>
        </li>
        <li className="list">
            <a>
                <span className="icon"><ion-icon name="camera-outline"></ion-icon></span>
                <span className="text">Photos</span>
            </a>
        </li> <li className="list">
            <a>
                <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
                <span className="text">Settings</span>
            </a>
        </li>
        <div className="indicator">
        
        </div>
    </ul>
   
</div>

</div>

     );
}
 
export default PreviewComp;