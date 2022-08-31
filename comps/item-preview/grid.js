import Link from "next/link";
import style from "../../styles/itemPreview.module.css"
import text from '../../styles/Text.module.css'

const ItemPreviewGrid = () => {
    // useEffect(() => {
    //    document.querySelector('.video').play();
    //   });
    return ( 
        <div className={style.mainWrapper}>
            <Link href="/products/navigation-bars/side-user-panel-floating">
                <div className={style.card}>
                    <div className={style.video}><video muted loop autoPlay src="/video1.webm"></video></div>
                    <div className={style.content}>
                        <h2 className={text.cardh2}>HTML, CSS, JavaScript User Panel</h2>
                        <button className={style.button}>Get Code</button>
                    </div>
                </div>
            </Link>
            <Link href="/products/action-buttons/action-button">
            <div className={style.card}>
                <div className={style.video}><video muted loop autoPlay src="/video2.webm"></video></div>
                <div className={style.content}>
        
                    <h2 className={text.cardh2}>HTML, CSS, JavaScript Action Bar</h2>
                    <button className={style.button}>Get Code</button>
                </div>
            </div>
            </Link>
            <Link href="/products/cards/3d-cards-1">
            <div className={style.card}>
                <div className={style.video}><video muted loop autoPlay src="/video4.webm"></video></div>
                <div className={style.content}>
        
                    <h2 className={text.cardh2}>3D Cards using HTML, CSS, JavaScript </h2>
                    <button className={style.button}>Get Code</button>
                </div>
            </div>
            </Link>
            <Link href="/products/cards/magic-cards/">
            <div className={style.card}>
                <div className={style.video}><video muted loop autoPlay src="/video5.webm"></video></div>
                <div className={style.content}>
        
                    <h2 className={text.cardh2}>Magic Card using HTML, CSS, JavaScript </h2>
                    <button className={style.button}>Get Code</button>
                </div>
            </div>
            </Link>
            <Link href="/products/action-buttons/action-button-red-2">
            <div className={style.card}>
                <div className={style.video}><video muted loop autoPlay src="/video3.webm"></video></div>
                <div className={style.content}>
                    <h2 className={text.cardh2}>HTML, CSS, JavaScript Action Button</h2>
                    <button className={style.button}>Get Code</button>
                </div>
            </div>
            </Link>
        </div>
     );
}
 
export default ItemPreviewGrid;