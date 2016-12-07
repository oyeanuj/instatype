!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define(["React"],t):"object"==typeof exports?exports.instatype=t(require("React")):e.instatype=t(e.React)}(this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),c=o(i),s=n(2),d=o(s),p=n(4),f=o(p),h=n(5),y=o(h);"undefined"!=typeof window&&n(7),"function"==typeof c.default.initializeTouchEvents&&c.default.initializeTouchEvents(!0);var b=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={inputValue:"",showResults:!1,loading:!1,results:[],resultsQuery:null},n.loadResultsFromServer=n.loadResultsFromServer.bind(n),n.handleSelect=n.handleSelect.bind(n),n.handleChange=n.handleChange.bind(n),n.showResults=n.showResults.bind(n),n.hideResults=n.hideResults.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.handleTouch=n.handleTouch.bind(n),n.clearState=n.clearState.bind(n),n.blurInput=n.blurInput.bind(n),n.handleBlur=n.handleBlur.bind(n),n}return u(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.blurOnTouchStart===!0&&document.addEventListener("touchstart",this.blurInput,!0)}},{key:"componentWillUnmount",value:function(){clearTimeout(window.blurHideResultsTimeout),this.props.blurOnTouchStart===!0&&document.removeEventListener("touchstart",this.blurInput,!0)}},{key:"loadResultsFromServer",value:function(e){var t=this;this.setState({loading:!0}),this.props.requestHandler(e,this.props.limit,function(n){return t.state.inputValue==e&&(n=n.slice(0,t.props.limit),void t.setState({results:n,resultsQuery:e,loading:!1}))})}},{key:"handleSelect",value:function(e){this.props.selectedHandler(e),this.clearState()}},{key:"handleChange",value:function(e){var t=this;clearTimeout(window.loadResultsTimeout),e?(this.setState({inputValue:e}),window.loadResultsTimeout=setTimeout(function(){t.loadResultsFromServer(e)},200)):this.clearState()}},{key:"showResults",value:function(){this.state.showResults===!1&&this.setState({showResults:!0}),clearTimeout(window.blurHideResultsTimeout)}},{key:"hideResults",value:function(){this.state.showResults===!0&&this.setState({showResults:!1}),clearTimeout(window.blurHideResultsTimeout)}},{key:"handleFocus",value:function(){this.showResults()}},{key:"handleBlur",value:function(e){var t=this;window.blurHideResultsTimeout=setTimeout(function(){t.hideResults()},400),this.props.onBlur&&setTimeout(function(){t.props.onBlur()},10)}},{key:"handleTouch",value:function(){this.props.blurOnTouchStart===!1&&this.blurInput(),clearTimeout(window.blurHideResultsTimeout)}},{key:"clearState",value:function(){this.setState({results:[],resultsQuery:null,inputValue:"",loading:!1})}},{key:"blurInput",value:function(){this.refs.inputComponent.refs.input.getDOMNode().blur()}},{key:"render",value:function(){var e=this.props,t=e.defaultInputValue,n=e.placeholder,o=e.loadingIcon,r=e.thumbStyle,l=this.state,u=l.results,a=l.resultsQuery,i=l.showResults,s=l.loading;return c.default.createElement("div",{id:"instatype",onTouchStart:this.handleTouch},c.default.createElement("div",{className:"input-wrapper"},c.default.createElement(f.default,{defaultValue:t,placeholder:n,handleChange:this.handleChange,handleFocus:this.handleFocus,handleBlur:this.handleBlur,ref:"inputComponent"}),s&&c.default.createElement(y.default,{icon:o||void 0})),i&&c.default.createElement(d.default,{data:u,resultsId:a,handleSelect:this.handleSelect,thumbStyle:r}))}}]),t}(c.default.PureComponent);b.propTypes={limit:c.default.PropTypes.number,defaultInputValue:c.default.PropTypes.string,placeholder:c.default.PropTypes.string,thumbStyle:c.default.PropTypes.oneOf(["circle","square"]),loadingIcon:c.default.PropTypes.string,blurOnTouchStart:c.default.PropTypes.bool,onBlur:c.default.PropTypes.func,requestHandler:c.default.PropTypes.func.isRequired,selectedHandler:c.default.PropTypes.func.isRequired},b.defaultProps={limit:10,defaultInputValue:null,placeholder:"Search",thumbStyle:"square",loadingIcon:null,blurOnTouchStart:!1},e.exports=b},function(t,n){t.exports=e},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),c=o(i),s=n(3),d=o(s),p=function(e){function t(e){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.handleSelect,o=e.thumbStyle;return c.default.createElement("div",{className:"resultsContainer"},t&&t.length>0&&c.default.createElement("ul",{className:"results thumb-"+o},t.map(function(e,t){return c.default.createElement(d.default,{image:e.image,handleSelect:n,data:e,key:"result-"+(e.id||t)},e.name)})))}}]),t}(c.default.PureComponent);p.propTypes={data:c.default.PropTypes.arrayOf(c.default.PropTypes.shape({image:c.default.PropTypes.string,name:c.default.PropTypes.string.isRequired})),handleSelect:c.default.PropTypes.func.isRequired,thumbStyle:c.default.PropTypes.string.isRequired},t.default=p},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),c=o(i),s=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isHovered:!1},n.handleSelect=n.handleSelect.bind(n),n.onMouseOver=n.onMouseOver.bind(n),n.onMouseLeave=n.onMouseLeave.bind(n),n}return u(t,e),a(t,[{key:"handleSelect",value:function(e){this.props.handleSelect(this.props.data),e.preventDefault(),e.stopPropagation()}},{key:"onMouseOver",value:function(){this.setState({isHovered:!0})}},{key:"onMouseLeave",value:function(){this.setState({isHovered:!1})}},{key:"render",value:function(){var e=this.props,t=e.image,n=e.children,o=this.state.isHovered;return c.default.createElement("li",{className:(o?"hovered":"")+" clearfix",onClick:this.handleSelect,onMouseOver:this.onMouseOver,onMouseLeave:this.onMouseLeave},t&&c.default.createElement("img",{src:t}),c.default.createElement("div",null,n))}}]),t}(c.default.PureComponent);s.propTypes={data:c.default.PropTypes.object.isRequired,image:c.default.PropTypes.string,children:c.default.PropTypes.node},t.default=s},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),c=o(i),s=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=n.handleChange.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n}return u(t,e),a(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"handleChange",value:function(e){this.props.handleChange(e.target.value)}},{key:"handleFocus",value:function(e){this.props.handleFocus(e)}},{key:"handleBlur",value:function(e){this.props.handleBlur(e)}},{key:"render",value:function(){var e=this.props,t=e.defaultValue,n=e.placeholder;return c.default.createElement("input",{type:"text",defaultValue:t,autoCorrect:"off",autoComplete:"off",autoCapitalize:"off",placeholder:n,className:"input-typeahead",onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur,ref:"input"})}}]),t}(c.default.Component);s.propTypes={handleChange:c.default.PropTypes.func.isRequired,handleFocus:c.default.PropTypes.func,handleBlur:c.default.PropTypes.func,defaultValue:c.default.PropTypes.string,placeholder:c.default.PropTypes.string},t.default=s},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),l=o(r),u=n(6),a=o(u),i=function(e){var t=e.icon;return l.default.createElement("img",{className:"loading-icon",src:t})};i.propTypes={loadingIcon:l.default.PropTypes.string},i.defaultProps={icon:a.default},t.default=i},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTQ4cHgnIGhlaWdodD0nMTQ4cHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLWRlZmF1bHQiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyMyNDI0MjQnIHRyYW5zZm9ybT0ncm90YXRlKDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwcycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjMjQyNDI0JyB0cmFuc2Zvcm09J3JvdGF0ZSgzMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuMDgzMzMzMzMzMzMzMzMzMzNzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyMyNDI0MjQnIHRyYW5zZm9ybT0ncm90YXRlKDYwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC4xNjY2NjY2NjY2NjY2NjY2NnMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nIzI0MjQyNCcgdHJhbnNmb3JtPSdyb3RhdGUoOTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjI1cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjMjQyNDI0JyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjMzMzMzMzMzMzMzMzMzMzNzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyMyNDI0MjQnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuNDE2NjY2NjY2NjY2NjY2N3MnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nIzI0MjQyNCcgdHJhbnNmb3JtPSdyb3RhdGUoMTgwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC41cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjMjQyNDI0JyB0cmFuc2Zvcm09J3JvdGF0ZSgyMTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjU4MzMzMzMzMzMzMzMzMzRzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyMyNDI0MjQnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuNjY2NjY2NjY2NjY2NjY2NnMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nIzI0MjQyNCcgdHJhbnNmb3JtPSdyb3RhdGUoMjcwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC43NXMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nIzI0MjQyNCcgdHJhbnNmb3JtPSdyb3RhdGUoMzAwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC44MzMzMzMzMzMzMzMzMzM0cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjMjQyNDI0JyB0cmFuc2Zvcm09J3JvdGF0ZSgzMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjkxNjY2NjY2NjY2NjY2NjZzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48L3N2Zz4="},function(e,t,n){var o=n(8);"string"==typeof o&&(o=[[e.id,o,""]]);n(10)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(9)(),t.push([e.id,'#instatype{position:relative;display:block;width:100%}#instatype *{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}#instatype .input-wrapper{position:relative}#instatype .input-typeahead{width:100%;margin:0;font-size:2em;padding-top:.5em;padding-bottom:.5em;padding-left:.5em;border-radius:0}#instatype .loading-icon{position:absolute;height:100%;padding-top:1em;padding-bottom:1em;right:1em}#instatype .resultsContainer{position:absolute;z-index:9997;width:100%;margin:0}#instatype ul.results{position:absolute;z-index:9999;top:0;width:100%;margin:0;padding:0;background-color:#fff;border:1px solid #ccc;border-top:none;list-style-type:none}#instatype ul.results.empty,#instatype ul.results.hide{display:none}#instatype ul.results>li{line-height:4em;padding:.5em 0 .5em 1em;position:relative;cursor:pointer}#instatype ul.results>li.hovered{background-color:#fffee2}#instatype ul.results>li>img{float:left;width:4em;height:4em;margin-right:1em}#instatype ul.results.thumb-circle>li>img{border-radius:4em}#instatype ul.results>li>div{float:left;font-size:2em}#instatype .clearfix:after{content:"";display:table;clear:both}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var l=this[r][0];"number"==typeof l&&(o[l]=!0)}for(r=0;r<t.length;r++){var u=t[r];"number"==typeof u[0]&&o[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),e.push(u))}},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=f[o.id];if(r){r.refs++;for(var l=0;l<r.parts.length;l++)r.parts[l](o.parts[l]);for(;l<o.parts.length;l++)r.parts.push(c(o.parts[l],t))}else{for(var u=[],l=0;l<o.parts.length;l++)u.push(c(o.parts[l],t));f[o.id]={id:o.id,refs:1,parts:u}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],l=r[0],u=r[1],a=r[2],i=r[3],c={css:u,media:a,sourceMap:i};n[l]?n[l].parts.push(c):t.push(n[l]={id:l,parts:[c]})}return t}function l(e,t){var n=b(),o=v[v.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function u(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",l(e,t),t}function i(e){var t=document.createElement("link");return t.rel="stylesheet",l(e,t),t}function c(e,t){var n,o,r;if(t.singleton){var l=g++;n=m||(m=a(t)),o=s.bind(null,n,l,!1),r=s.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=i(t),o=p.bind(null,n),r=function(){u(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),o=d.bind(null,n),r=function(){u(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function s(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=J(t,r);else{var l=document.createTextNode(r),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(l,u[t]):e.appendChild(l)}}function d(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(r),l&&URL.revokeObjectURL(l)}var f={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},y=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,g=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=y()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var l=[],u=0;u<n.length;u++){var a=n[u],i=f[a.id];i.refs--,l.push(i)}if(e){var c=r(e);o(c,t)}for(var u=0;u<l.length;u++){var i=l[u];if(0===i.refs){for(var s=0;s<i.parts.length;s++)i.parts[s]();delete f[i.id]}}}};var J=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}])});