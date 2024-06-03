import{r as g,x as y}from"./components-CZY7GKuT.js";function J(e){return Object.keys(e)}function O(e){return e&&typeof e=="object"&&!Array.isArray(e)}function pe(e,r){const t={...e},n=r;return O(e)&&O(r)&&Object.keys(r).forEach(o=>{O(n[o])&&o in e?t[o]=pe(t[o],n[o]):t[o]=n[o]}),t}function ir(e){return e.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}function G(e){return e==="0rem"?"0rem":`calc(${e} * var(--mantine-scale))`}function me(e,{shouldScale:r=!1}={}){function t(n){if(n===0||n==="0")return`0${e}`;if(typeof n=="number"){const o=`${n/16}${e}`;return r?G(o):o}if(typeof n=="string"){if(n===""||n.startsWith("calc(")||n.startsWith("clamp(")||n.includes("rgba("))return n;if(n.includes(","))return n.split(",").map(a=>t(a)).join(",");if(n.includes(" "))return n.split(" ").map(a=>t(a)).join(" ");if(n.includes(e))return r?G(n):n;const o=n.replace("px","");if(!Number.isNaN(Number(o))){const a=`${Number(o)/16}${e}`;return r?G(a):a}}return n}return t}const s=me("rem",{shouldScale:!0}),zt=me("em");function q(e){return Object.keys(e).reduce((r,t)=>(e[t]!==void 0&&(r[t]=e[t]),r),{})}function ye(e){return typeof e=="number"?!0:typeof e=="string"?e.startsWith("calc(")||e.startsWith("var(")||e.includes(" ")&&e.trim()!==""?!0:/[0-9]/.test(e.trim().replace("-","")[0]):!1}function _(e,r="size",t=!0){if(e!==void 0)return ye(e)?t?s(e):e:`var(--${r}-${e})`}function ee(e){return _(e,"mantine-spacing")}function It(e){return e===void 0?"var(--mantine-radius-default)":_(e,"mantine-radius")}function cr(e){return _(e,"mantine-font-size")}function fr(e){return _(e,"mantine-line-height",!1)}function Ft(e){if(e)return _(e,"mantine-shadow",!1)}function lr(e,r){try{return e.addEventListener("change",r),()=>e.removeEventListener("change",r)}catch{return e.addListener(r),()=>e.removeListener(r)}}function dr(e,r){return typeof window<"u"&&"matchMedia"in window?window.matchMedia(e).matches:!1}function ur(e,r,{getInitialValueInEffect:t}={getInitialValueInEffect:!0}){const[n,o]=g.useState(t?r:dr(e)),a=g.useRef();return g.useEffect(()=>{if("matchMedia"in window)return a.current=window.matchMedia(e),o(a.current.matches),lr(a.current,i=>o(i.matches))},[e]),n}function Pt(e,r){const t=g.useRef(!1);g.useEffect(()=>()=>{t.current=!1},[]),g.useEffect(()=>{if(t.current)return e();t.current=!0},r)}function Ht(e,r){return ur("(prefers-reduced-motion: reduce)",e,r)}function Bt(e){return e}function ge(e){var r,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(r=0;r<o;r++)e[r]&&(t=ge(e[r]))&&(n&&(n+=" "),n+=t)}else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function k(){for(var e,r,t=0,n="",o=arguments.length;t<o;t++)(e=arguments[t])&&(r=ge(e))&&(n&&(n+=" "),n+=r);return n}const pr={};function mr(e){const r={};return e.forEach(t=>{Object.entries(t).forEach(([n,o])=>{r[n]?r[n]=k(r[n],o):r[n]=o})}),r}function re({theme:e,classNames:r,props:t,stylesCtx:n}){const a=(Array.isArray(r)?r:[r]).map(i=>typeof i=="function"?i(e,t,n):i||pr);return mr(a)}function Q({theme:e,styles:r,props:t,stylesCtx:n}){return(Array.isArray(r)?r:[r]).reduce((a,i)=>typeof i=="function"?{...a,...i(e,t,n)}:{...a,...i},{})}const yr=g.createContext(null);function j(){const e=g.useContext(yr);if(!e)throw new Error("[@mantine/core] MantineProvider was not found in tree");return e}function Wt(){return j().cssVariablesResolver}function gr(){return j().classNamesPrefix}function br(){return j().getStyleNonce}function hr(){return j().withStaticClasses}function $r(){return j().headless}function vr(){var e;return(e=j().stylesTransform)==null?void 0:e.sx}function Sr(){var e;return(e=j().stylesTransform)==null?void 0:e.styles}function xr(e){return/^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e)}function wr(e){let r=e.replace("#","");if(r.length===3){const i=r.split("");r=[i[0],i[0],i[1],i[1],i[2],i[2]].join("")}if(r.length===8){const i=parseInt(r.slice(6,8),16)/255;return{r:parseInt(r.slice(0,2),16),g:parseInt(r.slice(2,4),16),b:parseInt(r.slice(4,6),16),a:i}}const t=parseInt(r,16),n=t>>16&255,o=t>>8&255,a=t&255;return{r:n,g:o,b:a,a:1}}function Cr(e){const[r,t,n,o]=e.replace(/[^0-9,./]/g,"").split(/[/,]/).map(Number);return{r,g:t,b:n,a:o||1}}function Nr(e){const r=/^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i,t=e.match(r);if(!t)return{r:0,g:0,b:0,a:1};const n=parseInt(t[1],10),o=parseInt(t[2],10)/100,a=parseInt(t[3],10)/100,i=t[5]?parseFloat(t[5]):void 0,c=(1-Math.abs(2*a-1))*o,f=n/60,l=c*(1-Math.abs(f%2-1)),u=a-c/2;let d,p,m;return f>=0&&f<1?(d=c,p=l,m=0):f>=1&&f<2?(d=l,p=c,m=0):f>=2&&f<3?(d=0,p=c,m=l):f>=3&&f<4?(d=0,p=l,m=c):f>=4&&f<5?(d=l,p=0,m=c):(d=c,p=0,m=l),{r:Math.round((d+u)*255),g:Math.round((p+u)*255),b:Math.round((m+u)*255),a:i||1}}function te(e){return xr(e)?wr(e):e.startsWith("rgb")?Cr(e):e.startsWith("hsl")?Nr(e):{r:0,g:0,b:0,a:1}}function I(e,r){if(e.startsWith("var("))return`color-mix(in srgb, ${e}, black ${r*100}%)`;const{r:t,g:n,b:o,a}=te(e),i=1-r,c=f=>Math.round(f*i);return`rgba(${c(t)}, ${c(n)}, ${c(o)}, ${a})`}function Rr(e,r){return typeof e.primaryShade=="number"?e.primaryShade:r==="dark"?e.primaryShade.dark:e.primaryShade.light}function V(e){return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function Tr(e){const r=e.match(/oklch\((.*?)%\s/);return r?parseFloat(r[1]):null}function Mr(e){if(e.startsWith("oklch("))return(Tr(e)||0)/100;const{r,g:t,b:n}=te(e),o=r/255,a=t/255,i=n/255,c=V(o),f=V(a),l=V(i);return .2126*c+.7152*f+.0722*l}function E(e,r=.179){return e.startsWith("var(")?!1:Mr(e)>r}function P({color:e,theme:r,colorScheme:t}){if(typeof e!="string")throw new Error(`[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof e}`);if(e==="bright")return{color:e,value:t==="dark"?r.white:r.black,shade:void 0,isThemeColor:!1,isLight:E(t==="dark"?r.white:r.black,r.luminanceThreshold),variable:"--mantine-color-bright"};if(e==="dimmed")return{color:e,value:t==="dark"?r.colors.dark[2]:r.colors.gray[7],shade:void 0,isThemeColor:!1,isLight:E(t==="dark"?r.colors.dark[2]:r.colors.gray[6],r.luminanceThreshold),variable:"--mantine-color-dimmed"};if(e==="white"||e==="black")return{color:e,value:e==="white"?r.white:r.black,shade:void 0,isThemeColor:!1,isLight:E(e==="white"?r.white:r.black,r.luminanceThreshold),variable:`--mantine-color-${e}`};const[n,o]=e.split("."),a=o?Number(o):void 0,i=n in r.colors;if(i){const c=a!==void 0?r.colors[n][a]:r.colors[n][Rr(r,t||"light")];return{color:n,value:c,shade:a,isThemeColor:i,isLight:E(c,r.luminanceThreshold),variable:o?`--mantine-color-${n}-${a}`:`--mantine-color-${n}-filled`}}return{color:e,value:e,isThemeColor:i,isLight:E(e,r.luminanceThreshold),shade:a,variable:void 0}}function F(e,r){const t=P({color:e||r.primaryColor,theme:r});return t.variable?`var(${t.variable})`:e}function X(e,r){const t={from:(e==null?void 0:e.from)||r.defaultGradient.from,to:(e==null?void 0:e.to)||r.defaultGradient.to,deg:(e==null?void 0:e.deg)||r.defaultGradient.deg||0},n=F(t.from,r),o=F(t.to,r);return`linear-gradient(${t.deg}deg, ${n} 0%, ${o} 100%)`}function R(e,r){if(typeof e!="string"||r>1||r<0)return"rgba(0, 0, 0, 1)";if(e.startsWith("var(")){const a=(1-r)*100;return`color-mix(in srgb, ${e}, transparent ${a}%)`}if(e.startsWith("oklch"))return e.includes("/")?e.replace(/\/\s*[\d.]+\s*\)/,`/ ${r})`):e.replace(")",` / ${r})`);const{r:t,g:n,b:o}=te(e);return`rgba(${t}, ${n}, ${o}, ${r})`}const Ot=R,kr=({color:e,theme:r,variant:t,gradient:n,autoContrast:o})=>{const a=P({color:e,theme:r}),i=typeof o=="boolean"?o:r.autoContrast;if(t==="filled"){const c=i&&a.isLight?"var(--mantine-color-black)":"var(--mantine-color-white)";return a.isThemeColor?a.shade===void 0?{background:`var(--mantine-color-${e}-filled)`,hover:`var(--mantine-color-${e}-filled-hover)`,color:c,border:`${s(1)} solid transparent`}:{background:`var(--mantine-color-${a.color}-${a.shade})`,hover:`var(--mantine-color-${a.color}-${a.shade===9?8:a.shade+1})`,color:c,border:`${s(1)} solid transparent`}:{background:e,hover:I(e,.1),color:c,border:`${s(1)} solid transparent`}}if(t==="light"){if(a.isThemeColor){if(a.shade===void 0)return{background:`var(--mantine-color-${e}-light)`,hover:`var(--mantine-color-${e}-light-hover)`,color:`var(--mantine-color-${e}-light-color)`,border:`${s(1)} solid transparent`};const c=r.colors[a.color][a.shade];return{background:R(c,.1),hover:R(c,.12),color:`var(--mantine-color-${a.color}-${Math.min(a.shade,6)})`,border:`${s(1)} solid transparent`}}return{background:R(e,.1),hover:R(e,.12),color:e,border:`${s(1)} solid transparent`}}if(t==="outline")return a.isThemeColor?a.shade===void 0?{background:"transparent",hover:`var(--mantine-color-${e}-outline-hover)`,color:`var(--mantine-color-${e}-outline)`,border:`${s(1)} solid var(--mantine-color-${e}-outline)`}:{background:"transparent",hover:R(r.colors[a.color][a.shade],.05),color:`var(--mantine-color-${a.color}-${a.shade})`,border:`${s(1)} solid var(--mantine-color-${a.color}-${a.shade})`}:{background:"transparent",hover:R(e,.05),color:e,border:`${s(1)} solid ${e}`};if(t==="subtle"){if(a.isThemeColor){if(a.shade===void 0)return{background:"transparent",hover:`var(--mantine-color-${e}-light-hover)`,color:`var(--mantine-color-${e}-light-color)`,border:`${s(1)} solid transparent`};const c=r.colors[a.color][a.shade];return{background:"transparent",hover:R(c,.12),color:`var(--mantine-color-${a.color}-${Math.min(a.shade,6)})`,border:`${s(1)} solid transparent`}}return{background:"transparent",hover:R(e,.12),color:e,border:`${s(1)} solid transparent`}}return t==="transparent"?a.isThemeColor?a.shade===void 0?{background:"transparent",hover:"transparent",color:`var(--mantine-color-${e}-light-color)`,border:`${s(1)} solid transparent`}:{background:"transparent",hover:"transparent",color:`var(--mantine-color-${a.color}-${Math.min(a.shade,6)})`,border:`${s(1)} solid transparent`}:{background:"transparent",hover:"transparent",color:e,border:`${s(1)} solid transparent`}:t==="white"?a.isThemeColor?a.shade===void 0?{background:"var(--mantine-color-white)",hover:I(r.white,.01),color:`var(--mantine-color-${e}-filled)`,border:`${s(1)} solid transparent`}:{background:"var(--mantine-color-white)",hover:I(r.white,.01),color:`var(--mantine-color-${a.color}-${a.shade})`,border:`${s(1)} solid transparent`}:{background:"var(--mantine-color-white)",hover:I(r.white,.01),color:e,border:`${s(1)} solid transparent`}:t==="gradient"?{background:X(n,r),hover:X(n,r),color:"var(--mantine-color-white)",border:"none"}:t==="default"?{background:"var(--mantine-color-default)",hover:"var(--mantine-color-default-hover)",color:"var(--mantine-color-default-color)",border:`${s(1)} solid var(--mantine-color-default-border)`}:{}},jr={dark:["#C9C9C9","#b8b8b8","#828282","#696969","#424242","#3b3b3b","#2e2e2e","#242424","#1f1f1f","#141414"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]},ie="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",be={scale:1,fontSmoothing:!0,focusRing:"auto",white:"#fff",black:"#000",colors:jr,primaryShade:{light:6,dark:8},primaryColor:"blue",variantColorResolver:kr,autoContrast:!1,luminanceThreshold:.3,fontFamily:ie,fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",respectReducedMotion:!1,cursorType:"default",defaultGradient:{from:"blue",to:"cyan",deg:45},defaultRadius:"sm",activeClassName:"mantine-active",focusClassName:"",headings:{fontFamily:ie,fontWeight:"700",textWrap:"wrap",sizes:{h1:{fontSize:s(34),lineHeight:"1.3"},h2:{fontSize:s(26),lineHeight:"1.35"},h3:{fontSize:s(22),lineHeight:"1.4"},h4:{fontSize:s(18),lineHeight:"1.45"},h5:{fontSize:s(16),lineHeight:"1.5"},h6:{fontSize:s(14),lineHeight:"1.5"}}},fontSizes:{xs:s(12),sm:s(14),md:s(16),lg:s(18),xl:s(20)},lineHeights:{xs:"1.4",sm:"1.45",md:"1.55",lg:"1.6",xl:"1.65"},radius:{xs:s(2),sm:s(4),md:s(8),lg:s(16),xl:s(32)},spacing:{xs:s(10),sm:s(12),md:s(16),lg:s(20),xl:s(32)},breakpoints:{xs:"36em",sm:"48em",md:"62em",lg:"75em",xl:"88em"},shadows:{xs:`0 ${s(1)} ${s(3)} rgba(0, 0, 0, 0.05), 0 ${s(1)} ${s(2)} rgba(0, 0, 0, 0.1)`,sm:`0 ${s(1)} ${s(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${s(10)} ${s(15)} ${s(-5)}, rgba(0, 0, 0, 0.04) 0 ${s(7)} ${s(7)} ${s(-5)}`,md:`0 ${s(1)} ${s(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${s(20)} ${s(25)} ${s(-5)}, rgba(0, 0, 0, 0.04) 0 ${s(10)} ${s(10)} ${s(-5)}`,lg:`0 ${s(1)} ${s(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${s(28)} ${s(23)} ${s(-7)}, rgba(0, 0, 0, 0.04) 0 ${s(12)} ${s(12)} ${s(-7)}`,xl:`0 ${s(1)} ${s(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${s(36)} ${s(28)} ${s(-7)}, rgba(0, 0, 0, 0.04) 0 ${s(17)} ${s(17)} ${s(-7)}`},other:{},components:{}},_r="[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color",ce="[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";function D(e){return e<0||e>9?!1:parseInt(e.toString(),10)===e}function fe(e){if(!(e.primaryColor in e.colors))throw new Error(_r);if(typeof e.primaryShade=="object"&&(!D(e.primaryShade.dark)||!D(e.primaryShade.light)))throw new Error(ce);if(typeof e.primaryShade=="number"&&!D(e.primaryShade))throw new Error(ce)}function Ar(e,r){var n;if(!r)return fe(e),e;const t=pe(e,r);return r.fontFamily&&!((n=r.headings)!=null&&n.fontFamily)&&(t.headings.fontFamily=r.fontFamily),fe(t),t}const ne=g.createContext(null),Er=()=>g.useContext(ne)||be;function H(){const e=g.useContext(ne);if(!e)throw new Error("@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app");return e}function Lr({theme:e,children:r,inherit:t=!0}){const n=Er(),o=g.useMemo(()=>Ar(t?n:be,e),[e,n,t]);return y.jsx(ne.Provider,{value:o,children:r})}Lr.displayName="@mantine/core/MantineThemeProvider";function zr(e){return Array.isArray(e)?e:Array(10).fill(e)}const Ir={always:"mantine-focus-always",auto:"mantine-focus-auto",never:"mantine-focus-never"};function Fr({theme:e,options:r,unstyled:t}){return k((r==null?void 0:r.focusable)&&!t&&(e.focusClassName||Ir[e.focusRing]),(r==null?void 0:r.active)&&!t&&e.activeClassName)}function Pr({selector:e,stylesCtx:r,options:t,props:n,theme:o}){return re({theme:o,classNames:t==null?void 0:t.classNames,props:(t==null?void 0:t.props)||n,stylesCtx:r})[e]}function le({selector:e,stylesCtx:r,theme:t,classNames:n,props:o}){return re({theme:t,classNames:n,props:o,stylesCtx:r})[e]}function Hr({rootSelector:e,selector:r,className:t}){return e===r?t:void 0}function Br({selector:e,classes:r,unstyled:t}){return t?void 0:r[e]}function Wr({themeName:e,classNamesPrefix:r,selector:t,withStaticClass:n}){return n===!1?[]:e.map(o=>`${r}-${o}-${t}`)}function Or({themeName:e,theme:r,selector:t,props:n,stylesCtx:o}){return e.map(a=>{var i,c;return(c=re({theme:r,classNames:(i=r.components[a])==null?void 0:i.classNames,props:n,stylesCtx:o}))==null?void 0:c[t]})}function Gr({options:e,classes:r,selector:t,unstyled:n}){return e!=null&&e.variant&&!n?r[`${t}--${e.variant}`]:void 0}function Vr({theme:e,options:r,themeName:t,selector:n,classNamesPrefix:o,classNames:a,classes:i,unstyled:c,className:f,rootSelector:l,props:u,stylesCtx:d,withStaticClasses:p,headless:m,transformedStyles:b}){return k(Fr({theme:e,options:r,unstyled:c||m}),Or({theme:e,themeName:t,selector:n,props:u,stylesCtx:d}),Gr({options:r,classes:i,selector:n,unstyled:c}),le({selector:n,stylesCtx:d,theme:e,classNames:a,props:u}),le({selector:n,stylesCtx:d,theme:e,classNames:b,props:u}),Pr({selector:n,stylesCtx:d,options:r,props:u,theme:e}),Hr({rootSelector:l,selector:n,className:f}),Br({selector:n,classes:i,unstyled:c||m}),p&&!m&&Wr({themeName:t,classNamesPrefix:o,selector:n,withStaticClass:r==null?void 0:r.withStaticClass}),r==null?void 0:r.className)}function Dr({theme:e,themeName:r,props:t,stylesCtx:n,selector:o}){return r.map(a=>{var i;return Q({theme:e,styles:(i=e.components[a])==null?void 0:i.styles,props:t,stylesCtx:n})[o]}).reduce((a,i)=>({...a,...i}),{})}function K({style:e,theme:r}){return Array.isArray(e)?[...e].reduce((t,n)=>({...t,...K({style:n,theme:r})}),{}):typeof e=="function"?e(r):e??{}}function Ur(e){return e.reduce((r,t)=>(t&&Object.keys(t).forEach(n=>{r[n]={...r[n],...q(t[n])}}),r),{})}function Yr({vars:e,varsResolver:r,theme:t,props:n,stylesCtx:o,selector:a,themeName:i,headless:c}){var f;return(f=Ur([c?{}:r==null?void 0:r(t,n,o),...i.map(l=>{var u,d,p;return(p=(d=(u=t.components)==null?void 0:u[l])==null?void 0:d.vars)==null?void 0:p.call(d,t,n,o)}),e==null?void 0:e(t,n,o)]))==null?void 0:f[a]}function Qr({theme:e,themeName:r,selector:t,options:n,props:o,stylesCtx:a,rootSelector:i,styles:c,style:f,vars:l,varsResolver:u,headless:d,withStylesTransform:p}){return{...!p&&Dr({theme:e,themeName:r,props:o,stylesCtx:a,selector:t}),...!p&&Q({theme:e,styles:c,props:o,stylesCtx:a})[t],...!p&&Q({theme:e,styles:n==null?void 0:n.styles,props:(n==null?void 0:n.props)||o,stylesCtx:a})[t],...Yr({theme:e,props:o,stylesCtx:a,vars:l,varsResolver:u,selector:t,themeName:r,headless:d}),...i===t?K({style:f,theme:e}):null,...K({style:n==null?void 0:n.style,theme:e})}}function Xr({props:e,stylesCtx:r,themeName:t}){var i;const n=H(),o=(i=Sr())==null?void 0:i();return{getTransformedStyles:c=>o?[...c.map(l=>o(l,{props:e,theme:n,ctx:r})),...t.map(l=>{var u;return o((u=n.components[l])==null?void 0:u.styles,{props:e,theme:n,ctx:r})})].filter(Boolean):[],withStylesTransform:!!o}}function L({name:e,classes:r,props:t,stylesCtx:n,className:o,style:a,rootSelector:i="root",unstyled:c,classNames:f,styles:l,vars:u,varsResolver:d}){const p=H(),m=gr(),b=hr(),v=$r(),h=(Array.isArray(e)?e:[e]).filter(S=>S),{withStylesTransform:N,getTransformedStyles:x}=Xr({props:t,stylesCtx:n,themeName:h});return(S,$)=>({className:Vr({theme:p,options:$,themeName:h,selector:S,classNamesPrefix:m,classNames:f,classes:r,unstyled:c,className:o,rootSelector:i,props:t,stylesCtx:n,withStaticClasses:b,headless:v,transformedStyles:x([$==null?void 0:$.styles,l])}),style:Qr({theme:p,themeName:h,selector:S,options:$,props:t,stylesCtx:n,rootSelector:i,styles:l,style:a,vars:u,varsResolver:d,headless:v,withStylesTransform:N})})}function z(e,r,t){var i;const n=H(),o=(i=n.components[e])==null?void 0:i.defaultProps,a=typeof o=="function"?o(n):o;return{...r,...a,...q(t)}}function U(e){return J(e).reduce((r,t)=>e[t]!==void 0?`${r}${ir(t)}:${e[t]};`:r,"").trim()}function Kr({selector:e,styles:r,media:t,container:n}){const o=r?U(r):"",a=Array.isArray(t)?t.map(c=>`@media${c.query}{${e}{${U(c.styles)}}}`):[],i=Array.isArray(n)?n.map(c=>`@container ${c.query}{${e}{${U(c.styles)}}}`):[];return`${o?`${e}{${o}}`:""}${a.join("")}${i.join("")}`.trim()}function Zr(e){const r=br();return y.jsx("style",{"data-mantine-styles":"inline",nonce:r==null?void 0:r(),dangerouslySetInnerHTML:{__html:Kr(e)}})}function Jr(e){const{m:r,mx:t,my:n,mt:o,mb:a,ml:i,mr:c,me:f,ms:l,p:u,px:d,py:p,pt:m,pb:b,pl:v,pr:h,pe:N,ps:x,bg:S,c:$,opacity:C,ff:M,fz:A,fw:B,lts:W,ta:Ae,lh:Ee,fs:Le,tt:ze,td:Ie,w:Fe,miw:Pe,maw:He,h:Be,mih:We,mah:Oe,bgsz:Ge,bgp:Ve,bgr:De,bga:Ue,pos:Ye,top:Qe,left:Xe,bottom:Ke,right:Ze,inset:Je,display:qe,flex:er,hiddenFrom:rr,visibleFrom:tr,lightHidden:nr,darkHidden:ar,sx:or,...sr}=e;return{styleProps:q({m:r,mx:t,my:n,mt:o,mb:a,ml:i,mr:c,me:f,ms:l,p:u,px:d,py:p,pt:m,pb:b,pl:v,pr:h,pe:N,ps:x,bg:S,c:$,opacity:C,ff:M,fz:A,fw:B,lts:W,ta:Ae,lh:Ee,fs:Le,tt:ze,td:Ie,w:Fe,miw:Pe,maw:He,h:Be,mih:We,mah:Oe,bgsz:Ge,bgp:Ve,bgr:De,bga:Ue,pos:Ye,top:Qe,left:Xe,bottom:Ke,right:Ze,inset:Je,display:qe,flex:er,hiddenFrom:rr,visibleFrom:tr,lightHidden:nr,darkHidden:ar,sx:or}),rest:sr}}const qr={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},ms:{type:"spacing",property:"marginInlineStart"},me:{type:"spacing",property:"marginInlineEnd"},mx:{type:"spacing",property:"marginInline"},my:{type:"spacing",property:"marginBlock"},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},ps:{type:"spacing",property:"paddingInlineStart"},pe:{type:"spacing",property:"paddingInlineEnd"},px:{type:"spacing",property:"paddingInline"},py:{type:"spacing",property:"paddingBlock"},bd:{type:"border",property:"border"},bg:{type:"color",property:"background"},c:{type:"textColor",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"fontFamily",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"lineHeight",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"identity",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"},flex:{type:"identity",property:"flex"}};function ae(e,r){const t=P({color:e,theme:r});return t.color==="dimmed"?"var(--mantine-color-dimmed)":t.color==="bright"?"var(--mantine-color-bright)":t.variable?`var(${t.variable})`:t.color}function et(e,r){const t=P({color:e,theme:r});return t.isThemeColor&&t.shade===void 0?`var(--mantine-color-${t.color}-text)`:ae(e,r)}function rt(e,r){if(typeof e=="number")return s(e);if(typeof e=="string"){const[t,n,...o]=e.split(" ").filter(i=>i.trim()!=="");let a=`${s(t)}`;return n&&(a+=` ${n}`),zr.length>0&&(a+=` ${ae(o.join(" "),r)}`),a.trim()}return e}const de={text:"var(--mantine-font-family)",mono:"var(--mantine-font-family-monospace)",monospace:"var(--mantine-font-family-monospace)",heading:"var(--mantine-font-family-headings)",headings:"var(--mantine-font-family-headings)"};function tt(e){return typeof e=="string"&&e in de?de[e]:e}const nt=["h1","h2","h3","h4","h5","h6"];function at(e,r){return typeof e=="string"&&e in r.fontSizes?`var(--mantine-font-size-${e})`:typeof e=="string"&&nt.includes(e)?`var(--mantine-${e}-font-size)`:typeof e=="number"||typeof e=="string"?s(e):e}function ot(e){return e}const st=["h1","h2","h3","h4","h5","h6"];function it(e,r){return typeof e=="string"&&e in r.lineHeights?`var(--mantine-line-height-${e})`:typeof e=="string"&&st.includes(e)?`var(--mantine-${e}-line-height)`:e}function ct(e){return typeof e=="number"?s(e):e}function ft(e,r){if(typeof e=="number")return s(e);if(typeof e=="string"){const t=e.replace("-","");if(!(t in r.spacing))return s(e);const n=`--mantine-spacing-${t}`;return e.startsWith("-")?`calc(var(${n}) * -1)`:`var(${n})`}return e}const Y={color:ae,textColor:et,fontSize:at,spacing:ft,identity:ot,size:ct,lineHeight:it,fontFamily:tt,border:rt};function ue(e){return e.replace("(min-width: ","").replace("em)","")}function lt({media:e,...r}){const n=Object.keys(e).sort((o,a)=>Number(ue(o))-Number(ue(a))).map(o=>({query:o,styles:e[o]}));return{...r,media:n}}function dt(e){if(typeof e!="object"||e===null)return!1;const r=Object.keys(e);return!(r.length===1&&r[0]==="base")}function ut(e){return typeof e=="object"&&e!==null?"base"in e?e.base:void 0:e}function pt(e){return typeof e=="object"&&e!==null?J(e).filter(r=>r!=="base"):[]}function mt(e,r){return typeof e=="object"&&e!==null&&r in e?e[r]:e}function yt({styleProps:e,data:r,theme:t}){return lt(J(e).reduce((n,o)=>{if(o==="hiddenFrom"||o==="visibleFrom"||o==="sx")return n;const a=r[o],i=Array.isArray(a.property)?a.property:[a.property],c=ut(e[o]);if(!dt(e[o]))return i.forEach(l=>{n.inlineStyles[l]=Y[a.type](c,t)}),n;n.hasResponsiveStyles=!0;const f=pt(e[o]);return i.forEach(l=>{c&&(n.styles[l]=Y[a.type](c,t)),f.forEach(u=>{const d=`(min-width: ${t.breakpoints[u]})`;n.media[d]={...n.media[d],[l]:Y[a.type](mt(e[o],u),t)}})}),n},{hasResponsiveStyles:!1,styles:{},inlineStyles:{},media:{}}))}function gt(){return`__m__-${g.useId().replace(/:/g,"")}`}function he(e){return e.startsWith("data-")?e:`data-${e}`}function bt(e){return Object.keys(e).reduce((r,t)=>{const n=e[t];return n===void 0||n===""||n===!1||n===null||(r[he(t)]=e[t]),r},{})}function $e(e){return e?typeof e=="string"?{[he(e)]:!0}:Array.isArray(e)?[...e].reduce((r,t)=>({...r,...$e(t)}),{}):bt(e):null}function Z(e,r){return Array.isArray(e)?[...e].reduce((t,n)=>({...t,...Z(n,r)}),{}):typeof e=="function"?e(r):e??{}}function ht({theme:e,style:r,vars:t,styleProps:n}){const o=Z(r,e),a=Z(t,e);return{...o,...a,...n}}const ve=g.forwardRef(({component:e,style:r,__vars:t,className:n,variant:o,mod:a,size:i,hiddenFrom:c,visibleFrom:f,lightHidden:l,darkHidden:u,renderRoot:d,...p},m)=>{var A;const b=H(),v=e||"div",{styleProps:h,rest:N}=Jr(p),x=vr(),S=(A=x==null?void 0:x())==null?void 0:A(h.sx),$=gt(),C=yt({styleProps:h,theme:b,data:qr}),M={ref:m,style:ht({theme:b,style:r,vars:t,styleProps:C.inlineStyles}),className:k(n,S,{[$]:C.hasResponsiveStyles,"mantine-light-hidden":l,"mantine-dark-hidden":u,[`mantine-hidden-from-${c}`]:c,[`mantine-visible-from-${f}`]:f}),"data-variant":o,"data-size":ye(i)?void 0:i||void 0,...$e(a),...N};return y.jsxs(y.Fragment,{children:[C.hasResponsiveStyles&&y.jsx(Zr,{selector:`.${$}`,styles:C.styles,media:C.media}),typeof d=="function"?d(M):y.jsx(v,{...M})]})});ve.displayName="@mantine/core/Box";const T=ve;function Se(e){return e}function oe(e){const r=g.forwardRef(e);return r.extend=Se,r}function xe(e){const r=g.forwardRef(e);return r.extend=Se,r}var we={root:"m_87cf2631"};const $t={__staticSelector:"UnstyledButton"},Ce=xe((e,r)=>{const t=z("UnstyledButton",$t,e),{className:n,component:o="button",__staticSelector:a,unstyled:i,classNames:c,styles:f,style:l,...u}=t,d=L({name:a,props:t,classes:we,className:n,style:l,classNames:c,styles:f,unstyled:i});return y.jsx(T,{...d("root",{focusable:!0}),component:o,ref:r,type:o==="button"?"button":void 0,...u})});Ce.classes=we;Ce.displayName="@mantine/core/UnstyledButton";var w={root:"m_5ae2e3c",barsLoader:"m_7a2bd4cd",bar:"m_870bb79","bars-loader-animation":"m_5d2b3b9d",dotsLoader:"m_4e3f22d7",dot:"m_870c4af","loader-dots-animation":"m_aac34a1",ovalLoader:"m_b34414df","oval-loader-animation":"m_f8e89c4b"};const vt=g.forwardRef(({className:e,...r},t)=>y.jsxs(T,{component:"span",className:k(w.barsLoader,e),...r,ref:t,children:[y.jsx("span",{className:w.bar}),y.jsx("span",{className:w.bar}),y.jsx("span",{className:w.bar})]})),St=g.forwardRef(({className:e,...r},t)=>y.jsxs(T,{component:"span",className:k(w.dotsLoader,e),...r,ref:t,children:[y.jsx("span",{className:w.dot}),y.jsx("span",{className:w.dot}),y.jsx("span",{className:w.dot})]})),xt=g.forwardRef(({className:e,...r},t)=>y.jsx(T,{component:"span",className:k(w.ovalLoader,e),...r,ref:t})),Ne={bars:vt,oval:xt,dots:St},wt={loaders:Ne,type:"oval"},Ct=(e,{size:r,color:t})=>({root:{"--loader-size":_(r,"loader-size"),"--loader-color":t?F(t,e):void 0}}),se=oe((e,r)=>{const t=z("Loader",wt,e),{size:n,color:o,type:a,vars:i,className:c,style:f,classNames:l,styles:u,unstyled:d,loaders:p,variant:m,children:b,...v}=t,h=L({name:"Loader",props:t,classes:w,className:c,style:f,classNames:l,styles:u,unstyled:d,vars:i,varsResolver:Ct});return b?y.jsx(T,{...h("root"),ref:r,...v,children:b}):y.jsx(T,{...h("root"),ref:r,component:p[a],variant:m,size:n,...v})});se.defaultLoaders=Ne;se.classes=w;se.displayName="@mantine/core/Loader";function Nt(e){return g.Children.toArray(e).filter(Boolean)}var Re={root:"m_4081bf90"};const Rt={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},Tt=(e,{grow:r,preventGrowOverflow:t,gap:n,align:o,justify:a,wrap:i},{childWidth:c})=>({root:{"--group-child-width":r&&t?c:void 0,"--group-gap":ee(n),"--group-align":o,"--group-justify":a,"--group-wrap":i}}),Te=oe((e,r)=>{const t=z("Group",Rt,e),{classNames:n,className:o,style:a,styles:i,unstyled:c,children:f,gap:l,align:u,justify:d,wrap:p,grow:m,preventGrowOverflow:b,vars:v,variant:h,__size:N,mod:x,...S}=t,$=Nt(f),C=$.length,M=ee(l??"md"),B={childWidth:`calc(${100/C}% - (${M} - ${M} / ${C}))`},W=L({name:"Group",props:t,stylesCtx:B,className:o,style:a,classes:Re,classNames:n,styles:i,unstyled:c,vars:v,varsResolver:Tt});return y.jsx(T,{...W("root"),ref:r,variant:h,mod:[{grow:m},x],size:N,...S,children:$})});Te.classes=Re;Te.displayName="@mantine/core/Group";var Me={root:"m_b6d8b162"};function Mt(e){if(e==="start")return"start";if(e==="end"||e)return"end"}const kt={inherit:!1},jt=(e,{variant:r,lineClamp:t,gradient:n,size:o,color:a})=>({root:{"--text-fz":cr(o),"--text-lh":fr(o),"--text-gradient":r==="gradient"?X(n,e):void 0,"--text-line-clamp":typeof t=="number"?t.toString():void 0,"--text-color":a?F(a,e):void 0}}),ke=xe((e,r)=>{const t=z("Text",kt,e),{lineClamp:n,truncate:o,inline:a,inherit:i,gradient:c,span:f,__staticSelector:l,vars:u,className:d,style:p,classNames:m,styles:b,unstyled:v,variant:h,mod:N,size:x,...S}=t,$=L({name:["Text",l],props:t,classes:Me,className:d,style:p,classNames:m,styles:b,unstyled:v,vars:u,varsResolver:jt});return y.jsx(T,{...$("root",{focusable:!0}),ref:r,component:f?"span":"p",variant:h,mod:[{"data-truncate":Mt(o),"data-line-clamp":typeof n=="number","data-inline":a,"data-inherit":i},N],size:x,...S})});ke.classes=Me;ke.displayName="@mantine/core/Text";var je={root:"m_6d731127"};const _t={gap:"md",align:"stretch",justify:"flex-start"},At=(e,{gap:r,align:t,justify:n})=>({root:{"--stack-gap":ee(r),"--stack-align":t,"--stack-justify":n}}),_e=oe((e,r)=>{const t=z("Stack",_t,e),{classNames:n,className:o,style:a,styles:i,unstyled:c,vars:f,align:l,justify:u,gap:d,variant:p,...m}=t,b=L({name:"Stack",props:t,classes:je,className:o,style:a,classNames:n,styles:i,unstyled:c,vars:f,varsResolver:At});return y.jsx(T,{ref:r,...b("root"),variant:p,...m})});_e.classes=je;_e.displayName="@mantine/core/Stack";export{Q as A,T as B,Jr as C,be as D,P as E,cr as F,Te as G,fr as H,se as L,yr as M,_e as S,ke as T,Ce as U,br as a,Ot as b,Wt as c,pe as d,zt as e,Lr as f,Rr as g,oe as h,z as i,L as j,J as k,Bt as l,_ as m,It as n,F as o,X as p,Ht as q,s as r,Pt as s,xe as t,H as u,R as v,Ft as w,ee as x,k as y,re as z};
