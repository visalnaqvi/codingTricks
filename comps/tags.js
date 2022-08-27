import style from "../styles/tags.module.css"
const Tags = ({texts}) => {
    return ( 
        <div className={style.body}>
            {
                texts.map(t=>{
                  return(  <div key={t} className={style.Tagbody}>
                      <strong>{t}</strong>
                    </div>)
                })
            }
           
        </div>
     );
}
 
export default Tags;