webpackHotUpdate(0,{

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(175);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _questionHeader = __webpack_require__(177);
	
	var _questionHeader2 = _interopRequireDefault(_questionHeader);
	
	var _questionListItem = __webpack_require__(178);
	
	var _questionListItem2 = _interopRequireDefault(_questionListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Question = function (_React$Component) {
		_inherits(Question, _React$Component);
	
		function Question() {
			_classCallCheck(this, Question);
	
			return _possibleConstructorReturn(this, (Question.__proto__ || Object.getPrototypeOf(Question)).apply(this, arguments));
		}
	
		_createClass(Question, [{
			key: 'renderItems',
			value: function renderItems() {
				return _lodash2.default.map(this.props.questions, function (question, index) {
					return _react2.default.createElement(_questionListItem2.default, _extends({ key: index }, question));
				});
				// creates a new array without mutating the array. For each todo, create a new todo Item. Index is a unique id
				/*
	   	... todo === (in ES6)
	   	task={todo.task}
	   	isCompleted={todo.isCompleted}
	   */
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'table',
					null,
					_react2.default.createElement(_questionHeader2.default, null),
					_react2.default.createElement(
						'tbody',
						null,
						this.renderItems(),
						_react2.default.createElement(
							'button',
							{ id: 'submitbutton' },
							'Submit'
						)
					)
				);
			}
		}]);
	
		return Question;
	}(_react2.default.Component);
	
	exports.default = Question;
	
	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/vlakshmanan/babyTips/src/components/question.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/vlakshmanan/babyTips/src/components/question.js"); } } })();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi5qcz9jZDg3Il0sIm5hbWVzIjpbIlF1ZXN0aW9uIiwibWFwIiwicHJvcHMiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsImluZGV4IiwicmVuZGVySXRlbXMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFcUJBLFE7Ozs7Ozs7Ozs7O2lDQUNOO0FBQ2IsV0FBTyxpQkFBRUMsR0FBRixDQUFNLEtBQUtDLEtBQUwsQ0FBV0MsU0FBakIsRUFBNEIsVUFBQ0MsUUFBRCxFQUFXQyxLQUFYO0FBQUEsWUFBcUIscUVBQWtCLEtBQUtBLEtBQXZCLElBRWxERCxRQUZrRCxFQUFyQjtBQUFBLEtBQTVCLENBQVA7QUFJQztBQUNBOzs7OztBQUtEOzs7NEJBRVE7QUFDUixXQUNDO0FBQUE7QUFBQTtBQUNDLGtFQUREO0FBRUM7QUFBQTtBQUFBO0FBQ0UsV0FBS0UsV0FBTCxFQURGO0FBRUM7QUFBQTtBQUFBLFNBQVEsSUFBRyxjQUFYO0FBQUE7QUFBQTtBQUZEO0FBRkQsS0FERDtBQVNBOzs7O0dBeEJvQyxnQkFBTUMsUzs7bUJBQXZCUCxRIiwiZmlsZSI6IjAuYWRjMWYxMDkwNzQ1NWY3ZTMyMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFF1ZXN0aW9uSGVhZGVyIGZyb20gJy4vcXVlc3Rpb24taGVhZGVyJ1xuaW1wb3J0IFF1ZXN0aW9uTGlzdEl0ZW0gZnJvbSAnLi9xdWVzdGlvbi1saXN0LWl0ZW0uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVySXRlbXMoKSB7XG5cdFx0cmV0dXJuIF8ubWFwKHRoaXMucHJvcHMucXVlc3Rpb25zLCAocXVlc3Rpb24sIGluZGV4KSA9PiA8UXVlc3Rpb25MaXN0SXRlbSBrZXk9e2luZGV4XG5cdFx0XHR9IHtcblx0XHRcdFx0Li4uIHF1ZXN0aW9uXG5cdFx0XHR9IC8+KTsgXG5cdFx0XHQvLyBjcmVhdGVzIGEgbmV3IGFycmF5IHdpdGhvdXQgbXV0YXRpbmcgdGhlIGFycmF5LiBGb3IgZWFjaCB0b2RvLCBjcmVhdGUgYSBuZXcgdG9kbyBJdGVtLiBJbmRleCBpcyBhIHVuaXF1ZSBpZFxuXHRcdFx0Lypcblx0XHRcdFx0Li4uIHRvZG8gPT09IChpbiBFUzYpXG5cdFx0XHRcdHRhc2s9e3RvZG8udGFza31cblx0XHRcdFx0aXNDb21wbGV0ZWQ9e3RvZG8uaXNDb21wbGV0ZWR9XG5cdFx0XHQqL1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGFibGU+XG5cdFx0XHRcdDxRdWVzdGlvbkhlYWRlci8+XG5cdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJJdGVtcygpfVxuXHRcdFx0XHRcdDxidXR0b24gaWQ9XCJzdWJtaXRidXR0b25cIj5TdWJtaXQ8L2J1dHRvbj5cblx0XHRcdFx0PC90Ym9keT5cblx0XHRcdDwvdGFibGU+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvcXVlc3Rpb24uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9