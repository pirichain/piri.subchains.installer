import{r as c,n as p}from"./components-DElVZEoG.js";import{i as d}from"./Stack-CZghuHls.js";function m({timeout:r=2e3}={}){const[s,o]=c.useState(null),[n,t]=c.useState(!1),[e,i]=c.useState(null),u=a=>{window.clearTimeout(e),i(window.setTimeout(()=>t(!1),r)),t(a)};return{copy:a=>{"clipboard"in navigator?navigator.clipboard.writeText(a).then(()=>u(!0)).catch(l=>o(l)):o(new Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{t(!1),o(null),window.clearTimeout(e)},error:s,copied:n}}const y={timeout:1e3};function f(r){const{children:s,timeout:o,value:n,...t}=d("CopyButton",y,r),e=m({timeout:o}),i=()=>e.copy(n);return p.jsx(p.Fragment,{children:s({copy:i,copied:e.copied,...t})})}f.displayName="@mantine/core/CopyButton";export{f as C};
