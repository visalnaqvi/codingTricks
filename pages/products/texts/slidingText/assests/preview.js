import style from "./style.module.css";

const PreviewComp = () => {
  
   
   
   
  return (
    
    <div className={style.wrap}>
       <h1 style={{"--count": "6"}}>
        <span aria-hidden style={{"--index": "0"}}>codingtricks.org</span>
        <span aria-hidden style={{"--index": "1"}}>codingtricks.org</span>
        <span aria-hidden style={{"--index": "2"}}>codingtricks.org</span>
        <span aria-hidden style={{"--index": "3"}}>codingtricks.org</span>
        <span aria-hidden style={{"--index": "4"}}>codingtricks.org</span>
        <span aria-hidden style={{"--index": "5"}}>codingtricks.org</span>
        <span>codingtricks.org</span>
      </h1>
    </div>
  );
};

export default PreviewComp;
