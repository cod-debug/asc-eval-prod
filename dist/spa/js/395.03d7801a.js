(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[395],{5395:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>J});var l=a(9835);function o(e,t,a,o,s,i){const r=(0,l.up)("IndividualIndex");return(0,l.wg)(),(0,l.j4)(r)}var s=a(6970);const i={class:"q-pa-md q-mt-lg q-ml-lg"},r={class:"text-h6 page-title text-dark col-md-6"},n=(0,l.Uk)(" S1 APPLICATION - INDIVIDUAL"),c={class:"text-right col-md-6"},d={class:"row q-my-lg"},p={class:"col-md-9 col-sm-12"},m={class:"col-md-3 q-px-md col-sm-12"},u={class:"shadow-2 q-pa-sm"},_=(0,l._)("b",null,"Legend: ",-1),g={width:"100%"},w={width:"5%"},h={class:"q-pt-xs"},b={class:"q-pr-md"},f=(0,l._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1),k={key:0,class:"table_container"},y={class:"text-right q-mt-md"},I={key:1,class:"text-center q-pa-lg"},C={class:"loading-page"},v={class:"q-pa-md q-gutter-sm"},A=(0,l._)("div",{class:"text-h6 text-center"},"LOCK APPLICATION?",-1);function q(e,t,a,o,q,L){const T=(0,l.up)("q-icon"),W=(0,l.up)("q-btn"),N=(0,l.up)("q-card-section"),O=(0,l.up)("q-separator"),S=(0,l.up)("q-input"),Z=(0,l.up)("q-badge"),x=(0,l.up)("q-tab"),U=(0,l.up)("q-tabs"),D=(0,l.up)("q-td"),E=(0,l.up)("q-tr"),V=(0,l.up)("q-table"),Q=(0,l.up)("q-pagination"),P=(0,l.up)("q-spinner-ios"),M=(0,l.up)("q-card-actions"),R=(0,l.up)("q-card"),z=(0,l.up)("q-dialog"),B=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)(R,{bordered:"",class:"my-card",elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(N,{class:"row"},{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l.Wm)(T,{name:"list"}),n]),(0,l._)("div",c,[(0,l.Wm)(W,{label:0==e.localTimer?"":e.localTimer+" sec",elevated:"",size:"md",icon:"sync",onClick:L.refresh,disabled:e.localTimer>0,color:"primary"},null,8,["label","onClick","disabled"])])])),_:1}),(0,l.Wm)(O,{inset:""}),(0,l.Wm)(N,null,{default:(0,l.w5)((()=>[(0,l._)("div",d,[(0,l._)("div",p,[(0,l.Wm)(S,{outlined:"",label:"Search Applications",class:"q-mt-md",modelValue:e.search,"onUpdate:modelValue":t[0]||(t[0]=t=>e.search=t),onBlur:t[1]||(t[1]=e=>L.getList())},null,8,["modelValue"])]),(0,l._)("div",m,[(0,l._)("div",u,[_,(0,l._)("table",g,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.legends,((e,t)=>((0,l.wg)(),(0,l.iD)("tr",{key:t},[(0,l._)("td",w,[(0,l._)("div",{class:(0,s.C_)(`legend ${e.color}`)},null,2)]),(0,l._)("td",h,[(0,l._)("small",null,[(0,l._)("strong",null,(0,s.zw)(e.title),1)])])])))),128))])])])]),(0,l.Wm)(U,{modelValue:e.active_tab,"onUpdate:modelValue":[t[2]||(t[2]=t=>e.active_tab=t),t[3]||(t[3]=e=>L.getList())],align:"left",class:"text-dark","indicator-color":"primary"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.tabs,((e,t)=>((0,l.wg)(),(0,l.j4)(x,{name:e.code,onClick:t=>L.setActiveTab(e.code),key:t,color:"primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{label:e.count,color:"red-14",rounded:"",floating:""},null,8,["label"]),(0,l._)("strong",b,(0,s.zw)(e.name),1)])),_:2},1032,["name","onClick"])))),128))])),_:1},8,["modelValue"]),f,e.is_loading?((0,l.wg)(),(0,l.iD)("div",I,[(0,l._)("div",C,[(0,l.Wm)(P,{color:"white",size:"3rem"})])])):((0,l.wg)(),(0,l.iD)("div",k,[(0,l.Wm)(V,{columns:e.columns,flat:"",bordered:"",rows:e.table_data,"row-key":"id","hide-bottom":"","rows-per-page-options":[e.take],onRowClick:L.update},{body:(0,l.w5)((e=>[(0,l.Wm)(E,{props:e,class:(0,s.C_)(L.hasOwner(e.row)?L.isOwned(e.row)?"bg-yellow":"bg-hrey-4":"bg-white"),hover:"",style:{cursor:"pointer"},onClick:t=>L.update(e.row)},{default:(0,l.w5)((()=>[(0,l.Wm)(D,{key:"referrence_code",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.referrence_code||"--"),1)])),_:2},1032,["props"]),(0,l.Wm)(D,{key:"application_type",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.application_type),1)])),_:2},1032,["props"]),(0,l.Wm)(D,{key:"company_name",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.company_name),1)])),_:2},1032,["props"]),(0,l.Wm)(D,{key:"brand",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.brand),1)])),_:2},1032,["props"]),(0,l.Wm)(D,{key:"type_medium_name",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.type_medium_name.join(", ")),1)])),_:2},1032,["props"]),(0,l.Wm)(D,{key:"status",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.status),1)])),_:2},1032,["props"]),(0,l.Wm)(D,{key:"internal_status",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.internal_status),1)])),_:2},1032,["props"]),(0,l.Wm)(D,{key:"payment_status",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.row.payment_status),1)])),_:2},1032,["props"])])),_:2},1032,["props","class","onClick"])])),_:1},8,["columns","rows","rows-per-page-options","onRowClick"]),(0,l._)("div",y,[(0,l.Wm)(Q,{modelValue:e.current,"onUpdate:modelValue":[t[4]||(t[4]=t=>e.current=t),t[5]||(t[5]=e=>L.getList())],max:e.max_page,"direction-links":"",flat:"",color:"grey","active-color":"primary"},null,8,["modelValue","max"])])])),(0,l._)("template",null,[(0,l._)("div",v,[(0,l.Wm)(z,{modelValue:e.lockModal,"onUpdate:modelValue":t[6]||(t[6]=t=>e.lockModal=t),persistent:"","transition-show":"scale",modern:"","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(R,{class:"bg-red-14 text-white",style:{width:"300px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(N,null,{default:(0,l.w5)((()=>[A])),_:1}),(0,l.Wm)(M,{align:"center",class:"bg-white text-red q-py-lg"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{flat:"",label:"CONFIRM",onClick:L.confirmLock},null,8,["onClick"]),(0,l.wy)((0,l.Wm)(W,{flat:"",label:"CANCEL"},null,512),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])])),_:1})])),_:1})])}a(8466);var L=a(6827);const T={data:()=>({pinkModel:!1,search:"",is_loading:!0,lockModal:!1,tabs:[{name:"ORIGINAL",code:"ORIGINAL",count:0},{name:"REVISION",code:"REVISION",count:0},{name:"COMPLIANCE",code:"COMPLIANCE",count:0}],legends:[{color:"blue",title:"ORIGINAL"},{color:"gold",title:"FOR COMPLIANCE"},{color:"green",title:"REVISION"}],localTimer:null,refresh_sec:0,active_tab:"ORIGINAL",columns:[{name:"referrence_code",align:"left",label:"REFERENCE CODE",field:"referrence_code",sortable:!0},{name:"application_type",align:"left",label:"TYPE OF APPLICATION",field:"application_type",sortable:!0},{name:"company_name",align:"left",label:"COMPANY NAME",field:"company_name",sortable:!0},{name:"brand",align:"left",label:"BRAND",field:"brand",sortable:!0},{name:"type_medium_name",align:"left",label:"TYPE OF MEDIUM",field:"type_medium_name",sortable:!0},{name:"internal_status",align:"left",label:"INTERNAL STATUS",field:"internal_status",sortable:!0},{name:"payment_status",align:"left",label:"PAYMENT STATUS",field:"payment_status",sortable:!0}],table_data:[],take:10,max_page:0,current:1}),computed:{userID(){return localStorage.getItem("ui")}},mounted(){this.initApp()},watch:{},methods:{initApp(){this.refresh(),this.localTimer=localStorage.getItem("timer"),this.getList(),this.tabs.map((async e=>{e.count=await this.getCount(e.code)}))},isOwned(e){return!!e.isLocked&&(console.log(e.assigned_user.id,localStorage.getItem("ui")),e.assigned_user.id==localStorage.getItem("ui"))},hasOwner(e){return e.isLocked},setActiveTab(e){this.active_tab=e},refresh(){let e=this,t=e.localTimer<=0?60:e.localTimer;e.refresh_sec=60,localStorage.setItem("timer",t),setInterval((()=>{t>0&&(t--,localStorage.setItem("timer",t),this.localTimer=localStorage.getItem("timer"))}),1e3)},redirect(){window.location.href="https://www.facebook.com/"},update(e){this.selected_item=e,e.isLocked?this.isOwned(e)?this.$router.push({name:"individual-application-update",params:{id:e.id}}):L.Z.create({message:"This application does not belong to you.",position:"top-right",closeBtn:"X",timeout:2e3,color:"red"}):this.lockModal=!0},async getList(){let e=this;e.is_loading=!0;let t={data:{form_group:"INDIVIDUAL",search:e.search,process_type:e.active_tab},params:{take:e.take,page:e.current}},{data:a,status:l}=await e.$store.dispatch("s1/getS1Applications",t);[200,201].includes(l)?(e.table_data=a.data.map((e=>({...e,company_name:e.company.name,type_medium_name:e.type_of_medium.length>0?e.type_of_medium.map((e=>e.type_of_medium)):"--",is_self_assigned:!0})))||[],e.max_page=a.lastPage||0,e.is_loading=!1):e.is_loading=!1},async getCount(e){let t=this,a={data:{form_group:"INDIVIDUAL",search:t.search,process_type:e},params:{take:t.take,page:t.current}},{data:l,status:o}=await t.$store.dispatch("s1/getS1Applications",a);return l.count},async confirmLock(){let e=this,t={assigned_user_id:this.userID,id:e.selected_item.id},{data:a,status:l}=await this.$store.dispatch("ascUser/lockApp",t);[200,201].includes(l)&&(L.Z.create({message:a.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),e.lockModal=!1,this.getList())}}};var W=a(1639),N=a(4458),O=a(3190),S=a(2857),Z=a(8879),x=a(926),U=a(6611),D=a(7817),E=a(900),V=a(990),Q=a(1463),P=a(9546),M=a(7220),R=a(996),z=a(8359),B=a(2074),Y=a(1821),F=a(2146),$=a(9984),G=a.n($);const j=(0,W.Z)(T,[["render",q]]),K=j;G()(T,"components",{QCard:N.Z,QCardSection:O.Z,QIcon:S.Z,QBtn:Z.Z,QSeparator:x.Z,QInput:U.Z,QTabs:D.Z,QTab:E.Z,QBadge:V.Z,QTable:Q.Z,QTr:P.Z,QTd:M.Z,QPagination:R.Z,QSpinnerIos:z.Z,QDialog:B.Z,QCardActions:Y.Z}),G()(T,"directives",{ClosePopup:F.Z});const H={data:()=>({}),components:{IndividualIndex:K}},X=(0,W.Z)(H,[["render",o]]),J=X},8466:()=>{}}]);