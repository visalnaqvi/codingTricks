import style from "./style.module.css";
import { useState , useRef , useEffect } from "react";
const PreviewComp = () => {
    const cardRef = useRef();
    let [toggle,setToggle] = useState(false) 
   
   
   
  return (
    
    <div className={style.wrap}>
      <div  className={style.card}>
        <div onClick={()=>{setToggle(!toggle)}} className={`${style.ineer_card} ${toggle?style.is_flipped:null}`}>
          <div className={`${style.card_faces} ${style.card_face_front}`}>
            <h2>what we do?</h2>
          </div>
          <div className={`${style.card_faces} ${style.card_face_back}`}>
            <div className={style.card_content}>
              <div className={style.card_header}>
                <h3>what we do?</h3>
              </div>
              <div className={style.card_body}>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Exercitationem illum laborum in ipsam sapiente optio ipsa
                  maiores modi, omnis quisquam eligendi, fugiat quis nam
                  inventore minima aliquam perspiciatis consequuntur facere!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewComp;
