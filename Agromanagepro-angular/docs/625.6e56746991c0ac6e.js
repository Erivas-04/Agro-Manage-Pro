"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[625],{2625:(d,o,i)=>{i.r(o),i.d(o,{HomeModule:()=>m});var r=i(6814),a=i(9310),s=i(5849),c=i(3442);let u=(()=>{class t{ngOnInit(){const n=localStorage.getItem("asig");this.userService.get(n).subscribe({next:e=>{e.is_active&&(this.user=e)}})}constructor(){this.userService=(0,s.f3M)(c.K),this.user={id:0,username:"",firstname:"",lastname:"",tel:"",role:"",observations:"",is_active:!0,changePassword:!0,changePasswordNextSession:!0}}static#t=this.\u0275fac=function(e){return new(e||t)};static#s=this.\u0275cmp=s.Xpm({type:t,selectors:[["app-home"]],decls:5,vars:1,consts:[[1,"grid"],[1,"col-12","md:col-12"],[1,"card","p-fluid"]],template:function(e,h){1&e&&(s.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),s._uU(4),s.qZA()()()()),2&e&&(s.xp6(4),s.hij("Bienvenido ",h.user.firstname,". Ha ingresado a Agro Manage Pro"))},styles:[".long[_ngcontent-%COMP%]{height:100%;margin:0}"]})}return t})(),l=(()=>{class t{static#t=this.\u0275fac=function(e){return new(e||t)};static#s=this.\u0275mod=s.oAB({type:t});static#e=this.\u0275inj=s.cJS({imports:[a.Bz.forChild([{path:"",component:u}]),a.Bz]})}return t})(),m=(()=>{class t{static#t=this.\u0275fac=function(e){return new(e||t)};static#s=this.\u0275mod=s.oAB({type:t});static#e=this.\u0275inj=s.cJS({imports:[r.ez,l]})}return t})()}}]);