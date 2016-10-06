webpackHotUpdate(0,{

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _question = __webpack_require__(174);
	
	var _question2 = _interopRequireDefault(_question);
	
	var _reactRouter = __webpack_require__(181);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var questions = [{
		question: 'What do to when baby refuses to burp?',
		index: 0
	}, {
		question: 'How to tickle the baby?',
		index: 1
	}];
	
	var App = function (_React$Component) {
		_inherits(App, _React$Component);
	
		function App(props) {
			_classCallCheck(this, App);
	
			var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
			_this.state = {
				questions: questions
			};
			return _this;
		}
	
		_createClass(App, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h1',
						null,
						'Baby Tips please!'
					),
					_react2.default.createElement(_question2.default, {
						questions: this.state.questions
					}),
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/viewSuggestions' },
						_react2.default.createElement(
							'div',
							{ 'class': 'boxes' },
							_react2.default.createElement(
								'button',
								null,
								'View suggestions'
							)
						)
					)
				);
			}
		}]);
	
		return App;
	}(_react2.default.Component);
	
	exports.default = App;
	
	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/vlakshmanan/babyTips/src/components/app.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/vlakshmanan/babyTips/src/components/app.js"); } } })();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAuanM/M2NlZCJdLCJuYW1lcyI6WyJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsImluZGV4IiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLEtBQU1BLFlBQVksQ0FDbEI7QUFDQ0MsWUFBVyx1Q0FEWjtBQUVDQyxTQUFRO0FBRlQsRUFEa0IsRUFLbEI7QUFDQ0QsWUFBVyx5QkFEWjtBQUVDQyxTQUFPO0FBRlIsRUFMa0IsQ0FBbEI7O0tBWXFCQyxHOzs7QUFDcEIsZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHlHQUNaQSxLQURZOztBQUdsQixTQUFLQyxLQUFMLEdBQWE7QUFDWkw7QUFEWSxJQUFiO0FBSGtCO0FBTWxCOzs7OzRCQUNRO0FBQ1IsV0FDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQ7QUFFQztBQUNDLGlCQUFXLEtBQUtLLEtBQUwsQ0FBV0w7QUFEdkIsT0FGRDtBQU1DO0FBQUE7QUFBQSxRQUFNLElBQUcsa0JBQVQ7QUFDQTtBQUFBO0FBQUEsU0FBSyxTQUFNLE9BQVg7QUFDZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURoQjtBQURBO0FBTkQsS0FERDtBQWVBOzs7O0dBeEIrQixnQkFBTU0sUzs7bUJBQWxCSCxHIiwiZmlsZSI6IjAuODhjMWZhZjFkNWM1OWM3ZGQwNGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi9xdWVzdGlvbidcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jb25zdCBxdWVzdGlvbnMgPSBbXG57XG5cdHF1ZXN0aW9uIDogJ1doYXQgZG8gdG8gd2hlbiBiYWJ5IHJlZnVzZXMgdG8gYnVycD8nLFxuXHRpbmRleCA6IDBcbn0sXG57XG5cdHF1ZXN0aW9uIDogJ0hvdyB0byB0aWNrbGUgdGhlIGJhYnk/Jyxcblx0aW5kZXg6IDFcbn1cbl07XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cXVlc3Rpb25zXG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgxPkJhYnkgVGlwcyBwbGVhc2UhPC9oMT5cblx0XHRcdFx0PFF1ZXN0aW9uIFxuXHRcdFx0XHRcdHF1ZXN0aW9ucz17dGhpcy5zdGF0ZS5xdWVzdGlvbnN9XG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0PExpbmsgdG89XCIvdmlld1N1Z2dlc3Rpb25zXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJib3hlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlZpZXcgc3VnZ2VzdGlvbnM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FwcC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=