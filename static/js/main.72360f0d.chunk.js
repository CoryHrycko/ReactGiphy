(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(37)},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n(2),c=n(4),i=n(3),r=n(5),s=n(0),o=n.n(s),u=n(7),f=n.n(u),m=function(e){var t=e.gif,n=e.onGifSelect;return o.a.createElement("div",{className:"gif-item",onClick:function(){return n(t)}},o.a.createElement("img",{src:t.images.downsized.url,alt:"please enable Javascript"}))},d=function(e){var t=e.gifs.map(function(t){return o.a.createElement(m,{key:t.id,gif:t,onGifSelect:e.onGifSelect})});return o.a.createElement("div",{className:"gif-list"},t)},p=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(c.a)(this,Object(i.a)(t).call(this))).state={term:""},e}return Object(r.a)(t,e),Object(l.a)(t,[{key:"onInputChange",value:function(e){this.setState({term:e}),this.props.onTermChange(e)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search"},o.a.createElement("input",{placeholder:"Search for a Gif in a Giffy!",onChange:function(t){return e.onInputChange(t.target.value)}}))}}]),t}(o.a.Component),h=n(13),g=n.n(h),v=function(e){return e.selectedGif?o.a.createElement(g.a,{isOpen:e.modalIsOpen,onRequestClose:function(){return e.onRequestClose()}},o.a.createElement("div",{className:"gif-modal"},o.a.createElement("img",{src:e.selectedGif.images.original.url,alt:"please enable Javascript"}),o.a.createElement("p",null,o.a.createElement("strong",null,"Source:")," ",o.a.createElement("a",{href:e.selectedGif.source},e.selectedGif.source)),o.a.createElement("p",null,o.a.createElement("strong",null,"Rating:")," ",e.selectedGif.rating),o.a.createElement("button",{onClick:function(){return e.onRequestClose()}},"Close "))):o.a.createElement("div",null)},E=n(14),O=n.n(E),b=(n(35),function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(c.a)(this,Object(i.a)(t).call(this))).handleTermChange=function(t){var n="http://api.giphy.com/v1/gifs/search?q=".concat(t.replace(/\s/g,"+"),"&api_key=T8B0aFWsJ5E6edMuilem7xYMuDgNwdhA");O.a.get(n,function(t,n){e.setState({gifs:n.body.data})})},e.state={gifs:[],selectedGif:null,modalIsOpen:!1},e}return Object(r.a)(t,e),Object(l.a)(t,[{key:"openModal",value:function(e){this.setState({modalIsOpen:!0,selectedGif:e})}},{key:"closeModal",value:function(){this.setState({modalIsOpen:!1,selectedGif:null})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(p,{onTermChange:this.handleTermChange}),o.a.createElement(d,{gifs:this.state.gifs,onGifSelect:function(t){return e.openModal(t)}}),o.a.createElement(v,{modalIsOpen:this.state.modalIsOpen,selectedGif:this.state.selectedGif,onRequestClose:function(){return e.closeModal()}}))}}]),t}(s.Component));f.a.render(o.a.createElement(b,null),document.getElementById("root"))}},[[15,2,1]]]);
//# sourceMappingURL=main.72360f0d.chunk.js.map