import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,body,h1,h2,h3,h4,h5,h6,div,p,blockquote,pre,code,address,ul,ol,li,menu,nav,section,article,aside,dl,dt,dd,table,thead,tbody,tfoot,label,caption,th,td,form,fieldset,legend,hr,input,button,textarea,object,figure,figcaption {margin:0;padding:0;}
body{background:#fff;-webkit-text-size-adjust:none;word-wrap:break-word;word-break:break-all;}
body,input,select,textarea,button,pre {border:none; font-size:14px; font-family: 'Noto Sans KR', sans-serif; color:#242e47; font-weight: 400;}
body * { box-sizing: border-box; }
ul,ol,li{list-style:none;}
table{ border-spacing:0; }
img,fieldset{border:0;}
address,cite,code{font-style:normal;font-weight:normal;}
em { font-style:normal; }
label,img,input,select,textarea,button{vertical-align:middle;}
legend{overflow: hidden; display:block; position:absolute; border: 0; width: 1px; height: 1px; clip: rect(1px, 1px, 1px, 1px);}
hr{display:none;}
main,header,section,nav,footer,aside,article,figure{display:block;}
a{color:#242e47;text-decoration:none; outline: none;}
button { cursor: pointer; color: #242e47; background-color: transparent; outline: none;}
/* input */
textarea{resize:none; border:none;}
textarea::placeholder {color:#242e47;}
input,textarea{box-sizing:border-box; vertical-align:middle; outline:none;}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
transition: background-color 5000s ease-in-out 0s;
-webkit-transition: background-color 9999s ease-out;
-webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
-webkit-text-fill-color: #000 !important;
}


html {-ms-overflow-style: none; /* for Internet Explorer, Edge */scrollbar-width: none; /* for Firefox */overflow-y: scroll;}
html::-webkit-scrollbar, textarea::-webkit-scrollbar {display: none; /* for Chrome, Safari, and Opera */}
`;

export default GlobalStyle;
