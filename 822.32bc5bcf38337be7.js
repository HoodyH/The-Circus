"use strict";(self.webpackChunkThe_Circus=self.webpackChunkThe_Circus||[]).push([[822],{822:(T,u,r)=>{r.r(u),r.d(u,{UserModule:()=>N});var a=r(6895),m=r(5649),e=r(8256),c=r(7842);let p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user"]],decls:2,vars:0,template:function(o,i){1&o&&e._UZ(0,"app-header")(1,"router-outlet")},dependencies:[c.G,m.lC],encapsulation:2}),t})();var s=r(433),d=r(7139),f=r(3288),v=r(6945);function g(t,n){if(1&t&&(e.TgZ(0,"li",15),e._UZ(1,"app-event-card",16),e.qZA()),2&t){const o=n.$implicit;e.xp6(1),e.Q6J("event",o)}}function h(t,n){if(1&t&&(e.TgZ(0,"div",11)(1,"div",12)(2,"h2"),e._uU(3,"I miei Eventi"),e.qZA(),e.TgZ(4,"ul",13),e.YNc(5,g,2,1,"li",14),e.qZA()()()),2&t){const o=e.oxw();e.xp6(5),e.Q6J("ngForOf",o.userEvents)}}const Z=[{path:"",component:p,children:[{path:"",component:(()=>{class t{constructor(o,i,l){this.formBuilder=o,this.eventService=i,this.userService=l,this.userEvents=[]}ngOnInit(){this.userDataForm=this.formBuilder.group({personalInfo:this.formBuilder.group({firstName:{value:"",disabled:!0},lastName:{value:"",disabled:!0},phoneNumber:{value:"",disabled:!0},email:{value:"",disabled:!0}}),events:this.formBuilder.array([])}),this.userService.getUser().subscribe({next:o=>{this.user=o,this.userDataForm.get("personalInfo").patchValue({firstName:o.first_name,lastName:o.last_name,phoneNumber:o.phone,email:o.email})}}),this.eventService.getEvents().subscribe({next:o=>{this.userEvents=o.sort((i,l)=>{const A=new Date(i.start_datetime);return new Date(l.start_datetime).getTime()-A.getTime()})}})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.qu),e.Y36(d.y3),e.Y36(f.j))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-me"]],decls:27,vars:2,consts:[[1,"section-banner","d-flex","align-items-center","min-vh-100"],[1,"container"],[1,"row","mt-5"],[3,"formGroup"],["formGroupName","personalInfo",1,"col"],[1,"form-group","mt-2"],["type","text","formControlName","firstName",1,"form-control","text-center"],["type","text","formControlName","lastName",1,"form-control"],["type","text","formControlName","phoneNumber",1,"form-control"],["type","text","formControlName","email",1,"form-control"],["class","row mt-5 mb-3",4,"ngIf"],[1,"row","mt-5","mb-3"],[1,"col"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[3,"event"]],template:function(o,i){1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1"),e._uU(4,"uSER pROFILE"),e.qZA()(),e.TgZ(5,"div",2)(6,"form",3)(7,"div",4)(8,"h2"),e._uU(9,"Dati personali"),e.qZA(),e.TgZ(10,"div",5)(11,"label"),e._uU(12,"Nome"),e.qZA(),e._UZ(13,"input",6),e.qZA(),e.TgZ(14,"div",5)(15,"label"),e._uU(16,"Cognome"),e.qZA(),e._UZ(17,"input",7),e.qZA(),e.TgZ(18,"div",5)(19,"label"),e._uU(20,"Numero di telefono"),e.qZA(),e._UZ(21,"input",8),e.qZA(),e.TgZ(22,"div",5)(23,"label"),e._uU(24,"Email"),e.qZA(),e._UZ(25,"input",9),e.qZA()()()(),e.YNc(26,h,6,1,"div",10),e.qZA()()),2&o&&(e.xp6(6),e.Q6J("formGroup",i.userDataForm),e.xp6(20),e.Q6J("ngIf",i.userEvents.length))},dependencies:[a.sg,a.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,s.x0,v.j]}),t})()}]}];let U=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild(Z),m.Bz]}),t})();var C=r(8954);let N=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,s.u5,s.UX,C.O,U]}),t})()}}]);