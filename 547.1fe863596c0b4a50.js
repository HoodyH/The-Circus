"use strict";(self.webpackChunkThe_Circus=self.webpackChunkThe_Circus||[]).push([[547],{8547:(F,p,c)=>{c.r(p),c.d(p,{PollModule:()=>Q});var u=c(6895),v=c(268),d=c(9833),l=c(433),e=c(8256),m=c(6613),f=c(4426),g=c(7083);function _(o,n){if(1&o&&(e.TgZ(0,"div",4)(1,"div",5)(2,"div",1)(3,"div",6)(4,"span",7),e._uU(5),e.qZA()(),e.TgZ(6,"div",8)(7,"h4",9),e._uU(8),e.qZA()(),e.TgZ(9,"div",6)(10,"div")(11,"p",10),e._uU(12,"Voti"),e.qZA(),e.TgZ(13,"p",9),e._uU(14),e.qZA()()()()()()),2&o){const t=n.$implicit,r=n.index;e.xp6(4),e.Q6J("ngClass",0===r?"badge-gold":1===r?"badge-silver":2===r?"badge-brown":""),e.xp6(1),e.hij("",r+1,"\xb0"),e.xp6(3),e.AsE(" ",t.firstName," ",t.lastName,""),e.xp6(6),e.Oqu(t.count)}}let h=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-poll-results-list"]],inputs:{results:"results"},decls:4,vars:1,consts:[[1,"container"],[1,"row"],[1,"col-md-6","offset-md-3"],["class","card mb-3",4,"ngFor","ngForOf"],[1,"card","mb-3"],[1,"card-body"],[1,"col-2","d-flex","text-center","align-items-center","justify-content-center"],[1,"badge","badge-circle","d-flex","align-items-center","justify-content-center",3,"ngClass"],[1,"col","d-flex","text-center","align-items-center","justify-content-center"],[1,"m-0"],[1,"vote-label"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e.YNc(3,_,15,5,"div",3),e.qZA()()()),2&t&&(e.xp6(3),e.Q6J("ngForOf",r.results))},dependencies:[u.mk,u.sg],styles:[".badge-circle[_ngcontent-%COMP%]{display:flex;width:30px;height:30px;border-radius:50%;text-align:center;line-height:30px;background-color:var(--primary-color)}.badge-gold[_ngcontent-%COMP%]{background-color:gold;color:#000}.badge-silver[_ngcontent-%COMP%]{background-color:silver;color:#000}.badge-brown[_ngcontent-%COMP%]{background-color:#cd7f32;color:#000}.vote-label[_ngcontent-%COMP%]{font-size:.8em;margin:0}"]}),o})(),P=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-no-poll-active"]],decls:6,vars:0,consts:[[1,"col-md-12","text-center"],[1,"emoji"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"p")(2,"span",1),e._uU(3,"\u{1f62d}"),e.qZA()(),e.TgZ(4,"p"),e._uU(5,"Non ci sono poll attivi in questo momento, riprova pi\xf9 tardi"),e.qZA()())},styles:[".emoji[_ngcontent-%COMP%]{font-size:6em}"]}),o})();function x(o,n){1&o&&(e.TgZ(0,"div",2)(1,"div",3),e._UZ(2,"app-loading-animation"),e.qZA()())}function Z(o,n){1&o&&(e.TgZ(0,"div",2)(1,"div",3),e._UZ(2,"app-no-poll-active"),e.qZA()())}function b(o,n){1&o&&(e.TgZ(0,"p"),e._uU(1,"Inserisci il numero di telefono di un Partecipante per votare"),e.qZA())}function C(o,n){1&o&&(e.TgZ(0,"p"),e._uU(1,"Poll chiuso, non si accettano pi\xf9 voti"),e.qZA())}function T(o,n){1&o&&(e.TgZ(0,"p"),e._uU(1," Vota di nuovo per modificare il voto, hai 5 minuti per modificare la tua scelta "),e.qZA())}function A(o,n){if(1&o&&(e.TgZ(0,"div",11)(1,"div",12)(2,"p"),e._uU(3,"Hai votato per:"),e.qZA(),e.TgZ(4,"h4"),e._uU(5),e.qZA(),e.YNc(6,T,2,0,"p",6),e.qZA()()),2&o){const t=e.oxw(2);e.xp6(5),e.AsE("",t.vote.vote.user.first_name," ",t.vote.vote.user.last_name,""),e.xp6(1),e.Q6J("ngIf",!t.vote||t.vote&&t.vote.is_vote_editable)}}function y(o,n){1&o&&(e.TgZ(0,"div",20),e._uU(1," Numero di telefono non valido "),e.qZA())}function S(o,n){1&o&&(e.TgZ(0,"div",20),e._uU(1," Il tuo tempo per votare \xe8 terminato, ricarica la pagina "),e.qZA())}function N(o,n){1&o&&(e.TgZ(0,"div",20),e._uU(1," Contatto non trovato "),e.qZA())}function I(o,n){1&o&&(e.TgZ(0,"div",20),e._uU(1," Non puoi votare per te stesso, daiii "),e.qZA())}function U(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"form",13),e.NdJ("ngSubmit",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.sendVote())}),e.TgZ(1,"div",14)(2,"div",15)(3,"span",16),e._uU(4,"+39"),e.qZA()(),e._UZ(5,"input",17),e.qZA(),e.YNc(6,y,2,0,"div",18),e.YNc(7,S,2,0,"div",18),e.YNc(8,N,2,0,"div",18),e.YNc(9,I,2,0,"div",18),e.TgZ(10,"button",19),e._uU(11,"Invia"),e.qZA()()}if(2&o){const t=e.oxw(2);e.Q6J("formGroup",t.form),e.xp6(6),e.Q6J("ngIf",t.form.controls.phone.invalid&&t.form.controls.phone.touched),e.xp6(1),e.Q6J("ngIf",t.error==t.errorService.editTimeExpired),e.xp6(1),e.Q6J("ngIf",t.error==t.errorService.participantNotFound),e.xp6(1),e.Q6J("ngIf",t.error==t.errorService.selfVote),e.xp6(1),e.Q6J("disabled",t.form.invalid)}}function q(o,n){if(1&o&&(e.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"h2",5),e._uU(4),e.qZA(),e.YNc(5,b,2,0,"p",6),e.YNc(6,C,2,0,"p",6),e.YNc(7,A,7,3,"div",7),e.YNc(8,U,12,6,"form",8),e.qZA()(),e._UZ(9,"br"),e.TgZ(10,"div",3)(11,"div",9),e._UZ(12,"app-poll-chart",10),e.qZA()(),e.TgZ(13,"div",3)(14,"div",9),e._UZ(15,"app-poll-results-list",10),e.qZA()()()),2&o){const t=e.oxw();e.xp6(4),e.Oqu(t.currentPoll.question),e.xp6(1),e.Q6J("ngIf",t.currentPoll.is_active&&!t.vote),e.xp6(1),e.Q6J("ngIf",!t.currentPoll.is_active),e.xp6(1),e.Q6J("ngIf",t.vote&&t.vote.vote.user),e.xp6(1),e.Q6J("ngIf",t.currentPoll.is_active&&!t.vote||t.vote&&t.vote.is_vote_editable),e.xp6(4),e.Q6J("results",t.currentPollResults),e.xp6(3),e.Q6J("results",t.currentPollResults)}}class J{constructor(){this.noError="no_error",this.participantNotFound="participant_not_found",this.editTimeExpired="edit_time_expired",this.selfVote="self_vote",this.pollClosed="poll_closed",this.alreadyVoted="already_voted",this.genericError="generic_error"}}const w=[{path:"",component:(()=>{class o{constructor(t,r){this.fb=t,this.pollService=r,this.currentPollResults=[],this.loading=!0,this.errorService=new J,this.form=this.fb.group({phone:["",l.kI.required]})}ngOnInit(){this.currentPollSubscription=setInterval(()=>{this.getData()},5e3),this.pollService.getPollVote().subscribe({next:t=>{t.length&&(this.vote=t[0]),this.loading=!1}})}ngOnDestroy(){this.currentPollSubscription&&clearInterval(this.currentPollSubscription)}getData(){this.pollService.getPoll().subscribe(t=>{this.polls=t;let r=!1;for(const i of t)if(this.isCurrentlyActive(i.start_datetime,i.end_datetime)){this.currentPoll=i,r=!0;break}if(r||(this.currentPoll=t.length>0?t[t.length-1]:null),this.currentPoll){const i={};for(const a of this.currentPoll.votes){const s=a.vote;s.user.id in i?i[s.user.id].count++:i[s.user.id]={firstName:s.user.first_name,lastName:s.user.last_name,count:1}}this.currentPollResults=Object.values(i).sort((a,s)=>s.count-a.count)}})}sendVote(){if(this.form.valid){this.error=this.errorService.noError;const t={next:r=>{console.log(r),this.vote=r,this.getData()},error:r=>{if(this.error=this.errorService.genericError,r.error.vote)switch(r.error.vote.code){case this.errorService.participantNotFound:this.error=this.errorService.participantNotFound;break;case this.errorService.selfVote:this.error=this.errorService.selfVote}if(r.error.poll&&r.error.poll.code===this.errorService.pollClosed&&(this.error=this.errorService.pollClosed),r.error.code)switch(r.error.code){case this.errorService.editTimeExpired:this.error=this.errorService.editTimeExpired;break;case this.errorService.alreadyVoted:this.error=this.errorService.alreadyVoted}}};this.vote?(this.vote.vote=this.form.value.phone,this.pollService.putPollVote(this.vote.id,this.vote).subscribe(t)):this.currentPoll&&this.pollService.postPollVote({poll:this.currentPoll.id,vote:this.form.value.phone}).subscribe(t)}}isExpired(t){return!!t&&new Date>t}isCurrentlyActive(t,r){const i=new Date,a=new Date(t),s=new Date(r);return a&&r?i>=a&&i<=s:a?i>=a:!!s&&i<=s}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.qu),e.Y36(m.X))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-poll"]],decls:4,vars:3,consts:[[1,"section","d-flex","align-items-center","min-vh-100"],["class","container",4,"ngIf"],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-6","text-center"],[1,"mb-3","title"],[4,"ngIf"],["class","card mb-3 vote-result",4,"ngIf"],["class","mt-3 text-center",3,"formGroup","ngSubmit",4,"ngIf"],[1,"col"],[3,"results"],[1,"card","mb-3","vote-result"],[1,"card-body"],[1,"mt-3","text-center",3,"formGroup","ngSubmit"],[1,"input-group","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],["type","number","formControlName","phone","placeholder","000 000 0000",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["type","submit",1,"btn","btn-secondary",3,"disabled"],[1,"alert","alert-danger"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.YNc(1,x,3,0,"div",1),e.YNc(2,Z,3,0,"div",1),e.YNc(3,q,16,7,"div",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",r.loading||null==r.polls),e.xp6(1),e.Q6J("ngIf",!r.loading&&!r.currentPoll&&r.polls&&!r.polls.length),e.xp6(1),e.Q6J("ngIf",!r.loading&&r.currentPoll))},dependencies:[u.O5,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.sg,l.u,f.C,g.r,h,P],styles:[".input-group-text[_ngcontent-%COMP%]{border-radius:10px 0 0 10px;background-color:var(--secondary-color)}.vote-result[_ngcontent-%COMP%]{background-color:#8fd3a7}"]}),o})()}];let O=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(w),d.Bz]}),o})(),Q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,l.u5,l.UX,v.O,O]}),o})()}}]);