"use strict";(self.webpackChunkThe_Circus=self.webpackChunkThe_Circus||[]).push([[737],{9737:(F,a,s)=>{s.r(a),s.d(a,{AccessModule:()=>C});var u=s(6895),i=s(433),c=s(9833),t=s(8256);let m=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-access"]],decls:1,vars:0,template:function(e,n){1&e&&t._UZ(0,"router-outlet")},dependencies:[c.lC],encapsulation:2}),o})();var l=s(9782);function p(o,r){1&o&&(t.TgZ(0,"div",16),t._uU(1," Numero di telefono non valido "),t.qZA())}function g(o,r){1&o&&(t.TgZ(0,"div",16),t._uU(1," Password obbligatoria "),t.qZA())}function h(o,r){1&o&&(t.TgZ(0,"div",17),t._uU(1," Utente o password non validi "),t.qZA())}const f=[{path:"",component:m,children:[{path:"login",component:(()=>{class o{constructor(e,n,d,A){this.router=e,this.route=n,this.authService=d,this.fb=A,this.loginFailed=!1,this.loginForm=this.fb.group({phone:["",i.kI.required],password:["",i.kI.required]})}ngOnInit(){this.authService.isLoggedIn()&&this.router.navigate([""]).then(),this.route.snapshot.queryParams.next&&(this.next=this.route.snapshot.queryParams.next)}onSubmit(){this.loginForm.invalid||(this.loginFailed=!1,this.authService.login({phone:this.loginForm.value.phone,password:this.loginForm.value.password}).subscribe({next:n=>{n&&(this.next?this.router.navigateByUrl(this.next).catch(()=>this.router.navigate([""]).then()):this.router.navigate([""]).then())},error:n=>{this.loginFailed=!0}}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.F0),t.Y36(c.gz),t.Y36(l.x),t.Y36(i.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:22,vars:5,consts:[[1,"container-fluid","d-flex","align-items-center","justify-content-center","vh-100"],[1,"card","p-4"],[1,"card-body"],[1,"mb-4","text-center"],[3,"formGroup","ngSubmit"],[1,"form-group","text-center"],["for","phoneNumber",1,"text-center"],["type","text","id","phoneNumber","formControlName","phone","required","",1,"form-control"],[1,"valid-feedback"],["class","text-danger",4,"ngIf"],[1,"form-group","text-center","mt-2"],["for","password",1,"text-center"],["type","password","id","password","formControlName","password","required","",1,"form-control"],["class","alert alert-danger text-center mt-3",4,"ngIf"],[1,"text-center","mt-3"],["type","submit",1,"btn","btn-secondary",3,"disabled"],[1,"text-danger"],[1,"alert","alert-danger","text-center","mt-3"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4,"Login"),t.qZA(),t.TgZ(5,"form",4),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(6,"div",5)(7,"label",6),t._uU(8,"Numero di telefono"),t.qZA(),t._UZ(9,"input",7),t.TgZ(10,"div",8),t._uU(11," Looks good! "),t.qZA(),t.YNc(12,p,2,0,"div",9),t.qZA(),t.TgZ(13,"div",10)(14,"label",11),t._uU(15,"Password"),t.qZA(),t._UZ(16,"input",12),t.YNc(17,g,2,0,"div",9),t.qZA(),t.YNc(18,h,2,0,"div",13),t.TgZ(19,"div",14)(20,"button",15),t._uU(21,"Login"),t.qZA()()()()()()),2&e&&(t.xp6(5),t.Q6J("formGroup",n.loginForm),t.xp6(7),t.Q6J("ngIf",n.loginForm.controls.phone.invalid&&(n.loginForm.controls.phone.dirty||n.loginForm.controls.phone.touched)),t.xp6(5),t.Q6J("ngIf",n.loginForm.controls.password.invalid&&(n.loginForm.controls.password.dirty||n.loginForm.controls.password.touched)),t.xp6(1),t.Q6J("ngIf",n.loginFailed),t.xp6(2),t.Q6J("disabled",n.loginForm.invalid))},dependencies:[u.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.sg,i.u]}),o})()},{path:"logout",component:(()=>{class o{constructor(e,n){this.router=e,this.authService=n}ngOnInit(){this.authService.logout().subscribe(),setTimeout(()=>{this.router.navigate(["/home"])},3e3)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.F0),t.Y36(l.x))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-logout"]],decls:4,vars:0,consts:[[1,"section","d-flex","align-items-center","justify-content-center","vh-100"],[1,"container","text-center"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"p"),t._uU(3,"Logout avvenuto correttamente"),t.qZA()()())},encapsulation:2}),o})()}]}];let v=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.Bz.forChild(f),c.Bz]}),o})(),C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,i.u5,i.UX,v]}),o})()}}]);