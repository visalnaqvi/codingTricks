import Link from "next/link";
import style from "../../styles/itemPreview.module.css"
import text from '../../styles/Text.module.css'
import Image from "next/image"
import video1 from "../../public/video1.gif"
import video2 from "../../public/video2.gif"
import video3 from "../../public/video3.gif"
import { useEffect } from "react";
const ItemPreviewGrid = () => {
    // useEffect(() => {
    //    document.querySelector('.video').play();
    //   });
    return ( 
        <div className={style.mainWrapper}>
            <Link href="/products/navigation-bars/side-navigation-floating">
                <div className={style.card}>
                    <div className={style.video}><Image width={320} height={180} src={video1} alt="balle"></Image></div>
                    <div className={style.content}>
                        <h2 className={text.cardh2}>HTM, CSS, JavaScript Navigation Bar</h2>
                        <button className={style.button}>Get Code</button>
                    </div>
                </div>
            </Link>
            <Link href="/products/action-buttons/action-button">
            <div className={style.card}>
                <div className={style.video}><Image width={320} height={180} src={video2} alt="balle"></Image></div>
                <div className={style.content}>
        
                    <h2 className={text.cardh2}>HTM, CSS, JavaScript Action Bar</h2>
                    <button className={style.button}>Get Code</button>
                </div>
            </div>
            </Link>
            <Link href="/products/action-buttons/action-button-red-2">
            <div className={style.card}>
                <div className={style.video}><Image width={320} height={180} src={video3} alt="balle"></Image></div>
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