(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{49:function(e,t,a){e.exports=a.p+"static/media/spinner.ab497855.gif"},80:function(e,t,a){e.exports=a(95)},85:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(45),o=a.n(c),l=(a(85),a(4)),i=a(12),u=a(10),s=a(72),m=a(105),d=a(107),p=a(104),f=a(71),E=a(99);function b(e,t,a){return new Promise((function(n,r){var c,o,l,i=window.indexedDB.open("shop-shop",1);i.onupgradeneeded=function(e){var t=i.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},i.onerror=function(e){console.log("There was an error")},i.onsuccess=function(r){switch(c=i.result,o=c.transaction(e,"readwrite"),l=o.objectStore(e),c.onerror=function(e){console.log("error",e)},t){case"put":l.put(a),n(a);break;case"get":var u=l.getAll();u.onsuccess=function(){n(u.result)};break;case"delete":l.delete(a._id);break;default:console.log("No valid method")}o.oncomplete=function(){c.close()}}}))}var h=a(13);var g,v,y,O,j,w=function(e){var t=e.image,a=e.name,n=e._id,c=e.price,o=e.quantity,u=Object(h.c)((function(e){return e})),s=Object(h.b)(),m=u.cart;return r.a.createElement("div",{className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(n)},r.a.createElement("img",{alt:a,src:"/images/".concat(t)}),r.a.createElement("p",null,a)),r.a.createElement("div",null,r.a.createElement("div",null,o," ",function(e,t){return 1===t?e:e+"s"}("item",o)," in stock"),r.a.createElement("span",null,"$",c)),r.a.createElement("button",{onClick:function(){var t=m.find((function(e){return e._id===n}));t?(s({type:"UPDATE_CART_QUANTITY",_id:n,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),b("cart","put",Object(l.a)(Object(l.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(s({type:"ADD_TO_CART",product:Object(l.a)(Object(l.a)({},e),{},{purchaseQuantity:1})}),b("cart","put",Object(l.a)(Object(l.a)({},e),{},{purchaseQuantity:1})))}},"Add to cart"))},_=a(29),k=a(106),N=Object(k.a)(g||(g=Object(_.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),T=(Object(k.a)(v||(v=Object(_.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(k.a)(y||(y=Object(_.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),x=Object(k.a)(O||(O=Object(_.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),C=Object(k.a)(j||(j=Object(_.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),S=a(49),A=a.n(S);var D=function(){var e=t.currentCategory,t=Object(h.c)((function(e){return e})),a=Object(h.b)(),c=Object(E.a)(N),o=c.loading,l=c.data;return Object(n.useEffect)((function(){l?(a({type:"UPDATE_PRODUCTS",products:l.products}),l.products.forEach((function(e){b("products","put",e)}))):o||b("products","get").then((function(e){a({type:"UPDATE_PRODUCTS",products:e})}))}),[l,o,a]),r.a.createElement("div",{className:"my-2"},r.a.createElement("h2",null,"Our Products:"),t.products.length?r.a.createElement("div",{className:"flex-row"},(e?t.products.filter((function(t){return t.category._id===e})):t.products).map((function(e){return r.a.createElement(w,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):r.a.createElement("h3",null,"You haven't added any products yet!"),o?r.a.createElement("img",{src:A.a,alt:"loading"}):null)};var P=function(){var e=Object(h.c)((function(e){return e})),t=Object(h.b)(),a=e.categories,c=Object(E.a)(T),o=c.loading,l=c.data;return Object(n.useEffect)((function(){l?(t({type:"UPDATE_CATEGORIES",categories:l.categories}),l.categories.forEach((function(e){b("categories","put",e)}))):o||b("categories","get").then((function(e){t({type:"UPDATE_CATEGORIES",categories:e})}))}),[l,o,t]),r.a.createElement("div",null,r.a.createElement("h2",null,"Choose a Category:"),a.map((function(e){return r.a.createElement("button",{key:e._id,onClick:function(){var a;a=e._id,t({type:"UPDATE_CURRENT_CATEGORY",currentCategory:a})}},e.name)})))},R=a(21),I=a.n(R),U=a(34),$=a(33),Q=a(15),F=function(e){var t=e.item,a=(Object(h.c)((function(e){return e})),Object(h.b)());return r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/".concat(t.image),alt:""})),r.a.createElement("div",null,r.a.createElement("div",null,t.name,", $",t.price),r.a.createElement("div",null,r.a.createElement("span",null,"Qty:"),r.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(a({type:"REMOVE_FROM_CART",_id:t._id}),b("cart","delete",Object(l.a)({},t))):(a({type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(n)}),b("cart","put",Object(l.a)(Object(l.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),r.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){a({type:"REMOVE_FROM_CART",_id:e._id}),b("cart","delete",Object(l.a)({},e))}(t)}},"\ud83d\uddd1\ufe0f"))))},L=a(67),q=a(68),M=a(58),W=a.n(M),Y=new(function(){function e(){Object(L.a)(this,e)}return Object(q.a)(e,[{key:"getProfile",value:function(){return W()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return W()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),G=(a(94),a(69)),B=a(100),H=Object(G.a)("pk_test_TYooMQauvdEDq54NiTphI7jx"),V=function(){var e=Object(B.a)(C),t=Object(Q.a)(e,2),a=t[0],c=t[1].data,o=Object(h.c)((function(e){return e})),l=Object(h.b)();function i(){l({type:"TOGGLE_CART"})}return Object(n.useEffect)((function(){c&&H.then((function(e){e.redirectToCheckout({sessionId:c.checkout.session})}))}),[c]),Object(n.useEffect)((function(){function e(){return(e=Object($.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("cart","get");case 2:t=e.sent,l({type:"ADD_MULTIPLE_TO_CART",products:Object(U.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.cart.length||function(){e.apply(this,arguments)}()}),[o.cart.length,l]),o.cartOpen?r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"close",onClick:i},"[close]"),r.a.createElement("h2",null,"Shopping Cart"),o.cart.length?r.a.createElement("div",null,o.cart.map((function(e){return r.a.createElement(F,{key:e._id,item:e})})),r.a.createElement("div",{className:"flex-row space-between"},r.a.createElement("strong",null,"Total: $",function(){var e=0;return o.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()),Y.loggedIn()?r.a.createElement("button",{onClick:function(){var e=[];o.cart.forEach((function(t){for(var a=0;a<t.purchaseQuantity;a++)e.push(t._id)})),a({variables:{products:e}})}},"Checkout"):r.a.createElement("span",null,"(log in to check out)"))):r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"shocked"},"\ud83d\ude31"),"You haven't added anything to your cart yet!")):r.a.createElement("div",{className:"cart-closed",onClick:i},r.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uded2"))},J=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(P,null),r.a.createElement(D,null),r.a.createElement(V,null))};a(74);var z=Object(n.createContext)();z.Provider;var K=function(){var e=Object(n.useContext)(z),t=Object(Q.a)(e,2),a=t[0],c=t[1],o=Object(u.f)().id,s=Object(n.useState)({}),m=Object(Q.a)(s,2),d=m[0],p=m[1],f=Object(E.a)(N),h=f.loading,g=f.data,v=a.products,y=a.cart;return Object(n.useEffect)((function(){v.length?p(v.find((function(e){return e._id===o}))):g?(c({type:"UPDATE_PRODUCTS",products:g.products}),g.products.forEach((function(e){b("products","put",e)}))):h||b("products","get").then((function(e){c({type:"UPDATE_PRODUCTS",products:e})}))}),[v,g,h,c,o]),r.a.createElement(r.a.Fragment,null,d?r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),r.a.createElement("h2",null,d.name),r.a.createElement("p",null,d.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:"),"$",d.price," ",r.a.createElement("button",{onClick:function(){var e=y.find((function(e){return e._id===o}));e?(c({type:"UPDATE_CART_QUANTITY",_id:o,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),b("cart","put",Object(l.a)(Object(l.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(c({type:"ADD_TO_CART",product:Object(l.a)(Object(l.a)({},d),{},{purchaseQuantity:1})}),b("cart","put",Object(l.a)(Object(l.a)({},d),{},{purchaseQuantity:1})))}},"Add to Cart"),r.a.createElement("button",{disabled:!y.find((function(e){return e._id===d._id})),onClick:function(){c({type:"REMOVE_FROM_CART",_id:d._id}),b("cart","delete",Object(l.a)({},d))}},"Remove from Cart")),r.a.createElement("img",{src:"/images/".concat(d.image),alt:d.name})):null,h?r.a.createElement("img",{src:A.a,alt:"loading"}):null,r.a.createElement(V,null))};var X,Z,ee,te=function(e){var t=e.children;return r.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},ae=function(){return r.a.createElement("div",null,r.a.createElement(te,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},ne=a(38),re=a(109),ce=Object(k.a)(X||(X=Object(_.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),oe=Object(k.a)(Z||(Z=Object(_.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),le=Object(k.a)(ee||(ee=Object(_.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var ie=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(Q.a)(t,2),c=a[0],o=a[1],u=Object(re.a)(ce),s=Object(Q.a)(u,2),m=s[0],d=s[1].error,p=function(){var e=Object($.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m({variables:{email:c.email,password:c.password}});case 4:a=e.sent,n=a.data.login.token,Y.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.target,a=t.name,n=t.value;o(Object(l.a)(Object(l.a)({},c),{},Object(ne.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:p},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:f})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:f})),d?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var ue=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(Q.a)(t,2),c=a[0],o=a[1],u=Object(re.a)(le),s=Object(Q.a)(u,1)[0],m=function(){var e=Object($.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:a=e.sent,n=a.data.addUser.token,Y.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,a=t.name,n=t.value;o(Object(l.a)(Object(l.a)({},c),{},Object(ne.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:m},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:d})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})),r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var se=function(){return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83d\udecd\ufe0f"),"-Shop-Shop")),r.a.createElement("nav",null,Y.loggedIn()?r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/orderHistory"},"Order History")),r.a.createElement("li",{className:"mx-1"},r.a.createElement("a",{href:"/",onClick:function(){return Y.logout()}},"Logout"))):r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/login"},"Login")))))};var me=function(){var e,t=Object(E.a)(x).data;return t&&(e=t.user),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return r.a.createElement("div",{key:e._id,className:"my-2"},r.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var a=e._id,n=e.image,c=e.name,o=e.price;return r.a.createElement("div",{key:t,className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(a)},r.a.createElement("img",{alt:c,src:"/images/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("span",null,"$",o)))}))))}))):null))};var de=function(){var e=Object(re.a)(oe),t=Object(Q.a)(e,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object($.a)(I.a.mark((function e(){var a,n,r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("cart","get");case 2:if(a=e.sent,!(n=a.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:n}});case 7:r=e.sent,c=r.data,c.addOrder.products.forEach((function(e){b("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),r.a.createElement("div",null,r.a.createElement(te,null,r.a.createElement("h1",null,"Success!"),r.a.createElement("h2",null,"Thank you for your purchase!"),r.a.createElement("h2",null,"You will now be redirected to the homepage")))},pe=a(73),fe=Object(pe.a)({reducer:{}}),Ee=Object(s.a)({uri:"/graphql"}),be=Object(f.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(l.a)(Object(l.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),he=new m.a({link:be.concat(Ee),cache:new d.a});var ge=function(){return r.a.createElement(p.a,{client:he},r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(h.a,{store:fe},r.a.createElement(se,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:J}),r.a.createElement(u.a,{exact:!0,path:"/login",component:ie}),r.a.createElement(u.a,{exact:!0,path:"/signup",component:ue}),r.a.createElement(u.a,{exact:!0,path:"/orderHistory",component:me}),r.a.createElement(u.a,{exact:!0,path:"/products/:id",component:K}),r.a.createElement(u.a,{exact:!0,path:"/success",component:de}),r.a.createElement(u.a,{component:ae}))))))},ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ye(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ve?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ye(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ye(t,e)}))}}()}},[[80,1,2]]]);
//# sourceMappingURL=main.f9d2c924.chunk.js.map