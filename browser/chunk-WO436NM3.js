import{B as g,F as G,G as et,d as Ct,h as yt,i as St,j as It,k as zt,l as vt,m as Tt,o as Y,s as bt,x as xt,y as tt}from"./chunk-W4VVICR2.js";import{$ as st,Ea as _,Fa as F,Ga as ct,Ia as j,Ja as dt,Ka as Q,Ma as S,Na as d,Ra as P,T as nt,Ta as w,Ua as v,Va as T,Wa as b,Xa as x,Ya as E,Za as D,_ as O,_a as mt,a as A,ab as pt,b as K,ba as ot,bb as f,ca as lt,cb as _t,da as rt,db as gt,ea as N,fa as k,fb as H,mb as $,nb as ut,ob as R,pa as at,pb as W,qb as ft,ub as Z,vb as X,wb as wt,xb as q,ya as ht,yb as M}from"./chunk-QNNUJN72.js";var Lt=["element"],Ot=["content"];function Ft(n,r){n&1&&D(0)}var it=(n,r)=>({$implicit:n,options:r});function Pt(n,r){if(n&1&&(x(0),w(1,Ft,1,0,"ng-container",7),E()),n&2){let t=f(2);_(),d("ngTemplateOutlet",t.contentTemplate)("ngTemplateOutletContext",W(2,it,t.loadedItems,t.getContentOptions()))}}function Dt(n,r){n&1&&D(0)}function Rt(n,r){if(n&1&&(x(0),w(1,Dt,1,0,"ng-container",7),E()),n&2){let t=r.$implicit,e=r.index,i=f(3);_(),d("ngTemplateOutlet",i.itemTemplate)("ngTemplateOutletContext",W(2,it,t,i.getOptions(e)))}}var Ht=n=>({"p-scroller-loading":n});function Wt(n,r){if(n&1&&(v(0,"div",8,9),w(2,Rt,2,5,"ng-container",10),T()),n&2){let t=f(2);d("ngClass",R(5,Ht,t.d_loading))("ngStyle",t.contentStyle),S("data-pc-section","content"),_(2),d("ngForOf",t.loadedItems)("ngForTrackBy",t._trackBy||t.index)}}function Mt(n,r){if(n&1&&b(0,"div",11),n&2){let t=f(2);d("ngStyle",t.spacerStyle),S("data-pc-section","spacer")}}function Bt(n,r){n&1&&D(0)}var At=n=>({numCols:n}),Vt=n=>({options:n});function Nt(n,r){if(n&1&&(x(0),w(1,Bt,1,0,"ng-container",7),E()),n&2){let t=r.index,e=f(4);_(),d("ngTemplateOutlet",e.loaderTemplate)("ngTemplateOutletContext",R(4,Vt,e.getLoaderOptions(t,e.both&&R(2,At,e._numItemsInViewport.cols))))}}function kt(n,r){if(n&1&&(x(0),w(1,Nt,2,6,"ng-container",14),E()),n&2){let t=f(3);_(),d("ngForOf",t.loaderArr)}}function jt(n,r){n&1&&D(0)}var Qt=()=>({styleClass:"p-scroller-loading-icon"});function $t(n,r){if(n&1&&(x(0),w(1,jt,1,0,"ng-container",7),E()),n&2){let t=f(4);_(),d("ngTemplateOutlet",t.loaderIconTemplate)("ngTemplateOutletContext",R(3,Vt,ut(2,Qt)))}}function Zt(n,r){n&1&&b(0,"SpinnerIcon",16),n&2&&(d("styleClass","p-scroller-loading-icon pi-spin"),S("data-pc-section","loadingIcon"))}function qt(n,r){if(n&1&&w(0,$t,2,5,"ng-container",0)(1,Zt,1,2,"ng-template",null,15,M),n&2){let t=H(2),e=f(3);d("ngIf",e.loaderIconTemplate)("ngIfElse",t)}}var Gt=n=>({"p-component-overlay":n});function Ut(n,r){if(n&1&&(v(0,"div",12),w(1,kt,2,1,"ng-container",0)(2,qt,3,2,"ng-template",null,13,M),T()),n&2){let t=H(3),e=f(2);d("ngClass",R(4,Gt,!e.loaderTemplate)),S("data-pc-section","loader"),_(),d("ngIf",e.loaderTemplate)("ngIfElse",t)}}var Jt=(n,r,t)=>({"p-scroller":!0,"p-scroller-inline":n,"p-both-scroll":r,"p-horizontal-scroll":t});function Kt(n,r){if(n&1){let t=mt();x(0),v(1,"div",2,3),pt("scroll",function(i){lt(t);let s=f();return rt(s.onContainerScroll(i))}),w(3,Pt,2,5,"ng-container",0)(4,Wt,3,7,"ng-template",null,4,M)(6,Mt,1,2,"div",5)(7,Ut,4,6,"div",6),T(),E()}if(n&2){let t=H(5),e=f();_(),P(e._styleClass),d("ngStyle",e._style)("ngClass",ft(12,Jt,e.inline,e.both,e.horizontal)),S("id",e._id)("tabindex",e.tabindex)("data-pc-name","scroller")("data-pc-section","root"),_(2),d("ngIf",e.contentTemplate)("ngIfElse",t),_(3),d("ngIf",e._showSpacer),_(),d("ngIf",!e.loaderDisabled&&e._showLoader&&e.d_loading)}}function Xt(n,r){n&1&&D(0)}var Yt=(n,r)=>({rows:n,columns:r});function te(n,r){if(n&1&&(x(0),w(1,Xt,1,0,"ng-container",7),E()),n&2){let t=f(2);_(),d("ngTemplateOutlet",t.contentTemplate)("ngTemplateOutletContext",W(5,it,t.items,W(2,Yt,t._items,t.loadedColumns)))}}function ee(n,r){if(n&1&&(gt(0),w(1,te,2,8,"ng-container",17)),n&2){let t=f();_(),d("ngIf",t.contentTemplate)}}var ie=["*"],we=(()=>{class n{document;platformId;renderer;cd;zone;get id(){return this._id}set id(t){this._id=t}get style(){return this._style}set style(t){this._style=t}get styleClass(){return this._styleClass}set styleClass(t){this._styleClass=t}get tabindex(){return this._tabindex}set tabindex(t){this._tabindex=t}get items(){return this._items}set items(t){this._items=t}get itemSize(){return this._itemSize}set itemSize(t){this._itemSize=t}get scrollHeight(){return this._scrollHeight}set scrollHeight(t){this._scrollHeight=t}get scrollWidth(){return this._scrollWidth}set scrollWidth(t){this._scrollWidth=t}get orientation(){return this._orientation}set orientation(t){this._orientation=t}get step(){return this._step}set step(t){this._step=t}get delay(){return this._delay}set delay(t){this._delay=t}get resizeDelay(){return this._resizeDelay}set resizeDelay(t){this._resizeDelay=t}get appendOnly(){return this._appendOnly}set appendOnly(t){this._appendOnly=t}get inline(){return this._inline}set inline(t){this._inline=t}get lazy(){return this._lazy}set lazy(t){this._lazy=t}get disabled(){return this._disabled}set disabled(t){this._disabled=t}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(t){this._loaderDisabled=t}get columns(){return this._columns}set columns(t){this._columns=t}get showSpacer(){return this._showSpacer}set showSpacer(t){this._showSpacer=t}get showLoader(){return this._showLoader}set showLoader(t){this._showLoader=t}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(t){this._numToleratedItems=t}get loading(){return this._loading}set loading(t){this._loading=t}get autoSize(){return this._autoSize}set autoSize(t){this._autoSize=t}get trackBy(){return this._trackBy}set trackBy(t){this._trackBy=t}get options(){return this._options}set options(t){this._options=t,t&&typeof t=="object"&&Object.entries(t).forEach(([e,i])=>this[`_${e}`]!==i&&(this[`_${e}`]=i))}onLazyLoad=new j;onScroll=new j;onScrollIndexChange=new j;elementViewChild;contentViewChild;templates;_id;_style;_styleClass;_tabindex=0;_items;_itemSize=0;_scrollHeight;_scrollWidth;_orientation="vertical";_step=0;_delay=0;_resizeDelay=10;_appendOnly=!1;_inline=!1;_lazy=!1;_disabled=!1;_loaderDisabled=!1;_columns;_showSpacer=!0;_showLoader=!1;_numToleratedItems;_loading;_autoSize=!1;_trackBy;_options;d_loading=!1;d_numToleratedItems;contentEl;contentTemplate;itemTemplate;loaderTemplate;loaderIconTemplate;first=0;last=0;page=0;isRangeChanged=!1;numItemsInViewport=0;lastScrollPos=0;lazyLoadState={};loaderArr=[];spacerStyle={};contentStyle={};scrollTimeout;resizeTimeout;initialized=!1;windowResizeListener;defaultWidth;defaultHeight;defaultContentWidth;defaultContentHeight;get vertical(){return this._orientation==="vertical"}get horizontal(){return this._orientation==="horizontal"}get both(){return this._orientation==="both"}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(t=>this._columns?t:t.slice(this._appendOnly?0:this.first.cols,this.last.cols)):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}constructor(t,e,i,s,o){this.document=t,this.platformId=e,this.renderer=i,this.cd=s,this.zone=o}ngOnInit(){this.setInitialState()}ngOnChanges(t){let e=!1;if(t.loading){let{previousValue:i,currentValue:s}=t.loading;this.lazy&&i!==s&&s!==this.d_loading&&(this.d_loading=s,e=!0)}if(t.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),t.numToleratedItems){let{previousValue:i,currentValue:s}=t.numToleratedItems;i!==s&&s!==this.d_numToleratedItems&&(this.d_numToleratedItems=s)}if(t.options){let{previousValue:i,currentValue:s}=t.options;this.lazy&&i?.loading!==s?.loading&&s?.loading!==this.d_loading&&(this.d_loading=s.loading,e=!0),i?.numToleratedItems!==s?.numToleratedItems&&s?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=s.numToleratedItems)}this.initialized&&!e&&(t.items?.previousValue?.length!==t.items?.currentValue?.length||t.itemSize||t.scrollHeight||t.scrollWidth)&&(this.init(),this.calculateAutoSize())}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;case"item":this.itemTemplate=t.template;break;case"loader":this.loaderTemplate=t.template;break;case"loadericon":this.loaderIconTemplate=t.template;break;default:this.itemTemplate=t.template;break}})}ngAfterViewInit(){Promise.resolve().then(()=>{this.viewInit()})}ngAfterViewChecked(){this.initialized||this.viewInit()}ngOnDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1}viewInit(){Y(this.platformId)&&g.isVisible(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=g.getWidth(this.elementViewChild?.nativeElement),this.defaultHeight=g.getHeight(this.elementViewChild?.nativeElement),this.defaultContentWidth=g.getWidth(this.contentEl),this.defaultContentHeight=g.getHeight(this.contentEl),this.initialized=!0)}init(){this._disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize(),this.bindResizeListener(),this.cd.detectChanges())}setContentEl(t){this.contentEl=t||this.contentViewChild?.nativeElement||g.findSingle(this.elementViewChild?.nativeElement,".p-scroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,this.d_loading=this._loading||!1,this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=[],this.spacerStyle={},this.contentStyle={}}getElementRef(){return this.elementViewChild}getPageByFirst(t){return Math.floor(((t??this.first)+this.d_numToleratedItems*4)/(this._step||1))}isPageChanged(t){return this._step?this.page!==this.getPageByFirst(t??this.first):!0}scrollTo(t){this.lastScrollPos=this.both?{top:0,left:0}:0,this.elementViewChild?.nativeElement?.scrollTo(t)}scrollToIndex(t,e="auto"){let{numToleratedItems:i}=this.calculateNumItems(),s=this.getContentPosition(),o=(a=0,C)=>a<=C?0:a,l=(a,C,y)=>a*C+y,p=(a=0,C=0)=>this.scrollTo({left:a,top:C,behavior:e}),c=0;if(this.both)c={rows:o(t[0],i[0]),cols:o(t[1],i[1])},p(l(c.cols,this._itemSize[1],s.left),l(c.rows,this._itemSize[0],s.top));else if(c=o(t,i),this.horizontal&&p(l(c,this._itemSize,s.left),0),this.vertical){let a=this.elementViewChild?.nativeElement.scrollLeft;p(a,l(c,this._itemSize,s.top))}this.isRangeChanged=this.first!==c,this.first=c}scrollInView(t,e,i="auto"){if(e){let{first:s,viewport:o}=this.getRenderedRange(),l=(a=0,C=0)=>this.scrollTo({left:a,top:C,behavior:i}),p=e==="to-start",c=e==="to-end";if(p){if(this.both)o.first.rows-s.rows>t[0]?l(o.first.cols*this._itemSize[1],(o.first.rows-1)*this._itemSize[0]):o.first.cols-s.cols>t[1]&&l((o.first.cols-1)*this._itemSize[1],o.first.rows*this._itemSize[0]);else if(o.first-s>t){let a=(o.first-1)*this._itemSize;this.horizontal?l(a,0):l(0,a)}}else if(c){if(this.both)o.last.rows-s.rows<=t[0]+1?l(o.first.cols*this._itemSize[1],(o.first.rows+1)*this._itemSize[0]):o.last.cols-s.cols<=t[1]+1&&l((o.first.cols+1)*this._itemSize[1],o.first.rows*this._itemSize[0]);else if(o.last-s<=t+1){let a=(o.first+1)*this._itemSize;this.horizontal?l(a,0):l(0,a)}}}else this.scrollToIndex(t,i)}getRenderedRange(){let t=(s,o)=>Math.floor(s/(o||s)),e=this.first,i=0;if(this.elementViewChild?.nativeElement){let{scrollTop:s,scrollLeft:o}=this.elementViewChild.nativeElement;if(this.both)e={rows:t(s,this._itemSize[0]),cols:t(o,this._itemSize[1])},i={rows:e.rows+this.numItemsInViewport.rows,cols:e.cols+this.numItemsInViewport.cols};else{let l=this.horizontal?o:s;e=t(l,this._itemSize),i=e+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:e,last:i}}}calculateNumItems(){let t=this.getContentPosition(),e=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-t.left:0)||0,i=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-t.top:0)||0,s=(c,a)=>Math.ceil(c/(a||c)),o=c=>Math.ceil(c/2),l=this.both?{rows:s(i,this._itemSize[0]),cols:s(e,this._itemSize[1])}:s(this.horizontal?e:i,this._itemSize),p=this.d_numToleratedItems||(this.both?[o(l.rows),o(l.cols)]:o(l));return{numItemsInViewport:l,numToleratedItems:p}}calculateOptions(){let{numItemsInViewport:t,numToleratedItems:e}=this.calculateNumItems(),i=(l,p,c,a=!1)=>this.getLast(l+p+(l<c?2:3)*c,a),s=this.first,o=this.both?{rows:i(this.first.rows,t.rows,e[0]),cols:i(this.first.cols,t.cols,e[1],!0)}:i(this.first,t,e);this.last=o,this.numItemsInViewport=t,this.d_numToleratedItems=e,this.showLoader&&(this.loaderArr=this.both?Array.from({length:t.rows}).map(()=>Array.from({length:t.cols})):Array.from({length:t})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:s.cols}:0:s,last:Math.min(this._step?this._step:this.last,this.items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto",this.contentEl.style.position="relative",this.elementViewChild.nativeElement.style.contain="none";let[t,e]=[g.getWidth(this.contentEl),g.getHeight(this.contentEl)];t!==this.defaultContentWidth&&(this.elementViewChild.nativeElement.style.width=""),e!==this.defaultContentHeight&&(this.elementViewChild.nativeElement.style.height="");let[i,s]=[g.getWidth(this.elementViewChild.nativeElement),g.getHeight(this.elementViewChild.nativeElement)];(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=i<this.defaultWidth?i+"px":this._scrollWidth||this.defaultWidth+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=s<this.defaultHeight?s+"px":this._scrollHeight||this.defaultHeight+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth="",this.contentEl.style.position="",this.elementViewChild.nativeElement.style.contain=""}})}getLast(t=0,e=!1){return this._items?Math.min(e?(this._columns||this._items[0]).length:this._items.length,t):0}getContentPosition(){if(this.contentEl){let t=getComputedStyle(this.contentEl),e=parseFloat(t.paddingLeft)+Math.max(parseFloat(t.left)||0,0),i=parseFloat(t.paddingRight)+Math.max(parseFloat(t.right)||0,0),s=parseFloat(t.paddingTop)+Math.max(parseFloat(t.top)||0,0),o=parseFloat(t.paddingBottom)+Math.max(parseFloat(t.bottom)||0,0);return{left:e,right:i,top:s,bottom:o,x:e+i,y:s+o}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){let t=this.elementViewChild.nativeElement.parentElement.parentElement,e=this._scrollWidth||`${this.elementViewChild.nativeElement.offsetWidth||t.offsetWidth}px`,i=this._scrollHeight||`${this.elementViewChild.nativeElement.offsetHeight||t.offsetHeight}px`,s=(o,l)=>this.elementViewChild.nativeElement.style[o]=l;this.both||this.horizontal?(s("height",i),s("width",e)):s("height",i)}}setSpacerSize(){if(this._items){let t=this.getContentPosition(),e=(i,s,o,l=0)=>this.spacerStyle=K(A({},this.spacerStyle),{[`${i}`]:(s||[]).length*o+l+"px"});this.both?(e("height",this._items,this._itemSize[0],t.y),e("width",this._columns||this._items[1],this._itemSize[1],t.x)):this.horizontal?e("width",this._columns||this._items,this._itemSize,t.x):e("height",this._items,this._itemSize,t.y)}}setContentPosition(t){if(this.contentEl&&!this._appendOnly){let e=t?t.first:this.first,i=(o,l)=>o*l,s=(o=0,l=0)=>this.contentStyle=K(A({},this.contentStyle),{transform:`translate3d(${o}px, ${l}px, 0)`});if(this.both)s(i(e.cols,this._itemSize[1]),i(e.rows,this._itemSize[0]));else{let o=i(e,this._itemSize);this.horizontal?s(o,0):s(0,o)}}}onScrollPositionChange(t){let e=t.target,i=this.getContentPosition(),s=(h,m)=>h?h>m?h-m:h:0,o=(h,m)=>Math.floor(h/(m||h)),l=(h,m,u,I,z,V)=>h<=z?z:V?u-I-z:m+z-1,p=(h,m,u,I,z,V,B)=>h<=V?0:Math.max(0,B?h<m?u:h-V:h>m?u:h-2*V),c=(h,m,u,I,z,V=!1)=>{let B=m+I+2*z;return h>=z&&(B+=z+1),this.getLast(B,V)},a=s(e.scrollTop,i.top),C=s(e.scrollLeft,i.left),y=this.both?{rows:0,cols:0}:0,L=this.last,U=!1,J=this.lastScrollPos;if(this.both){let h=this.lastScrollPos.top<=a,m=this.lastScrollPos.left<=C;if(!this._appendOnly||this._appendOnly&&(h||m)){let u={rows:o(a,this._itemSize[0]),cols:o(C,this._itemSize[1])},I={rows:l(u.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],h),cols:l(u.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],m)};y={rows:p(u.rows,I.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],h),cols:p(u.cols,I.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],m)},L={rows:c(u.rows,y.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:c(u.cols,y.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},U=y.rows!==this.first.rows||L.rows!==this.last.rows||y.cols!==this.first.cols||L.cols!==this.last.cols||this.isRangeChanged,J={top:a,left:C}}}else{let h=this.horizontal?C:a,m=this.lastScrollPos<=h;if(!this._appendOnly||this._appendOnly&&m){let u=o(h,this._itemSize),I=l(u,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m);y=p(u,I,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m),L=c(u,y,this.last,this.numItemsInViewport,this.d_numToleratedItems),U=y!==this.first||L!==this.last||this.isRangeChanged,J=h}}return{first:y,last:L,isRangeChanged:U,scrollPos:J}}onScrollChange(t){let{first:e,last:i,isRangeChanged:s,scrollPos:o}=this.onScrollPositionChange(t);if(s){let l={first:e,last:i};if(this.setContentPosition(l),this.first=e,this.last=i,this.lastScrollPos=o,this.handleEvents("onScrollIndexChange",l),this._lazy&&this.isPageChanged(e)){let p={first:this._step?Math.min(this.getPageByFirst(e)*this._step,this.items.length-this._step):e,last:Math.min(this._step?(this.getPageByFirst(e)+1)*this._step:i,this.items.length)};(this.lazyLoadState.first!==p.first||this.lazyLoadState.last!==p.last)&&this.handleEvents("onLazyLoad",p),this.lazyLoadState=p}}}onContainerScroll(t){if(this.handleEvents("onScroll",{originalEvent:t}),this._delay&&this.isPageChanged()){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){let{isRangeChanged:e}=this.onScrollPositionChange(t);(e||(this._step?this.isPageChanged():!1))&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(t),this.d_loading&&this.showLoader&&(!this._lazy||this._loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst(),this.cd.detectChanges())},this._delay)}else!this.d_loading&&this.onScrollChange(t)}bindResizeListener(){Y(this.platformId)&&(this.windowResizeListener||this.zone.runOutsideAngular(()=>{let t=this.document.defaultView,e=g.isTouchDevice()?"orientationchange":"resize";this.windowResizeListener=this.renderer.listen(t,e,this.onWindowResize.bind(this))}))}unbindResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(g.isVisible(this.elementViewChild?.nativeElement)){let[t,e]=[g.getWidth(this.elementViewChild?.nativeElement),g.getHeight(this.elementViewChild?.nativeElement)],[i,s]=[t!==this.defaultWidth,e!==this.defaultHeight];(this.both?i||s:this.horizontal?i:this.vertical?s:!1)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=t,this.defaultHeight=e,this.defaultContentWidth=g.getWidth(this.contentEl),this.defaultContentHeight=g.getHeight(this.contentEl),this.init()})}},this._resizeDelay)}handleEvents(t,e){return this.options&&this.options[t]?this.options[t](e):this[t].emit(e)}getContentOptions(){return{contentStyleClass:`p-scroller-content ${this.d_loading?"p-scroller-loading":""}`,items:this.loadedItems,getItemOptions:t=>this.getOptions(t),loading:this.d_loading,getLoaderOptions:(t,e)=>this.getLoaderOptions(t,e),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both}}getOptions(t){let e=(this._items||[]).length,i=this.both?this.first.rows+t:this.first+t;return{index:i,count:e,first:i===0,last:i===e-1,even:i%2===0,odd:i%2!==0}}getLoaderOptions(t,e){let i=this.loaderArr.length;return A({index:t,count:i,first:t===0,last:t===i-1,even:t%2===0,odd:t%2!==0},e)}static \u0275fac=function(e){return new(e||n)(F(Ct),F(at),F(ht),F(ct),F(dt))};static \u0275cmp=O({type:n,selectors:[["p-scroller"]],contentQueries:function(e,i,s){if(e&1&&wt(s,xt,4),e&2){let o;Z(o=q())&&(i.templates=o)}},viewQuery:function(e,i){if(e&1&&(X(Lt,5),X(Ot,5)),e&2){let s;Z(s=q())&&(i.elementViewChild=s.first),Z(s=q())&&(i.contentViewChild=s.first)}},hostAttrs:[1,"p-scroller-viewport","p-element"],inputs:{id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},features:[ot],ngContentSelectors:ie,decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["disabledContainer",""],[3,"ngStyle","ngClass","scroll"],["element",""],["buildInContent",""],["class","p-scroller-spacer",3,"ngStyle",4,"ngIf"],["class","p-scroller-loader",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-scroller-content",3,"ngClass","ngStyle"],["content",""],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-scroller-spacer",3,"ngStyle"],[1,"p-scroller-loader",3,"ngClass"],["buildInLoader",""],[4,"ngFor","ngForOf"],["buildInLoaderIcon",""],[3,"styleClass"],[4,"ngIf"]],template:function(e,i){if(e&1&&(_t(),w(0,Kt,8,16,"ng-container",0)(1,ee,2,1,"ng-template",null,1,M)),e&2){let s=H(2);d("ngIf",!i._disabled)("ngIfElse",s)}},dependencies:()=>[yt,St,It,vt,zt,et],styles:[`@layer primeng{p-scroller{flex:1;outline:0 none}.p-scroller{position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;outline:0 none}.p-scroller-content{position:absolute;top:0;left:0;min-height:100%;min-width:100%;will-change:transform}.p-scroller-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0;pointer-events:none}.p-scroller-loader{position:sticky;top:0;left:0;width:100%;height:100%}.p-scroller-loader.p-component-overlay{display:flex;align-items:center;justify-content:center}.p-scroller-loading-icon{scale:2}.p-scroller-inline .p-scroller-content{position:static}}
`],encapsulation:2})}return n})(),Ce=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=st({type:n});static \u0275inj=nt({imports:[Tt,tt,et,tt]})}return n})();var ze=(()=>{class n extends G{static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(n)))(i||n)}})();static \u0275cmp=O({type:n,selectors:[["ChevronDownIcon"]],standalone:!0,features:[Q,$],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(e,i){e&1&&(N(),v(0,"svg",0),b(1,"path",1),T()),e&2&&(P(i.getClassNames()),S("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return n})();var xe=(()=>{class n extends G{pathId;ngOnInit(){this.pathId="url(#"+bt()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=k(n)))(i||n)}})();static \u0275cmp=O({type:n,selectors:[["SearchIcon"]],standalone:!0,features:[Q,$],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(e,i){e&1&&(N(),v(0,"svg",0)(1,"g"),b(2,"path",1),T(),v(3,"defs")(4,"clipPath",2),b(5,"rect",3),T()()()),e&2&&(P(i.getClassNames()),S("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),_(),S("clip-path",i.pathId),_(3),d("id",i.pathId))},encapsulation:2})}return n})();export{we as a,Ce as b,ze as c,xe as d};