(()=>{var t={4647:(t,e,a)=>{"use strict";a(8964),a(702);var o=a(799),n=a(1947),r=a(499),s=a(9835);function i(t,e,a,o,n,r){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(i)}const l=(0,s.aZ)({name:"App"});var c=a(1639);const u=(0,c.Z)(l,[["render",i]]),d=u;var p=a(3445),m=a(3340),h=a(8910);const g=[{name:"home",path:"/",requiresAuth:!1,component:()=>Promise.all([a.e(736),a.e(268)]).then(a.bind(a,4268)),children:[{name:"home-page",path:"",component:()=>Promise.all([a.e(736),a.e(71)]).then(a.bind(a,71))},{name:"redirect-page",path:"/redirect",component:()=>a.e(797).then(a.bind(a,5797))}]},{name:"dashboard",path:"/asc/page/",component:()=>Promise.all([a.e(736),a.e(251)]).then(a.bind(a,1251)),children:[{name:"dashboard",path:"",component:()=>a.e(160).then(a.bind(a,8160))},{name:"individual-application-list",path:"application/s1/lists",component:()=>Promise.all([a.e(736),a.e(513)]).then(a.bind(a,513))},{name:"individual-application-update",path:"application/s1/update/:id",component:()=>Promise.all([a.e(736),a.e(195)]).then(a.bind(a,6195))},{name:"multiple-application-list",path:"application/s1/multiple",component:()=>Promise.all([a.e(736),a.e(130)]).then(a.bind(a,9130))},{name:"special-application-list",path:"application/s1/special",component:()=>Promise.all([a.e(736),a.e(633)]).then(a.bind(a,6633))},{name:"dashboard",path:"",component:()=>a.e(160).then(a.bind(a,8160))},{name:"individual-application-list-s2",path:"application/s2/lists",component:()=>a.e(359).then(a.bind(a,6987))},{name:"announcement-view",path:"announcement",component:()=>Promise.all([a.e(736),a.e(424)]).then(a.bind(a,7424))}]}],v=g;var f=a(3703);const A=(0,m.BC)((function({store:t,ssrContext:e}){const a=h.PO,o=localStorage.getItem("token"),n=localStorage.getItem("user_email");t.commit("auth/setToken",o),t.commit("auth/setUserDetails",n);const r=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:a("/")});return r.beforeEach(((t,e,a)=>{t.requiresAuth&&!o?a({name:"home"}):a()})),r}));async function y(t,e){const o=t(d);o.use(n.Z,e);const s="function"===typeof p["default"]?await(0,p["default"])({}):p["default"],{storeKey:i}=await Promise.resolve().then(a.bind(a,3445)),l=(0,r.Xl)("function"===typeof A?await A({store:s}):A);return s.$router=l,{app:o,store:s,storeKey:i,router:l}}var _=a(6827),w=a(3527);const b={config:{},plugins:{LocalStorage:f.Z,Notify:_.Z,Dialog:w.Z}},P="/";async function S({app:t,router:e,store:a,storeKey:o},n){let r=!1;const s=t=>{try{return e.resolve(t).href}catch(a){}return Object(t)===t?null:t},i=t=>{if(r=!0,"string"===typeof t&&/^https?:\/\//.test(t))return void(window.location.href=t);const e=s(t);null!==e&&(window.location.href=e)},l=window.location.href.replace(window.location.origin,"");for(let u=0;!1===r&&u<n.length;u++)try{await n[u]({app:t,router:e,store:a,ssrContext:null,redirect:i,urlPath:l,publicPath:P})}catch(c){return c&&c.url?void i(c.url):void console.error("[Quasar] boot error:",c)}!0!==r&&(t.use(e),t.use(a,o),t.mount("#q-app"))}y(o.ri,b).then((t=>Promise.all([Promise.resolve().then(a.bind(a,6288)),Promise.resolve().then(a.bind(a,1569)),Promise.resolve().then(a.bind(a,958))]).then((e=>{const a=e.map((t=>t.default)).filter((t=>"function"===typeof t));S(t,a)}))))},1569:(t,e,a)=>{"use strict";a.r(e),a.d(e,{api:()=>s,default:()=>i});var o=a(3340),n=a(9981),r=a.n(n);const s=r().create({baseURL:"http://localhost:3006"}),i=(0,o.xr)((({app:t})=>{t.config.globalProperties.$axios=r(),t.config.globalProperties.$api=s}))},6288:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var o=a(3340),n=a(9991);const r={failed:"Action failed",success:"Action was successful"},s={"en-US":r},i=(0,o.xr)((({app:t})=>{const e=(0,n.o)({locale:"en-US",messages:s});t.use(e)}))},958:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s,rules:()=>r});var o=a(6827),n=a(3340);const r={required(t){return console.log(t,"value"),[t=>t&&t.length>0||"This field is required!"]},requiredSelect(t){return[t=>t||"This field is required!"]},validateEmail(t){const e=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return e.test(t)||"Invalid email format"},confirmPassword(t,e){return t===e||"Confirm password does not  match!"},validateContact(t){var e=/^\(?([0-9]{11})\)?$/;return e.test(t)||"Invalid contact number format"},fileSizeRestrict(t){console.log(t.size);const e=3145728;return t.size<e||"Maximum of 3mb only"},fileTypeRestrict(t){return console.log(t),"application/pdf"==t.type||"Accepts PDF file only"},imageRestriction(t){o.Z.create({type:"negative",message:`${t.length} Images does not pass on validation`})},filterSelect(t,e,a){""!==t||e((()=>{a.value=stringOptions}))},update(){const t=val.toLowerCase();options.value=stringOptions.filter((e=>e.toLowerCase().indexOf(t)>-1))}},s=(0,n.xr)((({app:t})=>{t.config.globalProperties.$rules=r}))},6011:()=>{},2400:()=>{},343:()=>{},3315:()=>{},9471:()=>{},7206:()=>{},4200:()=>{},7221:()=>{},3445:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>pe});var o={};a.r(o),a.d(o,{getToken:()=>f,getUserDetails:()=>v,isAuthenticated:()=>g});var n={};a.r(n),a.d(n,{removeToken:()=>y,setToken:()=>A,setUserDetails:()=>_});var r={};a.r(r),a.d(r,{getAllEmployees:()=>U,getEnv:()=>L,login:()=>R,registerApplicant:()=>B});var s={};a.r(s),a.d(s,{approveUser:()=>M});var i={};a.r(i),a.d(i,{getAllUsers:()=>J,getEnv:()=>H});var l={};a.r(l),a.d(l,{addCompany:()=>ct,getAllAffiliation:()=>ut,getAllCompanies:()=>lt,getEnv:()=>it});var c={};a.r(c),a.d(c,{getEnv:()=>Pt,getS1Applications:()=>St,updateApp:()=>$t,verifyApp:()=>It});var u={};a.r(u),a.d(u,{comment:()=>qt,getCountByRole:()=>Kt,getCountByUser:()=>Ft,getEnv:()=>Mt,getSpecific:()=>Zt,lockApp:()=>zt,reassign:()=>xt});var d={};a.r(d),a.d(d,{getAllAnnouncements:()=>ue,getAllDialects:()=>ie,getAllExecutionTypes:()=>re,getAllMediums:()=>se,getAllReasons:()=>ce,getAllUsers:()=>ne,getEnv:()=>oe,getSpecificAffiliation:()=>le});var p=a(3340),m=a(3100);function h(){return{isAuthenticated:!1,token:"",userDetails:{}}}const g=(t,e)=>t.isAuthenticated,v=(t,e)=>t.userDetails,f=(t,e)=>t.token,A=(t,e)=>{t.token=e,t.isAuthenticated=!0},y=(t,e)=>{t.token="",t.isAuthenticated=!1,t.userDetails={}},_=(t,e)=>{t.userDetails=e};var w,b,P=a(9981),S=a.n(P);const{LocalStorage:I,Notify:$}=a(9066),E={API_BASE_URL:(null===(w=window)||void 0===w||null===(b=w.appConfig)||void 0===b?void 0:b.API_BASE_URL)||"http://18.140.158.179:4545"};function L(t){return E[t]}const U=async({commit:t},e)=>{let a=await S()({url:"http://127.0.0.1:8000/all-employees/",method:"get"});return a},B=async({commit:t},e)=>{let a=await S()({url:`${L("API_BASE_URL")}/users/register/applicant`,data:e,method:"post"});return a},R=async({commit:t},e)=>{let a=null;try{a=await S()({url:`${L("API_BASE_URL")}/users/login`,data:e,method:"post"})}catch(o){a.data=o,a.status=400}return a},k={namespaced:!0,state:h,getters:o,mutations:n,actions:r};var C=a(4182),N=a.n(C),T=a(3376),D=a(5407);const{LocalStorage:O,Notify:j}=a(9066),M=async({commit:t},e)=>{let a=await S()({url:process.env.API_URL+`/apprv/${e.id}`,method:"post",headers:{authorization:`Bearer ${O.get("token")}`}});return a},x={namespaced:!0,state:N(),getters:T,mutations:D,actions:s};function z(){return{}}var q,Z,F=a(6011),K=a(2400);const{LocalStorage:Q,Notify:X}=a(9066),G={API_BASE_URL:(null===(q=window)||void 0===q||null===(Z=q.appConfig)||void 0===Z?void 0:Z.API_BASE_URL)||"http://18.140.158.179:4545"};function H(t){return G[t]}const J=async({commit:t},e)=>{let a=await S()({url:`${H("API_BASE_URL")}/users/all/`,data:e,method:"get"});return a},V={namespaced:!0,state:z,getters:F,mutations:K,actions:i};function W(){return{}}var Y,tt,et=a(4200),at=a(7221);const{LocalStorage:ot,Notify:nt}=a(9066),rt={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${localStorage.getItem("token")}`},st={API_BASE_URL:(null===(Y=window)||void 0===Y||null===(tt=Y.appConfig)||void 0===tt?void 0:tt.API_BASE_URL)||"http://18.140.158.179:4545"};function it(t){return st[t]}const lt=async({commit:t},e)=>{let a=await S()({method:"get",url:`${it("API_BASE_URL")}/company/getall/`,params:e,headers:rt});return a},ct=async({commit:t},e)=>{let a=await S()({method:"post",url:`${it("API_BASE_URL")}/company/create/`,data:e,headers:rt});return a},ut=async({commit:t},e)=>{let a=null;try{a=await S()({url:`${it("API_BASE_URL")}/affiliate/getall/`,params:e,method:"get",headers:rt})}catch(o){a.data=o,a.status=400}return a},dt={namespaced:!0,state:W,getters:et,mutations:at,actions:l};function pt(){return{}}var mt,ht,gt=a(2796),vt=a(6764);a(8964);const{LocalStorage:ft,Notify:At}=a(9066);let yt="/api/v1",_t=localStorage.getItem("token")||"";const wt={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${_t.replace("__q_strn|","")}`},bt={API_BASE_URL:(null===(mt=window)||void 0===mt||null===(ht=mt.appConfig)||void 0===ht?void 0:ht.API_BASE_URL)||"http://18.140.158.179:4545"};function Pt(t){return bt[t]}const St=async({commit:t},e)=>{let a={};try{a=await S()({method:"post",url:`${Pt("API_BASE_URL")}${yt}/evaluator/get-applications/`,data:e.data,params:e.params,headers:wt})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},It=async({commit:t},e)=>{let a={};try{a=await S()({method:"put",url:`${Pt("API_BASE_URL")}${yt}/evaluator/verify-applications/${e.id}`,data:e.data,headers:wt})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},$t=async({commit:t},e)=>{let a={};try{a=await S()({method:"put",url:`${Pt("API_BASE_URL")}${yt}/evaluator/update-applications/${e.id}`,data:e.data,headers:wt})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},Et={namespaced:!0,state:pt,getters:gt,mutations:vt,actions:c};function Lt(){return{}}var Ut,Bt,Rt=a(9471),kt=a(7206);const{LocalStorage:Ct,Notify:Nt}=a(9066);let Tt="/api/v1",Dt=localStorage.getItem("token")||"";const Ot={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${Dt.replace("__q_strn|","")}`},jt={API_BASE_URL:(null===(Ut=window)||void 0===Ut||null===(Bt=Ut.appConfig)||void 0===Bt?void 0:Bt.API_BASE_URL)||"http://18.140.158.179:4545"};function Mt(t){return jt[t]}const xt=async({commit:t},e)=>{let a={};try{a=await S()({method:"put",url:`${Mt("API_BASE_URL")}${Tt}/asc-user/reassign-application/${e.id}`,data:e.data,params:e.params,headers:Ot})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},zt=async({commit:t},e)=>{let a={};try{a=await S()({method:"put",url:`${Mt("API_BASE_URL")}${Tt}/asc-user/lock-application/${e.id}`,data:e,headers:Ot})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},qt=async({commit:t},e)=>{let a={};try{a=await S()({method:"put",url:`${Mt("API_BASE_URL")}${Tt}/asc-user/make-comment/${e.id}`,data:e.data,headers:Ot})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},Zt=async({commit:t},e)=>{let a={};try{a=await S()({method:"get",url:`${Mt("API_BASE_URL")}${Tt}/asc-user/view-application/${e.id}`,headers:Ot})}catch(r){var o,n;a.data=(null===r||void 0===r||null===(o=r.response)||void 0===o?void 0:o.data)||null,a.status=(null===r||void 0===r||null===(n=r.response)||void 0===n?void 0:n.status)||null}return a},Ft=async({commit:t},e)=>{let a={};try{a=await S()({method:"get",url:`${Mt("API_BASE_URL")}${Tt}/asc-user/view-counts/per-user/`,headers:Ot})}catch(r){var o,n;a.data=(null===r||void 0===r||null===(o=r.response)||void 0===o?void 0:o.data)||null,a.status=(null===r||void 0===r||null===(n=r.response)||void 0===n?void 0:n.status)||null}return a},Kt=async({commit:t},e)=>{let a={};try{a=await S()({method:"get",url:`${Mt("API_BASE_URL")}${Tt}/asc-user/view-counts/per-role/`,headers:Ot})}catch(r){var o,n;a.data=(null===r||void 0===r||null===(o=r.response)||void 0===o?void 0:o.data)||null,a.status=(null===r||void 0===r||null===(n=r.response)||void 0===n?void 0:n.status)||null}return a},Qt={namespaced:!0,state:Lt,getters:Rt,mutations:kt,actions:u};function Xt(){return{}}var Gt,Ht,Jt=a(343),Vt=a(3315);const{LocalStorage:Wt,Notify:Yt}=a(9066);let te=localStorage.getItem("token")||"";const ee={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${te.replace("__q_strn|","")}`},ae={ADMIN_API_BASE_URL:(null===(Gt=window)||void 0===Gt||null===(Ht=Gt.appConfig)||void 0===Ht?void 0:Ht.ADMIN_API_BASE_URL)||"http://18.140.158.179:4300"};function oe(t){return ae[t]}const ne=async({commit:t},e)=>{let a={};try{a=await S()({method:"get",url:`${oe("ADMIN_API_BASE_URL")}/users/getall/`,params:e,headers:ee})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},re=async({commit:t},e)=>{let a={};try{a=await S()({method:"get",url:`${oe("ADMIN_API_BASE_URL")}/execution-type/getall/`,params:e,headers:ee})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},se=async({commit:t},e)=>{let a={};try{a=await S()({method:"get",url:`${oe("ADMIN_API_BASE_URL")}/medium-type/getall/`,params:e,headers:ee})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},ie=async({commit:t},e)=>{let a={};try{a=await S()({method:"get",url:`${oe("ADMIN_API_BASE_URL")}/dialect/getall/`,params:e,headers:ee})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},le=async({commit:t},e)=>{let a={};try{a=await S()({method:"get",url:`${oe("ADMIN_API_BASE_URL")}/affiliate/getone/`,params:e,headers:ee})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},ce=async({commit:t},e)=>{let a={};try{a=await S()({method:"get",url:`${oe("ADMIN_API_BASE_URL")}/reason-type/getall/`,params:e,headers:ee})}catch(o){a.data=o.response.data,a.status=o.response.status}return a},ue=async({commit:t},e)=>{let a=await S()({url:`${oe("ADMIN_API_BASE_URL")}/announce/getall`,params:e,method:"get",headers:ee});return a},de={namespaced:!0,state:Xt,getters:Jt,mutations:Vt,actions:d},pe=(0,p.h)((function(){const t=(0,m.MT)({modules:{auth:k,users:x,account:V,company:dt,s1:Et,ascUser:Qt,admin_api:de},strict:!1});return t}))},2796:()=>{},6764:()=>{},3376:()=>{},5407:()=>{},4182:()=>{}},e={};function a(o){var n=e[o];if(void 0!==n)return n.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,a),r.exports}a.m=t,(()=>{var t=[];a.O=(e,o,n,r)=>{if(!o){var s=1/0;for(u=0;u<t.length;u++){for(var[o,n,r]=t[u],i=!0,l=0;l<o.length;l++)(!1&r||s>=r)&&Object.keys(a.O).every((t=>a.O[t](o[l])))?o.splice(l--,1):(i=!1,r<s&&(s=r));if(i){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[o,n,r]}})(),(()=>{a.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return a.d(e,{a:e}),e}})(),(()=>{a.d=(t,e)=>{for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}})(),(()=>{a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce(((e,o)=>(a.f[o](t,e),e)),[]))})(),(()=>{a.u=t=>"js/"+t+"."+{71:"78a5fcdc",130:"479dad01",160:"c0b0c704",195:"5a289402",251:"cb3a89be",268:"7f6faa0a",359:"e4419025",424:"5c453cfa",513:"f52c50b5",633:"3aa9cda3",797:"58504a89"}[t]+".js"})(),(()=>{a.miniCssF=t=>"css/"+{143:"app",736:"vendor"}[t]+"."+{143:"f81a1590",736:"d1e7d5b3"}[t]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={},e="borough-fe:";a.l=(o,n,r,s)=>{if(t[o])t[o].push(n);else{var i,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+r){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",e+r),i.src=o),t[o]=[n];var p=(e,a)=>{i.onerror=i.onload=null,clearTimeout(m);var n=t[o];if(delete t[o],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((t=>t(a))),e)return e(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{a.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{var t={143:0};a.f.j=(e,o)=>{var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)o.push(n[2]);else{var r=new Promise(((a,o)=>n=t[e]=[a,o]));o.push(n[2]=r);var s=a.p+a.u(e),i=new Error,l=o=>{if(a.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,n[1](i)}};a.l(s,l,"chunk-"+e,e)}},a.O.j=e=>0===t[e];var e=(e,o)=>{var n,r,[s,i,l]=o,c=0;if(s.some((e=>0!==t[e]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var u=l(a)}for(e&&e(o);c<s.length;c++)r=s[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},o=self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var o=a.O(void 0,[736],(()=>a(4647)));o=a.O(o)})();