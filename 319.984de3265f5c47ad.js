"use strict";(self.webpackChunkThe_Circus=self.webpackChunkThe_Circus||[]).push([[319],{6319:(I,d,r)=>{r.r(d),r.d(d,{GalleryModule:()=>k});var c=r(6895),g=r(8954),a=r(5649),p=r(4530),e=r(8256);let h=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-gallery"]],decls:1,vars:0,template:function(t,n){1&t&&e._UZ(0,"router-outlet")},dependencies:[a.lC],encapsulation:2}),o})();var m=r(7139),u=r(4624);function f(o,i){if(1&o&&(e.TgZ(0,"div",12)(1,"div",13),e._UZ(2,"img",14),e.qZA()()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("src",t.previewImageSrc,e.LSH)}}function v(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",15)(1,"input",16),e.NdJ("change",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.onFileSelected(l))}),e.qZA()()}}function _(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",17)(1,"button",18),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.resetFile())}),e._uU(2,"Remove"),e.qZA(),e.TgZ(3,"button",19),e.NdJ("click",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.uploadPhoto(l))}),e._uU(4,"Carica Foto"),e.qZA()()}}function x(o,i){1&o&&(e.TgZ(0,"p",20),e._uU(1,"Caricamento in corso..."),e.qZA())}function y(o,i){1&o&&(e.TgZ(0,"p",21),e._uU(1,"Caricamento completato"),e.qZA())}function C(o,i){if(1&o&&(e.TgZ(0,"p",22),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij("Caricamento fallito ",t.errorMessage,"")}}function T(o,i){if(1&o&&(e.ynx(0),e._UZ(1,"img",14),e.BQk()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("src",t.url,e.LSH)}}function F(o,i){if(1&o&&(e.ynx(0),e._UZ(1,"video",15),e.BQk()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("src",t.url,e.LSH)}}function w(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",12),e.NdJ("click",function(){const s=e.CHM(t).$implicit,S=e.oxw();return e.KtG(S.openModal(s))}),e.TgZ(1,"div",13),e.YNc(2,T,2,1,"ng-container",11),e.YNc(3,F,2,1,"ng-container",11),e.qZA()()}if(2&o){const t=i.$implicit;e.xp6(2),e.Q6J("ngIf","video/mp4"!==t.type),e.xp6(1),e.Q6J("ngIf","video/mp4"===t.type)}}function Z(o,i){if(1&o&&(e.ynx(0),e._UZ(1,"img",16),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("src",t.selectedMedia.url,e.LSH)}}function U(o,i){if(1&o&&(e.ynx(0),e._UZ(1,"video",17,18),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("src",t.selectedMedia.url,e.LSH)}}const b=[{path:"",component:h,children:[{path:"upload",canActivate:[p.a],component:(()=>{class o{constructor(t,n,l){this.eventService=t,this.galleryService=n,this.router=l,this.uploading=!1,this.error=!1,this.errorMessage=""}ngOnInit(){this.galleryService.getGallery(this.eventService.eventCode).subscribe({next:t=>{this.gallery=t}})}resetFile(){}onFileSelected(t){if(this.selectedFile=t.target.files[0],this.selectedFile){const n=new FileReader;n.onload=l=>{this.previewImageSrc=l.target.result},n.readAsDataURL(this.selectedFile)}}uploadPhoto(t){if(t.preventDefault(),this.selectedFile){this.uploading=!0;const n=new FormData;n.append("file",this.selectedFile,this.selectedFile.name),n.append("gallery",this.gallery.id.toString()),n.append("type",this.selectedFile.type),this.galleryService.postFile(n).subscribe({next:l=>{this.file=l,setTimeout(()=>{this.router.navigateByUrl("/gallery/photos").then()},3e3)},error:l=>{if(this.error=!0,console.log(l),l.error.code)switch(l.error.code[0]){case"size":this.errorMessage="file superiore a 10 mega";break;case"participant":this.errorMessage="non sei un partecipante all'evento";break;case"cooldown":this.errorMessage="puoi caricare massimo una foto al minuto"}setTimeout(()=>{this.router.navigateByUrl("").then()},3e3)}})}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.y3),e.Y36(u.j),e.Y36(a.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-upload"]],decls:13,vars:6,consts:[[1,"section","d-flex","align-items-center","justify-content-center","min-vh-100"],[1,"container"],[1,"row"],[1,"col","text-center","mx-auto"],[1,"m-2"],["class","mt-4",4,"ngIf"],["enctype","multipart/form-data"],["class","form-group",4,"ngIf"],["class","d-flex justify-content-center text-center m-2",4,"ngIf"],["class","mt-2",4,"ngIf"],["class","alert alert-success mt-2",4,"ngIf"],["class","alert alert-danger mt-2",4,"ngIf"],[1,"mt-4"],[1,"media-container"],[1,"img-fluid","img-preview",3,"src"],[1,"form-group"],["type","file",1,"form-control",3,"change"],[1,"d-flex","justify-content-center","text-center","m-2"],[1,"btn","btn-danger","mx-2",3,"click"],[1,"btn","btn-secondary",3,"click"],[1,"mt-2"],[1,"alert","alert-success","mt-2"],[1,"alert","alert-danger","mt-2"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),e._uU(5,"Carica foto e video \u{1f608}"),e.qZA(),e.YNc(6,f,3,1,"div",5),e.TgZ(7,"form",6),e.YNc(8,v,2,0,"div",7),e.YNc(9,_,5,0,"div",8),e.YNc(10,x,2,0,"p",9),e.YNc(11,y,2,0,"p",10),e.YNc(12,C,2,1,"p",11),e.qZA()()()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",n.selectedFile&&n.previewImageSrc),e.xp6(2),e.Q6J("ngIf",!n.selectedFile),e.xp6(1),e.Q6J("ngIf",n.selectedFile&&!n.uploading),e.xp6(1),e.Q6J("ngIf",n.uploading&&!n.file),e.xp6(1),e.Q6J("ngIf",n.file),e.xp6(1),e.Q6J("ngIf",n.error))},dependencies:[c.O5],styles:[".img-preview[_ngcontent-%COMP%]{max-height:70vh;max-width:90%}.btn-reset[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;z-index:1}"]}),o})()},{path:"photos",canActivate:[p.a],component:(()=>{class o{constructor(t,n,l){this.eventService=t,this.galleryService=n,this.router=l,this.isModalOpen=!1,this.scrollThreshold=400,this.loading=!1}ngOnInit(){this.galleryService.getFiles(this.eventService.eventCode).subscribe({next:t=>{this.currentPaginatedFiles=t,this.mediaList=t.results,this.loadMoreFiles()}})}onScroll(){console.log("scroll");const t=window.innerHeight;document.documentElement.scrollHeight-(t+window.pageYOffset)<this.scrollThreshold&&!this.loading&&this.loadMoreFiles()}loadMoreFiles(){if(this.currentPaginatedFiles&&this.currentPaginatedFiles.next&&!this.loading){this.loading=!0;const t=this.currentPaginatedFiles.next.split("=").pop();this.galleryService.getFiles(t).subscribe({next:n=>{this.currentPaginatedFiles=n,this.mediaList.push(...n.results),this.loading=!1},error:n=>{console.error("Errore durante il caricamento delle foto:",n),this.loading=!1}})}}openModal(t){this.selectedMedia=t,this.isModalOpen=!0}closeModal(){this.isModalOpen=!1}downloadMedia(t){const n=document.createElement("a");n.href=t.url,n.download=`photo_${t.id}.jpg`,n.click()}shareMedia(t){navigator.share&&navigator.share({title:"Condividi media",text:"Guarda questo media interessante!",url:t.url}).then(()=>console.log("Media condiviso con successo.")).catch(n=>console.log("Errore durante la condivisione del media:",n))}navigateToUpload(){this.router.navigateByUrl("/gallery/upload").then()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.y3),e.Y36(u.j),e.Y36(a.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-photos"]],hostBindings:function(t,n){1&t&&e.NdJ("scroll",function(){return n.onScroll()},!1,e.Jf7)},decls:19,vars:5,consts:[[1,"min-vh-100","d-flex","align-items-center"],[1,"container"],[1,"text-center"],[1,"mt-5","emoji-big"],[1,"d-flex","justify-content-center","m-2"],[1,"btn","btn-secondary",3,"click"],[1,"row","justify-content-start","mb-4"],["class","col-4 p-0",3,"click",4,"ngFor","ngForOf"],[1,"modal",3,"click"],[1,"modal-dialog","modal-dialog-centered","modal-lg"],[1,"modal-content","p-2"],[4,"ngIf"],[1,"col-4","p-0",3,"click"],[1,"square-container"],["alt","Media",1,"square-img",3,"src"],[1,"square-img",3,"src"],["alt","Media",1,"modal-img",3,"src"],["controls","",1,"modal-img",3,"src"],["videoPlayer",""]],template:function(t,n){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"span",3),e._uU(4,"\u{1f4f8}"),e.qZA(),e.TgZ(5,"h2"),e._uU(6,"Galleria"),e.qZA(),e.TgZ(7,"p",2),e._uU(8,"Tutte le foto dell'evento in un unico posto"),e.qZA()(),e.TgZ(9,"div",4)(10,"button",5),e.NdJ("click",function(){return n.navigateToUpload()}),e._uU(11,"Pubblica Foto"),e.qZA()(),e.TgZ(12,"div",6),e.YNc(13,w,4,2,"div",7),e.qZA(),e.TgZ(14,"div",8),e.NdJ("click",function(){return n.closeModal()}),e.TgZ(15,"div",9)(16,"div",10),e.YNc(17,Z,2,1,"ng-container",11),e.YNc(18,U,3,1,"ng-container",11),e.qZA()()()()()),2&t&&(e.xp6(13),e.Q6J("ngForOf",n.mediaList),e.xp6(1),e.ekj("open",n.isModalOpen),e.xp6(3),e.Q6J("ngIf",n.selectedMedia&&"video/mp4"!==n.selectedMedia.type),e.xp6(1),e.Q6J("ngIf",n.selectedMedia&&"video/mp4"===n.selectedMedia.type))},dependencies:[c.sg,c.O5],styles:[".square-container[_ngcontent-%COMP%]{position:relative;padding-top:100%;overflow:hidden;border-top:1px solid black;border-left:1px solid black}.square-img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;cursor:pointer;border-radius:0}.modal[_ngcontent-%COMP%]{display:none;position:fixed;inset:0;overflow:hidden;outline:0;width:-moz-fit-content;width:fit-content;margin:auto}.modal.open[_ngcontent-%COMP%]{display:block}.modal-dialog[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:-moz-fit-content;width:fit-content}.modal-content[_ngcontent-%COMP%]{max-width:100%;height:auto;width:-moz-fit-content;width:fit-content}.modal-img[_ngcontent-%COMP%]{max-width:100%;max-height:calc(100vh - 100px);object-fit:contain}.modal-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]}),o})()}]}];let J=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.Bz.forChild(b),a.Bz]}),o})(),k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,g.O,J]}),o})()}}]);