"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[319],{6319:(P,g,a)=>{a.r(g),a.d(g,{UnsubscribeModule:()=>E});var p=a(6814),u=a(9310),e=a(5849),d=a(5219),M=a(9784),m=a(9250),v=a(7213),h=a(4104),l=a(95),b=a(1474),f=a(6098);let S=(()=>{class n{constructor(){this.http=(0,e.f3M)(b.eN),this.base=f.h.animalMovementUrl}unsubscribeAnimalPOST(t,i,o,s){return this.http.post(`${this.base}/register/remove/${i}/user/${o}/cage/${s}`,t)}subscribeAnimalPOST(t,i,o){return this.http.post(`${this.base}/set/animals/${t}/user/${i}/cage/${o}/amount`,null)}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),T=(()=>{class n{constructor(){this.http=(0,e.f3M)(b.eN),this.base=f.h.animalFoodMovementUrl}addAnimalFoodPOST(t,i,o){return this.http.post(`${this.base}/add/${t}/user/${i}/cage/${o}`,null)}removeAnimalFoodPOST(t,i,o){return this.http.post(`${this.base}/remove/${t}/user/${i}/cage/${o}`,null)}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var C=a(707),A=a(5779),_=a(354),Z=a(3866);function x(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",5)(1,"label",6),e._uU(2,"Tipo de movimiento"),e.qZA(),e.TgZ(3,"p-dropdown",7),e.NdJ("ngModelChange",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.typeOfAnimalFoodRegisterSelected=o)}),e.qZA()(),e.TgZ(4,"form",8)(5,"div",5)(6,"label",9),e._uU(7,"Cantidad de concentrado"),e.qZA(),e._UZ(8,"p-inputNumber",10),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("options",t.typeOfAnimalFoodRegister)("ngModel",t.typeOfAnimalFoodRegisterSelected),e.xp6(1),e.Q6J("formGroup",t.AnimalFoodCageMovementForm),e.xp6(4),e.Q6J("minFractionDigits",2)}}function y(n,c){if(1&n&&(e.TgZ(0,"form",8)(1,"div",11)(2,"label",9),e._uU(3,"Cantidad de animales"),e.qZA(),e._UZ(4,"p-inputNumber",12),e.qZA()()),2&n){const t=e.oxw(2);e.Q6J("formGroup",t.addAnimalCageMovementForm)}}function U(n,c){if(1&n&&(e.TgZ(0,"form",13)(1,"div",11)(2,"label",14),e._uU(3,"Peso del animal"),e.qZA(),e._UZ(4,"p-inputNumber",15),e.qZA(),e.TgZ(5,"div",11)(6,"label",16),e._uU(7,"Semanas"),e.qZA(),e._UZ(8,"p-inputNumber",17),e.qZA()()),2&n){const t=e.oxw(2);e.Q6J("formGroup",t.deleteAnimalCageMovementForm),e.xp6(4),e.Q6J("minFractionDigits",2),e.xp6(4),e.Q6J("min",0)}}function F(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",5)(1,"label",6),e._uU(2,"Tipo de movimiento"),e.qZA(),e.TgZ(3,"p-dropdown",7),e.NdJ("ngModelChange",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.typeofAnimalRegisterSelected=o)}),e.qZA()(),e.YNc(4,y,5,1,"form",8)(5,U,9,3)}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("options",t.typeOfAnimalRegister)("ngModel",t.typeofAnimalRegisterSelected),e.xp6(1),e.um2(4,0==t.typeofAnimalRegisterSelected?4:t.typeofAnimalRegisterSelected>0?5:-1)}}let I=(()=>{class n{constructor(){this.close=new e.vpe,this.eventInCage=new e.vpe,this.invalidMovement=new e.vpe,this.formBuilder=(0,e.f3M)(l.qu),this.animalMovementService=(0,e.f3M)(S),this.animalFoodMovementService=(0,e.f3M)(T),this.actionSelect=0,this.items=[{label:"Concentrado",command:()=>{this.actionSelect=0}},{label:"Animales",command:()=>{this.actionSelect=1}}],this.typeOfAnimalRegister=[{label:"Ingreso",value:0},{label:"Salida",value:1},{label:"Muerte",value:2}],this.typeOfAnimalFoodRegister=[{label:"Uso diario",value:0},{label:"Ingreso",value:1}]}ngOnInit(){this.typeofAnimalRegisterSelected=0,this.typeOfAnimalFoodRegisterSelected=0,this.deleteAnimalCageMovementForm=this.formBuilder.group({weight:[0],age:[0],type:[0]}),this.addAnimalCageMovementForm=this.formBuilder.group({animals_amount:[0]}),this.AnimalFoodCageMovementForm=this.formBuilder.group({amount:[0]})}registerMovement(){const t=localStorage.getItem("asig");if(0==this.actionSelect){const i=localStorage.getItem("asig"),o=this.typeOfAnimalFoodRegisterSelected,s=this.AnimalFoodCageMovementForm.value.amount;if(0==o){if(s>this.cageSelect.concentrateAsigned.concentrateAmount)return void this.invalidMovement.emit({message:"El concentrado usado es mayor al concentrado disponible"});this.animalFoodMovementService.removeAnimalFoodPOST(parseInt(i),this.cageSelect.id,s).subscribe({next:r=>{this.eventInCage.emit(r)},error:r=>{console.error(r)}})}else 1==o&&this.animalFoodMovementService.addAnimalFoodPOST(parseInt(i),this.cageSelect.id,s).subscribe({next:r=>{this.eventInCage.emit(r)},error:r=>{console.error(r)}})}else if(1==this.actionSelect){const i=this.typeofAnimalRegisterSelected;if(i>0){if(0==this.cageSelect.animalAsigned.animalAmount)return void this.invalidMovement.emit({message:"El corral no tiene animales"});this.animalMovementService.unsubscribeAnimalPOST({weight:this.deleteAnimalCageMovementForm.value.weight,age:this.deleteAnimalCageMovementForm.value.age},parseInt(t),this.cageSelect.id,i).subscribe({next:s=>{this.eventInCage.emit(s)},error:s=>{console.error(s)}})}else{const o=this.addAnimalCageMovementForm.value.animals_amount;this.animalMovementService.subscribeAnimalPOST(parseInt(t),this.cageSelect.id,o).subscribe({next:s=>{this.eventInCage.emit(s)},error:s=>{console.error(s)}})}}}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-unsubscribe-register"]],inputs:{cageSelect:"cageSelect"},outputs:{close:"close",eventInCage:"eventInCage",invalidMovement:"invalidMovement"},decls:8,vars:2,consts:[[1,"col-12"],["styleClass","mt-6",3,"model"],[1,"flex","flex-wrap","gap-2","layout-footer"],["type","submit","pButton","",1,"p-button-info","p-button-text",3,"click"],["pButton","","type","submit","label","Guardar",1,"p-button-success","submit-form-login",3,"click"],[1,"field","md:col-4"],["htmlFor","type"],["id","type",3,"options","ngModel","ngModelChange"],[3,"formGroup"],["htmlFor","amount"],["mode","decimal","id","amount","formControlName","amount","type","number",3,"minFractionDigits"],[1,"field","md:col-3"],["id","amount","formControlName","animals_amount","type","text"],[1,"p-fluid","p-formgrid","grid","field",3,"formGroup"],["htmlFor","weight"],["mode","decimal","id","weight","formControlName","weight","type","text",3,"minFractionDigits"],["htmlFor","age"],["id","age","formControlName","age","type","number",3,"min"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0),e._UZ(1,"p-tabMenu",1),e.YNc(2,x,9,4)(3,F,6,3),e.TgZ(4,"div",2)(5,"button",3),e.NdJ("click",function(){return o.close.emit()}),e._uU(6,"Regresar"),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return o.registerMovement()}),e.qZA()()()),2&i&&(e.xp6(1),e.Q6J("model",o.items),e.xp6(1),e.um2(2,0==o.actionSelect?2:1==o.actionSelect?3:-1))},dependencies:[C.Hq,A.d,l._Y,l.JJ,l.JL,l.On,l.sg,l.u,_.Rn,Z.Lt],encapsulation:2})}return n})();function R(n,c){1&n&&(e.TgZ(0,"tr")(1,"th",12),e._uU(2,"Codigo "),e._UZ(3,"p-sortIcon",13),e.qZA(),e.TgZ(4,"th"),e._uU(5,"Nombre"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Animal"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"# animales"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Concentrado"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"# concentrado"),e.qZA()())}function J(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"tr",14),e.NdJ("click",function(){const s=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.unsubscribeCage(s))}),e.TgZ(1,"td",15),e._uU(2),e.qZA(),e.TgZ(3,"td",16),e._uU(4),e.qZA(),e.TgZ(5,"td",17),e._uU(6),e.qZA(),e.TgZ(7,"td",15),e._uU(8),e.qZA(),e.TgZ(9,"td",17),e._uU(10),e.qZA(),e.TgZ(11,"td",15),e._uU(12),e.ALo(13,"number"),e.qZA()()}if(2&n){const t=c.$implicit;e.xp6(2),e.Oqu(t.code),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.animalAsigned.animalName),e.xp6(2),e.Oqu(t.animalAsigned.animalAmount),e.xp6(2),e.Oqu(t.concentrateAsigned.concentrateName),e.xp6(2),e.Oqu(e.xi3(13,6,t.concentrateAsigned.concentrateAmount,"1.2-2"))}}function N(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"app-unsubscribe-register",18),e.NdJ("invalidMovement",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.invalidMovementInCage(o))})("close",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.closeDialog())})("eventInCage",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.setMessageEvent(o))}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("cageSelect",t.cageSelect)}}const O=()=>({width:"50vw"}),w=()=>({"960px":"75vw"});let $=(()=>{class n{constructor(){this.cageService=(0,e.f3M)(M.Q),this.router=(0,e.f3M)(u.F0),this.messageService=(0,e.f3M)(d.ez),this.cagesList=[],this.unsubscribe=!1,this.cageSelect=null}ngOnInit(){this.getData()}getData(){const t=localStorage.getItem("asig");this.cageService.get(parseInt(t)).subscribe({next:i=>{this.cagesList=i},error:i=>{console.error(i),this.router.navigate(["/login"])}})}unsubscribeCage(t){0!=t.animalAsigned.animalId&&t.active&&0!=t.concentrateAsigned.concentrateId?(this.cageSelect=t,this.unsubscribe=!0):this.messageService.add({key:"error",severity:"error",summary:"Movimiento Prohibido",detail:"Este corral no tiene todas sus caracteristicas para realizar movimientos"})}setMessageEvent(t){this.messageService.add({key:"modify",severity:"success",summary:"Movimiento registrado",detail:t.message})}invalidMovementInCage(t){this.messageService.add({key:"invalid",severity:"warn",summary:"Movimiento Invalido",detail:t.message})}closeDialog(){this.getData(),this.unsubscribe=!1,this.cageSelect=null}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-unsubscribe"]],features:[e._Bn([d.ez])],decls:15,vars:12,consts:[[1,"card"],[1,"col-12","md:col-12"],[1,"grid"],[1,""],["responsiveLayout","scroll","scrollDirection","both","scrollHeight","400px",3,"value","scrollable","paginator","rows"],["pTemplate","header"],["pTemplate","body"],["header","Registro de uso","showEffect","fade",3,"visible","modal","breakpoints","visibleChange"],[3,"cageSelect"],["key","modify"],["key","invalid"],["key","error"],["pSortableColumn","code"],["field","code"],[3,"click"],[2,"width","10%"],[2,"width","26%"],[2,"width","16%"],[3,"cageSelect","invalidMovement","close","eventInCage"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",1)(4,"h2"),e._uU(5,"Registrar salidas de animales"),e.qZA()()()(),e.TgZ(6,"div",3)(7,"p-table",4),e.YNc(8,R,14,0,"ng-template",5)(9,J,14,9,"ng-template",6),e.qZA()(),e.TgZ(10,"p-dialog",7),e.NdJ("visibleChange",function(r){return o.unsubscribe=r}),e.YNc(11,N,1,1,"app-unsubscribe-register",8),e.qZA(),e._UZ(12,"p-toast",9)(13,"p-toast",10)(14,"p-toast",11),e.qZA()),2&i&&(e.xp6(7),e.Q6J("value",o.cagesList)("scrollable",!1)("paginator",!0)("rows",10),e.xp6(3),e.Akn(e.DdM(10,O)),e.Q6J("visible",o.unsubscribe)("modal",!0)("breakpoints",e.DdM(11,w)),e.xp6(1),e.um2(11,o.unsubscribe?11:-1))},dependencies:[m.iA,d.jx,m.lQ,m.fz,v.V,h.FN,I,p.JJ],encapsulation:2})}return n})(),q=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[u.Bz.forChild([{path:"",component:$}]),u.Bz]})}return n})();var Q=a(4480),D=a(1122),G=a(74),B=a(3714);let E=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[p.ez,q,m.U$,v.S,C.hJ,Q.T,A.i,G.ml,l.u5,l.UX,_.L$,B.j,Z.kW,h.EV,D.$9]})}return n})()}}]);