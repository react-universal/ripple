(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1335:function(module,exports,__webpack_require__){var map={"./index.js":1336};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1335},1336:function(module,exports,__webpack_require__){(function(module){var _interopRequireDefault=__webpack_require__(0),_react=_interopRequireDefault(__webpack_require__(2)),_reactNative=__webpack_require__(189),_index=_interopRequireDefault(__webpack_require__(1480)),_Header=_interopRequireDefault(__webpack_require__(1485)),_Container=_interopRequireDefault(__webpack_require__(1486));(0,__webpack_require__(1487).storiesOf)("Ripples",module).addParameters({jest:["Ripple"]}).add("from click",(function(){return _react.default.createElement(_Container.default,null,_react.default.createElement(_Header.default,{title:"Ripple from where it was clicked"}),_react.default.createElement(_reactNative.View,{style:{flexDirection:"row",flexWrap:"wrap"}},_react.default.createElement(_index.default,{rippleColor:"blue",style:{width:180,height:250,justifyContent:"center",alignItems:"center",borderWidth:1,borderColor:"black",borderRadius:5}},_react.default.createElement(_reactNative.Text,null,"Click Me")),_react.default.createElement(_index.default,{style:{width:200,height:200,marginLeft:40}},_react.default.createElement(_reactNative.View,{style:{width:200,height:200,justifyContent:"center",alignItems:"center"}},_react.default.createElement(_reactNative.Text,null,"Click Me")))),_react.default.createElement(_reactNative.View,{style:{flexDirection:"row",flexWrap:"wrap",marginTop:40}},_react.default.createElement(_index.default,{rippleColor:"#E91E63",rippleContainerBorderRadius:100,style:{width:100,height:100,justifyContent:"center",alignItems:"center"}},_react.default.createElement(_reactNative.View,{style:{width:48,height:48,backgroundColor:"red"}})),_react.default.createElement(_index.default,{rippleColor:"#9C27B0",style:{width:300,height:200,marginLeft:40,justifyContent:"center",alignItems:"center"},rippleContainerBorderRadius:100},_react.default.createElement(_reactNative.Text,null,"Massive Button"))))})).add("from center",(function(){return _react.default.createElement(_Container.default,{scroll:!0},_react.default.createElement(_Header.default,{title:"Ripple form center"}),_react.default.createElement(_reactNative.View,{style:{flexDirection:"row",flexWrap:"wrap"}},_react.default.createElement(_index.default,{rippleColor:"blue",rippleCentered:!0,style:{width:180,height:250,justifyContent:"center",alignItems:"center",borderWidth:1,borderColor:"black",borderRadius:5}},_react.default.createElement(_reactNative.Text,null,"Click Me")),_react.default.createElement(_index.default,{rippleCentered:!0,style:{width:200,height:200,marginLeft:40}},_react.default.createElement(_reactNative.View,{shadow:4,style:{width:200,height:200,justifyContent:"center",alignItems:"center"}},_react.default.createElement(_reactNative.Text,null,"Click Me")))))})).add("sequential",(function(){return _react.default.createElement(_Container.default,{scroll:!0},_react.default.createElement(_Header.default,{title:"Sequential Ripple"}),_react.default.createElement(_reactNative.Text,{style:{marginBottom:40}},"Try clicking quickly versus other demos"),_react.default.createElement(_reactNative.View,{style:{flexDirection:"row",flexWrap:"wrap"}},_react.default.createElement(_index.default,{rippleColor:"blue",rippleSequential:!0,style:{width:180,height:250,justifyContent:"center",alignItems:"center",borderWidth:1,borderColor:"black",borderRadius:5}},_react.default.createElement(_reactNative.Text,null,"Click Me")),_react.default.createElement(_index.default,{rippleCentered:!0,rippleSequential:!0,style:{width:200,height:200,marginLeft:40}},_react.default.createElement(_reactNative.View,{shadow:4,style:{width:200,height:200,justifyContent:"center",alignItems:"center"}},_react.default.createElement(_reactNative.Text,null,"Click Me")))))})).add("speed",(function(){return _react.default.createElement(_Container.default,{scroll:!0},_react.default.createElement(_Header.default,{title:"Speed Ripple"}),_react.default.createElement(_reactNative.View,{style:{flexDirection:"row",flexWrap:"wrap"}},_react.default.createElement(_index.default,{rippleColor:"blue",rippleDuration:250,style:{width:180,height:250,justifyContent:"center",alignItems:"center",borderWidth:1,borderColor:"black",borderRadius:5}},_react.default.createElement(_reactNative.Text,null,"Really fast")),_react.default.createElement(_index.default,{rippleCentered:!0,rippleDuration:1e3,style:{width:200,height:200,marginLeft:40}},_react.default.createElement(_reactNative.View,{shadow:4,style:{width:200,height:200,justifyContent:"center",alignItems:"center"}},_react.default.createElement(_reactNative.Text,null,"Really Slow")))))}))}).call(this,__webpack_require__(123)(module))},1480:function(module,exports,__webpack_require__){var _interopRequireWildcard=__webpack_require__(44),_interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(53)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(1481)),_classCallCheck2=_interopRequireDefault(__webpack_require__(742)),_createClass2=_interopRequireDefault(__webpack_require__(743)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(744)),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(746)),_assertThisInitialized2=_interopRequireDefault(__webpack_require__(745)),_inherits2=_interopRequireDefault(__webpack_require__(747)),_defineProperty2=_interopRequireDefault(__webpack_require__(427)),_propTypes=_interopRequireDefault(__webpack_require__(192)),_react=_interopRequireWildcard(__webpack_require__(2)),_reactNative=__webpack_require__(189),_Ripple=_interopRequireWildcard(__webpack_require__(1484));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty2.default)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Ripple=function(_PureComponent){function Ripple(props){var _this;return(0,_classCallCheck2.default)(this,Ripple),(_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Ripple).call(this,props))).onLayout=_this.onLayout.bind((0,_assertThisInitialized2.default)(_this)),_this.onPress=_this.onPress.bind((0,_assertThisInitialized2.default)(_this)),_this.onPressIn=_this.onPressIn.bind((0,_assertThisInitialized2.default)(_this)),_this.onPressOut=_this.onPressOut.bind((0,_assertThisInitialized2.default)(_this)),_this.onLongPress=_this.onLongPress.bind((0,_assertThisInitialized2.default)(_this)),_this.onAnimationEnd=_this.onAnimationEnd.bind((0,_assertThisInitialized2.default)(_this)),_this.renderRipple=_this.renderRipple.bind((0,_assertThisInitialized2.default)(_this)),_this.unique=0,_this.mounted=!1,_this.rippleFades=_this.props.rippleFades&&!_this.props.displayUntilPressOut,_this.isPressingIn=!1,_this.animationWaitingForEnd=!1,_this.state={width:0,height:0,ripples:[]},_this}return(0,_inherits2.default)(Ripple,_PureComponent),(0,_createClass2.default)(Ripple,[{key:"componentDidMount",value:function componentDidMount(){this.mounted=!0}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.mounted=!1}},{key:"onLayout",value:function onLayout(event){var _event$nativeEvent$la=event.nativeEvent.layout,width=_event$nativeEvent$la.width,height=_event$nativeEvent$la.height,onLayout=this.props.onLayout;"function"==typeof onLayout&&onLayout(event),this.setState({width:width,height:height})}},{key:"onPress",value:function onPress(event){var onPress=this.props.onPress;"function"==typeof onPress&&requestAnimationFrame((function(){return onPress(event)}))}},{key:"onLongPress",value:function onLongPress(event){var _this$props=this.props,onLongPress=_this$props.onLongPress;_this$props.disabled||("function"==typeof onLongPress&&requestAnimationFrame((function(){return onLongPress(event)})),this.startRipple(event))}},{key:"onPressIn",value:function onPressIn(event){var _this$props2=this.props,onPressIn=_this$props2.onPressIn,rippleSequential=_this$props2.rippleSequential,disabled=_this$props2.disabled,ripples=this.state.ripples;disabled||(this.isPressingIn=!0,rippleSequential&&ripples.length||(onPressIn&&onPressIn(event),this.startRipple(event)))}},{key:"onPressOut",value:function onPressOut(event){var onPressOut=this.props.onPressOut;"function"==typeof onPressOut&&onPressOut(event),this.signalAnimationEnd(),this.isPressingIn=!1}},{key:"onAnimationEnd",value:function onAnimationEnd(event){this.props.displayUntilPressOut&&this.isPressingIn?this.animationWaitingForEnd=!0:(this.props.onAnimationEnd&&this.props.onAnimationEnd(event),this.forceAnimationEnd())}},{key:"signalAnimationEnd",value:function signalAnimationEnd(){this.animationWaitingForEnd&&this.forceAnimationEnd()}},{key:"forceAnimationEnd",value:function forceAnimationEnd(){this.mounted&&this.setState((function(_ref){return{ripples:_ref.ripples.slice(1)}})),this.animationWaitingForEnd=!1}},{key:"webGetPositionInElement",value:function webGetPositionInElement(e){var rect=e.nativeEvent.target.getBoundingClientRect();return{x:e.nativeEvent.pageX-rect.left,y:e.nativeEvent.changedTouches[0].clientY-rect.top}}},{key:"startRipple",value:function startRipple(event){var _this$state=this.state,width=_this$state.width,height=_this$state.height,_this$props3=this.props,rippleDuration=_this$props3.rippleDuration,rippleCentered=_this$props3.rippleCentered,rippleSize=_this$props3.rippleSize,onRippleAnimation=_this$props3.onRippleAnimation,w2=.5*width,h2=.5*height,_event$nativeEvent=event.nativeEvent,locationX=_event$nativeEvent.locationX,locationY=_event$nativeEvent.locationY;"web"===_reactNative.Platform.OS&&(locationX=this.webGetPositionInElement(event).x,locationY=this.webGetPositionInElement(event).y),rippleCentered&&(locationX=w2,locationY=h2);var offsetX=Math.abs(w2-locationX),offsetY=Math.abs(h2-locationY),R=rippleSize>0?.5*rippleSize:Math.sqrt(Math.pow(w2+offsetX,2)+Math.pow(h2+offsetY,2)),ripple={unique:this.unique++,progress:new _reactNative.Animated.Value(0),locationX:locationX,locationY:locationY,R:R};onRippleAnimation(_reactNative.Animated.timing(ripple.progress,{toValue:1,easing:_reactNative.Easing.out(_reactNative.Easing.ease),duration:rippleDuration,useNativeDriver:!0}),this.onAnimationEnd),this.setState((function(_ref2){return{ripples:_ref2.ripples.concat(ripple)}}))}},{key:"renderRipple",value:function renderRipple(_ref3){var unique=_ref3.unique,progress=_ref3.progress,locationX=_ref3.locationX,locationY=_ref3.locationY,R=_ref3.R,_this$props4=this.props,rippleColor=_this$props4.rippleColor,rippleOpacity=_this$props4.rippleOpacity,rippleFades=this.rippleFades,rippleStyle={top:locationY-_Ripple.radius,left:locationX-_Ripple.radius,backgroundColor:rippleColor,transform:[{scale:progress.interpolate({inputRange:[0,1],outputRange:[.5/_Ripple.radius,R/_Ripple.radius]})}],opacity:rippleFades?progress.interpolate({inputRange:[0,1],outputRange:[rippleOpacity,0]}):rippleOpacity};return _react.default.createElement(_reactNative.Animated.View,{style:[_Ripple.default.ripple,rippleStyle],key:unique})}},{key:"render",value:function render(){var ripples=this.state.ripples,onPress=this.onPress,onPressIn=this.onPressIn,onPressOut=this.onPressOut,onLongPress=this.onLongPress,onLayout=this.onLayout,_this$props5=this.props,delayLongPress=_this$props5.delayLongPress,delayPressIn=_this$props5.delayPressIn,delayPressOut=_this$props5.delayPressOut,disabled=_this$props5.disabled,hitSlop=_this$props5.hitSlop,pressRetentionOffset=_this$props5.pressRetentionOffset,children=_this$props5.children,rippleContainerBorderRadius=_this$props5.rippleContainerBorderRadius,testID=_this$props5.testID,nativeID=_this$props5.nativeID,accessible=_this$props5.accessible,accessibilityLabel=_this$props5.accessibilityLabel,panResponder=_this$props5.panResponder,props=(0,_objectWithoutProperties2.default)(_this$props5,["delayLongPress","delayPressIn","delayPressOut","disabled","hitSlop","pressRetentionOffset","children","rippleContainerBorderRadius","testID","nativeID","accessible","accessibilityLabel","panResponder"]),touchableProps={delayLongPress:delayLongPress,delayPressIn:delayPressIn,delayPressOut:delayPressOut,disabled:disabled,hitSlop:hitSlop,pressRetentionOffset:pressRetentionOffset,onPress:onPress,onPressIn:onPressIn,testID:testID,nativeID:nativeID,accessible:accessible,accessibilityLabel:accessibilityLabel,onPressOut:onPressOut,onLongPress:props.onLongPress?onLongPress:void 0,onLayout:onLayout},containerStyle={borderRadius:rippleContainerBorderRadius};return _react.default.createElement(_reactNative.TouchableWithoutFeedback,(0,_extends2.default)({},touchableProps,panResponder,{testID:testID}),_react.default.createElement(_reactNative.Animated.View,props,children,_react.default.createElement(_reactNative.View,{style:[_Ripple.default.container,containerStyle],pointerEvents:"none"},ripples.map(this.renderRipple))))}}]),Ripple}(_react.PureComponent);exports.default=Ripple,(0,_defineProperty2.default)(Ripple,"defaultProps",_objectSpread({},_reactNative.TouchableWithoutFeedback.defaultProps,{rippleColor:"rgba(0, 0, 0, .87)",rippleOpacity:.3,rippleDuration:400,rippleSize:0,rippleContainerBorderRadius:0,rippleCentered:!1,rippleSequential:!1,rippleFades:!0,disabled:!1,displayUntilPressOut:!0,onRippleAnimation:function onRippleAnimation(animation,callback){return animation.start(callback)},testID:"ru-ripple"})),(0,_defineProperty2.default)(Ripple,"propTypes",_objectSpread({},_reactNative.Animated.View.propTypes,{},_reactNative.TouchableWithoutFeedback.propTypes,{rippleColor:_propTypes.default.string,rippleOpacity:_propTypes.default.number,rippleDuration:_propTypes.default.number,rippleSize:_propTypes.default.number,rippleContainerBorderRadius:_propTypes.default.number,rippleCentered:_propTypes.default.bool,rippleSequential:_propTypes.default.bool,rippleFades:_propTypes.default.bool,disabled:_propTypes.default.bool,displayUntilPressOut:_propTypes.default.bool,onRippleAnimation:_propTypes.default.func,testID:_propTypes.default.string}))},1484:function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.radius=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(427)),_reactNative=__webpack_require__(189);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}exports.radius=10;var _default=_reactNative.StyleSheet.create({container:function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty2.default)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},_reactNative.StyleSheet.absoluteFillObject,{backgroundColor:"transparent",overflow:"hidden",zIndex:10}),ripple:{width:20,height:20,borderRadius:10,overflow:"hidden",position:"absolute",zIndex:10}});exports.default=_default},1485:function(module,exports,__webpack_require__){var _interopRequireWildcard=__webpack_require__(44),_interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(742)),_createClass2=_interopRequireDefault(__webpack_require__(743)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(744)),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(746)),_inherits2=_interopRequireDefault(__webpack_require__(747)),_defineProperty2=_interopRequireDefault(__webpack_require__(427)),_react=_interopRequireWildcard(__webpack_require__(2)),_propTypes=_interopRequireDefault(__webpack_require__(192)),_reactNative=__webpack_require__(189),Header=function(_Component){function Header(){return(0,_classCallCheck2.default)(this,Header),(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Header).apply(this,arguments))}return(0,_inherits2.default)(Header,_Component),(0,_createClass2.default)(Header,[{key:"render",value:function render(){var _this$props=this.props,title=_this$props.title,subtitle=_this$props.subtitle;return _react.default.createElement(_reactNative.View,{style:styles.container},_react.default.createElement(_reactNative.Text,{styles:styles.header},title),subtitle?_react.default.createElement(_reactNative.Text,{type:1,style:[styles.subtitle]},subtitle):null)}}]),Header}(_react.Component);exports.default=Header,(0,_defineProperty2.default)(Header,"propTypes",{title:_propTypes.default.string,subtitle:_propTypes.default.string});var styles=_reactNative.StyleSheet.create({container:{marginBottom:60},header:{fontSize:24},subtitle:{marginTop:40}})},1486:function(module,exports,__webpack_require__){var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=Container;var _react=_interopRequireDefault(__webpack_require__(2)),_propTypes=_interopRequireDefault(__webpack_require__(192)),_reactNative=__webpack_require__(189);function Container(_ref){var style=_ref.style,children=_ref.children;return _react.default.createElement(_reactNative.ScrollView,null,_react.default.createElement(_reactNative.View,{style:[styles.container,style]},children))}var styles=_reactNative.StyleSheet.create({container:{padding:16}});Container.propTypes={style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),children:_propTypes.default.node}},1487:function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"storiesOf",{enumerable:!0,get:function get(){return _react.storiesOf}});var _react=__webpack_require__(475)},748:function(module,exports,__webpack_require__){__webpack_require__(749),__webpack_require__(898),module.exports=__webpack_require__(899)},813:function(module,exports){},899:function(module,exports,__webpack_require__){(function(module){var _react=__webpack_require__(475),context=__webpack_require__(1335);(0,_react.configure)(context,module)}).call(this,__webpack_require__(123)(module))}},[[748,1,2]]]);
//# sourceMappingURL=main.95d79b8ef5bc7c5d23be.bundle.js.map