"use strict";(self.webpackChunkThe_Circus=self.webpackChunkThe_Circus||[]).push([[389],{5389:(F,d,s)=>{s.r(d),s.d(d,{LiveModule:()=>w});var r=s(6895),p=s(8954),h=s(9833),a=s(892),u=s(7139),t=s(8256),g=s(4624),v=s(6613),f=s(4426),m=s(7093);function x(i,l){if(1&i&&(t.ynx(0),t._UZ(1,"img",5),t.BQk()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("src",e.currentFile.url,t.LSH)("alt",e.currentFile.id)}}function C(i,l){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"video",6,7),t.NdJ("playing",function(o){t.CHM(e);const c=t.oxw(2);return t.KtG(c.calculateVideoTime(o))}),t._UZ(3,"source",8),t._uU(4," Il tuo browser non supporta la visualizzazione dei video. "),t.qZA(),t.BQk()}if(2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("muted",!0),t.xp6(2),t.Q6J("src",e.currentFile.url,t.LSH)}}function _(i,l){if(1&i&&(t.TgZ(0,"p",9),t._uU(1,"Caricato da: "),t.TgZ(2,"strong"),t._uU(3),t.qZA()()),2&i){const e=t.oxw(2);t.xp6(3),t.AsE("",e.currentFile.user.first_name," ",e.currentFile.user.last_name,"")}}function P(i,l){if(1&i&&(t.TgZ(0,"div",1)(1,"div",2)(2,"div",2),t.YNc(3,x,2,2,"ng-container",3),t.YNc(4,C,5,2,"ng-container",3),t.YNc(5,_,4,2,"p",4),t.qZA()()()),2&i){const e=t.oxw();t.xp6(3),t.Q6J("ngIf","video/mp4"!==e.currentFile.type),t.xp6(1),t.Q6J("ngIf","video/mp4"===e.currentFile.type),t.xp6(1),t.Q6J("ngIf",e.currentFile)}}let y=(()=>{class i{constructor(){this.slidingTimeSeconds=10,this.slidingVideoMaxTimeSeconds=30,this.files=[],this.lastScrolledPhoto=new t.vpe}ngOnInit(){this.displayFile()}ngOnChanges(e){e.files&&e.files.currentValue&&e.files.currentValue.length&&!e.files.firstChange&&this.displayFile()}displayFile(){this.files&&this.files.length>0?(this.currentFile=this.files.pop(),this.setNextInteraction("video/mp4"!==this.currentFile.type?this.slidingTimeSeconds:this.slidingVideoMaxTimeSeconds)):(this.lastScrolledPhoto.emit(this.currentFile),this.setNextInteraction(this.slidingTimeSeconds))}calculateVideoTime(e){let n=Math.floor(e.target.duration);n>this.slidingTimeSeconds&&(n=this.slidingTimeSeconds),this.setNextInteraction(n)}setNextInteraction(e){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.displayFile()},1e3*e)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-carousel"]],inputs:{slidingTimeSeconds:"slidingTimeSeconds",slidingVideoMaxTimeSeconds:"slidingVideoMaxTimeSeconds",files:"files"},outputs:{lastScrolledPhoto:"lastScrolledPhoto"},features:[t.TTD],decls:1,vars:1,consts:[["class","p-3",4,"ngIf"],[1,"p-3"],[1,""],[4,"ngIf"],["class","file-tag",4,"ngIf"],[1,"img-fluid",3,"src","alt"],["autoplay","","loop","",1,"video-fluid",3,"muted","playing"],["videoPlayer",""],["type","video/mp4",3,"src"],[1,"file-tag"]],template:function(e,n){1&e&&t.YNc(0,P,6,3,"div",0),2&e&&t.Q6J("ngIf",n.currentFile)},dependencies:[r.O5],styles:[".carousel-item[_ngcontent-%COMP%]{height:auto;max-height:50%}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{max-height:60vh}.file-tag[_ngcontent-%COMP%]{position:relative;bottom:25px;border-radius:var(--border-radius);background-color:var(--primary-color);padding:.6em;color:#eee;width:-moz-fit-content;width:fit-content;margin:auto}"]}),i})();function S(i,l){1&i&&(t.TgZ(0,"ul",3),t._UZ(1,"li")(2,"li")(3,"li")(4,"li")(5,"li")(6,"li")(7,"li")(8,"li")(9,"li")(10,"li"),t.qZA())}function b(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",6)(1,"app-carousel",8),t.NdJ("lastScrolledPhoto",function(o){t.CHM(e);const c=t.oxw(2);return t.KtG(c.getCarouselData(o))}),t.qZA()()}if(2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("files",e.files)}}function T(i,l){if(1&i&&(t.TgZ(0,"div",6)(1,"h2"),t._uU(2),t.qZA(),t._UZ(3,"app-poll-chart",9),t.qZA()),2&i){const e=t.oxw(2);t.xp6(2),t.Oqu(null==e.currentPoll?null:e.currentPoll.question),t.xp6(1),t.Q6J("poll",e.currentPoll)("results",e.currentPollResults)("maxResultsLive",7)}}function M(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",4),t.YNc(1,b,2,1,"div",5),t.YNc(2,T,4,4,"div",5),t.TgZ(3,"div",6)(4,"app-current-status",7),t.NdJ("currentActivityChange",function(o){t.CHM(e);const c=t.oxw();return t.KtG(c.currentActivityChange(o))}),t.qZA()()()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.liveScreenConfiguration.main_block==e.liveScreenTypes.CAROUSEL),t.xp6(1),t.Q6J("ngIf",e.liveScreenConfiguration.main_block==e.liveScreenTypes.POLL),t.xp6(2),t.Q6J("activities",e.event.activities)("eventDate",e.event.start_datetime)}}const O=[{path:"",component:(()=>{class i{constructor(e,n,o,c){this.eventService=e,this.galleryService=n,this.pollService=o,this.liveService=c,this.currentPollResults=[],this.liveScreenTypes=u.gV,this.liveScreenConfiguration=u.hA,this.background=a.z,this.backgroundSubscription=null}ngOnInit(){this.eventService.getEvent().subscribe({next:e=>{this.event=e}}),this.getCarouselData(),this.pollService.getPoll().subscribe({next:e=>{this.polls=e}}),this.liveService.backgroundSubject.subscribe({next:e=>{this.background=e}})}ngOnDestroy(){this.backgroundSubscription&&this.backgroundSubscription.unsubscrive()}currentActivityChange(e){this.currentActivity=e,this.liveScreenConfiguration=this.currentActivity.live_configuration,this.liveScreenConfiguration.lights?this.backgroundSubscription=this.liveService.subscribeBackground():(this.backgroundSubscription&&this.backgroundSubscription.unsubscrive(),this.background=a.z),this.liveScreenConfiguration.main_block==this.liveScreenTypes.POLL?(this.getPollData(),this.currentPollSubscription=setInterval(()=>{this.getPollData()},5e3)):(this.currentPollSubscription&&this.currentPollSubscription.unsubscrive(),this.currentPoll=null,this.currentPollResults=[])}getPollData(){this.pollService.getPoll().subscribe({next:e=>{let n=!1;for(const o of e){if(this.pollService.isActive(o.start_datetime,o.end_datetime)){this.currentPoll=o,n=!0;break}this.pollService.isClosed(o.end_datetime)&&!n&&(this.currentPoll=o,n=!0)}n||(this.currentPoll=null),this.currentPoll&&(this.currentPollResults=this.pollService.generateResults(this.currentPoll.votes))}})}getCarouselData(e){this.galleryService.getFiles().subscribe({next:n=>{const o=n.results;if(o&&e){const c=o.findIndex(I=>I.id===e.id);c>0&&(this.files=o.slice(0,c)),-1==c&&(this.files=o)}else this.files=o}})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(u.y3),t.Y36(g.j),t.Y36(v.X),t.Y36(a.k))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-live"]],decls:3,vars:4,consts:[[1,"vh-100","d-flex","align-items-center"],["class","circles",4,"ngIf"],["class","container",4,"ngIf"],[1,"circles"],[1,"container"],["class","row",4,"ngIf"],[1,"row"],[3,"activities","eventDate","currentActivityChange"],[1,"col","text-center","mx-auto",3,"files","lastScrolledPhoto"],[3,"poll","results","maxResultsLive"]],template:function(e,n){1&e&&(t.TgZ(0,"section",0),t.YNc(1,S,11,0,"ul",1),t.YNc(2,M,5,4,"div",2),t.qZA()),2&e&&(t.Udp("background",n.background.color),t.xp6(1),t.Q6J("ngIf",n.liveScreenConfiguration.lights),t.xp6(1),t.Q6J("ngIf",n.event))},dependencies:[r.O5,f.C,m.J,y],styles:[".area[_ngcontent-%COMP%]{background:#4e54c8;background:-webkit-linear-gradient(to left,#8f94fb,#4e54c8);width:100%;height:100vh}.circles[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:absolute;display:block;list-style:none;width:20px;height:20px;background:rgba(255,255,255,.4);animation:animate 25s linear infinite;bottom:-150px}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1){left:25%;width:80px;height:80px;animation-delay:0s}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){left:10%;width:20px;height:20px;animation-delay:2s;animation-duration:12s}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){left:70%;width:20px;height:20px;animation-delay:4s}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4){left:40%;width:60px;height:60px;animation-delay:0s;animation-duration:18s}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5){left:65%;width:20px;height:20px;animation-delay:0s}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6){left:75%;width:110px;height:110px;animation-delay:3s}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7){left:35%;width:150px;height:150px;animation-delay:7s}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8){left:50%;width:25px;height:25px;animation-delay:15s;animation-duration:45s}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9){left:20%;width:15px;height:15px;animation-delay:2s;animation-duration:35s}.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10){left:85%;width:150px;height:150px;animation-delay:0s;animation-duration:11s}@keyframes animate{0%{transform:translateY(0) rotate(0);opacity:1;border-radius:0}to{transform:translateY(-1000px) rotate(720deg);opacity:0;border-radius:50%}}"]}),i})()}];let L=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[h.Bz.forChild(O),h.Bz]}),i})(),w=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[r.ez,p.O,L]}),i})()}}]);