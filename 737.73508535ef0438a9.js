"use strict";(self.webpackChunkThe_Circus=self.webpackChunkThe_Circus||[]).push([[737],{9737:(Z,l,r)=>{r.r(l),r.d(l,{AccessModule:()=>F});var d=r(6895),s=r(433),c=r(9833),t=r(8256);let p=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-access"]],decls:1,vars:0,template:function(o,n){1&o&&t._UZ(0,"router-outlet")},dependencies:[c.lC],encapsulation:2}),e})();var m=r(9782);function g(e,i){1&e&&(t.TgZ(0,"div",17),t._uU(1," Numero di telefono non valido "),t.qZA())}function f(e,i){1&e&&(t.TgZ(0,"div",17),t._uU(1," Password obbligatoria "),t.qZA())}function h(e,i){1&e&&(t.TgZ(0,"div",18),t._uU(1," Utente o password non validi "),t.qZA())}function v(e,i){1&e&&(t.TgZ(0,"div",19),t._uU(1," Login effettuato con successo "),t.qZA())}const y=[{path:"",component:p,children:[{path:"login",component:(()=>{class e{constructor(o,n,a,u){this.router=o,this.route=n,this.authService=a,this.fb=u,this.loginFailed=!1,this.loginSuccess=!1,this.loginForm=this.fb.group({phone:["",s.kI.required],password:["",s.kI.required]})}ngOnInit(){this.route.snapshot.queryParams.next&&(this.next=this.route.snapshot.queryParams.next);let o=!1;this.route.snapshot.queryParams.key&&(o=this.autoLogin(this.route.snapshot.queryParams.key)),!o&&this.authService.isLoggedIn()&&this.router.navigate([""]).then()}autoLogin(o){const n=Buffer.from(o,"base64").toString("latin1"),[a,u]=n.split(",");return this.loginForm.patchValue({phone:a,password:u}),this.onSubmit(),!0}onSubmit(){this.loginForm.invalid||(this.loginFailed=!1,this.authService.login({phone:this.loginForm.value.phone,password:this.loginForm.value.password}).subscribe({next:n=>{n&&(this.loginFailed=!1,this.loginSuccess=!0,setTimeout(()=>{this.next?this.router.navigateByUrl(this.next).catch(()=>this.router.navigate([""]).then()):this.router.navigate([""]).then()},1e3))},error:n=>{this.loginFailed=!0}}))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(c.F0),t.Y36(c.gz),t.Y36(m.x),t.Y36(s.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:23,vars:6,consts:[[1,"container-fluid","d-flex","align-items-center","justify-content-center","vh-100"],[1,"card","p-4"],[1,"card-body"],[1,"mb-4","text-center"],[3,"formGroup","ngSubmit"],[1,"form-group","text-center"],["for","phoneNumber",1,"text-center"],["type","text","id","phoneNumber","formControlName","phone","required","",1,"form-control"],[1,"valid-feedback"],["class","text-danger",4,"ngIf"],[1,"form-group","text-center","mt-2"],["for","password",1,"text-center"],["type","password","id","password","formControlName","password","required","",1,"form-control"],["class","alert alert-danger text-center mt-3",4,"ngIf"],["class","alert alert-success text-center mt-3",4,"ngIf"],[1,"text-center","mt-3"],["type","submit",1,"btn","btn-secondary",3,"disabled"],[1,"text-danger"],[1,"alert","alert-danger","text-center","mt-3"],[1,"alert","alert-success","text-center","mt-3"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4,"Login"),t.qZA(),t.TgZ(5,"form",4),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(6,"div",5)(7,"label",6),t._uU(8,"Numero di telefono"),t.qZA(),t._UZ(9,"input",7),t.TgZ(10,"div",8),t._uU(11," Looks good! "),t.qZA(),t.YNc(12,g,2,0,"div",9),t.qZA(),t.TgZ(13,"div",10)(14,"label",11),t._uU(15,"Password"),t.qZA(),t._UZ(16,"input",12),t.YNc(17,f,2,0,"div",9),t.qZA(),t.YNc(18,h,2,0,"div",13),t.YNc(19,v,2,0,"div",14),t.TgZ(20,"div",15)(21,"button",16),t._uU(22,"Login"),t.qZA()()()()()()),2&o&&(t.xp6(5),t.Q6J("formGroup",n.loginForm),t.xp6(7),t.Q6J("ngIf",n.loginForm.controls.phone.invalid&&(n.loginForm.controls.phone.dirty||n.loginForm.controls.phone.touched)),t.xp6(5),t.Q6J("ngIf",n.loginForm.controls.password.invalid&&(n.loginForm.controls.password.dirty||n.loginForm.controls.password.touched)),t.xp6(1),t.Q6J("ngIf",n.loginFailed),t.xp6(1),t.Q6J("ngIf",n.loginSuccess),t.xp6(2),t.Q6J("disabled",n.loginForm.invalid))},dependencies:[d.O5,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.sg,s.u]}),e})()},{path:"logout",component:(()=>{class e{constructor(o,n){this.router=o,this.authService=n}ngOnInit(){this.authService.logout().subscribe(),setTimeout(()=>{this.router.navigate(["/"])},3e3)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(c.F0),t.Y36(m.x))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-logout"]],decls:4,vars:0,consts:[[1,"section","d-flex","align-items-center","justify-content-center","vh-100"],[1,"container","text-center"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"p"),t._uU(3,"Logout avvenuto correttamente"),t.qZA()()())},encapsulation:2}),e})()}]}];let C=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(y),c.Bz]}),e})(),F=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,s.u5,s.UX,C]}),e})()}}]);