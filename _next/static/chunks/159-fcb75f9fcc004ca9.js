(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[159],{991:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});let r=(0,i(9642).A)("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},3247:(e,t,i)=>{"use strict";var r=i(9517),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var i,o,s,a,l,u,c,d,h=!1;t||(t={}),s=t.debug||!1;try{if(l=r(),u=document.createRange(),c=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(i){if(i.stopPropagation(),t.format)if(i.preventDefault(),void 0===i.clipboardData){s&&console.warn("unable to use e.clipboardData"),s&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=n[t.format]||n.default;window.clipboardData.setData(r,e)}else i.clipboardData.clearData(),i.clipboardData.setData(t.format,e);t.onCopy&&(i.preventDefault(),t.onCopy(i.clipboardData))}),document.body.appendChild(d),u.selectNodeContents(d),c.addRange(u),!document.execCommand("copy"))throw Error("copy command was unsuccessful");h=!0}catch(r){s&&console.error("unable to copy using execCommand: ",r),s&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),h=!0}catch(r){s&&console.error("unable to copy using clipboardData: ",r),s&&console.error("falling back to prompt"),i="message"in t?t.message:"Copy to clipboard: #{key}, Enter",o=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",a=i.replace(/#{\s*key\s*}/g,o),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(u):c.removeAllRanges()),d&&document.body.removeChild(d),l()}return h}},4133:(e,t,i)=>{"use strict";let r;function n(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[i,r]of e)if(!Object.is(r,t.get(i)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let i of e)if(!t.has(i))return!1;return!0}let i=Object.keys(e);if(i.length!==Object.keys(t).length)return!1;for(let r of i)if(!Object.prototype.hasOwnProperty.call(t,r)||!Object.is(e[r],t[r]))return!1;return!0}i.d(t,{GC:()=>lb,iQ:()=>y.iQ});var o,s,a,l,u,c,d=i(8929),h=i.t(d,2),p=i(6388),f=i(4243);let{useDebugValue:m}=d,{useSyncExternalStoreWithSelector:v}=p,g=(e,t)=>{let i=(0,f.y)(e),r=(e,r=t)=>(function(e,t=e=>e,i){let r=v(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,i);return m(r),r})(i,e,r);return Object.assign(r,i),r};var y=i(5932),w=i(4202),x=i(9621),b={en:{"All set!":"All set!","Your World ID is now connected":"Your World ID is now connected","Transmitting verification to host app. Please wait...":"Transmitting verification to host app. Please wait...","Something went wrong":"Something went wrong","Verification Declined":"Verification Declined","Request cancelled":"Request cancelled","Connection to your wallet failed. Please try again.":"Connection to your wallet failed. Please try again.","You've cancelled the request in World App.":"You've cancelled the request in World App.","You have already verified the maximum number of times for this action.":"You have already verified the maximum number of times for this action.","It seems you do not have the verification level required by this app.":"It seems you do not have the verification level required by this app.","Invalid network. If you are the app owner, visit docs.world.org/test for details.":"Invalid network. If you are the app owner, visit docs.world.org/test for details.","Your identity is still being registered. Please wait a few minutes and try again.":"Your identity is still being registered. Please wait a few minutes and try again.","We couldn't complete your request. Please try again.":"We couldn't complete your request. Please try again.","Try Again":"Try Again","Open World App":"Open World App","Hide QR Code":"Hide QR Code","Display QR Code":"Display QR Code","QR Code copied":"QR Code copied","Connect your World ID":"Connect your World ID","Use phone camera to scan the QR code":"Use phone camera to scan the QR code","Connecting...":"Connecting...","Please continue in app":"Please continue in app","You will be redirected to the app, please return to this page once you're done":"You will be redirected to the app, please return to this page once you're done","Action cannot be an empty string.":"Action cannot be an empty string.","Invalid IDKitStage :stage.":"Invalid IDKitStage :stage.","Terms & Privacy":"Terms & Privacy"},es:{"All set!":"\xa1Todo listo!","Your World ID is now connected":"Tu World ID ahora est\xe1 conectado","Transmitting verification to host app. Please wait...":"Transmitiendo verificaci\xf3n a la aplicaci\xf3n host. Por favor espera...","Something went wrong":"Algo sali\xf3 mal","Verification Declined":"Verificaci\xf3n rechazada","Request cancelled":"Solicitud cancelada","Connection to your wallet failed. Please try again.":"La conexi\xf3n a tu billetera fall\xf3. Por favor intenta de nuevo.","You've cancelled the request in World App.":"Has cancelado la solicitud en World App.","You have already verified the maximum number of times for this action.":"Ya has verificado el n\xfamero m\xe1ximo de veces para esta acci\xf3n.","It seems you do not have the verification level required by this app.":"Parece que no tienes el nivel de verificaci\xf3n requerido por esta aplicaci\xf3n.","Invalid network. If you are the app owner, visit docs.world.org/test for details.":"Red inv\xe1lida. Si eres el propietario de la aplicaci\xf3n, visita docs.world.org/test para m\xe1s detalles.","Your identity is still being registered. Please wait a few minutes and try again.":"Tu identidad a\xfan se est\xe1 registrando. Por favor espera unos minutos e intenta de nuevo.","We couldn't complete your request. Please try again.":"No pudimos completar tu solicitud. Por favor intenta de nuevo.","Try Again":"Intentar de nuevo","Open World App":"Abrir World App","Hide QR Code":"Ocultar c\xf3digo QR","Display QR Code":"Mostrar c\xf3digo QR","QR Code copied":"C\xf3digo QR copiado","Connect your World ID":"Conecta tu World ID","Use phone camera to scan the QR code":"Usa la c\xe1mara del tel\xe9fono para escanear el c\xf3digo QR","Connecting...":"Conectando...","Please continue in app":"Por favor contin\xfaa en la aplicaci\xf3n","You will be redirected to the app, please return to this page once you're done":"Ser\xe1s redirigido a la aplicaci\xf3n, por favor regresa a esta p\xe1gina una vez que hayas terminado","Action cannot be an empty string.":"La acci\xf3n no puede ser una cadena vac\xeda.","Invalid IDKitStage :stage.":"IDKitStage inv\xe1lido :stage.","Terms & Privacy":"T\xe9rminos y privacidad"},th:{"All set!":"เรียบร้อย!","Your World ID is now connected":"World ID ของคุณเชื่อมต่อแล้ว","Transmitting verification to host app. Please wait...":"กำลังส่งการยืนยันไปยังแอปโฮสต์ กรุณารอสักครู่...","Something went wrong":"เกิดข้อผิดพลาด","Verification Declined":"การยืนยันถูกปฏิเสธ","Request cancelled":"คำขอถูกยกเลิก","Connection to your wallet failed. Please try again.":"การเชื่อมต่อกับกระเป๋าเงินของคุณล้มเหลว กรุณาลองอีกครั้ง","You've cancelled the request in World App.":"คุณได้ยกเลิกคำขอใน World App","You have already verified the maximum number of times for this action.":"คุณได้ยืนยันครบจำนวนครั้งสูงสุดสำหรับการดำเนินการนี้แล้ว","It seems you do not have the verification level required by this app.":"ดูเหมือนว่าคุณไม่มีระดับการยืนยันที่แอปนี้ต้องการ","Invalid network. If you are the app owner, visit docs.world.org/test for details.":"เครือข่ายไม่ถูกต้อง หากคุณเป็นเจ้าของแอป โปรดไปที่ docs.world.org/test สำหรับรายละเอียด","Your identity is still being registered. Please wait a few minutes and try again.":"ตัวตนของคุณยังอยู่ระหว่างการลงทะเบียน กรุณารอสักครู่แล้วลองอีกครั้ง","We couldn't complete your request. Please try again.":"เราไม่สามารถดำเนินการตามคำขอของคุณได้ กรุณาลองอีกครั้ง","Try Again":"ลองอีกครั้ง","Open World App":"เปิด World App","Hide QR Code":"ซ่อน QR Code","Display QR Code":"แสดง QR Code","QR Code copied":"คัดลอก QR Code แล้ว","Connect your World ID":"เชื่อมต่อ World ID ของคุณ","Use phone camera to scan the QR code":"ใช้กล้องโทรศัพท์เพื่อสแกน QR code","Connecting...":"กำลังเชื่อมต่อ...","Please continue in app":"กรุณาดำเนินการต่อในแอป","You will be redirected to the app, please return to this page once you're done":"คุณจะถูกนำไปยังแอป กรุณากลับมาที่หน้านี้เมื่อเสร็จแล้ว","Action cannot be an empty string.":"การดำเนินการไม่สามารถเป็นข้อความว่างได้","Invalid IDKitStage :stage.":"IDKitStage ไม่ถูกต้อง :stage.","Terms & Privacy":"ข้อกำหนดและความเป็นส่วนตัว"}},E={},C=(e,t)=>{if(!t)return e;let i=e;for(let[e,r]of Object.entries(t))i=i.replace(`:${e}`,r);return i};function k(e,...t){let[i]=t;return"undefined"==typeof navigator&&"undefined"==typeof window?C(e,i):C(b[(()=>{let e=E;return e.language&&e.language in b?e.language:(()=>{for(let e of navigator.languages){let[t]=e.split("-"),i=t.toLowerCase();if(i in b)return i}})()||"en"})()]?.[e]??e,i)}var T=((e,t)=>e?g(e,t):g)()((e,t)=>({app_id:"",signal:"",action:"",action_description:"",bridge_url:"",verification_level:y.Tz,partner:!1,open:!1,result:null,errorTitle:"",errorDetail:"",autoClose:!0,errorState:null,processing:!1,errorCallbacks:{},verifyCallbacks:{},successCallbacks:{},stage:"WORLD_ID",setStage:t=>e({stage:t}),setErrorState:t=>e({errorState:t}),setProcessing:t=>e({processing:t}),retryFlow:()=>{e({stage:"WORLD_ID",errorState:null})},addErrorCallback:(t,i)=>{e(e=>(e.errorCallbacks[i]=t,e))},addSuccessCallback:(t,i)=>{e(e=>(e.successCallbacks[i]=t,e))},addVerificationCallback:(t,i)=>{e(e=>(e.verifyCallbacks[i]=t,e))},setOptions:({handleVerify:i,onSuccess:r,signal:n,action:o,app_id:s,partner:a,onError:l,verification_level:u,action_description:c,bridge_url:d,autoClose:h,advanced:p},f)=>{e({signal:n,action:o,bridge_url:d,action_description:c,autoClose:h??!0,app_id:p?.self_hosted?"self_hosted":s,verification_level:u??y.Tz,partner:a}),t().addSuccessCallback(r,f),l&&t().addErrorCallback(l,f),i&&t().addVerificationCallback(i,f)},handleVerify:i=>{e({stage:"HOST_APP_VERIFICATION",processing:!1}),Promise.all(Object.values(t().verifyCallbacks).map(async e=>e?.(i))).then(()=>{e({stage:"SUCCESS",result:i}),t().autoClose&&setTimeout(()=>t().onOpenChange(!1),2500)},t=>{let i;t&&"object"==typeof t&&t.message&&(i=t.message),e({stage:"ERROR",errorState:{code:y._W.FailedByHostApp,message:i?k(i):void 0}})})},onOpenChange:i=>{if(i)return e({open:i});let r=t().errorState;if("ERROR"===t().stage&&r){let e=t().errorCallbacks;requestAnimationFrame(()=>Object.values(e).forEach(e=>void e?.(r)))}let n=t().result;if("SUCCESS"==t().stage&&n){let e=t().successCallbacks;requestAnimationFrame(()=>Object.values(e).forEach(e=>void e?.(n)))}e({open:i,result:null,errorState:null,processing:!1,stage:"WORLD_ID"})}}),n),P=(e=>(e.HOOK="hook",e.PROPS="props",e.MANUAL="manual",e))(P||{}),S=(0,d.memo)(({data:e,size:t=300})=>{let i=(0,d.useMemo)(()=>{let i=[],r=(e=>{let t=w.create(e,{errorCorrectionLevel:"M"}).modules.data,i=Math.sqrt(t.length);return t.reduce((e,t,r)=>(r%i==0?e.push([t]):e[e.length-1].push(t),e),[])})(e),n=t/r.length;return[{x:0,y:0},{x:1,y:0},{x:0,y:1}].forEach(({x:e,y:t})=>{let o=(r.length-7)*n*e,s=(r.length-7)*n*t;for(let r=0;r<3;r++)i.push((0,x.jsx)("rect",{fill:"currentColor",x:o+n*r,y:s+n*r,width:n*(7-2*r),height:n*(7-2*r),rx:-((r-2)*5),ry:-((r-2)*5),className:r%3==0?"text-black":r%3==1?"text-white":"text-black"},`${r}-${e}-${t}`))}),r.forEach((e,t)=>{e.forEach((e,o)=>{r[t][o]&&(t<7&&o<7||t>r.length-8&&o<7||t<7&&o>r.length-8||i.push((0,x.jsx)("circle",{fill:"currentColor",r:n/2.2,cx:t*n+n/2,cy:o*n+n/2,className:"text-black dark:text-white"},`circle-${t}-${o}`)))})}),i},[t,e]);return(0,x.jsx)("svg",{height:t,width:t,"data-test-id":"qr-code",children:i})}),j=i(9668);function A(e,t,{checkForDefaultPrevented:i=!0}={}){return function(r){if(e?.(r),!1===i||!r.defaultPrevented)return t?.(r)}}function R(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function M(...e){return d.useCallback(function(...e){return t=>{let i=!1,r=e.map(e=>{let r=R(e,t);return i||"function"!=typeof r||(i=!0),r});if(i)return()=>{for(let t=0;t<r.length;t++){let i=r[t];"function"==typeof i?i():R(e[t],null)}}}}(...e),e)}function D(e,t,i){if(!t.has(e))throw TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}function L(e,t){var i=D(e,t,"get");return i.get?i.get.call(e):i.value}function N(e,t,i){var r=D(e,t,"set");if(r.set)r.set.call(e,i);else{if(!r.writable)throw TypeError("attempted to set read only private field");r.value=i}return i}function V(e,t=[]){let i=[],r=()=>{let t=i.map(e=>d.createContext(e));return function(i){let r=i?.[e]||t;return d.useMemo(()=>({[`__scope${e}`]:{...i,[e]:r}}),[i,r])}};return r.scopeName=e,[function(t,r){let n=d.createContext(r);n.displayName=t+"Context";let o=i.length;i=[...i,r];let s=t=>{let{scope:i,children:r,...s}=t,a=i?.[e]?.[o]||n,l=d.useMemo(()=>s,Object.values(s));return(0,x.jsx)(a.Provider,{value:l,children:r})};return s.displayName=t+"Provider",[s,function(i,s){let a=s?.[e]?.[o]||n,l=d.useContext(a);if(l)return l;if(void 0!==r)return r;throw Error(`\`${i}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let i=()=>{let i=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=i.reduce((t,{useScope:i,scopeName:r})=>{let n=i(e)[`__scope${r}`];return{...t,...n}},{});return d.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return i.scopeName=t.scopeName,i}(r,...t)]}function O(e){let t=d.forwardRef((t,i)=>{var r;let n,o,{children:s,...a}=t,l=null,u=!1,c=[];z(s)&&"function"==typeof U&&(s=U(s._payload)),d.Children.forEach(s,e=>{var t;if(t=e,d.isValidElement(t)&&"function"==typeof t.type&&"__radixId"in t.type&&t.type.__radixId===I){u=!0;let t="child"in e.props?e.props.child:e.props.children;z(t)&&"function"==typeof U&&(t=U(t._payload)),l=F(e,t),c.push(l?.props?.children)}else c.push(e)}),l?l=d.cloneElement(l,void 0,c):!u&&1===d.Children.count(s)&&d.isValidElement(s)&&(l=s);let h=l?(r=l,(o=(n=Object.getOwnPropertyDescriptor(r.props,"ref")?.get)&&"isReactWarning"in n&&n.isReactWarning)?r.ref:(o=(n=Object.getOwnPropertyDescriptor(r,"ref")?.get)&&"isReactWarning"in n&&n.isReactWarning)?r.props.ref:r.props.ref||r.ref):void 0,p=M(i,h);if(!l){if(s||0===s)throw Error(u?_(e):B(e));return s}let f=function(e,t){let i={...t};for(let r in t){let n=e[r],o=t[r];/^on[A-Z]/.test(r)?n&&o?i[r]=(...e)=>{let t=o(...e);return n(...e),t}:n&&(i[r]=n):"style"===r?i[r]={...n,...o}:"className"===r&&(i[r]=[n,o].filter(Boolean).join(" "))}return{...e,...i}}(a,l.props??{});return l.type!==d.Fragment&&(f.ref=i?p:h),d.cloneElement(l,f)});return t.displayName=`${e}.Slot`,t}"undefined"!=typeof window&&window.document&&window.document.createElement;var I=Symbol.for("radix.slottable"),F=(e,t)=>{if("child"in e.props){let t=e.props.child;return d.isValidElement(t)?d.cloneElement(t,void 0,e.props.children(t.props.children)):null}return d.isValidElement(t)?t:null},W=Symbol.for("react.lazy");function z(e){var t;return null!=e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===W&&"_payload"in e&&"object"==typeof(t=e._payload)&&null!==t&&"then"in t}var B=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,_=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,U=h[" use ".trim().toString()],$=new WeakMap;function H(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let i=function(e,t){let i=e.length,r=K(t),n=r>=0?r:i+r;return n<0||n>=i?-1:n}(e,t);return -1===i?void 0:e[i]}function K(e){return e!=e||0===e?0:Math.trunc(e)}l=new WeakMap,class e extends Map{set(e,t){return $.get(this)&&(this.has(e)?L(this,l)[L(this,l).indexOf(e)]=e:L(this,l).push(e)),super.set(e,t),this}insert(e,t,i){let r,n=this.has(t),o=L(this,l).length,s=K(e),a=s>=0?s:o+s,u=a<0||a>=o?-1:a;if(u===this.size||n&&u===this.size-1||-1===u)return this.set(t,i),this;let c=this.size+ +!n;s<0&&a++;let d=[...L(this,l)],h=!1;for(let e=a;e<c;e++)if(a===e){let o=d[e];d[e]===t&&(o=d[e+1]),n&&this.delete(t),r=this.get(o),this.set(t,i)}else{h||d[e-1]!==t||(h=!0);let i=d[h?e:e-1],n=r;r=this.get(i),this.delete(i),this.set(i,n)}return this}with(t,i,r){let n=new e(this);return n.insert(t,i,r),n}before(e){let t=L(this,l).indexOf(e)-1;if(!(t<0))return this.entryAt(t)}setBefore(e,t,i){let r=L(this,l).indexOf(e);return -1===r?this:this.insert(r,t,i)}after(e){let t=L(this,l).indexOf(e);if(-1!==(t=-1===t||t===this.size-1?-1:t+1))return this.entryAt(t)}setAfter(e,t,i){let r=L(this,l).indexOf(e);return -1===r?this:this.insert(r+1,t,i)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return N(this,l,[]),super.clear()}delete(e){let t=super.delete(e);return t&&L(this,l).splice(L(this,l).indexOf(e),1),t}deleteAt(e){let t=this.keyAt(e);return void 0!==t&&this.delete(t)}at(e){let t=H(L(this,l),e);if(void 0!==t)return this.get(t)}entryAt(e){let t=H(L(this,l),e);if(void 0!==t)return[t,this.get(t)]}indexOf(e){return L(this,l).indexOf(e)}keyAt(e){return H(L(this,l),e)}from(e,t){let i=this.indexOf(e);if(-1===i)return;let r=i+t;return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.at(r)}keyFrom(e,t){let i=this.indexOf(e);if(-1===i)return;let r=i+t;return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.keyAt(r)}find(e,t){let i=0;for(let r of this){if(Reflect.apply(e,t,[r,i,this]))return r;i++}}findIndex(e,t){let i=0;for(let r of this){if(Reflect.apply(e,t,[r,i,this]))return i;i++}return -1}filter(t,i){let r=[],n=0;for(let e of this)Reflect.apply(t,i,[e,n,this])&&r.push(e),n++;return new e(r)}map(t,i){let r=[],n=0;for(let e of this)r.push([e[0],Reflect.apply(t,i,[e,n,this])]),n++;return new e(r)}reduce(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];let[r,n]=t,o=0,s=null!=n?n:this.at(0);for(let e of this)s=0===o&&1===t.length?e:Reflect.apply(r,this,[s,e,o,this]),o++;return s}reduceRight(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];let[r,n]=t,o=null!=n?n:this.at(-1);for(let e=this.size-1;e>=0;e--){let i=this.at(e);o=e===this.size-1&&1===t.length?i:Reflect.apply(r,this,[o,i,e,this])}return o}toSorted(t){return new e([...this.entries()].sort(t))}toReversed(){let t=new e;for(let e=this.size-1;e>=0;e--){let i=this.keyAt(e),r=this.get(i);t.set(i,r)}return t}toSpliced(){for(var t=arguments.length,i=Array(t),r=0;r<t;r++)i[r]=arguments[r];let n=[...this.entries()];return n.splice(...i),new e(n)}slice(t,i){let r=new e,n=this.size-1;if(void 0===t)return r;t<0&&(t+=this.size),void 0!==i&&i>0&&(n=i-1);for(let e=t;e<=n;e++){let t=this.keyAt(e),i=this.get(t);r.set(t,i)}return r}every(e,t){let i=0;for(let r of this){if(!Reflect.apply(e,t,[r,i,this]))return!1;i++}return!0}some(e,t){let i=0;for(let r of this){if(Reflect.apply(e,t,[r,i,this]))return!0;i++}return!1}constructor(e){super(e),function(e,t,i){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object");t.set(e,i)}(this,l,{writable:!0,value:void 0}),N(this,l,[...super.keys()]),$.set(this,!0)}};var Y=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,t)=>{let i=O(`Primitive.${t}`),r=d.forwardRef((e,r)=>{let{asChild:n,...o}=e;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,x.jsx)(n?i:t,{...o,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function q(e,t){e&&j.flushSync(()=>e.dispatchEvent(t))}function Z(e){let t=d.useRef(e);return d.useEffect(()=>{t.current=e}),d.useMemo(()=>(...e)=>t.current?.(...e),[])}var X="dismissableLayer.update",Q=d.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),G=d.forwardRef((e,t)=>{var i,r;let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:a,onInteractOutside:l,onDismiss:c,...h}=e,p=d.useContext(Q),[f,m]=d.useState(null),v=null!=(r=null==f?void 0:f.ownerDocument)?r:null==(i=globalThis)?void 0:i.document,[,g]=d.useState({}),y=M(t,e=>m(e)),w=Array.from(p.layers),[b]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),E=w.indexOf(b),C=f?w.indexOf(f):-1,k=p.layersWithOutsidePointerEventsDisabled.size>0,T=C>=E,P=function(e){var t;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null==(t=globalThis)?void 0:t.document,r=Z(e),n=d.useRef(!1),o=d.useRef(()=>{});return d.useEffect(()=>{let e=e=>{if(e.target&&!n.current){let t=function(){et("dismissableLayer.pointerDownOutside",r,n,{discrete:!0})},n={originalEvent:e};"touch"===e.pointerType?(i.removeEventListener("click",o.current),o.current=t,i.addEventListener("click",o.current,{once:!0})):t()}else i.removeEventListener("click",o.current);n.current=!1},t=window.setTimeout(()=>{i.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),i.removeEventListener("pointerdown",e),i.removeEventListener("click",o.current)}},[i,r]),{onPointerDownCapture:()=>n.current=!0}}(e=>{let t=e.target,i=[...p.branches].some(e=>e.contains(t));T&&!i&&(null==s||s(e),null==l||l(e),e.defaultPrevented||null==c||c())},v),S=function(e){var t;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null==(t=globalThis)?void 0:t.document,r=Z(e),n=d.useRef(!1);return d.useEffect(()=>{let e=e=>{e.target&&!n.current&&et("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return i.addEventListener("focusin",e),()=>i.removeEventListener("focusin",e)},[i,r]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}(e=>{let t=e.target;![...p.branches].some(e=>e.contains(t))&&(null==a||a(e),null==l||l(e),e.defaultPrevented||null==c||c())},v);return!function(e,t=globalThis?.document){let i=Z(e);d.useEffect(()=>{let e=e=>{"Escape"===e.key&&i(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[i,t])}(e=>{C===p.layers.size-1&&(null==o||o(e),!e.defaultPrevented&&c&&(e.preventDefault(),c()))},v),d.useEffect(()=>{if(f)return n&&(0===p.layersWithOutsidePointerEventsDisabled.size&&(u=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(f)),p.layers.add(f),ee(),()=>{n&&(p.layersWithOutsidePointerEventsDisabled.delete(f),0===p.layersWithOutsidePointerEventsDisabled.size&&(v.body.style.pointerEvents=u))}},[f,v,n,p]),d.useEffect(()=>()=>{f&&(p.layers.delete(f),p.layersWithOutsidePointerEventsDisabled.delete(f),ee())},[f,p]),d.useEffect(()=>{let e=()=>g({});return document.addEventListener(X,e),()=>document.removeEventListener(X,e)},[]),(0,x.jsx)(Y.div,{...h,ref:y,style:{pointerEvents:k?T?"auto":"none":void 0,...e.style},onFocusCapture:A(e.onFocusCapture,S.onFocusCapture),onBlurCapture:A(e.onBlurCapture,S.onBlurCapture),onPointerDownCapture:A(e.onPointerDownCapture,P.onPointerDownCapture)})});G.displayName="DismissableLayer";var J=d.forwardRef((e,t)=>{let i=d.useContext(Q),r=d.useRef(null),n=M(t,r);return d.useEffect(()=>{let e=r.current;if(e)return i.branches.add(e),()=>{i.branches.delete(e)}},[i.branches]),(0,x.jsx)(Y.div,{...e,ref:n})});function ee(){let e=new CustomEvent(X);document.dispatchEvent(e)}function et(e,t,i,r){let{discrete:n}=r,o=i.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:i});t&&o.addEventListener(e,t,{once:!0}),n?q(o,s):o.dispatchEvent(s)}J.displayName="DismissableLayerBranch";var ei=globalThis?.document?d.useLayoutEffect:()=>{},er=d.forwardRef((e,t)=>{var i,r;let{container:n,...o}=e,[s,a]=d.useState(!1);ei(()=>a(!0),[]);let l=n||s&&(null==(r=globalThis)||null==(i=r.document)?void 0:i.body);return l?j.createPortal((0,x.jsx)(Y.div,{...o,ref:t}),l):null});er.displayName="Portal";var en=e=>{let{present:t,children:i}=e,r=function(e){var t,i;let[r,n]=d.useState(),o=d.useRef(null),s=d.useRef(e),a=d.useRef("none"),[l,u]=(t=e?"mounted":"unmounted",i={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},d.useReducer((e,t)=>{let r=i[e][t];return null!=r?r:e},t));return d.useEffect(()=>{let e=es(o.current);a.current="mounted"===l?e:"none"},[l]),ei(()=>{let t=o.current,i=s.current;if(i!==e){let r=a.current,n=es(t);e?u("MOUNT"):"none"===n||(null==t?void 0:t.display)==="none"?u("UNMOUNT"):i&&r!==n?u("ANIMATION_OUT"):u("UNMOUNT"),s.current=e}},[e,u]),ei(()=>{if(r){var e;let t,i=null!=(e=r.ownerDocument.defaultView)?e:window,n=e=>{let n=es(o.current).includes(CSS.escape(e.animationName));if(e.target===r&&n&&(u("ANIMATION_END"),!s.current)){let e=r.style.animationFillMode;r.style.animationFillMode="forwards",t=i.setTimeout(()=>{"forwards"===r.style.animationFillMode&&(r.style.animationFillMode=e)})}},l=e=>{e.target===r&&(a.current=es(o.current))};return r.addEventListener("animationstart",l),r.addEventListener("animationcancel",n),r.addEventListener("animationend",n),()=>{i.clearTimeout(t),r.removeEventListener("animationstart",l),r.removeEventListener("animationcancel",n),r.removeEventListener("animationend",n)}}u("ANIMATION_END")},[r,u]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:d.useCallback(e=>{o.current=e?getComputedStyle(e):null,n(e)},[])}}(t),n="function"==typeof i?i({present:r.isPresent}):d.Children.only(i),o=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];let r=d.useRef(t);return r.current=t,d.useCallback(e=>{let t=r.current,i=!1,n=t.map(t=>{let r=eo(t,e);return i||"function"!=typeof r||(i=!0),r});if(i)return()=>{for(let e=0;e<n.length;e++){let i=n[e];"function"==typeof i?i():eo(t[e],null)}}},[])}(r.ref,function(e){var t,i;let r=null==(t=Object.getOwnPropertyDescriptor(e.props,"ref"))?void 0:t.get,n=r&&"isReactWarning"in r&&r.isReactWarning;return n?e.ref:(n=(r=null==(i=Object.getOwnPropertyDescriptor(e,"ref"))?void 0:i.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n));return"function"==typeof i||r.isPresent?d.cloneElement(n,{ref:o}):null};function eo(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function es(e){return(null==e?void 0:e.animationName)||"none"}en.displayName="Presence";var ea=h[" useInsertionEffect ".trim().toString()]||ei;function el({prop:e,defaultProp:t,onChange:i=()=>{},caller:r}){let[n,o,s]=function({defaultProp:e,onChange:t}){let[i,r]=d.useState(e),n=d.useRef(i),o=d.useRef(t);return ea(()=>{o.current=t},[t]),d.useEffect(()=>{n.current!==i&&(o.current?.(i),n.current=i)},[i,n]),[i,r,o]}({defaultProp:t,onChange:i}),a=void 0!==e,l=a?e:n;{let t=d.useRef(void 0!==e);d.useEffect(()=>{let e=t.current;if(e!==a){let t=a?"controlled":"uncontrolled";console.warn(`${r} is changing from ${e?"controlled":"uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)}t.current=a},[a,r])}return[l,d.useCallback(t=>{if(a){let i="function"==typeof t?t(e):t;i!==e&&s.current?.(i)}else o(t)},[a,e,o,s])]}Symbol("RADIX:SYNC_STATE");var eu=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),ec=d.forwardRef((e,t)=>(0,x.jsx)(Y.span,{...e,ref:t,style:{...eu,...e.style}}));ec.displayName="VisuallyHidden";var ed="ToastProvider",[eh,ep,ef]=function(e){let t=e+"CollectionProvider",[i,r]=V(t),[n,o]=i(t,{collectionRef:{current:null},itemMap:new Map}),s=e=>{let{scope:t,children:i}=e,r=d.useRef(null),o=d.useRef(new Map).current;return(0,x.jsx)(n,{scope:t,itemMap:o,collectionRef:r,children:i})};s.displayName=t;let a=e+"CollectionSlot",l=O(a),u=d.forwardRef((e,t)=>{let{scope:i,children:r}=e,n=M(t,o(a,i).collectionRef);return(0,x.jsx)(l,{ref:n,children:r})});u.displayName=a;let c=e+"CollectionItemSlot",h="data-radix-collection-item",p=O(c),f=d.forwardRef((e,t)=>{let{scope:i,children:r,...n}=e,s=d.useRef(null),a=M(t,s),l=o(c,i);return d.useEffect(()=>(l.itemMap.set(s,{ref:s,...n}),()=>void l.itemMap.delete(s))),(0,x.jsx)(p,{...{[h]:""},ref:a,children:r})});return f.displayName=c,[{Provider:s,Slot:u,ItemSlot:f},function(t){let i=o(e+"CollectionConsumer",t);return d.useCallback(()=>{let e=i.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(h,"]")));return Array.from(i.itemMap.values()).sort((e,i)=>t.indexOf(e.ref.current)-t.indexOf(i.ref.current))},[i.collectionRef,i.itemMap])},r]}("Toast"),[em,ev]=V("Toast",[ef]),[eg,ey]=em(ed),ew=e=>{let{__scopeToast:t,label:i="Notification",duration:r=5e3,swipeDirection:n="right",swipeThreshold:o=50,announcerContainer:s,children:a}=e,[l,u]=d.useState(null),[c,h]=d.useState(0),p=d.useRef(!1),f=d.useRef(!1);return i.trim()||console.error("Invalid prop `label` supplied to `".concat(ed,"`. Expected non-empty `string`.")),(0,x.jsx)(eh.Provider,{scope:t,children:(0,x.jsx)(eg,{scope:t,label:i,duration:r,swipeDirection:n,swipeThreshold:o,toastCount:c,viewport:l,onViewportChange:u,onToastAdd:d.useCallback(()=>h(e=>e+1),[]),onToastRemove:d.useCallback(()=>h(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:f,announcerContainer:s,children:a})})};ew.displayName=ed;var ex="ToastViewport",eb=["F8"],eE="toast.viewportPause",eC="toast.viewportResume",ek=d.forwardRef((e,t)=>{let{__scopeToast:i,hotkey:r=eb,label:n="Notifications ({hotkey})",...o}=e,s=ey(ex,i),a=ep(i),l=d.useRef(null),u=d.useRef(null),c=d.useRef(null),h=d.useRef(null),p=M(t,h,s.onViewportChange),f=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),m=s.toastCount>0;d.useEffect(()=>{let e=e=>{var t;0!==r.length&&r.every(t=>e[t]||e.code===t)&&(null==(t=h.current)||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[r]),d.useEffect(()=>{let e=l.current,t=h.current;if(m&&e&&t){let i=()=>{if(!s.isClosePausedRef.current){let e=new CustomEvent(eE);t.dispatchEvent(e),s.isClosePausedRef.current=!0}},r=()=>{if(s.isClosePausedRef.current){let e=new CustomEvent(eC);t.dispatchEvent(e),s.isClosePausedRef.current=!1}},n=t=>{e.contains(t.relatedTarget)||r()},o=()=>{e.contains(document.activeElement)||r()};return e.addEventListener("focusin",i),e.addEventListener("focusout",n),e.addEventListener("pointermove",i),e.addEventListener("pointerleave",o),window.addEventListener("blur",i),window.addEventListener("focus",r),()=>{e.removeEventListener("focusin",i),e.removeEventListener("focusout",n),e.removeEventListener("pointermove",i),e.removeEventListener("pointerleave",o),window.removeEventListener("blur",i),window.removeEventListener("focus",r)}}},[m,s.isClosePausedRef]);let v=d.useCallback(e=>{let{tabbingDirection:t}=e,i=a().map(e=>{let i=e.ref.current,r=[i,...function(e){let t=[],i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;i.nextNode();)t.push(i.currentNode);return t}(i)];return"forwards"===t?r:r.reverse()});return("forwards"===t?i.reverse():i).flat()},[a]);return d.useEffect(()=>{let e=h.current;if(e){let t=t=>{let i=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!i){var r,n,o;let i=document.activeElement,s=t.shiftKey;if(t.target===e&&s){null==(r=u.current)||r.focus();return}let a=v({tabbingDirection:s?"backwards":"forwards"}),l=a.findIndex(e=>e===i);eF(a.slice(l+1))?t.preventDefault():s?null==(n=u.current)||n.focus():null==(o=c.current)||o.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[a,v]),(0,x.jsxs)(J,{ref:l,role:"region","aria-label":n.replace("{hotkey}",f),tabIndex:-1,style:{pointerEvents:m?void 0:"none"},children:[m&&(0,x.jsx)(eP,{ref:u,onFocusFromOutsideViewport:()=>{eF(v({tabbingDirection:"forwards"}))}}),(0,x.jsx)(eh.Slot,{scope:i,children:(0,x.jsx)(Y.ol,{tabIndex:-1,...o,ref:p})}),m&&(0,x.jsx)(eP,{ref:c,onFocusFromOutsideViewport:()=>{eF(v({tabbingDirection:"backwards"}))}})]})});ek.displayName=ex;var eT="ToastFocusProxy",eP=d.forwardRef((e,t)=>{let{__scopeToast:i,onFocusFromOutsideViewport:r,...n}=e,o=ey(eT,i);return(0,x.jsx)(ec,{tabIndex:0,...n,ref:t,style:{position:"fixed"},onFocus:e=>{var t;let i=e.relatedTarget;(null==(t=o.viewport)?void 0:t.contains(i))||r()}})});eP.displayName=eT;var eS="Toast";d.forwardRef((e,t)=>{let{forceMount:i,open:r,defaultOpen:n,onOpenChange:o,...s}=e,[a,l]=el({prop:r,defaultProp:null==n||n,onChange:o,caller:eS});return(0,x.jsx)(en,{present:i||a,children:(0,x.jsx)(eR,{open:a,...s,ref:t,onClose:()=>l(!1),onPause:Z(e.onPause),onResume:Z(e.onResume),onSwipeStart:A(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:A(e.onSwipeMove,e=>{let{x:t,y:i}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y","".concat(i,"px"))}),onSwipeCancel:A(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:A(e.onSwipeEnd,e=>{let{x:t,y:i}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y","".concat(i,"px")),l(!1)})})})}).displayName=eS;var[ej,eA]=em(eS,{onClose(){}}),eR=d.forwardRef((e,t)=>{let{__scopeToast:i,type:r="foreground",duration:n,open:o,onClose:s,onEscapeKeyDown:a,onPause:l,onResume:u,onSwipeStart:c,onSwipeMove:h,onSwipeCancel:p,onSwipeEnd:f,...m}=e,v=ey(eS,i),[g,y]=d.useState(null),w=M(t,e=>y(e)),b=d.useRef(null),E=d.useRef(null),C=n||v.duration,k=d.useRef(0),T=d.useRef(C),P=d.useRef(0),{onToastAdd:S,onToastRemove:R}=v,D=Z(()=>{var e;(null==g?void 0:g.contains(document.activeElement))&&(null==(e=v.viewport)||e.focus()),s()}),L=d.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(P.current),k.current=new Date().getTime(),P.current=window.setTimeout(D,e))},[D]);d.useEffect(()=>{let e=v.viewport;if(e){let t=()=>{L(T.current),null==u||u()},i=()=>{let e=new Date().getTime()-k.current;T.current=T.current-e,window.clearTimeout(P.current),null==l||l()};return e.addEventListener(eE,i),e.addEventListener(eC,t),()=>{e.removeEventListener(eE,i),e.removeEventListener(eC,t)}}},[v.viewport,C,l,u,L]),d.useEffect(()=>{o&&!v.isClosePausedRef.current&&L(C)},[o,C,v.isClosePausedRef,L]),d.useEffect(()=>(S(),()=>R()),[S,R]);let N=d.useMemo(()=>g?function e(t){let i=[];return Array.from(t.childNodes).forEach(t=>{var r;if(t.nodeType===t.TEXT_NODE&&t.textContent&&i.push(t.textContent),(r=t).nodeType===r.ELEMENT_NODE){let r=t.ariaHidden||t.hidden||"none"===t.style.display,n=""===t.dataset.radixToastAnnounceExclude;if(!r)if(n){let e=t.dataset.radixToastAnnounceAlt;e&&i.push(e)}else i.push(...e(t))}}),i}(g):null,[g]);return v.viewport?(0,x.jsxs)(x.Fragment,{children:[N&&(0,x.jsx)(eM,{__scopeToast:i,role:"status","aria-live":"foreground"===r?"assertive":"polite",children:N}),(0,x.jsx)(ej,{scope:i,onClose:D,children:j.createPortal((0,x.jsx)(eh.ItemSlot,{scope:i,children:(0,x.jsx)(G,{asChild:!0,onEscapeKeyDown:A(a,()=>{v.isFocusedToastEscapeKeyDownRef.current||D(),v.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,x.jsx)(Y.li,{tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":v.swipeDirection,...m,ref:w,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:A(e.onKeyDown,e=>{"Escape"===e.key&&(null==a||a(e.nativeEvent),e.nativeEvent.defaultPrevented||(v.isFocusedToastEscapeKeyDownRef.current=!0,D()))}),onPointerDown:A(e.onPointerDown,e=>{0===e.button&&(b.current={x:e.clientX,y:e.clientY})}),onPointerMove:A(e.onPointerMove,e=>{if(!b.current)return;let t=e.clientX-b.current.x,i=e.clientY-b.current.y,r=!!E.current,n=["left","right"].includes(v.swipeDirection),o=["left","up"].includes(v.swipeDirection)?Math.min:Math.max,s=n?o(0,t):0,a=n?0:o(0,i),l="touch"===e.pointerType?10:2,u={x:s,y:a},d={originalEvent:e,delta:u};r?(E.current=u,eO("toast.swipeMove",h,d,{discrete:!1})):eI(u,v.swipeDirection,l)?(E.current=u,eO("toast.swipeStart",c,d,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>l||Math.abs(i)>l)&&(b.current=null)}),onPointerUp:A(e.onPointerUp,e=>{let t=E.current,i=e.target;if(i.hasPointerCapture(e.pointerId)&&i.releasePointerCapture(e.pointerId),E.current=null,b.current=null,t){let i=e.currentTarget,r={originalEvent:e,delta:t};eI(t,v.swipeDirection,v.swipeThreshold)?eO("toast.swipeEnd",f,r,{discrete:!0}):eO("toast.swipeCancel",p,r,{discrete:!0}),i.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),v.viewport)})]}):null}),eM=e=>{let{__scopeToast:t,children:i,...r}=e,n=ey(eS,t),[o,s]=d.useState(!1),[a,l]=d.useState(!1);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=Z(e);ei(()=>{let e=0,i=0;return e=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(i)}},[t])}(()=>s(!0)),d.useEffect(()=>{let e=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(e)},[]),a?null:(0,x.jsx)(er,{asChild:!0,container:n.announcerContainer||void 0,children:(0,x.jsx)(ec,{...r,children:o&&(0,x.jsxs)(x.Fragment,{children:[n.label," ",i]})})})};d.forwardRef((e,t)=>{let{__scopeToast:i,...r}=e;return(0,x.jsx)(Y.div,{...r,ref:t})}).displayName="ToastTitle",d.forwardRef((e,t)=>{let{__scopeToast:i,...r}=e;return(0,x.jsx)(Y.div,{...r,ref:t})}).displayName="ToastDescription";var eD="ToastAction";d.forwardRef((e,t)=>{let{altText:i,...r}=e;return i.trim()?(0,x.jsx)(eV,{altText:i,asChild:!0,children:(0,x.jsx)(eN,{...r,ref:t})}):(console.error("Invalid prop `altText` supplied to `".concat(eD,"`. Expected non-empty `string`.")),null)}).displayName=eD;var eL="ToastClose",eN=d.forwardRef((e,t)=>{let{__scopeToast:i,...r}=e,n=eA(eL,i);return(0,x.jsx)(eV,{asChild:!0,children:(0,x.jsx)(Y.button,{type:"button",...r,ref:t,onClick:A(e.onClick,n.onClose)})})});eN.displayName=eL;var eV=d.forwardRef((e,t)=>{let{__scopeToast:i,altText:r,...n}=e;return(0,x.jsx)(Y.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...n,ref:t})});function eO(e,t,i,r){let{discrete:n}=r,o=i.originalEvent.currentTarget,s=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:i});t&&o.addEventListener(e,t,{once:!0}),n?q(o,s):o.dispatchEvent(s)}var eI=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=Math.abs(e.x),n=Math.abs(e.y),o=r>n;return"left"===t||"right"===t?o&&r>i:!o&&n>i};function eF(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var eW=i(3247);function ez(e){return null!==e&&"object"==typeof e&&"function"==typeof e.start}let eB=e=>Array.isArray(e);function e_(e,t){if(!Array.isArray(t))return!1;let i=t.length;if(i!==e.length)return!1;for(let r=0;r<i;r++)if(t[r]!==e[r])return!1;return!0}function eU(e){return"string"==typeof e||Array.isArray(e)}function e$(e){let t=[{},{}];return null==e||e.values.forEach((e,i)=>{t[0][i]=e.get(),t[1][i]=e.getVelocity()}),t}function eH(e,t,i,r){if("function"==typeof t){let[n,o]=e$(r);t=t(void 0!==i?i:e.custom,n,o)}if("string"==typeof t&&(t=e.variants&&e.variants[t]),"function"==typeof t){let[n,o]=e$(r);t=t(void 0!==i?i:e.custom,n,o)}return t}function eK(e,t,i){let r=e.getProps();return eH(r,t,void 0!==i?i:r.custom,e)}let eY=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],eq=["initial",...eY];function eZ(e){let t;return()=>(void 0===t&&(t=e()),t)}let eX=eZ(()=>void 0!==window.ScrollTimeline);class eQ{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=t}attachTimeline(e,t){let i=this.animations.map(i=>eX()&&i.attachTimeline?i.attachTimeline(e):"function"==typeof t?t(i):void 0);return()=>{i.forEach((e,t)=>{e&&e(),this.animations[t].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class eG extends eQ{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function eJ(e,t){return e?e[t]||e.default||e:void 0}function e0(e){let t=0,i=e.next(t);for(;!i.done&&t<2e4;)t+=50,i=e.next(t);return t>=2e4?1/0:t}function e1(e){return"function"==typeof e}function e2(e,t){e.timeline=t,e.onfinish=null}let e5=e=>Array.isArray(e)&&"number"==typeof e[0],e6={linearEasing:void 0},e8=function(e,t){let i=eZ(e);return()=>{var e;return null!=(e=e6[t])?e:i()}}(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(e){return!1}return!0},"linearEasing"),e3=(e,t,i)=>{let r=t-e;return 0===r?1:(i-e)/r},e7=(e,t,i=10)=>{let r="",n=Math.max(Math.round(t/i),2);for(let t=0;t<n;t++)r+=e(e3(0,n-1,t))+", ";return`linear(${r.substring(0,r.length-2)})`},e9=([e,t,i,r])=>`cubic-bezier(${e}, ${t}, ${i}, ${r})`,e4={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:e9([0,.65,.55,1]),circOut:e9([.55,0,1,.45]),backIn:e9([.31,.01,.66,-.59]),backOut:e9([.33,1.53,.69,.99])},te={x:!1,y:!1};function tt(e,t){let i=function(e,t,i){if(e instanceof Element)return[e];if("string"==typeof e){let t=document.querySelectorAll(e);return t?Array.from(t):[]}return Array.from(e)}(e),r=new AbortController;return[i,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function ti(e){return t=>{"touch"===t.pointerType||te.x||te.y||e(t)}}let tr=(e,t)=>!!t&&(e===t||tr(e,t.parentElement)),tn=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:!1!==e.isPrimary,to=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]),ts=new WeakSet;function ta(e){return t=>{"Enter"===t.key&&e(t)}}function tl(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function tu(e){return tn(e)&&!(te.x||te.y)}let tc=e=>1e3*e,td=e=>e,th=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],tp=new Set(th),tf=new Set(["width","height","top","left","right","bottom",...th]),tm=e=>eB(e)?e[e.length-1]||0:e,tv={skipAnimations:!1,useManualTiming:!1},tg=["read","resolveKeyframes","update","preRender","render","postRender"];function ty(e,t){let i=!1,r=!0,n={delta:0,timestamp:0,isProcessing:!1},o=()=>i=!0,s=tg.reduce((e,t)=>(e[t]=function(e){let t=new Set,i=new Set,r=!1,n=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1};function a(t){o.has(t)&&(l.schedule(t),e()),t(s)}let l={schedule:(e,n=!1,s=!1)=>{let a=s&&r?t:i;return n&&o.add(e),a.has(e)||a.add(e),e},cancel:e=>{i.delete(e),o.delete(e)},process:e=>{if(s=e,r){n=!0;return}r=!0,[t,i]=[i,t],t.forEach(a),t.clear(),r=!1,n&&(n=!1,l.process(e))}};return l}(o),e),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:d,postRender:h}=s,p=()=>{let o=tv.useManualTiming?n.timestamp:performance.now();i=!1,n.delta=r?1e3/60:Math.max(Math.min(o-n.timestamp,40),1),n.timestamp=o,n.isProcessing=!0,a.process(n),l.process(n),u.process(n),c.process(n),d.process(n),h.process(n),n.isProcessing=!1,i&&t&&(r=!1,e(p))};return{schedule:tg.reduce((t,o)=>{let a=s[o];return t[o]=(t,o=!1,s=!1)=>(!i&&(i=!0,r=!0,n.isProcessing||e(p)),a.schedule(t,o,s)),t},{}),cancel:e=>{for(let t=0;t<tg.length;t++)s[tg[t]].cancel(e)},state:n,steps:s}}let{schedule:tw,cancel:tx,state:tb,steps:tE}=ty("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:td,!0);function tC(){r=void 0}let tk={now:()=>(void 0===r&&tk.set(tb.isProcessing||tv.useManualTiming?tb.timestamp:performance.now()),r),set:e=>{r=e,queueMicrotask(tC)}};function tT(e,t){-1===e.indexOf(t)&&e.push(t)}function tP(e,t){let i=e.indexOf(t);i>-1&&e.splice(i,1)}class tS{constructor(){this.subscriptions=[]}add(e){return tT(this.subscriptions,e),()=>tP(this.subscriptions,e)}notify(e,t,i){let r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,i);else for(let n=0;n<r;n++){let r=this.subscriptions[n];r&&r(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}let tj={current:void 0};class tA{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(e,t=!0)=>{let i=tk.now();this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),t&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=tk.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=!isNaN(parseFloat(this.current)))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new tS);let i=this.events[e].add(t);return"change"===e?()=>{i(),tw.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return tj.current&&tj.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){var e;let t=tk.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||t-this.updatedAt>30)return 0;let i=Math.min(this.updatedAt-this.prevUpdatedAt,30);return e=parseFloat(this.current)-parseFloat(this.prevFrameValue),i?1e3/i*e:0}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function tR(e,t){return new tA(e,t)}let tM=e=>!!(e&&e.getVelocity);function tD(e,t){let i=e.getValue("willChange");if(tM(i)&&i.add)return i.add(t)}let tL=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),tN="data-"+tL("framerAppearId"),tV={current:!1},tO=(e,t,i)=>(((1-3*i+3*t)*e+(3*i-6*t))*e+3*t)*e;function tI(e,t,i,r){return e===t&&i===r?td:n=>0===n||1===n?n:tO(function(e,t,i,r,n){let o,s,a=0;do(o=tO(s=t+(i-t)/2,r,n)-e)>0?i=s:t=s;while(Math.abs(o)>1e-7&&++a<12);return s}(n,0,1,e,i),t,r)}let tF=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,tW=e=>t=>1-e(1-t),tz=tI(.33,1.53,.69,.99),tB=tW(tz),t_=tF(tB),tU=e=>(e*=2)<1?.5*tB(e):.5*(2-Math.pow(2,-10*(e-1))),t$=e=>1-Math.sin(Math.acos(e)),tH=tW(t$),tK=tF(t$),tY=e=>/^0[^.\s]+$/u.test(e),tq=(e,t,i)=>i>t?t:i<e?e:i,tZ={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},tX={...tZ,transform:e=>tq(0,1,e)},tQ={...tZ,default:1},tG=e=>Math.round(1e5*e)/1e5,tJ=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,t0=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,t1=(e,t)=>i=>!!("string"==typeof i&&t0.test(i)&&i.startsWith(e)||t&&null!=i&&Object.prototype.hasOwnProperty.call(i,t)),t2=(e,t,i)=>r=>{if("string"!=typeof r)return r;let[n,o,s,a]=r.match(tJ);return{[e]:parseFloat(n),[t]:parseFloat(o),[i]:parseFloat(s),alpha:void 0!==a?parseFloat(a):1}},t5={...tZ,transform:e=>Math.round(tq(0,255,e))},t6={test:t1("rgb","red"),parse:t2("red","green","blue"),transform:({red:e,green:t,blue:i,alpha:r=1})=>"rgba("+t5.transform(e)+", "+t5.transform(t)+", "+t5.transform(i)+", "+tG(tX.transform(r))+")"},t8={test:t1("#"),parse:function(e){let t="",i="",r="",n="";return e.length>5?(t=e.substring(1,3),i=e.substring(3,5),r=e.substring(5,7),n=e.substring(7,9)):(t=e.substring(1,2),i=e.substring(2,3),r=e.substring(3,4),n=e.substring(4,5),t+=t,i+=i,r+=r,n+=n),{red:parseInt(t,16),green:parseInt(i,16),blue:parseInt(r,16),alpha:n?parseInt(n,16)/255:1}},transform:t6.transform},t3=e=>({test:t=>"string"==typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),t7=t3("deg"),t9=t3("%"),t4=t3("px"),ie=t3("vh"),it=t3("vw"),ii={...t9,parse:e=>t9.parse(e)/100,transform:e=>t9.transform(100*e)},ir={test:t1("hsl","hue"),parse:t2("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:i,alpha:r=1})=>"hsla("+Math.round(e)+", "+t9.transform(tG(t))+", "+t9.transform(tG(i))+", "+tG(tX.transform(r))+")"},io={test:e=>t6.test(e)||t8.test(e)||ir.test(e),parse:e=>t6.test(e)?t6.parse(e):ir.test(e)?ir.parse(e):t8.parse(e),transform:e=>"string"==typeof e?e:e.hasOwnProperty("red")?t6.transform(e):ir.transform(e)},is=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,ia="number",il="color",iu=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ic(e){let t=e.toString(),i=[],r={color:[],number:[],var:[]},n=[],o=0,s=t.replace(iu,e=>(io.test(e)?(r.color.push(o),n.push(il),i.push(io.parse(e))):e.startsWith("var(")?(r.var.push(o),n.push("var"),i.push(e)):(r.number.push(o),n.push(ia),i.push(parseFloat(e))),++o,"${}")).split("${}");return{values:i,split:s,indexes:r,types:n}}function id(e){return ic(e).values}function ih(e){let{split:t,types:i}=ic(e),r=t.length;return e=>{let n="";for(let o=0;o<r;o++)if(n+=t[o],void 0!==e[o]){let t=i[o];t===ia?n+=tG(e[o]):t===il?n+=io.transform(e[o]):n+=e[o]}return n}}let ip=e=>"number"==typeof e?0:e,im={test:function(e){var t,i;return isNaN(e)&&"string"==typeof e&&((null==(t=e.match(tJ))?void 0:t.length)||0)+((null==(i=e.match(is))?void 0:i.length)||0)>0},parse:id,createTransformer:ih,getAnimatableNone:function(e){let t=id(e);return ih(e)(t.map(ip))}},iv=new Set(["brightness","contrast","saturate","opacity"]);function ig(e){let[t,i]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;let[r]=i.match(tJ)||[];if(!r)return e;let n=i.replace(r,""),o=+!!iv.has(t);return r!==i&&(o*=100),t+"("+o+n+")"}let iy=/\b([a-z-]*)\(.*?\)/gu,iw={...im,getAnimatableNone:e=>{let t=e.match(iy);return t?t.map(ig).join(" "):e}},ix={...tZ,transform:Math.round},ib={borderWidth:t4,borderTopWidth:t4,borderRightWidth:t4,borderBottomWidth:t4,borderLeftWidth:t4,borderRadius:t4,radius:t4,borderTopLeftRadius:t4,borderTopRightRadius:t4,borderBottomRightRadius:t4,borderBottomLeftRadius:t4,width:t4,maxWidth:t4,height:t4,maxHeight:t4,top:t4,right:t4,bottom:t4,left:t4,padding:t4,paddingTop:t4,paddingRight:t4,paddingBottom:t4,paddingLeft:t4,margin:t4,marginTop:t4,marginRight:t4,marginBottom:t4,marginLeft:t4,backgroundPositionX:t4,backgroundPositionY:t4,rotate:t7,rotateX:t7,rotateY:t7,rotateZ:t7,scale:tQ,scaleX:tQ,scaleY:tQ,scaleZ:tQ,skew:t7,skewX:t7,skewY:t7,distance:t4,translateX:t4,translateY:t4,translateZ:t4,x:t4,y:t4,z:t4,perspective:t4,transformPerspective:t4,opacity:tX,originX:ii,originY:ii,originZ:t4,zIndex:ix,size:t4,fillOpacity:tX,strokeOpacity:tX,numOctaves:ix},iE={...ib,color:io,backgroundColor:io,outlineColor:io,fill:io,stroke:io,borderColor:io,borderTopColor:io,borderRightColor:io,borderBottomColor:io,borderLeftColor:io,filter:iw,WebkitFilter:iw},iC=e=>iE[e];function ik(e,t){let i=iC(e);return i!==iw&&(i=im),i.getAnimatableNone?i.getAnimatableNone(t):void 0}let iT=new Set(["auto","none","0"]),iP=e=>e===tZ||e===t4,iS=(e,t)=>parseFloat(e.split(", ")[t]),ij=(e,t)=>(i,{transform:r})=>{if("none"===r||!r)return 0;let n=r.match(/^matrix3d\((.+)\)$/u);if(n)return iS(n[1],t);{let t=r.match(/^matrix\((.+)\)$/u);return t?iS(t[1],e):0}},iA=new Set(["x","y","z"]),iR=th.filter(e=>!iA.has(e)),iM={width:({x:e},{paddingLeft:t="0",paddingRight:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),height:({y:e},{paddingTop:t="0",paddingBottom:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:ij(4,13),y:ij(5,14)};iM.translateX=iM.x,iM.translateY=iM.y;let iD=new Set,iL=!1,iN=!1;function iV(){if(iN){let e=Array.from(iD).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),i=new Map;t.forEach(e=>{let t=function(e){let t=[];return iR.forEach(i=>{let r=e.getValue(i);void 0!==r&&(t.push([i,r.get()]),r.set(+!!i.startsWith("scale")))}),t}(e);t.length&&(i.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=i.get(e);t&&t.forEach(([t,i])=>{var r;null==(r=e.getValue(t))||r.set(i)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)})}iN=!1,iL=!1,iD.forEach(e=>e.complete()),iD.clear()}function iO(){iD.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(iN=!0)})}class iI{constructor(e,t,i,r,n,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=r,this.element=n,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(iD.add(this),iL||(iL=!0,tw.read(iO),tw.resolveKeyframes(iV))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:i,motionValue:r}=this;for(let n=0;n<e.length;n++)if(null===e[n])if(0===n){let n=null==r?void 0:r.get(),o=e[e.length-1];if(void 0!==n)e[0]=n;else if(i&&t){let r=i.readValue(t,o);null!=r&&(e[0]=r)}void 0===e[0]&&(e[0]=o),r&&void 0===n&&r.set(e[0])}else e[n]=e[n-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),iD.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,iD.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}let iF=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),iW=e=>t=>"string"==typeof t&&t.startsWith(e),iz=iW("--"),iB=iW("var(--"),i_=e=>!!iB(e)&&iU.test(e.split("/*")[0].trim()),iU=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,i$=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,iH=e=>t=>t.test(e),iK=[tZ,t4,t9,t7,it,ie,{test:e=>"auto"===e,parse:e=>e}],iY=e=>iK.find(iH(e));class iq extends iI{constructor(e,t,i,r,n){super(e,t,i,r,n,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let i=0;i<e.length;i++){let r=e[i];if("string"==typeof r&&i_(r=r.trim())){let n=function e(t,i,r=1){td(r<=4,`Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);let[n,o]=function(e){let t=i$.exec(e);if(!t)return[,];let[,i,r,n]=t;return[`--${null!=i?i:r}`,n]}(t);if(!n)return;let s=window.getComputedStyle(i).getPropertyValue(n);if(s){let e=s.trim();return iF(e)?parseFloat(e):e}return i_(o)?e(o,i,r+1):o}(r,t.current);void 0!==n&&(e[i]=n),i===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!tf.has(i)||2!==e.length)return;let[r,n]=e,o=iY(r),s=iY(n);if(o!==s)if(iP(o)&&iP(s))for(let t=0;t<e.length;t++){let i=e[t];"string"==typeof i&&(e[t]=parseFloat(i))}else this.needsMeasurement=!0}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,i=[];for(let t=0;t<e.length;t++){var r;("number"==typeof(r=e[t])?0===r:null===r||"none"===r||"0"===r||tY(r))&&i.push(t)}i.length&&function(e,t,i){let r,n=0;for(;n<e.length&&!r;){let t=e[n];"string"==typeof t&&!iT.has(t)&&ic(t).values.length&&(r=e[n]),n++}if(r&&i)for(let n of t)e[n]=ik(i,r)}(e,i,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;"height"===i&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=iM[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];void 0!==r&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;let{element:t,name:i,unresolvedKeyframes:r}=this;if(!t||!t.current)return;let n=t.getValue(i);n&&n.jump(this.measuredOrigin,!1);let o=r.length-1,s=r[o];r[o]=iM[i](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==s&&void 0===this.finalKeyframe&&(this.finalKeyframe=s),(null==(e=this.removedTransforms)?void 0:e.length)&&this.removedTransforms.forEach(([e,i])=>{t.getValue(e).set(i)}),this.resolveNoneKeyframes()}}let iZ=(e,t)=>"zIndex"!==t&&!!("number"==typeof e||Array.isArray(e)||"string"==typeof e&&(im.test(e)||"0"===e)&&!e.startsWith("url(")),iX=e=>null!==e;function iQ(e,{repeat:t,repeatType:i="loop"},r){let n=e.filter(iX),o=t&&"loop"!==i&&t%2==1?0:n.length-1;return o&&void 0!==r?r:n[o]}class iG{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:r=0,repeatDelay:n=0,repeatType:o="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=tk.now(),this.options={autoplay:e,delay:t,type:i,repeat:r,repeatDelay:n,repeatType:o,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||(iO(),iV()),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=tk.now(),this.hasAttemptedResolve=!0;let{name:i,type:r,velocity:n,delay:o,onComplete:s,onUpdate:a,isGenerator:l}=this.options;if(!l&&!function(e,t,i,r){let n=e[0];if(null===n)return!1;if("display"===t||"visibility"===t)return!0;let o=e[e.length-1],s=iZ(n,t),a=iZ(o,t);return td(s===a,`You are trying to animate ${t} from "${n}" to "${o}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${o} via the \`style\` property.`),!!s&&!!a&&(function(e){let t=e[0];if(1===e.length)return!0;for(let i=0;i<e.length;i++)if(e[i]!==t)return!0}(e)||("spring"===i||e1(i))&&r)}(e,i,r,n))if(tV.current||!o){a&&a(iQ(e,this.options,t)),s&&s(),this.resolveFinishedPromise();return}else this.options.duration=0;let u=this.initPlayback(e,t);!1!==u&&(this._resolved={keyframes:e,finalKeyframe:t,...u},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}let iJ=(e,t,i)=>e+(t-e)*i;function i0(e,t,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function i1(e,t){return i=>i>0?t:e}let i2=(e,t,i)=>{let r=e*e,n=i*(t*t-r)+r;return n<0?0:Math.sqrt(n)},i5=[t8,t6,ir];function i6(e){let t=i5.find(t=>t.test(e));if(td(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`),!t)return!1;let i=t.parse(e);return t===ir&&(i=function({hue:e,saturation:t,lightness:i,alpha:r}){e/=360,i/=100;let n=0,o=0,s=0;if(t/=100){let r=i<.5?i*(1+t):i+t-i*t,a=2*i-r;n=i0(a,r,e+1/3),o=i0(a,r,e),s=i0(a,r,e-1/3)}else n=o=s=i;return{red:Math.round(255*n),green:Math.round(255*o),blue:Math.round(255*s),alpha:r}}(i)),i}let i8=(e,t)=>{let i=i6(e),r=i6(t);if(!i||!r)return i1(e,t);let n={...i};return e=>(n.red=i2(i.red,r.red,e),n.green=i2(i.green,r.green,e),n.blue=i2(i.blue,r.blue,e),n.alpha=iJ(i.alpha,r.alpha,e),t6.transform(n))},i3=(e,t)=>i=>t(e(i)),i7=(...e)=>e.reduce(i3),i9=new Set(["none","hidden"]);function i4(e,t){return i=>iJ(e,t,i)}function re(e){return"number"==typeof e?i4:"string"==typeof e?i_(e)?i1:io.test(e)?i8:rr:Array.isArray(e)?rt:"object"==typeof e?io.test(e)?i8:ri:i1}function rt(e,t){let i=[...e],r=i.length,n=e.map((e,i)=>re(e)(e,t[i]));return e=>{for(let t=0;t<r;t++)i[t]=n[t](e);return i}}function ri(e,t){let i={...e,...t},r={};for(let n in i)void 0!==e[n]&&void 0!==t[n]&&(r[n]=re(e[n])(e[n],t[n]));return e=>{for(let t in r)i[t]=r[t](e);return i}}let rr=(e,t)=>{let i=im.createTransformer(t),r=ic(e),n=ic(t);return r.indexes.var.length===n.indexes.var.length&&r.indexes.color.length===n.indexes.color.length&&r.indexes.number.length>=n.indexes.number.length?i9.has(e)&&!n.values.length||i9.has(t)&&!r.values.length?function(e,t){return i9.has(e)?i=>i<=0?e:t:i=>i>=1?t:e}(e,t):i7(rt(function(e,t){var i;let r=[],n={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){let s=t.types[o],a=e.indexes[s][n[s]],l=null!=(i=e.values[a])?i:0;r[o]=l,n[s]++}return r}(r,n),n.values),i):(td(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),i1(e,t))};function rn(e,t,i){return"number"==typeof e&&"number"==typeof t&&"number"==typeof i?iJ(e,t,i):re(e)(e,t)}function ro(e,t,i){var r,n;let o=Math.max(t-5,0);return r=i-e(o),(n=t-o)?1e3/n*r:0}let rs={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function ra(e,t){return e*Math.sqrt(1-t*t)}let rl=["duration","bounce"],ru=["stiffness","damping","mass"];function rc(e,t){return t.some(t=>void 0!==e[t])}function rd(e=rs.visualDuration,t=rs.bounce){let i,r="object"!=typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e,{restSpeed:n,restDelta:o}=r,s=r.keyframes[0],a=r.keyframes[r.keyframes.length-1],l={done:!1,value:s},{stiffness:u,damping:c,mass:d,duration:h,velocity:p,isResolvedFromDuration:f}=function(e){let t={velocity:rs.velocity,stiffness:rs.stiffness,damping:rs.damping,mass:rs.mass,isResolvedFromDuration:!1,...e};if(!rc(e,ru)&&rc(e,rl))if(e.visualDuration){let i=2*Math.PI/(1.2*e.visualDuration),r=i*i,n=2*tq(.05,1,1-(e.bounce||0))*Math.sqrt(r);t={...t,mass:rs.mass,stiffness:r,damping:n}}else{let i=function({duration:e=rs.duration,bounce:t=rs.bounce,velocity:i=rs.velocity,mass:r=rs.mass}){let n,o;td(e<=tc(rs.maxDuration),"Spring duration must be 10 seconds or less");let s=1-t;s=tq(rs.minDamping,rs.maxDamping,s),e=tq(rs.minDuration,rs.maxDuration,e/1e3),s<1?(n=t=>{let r=t*s,n=r*e;return .001-(r-i)/ra(t,s)*Math.exp(-n)},o=t=>{let r=t*s*e,o=Math.pow(s,2)*Math.pow(t,2)*e,a=Math.exp(-r),l=ra(Math.pow(t,2),s);return(r*i+i-o)*a*(-n(t)+.001>0?-1:1)/l}):(n=t=>-.001+Math.exp(-t*e)*((t-i)*e+1),o=t=>e*e*(i-t)*Math.exp(-t*e));let a=function(e,t,i){let r=i;for(let i=1;i<12;i++)r-=e(r)/t(r);return r}(n,o,5/e);if(e=tc(e),isNaN(a))return{stiffness:rs.stiffness,damping:rs.damping,duration:e};{let t=Math.pow(a,2)*r;return{stiffness:t,damping:2*s*Math.sqrt(r*t),duration:e}}}(e);(t={...t,...i,mass:rs.mass}).isResolvedFromDuration=!0}return t}({...r,velocity:-((r.velocity||0)/1e3)}),m=p||0,v=c/(2*Math.sqrt(u*d)),g=a-s,y=Math.sqrt(u/d)/1e3,w=5>Math.abs(g);if(n||(n=w?rs.restSpeed.granular:rs.restSpeed.default),o||(o=w?rs.restDelta.granular:rs.restDelta.default),v<1){let e=ra(y,v);i=t=>a-Math.exp(-v*y*t)*((m+v*y*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}else if(1===v)i=e=>a-Math.exp(-y*e)*(g+(m+y*g)*e);else{let e=y*Math.sqrt(v*v-1);i=t=>{let i=Math.exp(-v*y*t),r=Math.min(e*t,300);return a-i*((m+v*y*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}let x={calculatedDuration:f&&h||null,next:e=>{let t=i(e);if(f)l.done=e>=h;else{let r=0;v<1&&(r=0===e?tc(m):ro(i,e,t));let s=Math.abs(a-t)<=o;l.done=Math.abs(r)<=n&&s}return l.value=l.done?a:t,l},toString:()=>{let e=Math.min(e0(x),2e4),t=e7(t=>x.next(e*t).value,e,30);return e+"ms "+t}};return x}function rh({keyframes:e,velocity:t=0,power:i=.8,timeConstant:r=325,bounceDamping:n=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){let d,h,p=e[0],f={done:!1,value:p},m=i*t,v=p+m,g=void 0===s?v:s(v);g!==v&&(m=g-p);let y=e=>-m*Math.exp(-e/r),w=e=>g+y(e),x=e=>{let t=y(e),i=w(e);f.done=Math.abs(t)<=u,f.value=f.done?g:i},b=e=>{let t;if(t=f.value,void 0!==a&&t<a||void 0!==l&&t>l){var i;d=e,h=rd({keyframes:[f.value,(i=f.value,void 0===a?l:void 0===l||Math.abs(a-i)<Math.abs(l-i)?a:l)],velocity:ro(w,e,f.value),damping:n,stiffness:o,restDelta:u,restSpeed:c})}};return b(0),{calculatedDuration:null,next:e=>{let t=!1;return(h||void 0!==d||(t=!0,x(e),b(e)),void 0!==d&&e>=d)?h.next(e-d):(t||x(e),f)}}}let rp=tI(.42,0,1,1),rf=tI(0,0,.58,1),rm=tI(.42,0,.58,1),rv={linear:td,easeIn:rp,easeInOut:rm,easeOut:rf,circIn:t$,circInOut:tK,circOut:tH,backIn:tB,backInOut:t_,backOut:tz,anticipate:tU},rg=e=>{if(e5(e)){td(4===e.length,"Cubic bezier arrays must contain four numerical values.");let[t,i,r,n]=e;return tI(t,i,r,n)}return"string"==typeof e?(td(void 0!==rv[e],`Invalid easing type '${e}'`),rv[e]):e};function ry({duration:e=300,keyframes:t,times:i,ease:r="easeInOut"}){var n;let o=Array.isArray(r)&&"number"!=typeof r[0]?r.map(rg):rg(r),s={done:!1,value:t[0]},a=function(e,t,{clamp:i=!0,ease:r,mixer:n}={}){let o=e.length;if(td(o===t.length,"Both input and output ranges must be the same length"),1===o)return()=>t[0];if(2===o&&t[0]===t[1])return()=>t[1];let s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());let a=function(e,t,i){let r=[],n=i||rn,o=e.length-1;for(let i=0;i<o;i++){let o=n(e[i],e[i+1]);t&&(o=i7(Array.isArray(t)?t[i]||td:t,o)),r.push(o)}return r}(t,r,n),l=a.length,u=i=>{if(s&&i<e[0])return t[0];let r=0;if(l>1)for(;r<e.length-2&&!(i<e[r+1]);r++);let n=e3(e[r],e[r+1],i);return a[r](n)};return i?t=>u(tq(e[0],e[o-1],t)):u}((n=i&&i.length===t.length?i:function(e){let t=[0];return!function(e,t){let i=e[e.length-1];for(let r=1;r<=t;r++){let n=e3(0,t,r);e.push(iJ(i,1,n))}}(t,e.length-1),t}(t),n.map(t=>t*e)),t,{ease:Array.isArray(o)?o:t.map(()=>o||rm).splice(0,t.length-1)});return{calculatedDuration:e,next:t=>(s.value=a(t),s.done=t>=e,s)}}let rw=e=>{let t=({timestamp:t})=>e(t);return{start:()=>tw.update(t,!0),stop:()=>tx(t),now:()=>tb.isProcessing?tb.timestamp:tk.now()}},rx={decay:rh,inertia:rh,tween:ry,keyframes:ry,spring:rd},rb=e=>e/100;class rE extends iG{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();let{onStop:e}=this.options;e&&e()};let{name:t,motionValue:i,element:r,keyframes:n}=this.options,o=(null==r?void 0:r.KeyframeResolver)||iI,s=(e,t)=>this.onKeyframesResolved(e,t);this.resolver=new o(n,s,t,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){let t,i,{type:r="keyframes",repeat:n=0,repeatDelay:o=0,repeatType:s,velocity:a=0}=this.options,l=e1(r)?r:rx[r]||ry;l!==ry&&"number"!=typeof e[0]&&(t=i7(rb,rn(e[0],e[1])),e=[0,100]);let u=l({...this.options,keyframes:e});"mirror"===s&&(i=l({...this.options,keyframes:[...e].reverse(),velocity:-a})),null===u.calculatedDuration&&(u.calculatedDuration=e0(u));let{calculatedDuration:c}=u,d=c+o;return{generator:u,mirroredGenerator:i,mapPercentToKeyframes:t,calculatedDuration:c,resolvedDuration:d,totalDuration:d*(n+1)-o}}onPostResolved(){let{autoplay:e=!0}=this.options;this.play(),"paused"!==this.pendingPlayState&&e?this.state=this.pendingPlayState:this.pause()}tick(e,t=!1){let{resolved:i}=this;if(!i){let{keyframes:e}=this.options;return{done:!0,value:e[e.length-1]}}let{finalKeyframe:r,generator:n,mirroredGenerator:o,mapPercentToKeyframes:s,keyframes:a,calculatedDuration:l,totalDuration:u,resolvedDuration:c}=i;if(null===this.startTime)return n.next(0);let{delay:d,repeat:h,repeatType:p,repeatDelay:f,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),t?this.currentTime=e:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;let v=this.currentTime-d*(this.speed>=0?1:-1),g=this.speed>=0?v<0:v>u;this.currentTime=Math.max(v,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=u);let y=this.currentTime,w=n;if(h){let e=Math.min(this.currentTime,u)/c,t=Math.floor(e),i=e%1;!i&&e>=1&&(i=1),1===i&&t--,(t=Math.min(t,h+1))%2&&("reverse"===p?(i=1-i,f&&(i-=f/c)):"mirror"===p&&(w=o)),y=tq(0,1,i)*c}let x=g?{done:!1,value:a[0]}:w.next(y);s&&(x.value=s(x.value));let{done:b}=x;g||null===l||(b=this.speed>=0?this.currentTime>=u:this.currentTime<=0);let E=null===this.holdTime&&("finished"===this.state||"running"===this.state&&b);return E&&void 0!==r&&(x.value=iQ(a,this.options,r)),m&&m(x.value),E&&this.finish(),x}get duration(){let{resolved:e}=this;return e?e.calculatedDuration/1e3:0}get time(){return this.currentTime/1e3}set time(e){e=tc(e),this.currentTime=e,null!==this.holdTime||0===this.speed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=this.currentTime/1e3)}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;let{driver:e=rw,onPlay:t,startTime:i}=this.options;this.driver||(this.driver=e(e=>this.tick(e))),t&&t();let r=this.driver.now();null!==this.holdTime?this.startTime=r-this.holdTime:this.startTime?"finished"===this.state&&(this.startTime=r):this.startTime=null!=i?i:this.calcStartTime(),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=null!=(e=this.currentTime)?e:0}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";let{onComplete:e}=this.options;e&&e()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}let rC=new Set(["opacity","clipPath","filter","transform"]),rk=eZ(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),rT={anticipate:tU,backInOut:t_,circInOut:tK};class rP extends iG{constructor(e){super(e);let{name:t,motionValue:i,element:r,keyframes:n}=this.options;this.resolver=new iq(n,(e,t)=>this.onKeyframesResolved(e,t),t,i,r),this.resolver.scheduleResolve()}initPlayback(e,t){var i;let{duration:r=300,times:n,ease:o,type:s,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if("string"==typeof o&&e8()&&o in rT&&(o=rT[o]),e1((i=this.options).type)||"spring"===i.type||!function e(t){return!!("function"==typeof t&&e8()||!t||"string"==typeof t&&(t in e4||e8())||e5(t)||Array.isArray(t)&&t.every(e))}(i.ease)){let{onComplete:t,onUpdate:i,motionValue:a,element:l,...u}=this.options,c=function(e,t){let i=new rE({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0}),r={done:!1,value:e[0]},n=[],o=0;for(;!r.done&&o<2e4;)n.push((r=i.sample(o)).value),o+=10;return{times:void 0,keyframes:n,duration:o-10,ease:"linear"}}(e,u);1===(e=c.keyframes).length&&(e[1]=e[0]),r=c.duration,n=c.times,o=c.ease,s="keyframes"}let c=function(e,t,i,{delay:r=0,duration:n=300,repeat:o=0,repeatType:s="loop",ease:a="easeInOut",times:l}={}){let u={[t]:i};l&&(u.offset=l);let c=function e(t,i){if(t)return"function"==typeof t&&e8()?e7(t,i):e5(t)?e9(t):Array.isArray(t)?t.map(t=>e(t,i)||e4.easeOut):e4[t]}(a,n);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:n,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:"reverse"===s?"alternate":"normal"})}(a.owner.current,l,e,{...this.options,duration:r,times:n,ease:o});return c.startTime=null!=u?u:this.calcStartTime(),this.pendingTimeline?(e2(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{let{onComplete:i}=this.options;a.set(iQ(e,this.options,t)),i&&i(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:r,times:n,type:s,ease:o,keyframes:e}}get duration(){let{resolved:e}=this;if(!e)return 0;let{duration:t}=e;return t/1e3}get time(){let{resolved:e}=this;if(!e)return 0;let{animation:t}=e;return(t.currentTime||0)/1e3}set time(e){let{resolved:t}=this;if(!t)return;let{animation:i}=t;i.currentTime=tc(e)}get speed(){let{resolved:e}=this;if(!e)return 1;let{animation:t}=e;return t.playbackRate}set speed(e){let{resolved:t}=this;if(!t)return;let{animation:i}=t;i.playbackRate=e}get state(){let{resolved:e}=this;if(!e)return"idle";let{animation:t}=e;return t.playState}get startTime(){let{resolved:e}=this;if(!e)return null;let{animation:t}=e;return t.startTime}attachTimeline(e){if(this._resolved){let{resolved:t}=this;if(!t)return td;let{animation:i}=t;e2(i,e)}else this.pendingTimeline=e;return td}play(){if(this.isStopped)return;let{resolved:e}=this;if(!e)return;let{animation:t}=e;"finished"===t.playState&&this.updateFinishedPromise(),t.play()}pause(){let{resolved:e}=this;if(!e)return;let{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.resolveFinishedPromise(),this.updateFinishedPromise();let{resolved:e}=this;if(!e)return;let{animation:t,keyframes:i,duration:r,type:n,ease:o,times:s}=e;if("idle"===t.playState||"finished"===t.playState)return;if(this.time){let{motionValue:e,onUpdate:t,onComplete:a,element:l,...u}=this.options,c=new rE({...u,keyframes:i,duration:r,type:n,ease:o,times:s,isGenerator:!0}),d=tc(this.time);e.setWithVelocity(c.sample(d-10).value,c.sample(d).value,10)}let{onStop:a}=this.options;a&&a(),this.cancel()}complete(){let{resolved:e}=this;e&&e.animation.finish()}cancel(){let{resolved:e}=this;e&&e.animation.cancel()}static supports(e){let{motionValue:t,name:i,repeatDelay:r,repeatType:n,damping:o,type:s}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;let{onUpdate:a,transformTemplate:l}=t.owner.getProps();return rk()&&i&&rC.has(i)&&!a&&!l&&!r&&"mirror"!==n&&0!==o&&"inertia"!==s}}let rS={type:"spring",stiffness:500,damping:25,restSpeed:10},rj={type:"keyframes",duration:.8},rA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},rR=(e,t,i,r={},n,o)=>s=>{let a=eJ(r,e)||{},l=a.delay||r.delay||0,{elapsed:u=0}=r;u-=tc(l);let c={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:e=>{t.set(e),a.onUpdate&&a.onUpdate(e)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:n};!function({when:e,delay:t,delayChildren:i,staggerChildren:r,staggerDirection:n,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}(a)&&(c={...c,...((e,{keyframes:t})=>t.length>2?rj:tp.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===t[1]?2*Math.sqrt(550):30,restSpeed:10}:rS:rA)(e,c)}),c.duration&&(c.duration=tc(c.duration)),c.repeatDelay&&(c.repeatDelay=tc(c.repeatDelay)),void 0!==c.from&&(c.keyframes[0]=c.from);let d=!1;if(!1!==c.type&&(0!==c.duration||c.repeatDelay)||(c.duration=0,0===c.delay&&(d=!0)),(tV.current||tv.skipAnimations)&&(d=!0,c.duration=0,c.delay=0),d&&!o&&void 0!==t.get()){let e=iQ(c.keyframes,a);if(void 0!==e)return tw.update(()=>{c.onUpdate(e),c.onComplete()}),new eG([])}return!o&&rP.supports(c)?new rP(c):new rE(c)};function rM(e,t,{delay:i=0,transitionOverride:r,type:n}={}){var o;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(s=r);let u=[],c=n&&e.animationState&&e.animationState.getState()[n];for(let t in l){let r=e.getValue(t,null!=(o=e.latestValues[t])?o:null),n=l[t];if(void 0===n||c&&function({protectedKeys:e,needsAnimating:t},i){let r=e.hasOwnProperty(i)&&!0!==t[i];return t[i]=!1,r}(c,t))continue;let a={delay:i,...eJ(s||{},t)},d=!1;if(window.MotionHandoffAnimation){let i=e.props[tN];if(i){let e=window.MotionHandoffAnimation(i,t,tw);null!==e&&(a.startTime=e,d=!0)}}tD(e,t),r.start(rR(t,r,n,e.shouldReduceMotion&&tf.has(t)?{type:!1}:a,e,d));let h=r.animation;h&&u.push(h)}return a&&Promise.all(u).then(()=>{tw.update(()=>{a&&function(e,t){let{transitionEnd:i={},transition:r={},...n}=eK(e,t)||{};for(let t in n={...n,...i}){let i=tm(n[t]);e.hasValue(t)?e.getValue(t).set(i):e.addValue(t,tR(i))}}(e,a)})}),u}function rD(e,t,i={}){var r;let n=eK(e,t,"exit"===i.type?null==(r=e.presenceContext)?void 0:r.custom:void 0),{transition:o=e.getDefaultTransition()||{}}=n||{};i.transitionOverride&&(o=i.transitionOverride);let s=n?()=>Promise.all(rM(e,n,i)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:n=0,staggerChildren:s,staggerDirection:a}=o;return function(e,t,i=0,r=0,n=1,o){let s=[],a=(e.variantChildren.size-1)*r,l=1===n?(e=0)=>e*r:(e=0)=>a-e*r;return Array.from(e.variantChildren).sort(rL).forEach((e,r)=>{e.notify("AnimationStart",t),s.push(rD(e,t,{...o,delay:i+l(r)}).then(()=>e.notify("AnimationComplete",t)))}),Promise.all(s)}(e,t,n+r,s,a,i)}:()=>Promise.resolve(),{when:l}=o;if(!l)return Promise.all([s(),a(i.delay)]);{let[e,t]="beforeChildren"===l?[s,a]:[a,s];return e().then(()=>t())}}function rL(e,t){return e.sortNodePosition(t)}let rN=eq.length,rV=[...eY].reverse(),rO=eY.length;function rI(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function rF(){return{animate:rI(!0),whileInView:rI(),whileHover:rI(),whileTap:rI(),whileDrag:rI(),whileFocus:rI(),exit:rI()}}class rW{constructor(e){this.isMounted=!1,this.node=e}update(){}}class rz extends rW{constructor(e){super(e),e.animationState||(e.animationState=function(e){let t=t=>Promise.all(t.map(({animation:t,options:i})=>(function(e,t,i={}){let r;if(e.notify("AnimationStart",t),Array.isArray(t))r=Promise.all(t.map(t=>rD(e,t,i)));else if("string"==typeof t)r=rD(e,t,i);else{let n="function"==typeof t?eK(e,t,i.custom):t;r=Promise.all(rM(e,n,i))}return r.then(()=>{e.notify("AnimationComplete",t)})})(e,t,i))),i=rF(),r=!0,n=t=>(i,r)=>{var n;let o=eK(e,r,"exit"===t?null==(n=e.presenceContext)?void 0:n.custom:void 0);if(o){let{transition:e,transitionEnd:t,...r}=o;i={...i,...r,...t}}return i};function o(o){let{props:s}=e,a=function e(t){if(!t)return;if(!t.isControllingVariants){let i=t.parent&&e(t.parent)||{};return void 0!==t.props.initial&&(i.initial=t.props.initial),i}let i={};for(let e=0;e<rN;e++){let r=eq[e],n=t.props[r];(eU(n)||!1===n)&&(i[r]=n)}return i}(e.parent)||{},l=[],u=new Set,c={},d=1/0;for(let t=0;t<rO;t++){var h,p;let f=rV[t],m=i[f],v=void 0!==s[f]?s[f]:a[f],g=eU(v),y=f===o?m.isActive:null;!1===y&&(d=t);let w=v===a[f]&&v!==s[f]&&g;if(w&&r&&e.manuallyAnimateOnMount&&(w=!1),m.protectedKeys={...c},!m.isActive&&null===y||!v&&!m.prevProp||ez(v)||"boolean"==typeof v)continue;let x=(h=m.prevProp,"string"==typeof(p=v)?p!==h:!!Array.isArray(p)&&!e_(p,h)),b=x||f===o&&m.isActive&&!w&&g||t>d&&g,E=!1,C=Array.isArray(v)?v:[v],k=C.reduce(n(f),{});!1===y&&(k={});let{prevResolvedValues:T={}}=m,P={...T,...k},S=t=>{b=!0,u.has(t)&&(E=!0,u.delete(t)),m.needsAnimating[t]=!0;let i=e.getValue(t);i&&(i.liveStyle=!1)};for(let e in P){let t=k[e],i=T[e];if(!c.hasOwnProperty(e))(eB(t)&&eB(i)?e_(t,i):t===i)?void 0!==t&&u.has(e)?S(e):m.protectedKeys[e]=!0:null!=t?S(e):u.add(e)}m.prevProp=v,m.prevResolvedValues=k,m.isActive&&(c={...c,...k}),r&&e.blockInitialAnimation&&(b=!1);let j=!(w&&x)||E;b&&j&&l.push(...C.map(e=>({animation:e,options:{type:f}})))}if(u.size){let t={};u.forEach(i=>{let r=e.getBaseTarget(i),n=e.getValue(i);n&&(n.liveStyle=!0),t[i]=null!=r?r:null}),l.push({animation:t})}let f=!!l.length;return r&&(!1===s.initial||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(f=!1),r=!1,f?t(l):Promise.resolve()}return{animateChanges:o,setActive:function(t,r){var n;if(i[t].isActive===r)return Promise.resolve();null==(n=e.variantChildren)||n.forEach(e=>{var i;return null==(i=e.animationState)?void 0:i.setActive(t,r)}),i[t].isActive=r;let s=o(t);for(let e in i)i[e].protectedKeys={};return s},setAnimateFunction:function(i){t=i(e)},getState:()=>i,reset:()=>{i=rF(),r=!0}}}(e))}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();ez(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),null==(e=this.unmountControls)||e.call(this)}}let rB=0;class r_ extends rW{constructor(){super(...arguments),this.id=rB++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;let r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then(()=>t(this.id))}mount(){let{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}function rU(e,t,i,r={passive:!0}){return e.addEventListener(t,i,r),()=>e.removeEventListener(t,i)}function r$(e){return{point:{x:e.pageX,y:e.pageY}}}function rH(e,t,i,r){return rU(e,t,e=>tn(e)&&i(e,r$(e)),r)}let rK=(e,t)=>Math.abs(e-t);class rY{constructor(e,t,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:n=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=rX(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,i=function(e,t){return Math.sqrt(rK(e.x,t.x)**2+rK(e.y,t.y)**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!i)return;let{point:r}=e,{timestamp:n}=tb;this.history.push({...r,timestamp:n});let{onStart:o,onMove:s}=this.handlers;t||(o&&o(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),s&&s(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=rq(t,this.transformPagePoint),tw.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:i,onSessionEnd:r,resumeAnimation:n}=this.handlers;if(this.dragSnapToOrigin&&n&&n(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let o=rX("pointercancel"===e.type?this.lastMoveEventInfo:rq(t,this.transformPagePoint),this.history);this.startEvent&&i&&i(e,o),r&&r(e,o)},!tn(e))return;this.dragSnapToOrigin=n,this.handlers=t,this.transformPagePoint=i,this.contextWindow=r||window;let o=rq(r$(e),this.transformPagePoint),{point:s}=o,{timestamp:a}=tb;this.history=[{...s,timestamp:a}];let{onSessionStart:l}=t;l&&l(e,rX(o,this.history)),this.removeListeners=i7(rH(this.contextWindow,"pointermove",this.handlePointerMove),rH(this.contextWindow,"pointerup",this.handlePointerUp),rH(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),tx(this.updatePoint)}}function rq(e,t){return t?{point:t(e.point)}:e}function rZ(e,t){return{x:e.x-t.x,y:e.y-t.y}}function rX({point:e},t){return{point:e,delta:rZ(e,rQ(t)),offset:rZ(e,t[0]),velocity:function(e,t){if(e.length<2)return{x:0,y:0};let i=e.length-1,r=null,n=rQ(e);for(;i>=0&&(r=e[i],!(n.timestamp-r.timestamp>tc(.1)));)i--;if(!r)return{x:0,y:0};let o=(n.timestamp-r.timestamp)/1e3;if(0===o)return{x:0,y:0};let s={x:(n.x-r.x)/o,y:(n.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}(t,.1)}}function rQ(e){return e[e.length-1]}function rG(e){return e&&"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function rJ(e){return e.max-e.min}function r0(e,t,i,r=.5){e.origin=r,e.originPoint=iJ(t.min,t.max,e.origin),e.scale=rJ(i)/rJ(t),e.translate=iJ(i.min,i.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function r1(e,t,i,r){r0(e.x,t.x,i.x,r?r.originX:void 0),r0(e.y,t.y,i.y,r?r.originY:void 0)}function r2(e,t,i){e.min=i.min+t.min,e.max=e.min+rJ(t)}function r5(e,t,i){e.min=t.min-i.min,e.max=e.min+rJ(t)}function r6(e,t,i){r5(e.x,t.x,i.x),r5(e.y,t.y,i.y)}function r8(e,t,i){return{min:void 0!==t?e.min+t:void 0,max:void 0!==i?e.max+i-(e.max-e.min):void 0}}function r3(e,t){let i=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([i,r]=[r,i]),{min:i,max:r}}function r7(e,t,i){return{min:r9(e,t),max:r9(e,i)}}function r9(e,t){return"number"==typeof e?e:e[t]||0}let r4=()=>({translate:0,scale:1,origin:0,originPoint:0}),ne=()=>({x:r4(),y:r4()}),nt=()=>({min:0,max:0}),ni=()=>({x:nt(),y:nt()});function nr(e){return[e("x"),e("y")]}function nn({top:e,left:t,right:i,bottom:r}){return{x:{min:t,max:i},y:{min:e,max:r}}}function no(e){return void 0===e||1===e}function ns({scale:e,scaleX:t,scaleY:i}){return!no(e)||!no(t)||!no(i)}function na(e){return ns(e)||nl(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function nl(e){var t,i;return(t=e.x)&&"0%"!==t||(i=e.y)&&"0%"!==i}function nu(e,t,i,r,n){return void 0!==n&&(e=r+n*(e-r)),r+i*(e-r)+t}function nc(e,t=0,i=1,r,n){e.min=nu(e.min,t,i,r,n),e.max=nu(e.max,t,i,r,n)}function nd(e,{x:t,y:i}){nc(e.x,t.translate,t.scale,t.originPoint),nc(e.y,i.translate,i.scale,i.originPoint)}function nh(e,t){e.min=e.min+t,e.max=e.max+t}function np(e,t,i,r,n=.5){let o=iJ(e.min,e.max,n);nc(e,t,i,o,r)}function nf(e,t){np(e.x,t.x,t.scaleX,t.scale,t.originX),np(e.y,t.y,t.scaleY,t.scale,t.originY)}function nm(e,t){return nn(function(e,t){if(!t)return e;let i=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}let nv=({current:e})=>e?e.ownerDocument.defaultView:null,ng=new WeakMap;class ny{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ni(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){let{presenceContext:i}=this.visualElement;if(i&&!1===i.isPresent)return;let r=e=>{let{dragSnapToOrigin:i}=this.getProps();i?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(r$(e).point)},n=(e,t)=>{let{drag:i,dragPropagation:r,onDragStart:n}=this.getProps();if(i&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=function(e){if("x"===e||"y"===e)if(te[e])return null;else return te[e]=!0,()=>{te[e]=!1};return te.x||te.y?null:(te.x=te.y=!0,()=>{te.x=te.y=!1})}(i),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),nr(e=>{let t=this.getAxisMotionValue(e).get()||0;if(t9.test(t)){let{projection:i}=this.visualElement;if(i&&i.layout){let r=i.layout.layoutBox[e];r&&(t=rJ(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),n&&tw.postRender(()=>n(e,t)),tD(this.visualElement,"transform");let{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},o=(e,t)=>{let{dragPropagation:i,dragDirectionLock:r,onDirectionLock:n,onDrag:o}=this.getProps();if(!i&&!this.openDragLock)return;let{offset:s}=t;if(r&&null===this.currentDirection){this.currentDirection=function(e,t=10){let i=null;return Math.abs(e.y)>t?i="y":Math.abs(e.x)>t&&(i="x"),i}(s),null!==this.currentDirection&&n&&n(this.currentDirection);return}this.updateAxis("x",t.point,s),this.updateAxis("y",t.point,s),this.visualElement.render(),o&&o(e,t)},s=(e,t)=>this.stop(e,t),a=()=>nr(e=>{var t;return"paused"===this.getAnimationState(e)&&(null==(t=this.getAxisMotionValue(e).animation)?void 0:t.play())}),{dragSnapToOrigin:l}=this.getProps();this.panSession=new rY(e,{onSessionStart:r,onStart:n,onMove:o,onSessionEnd:s,resumeAnimation:a},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,contextWindow:nv(this.visualElement)})}stop(e,t){let i=this.isDragging;if(this.cancel(),!i)return;let{velocity:r}=t;this.startAnimation(r);let{onDragEnd:n}=this.getProps();n&&tw.postRender(()=>n(e,t))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;let{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,i){let{drag:r}=this.getProps();if(!i||!nw(e,r,this.currentDirection))return;let n=this.getAxisMotionValue(e),o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=function(e,{min:t,max:i},r){return void 0!==t&&e<t?e=r?iJ(t,e,r.min):Math.max(e,t):void 0!==i&&e>i&&(e=r?iJ(i,e,r.max):Math.min(e,i)),e}(o,this.constraints[e],this.elastic[e])),n.set(o)}resolveConstraints(){var e;let{dragConstraints:t,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null==(e=this.visualElement.projection)?void 0:e.layout,n=this.constraints;t&&rG(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=function(e,{top:t,left:i,bottom:r,right:n}){return{x:r8(e.x,i,n),y:r8(e.y,t,r)}}(r.layoutBox,t):this.constraints=!1,this.elastic=function(e=.35){return!1===e?e=0:!0===e&&(e=.35),{x:r7(e,"left","right"),y:r7(e,"top","bottom")}}(i),n!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&nr(e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){let i={};return void 0!==t.min&&(i.min=t.min-e.min),void 0!==t.max&&(i.max=t.max-e.min),i}(r.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){var e;let{dragConstraints:t,onMeasureDragConstraints:i}=this.getProps();if(!t||!rG(t))return!1;let r=t.current;td(null!==r,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");let{projection:n}=this.visualElement;if(!n||!n.layout)return!1;let o=function(e,t,i){let r=nm(e,i),{scroll:n}=t;return n&&(nh(r.x,n.offset.x),nh(r.y,n.offset.y)),r}(r,n.root,this.visualElement.getTransformPagePoint()),s=(e=n.layout.layoutBox,{x:r3(e.x,o.x),y:r3(e.y,o.y)});if(i){let e=i(function({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}(s));this.hasMutatedConstraints=!!e,e&&(s=nn(e))}return s}startAnimation(e){let{drag:t,dragMomentum:i,dragElastic:r,dragTransition:n,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),a=this.constraints||{};return Promise.all(nr(s=>{if(!nw(s,t,this.currentDirection))return;let l=a&&a[s]||{};o&&(l={min:0,max:0});let u={type:"inertia",velocity:i?e[s]:0,bounceStiffness:r?200:1e6,bounceDamping:r?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...n,...l};return this.startAxisValueAnimation(s,u)})).then(s)}startAxisValueAnimation(e,t){let i=this.getAxisMotionValue(e);return tD(this.visualElement,e),i.start(rR(e,i,0,t,this.visualElement,!1))}stopAnimation(){nr(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){nr(e=>{var t;return null==(t=this.getAxisMotionValue(e).animation)?void 0:t.pause()})}getAnimationState(e){var t;return null==(t=this.getAxisMotionValue(e).animation)?void 0:t.state}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps();return i[t]||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){nr(t=>{let{drag:i}=this.getProps();if(!nw(t,i,this.currentDirection))return;let{projection:r}=this.visualElement,n=this.getAxisMotionValue(t);if(r&&r.layout){let{min:i,max:o}=r.layout.layoutBox[t];n.set(e[t]-iJ(i,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!rG(t)||!i||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};nr(e=>{let t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){let i=t.get();r[e]=function(e,t){let i=.5,r=rJ(e),n=rJ(t);return n>r?i=e3(t.min,t.max-r,e.min):r>n&&(i=e3(e.min,e.max-n,t.min)),tq(0,1,i)}({min:i,max:i},this.constraints[e])}});let{transformTemplate:n}=this.visualElement.getProps();this.visualElement.current.style.transform=n?n({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),nr(t=>{if(!nw(t,e,null))return;let i=this.getAxisMotionValue(t),{min:n,max:o}=this.constraints[t];i.set(iJ(n,o,r[t]))})}addListeners(){if(!this.visualElement.current)return;ng.set(this.visualElement,this);let e=rH(this.visualElement.current,"pointerdown",e=>{let{drag:t,dragListener:i=!0}=this.getProps();t&&i&&this.start(e)}),t=()=>{let{dragConstraints:e}=this.getProps();rG(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,r=i.addEventListener("measure",t);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),tw.read(t);let n=rU(window,"resize",()=>this.scalePositionWithinConstraints()),o=i.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(nr(t=>{let i=this.getAxisMotionValue(t);i&&(this.originPoint[t]+=e[t].translate,i.set(i.get()+e[t].translate))}),this.visualElement.render())});return()=>{n(),e(),r(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:n=!1,dragElastic:o=.35,dragMomentum:s=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:r,dragConstraints:n,dragElastic:o,dragMomentum:s}}}function nw(e,t,i){return(!0===t||t===e)&&(null===i||i===e)}class nx extends rW{constructor(e){super(e),this.removeGroupControls=td,this.removeListeners=td,this.controls=new ny(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||td}unmount(){this.removeGroupControls(),this.removeListeners()}}let nb=e=>(t,i)=>{e&&tw.postRender(()=>e(t,i))};class nE extends rW{constructor(){super(...arguments),this.removePointerDownListener=td}onPointerDown(e){this.session=new rY(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:nv(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:nb(e),onStart:nb(t),onMove:i,onEnd:(e,t)=>{delete this.session,r&&tw.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=rH(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let nC=(0,d.createContext)(null);function nk(e=!0){let t=(0,d.useContext)(nC);if(null===t)return[!0,null];let{isPresent:i,onExitComplete:r,register:n}=t,o=(0,d.useId)();(0,d.useEffect)(()=>{e&&n(o)},[e]);let s=(0,d.useCallback)(()=>e&&r&&r(o),[o,r,e]);return!i&&r?[!1,s]:[!0]}let nT=(0,d.createContext)({}),nP=(0,d.createContext)({}),nS={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function nj(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}let nA={correct:(e,t)=>{if(!t.target)return e;if("string"==typeof e)if(!t4.test(e))return e;else e=parseFloat(e);let i=nj(e,t.target.x),r=nj(e,t.target.y);return`${i}% ${r}%`}},nR={},{schedule:nM,cancel:nD}=ty(queueMicrotask,!1);class nL extends d.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:r}=this.props,{projection:n}=e;Object.assign(nR,nV),n&&(t.group&&t.group.add(n),i&&i.register&&r&&i.register(n),n.root.didUpdate(),n.addEventListener("animationComplete",()=>{this.safeToRemove()}),n.setOptions({...n.options,onExitComplete:()=>this.safeToRemove()})),nS.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:i,drag:r,isPresent:n}=this.props,o=i.projection;return o&&(o.isPresent=n,r||e.layoutDependency!==t||void 0===t?o.willUpdate():this.safeToRemove(),e.isPresent!==n&&(n?o.promote():o.relegate()||tw.postRender(()=>{let e=o.getStack();e&&e.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),nM.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}}function nN(e){let[t,i]=nk(),r=(0,d.useContext)(nT);return(0,x.jsx)(nL,{...e,layoutGroup:r,switchLayoutGroup:(0,d.useContext)(nP),isPresent:t,safeToRemove:i})}let nV={borderRadius:{...nA,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:nA,borderTopRightRadius:nA,borderBottomLeftRadius:nA,borderBottomRightRadius:nA,boxShadow:{correct:(e,{treeScale:t,projectionDelta:i})=>{let r=im.parse(e);if(r.length>5)return e;let n=im.createTransformer(e),o=+("number"!=typeof r[0]),s=i.x.scale*t.x,a=i.y.scale*t.y;r[0+o]/=s,r[1+o]/=a;let l=iJ(s,a,.5);return"number"==typeof r[2+o]&&(r[2+o]/=l),"number"==typeof r[3+o]&&(r[3+o]/=l),n(r)}}},nO=(e,t)=>e.depth-t.depth;class nI{constructor(){this.children=[],this.isDirty=!1}add(e){tT(this.children,e),this.isDirty=!0}remove(e){tP(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(nO),this.isDirty=!1,this.children.forEach(e)}}function nF(e){let t=tM(e)?e.get():e;return t&&"object"==typeof t&&t.mix&&t.toValue?t.toValue():t}let nW=["TopLeft","TopRight","BottomLeft","BottomRight"],nz=nW.length,nB=e=>"string"==typeof e?parseFloat(e):e,n_=e=>"number"==typeof e||t4.test(e);function nU(e,t){return void 0!==e[t]?e[t]:e.borderRadius}let n$=nK(0,.5,tH),nH=nK(.5,.95,td);function nK(e,t,i){return r=>r<e?0:r>t?1:i(e3(e,t,r))}function nY(e,t){e.min=t.min,e.max=t.max}function nq(e,t){nY(e.x,t.x),nY(e.y,t.y)}function nZ(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function nX(e,t,i,r,n){return e-=t,e=r+1/i*(e-r),void 0!==n&&(e=r+1/n*(e-r)),e}function nQ(e,t,[i,r,n],o,s){!function(e,t=0,i=1,r=.5,n,o=e,s=e){if(t9.test(t)&&(t=parseFloat(t),t=iJ(s.min,s.max,t/100)-s.min),"number"!=typeof t)return;let a=iJ(o.min,o.max,r);e===o&&(a-=t),e.min=nX(e.min,t,i,a,n),e.max=nX(e.max,t,i,a,n)}(e,t[i],t[r],t[n],t.scale,o,s)}let nG=["x","scaleX","originX"],nJ=["y","scaleY","originY"];function n0(e,t,i,r){nQ(e.x,t,nG,i?i.x:void 0,r?r.x:void 0),nQ(e.y,t,nJ,i?i.y:void 0,r?r.y:void 0)}function n1(e){return 0===e.translate&&1===e.scale}function n2(e){return n1(e.x)&&n1(e.y)}function n5(e,t){return e.min===t.min&&e.max===t.max}function n6(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function n8(e,t){return n6(e.x,t.x)&&n6(e.y,t.y)}function n3(e){return rJ(e.x)/rJ(e.y)}function n7(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class n9{constructor(){this.members=[]}add(e){tT(this.members,e),e.scheduleRender()}remove(e){if(tP(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t,i=this.members.findIndex(t=>e===t);if(0===i)return!1;for(let e=i;e>=0;e--){let i=this.members[e];if(!1!==i.isPresent){t=i;break}}return!!t&&(this.promote(t),!0)}promote(e,t){let i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,t&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);let{crossfade:r}=e.options;!1===r&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:i}=e;t.onExitComplete&&t.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}let n4={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},oe="undefined"!=typeof window&&void 0!==window.MotionDebug,ot=["","X","Y","Z"],oi={visibility:"hidden"},or=0;function on(e,t,i,r){let{latestValues:n}=t;n[e]&&(i[e]=n[e],t.setStaticValue(e,0),r&&(r[e]=0))}function oo({attachResizeListener:e,defaultParent:t,measureScroll:i,checkIsScrollRoot:r,resetTransform:n}){return class{constructor(e={},i=null==t?void 0:t()){this.id=or++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,oe&&(n4.totalNodes=n4.resolvedTargetDeltas=n4.recalculatedProjection=0),this.nodes.forEach(ol),this.nodes.forEach(om),this.nodes.forEach(ov),this.nodes.forEach(ou),oe&&window.MotionDebug.record(n4)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=i?i.root||i:this,this.path=i?[...i.path,i]:[],this.parent=i,this.depth=i?i.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new nI)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new tS),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let i=this.eventHandlers.get(e);i&&i.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t,i=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=t instanceof SVGElement&&"svg"!==t.tagName,this.instance=t;let{layoutId:r,layout:n,visualElement:o}=this.options;if(o&&!o.current&&o.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),i&&(n||r)&&(this.isLayoutDirty=!0),e){let i,r=()=>this.root.updateBlockedByResize=!1;e(t,()=>{this.root.updateBlockedByResize=!0,i&&i(),i=function(e,t){let i=tk.now(),r=({timestamp:t})=>{let n=t-i;n>=250&&(tx(r),e(n-250))};return tw.read(r,!0),()=>tx(r)}(r,250),nS.hasAnimatedSinceResize&&(nS.hasAnimatedSinceResize=!1,this.nodes.forEach(of))})}r&&this.root.registerSharedNode(r,this),!1!==this.options.animate&&o&&(r||n)&&this.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t,hasRelativeTargetChanged:i,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let n=this.options.transition||o.getDefaultTransition()||oE,{onLayoutAnimationStart:s,onLayoutAnimationComplete:a}=o.getProps(),l=!this.targetLayout||!n8(this.targetLayout,r)||i,u=!t&&i;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||t&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(e,u);let t={...eJ(n,"layout"),onPlay:s,onComplete:a};(o.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t)}else t||of(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,tx(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){!this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes&&this.nodes.forEach(og),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&function e(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;let{visualElement:i}=t.options;if(!i)return;let r=i.props[tN];if(window.MotionHasOptimisedAnimation(r,"transform")){let{layout:e,layoutId:i}=t.options;window.MotionCancelOptimisedAnimation(r,"transform",tw,!(e||i))}let{parent:n}=t;n&&!n.hasCheckedOptimisedAppear&&e(n)}(this),this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:i}=this.options;if(void 0===t&&!i)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(od);return}this.isUpdating||this.nodes.forEach(oh),this.isUpdating=!1,this.nodes.forEach(op),this.nodes.forEach(os),this.nodes.forEach(oa),this.clearAllSnapshots();let e=tk.now();tb.delta=tq(0,1e3/60,e-tb.timestamp),tb.timestamp=e,tb.isProcessing=!0,tE.update.process(tb),tE.preRender.process(tb),tE.render.process(tb),tb.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,nM.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(oc),this.sharedNodes.forEach(oy)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,tw.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){tw.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ni(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e="measure"){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!n)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!n2(this.projectionDelta),i=this.getTransformTemplate(),r=i?i(this.latestValues,""):void 0,o=r!==this.prevTransformTemplateValue;e&&(t||na(this.latestValues)||o)&&(n(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){var t;let i=this.measurePageBox(),r=this.removeElementScroll(i);return e&&(r=this.removeTransform(r)),oT((t=r).x),oT(t.y),{animationId:this.root.animationId,measuredBox:i,layoutBox:r,latestValues:{},source:this.id}}measurePageBox(){var e;let{visualElement:t}=this.options;if(!t)return ni();let i=t.measureViewportBox();if(!((null==(e=this.scroll)?void 0:e.wasRoot)||this.path.some(oS))){let{scroll:e}=this.root;e&&(nh(i.x,e.offset.x),nh(i.y,e.offset.y))}return i}removeElementScroll(e){var t;let i=ni();if(nq(i,e),null==(t=this.scroll)?void 0:t.wasRoot)return i;for(let t=0;t<this.path.length;t++){let r=this.path[t],{scroll:n,options:o}=r;r!==this.root&&n&&o.layoutScroll&&(n.wasRoot&&nq(i,e),nh(i.x,n.offset.x),nh(i.y,n.offset.y))}return i}applyTransform(e,t=!1){let i=ni();nq(i,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&nf(i,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),na(r.latestValues)&&nf(i,r.latestValues)}return na(this.latestValues)&&nf(i,this.latestValues),i}removeTransform(e){let t=ni();nq(t,e);for(let e=0;e<this.path.length;e++){let i=this.path[e];if(!i.instance||!na(i.latestValues))continue;ns(i.latestValues)&&i.updateSnapshot();let r=ni();nq(r,i.measurePageBox()),n0(t,i.latestValues,i.snapshot?i.snapshot.layoutBox:void 0,r)}return na(this.latestValues)&&n0(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==tb.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){var t,i,r,n;let o=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=o.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=o.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=o.isSharedProjectionDirty);let s=!!this.resumingFrom||this!==o;if(!(e||s&&this.isSharedProjectionDirty||this.isProjectionDirty||(null==(t=this.parent)?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:a,layoutId:l}=this.options;if(this.layout&&(a||l)){if(this.resolvedRelativeTargetAt=tb.timestamp,!this.targetDelta&&!this.relativeTarget){let e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ni(),this.relativeTargetOrigin=ni(),r6(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),nq(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){if((this.target||(this.target=ni(),this.targetWithTransforms=ni()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target)?(this.forceRelativeParentToResolveTarget(),i=this.target,r=this.relativeTarget,n=this.relativeParent.target,r2(i.x,r.x,n.x),r2(i.y,r.y,n.y)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):nq(this.target,this.layout.layoutBox),nd(this.target,this.targetDelta)):nq(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;let e=this.getClosestProjectingParent();e&&!!e.resumingFrom==!!this.resumingFrom&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ni(),this.relativeTargetOrigin=ni(),r6(this.relativeTargetOrigin,this.target,e.target),nq(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}oe&&n4.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||ns(this.parent.latestValues)||nl(this.parent.latestValues)))if(this.parent.isProjecting())return this.parent;else return this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;let t=this.getLead(),i=!!this.resumingFrom||this!==t,r=!0;if((this.isProjectionDirty||(null==(e=this.parent)?void 0:e.isProjectionDirty))&&(r=!1),i&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===tb.timestamp&&(r=!1),r)return;let{layout:n,layoutId:o}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(n||o))return;nq(this.layoutCorrected,this.layout.layoutBox);let s=this.treeScale.x,a=this.treeScale.y;!function(e,t,i,r=!1){let n,o,s=i.length;if(s){t.x=t.y=1;for(let a=0;a<s;a++){o=(n=i[a]).projectionDelta;let{visualElement:s}=n.options;(!s||!s.props.style||"contents"!==s.props.style.display)&&(r&&n.options.layoutScroll&&n.scroll&&n!==n.root&&nf(e,{x:-n.scroll.offset.x,y:-n.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,nd(e,o)),r&&na(n.latestValues)&&nf(e,n.latestValues))}t.x<1.0000000000001&&t.x>.999999999999&&(t.x=1),t.y<1.0000000000001&&t.y>.999999999999&&(t.y=1)}}(this.layoutCorrected,this.treeScale,this.path,i),t.layout&&!t.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(t.target=t.layout.layoutBox,t.targetWithTransforms=ni());let{target:l}=t;if(!l){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}this.projectionDelta&&this.prevProjectionDelta?(nZ(this.prevProjectionDelta.x,this.projectionDelta.x),nZ(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),r1(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.treeScale.x===s&&this.treeScale.y===a&&n7(this.projectionDelta.x,this.prevProjectionDelta.x)&&n7(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),oe&&n4.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){var t;if(null==(t=this.options.visualElement)||t.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ne(),this.projectionDelta=ne(),this.projectionDeltaWithTransform=ne()}setAnimationOrigin(e,t=!1){let i,r=this.snapshot,n=r?r.latestValues:{},o={...this.latestValues},s=ne();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let a=ni(),l=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),u=this.getStack(),c=!u||u.members.length<=1,d=!!(l&&!c&&!0===this.options.crossfade&&!this.path.some(ob));this.animationProgress=0,this.mixTargetDelta=t=>{let r=t/1e3;if(ow(s.x,e.x,r),ow(s.y,e.y,r),this.setTargetDelta(s),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout){var u,h,p,f,m,v;r6(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),p=this.relativeTarget,f=this.relativeTargetOrigin,m=a,v=r,ox(p.x,f.x,m.x,v),ox(p.y,f.y,m.y,v),i&&(u=this.relativeTarget,h=i,n5(u.x,h.x)&&n5(u.y,h.y))&&(this.isProjectionDirty=!1),i||(i=ni()),nq(i,this.relativeTarget)}l&&(this.animationValues=o,function(e,t,i,r,n,o){n?(e.opacity=iJ(0,void 0!==i.opacity?i.opacity:1,n$(r)),e.opacityExit=iJ(void 0!==t.opacity?t.opacity:1,0,nH(r))):o&&(e.opacity=iJ(void 0!==t.opacity?t.opacity:1,void 0!==i.opacity?i.opacity:1,r));for(let n=0;n<nz;n++){let o=`border${nW[n]}Radius`,s=nU(t,o),a=nU(i,o);(void 0!==s||void 0!==a)&&(s||(s=0),a||(a=0),0===s||0===a||n_(s)===n_(a)?(e[o]=Math.max(iJ(nB(s),nB(a),r),0),(t9.test(a)||t9.test(s))&&(e[o]+="%")):e[o]=a)}(t.rotate||i.rotate)&&(e.rotate=iJ(t.rotate||0,i.rotate||0,r))}(o,n,this.latestValues,r,d,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=r},this.mixTargetDelta(1e3*!!this.options.layoutRoot)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(tx(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=tw.update(()=>{nS.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,i){let r=tM(0)?0:tR(e);return r.start(rR("",r,1e3,i)),r.animation}(0,0,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:i,layout:r,latestValues:n}=e;if(t&&i&&r){if(this!==e&&this.layout&&r&&oP(this.options.animationType,this.layout.layoutBox,r.layoutBox)){i=this.target||ni();let t=rJ(this.layout.layoutBox.x);i.x.min=e.target.x.min,i.x.max=i.x.min+t;let r=rJ(this.layout.layoutBox.y);i.y.min=e.target.y.min,i.y.max=i.y.min+r}nq(t,i),nf(t,n),r1(this.projectionDeltaWithTransform,this.layoutCorrected,t,n)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new n9),this.sharedNodes.get(e).add(t);let i=t.options.initialPromotionConfig;t.promote({transition:i?i.transition:void 0,preserveFollowOpacity:i&&i.shouldPreserveFollowOpacity?i.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){var e;let{layoutId:t}=this.options;return t&&(null==(e=this.getStack())?void 0:e.lead)||this}getPrevLead(){var e;let{layoutId:t}=this.options;return t?null==(e=this.getStack())?void 0:e.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:i}={}){let r=this.getStack();r&&r.promote(this,i),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:i}=e;if((i.z||i.rotate||i.rotateX||i.rotateY||i.rotateZ||i.skewX||i.skewY)&&(t=!0),!t)return;let r={};i.z&&on("z",e,r,this.animationValues);for(let t=0;t<ot.length;t++)on(`rotate${ot[t]}`,e,r,this.animationValues),on(`skew${ot[t]}`,e,r,this.animationValues);for(let t in e.render(),r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}getProjectionStyles(e){var t,i;if(!this.instance||this.isSVG)return;if(!this.isVisible)return oi;let r={visibility:""},n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=nF(null==e?void 0:e.pointerEvents)||"",r.transform=n?n(this.latestValues,""):"none",r;let o=this.getLead();if(!this.projectionDelta||!this.layout||!o.target){let t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=nF(null==e?void 0:e.pointerEvents)||""),this.hasProjected&&!na(this.latestValues)&&(t.transform=n?n({},""):"none",this.hasProjected=!1),t}let s=o.animationValues||o.latestValues;this.applyTransformsToTarget(),r.transform=function(e,t,i){let r="",n=e.x.translate/t.x,o=e.y.translate/t.y,s=(null==i?void 0:i.z)||0;if((n||o||s)&&(r=`translate3d(${n}px, ${o}px, ${s}px) `),(1!==t.x||1!==t.y)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),i){let{transformPerspective:e,rotate:t,rotateX:n,rotateY:o,skewX:s,skewY:a}=i;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),n&&(r+=`rotateX(${n}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),a&&(r+=`skewY(${a}deg) `)}let a=e.x.scale*t.x,l=e.y.scale*t.y;return(1!==a||1!==l)&&(r+=`scale(${a}, ${l})`),r||"none"}(this.projectionDeltaWithTransform,this.treeScale,s),n&&(r.transform=n(s,r.transform));let{x:a,y:l}=this.projectionDelta;for(let e in r.transformOrigin=`${100*a.origin}% ${100*l.origin}% 0`,o.animationValues?r.opacity=o===this?null!=(i=null!=(t=s.opacity)?t:this.latestValues.opacity)?i:1:this.preserveOpacity?this.latestValues.opacity:s.opacityExit:r.opacity=o===this?void 0!==s.opacity?s.opacity:"":void 0!==s.opacityExit?s.opacityExit:0,nR){if(void 0===s[e])continue;let{correct:t,applyTo:i}=nR[e],n="none"===r.transform?s[e]:t(s[e],o);if(i){let e=i.length;for(let t=0;t<e;t++)r[i[t]]=n}else r[e]=n}return this.options.layoutId&&(r.pointerEvents=o===this?nF(null==e?void 0:e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>{var t;return null==(t=e.currentAnimation)?void 0:t.stop()}),this.root.nodes.forEach(od),this.root.sharedNodes.clear()}}}function os(e){e.updateLayout()}function oa(e){var t;let i=(null==(t=e.resumeFrom)?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&i&&e.hasListeners("didUpdate")){let{layoutBox:t,measuredBox:r}=e.layout,{animationType:n}=e.options,o=i.source!==e.layout.source;"size"===n?nr(e=>{let r=o?i.measuredBox[e]:i.layoutBox[e],n=rJ(r);r.min=t[e].min,r.max=r.min+n}):oP(n,i.layoutBox,t)&&nr(r=>{let n=o?i.measuredBox[r]:i.layoutBox[r],s=rJ(t[r]);n.max=n.min+s,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+s)});let s=ne();r1(s,t,i.layoutBox);let a=ne();o?r1(a,e.applyTransform(r,!0),i.measuredBox):r1(a,t,i.layoutBox);let l=!n2(s),u=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:n,layout:o}=r;if(n&&o){let s=ni();r6(s,i.layoutBox,n.layoutBox);let a=ni();r6(a,t,o.layoutBox),n8(s,a)||(u=!0),r.options.layoutRoot&&(e.relativeTarget=a,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:i,delta:a,layoutDelta:s,hasLayoutChanged:l,hasRelativeTargetChanged:u})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function ol(e){oe&&n4.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function ou(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function oc(e){e.clearSnapshot()}function od(e){e.clearMeasurements()}function oh(e){e.isLayoutDirty=!1}function op(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function of(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function om(e){e.resolveTargetDelta()}function ov(e){e.calcProjection()}function og(e){e.resetSkewAndRotation()}function oy(e){e.removeLeadSnapshot()}function ow(e,t,i){e.translate=iJ(t.translate,0,i),e.scale=iJ(t.scale,1,i),e.origin=t.origin,e.originPoint=t.originPoint}function ox(e,t,i,r){e.min=iJ(t.min,i.min,r),e.max=iJ(t.max,i.max,r)}function ob(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}let oE={duration:.45,ease:[.4,0,.1,1]},oC=e=>"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ok=oC("applewebkit/")&&!oC("chrome/")?Math.round:td;function oT(e){e.min=ok(e.min),e.max=ok(e.max)}function oP(e,t,i){return"position"===e||"preserve-aspect"===e&&!(.2>=Math.abs(n3(t)-n3(i)))}function oS(e){var t;return e!==e.root&&(null==(t=e.scroll)?void 0:t.wasRoot)}let oj=oo({attachResizeListener:(e,t)=>rU(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),oA={current:void 0},oR=oo({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!oA.current){let e=new oj({});e.mount(window),e.setOptions({layoutScroll:!0}),oA.current=e}return oA.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>"fixed"===window.getComputedStyle(e).position});function oM(e,t,i){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover","Start"===i);let n=r["onHover"+i];n&&tw.postRender(()=>n(t,r$(t)))}class oD extends rW{mount(){let{current:e}=this.node;e&&(this.unmount=function(e,t,i={}){let[r,n,o]=tt(e,i),s=ti(e=>{let{target:i}=e,r=t(e);if("function"!=typeof r||!i)return;let o=ti(e=>{r(e),i.removeEventListener("pointerleave",o)});i.addEventListener("pointerleave",o,n)});return r.forEach(e=>{e.addEventListener("pointerenter",s,n)}),o}(e,e=>(oM(this.node,e,"Start"),e=>oM(this.node,e,"End"))))}unmount(){}}class oL extends rW{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=i7(rU(this.node.current,"focus",()=>this.onFocus()),rU(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function oN(e,t,i){let{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap","Start"===i);let n=r["onTap"+("End"===i?"":i)];n&&tw.postRender(()=>n(t,r$(t)))}class oV extends rW{mount(){let{current:e}=this.node;e&&(this.unmount=function(e,t,i={}){let[r,n,o]=tt(e,i),s=e=>{let r=e.currentTarget;if(!tu(e)||ts.has(r))return;ts.add(r);let o=t(e),s=(e,t)=>{window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",l),tu(e)&&ts.has(r)&&(ts.delete(r),"function"==typeof o&&o(e,{success:t}))},a=e=>{s(e,i.useGlobalTarget||tr(r,e.target))},l=e=>{s(e,!1)};window.addEventListener("pointerup",a,n),window.addEventListener("pointercancel",l,n)};return r.forEach(e=>{to.has(e.tagName)||-1!==e.tabIndex||null!==e.getAttribute("tabindex")||(e.tabIndex=0),(i.useGlobalTarget?window:e).addEventListener("pointerdown",s,n),e.addEventListener("focus",e=>((e,t)=>{let i=e.currentTarget;if(!i)return;let r=ta(()=>{if(ts.has(i))return;tl(i,"down");let e=ta(()=>{tl(i,"up")});i.addEventListener("keyup",e,t),i.addEventListener("blur",()=>tl(i,"cancel"),t)});i.addEventListener("keydown",r,t),i.addEventListener("blur",()=>i.removeEventListener("keydown",r),t)})(e,n),n)}),o}(e,e=>(oN(this.node,e,"Start"),(e,{success:t})=>oN(this.node,e,t?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}let oO=new WeakMap,oI=new WeakMap,oF=e=>{let t=oO.get(e.target);t&&t(e)},oW=e=>{e.forEach(oF)},oz={some:0,all:1};class oB extends rW{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:r="some",once:n}=e,o={root:t?t.current:void 0,rootMargin:i,threshold:"number"==typeof r?r:oz[r]},s=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,n&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);let{onViewportEnter:i,onViewportLeave:r}=this.node.getProps(),o=t?i:r;o&&o(e)};var a=this.node.current;let l=function({root:e,...t}){let i=e||document;oI.has(i)||oI.set(i,{});let r=oI.get(i),n=JSON.stringify(t);return r[n]||(r[n]=new IntersectionObserver(oW,{root:e,...t})),r[n]}(o);return oO.set(a,s),l.observe(a),()=>{oO.delete(a),l.unobserve(a)}}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;let{props:e,prevProps:t}=this.node;["amount","margin","root"].some(function({viewport:e={}},{viewport:t={}}={}){return i=>e[i]!==t[i]}(e,t))&&this.startObserver()}unmount(){}}let o_=(0,d.createContext)({strict:!1}),oU=(0,d.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),o$=(0,d.createContext)({});function oH(e){return ez(e.animate)||eq.some(t=>eU(e[t]))}function oK(e){return!!(oH(e)||e.variants)}function oY(e){return Array.isArray(e)?e.join(" "):e}let oq="undefined"!=typeof window,oZ={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},oX={};for(let e in oZ)oX[e]={isEnabled:t=>oZ[e].some(e=>!!t[e])};let oQ=Symbol.for("motionComponentSymbol"),oG=oq?d.useLayoutEffect:d.useEffect,oJ=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function o0(e){if("string"!=typeof e||e.includes("-"));else if(oJ.indexOf(e)>-1||/[A-Z]/u.test(e))return!0;return!1}function o1(e){let t=(0,d.useRef)(null);return null===t.current&&(t.current=e()),t.current}let o2=e=>(t,i)=>{let r=(0,d.useContext)(o$),n=(0,d.useContext)(nC),o=()=>(function({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:i},r,n,o){let s={latestValues:function(e,t,i,r){let n={},o=r(e,{});for(let e in o)n[e]=nF(o[e]);let{initial:s,animate:a}=e,l=oH(e),u=oK(e);t&&u&&!l&&!1!==e.inherit&&(void 0===s&&(s=t.initial),void 0===a&&(a=t.animate));let c=!!i&&!1===i.initial,d=(c=c||!1===s)?a:s;if(d&&"boolean"!=typeof d&&!ez(d)){let t=Array.isArray(d)?d:[d];for(let i=0;i<t.length;i++){let r=eH(e,t[i]);if(r){let{transitionEnd:e,transition:t,...i}=r;for(let e in i){let t=i[e];if(Array.isArray(t)){let e=c?t.length-1:0;t=t[e]}null!==t&&(n[e]=t)}for(let t in e)n[t]=e[t]}}}return n}(r,n,o,e),renderState:t()};return i&&(s.onMount=e=>i({props:r,current:e,...s}),s.onUpdate=e=>i(e)),s})(e,t,r,n);return i?o():o1(o)},o5=(e,t)=>t&&"number"==typeof e?t.transform(e):e,o6={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},o8=th.length;function o3(e,t,i){let{style:r,vars:n,transformOrigin:o}=e,s=!1,a=!1;for(let e in t){let i=t[e];if(tp.has(e)){s=!0;continue}if(iz(e)){n[e]=i;continue}{let t=o5(i,ib[e]);e.startsWith("origin")?(a=!0,o[e]=t):r[e]=t}}if(!t.transform&&(s||i?r.transform=function(e,t,i){let r="",n=!0;for(let o=0;o<o8;o++){let s=th[o],a=e[s];if(void 0===a)continue;let l=!0;if(!(l="number"==typeof a?a===+!!s.startsWith("scale"):0===parseFloat(a))||i){let e=o5(a,ib[s]);if(!l){n=!1;let t=o6[s]||s;r+=`${t}(${e}) `}i&&(t[s]=e)}}return r=r.trim(),i?r=i(t,n?"":r):n&&(r="none"),r}(t,e.transform,i):r.transform&&(r.transform="none")),a){let{originX:e="50%",originY:t="50%",originZ:i=0}=o;r.transformOrigin=`${e} ${t} ${i}`}}let o7={offset:"stroke-dashoffset",array:"stroke-dasharray"},o9={offset:"strokeDashoffset",array:"strokeDasharray"};function o4(e,t,i){return"string"==typeof e?e:t4.transform(t+i*e)}function se(e,{attrX:t,attrY:i,attrScale:r,originX:n,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},c,d){if(o3(e,u,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:h,style:p,dimensions:f}=e;h.transform&&(f&&(p.transform=h.transform),delete h.transform),f&&(void 0!==n||void 0!==o||p.transform)&&(p.transformOrigin=function(e,t,i){let r=o4(t,e.x,e.width),n=o4(i,e.y,e.height);return`${r} ${n}`}(f,void 0!==n?n:.5,void 0!==o?o:.5)),void 0!==t&&(h.x=t),void 0!==i&&(h.y=i),void 0!==r&&(h.scale=r),void 0!==s&&function(e,t,i=1,r=0,n=!0){e.pathLength=1;let o=n?o7:o9;e[o.offset]=t4.transform(-r);let s=t4.transform(t),a=t4.transform(i);e[o.array]=`${s} ${a}`}(h,s,a,l,!1)}let st=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),si=()=>({...st(),attrs:{}}),sr=e=>"string"==typeof e&&"svg"===e.toLowerCase();function sn(e,{style:t,vars:i},r,n){for(let o in Object.assign(e.style,t,n&&n.getProjectionStyles(r)),i)e.style.setProperty(o,i[o])}let so=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ss(e,t,i,r){for(let i in sn(e,t,void 0,r),t.attrs)e.setAttribute(so.has(i)?i:tL(i),t.attrs[i])}function sa(e,{layout:t,layoutId:i}){return tp.has(e)||e.startsWith("origin")||(t||void 0!==i)&&(!!nR[e]||"opacity"===e)}function sl(e,t,i){var r;let{style:n}=e,o={};for(let s in n)(tM(n[s])||t.style&&tM(t.style[s])||sa(s,e)||(null==(r=null==i?void 0:i.getValue(s))?void 0:r.liveStyle)!==void 0)&&(o[s]=n[s]);return o}function su(e,t,i){let r=sl(e,t,i);for(let i in e)(tM(e[i])||tM(t[i]))&&(r[-1!==th.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]);return r}let sc=["x","y","width","height","cx","cy","r"],sd={useVisualState:o2({scrapeMotionValuesFromProps:su,createRenderState:si,onUpdate:({props:e,prevProps:t,current:i,renderState:r,latestValues:n})=>{if(!i)return;let o=!!e.drag;if(!o){for(let e in n)if(tp.has(e)){o=!0;break}}if(!o)return;let s=!t;if(t)for(let i=0;i<sc.length;i++){let r=sc[i];e[r]!==t[r]&&(s=!0)}s&&tw.read(()=>{!function(e,t){try{t.dimensions="function"==typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(e){t.dimensions={x:0,y:0,width:0,height:0}}}(i,r),tw.render(()=>{se(r,n,sr(i.tagName),e.transformTemplate),ss(i,r)})})}})},sh={useVisualState:o2({scrapeMotionValuesFromProps:sl,createRenderState:st})};function sp(e,t,i){for(let r in t)tM(t[r])||sa(r,i)||(e[r]=t[r])}let sf=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function sm(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||sf.has(e)}let sv=e=>!sm(e);try{!function(e){e&&(sv=t=>t.startsWith("on")?!sm(t):e(t))}(require("@emotion/is-prop-valid").default)}catch(e){}let sg={current:null},sy={current:!1},sw=[...iK,io,im],sx=new WeakMap,sb=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class sE{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:n,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=iI,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=tk.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,tw.render(this.render,!1,!0))};let{latestValues:a,renderState:l,onUpdate:u}=o;this.onUpdate=u,this.latestValues=a,this.baseTarget={...a},this.initialValues=t.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=s,this.blockInitialAnimation=!!n,this.isControllingVariants=oH(t),this.isVariantNode=oK(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:c,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];void 0!==a[e]&&tM(t)&&t.set(a[e],!1)}}mount(e){this.current=e,sx.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),sy.current||function(){if(sy.current=!0,oq)if(window.matchMedia){let e=window.matchMedia("(prefers-reduced-motion)"),t=()=>sg.current=e.matches;e.addListener(t),t()}else sg.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||sg.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in sx.delete(this.current),this.projection&&this.projection.unmount(),tx(this.notifyUpdate),tx(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){let i;this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();let r=tp.has(e),n=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&tw.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=t.on("renderRequest",this.scheduleRender);window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{n(),o(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in oX){let t=oX[e];if(!t)continue;let{isEnabled:i,Feature:r}=t;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ni()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<sb.length;t++){let i=sb[t];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);let r=e["on"+i];r&&(this.propEventSubscriptions[i]=this.on(i,r))}this.prevMotionValues=function(e,t,i){for(let r in t){let n=t[r],o=i[r];if(tM(n))e.addValue(r,n);else if(tM(o))e.addValue(r,tR(n,{owner:e}));else if(o!==n)if(e.hasValue(r)){let t=e.getValue(r);!0===t.liveStyle?t.jump(n):t.hasAnimated||t.set(n)}else{let t=e.getStaticValue(r);e.addValue(r,tR(void 0!==t?t:n,{owner:e}))}}for(let r in i)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return void 0===i&&void 0!==t&&(i=tR(null===t?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){var i;let r=void 0===this.latestValues[e]&&this.current?null!=(i=this.getBaseTargetFromProps(this.props,e))?i:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];if(null!=r){if("string"==typeof r&&(iF(r)||tY(r)))r=parseFloat(r);else{let i;i=r,!sw.find(iH(i))&&im.test(t)&&(r=ik(e,t))}this.setBaseTarget(e,tM(r)?r.get():r)}return tM(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;let i,{initial:r}=this.props;if("string"==typeof r||"object"==typeof r){let n=eH(this.props,r,null==(t=this.presenceContext)?void 0:t.custom);n&&(i=n[e])}if(r&&void 0!==i)return i;let n=this.getBaseTargetFromProps(this.props,e);return void 0===n||tM(n)?void 0!==this.initialValues[e]&&void 0===i?void 0:this.baseTarget[e]:n}on(e,t){return this.events[e]||(this.events[e]=new tS),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class sC extends sE{constructor(){super(...arguments),this.KeyframeResolver=iq}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;tM(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}class sk extends sC{constructor(){super(...arguments),this.type="html",this.renderInstance=sn}readValueFromInstance(e,t){if(tp.has(t)){let e=iC(t);return e&&e.default||0}{let i=window.getComputedStyle(e),r=(iz(t)?i.getPropertyValue(t):i[t])||0;return"string"==typeof r?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return nm(e,t)}build(e,t,i){o3(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return sl(e,t,i)}}class sT extends sC{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ni}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(tp.has(t)){let e=iC(t);return e&&e.default||0}return t=so.has(t)?t:tL(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return su(e,t,i)}build(e,t,i){se(e,t,this.isSVGTag,i.transformTemplate)}renderInstance(e,t,i,r){ss(e,t,i,r)}mount(e){this.isSVGTag=sr(e.tagName),super.mount(e)}}let sP=function(e){if("undefined"==typeof Proxy)return e;let t=new Map;return new Proxy((...t)=>e(...t),{get:(i,r)=>"create"===r?e:(t.has(r)||t.set(r,e(r)),t.get(r))})}((o={animation:{Feature:rz},exit:{Feature:r_},inView:{Feature:oB},tap:{Feature:oV},focus:{Feature:oL},hover:{Feature:oD},pan:{Feature:nE},drag:{Feature:nx,ProjectionNode:oR,MeasureLayout:nN},layout:{ProjectionNode:oR,MeasureLayout:nN}},s=(e,t)=>o0(e)?new sT(t):new sk(t,{allowProjection:e!==d.Fragment}),function(e,{forwardMotionProps:t}={forwardMotionProps:!1}){return function(e){var t,i;let{preloadedFeatures:r,createVisualElement:n,useRender:o,useVisualState:s,Component:a}=e;function l(e,t){var i;let r,l={...(0,d.useContext)(oU),...e,layoutId:function(e){let{layoutId:t}=e,i=(0,d.useContext)(nT).id;return i&&void 0!==t?i+"-"+t:t}(e)},{isStatic:u}=l,c=function(e){let{initial:t,animate:i}=function(e,t){if(oH(e)){let{initial:t,animate:i}=e;return{initial:!1===t||eU(t)?t:void 0,animate:eU(i)?i:void 0}}return!1!==e.inherit?t:{}}(e,(0,d.useContext)(o$));return(0,d.useMemo)(()=>({initial:t,animate:i}),[oY(t),oY(i)])}(e),h=s(e,u);if(!u&&oq){(0,d.useContext)(o_).strict;let e=function(e){let{drag:t,layout:i}=oX;if(!t&&!i)return{};let r={...t,...i};return{MeasureLayout:(null==t?void 0:t.isEnabled(e))||(null==i?void 0:i.isEnabled(e))?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}(l);r=e.MeasureLayout,c.visualElement=function(e,t,i,r,n){var o,s;let{visualElement:a}=(0,d.useContext)(o$),l=(0,d.useContext)(o_),u=(0,d.useContext)(nC),c=(0,d.useContext)(oU).reducedMotion,h=(0,d.useRef)(null);r=r||l.renderer,!h.current&&r&&(h.current=r(e,{visualState:t,parent:a,props:i,presenceContext:u,blockInitialAnimation:!!u&&!1===u.initial,reducedMotionConfig:c}));let p=h.current,f=(0,d.useContext)(nP);p&&!p.projection&&n&&("html"===p.type||"svg"===p.type)&&function(e,t,i,r){let{layoutId:n,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:u}=t;e.projection=new i(e.latestValues,t["data-framer-portal-id"]?void 0:function e(t){if(t)return!1!==t.options.allowProjection?t.projection:e(t.parent)}(e.parent)),e.projection.setOptions({layoutId:n,layout:o,alwaysMeasureLayout:!!s||a&&rG(a),visualElement:e,animationType:"string"==typeof o?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}(h.current,i,n,f);let m=(0,d.useRef)(!1);(0,d.useInsertionEffect)(()=>{p&&m.current&&p.update(i,u)});let v=i[tN],g=(0,d.useRef)(!!v&&!(null==(o=window.MotionHandoffIsComplete)?void 0:o.call(window,v))&&(null==(s=window.MotionHasOptimisedAnimation)?void 0:s.call(window,v)));return oG(()=>{p&&(m.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),nM.render(p.render),g.current&&p.animationState&&p.animationState.animateChanges())}),(0,d.useEffect)(()=>{p&&(!g.current&&p.animationState&&p.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var e;null==(e=window.MotionHandoffMarkAsComplete)||e.call(window,v)}),g.current=!1))}),p}(a,h,l,n,e.ProjectionNode)}return(0,x.jsxs)(o$.Provider,{value:c,children:[r&&c.visualElement?(0,x.jsx)(r,{visualElement:c.visualElement,...l}):null,o(a,e,(i=c.visualElement,(0,d.useCallback)(e=>{e&&h.onMount&&h.onMount(e),i&&(e?i.mount(e):i.unmount()),t&&("function"==typeof t?t(e):rG(t)&&(t.current=e))},[i])),h,u,c.visualElement)]})}r&&function(e){for(let t in e)oX[t]={...oX[t],...e[t]}}(r),l.displayName="motion.".concat("string"==typeof a?a:"create(".concat(null!=(i=null!=(t=a.displayName)?t:a.name)?i:"",")"));let u=(0,d.forwardRef)(l);return u[oQ]=a,u}({...o0(e)?sd:sh,preloadedFeatures:o,useRender:function(e=!1){return(t,i,r,{latestValues:n},o)=>{let s=(o0(t)?function(e,t,i,r){let n=(0,d.useMemo)(()=>{let i=si();return se(i,t,sr(r),e.transformTemplate),{...i.attrs,style:{...i.style}}},[t]);if(e.style){let t={};sp(t,e.style,e),n.style={...t,...n.style}}return n}:function(e,t){let i={},r=function(e,t){let i=e.style||{},r={};return sp(r,i,e),Object.assign(r,function({transformTemplate:e},t){return(0,d.useMemo)(()=>{let i=st();return o3(i,t,e),Object.assign({},i.vars,i.style)},[t])}(e,t)),r}(e,t);return e.drag&&!1!==e.dragListener&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===e.drag?"none":`pan-${"x"===e.drag?"y":"x"}`),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=r,i})(i,n,o,t),a=function(e,t,i){let r={};for(let n in e)("values"!==n||"object"!=typeof e.values)&&(sv(n)||!0===i&&sm(n)||!t&&!sm(n)||e.draggable&&n.startsWith("onDrag"))&&(r[n]=e[n]);return r}(i,"string"==typeof t,e),l=t!==d.Fragment?{...a,...s,ref:r}:{},{children:u}=i,c=(0,d.useMemo)(()=>tM(u)?u.get():u,[u]);return(0,d.createElement)(t,{...l,children:c})}}(t),createVisualElement:s,Component:e})}));class sS extends d.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function sj(e){let{children:t,isPresent:i}=e,r=(0,d.useId)(),n=(0,d.useRef)(null),o=(0,d.useRef)({width:0,height:0,top:0,left:0}),{nonce:s}=(0,d.useContext)(oU);return(0,d.useInsertionEffect)(()=>{let{width:e,height:t,top:a,left:l}=o.current;if(i||!n.current||!e||!t)return;n.current.dataset.motionPopId=r;let u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule('\n          [data-motion-pop-id="'.concat(r,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(a,"px !important;\n            left: ").concat(l,"px !important;\n          }\n        ")),()=>{document.head.removeChild(u)}},[i]),(0,x.jsx)(sS,{isPresent:i,childRef:n,sizeRef:o,children:d.cloneElement(t,{ref:n})})}let sA=e=>{let{children:t,initial:i,isPresent:r,onExitComplete:n,custom:o,presenceAffectsLayout:s,mode:a}=e,l=o1(sR),u=(0,d.useId)(),c=(0,d.useCallback)(e=>{for(let t of(l.set(e,!0),l.values()))if(!t)return;n&&n()},[l,n]),h=(0,d.useMemo)(()=>({id:u,initial:i,isPresent:r,custom:o,onExitComplete:c,register:e=>(l.set(e,!1),()=>l.delete(e))}),s?[Math.random(),c]:[r,c]);return(0,d.useMemo)(()=>{l.forEach((e,t)=>l.set(t,!1))},[r]),d.useEffect(()=>{r||l.size||!n||n()},[r]),"popLayout"===a&&(t=(0,x.jsx)(sj,{isPresent:r,children:t})),(0,x.jsx)(nC.Provider,{value:h,children:t})};function sR(){return new Map}let sM=e=>e.key||"";function sD(e){let t=[];return d.Children.forEach(e,e=>{(0,d.isValidElement)(e)&&t.push(e)}),t}let sL=e=>{let{children:t,custom:i,initial:r=!0,onExitComplete:n,presenceAffectsLayout:o=!0,mode:s="sync",propagate:a=!1}=e,[l,u]=nk(a),c=(0,d.useMemo)(()=>sD(t),[t]),h=a&&!l?[]:c.map(sM),p=(0,d.useRef)(!0),f=(0,d.useRef)(c),m=o1(()=>new Map),[v,g]=(0,d.useState)(c),[y,w]=(0,d.useState)(c);oG(()=>{p.current=!1,f.current=c;for(let e=0;e<y.length;e++){let t=sM(y[e]);h.includes(t)?m.delete(t):!0!==m.get(t)&&m.set(t,!1)}},[y,h.length,h.join("-")]);let b=[];if(c!==v){let e=[...c];for(let t=0;t<y.length;t++){let i=y[t],r=sM(i);h.includes(r)||(e.splice(t,0,i),b.push(i))}"wait"===s&&b.length&&(e=b),w(sD(e)),g(c);return}let{forceRender:E}=(0,d.useContext)(nT);return(0,x.jsx)(x.Fragment,{children:y.map(e=>{let t=sM(e),d=(!a||!!l)&&(c===y||h.includes(t));return(0,x.jsx)(sA,{isPresent:d,initial:(!p.current||!!r)&&void 0,custom:d?void 0:i,presenceAffectsLayout:o,mode:s,onExitComplete:d?void 0:()=>{if(!m.has(t))return;m.set(t,!0);let e=!0;m.forEach(t=>{t||(e=!1)}),e&&(null==E||E(),w(f.current),a&&(null==u||u()),n&&n())},children:e},t)})})};var sN=h[" useId ".trim().toString()]||(()=>void 0),sV=0;function sO(e){let[t,i]=d.useState(sN());return ei(()=>{e||i(e=>e??String(sV++))},[e]),e||(t?`radix-${t}`:"")}var sI="focusScope.autoFocusOnMount",sF="focusScope.autoFocusOnUnmount",sW={bubbles:!1,cancelable:!0},sz=d.forwardRef((e,t)=>{let{loop:i=!1,trapped:r=!1,onMountAutoFocus:n,onUnmountAutoFocus:o,...s}=e,[a,l]=d.useState(null),u=Z(n),c=Z(o),h=d.useRef(null),p=M(t,e=>l(e)),f=d.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;d.useEffect(()=>{if(r){let e=function(e){if(f.paused||!a)return;let t=e.target;a.contains(t)?h.current=t:sU(h.current,{select:!0})},t=function(e){if(f.paused||!a)return;let t=e.relatedTarget;null!==t&&(a.contains(t)||sU(h.current,{select:!0}))};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let i=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&sU(a)});return a&&i.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),i.disconnect()}}},[r,a,f.paused]),d.useEffect(()=>{if(a){s$.add(f);let e=document.activeElement;if(!a.contains(e)){let t=new CustomEvent(sI,sW);a.addEventListener(sI,u),a.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=document.activeElement;for(let r of e)if(sU(r,{select:t}),document.activeElement!==i)return}(sB(a).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&sU(a))}return()=>{a.removeEventListener(sI,u),setTimeout(()=>{let t=new CustomEvent(sF,sW);a.addEventListener(sF,c),a.dispatchEvent(t),t.defaultPrevented||sU(null!=e?e:document.body,{select:!0}),a.removeEventListener(sF,c),s$.remove(f)},0)}}},[a,u,c,f]);let m=d.useCallback(e=>{if(!i&&!r||f.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,n=document.activeElement;if(t&&n){let t=e.currentTarget,[r,o]=function(e){let t=sB(e);return[s_(t,e),s_(t.reverse(),e)]}(t);r&&o?e.shiftKey||n!==o?e.shiftKey&&n===r&&(e.preventDefault(),i&&sU(o,{select:!0})):(e.preventDefault(),i&&sU(r,{select:!0})):n===t&&e.preventDefault()}},[i,r,f.paused]);return(0,x.jsx)(Y.div,{tabIndex:-1,...s,ref:p,onKeyDown:m})});function sB(e){let t=[],i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;i.nextNode();)t.push(i.currentNode);return t}function s_(e,t){for(let i of e)if(!function(e,t){let{upTo:i}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===i||e!==i);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(i,{upTo:t}))return i}function sU(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var i;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(i=e)instanceof HTMLInputElement&&"select"in i&&t&&e.select()}}sz.displayName="FocusScope";var s$=function(){let e=[];return{add(t){let i=e[0];t!==i&&(null==i||i.pause()),(e=sH(e,t)).unshift(t)},remove(t){var i;null==(i=(e=sH(e,t))[0])||i.resume()}}}();function sH(e,t){let i=[...e],r=i.indexOf(t);return -1!==r&&i.splice(r,1),i}var sK=0,sY=null;function sq(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var sZ=function(){return(sZ=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function sX(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(i[r[n]]=e[r[n]]);return i}Object.create;Object.create;var sQ=("function"==typeof SuppressedError&&SuppressedError,"right-scroll-bar-position"),sG="width-before-scroll-bar";function sJ(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var s0="undefined"!=typeof window?d.useLayoutEffect:d.useEffect,s1=new WeakMap;function s2(e){return e}var s5=function(e){void 0===e&&(e={});var t,i,r,n=(void 0===t&&(t=s2),i=[],r=!1,{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:null},useMedium:function(e){var n=t(e,r);return i.push(n),function(){i=i.filter(function(e){return e!==n})}},assignSyncMedium:function(e){for(r=!0;i.length;){var t=i;i=[],t.forEach(e)}i={push:function(t){return e(t)},filter:function(){return i}}},assignMedium:function(e){r=!0;var t=[];if(i.length){var n=i;i=[],n.forEach(e),t=i}var o=function(){var i=t;t=[],i.forEach(e)},s=function(){return Promise.resolve().then(o)};s(),i={push:function(e){t.push(e),s()},filter:function(e){return t=t.filter(e),i}}}});return n.options=sZ({async:!0,ssr:!1},e),n}(),s6=function(){},s8=d.forwardRef(function(e,t){var i,r,n,o,s=d.useRef(null),a=d.useState({onScrollCapture:s6,onWheelCapture:s6,onTouchMoveCapture:s6}),l=a[0],u=a[1],c=e.forwardProps,h=e.children,p=e.className,f=e.removeScrollBar,m=e.enabled,v=e.shards,g=e.sideCar,y=e.noRelative,w=e.noIsolation,x=e.inert,b=e.allowPinchZoom,E=e.as,C=e.gapMode,k=sX(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),T=(i=[s,t],r=function(e){return i.forEach(function(t){return sJ(t,e)})},(n=(0,d.useState)(function(){return{value:null,callback:r,facade:{get current(){return n.value},set current(value){var e=n.value;e!==value&&(n.value=value,n.callback(value,e))}}}})[0]).callback=r,o=n.facade,s0(function(){var e=s1.get(o);if(e){var t=new Set(e),r=new Set(i),n=o.current;t.forEach(function(e){r.has(e)||sJ(e,null)}),r.forEach(function(e){t.has(e)||sJ(e,n)})}s1.set(o,i)},[i]),o),P=sZ(sZ({},k),l);return d.createElement(d.Fragment,null,m&&d.createElement(g,{sideCar:s5,removeScrollBar:f,shards:v,noRelative:y,noIsolation:w,inert:x,setCallbacks:u,allowPinchZoom:!!b,lockRef:s,gapMode:C}),c?d.cloneElement(d.Children.only(h),sZ(sZ({},P),{ref:T})):d.createElement(void 0===E?"div":E,sZ({},P,{className:p,ref:T}),h))});s8.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},s8.classNames={fullWidth:sG,zeroRight:sQ};var s3=function(e){var t=e.sideCar,i=sX(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return d.createElement(r,sZ({},i))};s3.isSideCarExport=!0;var s7=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=c||i.nc;return t&&e.setAttribute("nonce",t),e}())){var n,o;(n=t).styleSheet?n.styleSheet.cssText=r:n.appendChild(document.createTextNode(r)),o=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},s9=function(){var e=s7();return function(t,i){d.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&i])}},s4=function(){var e=s9();return function(t){return e(t.styles,t.dynamic),null}},ae={left:0,top:0,right:0,gap:0},at=function(e){return parseInt(e||"",10)||0},ai=function(e){var t=window.getComputedStyle(document.body),i=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],n=t["padding"===e?"paddingRight":"marginRight"];return[at(i),at(r),at(n)]},ar=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return ae;var t=ai(e),i=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-i+t[2]-t[0])}},an=s4(),ao="data-scroll-locked",as=function(e,t,i,r){var n=e.left,o=e.top,s=e.right,a=e.gap;return void 0===i&&(i="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(a,"px ").concat(r,";\n  }\n  body[").concat(ao,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===i&&"\n    padding-left: ".concat(n,"px;\n    padding-top: ").concat(o,"px;\n    padding-right: ").concat(s,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a,"px ").concat(r,";\n    "),"padding"===i&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(sQ," {\n    right: ").concat(a,"px ").concat(r,";\n  }\n  \n  .").concat(sG," {\n    margin-right: ").concat(a,"px ").concat(r,";\n  }\n  \n  .").concat(sQ," .").concat(sQ," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(sG," .").concat(sG," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(ao,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(a,"px;\n  }\n")},aa=function(){var e=parseInt(document.body.getAttribute(ao)||"0",10);return isFinite(e)?e:0},al=function(){d.useEffect(function(){return document.body.setAttribute(ao,(aa()+1).toString()),function(){var e=aa()-1;e<=0?document.body.removeAttribute(ao):document.body.setAttribute(ao,e.toString())}},[])},au=function(e){var t=e.noRelative,i=e.noImportant,r=e.gapMode,n=void 0===r?"margin":r;al();var o=d.useMemo(function(){return ar(n)},[n]);return d.createElement(an,{styles:as(o,!t,n,i?"":"!important")})},ac=!1;if("undefined"!=typeof window)try{var ad=Object.defineProperty({},"passive",{get:function(){return ac=!0,!0}});window.addEventListener("test",ad,ad),window.removeEventListener("test",ad,ad)}catch(e){ac=!1}var ah=!!ac&&{passive:!1},ap=function(e,t){if(!(e instanceof Element))return!1;var i=window.getComputedStyle(e);return"hidden"!==i[t]&&(i.overflowY!==i.overflowX||"TEXTAREA"===e.tagName||"visible"!==i[t])},af=function(e,t){var i=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),am(e,r)){var n=av(e,r);if(n[1]>n[2])return!0}r=r.parentNode}while(r&&r!==i.body);return!1},am=function(e,t){return"v"===e?ap(t,"overflowY"):ap(t,"overflowX")},av=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},ag=function(e,t,i,r,n){var o,s=(o=window.getComputedStyle(t).direction,"h"===e&&"rtl"===o?-1:1),a=s*r,l=i.target,u=t.contains(l),c=!1,d=a>0,h=0,p=0;do{if(!l)break;var f=av(e,l),m=f[0],v=f[1]-f[2]-s*m;(m||v)&&am(e,l)&&(h+=v,p+=m);var g=l.parentNode;l=g&&g.nodeType===Node.DOCUMENT_FRAGMENT_NODE?g.host:g}while(!u&&l!==document.body||u&&(t.contains(l)||t===l));return d&&(n&&1>Math.abs(h)||!n&&a>h)?c=!0:!d&&(n&&1>Math.abs(p)||!n&&-a>p)&&(c=!0),c},ay=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},aw=function(e){return[e.deltaX,e.deltaY]},ax=function(e){return e&&"current"in e?e.current:e},ab=0,aE=[];let aC=(a=function(e){var t=d.useRef([]),i=d.useRef([0,0]),r=d.useRef(),n=d.useState(ab++)[0],o=d.useState(s4)[0],s=d.useRef(e);d.useEffect(function(){s.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(n));var t=(function(e,t,i){if(i||2==arguments.length)for(var r,n=0,o=t.length;n<o;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(ax),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(n))}),function(){document.body.classList.remove("block-interactivity-".concat(n)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(n))})}}},[e.inert,e.lockRef.current,e.shards]);var a=d.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!s.current.allowPinchZoom;var n,o=ay(e),a=i.current,l="deltaX"in e?e.deltaX:a[0]-o[0],u="deltaY"in e?e.deltaY:a[1]-o[1],c=e.target,d=Math.abs(l)>Math.abs(u)?"h":"v";if("touches"in e&&"h"===d&&"range"===c.type)return!1;var h=window.getSelection(),p=h&&h.anchorNode;if(p&&(p===c||p.contains(c)))return!1;var f=af(d,c);if(!f)return!0;if(f?n=d:(n="v"===d?"h":"v",f=af(d,c)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||u)&&(r.current=n),!n)return!0;var m=r.current||n;return ag(m,t,e,"h"===m?l:u,!0)},[]),l=d.useCallback(function(e){if(aE.length&&aE[aE.length-1]===o){var i="deltaY"in e?aw(e):ay(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta,r[0]===i[0]&&r[1]===i[1])})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var n=(s.current.shards||[]).map(ax).filter(Boolean).filter(function(t){return t.contains(e.target)});(n.length>0?a(e,n[0]):!s.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),u=d.useCallback(function(e,i,r,n){var o={name:e,delta:i,target:r,should:n,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(o),setTimeout(function(){t.current=t.current.filter(function(e){return e!==o})},1)},[]),c=d.useCallback(function(e){i.current=ay(e),r.current=void 0},[]),h=d.useCallback(function(t){u(t.type,aw(t),t.target,a(t,e.lockRef.current))},[]),p=d.useCallback(function(t){u(t.type,ay(t),t.target,a(t,e.lockRef.current))},[]);d.useEffect(function(){return aE.push(o),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:p}),document.addEventListener("wheel",l,ah),document.addEventListener("touchmove",l,ah),document.addEventListener("touchstart",c,ah),function(){aE=aE.filter(function(e){return e!==o}),document.removeEventListener("wheel",l,ah),document.removeEventListener("touchmove",l,ah),document.removeEventListener("touchstart",c,ah)}},[]);var f=e.removeScrollBar,m=e.inert;return d.createElement(d.Fragment,null,m?d.createElement(o,{styles:"\n  .block-interactivity-".concat(n," {pointer-events: none;}\n  .allow-interactivity-").concat(n," {pointer-events: all;}\n")}):null,f?d.createElement(au,{noRelative:e.noRelative,gapMode:e.gapMode}):null)},s5.useMedium(a),s3);var ak=d.forwardRef(function(e,t){return d.createElement(s8,sZ({},e,{ref:t,sideCar:aC}))});ak.classNames=s8.classNames;var aT=new WeakMap,aP=new WeakMap,aS={},aj=0,aA=function(e){return e&&(e.host||aA(e.parentNode))},aR=function(e,t,i,r){var n=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var i=aA(e);return i&&t.contains(i)?i:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});aS[i]||(aS[i]=new WeakMap);var o=aS[i],s=[],a=new Set,l=new Set(n),u=function(e){!e||a.has(e)||(a.add(e),u(e.parentNode))};n.forEach(u);var c=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(a.has(e))c(e);else try{var t=e.getAttribute(r),n=null!==t&&"false"!==t,l=(aT.get(e)||0)+1,u=(o.get(e)||0)+1;aT.set(e,l),o.set(e,u),s.push(e),1===l&&n&&aP.set(e,!0),1===u&&e.setAttribute(i,"true"),n||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return c(t),a.clear(),aj++,function(){s.forEach(function(e){var t=aT.get(e)-1,n=o.get(e)-1;aT.set(e,t),o.set(e,n),t||(aP.has(e)||e.removeAttribute(r),aP.delete(e)),n||e.removeAttribute(i)}),--aj||(aT=new WeakMap,aT=new WeakMap,aP=new WeakMap,aS={})}},aM=function(e,t,i){void 0===i&&(i="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),n=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return n?(r.push.apply(r,Array.from(n.querySelectorAll("[aria-live], script"))),aR(r,n,i,"aria-hidden")):function(){return null}},aD="Dialog",[aL,aN]=V(aD),[aV,aO]=aL(aD),aI=e=>{let{__scopeDialog:t,children:i,open:r,defaultOpen:n,onOpenChange:o,modal:s=!0}=e,a=d.useRef(null),l=d.useRef(null),[u,c]=el({prop:r,defaultProp:null!=n&&n,onChange:o,caller:aD});return(0,x.jsx)(aV,{scope:t,triggerRef:a,contentRef:l,contentId:sO(),titleId:sO(),descriptionId:sO(),open:u,onOpenChange:c,onOpenToggle:d.useCallback(()=>c(e=>!e),[c]),modal:s,children:i})};aI.displayName=aD;var aF="DialogTrigger";d.forwardRef((e,t)=>{let{__scopeDialog:i,...r}=e,n=aO(aF,i),o=M(t,n.triggerRef);return(0,x.jsx)(Y.button,{type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.open?n.contentId:void 0,"data-state":a5(n.open),...r,ref:o,onClick:A(e.onClick,n.onOpenToggle)})}).displayName=aF;var aW="DialogPortal",[az,aB]=aL(aW,{forceMount:void 0}),a_=e=>{let{__scopeDialog:t,forceMount:i,children:r,container:n}=e,o=aO(aW,t);return(0,x.jsx)(az,{scope:t,forceMount:i,children:d.Children.map(r,e=>(0,x.jsx)(en,{present:i||o.open,children:(0,x.jsx)(er,{asChild:!0,container:n,children:e})}))})};a_.displayName=aW;var aU="DialogOverlay",a$=d.forwardRef((e,t)=>{let i=aB(aU,e.__scopeDialog),{forceMount:r=i.forceMount,...n}=e,o=aO(aU,e.__scopeDialog);return o.modal?(0,x.jsx)(en,{present:r||o.open,children:(0,x.jsx)(aK,{...n,ref:t})}):null});a$.displayName=aU;var aH=O("DialogOverlay.RemoveScroll"),aK=d.forwardRef((e,t)=>{let{__scopeDialog:i,...r}=e,n=aO(aU,i);return(0,x.jsx)(ak,{as:aH,allowPinchZoom:!0,shards:[n.contentRef],children:(0,x.jsx)(Y.div,{"data-state":a5(n.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),aY="DialogContent",aq=d.forwardRef((e,t)=>{let i=aB(aY,e.__scopeDialog),{forceMount:r=i.forceMount,...n}=e,o=aO(aY,e.__scopeDialog);return(0,x.jsx)(en,{present:r||o.open,children:o.modal?(0,x.jsx)(aZ,{...n,ref:t}):(0,x.jsx)(aX,{...n,ref:t})})});aq.displayName=aY;var aZ=d.forwardRef((e,t)=>{let i=aO(aY,e.__scopeDialog),r=d.useRef(null),n=M(t,i.contentRef,r);return d.useEffect(()=>{let e=r.current;if(e)return aM(e)},[]),(0,x.jsx)(aQ,{...e,ref:n,trapFocus:i.open,disableOutsidePointerEvents:i.open,onCloseAutoFocus:A(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null==(t=i.triggerRef.current)||t.focus()}),onPointerDownOutside:A(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,i=0===t.button&&!0===t.ctrlKey;(2===t.button||i)&&e.preventDefault()}),onFocusOutside:A(e.onFocusOutside,e=>e.preventDefault())})}),aX=d.forwardRef((e,t)=>{let i=aO(aY,e.__scopeDialog),r=d.useRef(!1),n=d.useRef(!1);return(0,x.jsx)(aQ,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,s;null==(o=e.onCloseAutoFocus)||o.call(e,t),t.defaultPrevented||(r.current||null==(s=i.triggerRef.current)||s.focus(),t.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:t=>{var o,s;null==(o=e.onInteractOutside)||o.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"===t.detail.originalEvent.type&&(n.current=!0));let a=t.target;(null==(s=i.triggerRef.current)?void 0:s.contains(a))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&n.current&&t.preventDefault()}})}),aQ=d.forwardRef((e,t)=>{let{__scopeDialog:i,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:o,...s}=e,a=aO(aY,i),l=d.useRef(null),u=M(t,l);return d.useEffect(()=>{sY||(sY={start:sq(),end:sq()});let{start:e,end:t}=sY;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),sK++,()=>{1===sK&&(null==sY||sY.start.remove(),null==sY||sY.end.remove(),sY=null),sK=Math.max(0,sK-1)}},[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(sz,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:n,onUnmountAutoFocus:o,children:(0,x.jsx)(G,{role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":a5(a.open),...s,ref:u,onDismiss:()=>a.onOpenChange(!1)})}),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a7,{titleId:a.titleId}),(0,x.jsx)(a9,{contentRef:l,descriptionId:a.descriptionId})]})]})}),aG="DialogTitle",aJ=d.forwardRef((e,t)=>{let{__scopeDialog:i,...r}=e,n=aO(aG,i);return(0,x.jsx)(Y.h2,{id:n.titleId,...r,ref:t})});aJ.displayName=aG;var a0="DialogDescription";d.forwardRef((e,t)=>{let{__scopeDialog:i,...r}=e,n=aO(a0,i);return(0,x.jsx)(Y.p,{id:n.descriptionId,...r,ref:t})}).displayName=a0;var a1="DialogClose",a2=d.forwardRef((e,t)=>{let{__scopeDialog:i,...r}=e,n=aO(a1,i);return(0,x.jsx)(Y.button,{type:"button",...r,ref:t,onClick:A(e.onClick,()=>n.onOpenChange(!1))})});function a5(e){return e?"open":"closed"}a2.displayName=a1;var a6="DialogTitleWarning",[a8,a3]=function(e,t){let i=d.createContext(t);i.displayName=e+"Context";let r=e=>{let{children:t,...r}=e,n=d.useMemo(()=>r,Object.values(r));return(0,x.jsx)(i.Provider,{value:n,children:t})};return r.displayName=e+"Provider",[r,function(r){let n=d.useContext(i);if(n)return n;if(void 0!==t)return t;throw Error(`\`${r}\` must be used within \`${e}\``)}]}(a6,{contentName:aY,titleName:aG,docsSlug:"dialog"}),a7=e=>{let{titleId:t}=e,i=a3(a6),r="`".concat(i.contentName,"` requires a `").concat(i.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(i.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(i.docsSlug);return d.useEffect(()=>{t&&(document.getElementById(t)||console.error(r))},[r,t]),null},a9=e=>{let{contentRef:t,descriptionId:i}=e,r=a3("DialogDescriptionWarning"),n="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return d.useEffect(()=>{var e;let r=null==(e=t.current)?void 0:e.getAttribute("aria-describedby");i&&r&&(document.getElementById(i)||console.warn(n))},[n,t,i]),null};i(8954),i(9320),i(1629);var a4=()=>{let[e,t]=(0,d.useState)("undefined"!=typeof window&&window.matchMedia("(max-width: 1024px)").matches?"mobile":"desktop");return(0,d.useEffect)(()=>{let e=window.matchMedia("(max-width: 1024px)"),i=e=>t(e.matches?"mobile":"desktop");return i(e),e.addEventListener("change",i),()=>{e.removeEventListener("change",i)}},[]),e},le=`/* Remote TWK Lausanne font definitions */
@font-face {
  font-family: 'TWK Lausanne';
  src: url('https://world-id-assets.com/fonts/TWKLausanne-200.woff2') format('woff2');
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TWK Lausanne';
  src: url('https://world-id-assets.com/fonts/TWKLausanne-300.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TWK Lausanne';
  src: url('https://world-id-assets.com/fonts/TWKLausanne-350.woff2') format('woff2');
  font-weight: 350;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TWK Lausanne';
  src: url('https://world-id-assets.com/fonts/TWKLausanne-400.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TWK Lausanne';
  src: url('https://world-id-assets.com/fonts/TWKLausanne-450.woff2') format('woff2');
  font-weight: 450;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TWK Lausanne';
  src: url('https://world-id-assets.com/fonts/TWKLausanne-500.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TWK Lausanne';
  src: url('https://world-id-assets.com/fonts/TWKLausanne-550.woff2') format('woff2');
  font-weight: 550;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TWK Lausanne';
  src: url('https://world-id-assets.com/fonts/TWKLausanne-600.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

/* ! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com */

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: TWK Lausanne, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

[type='text'],input:where(:not([type])),[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, input:where(:not([type])):focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #2563eb;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6b7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6b7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
  text-align: inherit;
}

::-webkit-datetime-edit {
  display: inline-flex;
}

::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {
  padding-top: 0;
  padding-bottom: 0;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
}

[multiple],[size]:where(select:not([size="1"])) {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

@media (forced-colors: active)  {
  [type='checkbox']:checked {
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

@media (forced-colors: active)  {
  [type='radio']:checked {
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

@media (forced-colors: active)  {
  [type='checkbox']:indeterminate {
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px solid ButtonText;
  outline: 1px auto -webkit-focus-ring-color;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
.container {
  width: 100%;
}
@media (min-width: 414px) {
  .container {
    max-width: 414px;
  }
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
.visible {
  visibility: visible;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.inset-0 {
  inset: 0;
}
.z-50 {
  z-index: 50;
}
.z-\\[9999\\] {
  z-index: 9999;
}
.mx-6 {
  margin-left: 24px;
  margin-right: 24px;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.-mt-5 {
  margin-top: -20px;
}
.-mt-6 {
  margin-top: -24px;
}
.mb-10 {
  margin-bottom: 40px;
}
.mb-3 {
  margin-bottom: 12px;
}
.mb-4 {
  margin-bottom: 16px;
}
.mb-6 {
  margin-bottom: 24px;
}
.mt-2 {
  margin-top: 8px;
}
.mt-3 {
  margin-top: 12px;
}
.mt-4 {
  margin-top: 16px;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.hidden {
  display: none;
}
.size-14 {
  width: 56px;
  height: 56px;
}
.size-24 {
  width: 96px;
  height: 96px;
}
.size-4 {
  width: 16px;
  height: 16px;
}
.size-5 {
  width: 20px;
  height: 20px;
}
.size-6 {
  width: 24px;
  height: 24px;
}
.size-8 {
  width: 32px;
  height: 32px;
}
.size-\\[200px\\] {
  width: 200px;
  height: 200px;
}
.min-h-full {
  min-height: 100%;
}
.min-h-screen {
  min-height: 100vh;
}
.w-24 {
  width: 96px;
}
.w-full {
  width: 100%;
}
.max-w-\\[224px\\] {
  max-width: 224px;
}
.max-w-\\[260px\\] {
  max-width: 260px;
}
.flex-1 {
  flex: 1 1 0%;
}
@keyframes pulse {
  50% {
    opacity: .5;
  }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
.cursor-pointer {
  cursor: pointer;
}
.flex-col {
  flex-direction: column;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(8px * var(--tw-space-x-reverse));
  margin-left: calc(8px * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(16px * var(--tw-space-x-reverse));
  margin-left: calc(16px * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-10 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(40px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(40px * var(--tw-space-y-reverse));
}
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(16px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(16px * var(--tw-space-y-reverse));
}
.space-y-5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(20px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(20px * var(--tw-space-y-reverse));
}
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(24px * var(--tw-space-y-reverse));
}
.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(32px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(32px * var(--tw-space-y-reverse));
}
.overflow-y-hidden {
  overflow-y: hidden;
}
.rounded-2xl {
  border-radius: 1rem;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.border {
  border-width: 1px;
}
.border-\\[1\\.2px\\] {
  border-width: 1.2px;
}
.border-t {
  border-top-width: 1px;
}
.border-solid {
  border-style: solid;
}
.border-\\[\\#EBECEF\\] {
  --tw-border-opacity: 1;
  border-color: rgb(235 236 239 / var(--tw-border-opacity));
}
.border-ebecef {
  --tw-border-opacity: 1;
  border-color: rgb(235 236 239 / var(--tw-border-opacity));
}
.border-f1f5f8 {
  --tw-border-opacity: 1;
  border-color: rgb(241 245 248 / var(--tw-border-opacity));
}
.border-f5f5f7 {
  --tw-border-opacity: 1;
  border-color: rgb(245 245 247 / var(--tw-border-opacity));
}
.border-transparent {
  border-color: transparent;
}
.bg-0d151d {
  --tw-bg-opacity: 1;
  background-color: rgb(13 21 29 / var(--tw-bg-opacity));
}
.bg-black\\/50 {
  background-color: rgb(0 0 0 / 0.5);
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.p-3 {
  padding: 12px;
}
.p-4 {
  padding: 16px;
}
.p-7 {
  padding: 28px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.px-8 {
  padding-left: 32px;
  padding-right: 32px;
}
.py-1 {
  padding-top: 4px;
  padding-bottom: 4px;
}
.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}
.pt-6 {
  padding-top: 24px;
}
.text-center {
  text-align: center;
}
.font-sans {
  font-family: TWK Lausanne, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.text-2xl {
  font-size: 24px;
  line-height: 32px;
}
.text-lg {
  font-size: 18px;
  line-height: 28px;
}
.text-sm {
  font-size: 14px;
  line-height: 20px;
}
.text-xs {
  font-size: 12px;
  line-height: 16px;
}
.font-light {
  font-weight: 300;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.text-0d151d {
  --tw-text-opacity: 1;
  color: rgb(13 21 29 / var(--tw-text-opacity));
}
.text-29343f {
  --tw-text-opacity: 1;
  color: rgb(41 52 63 / var(--tw-text-opacity));
}
.text-3c424b {
  --tw-text-opacity: 1;
  color: rgb(60 66 75 / var(--tw-text-opacity));
}
.text-657080 {
  --tw-text-opacity: 1;
  color: rgb(101 112 128 / var(--tw-text-opacity));
}
.text-70868f {
  --tw-text-opacity: 1;
  color: rgb(112 134 143 / var(--tw-text-opacity));
}
.text-9ba3ae {
  --tw-text-opacity: 1;
  color: rgb(155 163 174 / var(--tw-text-opacity));
}
.text-9eafc0 {
  --tw-text-opacity: 1;
  color: rgb(158 175 192 / var(--tw-text-opacity));
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.opacity-40 {
  opacity: 0.4;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.blur-lg {
  --tw-blur: blur(16px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-lg {
  --tw-backdrop-blur: blur(16px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.duration-500 {
  transition-duration: 500ms;
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
          appearance: none;
}
.hover\\:underline:hover {
  text-decoration-line: underline;
}
.hover\\:shadow:hover {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-indigo-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity));
}
.focus\\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}
.focus-visible\\:ring:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus-visible\\:ring-purple-500\\/75:focus-visible {
  --tw-ring-color: rgb(168 85 247 / 0.75);
}
.disabled\\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}
.disabled\\:opacity-40:disabled {
  opacity: 0.4;
}
@media (prefers-reduced-motion: reduce) {
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  .motion-reduce\\:animate-\\[spin_1\\.5s_linear_infinite\\] {
    animation: spin 1.5s linear infinite;
  }
}
.dark\\:border-f1f5f8\\/10:is(.dark *) {
  border-color: rgb(241 245 248 / 0.1);
}
.dark\\:bg-0d151d:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(13 21 29 / var(--tw-bg-opacity));
}
.dark\\:bg-white:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.dark\\:text-0d151d:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(13 21 29 / var(--tw-text-opacity));
}
.dark\\:text-9eafc0:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(158 175 192 / var(--tw-text-opacity));
}
.dark\\:text-white:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
@media (min-width: 768px) {
  .md\\:mt-2 {
    margin-top: 8px;
  }
  .md\\:block {
    display: block;
  }
  .md\\:hidden {
    display: none;
  }
  .md\\:min-h-\\[35rem\\] {
    min-height: 35rem;
  }
  .md\\:max-w-md {
    max-width: 448px;
  }
  .md\\:items-center {
    align-items: center;
  }
  .md\\:overflow-y-auto {
    overflow-y: auto;
  }
  .md\\:rounded-\\[24px\\] {
    border-radius: 24px;
  }
  .md\\:rounded-b-2xl {
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  .md\\:p-4 {
    padding: 16px;
  }
}
@media (min-width: 1280px) {
  .xl\\:block {
    display: block;
  }
  .xl\\:hidden {
    display: none;
  }
}
`,lt=()=>(0,x.jsx)("style",{children:le}),li=({id:e,children:t,mode:i="open",delegatesFocus:r=!1})=>{let[n,o]=(0,d.useState)(null),s=(0,d.useCallback)(e=>{e&&o(e.shadowRoot??e.attachShadow({mode:i,delegatesFocus:r}))},[i,r]);return(0,x.jsx)("div",{ref:s,id:e,children:n&&j.createPortal(t,n)})},lr=e=>(0,x.jsx)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:(0,x.jsx)("path",{strokeWidth:"1.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m16.243 7.758-8.485 8.485m8.485 0L7.758 7.758"})}),ln=function(){for(var e,t,i=0,r="",n=arguments.length;i<n;i++)(e=arguments[i])&&(t=function e(t){var i,r,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t)if(Array.isArray(t)){var o=t.length;for(i=0;i<o;i++)t[i]&&(r=e(t[i]))&&(n&&(n+=" "),n+=r)}else for(r in t)t[r]&&(n&&(n+=" "),n+=r);return n}(e))&&(r&&(r+=" "),r+=t);return r},lo=e=>(0,x.jsxs)("svg",{width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,x.jsx)("rect",{width:"88",height:"88",rx:"44",fill:"#9BA3AE"}),(0,x.jsx)("rect",{opacity:"0.2",width:"88",height:"88",rx:"44",fill:"url(#paint0_radial_117706_3198)"}),(0,x.jsx)("rect",{x:"0.5",y:"0.5",width:"87",height:"87",rx:"43.5",stroke:"url(#paint1_linear_117706_3198)"}),(0,x.jsx)("path",{d:"M33.0146 53.9853L43.4999 43.5M53.9851 33.0147L43.4999 43.5M43.4999 43.5L33.0146 33.0147M43.4999 43.5L53.9851 53.9853",stroke:"white",strokeWidth:"3"}),(0,x.jsxs)("defs",{children:[(0,x.jsxs)("radialGradient",{id:"paint0_radial_117706_3198",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(20 -1.6729e-06) rotate(63.4349) scale(98.387 97.9627)",children:[(0,x.jsx)("stop",{stopColor:"white"}),(0,x.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,x.jsxs)("linearGradient",{id:"paint1_linear_117706_3198",x1:"44",y1:"0",x2:"44",y2:"88",gradientUnits:"userSpaceOnUse",children:[(0,x.jsx)("stop",{stopColor:"white",stopOpacity:"0.3"}),(0,x.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})]})]}),ls=e=>(0,x.jsxs)("svg",{width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,x.jsx)("rect",{width:"88",height:"88",rx:"44",fill:"#FFAE00"}),(0,x.jsx)("rect",{opacity:"0.2",width:"88",height:"88",rx:"44",fill:"url(#paint0_radial_117706_3182)"}),(0,x.jsx)("rect",{x:"0.5",y:"0.5",width:"87",height:"87",rx:"43.5",stroke:"url(#paint1_linear_117706_3182)"}),(0,x.jsx)("path",{d:"M64.1707 59.5415H22.8298L43.4998 22.3354L64.1707 59.5415ZM42.1208 51.3003L42.1218 54.0503H44.8992L44.8982 51.3003H42.1208ZM42.1248 46.7085H44.8748V36.6255H42.1248V46.7085Z",fill:"white"}),(0,x.jsxs)("defs",{children:[(0,x.jsxs)("radialGradient",{id:"paint0_radial_117706_3182",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(20 -1.6729e-06) rotate(63.4349) scale(98.387 97.9627)",children:[(0,x.jsx)("stop",{stopColor:"white"}),(0,x.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,x.jsxs)("linearGradient",{id:"paint1_linear_117706_3182",x1:"44",y1:"0",x2:"44",y2:"88",gradientUnits:"userSpaceOnUse",children:[(0,x.jsx)("stop",{stopColor:"white",stopOpacity:"0.3"}),(0,x.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})]})]}),la=({retryFlow:e,errorState:t})=>({retryFlow:e,errorState:t}),ll=e=>{switch(e){case y._W.GenericError:return k("Something went wrong");case y._W.FailedByHostApp:return k("Verification Declined");case y._W.VerificationRejected:return k("Request cancelled");default:return k("Something went wrong")}},lu=e=>{switch(e){case y._W.ConnectionFailed:return k("Connection to your wallet failed. Please try again.");case y._W.VerificationRejected:return k("You've cancelled the request in World App.");case y._W.MaxVerificationsReached:return k("You've already verified the maximum number of times for this action.");case y._W.CredentialUnavailable:return k("It seems you don't have the verification level required by this app.");case y._W.InvalidNetwork:return k("Invalid network. If you are the app owner, visit docs.world.org/test for details.");case y._W.InclusionProofPending:return k("Your identity is still being registered. Please wait a few minutes and try again.");case y._W.GenericError:default:return k("We couldn't complete your request. Please try again.")}},lc=e=>{let{retryFlow:t,errorState:i}=T(la),{show_modal:r}=e;return(0,d.useEffect)(()=>{i&&console.error("Error state: ",i)},[i]),(0,x.jsxs)("div",{className:"space-y-8",children:[(0,x.jsx)("div",{className:ln("flex items-center justify-center",r?"-mt-5":""),children:i?.code==y._W.VerificationRejected?(0,x.jsx)(ls,{className:"w-24"}):(0,x.jsx)(lo,{className:"w-24"})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:"text-center text-2xl font-semibold text-gray-900 dark:text-white",children:i?.code?ll(i.code):ll(y._W.GenericError)}),(0,x.jsx)("p",{className:"mx-auto mt-2 max-w-[224px] text-center text-657080",children:i?.code?lu(i.code):lu(y._W.GenericError)})]}),(0,x.jsx)("div",{className:"flex justify-center",children:(0,x.jsx)("button",{type:"button",onClick:t,className:"inline-flex items-center rounded-full border-[1.2px] border-ebecef bg-transparent px-8 py-3 font-semibold text-gray-900 shadow-sm transition duration-300 hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40",children:k("Try Again")})})]})},ld=e=>(0,x.jsxs)("svg",{width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,x.jsx)("rect",{width:"88",height:"88",rx:"44",fill:"#00C230"}),(0,x.jsx)("rect",{opacity:"0.2",width:"88",height:"88",rx:"44",fill:"url(#paint0_radial_117706_3174)"}),(0,x.jsx)("rect",{x:"0.5",y:"0.5",width:"87",height:"87",rx:"43.5",stroke:"url(#paint1_linear_117706_3174)"}),(0,x.jsx)("path",{d:"M29.5 45.5L37.5 53.5L57.5 33.5",stroke:"white",strokeWidth:"3"}),(0,x.jsxs)("defs",{children:[(0,x.jsxs)("radialGradient",{id:"paint0_radial_117706_3174",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(20 -1.6729e-06) rotate(63.4349) scale(98.387 97.9627)",children:[(0,x.jsx)("stop",{stopColor:"white"}),(0,x.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,x.jsxs)("linearGradient",{id:"paint1_linear_117706_3174",x1:"44",y1:"0",x2:"44",y2:"88",gradientUnits:"userSpaceOnUse",children:[(0,x.jsx)("stop",{stopColor:"white",stopOpacity:"0.3"}),(0,x.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})]})]}),lh=e=>(0,x.jsxs)("div",{className:"space-y-6",children:[(0,x.jsx)("div",{className:ln("flex items-center justify-center",e.show_modal?"-mt-5":""),children:(0,x.jsx)(ld,{className:"w-24 text-white"})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:"text-center text-2xl font-semibold text-gray-900 dark:text-white",children:k("All set!")}),(0,x.jsx)("p",{className:"mx-auto mt-2 max-w-[260px] text-center text-lg text-657080",children:k("Your World ID is now connected")})]})]}),lp=e=>(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",...e,children:(0,x.jsx)("path",{d:"M30.7367 9.77239C29.9301 7.86586 28.7772 6.15721 27.3084 4.68831C25.8397 3.21941 24.1275 2.06636 22.225 1.2596C20.2502 0.422405 18.1574 0 15.9962 0C13.8388 0 11.7422 0.422405 9.76742 1.2596C7.86112 2.06636 6.15268 3.21941 4.68395 4.68831C3.21522 6.15721 2.06231 7.86966 1.25565 9.77239C0.422354 11.7436 0 13.8404 0 15.9981C0 18.1558 0.422354 20.2526 1.25945 22.2276C2.06611 24.1341 3.21903 25.8428 4.68775 27.3117C6.15648 28.7806 7.86873 29.9336 9.77122 30.7404C11.746 31.5738 13.8388 32 16 32C18.1574 32 20.254 31.5776 22.2288 30.7404C24.1351 29.9336 25.8435 28.7806 27.3122 27.3117C28.781 25.8428 29.9339 24.1303 30.7405 22.2276C31.5738 20.2526 32 18.1596 32 15.9981C31.9962 13.8404 31.57 11.7436 30.7367 9.77239ZM10.6844 14.4949C11.3503 11.9377 13.679 10.0464 16.4452 10.0464H27.552C28.2673 11.4278 28.7239 12.9309 28.9027 14.4949H10.6844ZM28.9027 17.5012C28.7239 19.0653 28.2635 20.5684 27.552 21.9498H16.4452C13.6828 21.9498 11.3541 20.0585 10.6844 17.5012H28.9027ZM6.81094 6.81175C9.26516 4.35724 12.526 3.0063 15.9962 3.0063C19.4663 3.0063 22.7272 4.35724 25.1815 6.81175C25.2576 6.88786 25.3298 6.96397 25.4021 7.04008H16.4452C14.0518 7.04008 11.8031 7.97241 10.1099 9.66583C8.77812 10.9977 7.91819 12.6759 7.60999 14.4988H3.09346C3.42449 11.5952 4.71439 8.90855 6.81094 6.81175ZM15.9962 28.9937C12.526 28.9937 9.26516 27.6428 6.81094 25.1883C4.71439 23.0915 3.42449 20.4048 3.09346 17.5051H7.60999C7.91439 19.3279 8.77812 21.0061 10.1099 22.338C11.8031 24.0314 14.0518 24.9637 16.4452 24.9637H25.4059C25.3337 25.0398 25.2576 25.1159 25.1853 25.1921C22.731 27.639 19.4663 28.9937 15.9962 28.9937Z",fill:"currentColor"})}),lf=e=>(0,x.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 200 200",children:[(0,x.jsx)("path",{fill:"#EBECEF",fillRule:"evenodd",d:"M12.1 0C5.417 0 0 5.417 0 12.1v18.505c0 6.682 5.417 12.1 12.1 12.1h18.505c6.682 0 12.1-5.418 12.1-12.1V12.1c0-6.683-5.418-12.1-12.1-12.1H12.1Zm18.505 11.388H12.1a.712.712 0 0 0-.712.712v18.505c0 .393.319.712.712.712h18.505a.712.712 0 0 0 .712-.712V12.1a.712.712 0 0 0-.712-.712Z",clipRule:"evenodd"}),(0,x.jsx)("path",{fill:"#EBECEF",d:"M197.026 200c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-17.616c0-.778-.313-1.525-.871-2.076a2.996 2.996 0 0 0-2.103-.86h-5.948c-.789 0-1.545.31-2.103.86a2.918 2.918 0 0 0-.871 2.076v8.808h-11.897v-11.744h-11.896v-23.487h11.896v8.808c0 .778.314 1.525.872 2.076.557.55 1.314.86 2.102.86h5.949c.788 0 1.545-.31 2.103-.86a2.922 2.922 0 0 0 .871-2.076v-8.808h8.922c.789 0 1.545-.309 2.103-.86a2.916 2.916 0 0 0 .871-2.076v-5.872c0-.779-.313-1.525-.871-2.076a2.992 2.992 0 0 0-2.103-.86h-29.741c-.789 0-1.545.309-2.103.86a2.916 2.916 0 0 0-.871 2.076v8.808h-23.792v-11.744h8.922c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-5.872c0-.778-.313-1.525-.871-2.076a2.996 2.996 0 0 0-2.103-.86h-5.948c-.789 0-1.546.31-2.103.86a2.918 2.918 0 0 0-.871 2.076v8.808H119.7c-.789 0-1.545.309-2.103.86a2.916 2.916 0 0 0-.871 2.076v5.872c0 .779.313 1.525.871 2.076.558.551 1.314.86 2.103.86h20.819v8.808c0 .778.313 1.525.871 2.076.557.55 1.314.86 2.103.86h8.922v8.808c0 .778.313 1.525.871 2.076.558.55 1.314.859 2.103.859h8.922v11.744h-20.818c-.789 0-1.546.31-2.103.86a2.916 2.916 0 0 0-.871 2.076v5.872c0 .779.313 1.526.871 2.076a2.99 2.99 0 0 0 2.103.86h17.844c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-8.808h11.896v8.808c0 .779.314 1.526.872 2.076a2.99 2.99 0 0 0 2.102.86h17.845Z"}),(0,x.jsx)("path",{fill:"#EBECEF",fillRule:"evenodd",d:"M157.295 12.1c0-6.683 5.418-12.1 12.1-12.1H187.9c6.683 0 12.1 5.417 12.1 12.1v18.505c0 6.682-5.417 12.1-12.1 12.1h-18.505c-6.682 0-12.1-5.418-12.1-12.1V12.1Zm12.1-.712H187.9c.393 0 .712.319.712.712v18.505a.712.712 0 0 1-.712.712h-18.505a.712.712 0 0 1-.712-.712V12.1c0-.393.319-.712.712-.712ZM12.1 157.295c-6.683 0-12.1 5.418-12.1 12.1V187.9c0 6.683 5.417 12.1 12.1 12.1h18.505c6.682 0 12.1-5.417 12.1-12.1v-18.505c0-6.682-5.418-12.1-12.1-12.1H12.1Zm19.217 12.1a.712.712 0 0 0-.712-.712H12.1a.712.712 0 0 0-.712.712V187.9c0 .393.319.712.712.712h18.505a.712.712 0 0 0 .712-.712v-18.505Z",clipRule:"evenodd"}),(0,x.jsx)("path",{fill:"#EBECEF",d:"M6.05 89.68A6.05 6.05 0 0 0 0 95.73v9.252a6.05 6.05 0 0 0 6.05 6.05h9.253a6.05 6.05 0 0 0 6.05-6.05V95.73c0-.678-.112-1.33-.318-1.94.445.105.908.16 1.385.16h27.758a6.05 6.05 0 0 0 6.05-6.05v-9.252a6.05 6.05 0 0 0-6.05-6.05H22.42a6.05 6.05 0 0 0-6.05 6.05V87.9c0 .678.112 1.33.317 1.939a6.065 6.065 0 0 0-1.385-.16H6.05Zm102.135-40.926a6.05 6.05 0 0 1 6.05-6.05h9.253a6.05 6.05 0 0 1 6.049 6.05v9.253a6.05 6.05 0 0 1-6.049 6.05h-9.253a6.05 6.05 0 0 1-6.05-6.05v-9.253ZM67.616 184.698a6.05 6.05 0 0 1 6.05-6.05h9.252c.678 0 1.33.111 1.939.317a6.064 6.064 0 0 1-.16-1.385v-9.253a6.05 6.05 0 0 1 6.05-6.049H100a6.05 6.05 0 0 1 6.05 6.049v9.253a6.05 6.05 0 0 1-6.05 6.05h-9.253c-.678 0-1.33-.112-1.938-.317.104.444.159.908.159 1.385v9.252a6.05 6.05 0 0 1-6.05 6.05h-9.253a6.05 6.05 0 0 1-6.05-6.05v-9.252Zm78.291-120.285a6.05 6.05 0 0 1 6.05-6.05h41.993a6.05 6.05 0 0 1 6.05 6.05v9.252a6.05 6.05 0 0 1-6.05 6.05h-41.993a6.05 6.05 0 0 1-6.05-6.05v-9.252ZM95.018 0a6.05 6.05 0 0 0-6.05 6.05v17.082a6.05 6.05 0 0 0 6.05 6.05h9.252a6.05 6.05 0 0 0 6.05-6.05V6.05A6.05 6.05 0 0 0 104.27 0h-9.252Z"}),(0,x.jsx)("path",{fill:"url(#a)",fillRule:"evenodd",d:"M12.1 0C5.417 0 0 5.417 0 12.1v18.505c0 6.682 5.417 12.1 12.1 12.1h18.505c6.682 0 12.1-5.418 12.1-12.1V12.1c0-6.683-5.418-12.1-12.1-12.1H12.1Zm18.505 11.388H12.1a.712.712 0 0 0-.712.712v18.505c0 .393.319.712.712.712h18.505a.712.712 0 0 0 .712-.712V12.1a.712.712 0 0 0-.712-.712Z",clipRule:"evenodd"}),(0,x.jsx)("path",{fill:"url(#a)",d:"M197.026 200c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-17.616c0-.778-.313-1.525-.871-2.076a2.996 2.996 0 0 0-2.103-.86h-5.948c-.789 0-1.545.31-2.103.86a2.918 2.918 0 0 0-.871 2.076v8.808h-11.897v-11.744h-11.896v-23.487h11.896v8.808c0 .778.314 1.525.872 2.076.557.55 1.314.86 2.102.86h5.949c.788 0 1.545-.31 2.103-.86a2.922 2.922 0 0 0 .871-2.076v-8.808h8.922c.789 0 1.545-.309 2.103-.86a2.916 2.916 0 0 0 .871-2.076v-5.872c0-.779-.313-1.525-.871-2.076a2.992 2.992 0 0 0-2.103-.86h-29.741c-.789 0-1.545.309-2.103.86a2.916 2.916 0 0 0-.871 2.076v8.808h-23.792v-11.744h8.922c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-5.872c0-.778-.313-1.525-.871-2.076a2.996 2.996 0 0 0-2.103-.86h-5.948c-.789 0-1.546.31-2.103.86a2.918 2.918 0 0 0-.871 2.076v8.808H119.7c-.789 0-1.545.309-2.103.86a2.916 2.916 0 0 0-.871 2.076v5.872c0 .779.313 1.525.871 2.076.558.551 1.314.86 2.103.86h20.819v8.808c0 .778.313 1.525.871 2.076.557.55 1.314.86 2.103.86h8.922v8.808c0 .778.313 1.525.871 2.076.558.55 1.314.859 2.103.859h8.922v11.744h-20.818c-.789 0-1.546.31-2.103.86a2.916 2.916 0 0 0-.871 2.076v5.872c0 .779.313 1.526.871 2.076a2.99 2.99 0 0 0 2.103.86h17.844c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-8.808h11.896v8.808c0 .779.314 1.526.872 2.076a2.99 2.99 0 0 0 2.102.86h17.845Z"}),(0,x.jsx)("path",{fill:"url(#a)",fillRule:"evenodd",d:"M157.295 12.1c0-6.683 5.418-12.1 12.1-12.1H187.9c6.683 0 12.1 5.417 12.1 12.1v18.505c0 6.682-5.417 12.1-12.1 12.1h-18.505c-6.682 0-12.1-5.418-12.1-12.1V12.1Zm12.1-.712H187.9c.393 0 .712.319.712.712v18.505a.712.712 0 0 1-.712.712h-18.505a.712.712 0 0 1-.712-.712V12.1c0-.393.319-.712.712-.712Z",clipRule:"evenodd"}),(0,x.jsx)("path",{fill:"url(#a)",fillRule:"evenodd",d:"M12.1 157.295c-6.683 0-12.1 5.418-12.1 12.1V187.9c0 6.683 5.417 12.1 12.1 12.1h18.505c6.682 0 12.1-5.417 12.1-12.1v-18.505c0-6.682-5.418-12.1-12.1-12.1H12.1Zm19.217 12.1a.712.712 0 0 0-.712-.712H12.1a.712.712 0 0 0-.712.712V187.9c0 .393.319.712.712.712h18.505a.712.712 0 0 0 .712-.712v-18.505Z",clipRule:"evenodd"}),(0,x.jsx)("path",{fill:"url(#a)",d:"M6.05 89.68A6.05 6.05 0 0 0 0 95.73v9.252a6.05 6.05 0 0 0 6.05 6.05h9.253a6.05 6.05 0 0 0 6.05-6.05V95.73c0-.678-.112-1.33-.318-1.94.445.105.908.16 1.385.16h27.758a6.05 6.05 0 0 0 6.05-6.05v-9.252a6.05 6.05 0 0 0-6.05-6.05H22.42a6.05 6.05 0 0 0-6.05 6.05V87.9c0 .678.112 1.33.317 1.939a6.065 6.065 0 0 0-1.385-.16H6.05Z"}),(0,x.jsx)("path",{fill:"url(#a)",d:"M108.185 48.754a6.05 6.05 0 0 1 6.05-6.05h9.253a6.05 6.05 0 0 1 6.049 6.05v9.253a6.05 6.05 0 0 1-6.049 6.05h-9.253a6.05 6.05 0 0 1-6.05-6.05v-9.253Z"}),(0,x.jsx)("path",{fill:"url(#a)",d:"M67.616 184.698a6.05 6.05 0 0 1 6.05-6.05h9.252c.678 0 1.33.111 1.939.317a6.064 6.064 0 0 1-.16-1.385v-9.253a6.05 6.05 0 0 1 6.05-6.049H100a6.05 6.05 0 0 1 6.05 6.049v9.253a6.05 6.05 0 0 1-6.05 6.05h-9.253c-.678 0-1.33-.112-1.938-.317.104.444.159.908.159 1.385v9.252a6.05 6.05 0 0 1-6.05 6.05h-9.253a6.05 6.05 0 0 1-6.05-6.05v-9.252Z"}),(0,x.jsx)("path",{fill:"url(#a)",d:"M145.907 64.413a6.05 6.05 0 0 1 6.05-6.05h41.993a6.05 6.05 0 0 1 6.05 6.05v9.252a6.05 6.05 0 0 1-6.05 6.05h-41.993a6.05 6.05 0 0 1-6.05-6.05v-9.252Z"}),(0,x.jsx)("path",{fill:"url(#a)",d:"M95.018 0a6.05 6.05 0 0 0-6.05 6.05v17.082a6.05 6.05 0 0 0 6.05 6.05h9.252a6.05 6.05 0 0 0 6.05-6.05V6.05A6.05 6.05 0 0 0 104.27 0h-9.252Z"}),(0,x.jsx)("defs",{children:(0,x.jsxs)("linearGradient",{id:"a",x1:"0",x2:"200",y1:"0",y2:"200",gradientUnits:"userSpaceOnUse",children:[(0,x.jsx)("stop",{offset:".37",stopColor:"#fff",stopOpacity:"0"}),(0,x.jsx)("stop",{offset:".5",stopColor:"#fff",stopOpacity:".85"}),(0,x.jsx)("stop",{offset:".63",stopColor:"#fff",stopOpacity:"0"})]})})]}),lm=({qrData:e,showQR:t,setShowQR:i})=>{let[r,n]=(0,d.useState)(!1),o=(0,d.useCallback)(()=>{eW(e??""),n(!0),setTimeout(()=>n(!1),2e3)},[e]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"md:hidden",children:(0,x.jsxs)("a",{href:e??void 0,className:"flex w-full items-center space-x-2 rounded-2xl border border-transparent bg-0d151d p-4 font-medium text-white shadow-sm dark:bg-white dark:text-0d151d",children:[(0,x.jsx)(lp,{className:"size-5"}),(0,x.jsx)("span",{className:"flex-1 text-center",children:k("Open World App")})]})}),(0,x.jsxs)("div",{className:ln("hidden md:block xl:hidden",{"mb-10 space-y-4":!t}),children:[(0,x.jsxs)("a",{href:e??void 0,className:ln("flex w-full items-center space-x-2 rounded-2xl border border-transparent p-4 font-medium shadow-sm","bg-0d151d text-white dark:bg-white dark:text-0d151d",{hidden:t}),children:[(0,x.jsx)(lp,{className:"size-5"}),(0,x.jsx)("span",{className:"flex-1 text-center",children:k("Open World App")})]}),(0,x.jsxs)("div",{className:ln("mb-3 space-y-4",{hidden:t}),children:[(0,x.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,x.jsx)("hr",{className:"flex-1"}),(0,x.jsx)("span",{className:"text-xs font-medium text-9ba3ae",children:"or"}),(0,x.jsx)("hr",{className:"flex-1"})]}),(0,x.jsx)(sP.button,{className:"w-full rounded-2xl border border-ebecef p-4 text-lg font-medium text-3c424b",onClick:()=>i(e=>!e),children:k("Display QR Code")})]})]}),t&&(0,x.jsxs)("div",{className:"hidden md:block xl:hidden",children:[(0,x.jsx)("div",{className:"mb-4",children:(0,x.jsx)(sP.button,{className:"w-full rounded-2xl border border-ebecef p-4 text-lg font-medium text-3c424b",onClick:()=>i(!1),children:k("Hide QR Code")})}),(0,x.jsx)("div",{className:"relative inline-flex items-center justify-center rounded-2xl border border-f1f5f8 p-3 dark:border-f1f5f8/10",children:(0,x.jsx)("div",{className:"text-29343f dark:text-white",children:e?(0,x.jsx)("div",{onClick:o,className:"cursor-pointer",children:(0,x.jsx)(S,{data:e,size:200})}):(0,x.jsx)("div",{className:"flex size-[200px] items-center justify-center",children:(0,x.jsx)(lf,{className:"size-[200px] animate-pulse"})})})}),(0,x.jsx)(sL,{children:r&&(0,x.jsx)(sP.div,{className:"text-center text-sm text-9eafc0",initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{opacity:0,height:0,marginTop:0},visible:{opacity:1,height:"auto",marginTop:8,transition:{duration:.25,opacity:{delay:.05,duration:.2},ease:"easeInOut"}},exit:{opacity:0,height:0,marginTop:0,transition:{duration:.4,delay:.1,opacity:{duration:.25,delay:0},ease:"easeInOut"}}},children:(0,x.jsx)("span",{className:"rounded-lg border border-f1f5f8 px-2 py-1 text-sm",children:k("QR Code copied")})},"copied")})]}),(0,x.jsxs)("div",{className:"hidden xl:block",children:[(0,x.jsx)(sL,{children:r&&(0,x.jsx)(sP.div,{className:"text-sm text-9eafc0",initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{opacity:0,height:0,marginTop:0,y:0},visible:{opacity:1,height:"auto",marginTop:8,y:-20,transition:{duration:.25,opacity:{delay:.05,duration:.2},ease:"easeInOut"}},exit:{opacity:0,height:0,marginTop:0,y:0,transition:{duration:.4,delay:.1,opacity:{duration:.25,delay:0},ease:"easeInOut"}}},children:(0,x.jsx)("span",{className:"rounded-lg border border-f1f5f8 px-2 py-1 text-sm",children:k("QR Code copied")})},"copied")}),(0,x.jsx)("div",{className:"relative inline-flex items-center justify-center rounded-2xl border border-f1f5f8 p-3 dark:border-f1f5f8/10",children:(0,x.jsx)("div",{className:"text-29343f dark:text-white",children:e?(0,x.jsx)("div",{onClick:o,className:"cursor-pointer",children:(0,x.jsx)(S,{data:e,size:200})}):(0,x.jsx)("div",{className:"flex size-[200px] items-center justify-center",children:(0,x.jsx)(lf,{className:"size-[200px] animate-pulse"})})})})]})]})},lv=({className:e,...t})=>(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:`animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite] ${e}`,...t,children:[(0,x.jsx)("circle",{cx:"12",cy:"12",r:"10.75",stroke:"#191C20",strokeOpacity:".16",strokeWidth:"2.5"}),(0,x.jsx)("path",{fill:"#191C20",d:"M17.28 2.633c.338-.6.127-1.368-.505-1.642A12 12 0 0 0 7.459.892c-.638.261-.864 1.024-.539 1.632.326.607 1.08.827 1.725.584a9.504 9.504 0 0 1 6.897.073c.64.257 1.399.053 1.737-.548Z"})]}),lg=e=>({signal:e.signal,app_id:e.app_id,action:e.action,setStage:e.setStage,bridge_url:e.bridge_url,handleVerify:e.handleVerify,setErrorState:e.setErrorState,verification_level:e.verification_level,action_description:e.action_description,partner:e.partner}),ly=e=>{let t=a4(),[i,r]=(0,d.useState)(!1),{app_id:o,action:s,signal:a,setStage:l,handleVerify:u,bridge_url:c,action_description:h,verification_level:p,setErrorState:f,partner:m}=T(lg,n),{connectorURI:v,reset:g,errorCode:w,result:b,verificationState:E}=((e,t,i,r,n,o,s)=>{let a=(0,d.useRef)(n),{reset:l,result:u,connectorURI:c,createClient:h,pollForUpdates:p,verificationState:f,errorCode:m}=(0,y.g2)();return(0,d.useEffect)(()=>{c||h({app_id:e,action:t,signal:i,bridge_url:r,action_description:o,verification_level:a.current,partner:s})},[e,t,i,o,h,a,r,c,s]),(0,d.useEffect)(()=>{if(!c||u||m)return;let e=setInterval(()=>void p(),3e3);return()=>clearInterval(e)},[c,p,m,u]),{connectorURI:c,reset:l,result:u,verificationState:f,errorCode:m}})(o,s,a,c,p,h,m);(0,d.useEffect)(()=>g,[g]),(0,d.useEffect)(()=>{if(E===y.zy.Failed&&(l("ERROR"),f({code:w??y._W.GenericError})),b){if(p===y.iQ.Orb&&b.verification_level===y.iQ.Device){console.error("Credential type received from wallet does not match configured credential_types."),l("ERROR"),f({code:y._W.CredentialUnavailable});return}return u(b)}},[b,u,E,l,w,f,p]);let{show_modal:C}=e;return(0,x.jsxs)("div",{className:ln("flex flex-col items-center text-center",C?i?"-mt-6 space-y-5 ":"-mt-6 space-y-10 ":""),children:[(0,x.jsxs)("div",{className:ln(C?"":"hidden"),children:[(0,x.jsx)("div",{className:"mb-4 flex items-center justify-center",children:(0,x.jsx)("div",{className:"flex size-14 items-center justify-center rounded-full border-[1.2px] border-solid border-[#EBECEF]",children:(0,x.jsx)(lp,{className:"size-8 text-0d151d dark:text-white"})})}),(0,x.jsx)("p",{className:"text-2xl font-semibold text-gray-900 dark:text-white",children:k("Connect your World ID")}),(0,x.jsx)("p",{className:ln("mt-3 text-657080 dark:text-9eafc0 md:mt-2",{hidden:"mobile"===t}),children:k("Use phone camera to scan the QR code")}),(0,x.jsx)("p",{className:ln("mt-3 text-657080 dark:text-9eafc0 md:mt-2",{hidden:"mobile"!==t}),children:k("You will be redirected to the app, please return to this page once you're done")})]}),(0,x.jsxs)("div",{className:"relative w-full",children:[E===y.zy.WaitingForApp&&(0,x.jsxs)("div",{className:"absolute inset-0 flex flex-col items-center justify-center space-y-6",children:[(0,x.jsx)(lv,{className:"size-6"}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:"font-medium text-657080",children:k("Connecting...")}),(0,x.jsx)("p",{className:"text-sm font-light text-657080",children:k("Please continue in app")})]})]}),(0,x.jsx)("div",{className:ln("transition duration-500 ease-in-out",E===y.zy.WaitingForApp&&"opacity-40 blur-lg"),children:(0,x.jsx)("div",{className:"mx-auto",children:(0,x.jsx)(lm,{showQR:i,setShowQR:r,qrData:v})})})]})]})},lw=()=>(0,x.jsxs)("div",{className:"space-y-6",children:[(0,x.jsx)("div",{className:"flex justify-center",children:(0,x.jsx)(lv,{className:"size-24"})}),(0,x.jsx)("div",{className:"mt-4 text-70868f",children:k("Transmitting verification to host app. Please wait...")})]}),lx=({open:e,processing:t,onOpenChange:i,stage:r,setStage:n,setOptions:o,setErrorState:s})=>({stage:r,setStage:n,processing:t,setOptions:o,setErrorState:s,isOpen:e,onOpenChange:i}),lb=(0,d.memo)(({children:e,show_modal:t=!0,container_id:i,disable_default_modal_behavior:r=!1,language:o,...s})=>{let a=a4(),{isOpen:l,onOpenChange:u,stage:c,setStage:h,setOptions:p,setErrorState:f}=T(lx,n);(0,d.useEffect)(()=>{o&&(E={language:o})},[o]),(0,d.useEffect)(()=>{if(""===s.action)throw Error(k("Action cannot be an empty string."));p(s,"props")},[s,p]);let m=(0,d.useMemo)(()=>{switch(c){case"WORLD_ID":return(0,x.jsx)(ly,{show_modal:t});case"SUCCESS":return(0,x.jsx)(lh,{});case"ERROR":return(0,x.jsx)(lc,{});case"HOST_APP_VERIFICATION":return(0,x.jsx)(lw,{});default:throw Error(k("Invalid IDKitStage :stage.",{s:String(c)}))}},[c,t]),v=(0,x.jsxs)(li,{mode:"open",id:"idkit-widget",children:[(0,x.jsx)(lt,{}),(0,x.jsxs)(ew,{children:[(0,x.jsx)(ek,{className:"flex justify-center"}),(0,x.jsx)("div",{id:"widget-content-inline",className:"relative flex flex-col bg-white p-4 focus:outline-none dark:bg-0d151d",children:m})]})]});if(!t&&i){let e=document.getElementById(i);if(e)return(0,j.createPortal)(v,e);console.warn(`Container element with id "${i}" not found. Rendering widget inline.`)}let g=e=>{r&&e.preventDefault()};return(0,x.jsxs)(aI,{open:l,onOpenChange:u,children:[e?.({open:()=>u(!0)}),(0,x.jsx)(a_,{forceMount:!0,children:(0,x.jsx)(d.Fragment,{children:(0,x.jsx)(sL,{children:l&&(0,x.jsxs)(li,{mode:"open",id:"idkit-widget",children:[(0,x.jsx)(lt,{}),(0,x.jsxs)("div",{id:"modal",className:"fixed z-[9999] font-sans",children:[(0,x.jsx)(a$,{asChild:!0,children:(0,x.jsx)(sP.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/50 backdrop-blur-lg"})}),(0,x.jsx)("div",{className:"fixed inset-0 z-[9999] overflow-y-hidden md:overflow-y-auto",children:(0,x.jsxs)("div",{className:"flex min-h-full items-end justify-center text-center md:items-center md:p-4",children:[(0,x.jsx)(aJ,{}),(0,x.jsx)(aq,{asChild:!0,onPointerDownOutside:g,onInteractOutside:g,children:(0,x.jsx)(sP.div,{layout:"mobile"!=a||"position",exit:"mobile"==a?"initMob":"init",initial:"mobile"==a?"initMob":"init",animate:"mobile"==a?"animateMob":"animate",variants:{init:{opacity:0,scale:.9},initMob:{translateY:"100%"},animate:{opacity:1,scale:1},animateMob:{translateY:0}},transition:{layout:{duration:.15}},className:"relative z-50 flex min-h-screen w-full flex-col bg-white pt-6 shadow focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 dark:bg-0d151d md:min-h-[35rem] md:max-w-md md:rounded-[24px]",children:(0,x.jsxs)(ew,{children:[(0,x.jsx)(ek,{className:"flex justify-center"}),(0,x.jsx)("div",{className:"mx-6 flex items-center justify-end",children:(0,x.jsx)(a2,{className:"flex size-8 items-center justify-center rounded-full border-[1.2px] border-solid border-[#EBECEF] text-black dark:text-white",children:(0,x.jsx)(lr,{className:"size-4"})})}),(0,x.jsx)("div",{className:"relative mx-6 mb-6 flex flex-1 flex-col items-center justify-center",children:m}),(0,x.jsx)("div",{className:"flex items-center justify-center border-t border-f5f5f7 p-7 md:rounded-b-2xl",children:(0,x.jsx)("a",{href:"https://developer.worldcoin.org/privacy-statement",target:"_blank",rel:"noreferrer",className:"text-sm text-657080 hover:underline",children:k("Terms & Privacy")})})]})})})]})})]})]})})})})]})});y.zy.Confirmed,y.zy.Failed},9517:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,i=[],r=0;r<e.rangeCount;r++)i.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||i.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}}]);