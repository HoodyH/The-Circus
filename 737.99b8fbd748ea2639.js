(self.webpackChunkThe_Circus=self.webpackChunkThe_Circus||[]).push([[737],{9737:(J,_,g)=>{"use strict";g.r(_),g.d(_,{AccessModule:()=>T});var s=g(6895),E=g(433),v=g(5649),a=g(8256);let U=(()=>{class p{constructor(){}ngOnInit(){}}return p.\u0275fac=function(c){return new(c||p)},p.\u0275cmp=a.Xpm({type:p,selectors:[["app-access"]],decls:1,vars:0,template:function(c,m){1&c&&a._UZ(0,"router-outlet")},dependencies:[v.lC],encapsulation:2}),p})();var x=g(3172),A=g(9782);function o(p,y){1&p&&(a.TgZ(0,"div",17),a._uU(1," Numero di telefono non valido "),a.qZA())}function b(p,y){1&p&&(a.TgZ(0,"div",17),a._uU(1," Password obbligatoria "),a.qZA())}function I(p,y){1&p&&(a.TgZ(0,"div",18),a._uU(1," Utente o password non validi "),a.qZA())}function L(p,y){1&p&&(a.TgZ(0,"div",19),a._uU(1," Login effettuato con successo "),a.qZA())}const l=[{path:"",component:U,children:[{path:"login",component:(()=>{class p{constructor(c,m,S,D){this.router=c,this.route=m,this.authService=S,this.fb=D,this.loginFailed=!1,this.loginSuccess=!1,this.loginForm=this.fb.group({phone:["",E.kI.required],password:["",E.kI.required]})}ngOnInit(){this.route.snapshot.queryParams.next&&(this.next=this.route.snapshot.queryParams.next);let c=!1;this.route.snapshot.queryParams.key&&(c=this.autoLogin(this.route.snapshot.queryParams.key)),!c&&this.authService.isLoggedIn()&&this.router.navigate([""]).then()}autoLogin(c){const m=x.lW.from(c,"base64").toString("latin1"),[S,D]=m.split(",");return this.loginForm.patchValue({phone:S,password:D}),this.onSubmit(),!0}onSubmit(){this.loginForm.invalid||(this.loginFailed=!1,this.authService.login({phone:this.loginForm.value.phone,password:this.loginForm.value.password}).subscribe({next:m=>{m&&(this.loginFailed=!1,this.loginSuccess=!0,setTimeout(()=>{this.next?this.router.navigateByUrl(this.next).catch(()=>this.router.navigate([""]).then()):this.router.navigate([""]).then()},1e3))},error:m=>{this.loginFailed=!0}}))}}return p.\u0275fac=function(c){return new(c||p)(a.Y36(v.F0),a.Y36(v.gz),a.Y36(A.x),a.Y36(E.qu))},p.\u0275cmp=a.Xpm({type:p,selectors:[["app-login"]],decls:23,vars:6,consts:[[1,"container-fluid","d-flex","align-items-center","justify-content-center","vh-100"],[1,"card","p-4"],[1,"card-body"],[1,"mb-4","text-center"],[3,"formGroup","ngSubmit"],[1,"form-group","text-center"],["for","phoneNumber",1,"text-center"],["type","text","id","phoneNumber","formControlName","phone","required","",1,"form-control"],[1,"valid-feedback"],["class","text-danger",4,"ngIf"],[1,"form-group","text-center","mt-2"],["for","password",1,"text-center"],["type","password","id","password","formControlName","password","required","",1,"form-control"],["class","alert alert-danger text-center mt-3",4,"ngIf"],["class","alert alert-success text-center mt-3",4,"ngIf"],[1,"text-center","mt-3"],["type","submit",1,"btn","btn-secondary",3,"disabled"],[1,"text-danger"],[1,"alert","alert-danger","text-center","mt-3"],[1,"alert","alert-success","text-center","mt-3"]],template:function(c,m){1&c&&(a.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),a._uU(4,"Login"),a.qZA(),a.TgZ(5,"form",4),a.NdJ("ngSubmit",function(){return m.onSubmit()}),a.TgZ(6,"div",5)(7,"label",6),a._uU(8,"Numero di telefono"),a.qZA(),a._UZ(9,"input",7),a.TgZ(10,"div",8),a._uU(11," Looks good! "),a.qZA(),a.YNc(12,o,2,0,"div",9),a.qZA(),a.TgZ(13,"div",10)(14,"label",11),a._uU(15,"Password"),a.qZA(),a._UZ(16,"input",12),a.YNc(17,b,2,0,"div",9),a.qZA(),a.YNc(18,I,2,0,"div",13),a.YNc(19,L,2,0,"div",14),a.TgZ(20,"div",15)(21,"button",16),a._uU(22,"Login"),a.qZA()()()()()()),2&c&&(a.xp6(5),a.Q6J("formGroup",m.loginForm),a.xp6(7),a.Q6J("ngIf",m.loginForm.controls.phone.invalid&&(m.loginForm.controls.phone.dirty||m.loginForm.controls.phone.touched)),a.xp6(5),a.Q6J("ngIf",m.loginForm.controls.password.invalid&&(m.loginForm.controls.password.dirty||m.loginForm.controls.password.touched)),a.xp6(1),a.Q6J("ngIf",m.loginFailed),a.xp6(1),a.Q6J("ngIf",m.loginSuccess),a.xp6(2),a.Q6J("disabled",m.loginForm.invalid))},dependencies:[s.O5,E._Y,E.Fj,E.JJ,E.JL,E.Q7,E.sg,E.u]}),p})()},{path:"logout",component:(()=>{class p{constructor(c,m){this.router=c,this.authService=m}ngOnInit(){this.authService.logout().subscribe(),setTimeout(()=>{this.router.navigate(["/"])},3e3)}}return p.\u0275fac=function(c){return new(c||p)(a.Y36(v.F0),a.Y36(A.x))},p.\u0275cmp=a.Xpm({type:p,selectors:[["app-logout"]],decls:4,vars:0,consts:[[1,"section","d-flex","align-items-center","justify-content-center","vh-100"],[1,"container","text-center"]],template:function(c,m){1&c&&(a.TgZ(0,"div",0)(1,"div",1)(2,"p"),a._uU(3,"Logout avvenuto correttamente"),a.qZA()()())},encapsulation:2}),p})()}]}];let d=(()=>{class p{}return p.\u0275fac=function(c){return new(c||p)},p.\u0275mod=a.oAB({type:p}),p.\u0275inj=a.cJS({imports:[v.Bz.forChild(l),v.Bz]}),p})(),T=(()=>{class p{}return p.\u0275fac=function(c){return new(c||p)},p.\u0275mod=a.oAB({type:p}),p.\u0275inj=a.cJS({imports:[s.ez,E.u5,E.UX,d]}),p})()},5343:(J,_)=>{"use strict";_.byteLength=function A(f){var l=x(f),T=l[1];return 3*(l[0]+T)/4-T},_.toByteArray=function b(f){var l,S,d=x(f),T=d[0],p=d[1],y=new E(function o(f,l,d){return 3*(l+d)/4-d}(0,T,p)),c=0,m=p>0?T-4:T;for(S=0;S<m;S+=4)l=s[f.charCodeAt(S)]<<18|s[f.charCodeAt(S+1)]<<12|s[f.charCodeAt(S+2)]<<6|s[f.charCodeAt(S+3)],y[c++]=l>>16&255,y[c++]=l>>8&255,y[c++]=255&l;return 2===p&&(l=s[f.charCodeAt(S)]<<2|s[f.charCodeAt(S+1)]>>4,y[c++]=255&l),1===p&&(l=s[f.charCodeAt(S)]<<10|s[f.charCodeAt(S+1)]<<4|s[f.charCodeAt(S+2)]>>2,y[c++]=l>>8&255,y[c++]=255&l),y},_.fromByteArray=function N(f){for(var l,d=f.length,T=d%3,p=[],y=16383,c=0,m=d-T;c<m;c+=y)p.push(L(f,c,c+y>m?m:c+y));return 1===T?p.push(g[(l=f[d-1])>>2]+g[l<<4&63]+"=="):2===T&&p.push(g[(l=(f[d-2]<<8)+f[d-1])>>10]+g[l>>4&63]+g[l<<2&63]+"="),p.join("")};for(var g=[],s=[],E=typeof Uint8Array<"u"?Uint8Array:Array,v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,U=v.length;a<U;++a)g[a]=v[a],s[v.charCodeAt(a)]=a;function x(f){var l=f.length;if(l%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var d=f.indexOf("=");return-1===d&&(d=l),[d,d===l?0:4-d%4]}function I(f){return g[f>>18&63]+g[f>>12&63]+g[f>>6&63]+g[63&f]}function L(f,l,d){for(var p=[],y=l;y<d;y+=3)p.push(I((f[y]<<16&16711680)+(f[y+1]<<8&65280)+(255&f[y+2])));return p.join("")}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63},3172:(J,_,g)=>{"use strict";var E=g(5343),v=g(8461),a="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;_.lW=o,_.h2=50;var U=2147483647;function A(e){if(e>U)throw new RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,o.prototype),r}function o(e,r,t){if("number"==typeof e){if("string"==typeof r)throw new TypeError('The "string" argument must be of type string. Received type number');return N(e)}return b(e,r,t)}function b(e,r,t){if("string"==typeof e)return function f(e,r){if(("string"!=typeof r||""===r)&&(r="utf8"),!o.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var t=0|m(e,r),n=A(t),i=n.write(e,r);return i!==t&&(n=n.slice(0,i)),n}(e,r);if(ArrayBuffer.isView(e))return function d(e){if(Z(e,Uint8Array)){var r=new Uint8Array(e);return T(r.buffer,r.byteOffset,r.byteLength)}return l(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Z(e,ArrayBuffer)||e&&Z(e.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Z(e,SharedArrayBuffer)||e&&Z(e.buffer,SharedArrayBuffer)))return T(e,r,t);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return o.from(n,r,t);var i=function p(e){if(o.isBuffer(e)){var r=0|y(e.length),t=A(r);return 0===t.length||e.copy(t,0,0,r),t}return void 0!==e.length?"number"!=typeof e.length||Q(e.length)?A(0):l(e):"Buffer"===e.type&&Array.isArray(e.data)?l(e.data):void 0}(e);if(i)return i;if(typeof Symbol<"u"&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return o.from(e[Symbol.toPrimitive]("string"),r,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function I(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function N(e){return I(e),A(e<0?0:0|y(e))}function l(e){for(var r=e.length<0?0:0|y(e.length),t=A(r),n=0;n<r;n+=1)t[n]=255&e[n];return t}function T(e,r,t){if(r<0||e.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(t||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===r&&void 0===t?new Uint8Array(e):void 0===t?new Uint8Array(e,r):new Uint8Array(e,r,t),Object.setPrototypeOf(n,o.prototype),n}function y(e){if(e>=U)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+U.toString(16)+" bytes");return 0|e}function m(e,r){if(o.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Z(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var t=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===t)return 0;for(var i=!1;;)switch(r){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return W(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*t;case"hex":return t>>>1;case"base64":return j(e).length;default:if(i)return n?-1:W(e).length;r=(""+r).toLowerCase(),i=!0}}function S(e,r,t){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length||((void 0===t||t>this.length)&&(t=this.length),t<=0)||(t>>>=0)<=(r>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return pr(this,r,t);case"utf8":case"utf-8":return G(this,r,t);case"ascii":return ar(this,r,t);case"latin1":case"binary":return hr(this,r,t);case"base64":return or(this,r,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fr(this,r,t);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function D(e,r,t){var n=e[r];e[r]=e[t],e[t]=n}function z(e,r,t,n,i){if(0===e.length)return-1;if("string"==typeof t?(n=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),Q(t=+t)&&(t=i?0:e.length-1),t<0&&(t=e.length+t),t>=e.length){if(i)return-1;t=e.length-1}else if(t<0){if(!i)return-1;t=0}if("string"==typeof r&&(r=o.from(r,n)),o.isBuffer(r))return 0===r.length?-1:X(e,r,t,n,i);if("number"==typeof r)return r&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,r,t):Uint8Array.prototype.lastIndexOf.call(e,r,t):X(e,[r],t,n,i);throw new TypeError("val must be string, number or Buffer")}function X(e,r,t,n,i){var B,u=1,h=e.length,w=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||r.length<2)return-1;u=2,h/=2,w/=2,t/=2}function F($,P){return 1===u?$[P]:$.readUInt16BE(P*u)}if(i){var R=-1;for(B=t;B<h;B++)if(F(e,B)===F(r,-1===R?0:B-R)){if(-1===R&&(R=B),B-R+1===w)return R*u}else-1!==R&&(B-=B-R),R=-1}else for(t+w>h&&(t=h-w),B=t;B>=0;B--){for(var C=!0,q=0;q<w;q++)if(F(e,B+q)!==F(r,q)){C=!1;break}if(C)return B}return-1}function rr(e,r,t,n){t=Number(t)||0;var i=e.length-t;n?(n=Number(n))>i&&(n=i):n=i;var u=r.length;n>u/2&&(n=u/2);for(var h=0;h<n;++h){var w=parseInt(r.substr(2*h,2),16);if(Q(w))return h;e[t+h]=w}return h}function tr(e,r,t,n){return Y(W(r,e.length-t),e,t,n)}function er(e,r,t,n){return Y(function lr(e){for(var r=[],t=0;t<e.length;++t)r.push(255&e.charCodeAt(t));return r}(r),e,t,n)}function nr(e,r,t,n){return Y(j(r),e,t,n)}function ir(e,r,t,n){return Y(function yr(e,r){for(var t,n,u=[],h=0;h<e.length&&!((r-=2)<0);++h)n=(t=e.charCodeAt(h))>>8,u.push(t%256),u.push(n);return u}(r,e.length-t),e,t,n)}function or(e,r,t){return E.fromByteArray(0===r&&t===e.length?e:e.slice(r,t))}function G(e,r,t){t=Math.min(e.length,t);for(var n=[],i=r;i<t;){var F,B,R,C,u=e[i],h=null,w=u>239?4:u>223?3:u>191?2:1;if(i+w<=t)switch(w){case 1:u<128&&(h=u);break;case 2:128==(192&(F=e[i+1]))&&(C=(31&u)<<6|63&F)>127&&(h=C);break;case 3:B=e[i+2],128==(192&(F=e[i+1]))&&128==(192&B)&&(C=(15&u)<<12|(63&F)<<6|63&B)>2047&&(C<55296||C>57343)&&(h=C);break;case 4:B=e[i+2],R=e[i+3],128==(192&(F=e[i+1]))&&128==(192&B)&&128==(192&R)&&(C=(15&u)<<18|(63&F)<<12|(63&B)<<6|63&R)>65535&&C<1114112&&(h=C)}null===h?(h=65533,w=1):h>65535&&(n.push((h-=65536)>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=w}return function ur(e){var r=e.length;if(r<=O)return String.fromCharCode.apply(String,e);for(var t="",n=0;n<r;)t+=String.fromCharCode.apply(String,e.slice(n,n+=O));return t}(n)}!(o.TYPED_ARRAY_SUPPORT=function x(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),42===e.foo()}catch{return!1}}())&&typeof console<"u"&&"function"==typeof console.error&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(o.prototype,"parent",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.buffer}}),Object.defineProperty(o.prototype,"offset",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.byteOffset}}),o.poolSize=8192,o.from=function(e,r,t){return b(e,r,t)},Object.setPrototypeOf(o.prototype,Uint8Array.prototype),Object.setPrototypeOf(o,Uint8Array),o.alloc=function(e,r,t){return function L(e,r,t){return I(e),e<=0?A(e):void 0!==r?"string"==typeof t?A(e).fill(r,t):A(e).fill(r):A(e)}(e,r,t)},o.allocUnsafe=function(e){return N(e)},o.allocUnsafeSlow=function(e){return N(e)},o.isBuffer=function(r){return null!=r&&!0===r._isBuffer&&r!==o.prototype},o.compare=function(r,t){if(Z(r,Uint8Array)&&(r=o.from(r,r.offset,r.byteLength)),Z(t,Uint8Array)&&(t=o.from(t,t.offset,t.byteLength)),!o.isBuffer(r)||!o.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(r===t)return 0;for(var n=r.length,i=t.length,u=0,h=Math.min(n,i);u<h;++u)if(r[u]!==t[u]){n=r[u],i=t[u];break}return n<i?-1:i<n?1:0},o.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(r,t){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(0===r.length)return o.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<r.length;++n)t+=r[n].length;var i=o.allocUnsafe(t),u=0;for(n=0;n<r.length;++n){var h=r[n];if(Z(h,Uint8Array))u+h.length>i.length?o.from(h).copy(i,u):Uint8Array.prototype.set.call(i,h,u);else{if(!o.isBuffer(h))throw new TypeError('"list" argument must be an Array of Buffers');h.copy(i,u)}u+=h.length}return i},o.byteLength=m,o.prototype._isBuffer=!0,o.prototype.swap16=function(){var r=this.length;if(r%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<r;t+=2)D(this,t,t+1);return this},o.prototype.swap32=function(){var r=this.length;if(r%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<r;t+=4)D(this,t,t+3),D(this,t+1,t+2);return this},o.prototype.swap64=function(){var r=this.length;if(r%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<r;t+=8)D(this,t,t+7),D(this,t+1,t+6),D(this,t+2,t+5),D(this,t+3,t+4);return this},o.prototype.toLocaleString=o.prototype.toString=function(){var r=this.length;return 0===r?"":0===arguments.length?G(this,0,r):S.apply(this,arguments)},o.prototype.equals=function(r){if(!o.isBuffer(r))throw new TypeError("Argument must be a Buffer");return this===r||0===o.compare(this,r)},o.prototype.inspect=function(){var r="",t=_.h2;return r=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(r+=" ... "),"<Buffer "+r+">"},a&&(o.prototype[a]=o.prototype.inspect),o.prototype.compare=function(r,t,n,i,u){if(Z(r,Uint8Array)&&(r=o.from(r,r.offset,r.byteLength)),!o.isBuffer(r))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof r);if(void 0===t&&(t=0),void 0===n&&(n=r?r.length:0),void 0===i&&(i=0),void 0===u&&(u=this.length),t<0||n>r.length||i<0||u>this.length)throw new RangeError("out of range index");if(i>=u&&t>=n)return 0;if(i>=u)return-1;if(t>=n)return 1;if(this===r)return 0;for(var h=(u>>>=0)-(i>>>=0),w=(n>>>=0)-(t>>>=0),F=Math.min(h,w),B=this.slice(i,u),R=r.slice(t,n),C=0;C<F;++C)if(B[C]!==R[C]){h=B[C],w=R[C];break}return h<w?-1:w<h?1:0},o.prototype.includes=function(r,t,n){return-1!==this.indexOf(r,t,n)},o.prototype.indexOf=function(r,t,n){return z(this,r,t,n,!0)},o.prototype.lastIndexOf=function(r,t,n){return z(this,r,t,n,!1)},o.prototype.write=function(r,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}var u=this.length-t;if((void 0===n||n>u)&&(n=u),r.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var h=!1;;)switch(i){case"hex":return rr(this,r,t,n);case"utf8":case"utf-8":return tr(this,r,t,n);case"ascii":case"latin1":case"binary":return er(this,r,t,n);case"base64":return nr(this,r,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ir(this,r,t,n);default:if(h)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),h=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var O=4096;function ar(e,r,t){var n="";t=Math.min(e.length,t);for(var i=r;i<t;++i)n+=String.fromCharCode(127&e[i]);return n}function hr(e,r,t){var n="";t=Math.min(e.length,t);for(var i=r;i<t;++i)n+=String.fromCharCode(e[i]);return n}function pr(e,r,t){var n=e.length;(!r||r<0)&&(r=0),(!t||t<0||t>n)&&(t=n);for(var i="",u=r;u<t;++u)i+=wr[e[u]];return i}function fr(e,r,t){for(var n=e.slice(r,t),i="",u=0;u<n.length-1;u+=2)i+=String.fromCharCode(n[u]+256*n[u+1]);return i}function M(e,r,t){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+r>t)throw new RangeError("Trying to access beyond buffer length")}function k(e,r,t,n,i,u){if(!o.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<u)throw new RangeError('"value" argument is out of bounds');if(t+n>e.length)throw new RangeError("Index out of range")}function H(e,r,t,n,i,u){if(t+n>e.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function V(e,r,t,n,i){return r=+r,t>>>=0,i||H(e,0,t,4),v.write(e,r,t,n,23,4),t+4}function K(e,r,t,n,i){return r=+r,t>>>=0,i||H(e,0,t,8),v.write(e,r,t,n,52,8),t+8}o.prototype.slice=function(r,t){var n=this.length;(r=~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<r&&(t=r);var i=this.subarray(r,t);return Object.setPrototypeOf(i,o.prototype),i},o.prototype.readUintLE=o.prototype.readUIntLE=function(r,t,n){r>>>=0,t>>>=0,n||M(r,t,this.length);for(var i=this[r],u=1,h=0;++h<t&&(u*=256);)i+=this[r+h]*u;return i},o.prototype.readUintBE=o.prototype.readUIntBE=function(r,t,n){r>>>=0,t>>>=0,n||M(r,t,this.length);for(var i=this[r+--t],u=1;t>0&&(u*=256);)i+=this[r+--t]*u;return i},o.prototype.readUint8=o.prototype.readUInt8=function(r,t){return r>>>=0,t||M(r,1,this.length),this[r]},o.prototype.readUint16LE=o.prototype.readUInt16LE=function(r,t){return r>>>=0,t||M(r,2,this.length),this[r]|this[r+1]<<8},o.prototype.readUint16BE=o.prototype.readUInt16BE=function(r,t){return r>>>=0,t||M(r,2,this.length),this[r]<<8|this[r+1]},o.prototype.readUint32LE=o.prototype.readUInt32LE=function(r,t){return r>>>=0,t||M(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+16777216*this[r+3]},o.prototype.readUint32BE=o.prototype.readUInt32BE=function(r,t){return r>>>=0,t||M(r,4,this.length),16777216*this[r]+(this[r+1]<<16|this[r+2]<<8|this[r+3])},o.prototype.readIntLE=function(r,t,n){r>>>=0,t>>>=0,n||M(r,t,this.length);for(var i=this[r],u=1,h=0;++h<t&&(u*=256);)i+=this[r+h]*u;return i>=(u*=128)&&(i-=Math.pow(2,8*t)),i},o.prototype.readIntBE=function(r,t,n){r>>>=0,t>>>=0,n||M(r,t,this.length);for(var i=t,u=1,h=this[r+--i];i>0&&(u*=256);)h+=this[r+--i]*u;return h>=(u*=128)&&(h-=Math.pow(2,8*t)),h},o.prototype.readInt8=function(r,t){return r>>>=0,t||M(r,1,this.length),128&this[r]?-1*(255-this[r]+1):this[r]},o.prototype.readInt16LE=function(r,t){r>>>=0,t||M(r,2,this.length);var n=this[r]|this[r+1]<<8;return 32768&n?4294901760|n:n},o.prototype.readInt16BE=function(r,t){r>>>=0,t||M(r,2,this.length);var n=this[r+1]|this[r]<<8;return 32768&n?4294901760|n:n},o.prototype.readInt32LE=function(r,t){return r>>>=0,t||M(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24},o.prototype.readInt32BE=function(r,t){return r>>>=0,t||M(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]},o.prototype.readFloatLE=function(r,t){return r>>>=0,t||M(r,4,this.length),v.read(this,r,!0,23,4)},o.prototype.readFloatBE=function(r,t){return r>>>=0,t||M(r,4,this.length),v.read(this,r,!1,23,4)},o.prototype.readDoubleLE=function(r,t){return r>>>=0,t||M(r,8,this.length),v.read(this,r,!0,52,8)},o.prototype.readDoubleBE=function(r,t){return r>>>=0,t||M(r,8,this.length),v.read(this,r,!1,52,8)},o.prototype.writeUintLE=o.prototype.writeUIntLE=function(r,t,n,i){r=+r,t>>>=0,n>>>=0,i||k(this,r,t,n,Math.pow(2,8*n)-1,0);var h=1,w=0;for(this[t]=255&r;++w<n&&(h*=256);)this[t+w]=r/h&255;return t+n},o.prototype.writeUintBE=o.prototype.writeUIntBE=function(r,t,n,i){r=+r,t>>>=0,n>>>=0,i||k(this,r,t,n,Math.pow(2,8*n)-1,0);var h=n-1,w=1;for(this[t+h]=255&r;--h>=0&&(w*=256);)this[t+h]=r/w&255;return t+n},o.prototype.writeUint8=o.prototype.writeUInt8=function(r,t,n){return r=+r,t>>>=0,n||k(this,r,t,1,255,0),this[t]=255&r,t+1},o.prototype.writeUint16LE=o.prototype.writeUInt16LE=function(r,t,n){return r=+r,t>>>=0,n||k(this,r,t,2,65535,0),this[t]=255&r,this[t+1]=r>>>8,t+2},o.prototype.writeUint16BE=o.prototype.writeUInt16BE=function(r,t,n){return r=+r,t>>>=0,n||k(this,r,t,2,65535,0),this[t]=r>>>8,this[t+1]=255&r,t+2},o.prototype.writeUint32LE=o.prototype.writeUInt32LE=function(r,t,n){return r=+r,t>>>=0,n||k(this,r,t,4,4294967295,0),this[t+3]=r>>>24,this[t+2]=r>>>16,this[t+1]=r>>>8,this[t]=255&r,t+4},o.prototype.writeUint32BE=o.prototype.writeUInt32BE=function(r,t,n){return r=+r,t>>>=0,n||k(this,r,t,4,4294967295,0),this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=255&r,t+4},o.prototype.writeIntLE=function(r,t,n,i){if(r=+r,t>>>=0,!i){var u=Math.pow(2,8*n-1);k(this,r,t,n,u-1,-u)}var h=0,w=1,F=0;for(this[t]=255&r;++h<n&&(w*=256);)r<0&&0===F&&0!==this[t+h-1]&&(F=1),this[t+h]=(r/w>>0)-F&255;return t+n},o.prototype.writeIntBE=function(r,t,n,i){if(r=+r,t>>>=0,!i){var u=Math.pow(2,8*n-1);k(this,r,t,n,u-1,-u)}var h=n-1,w=1,F=0;for(this[t+h]=255&r;--h>=0&&(w*=256);)r<0&&0===F&&0!==this[t+h+1]&&(F=1),this[t+h]=(r/w>>0)-F&255;return t+n},o.prototype.writeInt8=function(r,t,n){return r=+r,t>>>=0,n||k(this,r,t,1,127,-128),r<0&&(r=255+r+1),this[t]=255&r,t+1},o.prototype.writeInt16LE=function(r,t,n){return r=+r,t>>>=0,n||k(this,r,t,2,32767,-32768),this[t]=255&r,this[t+1]=r>>>8,t+2},o.prototype.writeInt16BE=function(r,t,n){return r=+r,t>>>=0,n||k(this,r,t,2,32767,-32768),this[t]=r>>>8,this[t+1]=255&r,t+2},o.prototype.writeInt32LE=function(r,t,n){return r=+r,t>>>=0,n||k(this,r,t,4,2147483647,-2147483648),this[t]=255&r,this[t+1]=r>>>8,this[t+2]=r>>>16,this[t+3]=r>>>24,t+4},o.prototype.writeInt32BE=function(r,t,n){return r=+r,t>>>=0,n||k(this,r,t,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),this[t]=r>>>24,this[t+1]=r>>>16,this[t+2]=r>>>8,this[t+3]=255&r,t+4},o.prototype.writeFloatLE=function(r,t,n){return V(this,r,t,!0,n)},o.prototype.writeFloatBE=function(r,t,n){return V(this,r,t,!1,n)},o.prototype.writeDoubleLE=function(r,t,n){return K(this,r,t,!0,n)},o.prototype.writeDoubleBE=function(r,t,n){return K(this,r,t,!1,n)},o.prototype.copy=function(r,t,n,i){if(!o.isBuffer(r))throw new TypeError("argument should be a Buffer");if(n||(n=0),!i&&0!==i&&(i=this.length),t>=r.length&&(t=r.length),t||(t=0),i>0&&i<n&&(i=n),i===n||0===r.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),r.length-t<i-n&&(i=r.length-t+n);var u=i-n;return this===r&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(r,this.subarray(n,i),t),u},o.prototype.fill=function(r,t,n,i){if("string"==typeof r){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!o.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===r.length){var u=r.charCodeAt(0);("utf8"===i&&u<128||"latin1"===i)&&(r=u)}}else"number"==typeof r?r&=255:"boolean"==typeof r&&(r=Number(r));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var h;if(t>>>=0,n=void 0===n?this.length:n>>>0,r||(r=0),"number"==typeof r)for(h=t;h<n;++h)this[h]=r;else{var w=o.isBuffer(r)?r:o.from(r,i),F=w.length;if(0===F)throw new TypeError('The value "'+r+'" is invalid for argument "value"');for(h=0;h<n-t;++h)this[h+t]=w[h%F]}return this};var cr=/[^+/0-9A-Za-z-_]/g;function W(e,r){r=r||1/0;for(var t,n=e.length,i=null,u=[],h=0;h<n;++h){if((t=e.charCodeAt(h))>55295&&t<57344){if(!i){if(t>56319){(r-=3)>-1&&u.push(239,191,189);continue}if(h+1===n){(r-=3)>-1&&u.push(239,191,189);continue}i=t;continue}if(t<56320){(r-=3)>-1&&u.push(239,191,189),i=t;continue}t=65536+(i-55296<<10|t-56320)}else i&&(r-=3)>-1&&u.push(239,191,189);if(i=null,t<128){if((r-=1)<0)break;u.push(t)}else if(t<2048){if((r-=2)<0)break;u.push(t>>6|192,63&t|128)}else if(t<65536){if((r-=3)<0)break;u.push(t>>12|224,t>>6&63|128,63&t|128)}else{if(!(t<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;u.push(t>>18|240,t>>12&63|128,t>>6&63|128,63&t|128)}}return u}function j(e){return E.toByteArray(function sr(e){if((e=(e=e.split("=")[0]).trim().replace(cr,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Y(e,r,t,n){for(var i=0;i<n&&!(i+t>=r.length||i>=e.length);++i)r[i+t]=e[i];return i}function Z(e,r){return e instanceof r||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===r.name}function Q(e){return e!=e}var wr=function(){for(var e="0123456789abcdef",r=new Array(256),t=0;t<16;++t)for(var n=16*t,i=0;i<16;++i)r[n+i]=e[t]+e[i];return r}()},8461:(J,_)=>{_.read=function(g,s,E,v,a){var U,x,A=8*a-v-1,o=(1<<A)-1,b=o>>1,I=-7,L=E?a-1:0,N=E?-1:1,f=g[s+L];for(L+=N,U=f&(1<<-I)-1,f>>=-I,I+=A;I>0;U=256*U+g[s+L],L+=N,I-=8);for(x=U&(1<<-I)-1,U>>=-I,I+=v;I>0;x=256*x+g[s+L],L+=N,I-=8);if(0===U)U=1-b;else{if(U===o)return x?NaN:1/0*(f?-1:1);x+=Math.pow(2,v),U-=b}return(f?-1:1)*x*Math.pow(2,U-v)},_.write=function(g,s,E,v,a,U){var x,A,o,b=8*U-a-1,I=(1<<b)-1,L=I>>1,N=23===a?Math.pow(2,-24)-Math.pow(2,-77):0,f=v?0:U-1,l=v?1:-1,d=s<0||0===s&&1/s<0?1:0;for(s=Math.abs(s),isNaN(s)||s===1/0?(A=isNaN(s)?1:0,x=I):(x=Math.floor(Math.log(s)/Math.LN2),s*(o=Math.pow(2,-x))<1&&(x--,o*=2),(s+=x+L>=1?N/o:N*Math.pow(2,1-L))*o>=2&&(x++,o/=2),x+L>=I?(A=0,x=I):x+L>=1?(A=(s*o-1)*Math.pow(2,a),x+=L):(A=s*Math.pow(2,L-1)*Math.pow(2,a),x=0));a>=8;g[E+f]=255&A,f+=l,A/=256,a-=8);for(x=x<<a|A,b+=a;b>0;g[E+f]=255&x,f+=l,x/=256,b-=8);g[E+f-l]|=128*d}}}]);