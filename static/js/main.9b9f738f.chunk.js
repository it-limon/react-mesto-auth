(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),o=n.n(r),s=(n(15),n(9)),i=n(2),l=n.p+"static/media/header-logo.bbe2a6ea.svg",u=n(0);var d=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("img",{className:"header__logo",src:l,alt:"\u041c\u0435\u0441\u0442\u043e: \u0420\u043e\u0441\u0441\u0438\u044f"})})},b=Object(a.createContext)();var j=function(e){var t=e.data,n=t.name,c=t.link,r=t.likes,o=t.owner,s=Object(a.useContext)(b),i=o._id===s._id,l=r.some((function(e){return e._id===s._id}));return Object(u.jsxs)("li",{className:"cards__item",children:[Object(u.jsx)("img",{className:"cards__image",src:c,alt:n,onClick:function(){return e.onCardClick({name:n,link:c})}}),Object(u.jsx)("h2",{className:"cards__title",children:n}),Object(u.jsxs)("div",{className:"cards__like-container",children:[Object(u.jsx)("button",{className:"cards__button-like ".concat(l?" cards__button-like_active":""),type:"button",onClick:function(){return e.onCardLike(e.data)},"aria-label":"\u041e\u0446\u0435\u043d\u0438\u0442\u044c"}),Object(u.jsx)("span",{className:"cards__like-counter",children:r.length})]}),i&&Object(u.jsx)("button",{className:"button cards__button-delete",type:"button",onClick:function(){return e.onCardDelete(e.data)},"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})};var h=function(e){var t=e.cards,n=e.onEditProfile,c=e.onAddCard,r=e.onEditAvatar,o=e.onCardClick,s=e.onCardLike,i=e.onCardDelete,l=Object(a.useContext)(b);return Object(u.jsxs)("main",{className:"content",children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsx)("button",{className:"profile__button-edit-avatar",type:"button","aria-label":"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onClick:r,children:Object(u.jsx)("img",{className:"profile__avatar",src:null===l||void 0===l?void 0:l.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"})}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsxs)("div",{className:"profile__container",children:[Object(u.jsx)("h1",{className:"profile__name",children:null===l||void 0===l?void 0:l.name}),Object(u.jsx)("button",{className:"button profile__button-edit-profile",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:n})]}),Object(u.jsx)("p",{className:"profile__job",children:null===l||void 0===l?void 0:l.about})]}),Object(u.jsx)("button",{className:"button profile__button-add-card",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:c})]}),Object(u.jsx)("section",{className:"cards",children:Object(u.jsx)("ul",{className:"cards__list",children:t.map((function(e){return Object(u.jsx)(j,{data:e,onCardClick:o,onCardLike:s,onCardDelete:i},e._id)}))})})]})};var m=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})};var f=function(e){var t=e.card,n=e.onClose;return Object(u.jsx)("section",{className:"popup popup-image popup_theme_black ".concat(t?"popup_opened":""),children:Object(u.jsxs)("div",{className:"popup__container",children:[Object(u.jsxs)("figure",{className:"popup__image-container",children:[Object(u.jsx)("img",{className:"popup__image",src:null===t||void 0===t?void 0:t.link,alt:null===t||void 0===t?void 0:t.name}),Object(u.jsx)("figcaption",{className:"popup__image-caption",children:null===t||void 0===t?void 0:t.name})]}),Object(u.jsx)("button",{className:"button popup__button-close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:n})]})})};var p=function(e){var t=e.isOpen,n=e.onClose,a=e.onSubmit,c=e.name,r=e.title,o=e.btnSubmitCaption,s=e.children;return Object(u.jsx)("section",{className:"popup popup-".concat(c," ").concat(t?"popup_opened":""),children:Object(u.jsxs)("div",{className:"popup__container",children:[Object(u.jsxs)("form",{className:"form form-".concat(c),name:"form-".concat(c),onSubmit:a,children:[Object(u.jsx)("h2",{className:"form__heading",children:r}),s,Object(u.jsx)("button",{className:"form__button-submit",type:"submit",children:o})]}),Object(u.jsx)("button",{className:"button popup__button-close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:n})]})})},_=n(10),O=Object(a.forwardRef)((function(e,t){var n=e.name;return Object(u.jsxs)("label",{className:"form__field",children:[Object(u.jsx)("input",Object(_.a)({className:"form__input",id:n,ref:t},e)),Object(u.jsx)("span",{className:"form__input-error ".concat(n,"-error")})]})}));O.defaultProps={required:!0};var v=O;var x=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,r=Object(a.useState)(""),o=Object(i.a)(r,2),s=o[0],l=o[1],d=Object(a.useState)(""),j=Object(i.a)(d,2),h=j[0],m=j[1],f=Object(a.useContext)(b);return Object(a.useEffect)((function(){l(f.name),m(f.about)}),[f]),Object(u.jsxs)(p,{isOpen:t,onClose:function(){l(f.name),m(f.about),n()},onSubmit:function(e){e.preventDefault(),c({name:s,about:h})},name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",btnSubmitCaption:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(u.jsx)(v,{type:"text",name:"profile-name",value:s||"",onChange:function(e){return l(e.target.value)},placeholder:"\u0418\u043c\u044f",minLength:2,maxLength:40}),Object(u.jsx)(v,{type:"text",name:"profile-job",value:h||"",onChange:function(e){return m(e.target.value)},placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:2,maxLength:200})]})};var C=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,r=Object(a.useRef)();return Object(a.useEffect)((function(){t||(r.current.value="")}),[t]),Object(u.jsx)(p,{isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c(r.current.value)},name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",btnSubmitCaption:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:Object(u.jsx)(v,{type:"url",name:"avatar-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",ref:r})})};var g=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddCard,r=Object(a.useState)(""),o=Object(i.a)(r,2),s=o[0],l=o[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),j=b[0],h=b[1];return Object(a.useEffect)((function(){t||(l(""),h(""))}),[t]),Object(u.jsxs)(p,{isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:s,link:j})},name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",btnSubmitCaption:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(u.jsx)(v,{type:"text",name:"card-name",value:s||"",onChange:function(e){return l(e.target.value)},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:2,maxLength:30}),Object(u.jsx)(v,{type:"url",name:"card-link",value:j||"",onChange:function(e){return h(e.target.value)},placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"})]})},k=n(7),N=n(8),y=new(function(){function e(t){Object(k.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(N.a)(e,[{key:"_promiseHandler",value:function(e){return e.then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return this._promiseHandler(fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}))}},{key:"setUserInfo",value:function(e,t){return this._promiseHandler(fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}))}},{key:"setUserAvatar",value:function(e){return this._promiseHandler(fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}))}},{key:"getInitialCards",value:function(){return this._promiseHandler(fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}))}},{key:"addCard",value:function(e,t){return this._promiseHandler(fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}))}},{key:"deleteCard",value:function(e){return this._promiseHandler(fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}))}},{key:"changeCardLikeStatus",value:function(e,t){return t?this._promiseHandler(fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers})):this._promiseHandler(fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-26",headers:{authorization:"367be849-b9d8-44df-8a90-129746dbd13f","Content-Type":"application/json"}});var S=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),o=Object(i.a)(r,2),l=o[0],j=o[1],p=Object(a.useState)(!1),_=Object(i.a)(p,2),O=_[0],v=_[1],k=Object(a.useState)(!1),N=Object(i.a)(k,2),S=N[0],U=N[1],E=Object(a.useState)(!1),L=Object(i.a)(E,2),A=L[0],H=L[1],D=Object(a.useState)(null),P=Object(i.a)(D,2),I=P[0],T=P[1],w=function(){v(!1),U(!1),H(!1),T(null)};return Object(a.useEffect)((function(){var e=[y.getUserInfo(),y.getInitialCards()];Promise.all(e).then((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];c(n),j(a)})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsxs)(b.Provider,{value:n,children:[Object(u.jsx)(d,{}),Object(u.jsx)(h,{cards:l,onEditProfile:function(){return v(!0)},onAddCard:function(){return U(!0)},onEditAvatar:function(){return H(!0)},onCardClick:T,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));y.changeCardLikeStatus(e._id,t).then((function(t){j((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){y.deleteCard(e._id).then((function(){j(l.filter((function(t){return t._id!==e._id})))})).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(m,{}),Object(u.jsx)(x,{isOpen:O,onClose:w,onUpdateUser:function(e){var t=e.name,n=e.about;y.setUserInfo(t,n).then((function(e){c(e),w()})).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(g,{isOpen:S,onClose:w,onAddCard:function(e){var t=e.name,n=e.link;y.addCard(t,n).then((function(e){j([e].concat(Object(s.a)(l))),w()})).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(C,{isOpen:A,onClose:w,onUpdateAvatar:function(e){y.setUserAvatar(e).then((function(e){c(e),w()})).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(f,{card:I,onClose:w})]})};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9b9f738f.chunk.js.map