import React, { useState, useEffect } from "react";
import { LiveEditor, LivePreview, LiveProvider, LiveError } from "react-live";


const code = `function Counter() {
  let [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  });

  return <h1>Welcome : {count}</h1>;
}
`.trim();

function EditLive() {
let [color, setColor] = React.useState("black");
const styles = {
    container: {
        backgroundColor: color
    }
};
  return (
    <div style={{fontFamily:"sans-serif", textAlign:"center"}}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={styles.container} onClick={()=>setColor("white")}>
        <LiveProvider code={code} >
            <LiveEditor />
            <LiveError />
            <LivePreview />
        </LiveProvider>
        </div>
    </div>
  );
}
export default EditLive;


