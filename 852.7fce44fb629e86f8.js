"use strict";(self.webpackChunkThe_Circus=self.webpackChunkThe_Circus||[]).push([[852],{1852:(k,d,c)=>{c.r(d),c.d(d,{GalleryModule:()=>b});var r=c(6895),u=c(8954),s=c(9833),p=c(4530),e=c(8256);let g=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-gallery"]],decls:1,vars:0,template:function(t,n){1&t&&e._UZ(0,"router-outlet")},dependencies:[s.lC],encapsulation:2}),o})();var m=c(4624);function f(o,i){if(1&o&&(e.TgZ(0,"div",11)(1,"div",12),e._UZ(2,"img",13),e.qZA()()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("src",t.previewImageSrc,e.LSH)}}function h(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",14)(1,"input",15),e.NdJ("change",function(l){e.CHM(t);const a=e.oxw();return e.KtG(a.onFileSelected(l))}),e.qZA()()}}function _(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",16)(1,"button",17),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.resetFile())}),e._uU(2,"Remove"),e.qZA(),e.TgZ(3,"button",18),e.NdJ("click",function(l){e.CHM(t);const a=e.oxw();return e.KtG(a.uploadPhoto(l))}),e._uU(4,"Carica Foto"),e.qZA()()}}function v(o,i){1&o&&(e.TgZ(0,"p",19),e._uU(1,"Caricamento in corso..."),e.qZA())}function x(o,i){1&o&&(e.TgZ(0,"p",20),e._uU(1,"Caricamento completato"),e.qZA())}function C(o,i){if(1&o&&(e.ynx(0),e._UZ(1,"img",14),e.BQk()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("src",t.url,e.LSH)}}function M(o,i){if(1&o&&(e.ynx(0),e._UZ(1,"video",15),e.BQk()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("src",t.url,e.LSH)}}function T(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",12),e.NdJ("click",function(){const a=e.CHM(t).$implicit,J=e.oxw();return e.KtG(J.openModal(a))}),e.TgZ(1,"div",13),e.YNc(2,C,2,1,"ng-container",11),e.YNc(3,M,2,1,"ng-container",11),e.qZA()()}if(2&o){const t=i.$implicit;e.xp6(2),e.Q6J("ngIf","video/mp4"!==t.type),e.xp6(1),e.Q6J("ngIf","video/mp4"===t.type)}}function F(o,i){if(1&o&&(e.ynx(0),e._UZ(1,"img",16),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("src",t.selectedMedia.url,e.LSH)}}function w(o,i){if(1&o&&(e.ynx(0),e._UZ(1,"video",17,18),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("src",t.selectedMedia.url,e.LSH)}}const P=[{path:"",component:g,children:[{path:"upload",canActivate:[p.a],component:(()=>{class o{constructor(t,n){this.galleryService=t,this.router=n,this.uploading=!1}ngOnInit(){this.galleryService.getGallery().subscribe({next:t=>{this.gallery=t}})}resetFile(){}onFileSelected(t){if(this.selectedFile=t.target.files[0],this.selectedFile){const n=new FileReader;n.onload=l=>{this.previewImageSrc=l.target.result},n.readAsDataURL(this.selectedFile)}}uploadPhoto(t){if(t.preventDefault(),this.selectedFile){this.uploading=!0;const n=new FormData;n.append("file",this.selectedFile,this.selectedFile.name),n.append("gallery",this.gallery.id.toString()),n.append("type",this.selectedFile.type),this.galleryService.postFile(n).subscribe({next:l=>{this.file=l,setTimeout(()=>{this.router.navigateByUrl("/gallery/photos").then()},3e3)}})}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.j),e.Y36(s.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-upload"]],decls:12,vars:5,consts:[[1,"section","d-flex","align-items-center","justify-content-center","min-vh-100"],[1,"container"],[1,"row"],[1,"col","text-center","mx-auto"],[1,"m-2"],["class","mt-4",4,"ngIf"],["enctype","multipart/form-data"],["class","form-group",4,"ngIf"],["class","d-flex justify-content-center text-center m-2",4,"ngIf"],["class","mt-2",4,"ngIf"],["class","text-success mt-2",4,"ngIf"],[1,"mt-4"],[1,"media-container"],[1,"img-fluid","img-preview",3,"src"],[1,"form-group"],["type","file",1,"form-control",3,"change"],[1,"d-flex","justify-content-center","text-center","m-2"],[1,"btn","btn-danger","mx-2",3,"click"],[1,"btn","btn-secondary",3,"click"],[1,"mt-2"],[1,"text-success","mt-2"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),e._uU(5,"Carica foto e video"),e.qZA(),e.YNc(6,f,3,1,"div",5),e.TgZ(7,"form",6),e.YNc(8,h,2,0,"div",7),e.YNc(9,_,5,0,"div",8),e.YNc(10,v,2,0,"p",9),e.YNc(11,x,2,0,"p",10),e.qZA()()()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",n.selectedFile&&n.previewImageSrc),e.xp6(2),e.Q6J("ngIf",!n.selectedFile),e.xp6(1),e.Q6J("ngIf",n.selectedFile&&!n.uploading),e.xp6(1),e.Q6J("ngIf",n.uploading&&!n.file),e.xp6(1),e.Q6J("ngIf",n.file))},dependencies:[r.O5],styles:[".img-preview[_ngcontent-%COMP%]{max-height:70vh;max-width:90%}.btn-reset[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;z-index:1}"]}),o})()},{path:"photos",canActivate:[p.a],component:(()=>{class o{constructor(t,n,l){this.galleryService=t,this.router=n,this.elementRef=l,this.isModalOpen=!1,this.scrollThreshold=400,this.loading=!1}ngOnInit(){this.galleryService.getFiles().subscribe({next:t=>{this.currentPaginatedFiles=t,this.mediaList=t.results,this.loadMoreFiles()}})}onScroll(){console.log("scroll");const t=window.innerHeight;document.documentElement.scrollHeight-(t+window.pageYOffset)<this.scrollThreshold&&!this.loading&&this.loadMoreFiles()}loadMoreFiles(){if(this.currentPaginatedFiles&&this.currentPaginatedFiles.next&&!this.loading){this.loading=!0;const t=this.currentPaginatedFiles.next.split("=").pop();this.galleryService.getFiles(t).subscribe({next:n=>{this.currentPaginatedFiles=n,this.mediaList.push(...n.results),this.loading=!1},error:n=>{console.error("Errore durante il caricamento delle foto:",n),this.loading=!1}})}}openModal(t){this.selectedMedia=t,this.isModalOpen=!0}closeModal(){this.isModalOpen=!1}downloadMedia(t){const n=document.createElement("a");n.href=t.url,n.download=`photo_${t.id}.jpg`,n.click()}shareMedia(t){navigator.share&&navigator.share({title:"Condividi media",text:"Guarda questo media interessante!",url:t.url}).then(()=>console.log("Media condiviso con successo.")).catch(n=>console.log("Errore durante la condivisione del media:",n))}navigateToUpload(){this.router.navigateByUrl("/gallery/upload").then()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.j),e.Y36(s.F0),e.Y36(e.SBq))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-photos"]],hostBindings:function(t,n){1&t&&e.NdJ("scroll",function(){return n.onScroll()},!1,e.Jf7)},decls:17,vars:5,consts:[[1,"min-vh-100","d-flex","align-items-center"],[1,"container"],[1,"mt-5"],[1,"text-center"],[1,"d-flex","justify-content-center","m-2"],[1,"btn","btn-secondary",3,"click"],[1,"row","justify-content-start","mb-4"],["class","col-4 p-0",3,"click",4,"ngFor","ngForOf"],[1,"modal",3,"click"],[1,"modal-dialog","modal-dialog-centered","modal-lg"],[1,"modal-content","p-2"],[4,"ngIf"],[1,"col-4","p-0",3,"click"],[1,"square-container"],["alt","Media",1,"square-img",3,"src"],[1,"square-img",3,"src"],["alt","Media",1,"modal-img",3,"src"],["controls","",1,"modal-img",3,"src"],["videoPlayer",""]],template:function(t,n){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div")(3,"h2",2),e._uU(4,"Galleria"),e.qZA(),e.TgZ(5,"p",3),e._uU(6,"Tutte le foto dell'evento in un unico posto"),e.qZA()(),e.TgZ(7,"div",4)(8,"button",5),e.NdJ("click",function(){return n.navigateToUpload()}),e._uU(9,"Pubblica Foto"),e.qZA()(),e.TgZ(10,"div",6),e.YNc(11,T,4,2,"div",7),e.qZA(),e.TgZ(12,"div",8),e.NdJ("click",function(){return n.closeModal()}),e.TgZ(13,"div",9)(14,"div",10),e.YNc(15,F,2,1,"ng-container",11),e.YNc(16,w,3,1,"ng-container",11),e.qZA()()()()()),2&t&&(e.xp6(11),e.Q6J("ngForOf",n.mediaList),e.xp6(1),e.ekj("open",n.isModalOpen),e.xp6(3),e.Q6J("ngIf",n.selectedMedia&&"video/mp4"!==n.selectedMedia.type),e.xp6(1),e.Q6J("ngIf",n.selectedMedia&&"video/mp4"===n.selectedMedia.type))},dependencies:[r.sg,r.O5],styles:[".square-container[_ngcontent-%COMP%]{position:relative;padding-top:100%;overflow:hidden;border-top:1px solid black;border-left:1px solid black}.square-img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;cursor:pointer;border-radius:0}.modal[_ngcontent-%COMP%]{display:none;position:fixed;inset:0;overflow:hidden;outline:0;width:-moz-fit-content;width:fit-content;margin:auto}.modal.open[_ngcontent-%COMP%]{display:block}.modal-dialog[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:-moz-fit-content;width:fit-content}.modal-content[_ngcontent-%COMP%]{max-width:100%;height:auto;width:-moz-fit-content;width:fit-content}.modal-img[_ngcontent-%COMP%]{max-width:100%;max-height:calc(100vh - 100px);object-fit:contain}.modal-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]}),o})()}]}];let U=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[s.Bz.forChild(P),s.Bz]}),o})(),b=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.ez,u.O,U]}),o})()}}]);