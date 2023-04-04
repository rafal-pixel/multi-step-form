(function(){"use strict";var e={3826:function(e,t,n){var a=n(9242),s=n(3396);function i(e,t,n,a,i,o){const c=(0,s.up)("MainForm");return(0,s.wg)(),(0,s.j4)(c)}const o={class:"main"},c={class:"steps"};function l(e,t,n,a,i,l){const r=(0,s.up)("StepNav"),p=(0,s.up)("Step1"),h=(0,s.up)("Step2"),u=(0,s.up)("Step3"),m=(0,s.up)("Step4"),d=(0,s.up)("Step5");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(r),(0,s._)("section",c,[1===e.activeStep?((0,s.wg)(),(0,s.j4)(p,{key:0})):2===e.activeStep?((0,s.wg)(),(0,s.j4)(h,{key:1})):3===e.activeStep?((0,s.wg)(),(0,s.j4)(u,{key:2})):4===e.activeStep?((0,s.wg)(),(0,s.j4)(m,{key:3})):5===e.activeStep?((0,s.wg)(),(0,s.j4)(d,{key:4})):(0,s.kq)("",!0)])])}var r=n(65),p=n(7139);const h={class:"siedbar"},u={class:"nav"},m={class:"nav__number"},d={class:"nav__desc"};function f(e,t,n,a,i,o){return(0,s.wg)(),(0,s.iD)("div",h,[(0,s._)("nav",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.stepsNav,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.id,class:(0,p.C_)(["nav__step",{active:t.id===e.activeStep}])},[(0,s._)("div",m,(0,p.zw)(t.id),1),(0,s._)("div",d,[(0,s._)("span",null,"Step "+(0,p.zw)(t.id),1),(0,s._)("h4",null,(0,p.zw)(t.title),1)])],2)))),128))])])}var v={name:"StepNav",computed:{...(0,r.Se)(["stepsNav","activeStep"])}},_=n(89);const k=(0,_.Z)(v,[["render",f],["__scopeId","data-v-14866e7c"]]);var g=k;const S=e=>((0,s.dD)("data-v-07cc4ff5"),e=e(),(0,s.Cn)(),e),y={class:"step"},w={class:"step__mobile"},b=S((()=>(0,s._)("header",{class:"step__header"},[(0,s._)("h2",null,"Personal info"),(0,s._)("p",null,"Please provide your name, email address, and phone number.")],-1))),I={class:"form"},x={ref:"name"},D=S((()=>(0,s._)("span",null,"Name",-1))),$=S((()=>(0,s._)("span",{class:"error-text"},"This field is required or not in the correct format",-1))),P={ref:"email"},C=S((()=>(0,s._)("span",null,"Email Address",-1))),z=S((()=>(0,s._)("span",{class:"error-text"},"This field is required or not in the correct format",-1))),T={ref:"phone"},q=S((()=>(0,s._)("span",null,"Phone Number",-1))),Y=S((()=>(0,s._)("span",{class:"error-text"},"This field is required or not in the correct format",-1)));function N(e,t,n,i,o,c){return(0,s.wg)(),(0,s.iD)("article",y,[(0,s._)("div",w,[b,(0,s._)("div",I,[(0,s._)("label",x,[D,$,(0,s.wy)((0,s._)("input",{type:"text",placeholder:"e.g. Stephen King","onUpdate:modelValue":t[0]||(t[0]=t=>e.name=t),onInput:t[1]||(t[1]=(...e)=>c.nameFofus&&c.nameFofus(...e))},null,544),[[a.nr,e.name]])],512),(0,s._)("label",P,[C,z,(0,s.wy)((0,s._)("input",{type:"text",placeholder:"e.g. stephanking@lorem.com","onUpdate:modelValue":t[2]||(t[2]=t=>e.email=t),onInput:t[3]||(t[3]=(...e)=>c.emailFofus&&c.emailFofus(...e))},null,544),[[a.nr,e.email]])],512),(0,s._)("label",T,[q,Y,(0,s.wy)((0,s._)("input",{type:"text",placeholder:"e.g. +1 234 567 890","onUpdate:modelValue":t[4]||(t[4]=t=>e.phone=t),onInput:t[5]||(t[5]=(...e)=>c.phoneFofus&&c.phoneFofus(...e))},null,544),[[a.nr,e.phone]])],512)])]),(0,s._)("footer",null,[(0,s._)("button",{class:"btn",onClick:t[6]||(t[6]=(...e)=>c.nextStep&&c.nextStep(...e))},"Next Step")])])}var F={name:"Step1",data:function(){return{name:"",email:"",phone:"",check:0}},methods:{validateEmail(e){return String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)},validatePhone(e){return String(e).toLowerCase().match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/)},checkName(){this.name.length>2?this.$refs.name.classList.remove("error"):this.$refs.name.classList.add("error")},checkEmail(){this.validateEmail(this.email)?this.$refs.email.classList.remove("error"):this.$refs.email.classList.add("error")},checkPhone(){this.validatePhone(this.phone)?this.$refs.phone.classList.remove("error"):this.$refs.phone.classList.add("error")},nameFofus(){1==this.check&&this.checkName()},emailFofus(){1==this.check&&this.checkEmail()},phoneFofus(){1==this.check&&this.checkPhone()},nextStep(){this.name.length>2&&this.validateEmail(this.email)&&this.validatePhone(this.phone)?(this.$store.commit("setPersonalInfo",{name:this.name,email:this.email,phone:this.phone}),this.$store.commit("activeStepPlus")):(this.checkName(),this.checkEmail(),this.checkPhone(),this.check=1)}},computed:{...(0,r.Se)(["personalInfo"])},mounted(){this.name=this.personalInfo.name,this.email=this.personalInfo.email,this.phone=this.personalInfo.phone}};const M=(0,_.Z)(F,[["render",N],["__scopeId","data-v-07cc4ff5"]]);var O=M,j=n.p+"img/icon-arcade.6f4cda28.svg";const E=e=>((0,s.dD)("data-v-2b163357"),e=e(),(0,s.Cn)(),e),U={class:"step"},A={class:"step__mobile"},Z=E((()=>(0,s._)("header",{class:"step__header"},[(0,s._)("h2",null,"Select your plan"),(0,s._)("p",null,"You have the option of monthly or yearly billing.")],-1))),L={class:"form"},V={class:"radios"},H=["value"],K=E((()=>(0,s._)("img",{src:j,alt:"",width:"40",height:"40"},null,-1))),B={class:"title"},G={key:0},W={class:"price"},J={key:1},Q={class:"price"},R=E((()=>(0,s._)("br",null,null,-1))),X={class:"info"},ee={class:"switch-price"},te=E((()=>(0,s._)("span",{class:"slider"},null,-1)));function ne(e,t,n,i,o,c){return(0,s.wg)(),(0,s.iD)("article",U,[(0,s._)("div",A,[Z,(0,s._)("div",L,[(0,s._)("div",V,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.planInfo.items,((n,i)=>((0,s.wg)(),(0,s.iD)("label",{class:(0,p.C_)(["custom-radio",{active:n.title===o.plan}]),key:i},[(0,s.wy)((0,s._)("input",{type:"radio",value:n.title,"onUpdate:modelValue":t[0]||(t[0]=e=>o.plan=e)},null,8,H),[[a.G2,o.plan]]),K,(0,s._)("div",null,[(0,s._)("span",B,(0,p.zw)(n.title),1),0==e.planInfo.choice?((0,s.wg)(),(0,s.iD)("div",G,[(0,s._)("span",W,"$"+(0,p.zw)(n.month)+"/mo",1)])):(0,s.kq)("",!0),1==e.planInfo.choice?((0,s.wg)(),(0,s.iD)("div",J,[(0,s._)("span",Q,"$"+(0,p.zw)(n.year)+"/yr",1),(0,s.Uk)(),R,(0,s._)("span",X,(0,p.zw)(n.promotionYear),1)])):(0,s.kq)("",!0)])],2)))),128))]),(0,s._)("label",ee,[(0,s._)("span",{class:(0,p.C_)({active:0==e.planInfo.choice})},"Monthly",2),(0,s.wy)((0,s._)("input",{type:"checkbox","true-value":"1","false-value":"0","onUpdate:modelValue":t[1]||(t[1]=t=>e.planInfo.choice=t)},null,512),[[a.e8,e.planInfo.choice]]),te,(0,s._)("span",{class:(0,p.C_)({active:1==e.planInfo.choice})},"Yearly",2)])])]),(0,s._)("footer",null,[(0,s._)("button",{class:"btn-back",onClick:t[2]||(t[2]=(...e)=>c.prevStep&&c.prevStep(...e))},"Go Back"),(0,s._)("button",{class:"btn",onClick:t[3]||(t[3]=(...e)=>c.nextStep&&c.nextStep(...e))},"Next Step")])])}var ae={name:"Step2",data(){return{plan:"Arcade"}},methods:{nextStep(){""!==this.plan&&(this.$store.commit("setPlan",{choice:this.planInfo.choice,choicePlan:this.plan}),this.$store.commit("activeStepPlus"))},prevStep(){this.$store.commit("activeStepMinus")}},computed:{...(0,r.Se)(["planInfo"])}};const se=(0,_.Z)(ae,[["render",ne],["__scopeId","data-v-2b163357"]]);var ie=se;const oe=e=>((0,s.dD)("data-v-866d7c9c"),e=e(),(0,s.Cn)(),e),ce={class:"step"},le={class:"step__mobile"},re=oe((()=>(0,s._)("header",{class:"step__header"},[(0,s._)("h2",null,"Pick add-ons"),(0,s._)("p",null,"Add-ons help enhance your gaming experience.")],-1))),pe={class:"form"},he=["onUpdate:modelValue"],ue=oe((()=>(0,s._)("div",{class:"addons-checkbox__checkmark"},null,-1))),me={class:"addons-checkbox__text"},de={class:"mainText"},fe={class:"subText"},ve={class:"addons-checkbox__price"},_e={key:0},ke={key:1};function ge(e,t,n,i,o,c){return(0,s.wg)(),(0,s.iD)("article",ce,[(0,s._)("div",le,[re,(0,s._)("div",pe,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.accessoriesInfo,((t,n)=>((0,s.wg)(),(0,s.iD)("label",{key:n,class:(0,p.C_)(["addons-checkbox",{active:1==t.choice}])},[(0,s.wy)((0,s._)("input",{type:"checkbox","true-value":"1","false-value":"0","onUpdate:modelValue":e=>t.choice=e},null,8,he),[[a.e8,t.choice]]),ue,(0,s._)("div",me,[(0,s._)("span",de,(0,p.zw)(t.mainText),1),(0,s._)("span",fe,(0,p.zw)(t.subText),1)]),(0,s._)("div",ve,[0==e.planInfo.choice?((0,s.wg)(),(0,s.iD)("div",_e," +$"+(0,p.zw)(t.month)+"/mo ",1)):(0,s.kq)("",!0),1==e.planInfo.choice?((0,s.wg)(),(0,s.iD)("div",ke," +$"+(0,p.zw)(t.year)+"/yr ",1)):(0,s.kq)("",!0)])],2)))),128))])]),(0,s._)("footer",null,[(0,s._)("button",{class:"btn-back",onClick:t[0]||(t[0]=(...e)=>c.prevStep&&c.prevStep(...e))},"Go Back"),(0,s._)("button",{class:"btn",onClick:t[1]||(t[1]=(...e)=>c.nextStep&&c.nextStep(...e))},"Next Step")])])}var Se={name:"Step3",data(){return{}},methods:{nextStep(){this.$store.commit("activeStepPlus")},prevStep(){this.$store.commit("activeStepMinus")}},computed:{...(0,r.Se)(["accessoriesInfo"]),...(0,r.Se)(["planInfo"])}};const ye=(0,_.Z)(Se,[["render",ge],["__scopeId","data-v-866d7c9c"]]);var we=ye;const be=e=>((0,s.dD)("data-v-2a19c3b0"),e=e(),(0,s.Cn)(),e),Ie={class:"step"},xe={class:"step__mobile"},De=be((()=>(0,s._)("header",{class:"step__header"},[(0,s._)("h2",null,"Finishing up"),(0,s._)("p",null,"Double-check everything looks OK before confirming.")],-1))),$e={class:"form"},Pe={key:0,class:"selected-plan"},Ce={class:"selected-plan__text"},ze={key:0},Te={key:1},qe={key:0,class:"selected-plan__price"},Ye={key:1,class:"selected-plan__price"},Ne={key:0,class:"accessories-item"},Fe={class:"accessories-item__text"},Me={key:0,class:"accessories-item__price"},Oe={key:1,class:"accessories-item__price"},je={class:"total-price"},Ee={class:"total-price__text"},Ue={key:0},Ae={key:1},Ze={class:"total-price__price"};function Le(e,t,n,a,i,o){return(0,s.wg)(),(0,s.iD)("article",Ie,[(0,s._)("div",xe,[De,(0,s._)("div",$e,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.planInfo.items,(n=>((0,s.wg)(),(0,s.iD)(s.HY,null,[1==n.choice?((0,s.wg)(),(0,s.iD)("div",Pe,[(0,s._)("div",Ce,[(0,s._)("div",null,[(0,s.Uk)((0,p.zw)(n.title)+" (",1),0==e.planInfo.choice?((0,s.wg)(),(0,s.iD)("span",ze,"Monthly")):(0,s.kq)("",!0),1==e.planInfo.choice?((0,s.wg)(),(0,s.iD)("span",Te,"Yearly")):(0,s.kq)("",!0),(0,s.Uk)(") ")]),(0,s._)("a",{href:"",onClick:t[0]||(t[0]=(...e)=>o.chacngePlan&&o.chacngePlan(...e))},"Change")]),0==e.planInfo.choice?((0,s.wg)(),(0,s.iD)("div",qe," $"+(0,p.zw)(n.month)+"/mo ",1)):(0,s.kq)("",!0),1==e.planInfo.choice?((0,s.wg)(),(0,s.iD)("div",Ye," $"+(0,p.zw)(n.year)+"/yr ",1)):(0,s.kq)("",!0)])):(0,s.kq)("",!0)],64)))),256)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.accessoriesInfo,(t=>((0,s.wg)(),(0,s.iD)(s.HY,null,[1==t.choice?((0,s.wg)(),(0,s.iD)("div",Ne,[(0,s._)("div",Fe,(0,p.zw)(t.mainText),1),0==e.planInfo.choice?((0,s.wg)(),(0,s.iD)("div",Me," +$"+(0,p.zw)(t.month)+"/mo ",1)):(0,s.kq)("",!0),1==e.planInfo.choice?((0,s.wg)(),(0,s.iD)("div",Oe," +$"+(0,p.zw)(t.year)+"/yr ",1)):(0,s.kq)("",!0)])):(0,s.kq)("",!0)],64)))),256))]),(0,s._)("div",je,[(0,s._)("div",Ee,[(0,s.Uk)(" Total ("),0==e.planInfo.choice?((0,s.wg)(),(0,s.iD)("span",Ue,"per month")):(0,s.kq)("",!0),1==e.planInfo.choice?((0,s.wg)(),(0,s.iD)("span",Ae,"per year")):(0,s.kq)("",!0),(0,s.Uk)(") ")]),(0,s._)("div",Ze,(0,p.zw)(o.sumValue),1)])]),(0,s._)("footer",null,[(0,s._)("button",{class:"btn-back",onClick:t[1]||(t[1]=(...e)=>o.prevStep&&o.prevStep(...e))},"Go Back"),(0,s._)("button",{class:"btn",onClick:t[2]||(t[2]=(...e)=>o.nextStep&&o.nextStep(...e))},"Confirm")])])}var Ve={name:"Step4",data(){return{sum:0}},methods:{chacngePlan(e){e.preventDefault(),this.$store.commit("setStep")},nextStep(){this.$store.commit("activeStepPlus")},prevStep(){this.$store.commit("activeStepMinus")},planMonthly(){const e=this.planInfo.items.findIndex((e=>1==e.choice));return this.sum+=this.planInfo.items[e].month,this.accessoriesInfo.forEach((e=>{1==e.choice&&(this.sum+=e.month)})),this.sum},planYearly(){const e=this.planInfo.items.findIndex((e=>1==e.choice));return this.sum+=this.planInfo.items[e].year,this.accessoriesInfo.forEach((e=>{1==e.choice&&(this.sum+=e.year)})),this.sum}},computed:{...(0,r.Se)(["accessoriesInfo"]),...(0,r.Se)(["planInfo"]),sumValue(){return 0==this.planInfo.choice?`+$${this.planMonthly()}/mo`:1==this.planInfo.choice?`+$${this.planYearly()}/yr`:void 0}}};const He=(0,_.Z)(Ve,[["render",Le],["__scopeId","data-v-2a19c3b0"]]);var Ke=He,Be=n.p+"img/icon-thank-you.c616d4b5.svg";const Ge=e=>((0,s.dD)("data-v-796d1dfd"),e=e(),(0,s.Cn)(),e),We={class:"step"},Je=Ge((()=>(0,s._)("div",{class:"step__mobile"},[(0,s._)("img",{src:Be,alt:"",width:"80",height:"80"}),(0,s._)("h2",null,"Thank you!"),(0,s._)("p",null,"Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel Free to email us at support#loremipsum.com")],-1))),Qe=[Je];function Re(e,t,n,a,i,o){return(0,s.wg)(),(0,s.iD)("article",We,Qe)}var Xe={name:"Step5",data(){return{}}};const et=(0,_.Z)(Xe,[["render",Re],["__scopeId","data-v-796d1dfd"]]);var tt=et,nt={name:"MainForm",components:{StepNav:g,Step1:O,Step2:ie,Step3:we,Step4:Ke,Step5:tt},computed:{...(0,r.Se)(["activeStep"])}};const at=(0,_.Z)(nt,[["render",l]]);var st=at,it={name:"App",components:{MainForm:st}};const ot=(0,_.Z)(it,[["render",i]]);var ct=ot;const lt=(0,r.MT)({state:{stepsNav:[{id:1,title:"Your info"},{id:2,title:"Select plan"},{id:3,title:"Add-ons"},{id:4,title:"Summary"}],activeStep:1,personalInfo:{name:"",email:"",phone:""},plan:{choice:0,items:[{img:"../images/icon-arcade.svg",title:"Arcade",month:9,year:90,promotionYear:"2 months free",choice:1},{img:"../images/icon-advanced.svg",title:"Advanced",month:12,year:120,promotionYear:"2 months free",choice:0},{img:"../images/icon-pro.svg",title:"Pro",month:15,year:150,promotionYear:"2 months free",choice:0}]},accessories:[{mainText:"Online service",subText:"Access to multiplayer games",month:1,year:10,choice:0},{mainText:"Larger storage",subText:"Extra 1TB of cloud save",month:2,year:20,choice:0},{mainText:"Customizable profile",subText:"Custom theme on your profile",month:2,year:20,choice:0}]},getters:{stepsNav(e){return e.stepsNav},activeStep(e){return e.activeStep},personalInfo(e){return e.personalInfo},planInfo(e){return e.plan},accessoriesInfo(e){return e.accessories}},mutations:{activeStepPlus(e){e.activeStep<5&&e.activeStep++},activeStepMinus(e){e.activeStep>1&&e.activeStep--},setPersonalInfo(e,t){e.personalInfo=t},setPlan(e,t){e.plan.choice=t.choice,e.plan.items.forEach(((e,n)=>{t.choicePlan==e.title?e.choice=1:e.choice=0}))},setStep(e){e.activeStep=2}}});var rt=lt;(0,a.ri)(ct).use(rt).mount("#app")}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,s,i){if(!a){var o=1/0;for(p=0;p<e.length;p++){a=e[p][0],s=e[p][1],i=e[p][2];for(var c=!0,l=0;l<a.length;l++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(c=!1,i<o&&(o=i));if(c){e.splice(p--,1);var r=s();void 0!==r&&(t=r)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[a,s,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,i,o=a[0],c=a[1],l=a[2],r=0;if(o.some((function(t){return 0!==e[t]}))){for(s in c)n.o(c,s)&&(n.m[s]=c[s]);if(l)var p=l(n)}for(t&&t(a);r<o.length;r++)i=o[r],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(p)},a=self["webpackChunkmulti_step_form"]=self["webpackChunkmulti_step_form"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(3826)}));a=n.O(a)})();
//# sourceMappingURL=app.b15d02ce.js.map