(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1G5W":function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var a=e("zx2A");function i(n){return t=>t.lift(new r(n))}class r{constructor(n){this.notifier=n}call(n,t){const e=new s(n),i=Object(a.c)(this.notifier,new a.a(e));return i&&!e.seenValue?(e.add(i),t.subscribe(e)):e}}class s extends a.b{constructor(n){super(n),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}},"6Fix":function(n,t,e){"use strict";e.r(t),e.d(t,"MainModule",(function(){return m}));var a=e("ofXK"),i=e("tyNb");const r=[{name:"Dashboard",link:"/dashboard"},{name:"Calendar",link:"/calendar"},{name:"Hotels",link:"/hotels"},{name:"My events",link:"/my-events"},{name:"Notes",link:"/notes"},{name:"Messages",link:"/messages"},{name:"My account",link:"/my-account"}];var s=e("fXoL"),o=e("2Vo4"),b=e("pLZG");let c=(()=>{class n{constructor(){this._navbarItems=[],this._navbarItemsEvent$=new o.a(null)}setNavbarItems(n){this._navbarItems=n,this._navbarItemsEvent$.next(this._navbarItems)}getNavbarItems(){return this._navbarItemsEvent$.asObservable().pipe(Object(b.a)(n=>null!=n))}getNavbarItemsSync(){return this._navbarItems}clearNavbarItems(){this.setNavbarItems([])}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=s.Db({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var l=e("XNiG"),u=e("1G5W");function d(n,t){if(1&n&&(s.Kb(0,"li",4),s.Kb(1,"a",5),s.ac(2),s.Jb(),s.Jb()),2&n){const n=t.$implicit;s.xb(1),s.Ub("routerLink",n.link),s.xb(1),s.cc(" ",n.name," ")}}let v=(()=>{class n{constructor(n){this._navbarService=n,this._unsubscribe$=new l.a,this.navbarItems=[],this._handleNavbarItemsChange()}ngOnInit(){}_handleNavbarItemsChange(){this._navbarService.getNavbarItems().pipe(Object(u.a)(this._unsubscribe$)).subscribe(n=>{this.navbarItems=n})}ngOnDestroy(){this._unsubscribe$.next(),this._unsubscribe$.complete()}}return n.\u0275fac=function(t){return new(t||n)(s.Hb(c))},n.\u0275cmp=s.Bb({type:n,selectors:[["app-main-navbar"]],decls:4,vars:1,consts:[[1,"navbar"],[1,"navbar-container","main-container"],[1,"navbar-item-list"],["class","navbar-item","routerLinkActive","active-link",4,"ngFor","ngForOf"],["routerLinkActive","active-link",1,"navbar-item"],[3,"routerLink"]],template:function(n,t){1&n&&(s.Kb(0,"nav",0),s.Kb(1,"div",1),s.Kb(2,"ul",2),s.Zb(3,d,3,2,"li",3),s.Jb(),s.Jb(),s.Jb()),2&n&&(s.xb(3),s.Ub("ngForOf",t.navbarItems))},directives:[a.h,i.a,i.b],styles:['.navbar{box-shadow:0 3px 18px rgba(0,0,0,.1607843137254902);opacity:1}.navbar .navbar-container .navbar-item-list{display:flex;justify-content:space-around}.navbar .navbar-container .navbar-item-list .navbar-item{display:flex;position:relative}.navbar .navbar-container .navbar-item-list .navbar-item a{white-space:nowrap;letter-spacing:0;color:#000;padding:147px 10px 17px}.navbar .navbar-container .navbar-item-list .navbar-item:after{transition:all .3s;position:absolute;height:2px;background:red;width:0;visibility:hidden;content:"";bottom:0}.active-link:after{visibility:inherit!important;width:100%!important}'],encapsulation:2}),n})();const h=[{path:"",component:(()=>{class n{constructor(n){this._navbarService=n}ngOnInit(){this._navbarService.setNavbarItems(r)}}return n.\u0275fac=function(t){return new(t||n)(s.Hb(c))},n.\u0275cmp=s.Bb({type:n,selectors:[["app-main"]],decls:6,vars:0,consts:[[1,"pg-container"],[1,"pg-top-content"],[1,"pg-middle-content"],[1,"pg-bottom-content"]],template:function(n,t){1&n&&(s.Kb(0,"div",0),s.Kb(1,"div",1),s.Ib(2,"app-main-navbar"),s.Jb(),s.Kb(3,"div",2),s.Ib(4,"router-outlet"),s.Jb(),s.Ib(5,"div",3),s.Jb())},directives:[v,i.d],styles:[".pg-container .pg-middle-content{margin:0 auto;background:#f6fbf9 0 0 no-repeat padding-box;min-height:calc(100vh - 183px)}"],encapsulation:2}),n})(),children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",loadChildren:()=>e.e(7).then(e.bind(null,"EsO7")).then(n=>n.DashboardModule)},{path:"calendar",loadChildren:()=>e.e(6).then(e.bind(null,"14i5")).then(n=>n.CalendarModule)},{path:"hotels",loadChildren:()=>e.e(8).then(e.bind(null,"z01V")).then(n=>n.HotelsModule)},{path:"my-events",loadChildren:()=>e.e(11).then(e.bind(null,"Mtkg")).then(n=>n.MyEventsModule)},{path:"notes",loadChildren:()=>e.e(12).then(e.bind(null,"lYks")).then(n=>n.NotesModule)},{path:"messages",loadChildren:()=>e.e(9).then(e.bind(null,"Fe6z")).then(n=>n.MessagesModule)},{path:"my-account",loadChildren:()=>e.e(10).then(e.bind(null,"Cpbk")).then(n=>n.MyAccountModule)}]}];let p=(()=>{class n{}return n.\u0275mod=s.Fb({type:n}),n.\u0275inj=s.Eb({factory:function(t){return new(t||n)},imports:[[i.c.forChild(h)],i.c]}),n})(),m=(()=>{class n{}return n.\u0275mod=s.Fb({type:n}),n.\u0275inj=s.Eb({factory:function(t){return new(t||n)},imports:[[a.b,p,i.c]]}),n})()}}]);