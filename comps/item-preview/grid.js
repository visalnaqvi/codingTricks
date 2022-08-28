import Link from "next/link";
import style from "../../styles/itemPreview.module.css"
import text from '../../styles/Text.module.css'

const ItemPreviewGrid = () => {
    // useEffect(() => {
    //    document.querySelector('.video').play();
    //   });
    return ( 
        <div className={style.mainWrapper}>
            <Link href="/products/navigation-bars/side-navigation-floating">
                <div className={style.card}>
                    <div className={style.video}><video muted loop autoPlay src="/video1.webm"></video></div>
                    <div className={style.content}>
                        <h2 className={text.cardh2}>HTM, CSS, JavaScript Navigation Bar</h2>
                        <button className={style.button}>Get Code</button>
                    </div>
                </div>
            </Link>
            <Link href="/products/action-buttons/action-button">
            <div className={style.card}>
                <div className={style.video}><video muted loop autoPlay src="/video2.webm"></video></div>
                <div className={style.content}>
        
                    <h2 className={text.cardh2}>HTM, CSS, JavaScript Action Bar</h2>
                    <button className={style.button}>Get Code</button>
                </div>
            </div>
            </Link>
            <Link href="/products/action-buttons/action-button-red-2">
            <div className={style.card}>
                <div className={style.video}><video muted loop autoPlay src="/video3.webm"></video></div>
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