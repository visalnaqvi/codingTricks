import style from "../styles/CodeSection.module.css";
import "react";
import dynamic from "next/dynamic";

const CodeSection = ({ htmlCode, cssCode, jsCode }) => {
  const AceEditor = dynamic(
    async () => {
      const ace = await import("react-ace");
      await import("ace-builds/src-noconflict/mode-html");
      await import("ace-builds/src-noconflict/mode-javascript");
      await import("ace-builds/src-noconflict/mode-css");
      await import("ace-builds/src-noconflict/ext-language_tools");
      import("ace-builds/src-noconflict/theme-dreamweaver");
      return ace;
    },
    {
      loading: () => <>Loading...</>,
      ssr: false,
    }
  );
  const editorStyle = {
    fontSize: "1.1em",
    width: "100%",
    lineHeight: "1.7em",
    fontWeight: "500",
  };
  return (
    <div className={style.wrap}>
      <div className={style.topNav}>
        <ul className={style.ul}>
          <li
            onClick={(e) => {
              document.querySelectorAll(".code").forEach((code) => {
                code.classList.remove(style.active);
              });
              document.querySelector(".codehtml").classList.add(style.active);
              document.querySelectorAll("li").forEach((code) => {
                code.classList.remove(style.active);
              });
              e.target.classList.add(style.active);
            }}
            className={`${style.li} ${style.active}`}
          >
            HTML
          </li>
          <li
            onClick={(e) => {
              document.querySelectorAll(".code").forEach((code) => {
                code.classList.remove(style.active);
              });
              document.querySelector(".codecss").classList.add(style.active);
              document.querySelectorAll("li").forEach((code) => {
                code.classList.remove(style.active);
              });
              e.target.classList.add(style.active);
            }}
            className={style.li}
          >
            css
          </li>
          <li
            onClick={(e) => {
              document.querySelectorAll(".code").forEach((code) => {
                code.classList.remove(style.active);
              });
              document.querySelector(".codejs").classList.add(style.active);
              document.querySelectorAll("li").forEach((code) => {
                code.classList.remove(style.active);
              });
              e.target.classList.add(style.active);
            }}
            className={style.li}
          >
            JavaScript
          </li>
        </ul>
      </div>
      <div className={style.codeEditor}>
        <div className={`${style.code} code codehtml ${style.active}`}>
          <AceEditor
            style={editorStyle}
            mode="html"
            theme="dreamweaver"
            name="html_editor"
            editorProps={{ $blockScrolling: true }}
            setOptions={{ readOnly: true }}
            value={htmlCode}
          />
          ,
        </div>
        <div className={`${style.code} code codecss`}>
          <AceEditor
            style={editorStyle}
            mode="css"
            theme="dreamweaver"
            name="css_editor"
            setOptions={{ readOnly: true }}
            value={cssCode}
          />
          ,
        </div>
        <div className={`${style.code} code codejs`}>
          <AceEditor
            style={editorStyle}
            mode="javascript"
            theme="dreamweaver"
            name="css_editor"
            setOptions={{ readOnly: true }}
            value={jsCode}
          />
          ,
        </div>
      </div>
    </div>
  );
};

export default CodeSection;
