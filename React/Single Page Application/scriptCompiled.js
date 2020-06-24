'use strict';var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var BrowserRouter=window.ReactRouterDOM.BrowserRouter,Route=window.ReactRouterDOM.Route,Link=window.ReactRouterDOM.Link,Prompt=window.ReactRouterDOM.Prompt,Switch=window.ReactRouterDOM.Switch,Redirect=window.ReactRouterDOM.Redirect,NavLink=window.ReactRouterDOM.NavLink,url='/portfolio/subpages/reactSPA';function cheapID(){return Math.random().toString(36).substr(2,5)}var Main=function(a){function b(){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return c.state={items:[{id:'1',text1:'Eget',text2:'Mauris ut maximus velit. Fusce ut sem convallis, rutrum leo eu, aliquet leo. Integer ligula sapien, fermentum et nunc non, faucibus sagittis purus. Aliquam ut dignissim leo, nec lobortis velit.'},{id:'2',text1:'nulla',text2:'Vivamus maximus sem dignissim tellus sodales viverra. In cursus leo ac sapien tempus pulvinar. Sed consectetur felis ut tristique ultrices. Pellentesque sollicitudin augue sed nunc consectetur suscipit.'},{id:'3',text1:'Orci',text2:'aenean et ultricies velit. curabitur fringilla egestas ipsum a vulputate. sed quis nibh eu justo mattis malesuada. vivamus consequat mattis nisi vitae fermentum. quisque vulputate consequat maximus. nam quis mi luctus massa aliquam dictum ut et nisl.'},{id:'4',text1:'Leo',text2:'Aliquam in velit rutrum, condimentum urna a, malesuada lectus.'},{id:'5',text1:'dui',text2:'Morbi dapibus at tortor quis mattis. In porttitor, ante a auctor dapibus, magna ante venenatis mauris, vitae convallis mauris dui at velit. Nulla ac sem sed nibh porta commodo. Donec cursus convallis justo. Cras interdum laoreet nisi sed eleifend.'},{id:'6',text1:'ARcU',text2:'Suspendisse pellentesque libero ut lorem laoreet faucibus.'},{id:'7',text1:'elit',text2:'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce quis tristique massa.'},{id:'8',text1:'Nec',text2:'etiam venenatis velit. curabitur pharetra sapien sed ante cursus, vitae fringilla orci posuere.'},{id:'9',text1:'Sed',text2:'Sed in maximus diam, sed eleifend justo. Praesent vel faucibus nibh. Maecenas dapibus, lacus a accumsan molestie, nibh tellus ultricies ante, in commodo magna neque nec justo. Curabitur ac lorem ac libero dictum ornare. Vivamus et dapibus libero.'},{id:'10',text1:'Cras',text2:'fringilla'},{id:'11',text1:'vitae',text2:'Etiam non nibh feugiat, dignissim nulla vel, efficitur metus. Integer finibus massa metus, a pretium odio accumsan id. Phasellus a nulla elit. Sed tellus enim, venenatis nec lorem ut, faucibus finibus libero.'},{id:'12',text1:'QUIS',text2:'fusce viverra, felis quis viverra viverra, ligula nibh suscipit turpis, ac luctus urna leo et urna. nullam nunc quam, mollis lacinia magna non, suscipit pretium lectus. donec sed pulvinar erat.'},{id:'13',text1:'nIBh',text2:'Fusce nec vestibulum nisi. Integer suscipit, odio a ullamcorper ultrices, orci orci porttitor ex, vitae pellentesque augue nisl ut risus. Proin maximus lobortis justo vitae molestie. Morbi placerat accumsan eros vitae sodales.'},{id:'14',text1:'id',text2:'Praesent euismod luctus sapien vitae aliquet. Nullam scelerisque felis ac felis tincidunt, non malesuada neque hendrerit. Etiam congue, lectus eu blandit blandit, diam massa scelerisque enim, sed fermentum massa libero sit amet ex.'},{id:'15',text1:'sit',text2:'Vestibulum tellus nunc, interdum nec aliquet sit amet, eleifend mollis risus. Donec a nunc vitae risus facilisis fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},{id:'16',text1:'ODIO',text2:'praesent euismod'},{id:'17',text1:'Nec',text2:'Quisque lacinia lacus nec tempus facilisis. Nulla facilisi.'},{id:'18',text1:'Arcu',text2:'Aenean elementum sodales ex et euismod. Fusce nec vestibulum nisi. Integer suscipit, odio a ullamcorper ultrices, orci orci porttitor ex, vitae pellentesque augue nisl ut risus.'},{id:'19',text1:'mi',text2:'Cras viverra nulla non consectetur volutpat. Phasellus vitae magna in urna pretium ullamcorper in at diam. Vivamus venenatis erat id augue sollicitudin rutrum.'},{id:'20',text1:'Non',text2:'Nam quis mi luctus massa aliquam dictum ut et nisl. Sed in nisi et sem laoreet porttitor at a augue. Integer consequat, risus vel vulputate luctus, velit nibh convallis ipsum, eget ultrices velit ipsum vel neque.'}]},c}return _inherits(b,a),_createClass(b,[{key:'render',value:function render(){var c=this;return React.createElement('div',null,React.createElement(HeaderBar,null),React.createElement('div',{className:'mainContent'},React.createElement(Switch,null,React.createElement(Route,{path:url+'/socialFeed',render:function render(){return React.createElement(SocialFeed,{passedState:c.state,setState:function setState(d){c.setState(d)}})}}),React.createElement(Route,{path:url+'/userList',render:function render(){return React.createElement(UserList,{passedState:c.state})}}),React.createElement(Route,{path:url+'/basicTextPage',render:function render(){return React.createElement(BasicTextPage,{passedState:c.state})}}),'// Displays a default component onLoad',React.createElement(Route,{path:'*',render:function render(){return React.createElement(SocialFeed,{passedState:c.state,setState:function setState(d){c.setState(d)}})}}))))}}]),b}(React.Component),HeaderBar=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'render',value:function render(){return React.createElement('div',{className:'headerBar'},React.createElement('span',null,React.createElement(Link,{to:url+'/socialFeed'},'Social Feed')),React.createElement('span',null,React.createElement(Link,{to:url+'/userList'},'User List')),React.createElement('span',null,React.createElement(Link,{to:url+'/basicTextPage'},'Basic Text Page')))}}]),b}(React.Component),SocialFeed=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'render',value:function render(){var c=this;return React.createElement('div',null,React.createElement(NewTweetTextarea,{passedState:this.props.passedState,setState:function setState(d){c.setState(d)}}),this.props.passedState.items.map(function(d){return React.createElement(WideCard,{text1:'@'+d.text1,text2:d.text2,key:d.id})}))}}]),b}(React.Component),NewTweetTextarea=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'componentDidMount',value:function componentDidMount(){cowTextarea.addEventListener('keypress',this.submitOnEnter.bind(this))}},{key:'submitOnEnter',value:function submitOnEnter(c){if(13==c.which&&!c.shiftKey){var d=this.props.passedState.items.unshift({id:uuidv4(),text1:cheapID(),text2:cowTextarea.value});this.props.setState({q:d}),c.preventDefault(),cowTextarea.value=''}}},{key:'render',value:function render(){return React.createElement('textarea',{id:'cowTextarea',maxLength:'280',spellCheck:'false',placeholder:'New Tweet..'})}}]),b}(React.Component),UserList=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'render',value:function render(){return React.createElement('div',null,this.props.passedState.items.map(function(c){return React.createElement(SquareIcon,{text1:c.text1,text2:c.text2,key:c.id})}))}}]),b}(React.Component),BasicTextPage=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:'render',value:function render(){return React.createElement('div',{className:'basicTextPage'},React.createElement('p',null,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id leo convallis, posuere nisi vitae, pretium neque. Nullam mauris velit, pellentesque ac ante non, porta tempor orci. Sed semper ligula non volutpat interdum. Ut cursus diam volutpat, posuere mauris vel, malesuada enim. Integer volutpat eget tortor non rutrum. Mauris mauris est, dictum at venenatis in, placerat in ex. Etiam a velit nunc. Nunc ac mollis mauris. Aliquam sed metus efficitur, lacinia sem at, mattis ligula. Sed varius sit amet justo sit amet sagittis. Phasellus vel pellentesque leo. Curabitur id magna et enim blandit semper.'),React.createElement('p',null,'Nunc dictum sed enim nec ultrices. Etiam ut tellus a velit lacinia euismod quis non ex. Curabitur eu dignissim sem, ut varius velit. Cras consectetur risus eu nisi vestibulum maximus. Duis non maximus velit, eu semper elit. Sed vel velit pellentesque, maximus ex eu, molestie tortor. Cras convallis sem ac quam pulvinar ultricies. Fusce vitae mauris id leo porta blandit. Suspendisse ultricies consectetur dapibus. Vestibulum scelerisque velit ac finibus iaculis. Vivamus leo turpis, finibus non ipsum vel, fermentum posuere ipsum. Duis posuere molestie felis, at molestie quam venenatis semper. Sed venenatis egestas velit. Aenean sodales sit amet arcu quis dignissim. Integer scelerisque at eros et egestas.'),React.createElement('p',null,'Suspendisse ultricies eu sapien ac tincidunt. Ut maximus ligula et tempor varius. Ut non turpis tempor, volutpat urna eu, fermentum justo. Proin commodo luctus nisl, at feugiat elit efficitur at. In hac habitasse platea dictumst. Nullam est dui, cursus vitae ligula eget, cursus ultrices sapien. Donec lacinia consectetur mollis.'),React.createElement('p',null,'Aliquam semper metus nec orci vulputate pretium. Donec tristique massa arcu, sit amet varius dui congue vel. Nam pulvinar ut metus vel convallis. Aenean ac dolor massa. Nulla vitae mi diam. Nunc ut massa ipsum. Vivamus vel lacus ligula. Aenean neque felis, maximus in enim et, porttitor feugiat enim. In id dignissim turpis, hendrerit aliquet libero.'),React.createElement('p',null,'Nunc vitae mattis orci. Nulla tincidunt viverra ornare. Nulla finibus, tortor ut ullamcorper blandit, magna elit iaculis nunc, vitae suscipit quam leo quis sem. Phasellus fringilla varius mi ut pretium. Sed volutpat eros eu est efficitur, non posuere orci vulputate. Vivamus dictum turpis sapien, eget pharetra quam iaculis eget. Integer iaculis rhoncus dolor, semper tempor arcu luctus sit amet. Sed ut pulvinar erat, a accumsan justo. Nunc ullamcorper ornare nulla, in venenatis odio blandit a. Quisque enim elit, rhoncus dictum auctor vitae, mollis a nulla. Donec pellentesque ut nisl sed dictum. Fusce in iaculis ligula, vel laoreet sapien. Vivamus elit orci, vulputate pretium nulla vitae, imperdiet finibus quam. Morbi sit amet quam vestibulum, elementum ligula a, convallis metus. Sed elementum ante a facilisis vestibulum.'))}}]),b}(React.Component);function WideCard(a){return React.createElement('span',{className:'wideCard'},React.createElement('span',{className:'text1'},a.text1),React.createElement('span',{className:'text2'},a.text2))}function SquareIcon(a){return React.createElement('span',{className:'squareIcon'},React.createElement('span',{className:'text1'},a.text1))}ReactDOM.render(React.createElement(BrowserRouter,null,React.createElement(Main,null)),reactRootDiv);