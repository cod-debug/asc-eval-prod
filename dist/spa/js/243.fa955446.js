(self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[]).push([[243],{2243:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ae});var l=a(9835);function o(e,t,a,o,s,i){const r=(0,l.up)("IndividualIndex");return(0,l.wg)(),(0,l.j4)(r)}var s=a(799),i=a(6970);const r={class:"q-pa-md q-mt-lg q-ml-lg"},n={class:"text-h6 page-title text-dark col-md-6"},c=(0,l.Uk)(" S2 APPLICATION - INDIVIDUAL"),d={class:"text-right col-md-6"},m={class:"row q-my-lg"},p={class:"col-md-9 col-sm-12"},u={class:"col-md-3 q-px-md col-sm-12"},_={class:"shadow-2 q-pa-sm"},g=(0,l._)("b",null,"Legend: ",-1),w={width:"100%"},h={width:"5%"},b={class:"q-pt-xs"},f={class:"q-pr-md"},y=(0,l._)("hr",{class:"q-tabs-gutter",color:"lightgray"},null,-1),k={key:0,class:"table_container q-mt-md"},I={key:0,class:"no-data-found"},A=(0,l.Uk)(" NO DATA FOUND... "),C={key:2,class:"text-right q-mt-md"},v={key:1,class:"text-center q-pa-lg"},T={class:"loading-page"},q={class:"q-pa-md q-gutter-sm"},L=(0,l._)("div",{class:"text-h6 text-center"},"LOCK APPLICATION?",-1);function O(e,t,a,o,O,W){const U=(0,l.up)("q-icon"),N=(0,l.up)("q-btn"),D=(0,l.up)("q-card-section"),x=(0,l.up)("q-separator"),Z=(0,l.up)("q-input"),S=(0,l.up)("q-badge"),E=(0,l.up)("q-tab"),P=(0,l.up)("q-tabs"),M=(0,l.up)("q-td"),Q=(0,l.up)("q-tr"),R=(0,l.up)("q-table"),V=(0,l.up)("q-pagination"),z=(0,l.up)("q-spinner-ios"),B=(0,l.up)("q-card-actions"),F=(0,l.up)("q-card"),G=(0,l.up)("q-dialog"),Y=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(F,{bordered:"",class:"my-card",elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(D,{class:"row"},{default:(0,l.w5)((()=>[(0,l._)("div",n,[(0,l.Wm)(U,{name:"list"}),c]),(0,l._)("div",d,[(0,l.Wm)(N,{label:0==e.localTimer?"":e.localTimer+" sec",elevated:"",size:"md",icon:"sync",onClick:W.refresh,disabled:e.localTimer>0,color:"primary"},null,8,["label","onClick","disabled"])])])),_:1}),(0,l.Wm)(x,{inset:""}),(0,l.Wm)(D,null,{default:(0,l.w5)((()=>[(0,l._)("div",m,[(0,l._)("div",p,[(0,l._)("form",{onSubmit:t[2]||(t[2]=(0,s.iM)((e=>W.getList(!0)),["prevent"])),method:"POST"},[(0,l.Wm)(Z,{"bottom-slots":"",modelValue:e.search,"onUpdate:modelValue":t[1]||(t[1]=t=>e.search=t),outlined:"",label:"Search Applications",hint:"Hit ''Enter'' key or click search icon to search application."},{append:(0,l.w5)((()=>[(0,l.Wm)(U,{name:"search",onClick:t[0]||(t[0]=e=>W.getList(!0))})])),_:1},8,["modelValue"])],32)]),(0,l._)("div",u,[(0,l._)("div",_,[g,(0,l._)("table",w,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.legends,((e,t)=>((0,l.wg)(),(0,l.iD)("tr",{key:t},[(0,l._)("td",h,[(0,l._)("div",{class:(0,i.C_)(`legend ${e.color}`)},null,2)]),(0,l._)("td",b,[(0,l._)("small",null,[(0,l._)("strong",null,(0,i.zw)(e.title),1)])])])))),128))])])])]),(0,l.Wm)(P,{modelValue:e.active_tab,"onUpdate:modelValue":[t[3]||(t[3]=t=>e.active_tab=t),t[4]||(t[4]=e=>W.getList())],align:"left",class:"text-dark","indicator-color":"primary"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.tabs,((e,t)=>((0,l.wg)(),(0,l.j4)(E,{name:e.code,onClick:t=>W.setActiveTab(e.code),key:t,color:"primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{label:e.count,color:"red-14",rounded:"",floating:""},null,8,["label"]),(0,l._)("strong",f,(0,i.zw)(e.name),1)])),_:2},1032,["name","onClick"])))),128))])),_:1},8,["modelValue"]),y,e.is_loading?((0,l.wg)(),(0,l.iD)("div",v,[(0,l._)("div",T,[(0,l.Wm)(z,{color:"white",size:"3rem"})])])):((0,l.wg)(),(0,l.iD)("div",k,[e.table_data.length<=0?((0,l.wg)(),(0,l.iD)("div",I,[(0,l.Wm)(U,{name:"warning"}),A])):((0,l.wg)(),(0,l.j4)(R,{key:1,columns:e.columns,flat:"",bordered:"",rows:e.table_data,"row-key":"id","hide-bottom":"","rows-per-page-options":[e.take],onRowClick:W.update},{body:(0,l.w5)((e=>[(0,l.Wm)(Q,{props:e,class:(0,i.C_)(W.hasOwner(e.row)?W.isOwned(e.row)?"bg-yellow":"bg-grey-4":"bg-white"),hover:"",style:{cursor:"pointer"},onClick:t=>W.update(e.row)},{default:(0,l.w5)((()=>[(0,l.Wm)(M,{key:"referrence_code",props:e,class:(0,i.C_)(`bg-${W.current_id_bg}`)},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.referrence_code||"--"),1)])),_:2},1032,["props","class"]),(0,l.Wm)(M,{key:"application_type",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.application_type),1)])),_:2},1032,["props"]),(0,l.Wm)(M,{key:"company_name",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.company_name),1)])),_:2},1032,["props"]),(0,l.Wm)(M,{key:"brand",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.brand),1)])),_:2},1032,["props"]),(0,l.Wm)(M,{key:"type_medium_name",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(Array.isArray(e.row.type_medium_name)?e.row.type_medium_name.join(", "):e.row.type_medium_name),1)])),_:2},1032,["props"]),(0,l.Wm)(M,{key:"status",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.status),1)])),_:2},1032,["props"]),(0,l.Wm)(M,{key:"internal_status",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.internal_status),1)])),_:2},1032,["props"]),(0,l.Wm)(M,{key:"payment_status",props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.row.payment_status),1)])),_:2},1032,["props"])])),_:2},1032,["props","class","onClick"])])),_:1},8,["columns","rows","rows-per-page-options","onRowClick"])),e.max_page>0?((0,l.wg)(),(0,l.iD)("div",C,[(0,l.Wm)(V,{modelValue:e.current,"onUpdate:modelValue":[t[5]||(t[5]=t=>e.current=t),t[6]||(t[6]=e=>W.getList())],max:e.max_page,"direction-links":"",flat:"",color:"grey","active-color":"primary"},null,8,["modelValue","max"])])):(0,l.kq)("",!0)])),(0,l._)("template",null,[(0,l._)("div",q,[(0,l.Wm)(G,{modelValue:e.lockModal,"onUpdate:modelValue":t[7]||(t[7]=t=>e.lockModal=t),persistent:"","transition-show":"scale",modern:"","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{class:"bg-red-14 text-white",style:{width:"300px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(D,null,{default:(0,l.w5)((()=>[L])),_:1}),(0,l.Wm)(B,{align:"center",class:"bg-white text-red q-py-lg"},{default:(0,l.w5)((()=>[(0,l.Wm)(N,{flat:"",label:"CONFIRM",onClick:W.confirmLock},null,8,["onClick"]),(0,l.wy)((0,l.Wm)(N,{flat:"",label:"CANCEL"},null,512),[[Y]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])])),_:1})])),_:1})])}a(2753);var W=a(6827);const U={data:()=>({pinkModel:!1,search:"",is_loading:!0,lockModal:!1,tabs:[{name:"ORIGINAL",code:"ORIGINAL",count:0},{name:"COMPLIANCE",code:"COMPLIANCE",count:0},{name:"TOA",code:"TOA",count:0}],legends:[{color:"blue",theme_color:"blue-2",title:"ORIGINAL"},{color:"gold",theme_color:"gold",title:"FOR COMPLIANCE"},{color:"green",theme_color:"green-4",title:"TOA"}],localTimer:null,refresh_sec:0,active_tab:"ORIGINAL",columns:[{name:"referrence_code",align:"left",label:"REFERENCE CODE",field:"referrence_code",sortable:!0},{name:"application_type",align:"left",label:"TYPE OF APPLICATION",field:"application_type",sortable:!0},{name:"company_name",align:"left",label:"COMPANY NAME",field:"company_name",sortable:!0},{name:"brand",align:"left",label:"BRAND",field:"brand",sortable:!0},{name:"type_medium_name",align:"left",label:"TYPE OF MEDIUM",field:"type_medium_name",sortable:!0},{name:"internal_status",align:"left",label:"INTERNAL STATUS",field:"internal_status",sortable:!0},{name:"payment_status",align:"left",label:"PAYMENT STATUS",field:"payment_status",sortable:!0}],table_data:[],take:10,max_page:0,current:1}),computed:{userID(){return localStorage.getItem("ui")},current_id_bg(){return console.log(this.legends.filter((e=>e.title==this.active_tab))[0].color,"COMPUTED"),this.legends.filter((e=>e.title==this.active_tab))[0].theme_color}},mounted(){this.initApp()},watch:{},methods:{initApp(){this.refresh(),this.localTimer=localStorage.getItem("timer"),this.getList(),this.tabs.map((async e=>{e.count=await this.getCount(e.code)}))},isOwned(e){return!!e.isLocked&&(console.log(e.assigned_user.id,localStorage.getItem("ui")),e.assigned_user.id==localStorage.getItem("ui"))},hasOwner(e){return e.isLocked},setActiveTab(e){this.active_tab=e,this.current=1},refresh(){let e=this,t=e.localTimer<=0?60:e.localTimer;e.refresh_sec=60,localStorage.setItem("timer",t),setInterval((()=>{t>0&&(t--,localStorage.setItem("timer",t),this.localTimer=localStorage.getItem("timer"))}),1e3)},redirect(){window.location.href="https://www.facebook.com/"},update(e){this.selected_item=e,e.isLocked?this.isOwned(e)?this.$router.push({name:"individual-application-update-s2",params:{id:e.id}}):W.Z.create({message:"This application does not belong to you.",position:"top-right",closeBtn:"X",timeout:2e3,color:"red"}):this.lockModal=!0},async getList(e){let t=this;e&&(t.current=1),t.is_loading=!0;let a={data:{application_type:["REGULAR","BATCH"],form_group:"INDIVIDUAL",search:t.search,process_type:t.active_tab,form_type:"s2"},params:{take:t.take,page:t.current}},{data:l,status:o}=await t.$store.dispatch("s2/getS2Applications",a);[200,201].includes(o)?(t.table_data=l.data.map((e=>({...e,company_name:e.company.name,type_medium_name:e.type_of_medium.length>0?e.type_of_medium.map((e=>e.type_of_medium)):"--",is_self_assigned:!0})))||[],t.max_page=l.lastPage||0,t.is_loading=!1):t.is_loading=!1},async getCount(e){let t=this,a={data:{application_type:["REGULAR","BATCH"],form_group:"INDIVIDUAL",search:t.search,process_type:e,form_type:"s2"},params:{take:t.take,page:t.current}},{data:l,status:o}=await t.$store.dispatch("s2/getS2Applications",a);return l.count},async confirmLock(){let e=this,t={assigned_user_id:this.userID,id:e.selected_item.id},{data:a,status:l}=await this.$store.dispatch("ascUser/lockApp",t);[200,201].includes(l)&&(W.Z.create({message:a.message,position:"top-right",closeBtn:"X",timeout:2e3,color:"green"}),e.lockModal=!1,this.getList())}}};var N=a(1639),D=a(4458),x=a(3190),Z=a(2857),S=a(8879),E=a(926),P=a(6611),M=a(7817),Q=a(900),R=a(990),V=a(1463),z=a(9546),B=a(7220),F=a(996),G=a(8359),Y=a(2074),$=a(1821),H=a(2146),j=a(9984),K=a.n(j);const X=(0,N.Z)(U,[["render",O]]),J=X;K()(U,"components",{QCard:D.Z,QCardSection:x.Z,QIcon:Z.Z,QBtn:S.Z,QSeparator:E.Z,QInput:P.Z,QTabs:M.Z,QTab:Q.Z,QBadge:R.Z,QTable:V.Z,QTr:z.Z,QTd:B.Z,QPagination:F.Z,QSpinnerIos:G.Z,QDialog:Y.Z,QCardActions:$.Z}),K()(U,"directives",{ClosePopup:H.Z});const ee={data:()=>({}),components:{IndividualIndex:J}},te=(0,N.Z)(ee,[["render",o]]),ae=te},2753:()=>{}}]);