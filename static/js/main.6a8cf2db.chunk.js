(this["webpackJsonpmovie-list-app"]=this["webpackJsonpmovie-list-app"]||[]).push([[0],{40:function(e,t,a){e.exports=a(68)},45:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),i=a.n(l),o=(a(45),a(17)),c=a(2),u=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"Movie Library"),r.a.createElement("div",{className:"header__buttons"},r.a.createElement(o.b,{className:"header__buttons__button",to:"/"},"Search Movie"),r.a.createElement(o.b,{className:"header__buttons__button",to:"/addMovie"},"Add Movie"),r.a.createElement(o.b,{className:"header__buttons__button",to:"/library"},"Library")))},m=a(4),s=a(5),d=a(7),h=a(6),p=a(3),b=a(37),v=a.n(b),E=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){(0,e.props.searchMovie)(t.target.value)},e.handleSubmit=function(t){var a=e.props,n=a.text,r=a.fetchMovies,l=a.setLoading,i=a.searchMovie;t.preventDefault(),r(n),l(),i("")},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"dashboard"},r.a.createElement("h2",null,"Find movie"),r.a.createElement("div",{className:"dashboard__inputForm"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"title",placeholder:"Enter movie title",value:this.props.text,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Search"))))}}]),a}(n.Component),y=Object(p.b)((function(e){return{text:e.movies.text}}),{searchMovie:function(e){return function(t){t({type:"SEARCH_MOVIE",payload:e})}},fetchMovies:function(e){return function(t){v.a.get("https://www.omdbapi.com/?apikey=99a773aa&t=".concat(e)).then((function(e){return t({type:"FETCH_MOVIES",payload:e.data})})).catch((function(e){return console.log(e)}))}},setLoading:function(){return{type:"LOADING"}}})(E),f=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("h2",null,"Loading..."))},g=function(e){return function(t){t({type:"ADD_MOVIE",payload:e})}},O=function(e){return function(t){t({type:"DELETE_MOVIE",payload:e})}},C=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(){var t=e.props.movies;e.props.addMovie(t),alert("Movie is added to the library")},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.movies;return r.a.createElement("div",{className:"movieCard"},r.a.createElement("h2",null,e.Title),r.a.createElement("div",{className:"movieCard--poster"},r.a.createElement("img",{src:e.Poster,alt:"Movie Poster"})),r.a.createElement("p",null,r.a.createElement("span",null,"Year:")," ",e.Year),r.a.createElement("p",null,r.a.createElement("span",null,"Director:")," ",e.Director),r.a.createElement("p",null,r.a.createElement("span",null,"Runtime:")," ",e.Runtime),r.a.createElement("p",null,r.a.createElement("span",null,"Actors:")," ",e.Actors),r.a.createElement("p",null,r.a.createElement("span",null,"Plot:")," ",e.Plot),r.a.createElement("div",{className:"movieCard--addButton"},r.a.createElement("button",{onClick:this.handleSubmit},"Add to library")))}}]),a}(n.Component),j=Object(p.b)((function(e){return{movies:e.movies.movies}}),{addMovie:g})(C),M=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e;return e="True"===this.props.movies.Response?r.a.createElement(j,null):null,r.a.createElement("div",{className:"movieBox"},e)}}]),a}(n.Component),x=Object(p.b)((function(e){return{movies:e.movies.movies}}))(M),A=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.loading;return r.a.createElement("div",{className:"dashboard"},r.a.createElement(y,null),e?r.a.createElement(f,null):r.a.createElement(x,null))}}]),a}(n.Component),_=Object(p.b)((function(e){return{loading:e.movies.loading}}))(A),D=a(16),N=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){var a=e.props.addForm,n=t.target,r=n.name,l=n.value;a(Object(D.a)({},r,l))},e.handleSubmitForm=function(t){t.preventDefault();var a=e.props,n=a.addMovie,r=a.addForm,l=e.props.form;n(l),r(l={Title:"",Year:"",Director:"",Runtime:"",Actors:"",Plot:""}),alert("Your movie is added to the library.")},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.Title,a=e.Year,n=e.Director,l=e.Runtime,i=e.Actors,o=e.Plot;return r.a.createElement("div",{className:"addMovie"},r.a.createElement("h2",null,"Add your movie"),r.a.createElement("form",{onSubmit:this.handleSubmitForm},r.a.createElement("label",null,r.a.createElement("p",null,"Title"),r.a.createElement("input",{type:"text",name:"Title",value:t,onChange:this.handleChange,required:!0,maxLength:"30"})),r.a.createElement("label",null,r.a.createElement("p",null,"Year"),r.a.createElement("input",{type:"text",name:"Year",value:a,onChange:this.handleChange,required:!0,pattern:"[0-9]{4}"})),r.a.createElement("label",null,r.a.createElement("p",null,"Director"),r.a.createElement("input",{type:"text",name:"Director",value:n,onChange:this.handleChange,required:!0,maxLength:"20"})),r.a.createElement("label",null,r.a.createElement("p",null,"Plot"),r.a.createElement("input",{type:"text",name:"Plot",value:o,onChange:this.handleChange,required:!0,maxLength:"250"})),r.a.createElement("p",null,"Runtime"),r.a.createElement("input",{type:"text",name:"Runtime",value:l,onChange:this.handleChange,maxLength:"8"}),r.a.createElement("label",null,r.a.createElement("p",null,"Actors"),r.a.createElement("input",{type:"text",name:"Actors",value:i,onChange:this.handleChange,maxLength:"60"})),r.a.createElement("label",{className:"addMovie--button"},r.a.createElement("button",{type:"submit"},"Submit"))))}}]),a}(n.Component),S=Object(p.b)((function(e){return{form:e.form}}),{addMovie:g,addForm:function(e){return function(t){t({type:"ADD_USERMOVIE",payload:e})}}})(N),T=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(m.a)(this,a),(n=t.call(this,e)).handleChangeTextArea=function(e){n.setState(Object(D.a)({},e.target.name,e.target.value))},n.handleSubmitTextArea=function(e){var t=n.props,a=t.addMovie,r=t.deleteMovie,l=t.keyId,i=t.handleCloseEdit;e.preventDefault(),a(n.state),r(l),i()},n.handleCloseEdit=function(){(0,n.props.handleCloseEdit)()};var r=n.props,l=r.library,i=r.keyId;return n.state={Poster:l[i].Poster,Title:l[i].Title,Year:l[i].Year,Director:l[i].Director,Runtime:l[i].Runtime,Actors:l[i].Actors,Plot:l[i].Plot},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.edit,t=this.state,a=t.Title,n=t.Year,l=t.Director,i=t.Runtime,o=t.Actors,c=t.Plot;return e?r.a.createElement("div",{className:"editMovie"},r.a.createElement("h2",null,"EditMovie"),r.a.createElement("form",{className:"editMovie__textInputs",onSubmit:this.handleSubmitTextArea},r.a.createElement("label",{htmlFor:"title"},"Edit title"),r.a.createElement("textarea",{id:"Title",name:"Title",value:a,onChange:this.handleChangeTextArea,maxLength:"30"}),r.a.createElement("label",{htmlFor:"year"},"Edit year"),r.a.createElement("textarea",{id:"Year",name:"Year",value:n,onChange:this.handleChangeTextArea,pattern:"[0-9]{4}"}),r.a.createElement("label",{htmlFor:"director"},"Edit director"),r.a.createElement("textarea",{id:"Director",name:"Director",value:l,onChange:this.handleChangeTextArea,maxLength:"20"}),r.a.createElement("label",{htmlFor:"runtime"},"Edit runtime"),r.a.createElement("textarea",{id:"Runtime",name:"Runtime",value:i,onChange:this.handleChangeTextArea,maxLength:"8"}),r.a.createElement("label",{htmlFor:"actors"},"Edit actors"),r.a.createElement("textarea",{id:"Actors",name:"Actors",value:o,onChange:this.handleChangeTextArea,maxLength:"60"}),r.a.createElement("label",{htmlFor:"plot"},"Edit plot"),r.a.createElement("textarea",{id:"Plot",name:"Plot",value:c,onChange:this.handleChangeTextArea}),r.a.createElement("div",{className:"editMovie__buttons"},r.a.createElement("button",{type:"submit"},"Submit"),r.a.createElement("button",{onClick:this.handleCloseEdit},"Close")))):null}}]),a}(n.Component),k=Object(p.b)((function(e){return{library:e.library.library}}),{addMovie:g,deleteMovie:O})(T),I=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={edit:!1},e.handleEdit=function(){e.setState({edit:!0})},e.handleCloseEdit=function(){e.setState({edit:!1})},e.handleDelete=function(){var t=e.props;(0,t.deleteMovie)(t.keyId)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.library,a=e.keyId,n=this.state.edit;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"libraryCard"},r.a.createElement("div",{className:"libraryCard__poster"},r.a.createElement("img",{src:t.Poster,alt:"Movie Poster"})),r.a.createElement("div",{className:"libraryCard__details"},r.a.createElement("h2",null,t.Title),r.a.createElement("p",null,r.a.createElement("span",null,"Year:"),t.Year),r.a.createElement("p",null,r.a.createElement("span",null,"Director:"),t.Director),r.a.createElement("p",null,r.a.createElement("span",null,"Runtime:"),t.Runtime),r.a.createElement("p",null,r.a.createElement("span",null,"Actors:"),t.Actors)),r.a.createElement("div",{className:"libraryCard__plot"},r.a.createElement("p",null,r.a.createElement("span",null,"Plot:"),t.Plot)),r.a.createElement("div",{className:"libraryCard__buttons"},r.a.createElement("button",{onClick:this.handleEdit},"Edit"),r.a.createElement("button",{onClick:this.handleDelete},"Delete"))),r.a.createElement("div",{className:"editSection"},n?r.a.createElement(k,{keyId:a,edit:n,handleCloseEdit:this.handleCloseEdit}):null))}}]),a}(n.Component),P=Object(p.b)(null,{deleteMovie:O})(I),R=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.library;return 0===e.length?r.a.createElement("h2",{className:"libraryWarning"},"No movie in library"):e.map((function(e,t){return r.a.createElement("div",{className:"library"},r.a.createElement(P,{library:e,keyId:t}))}))}}]),a}(n.Component),w=Object(p.b)((function(e){return{library:e.library.library}}))(R),L=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(u,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:_}),r.a.createElement(c.a,{path:"/addMovie",component:S}),r.a.createElement(c.a,{path:"/library",component:w}),r.a.createElement(c.a,{path:"/editMovie",component:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=a(14),Y=a(21),V=a(8),q={title1:"",library:[]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MOVIE":return Object(V.a)(Object(V.a)({},e),{},{library:[].concat(Object(Y.a)(e.library),[t.payload])});case"DELETE_MOVIE":var a=t.payload;return Object(V.a)(Object(V.a)({},e),{},{library:[].concat(Object(Y.a)(e.library.slice(0,a)),Object(Y.a)(e.library.slice(a+1)))});default:return e}},H={text:"",movies:[],loading:!1},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_MOVIE":return Object(V.a)(Object(V.a)({},e),{},{text:t.payload,loading:!1});case"FETCH_MOVIES":return Object(V.a)(Object(V.a)({},e),{},{movies:t.payload,loading:!1});case"LOADING":return Object(V.a)(Object(V.a)({},e),{},{loading:!0});default:return e}},W={Title:"",Year:"",Director:"",Runtime:"",Actors:"",Plot:""},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USERMOVIE":return Object(V.a)(Object(V.a)({},e),t.payload);default:return e}},U=Object(F.combineReducers)({library:B,movies:J,form:G}),$=a(38),z=a(39),K=[$.a],Q=Object(F.createStore)(U,function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),Object(z.composeWithDevTools)(F.applyMiddleware.apply(void 0,K)));Q.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){alert(a)}}({library:Q.getState().library})})),i.a.render(r.a.createElement(p.a,{store:Q},r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.6a8cf2db.chunk.js.map