import Link from "next/link";
import style from "../../styles/itemPreview.module.css"
import text from '../../styles/text.module.css'
import { useEffect } from "react";
const ItemPreviewGrid = () => {
    // useEffect(() => {
    //    document.querySelector('.video').play();
    //   });
    return ( 
        <div className={style.mainWrapper}>
            <Link href="/products/navigation-bars/side-navigation-floating">
                <div className={style.card}>
                    <div className={style.video}> <video autoPlay muted loop src={"/video1.mp4"}></video></div>
                    <div className={style.content}>
                        <h2 className={text.cardh2}>HTM, CSS, JavaScript Navigation Bar</h2>
                        <button className={style.button}>Get Code</button>
                    </div>
                </div>
            </Link>
            <Link href="/products/action-buttons/action-button">
            <div className={style.card}>
                <div className={style.video}><video muted loop autoPlay src={"/video2.mp4"}></video></div>
                <div className={style.content}>
        
                    <h2 className={text.cardh2}>HTM, CSS, JavaScript Action Bar</h2>
                    <button className={style.button}>Get Code</button>
                </div>
            </div>
            </Link>
            <Link href="/products/action-buttons/action-button-red-2">
            <div className={style.card}>
                <div className={style.video}><video loop muted autoPlay src={"/video3.mp4"}></video></div>
                <div className={style.content}>
                    <h2 className={text.cardh2}>HTM, CSS, JavaScript Action Button</h2>
                    <button className={style.button}>Get Code</button>
                </div>
            </div>
            </Link>
        </div>
     );
}
 
export default ItemPreviewGrid;