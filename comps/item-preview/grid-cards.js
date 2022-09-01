import Link from "next/link";
import style from "../../styles/itemPreview.module.css"
import text from '../../styles/Text.module.css'

const GridCard = () => {
    const cards = [{link:"/products/navigation-bars/side-user-panel-floating",video:"/video1.webm",h2:"HTML, CSS, JavaScript User Panel",tag:["html","css","js","nav"]},
                 {link:"/products/action-buttons/action-button",video:"/video2.webm",h2:"HTML, CSS, JavaScript Action Bar",tag:["html","css","js","action"]},
                {link:"/products/cards/3d-cards-1",video:"/video4.webm",h2:"3D Cards using HTML, CSS, JavaScript",tag:["html","css","js","card"]},
                {link:"/products/cards/magic-cards/",video:"/video5.webm",h2:"Magic Card using HTML, CSS, JavaScript",tag:["html","css","js","card"]},
                {link:"/products/action-buttons/action-button-red-2",video:"/video3.webm",h2:"HTML, CSS, JavaScript Action Button",tag:["html","css","js","action"]},
                ];
               

    return ( 
       <div>
        {cards.map((card) =>
           
            <Link key={card.link} href={card.link}>
            <div className={style.card}>
                <div className={style.video}><video muted loop autoPlay src={card.video}></video></div>
                <div className={style.content}>
                    <h2 className={text.cardh2}>{card.h2}</h2>
                    <button className={style.button}>Get Code</button>
                </div>
            </div>
            </Link>
        )
    }
    </div>
     );
}
 
export default GridCard;