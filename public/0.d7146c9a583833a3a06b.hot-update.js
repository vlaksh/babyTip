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
							'td',
							null,
							_react2.default.createElement(
								'button',
								{ id: 'submitbutton' },
								'Submit'
							)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi5qcz9jZDg3Il0sIm5hbWVzIjpbIlF1ZXN0aW9uIiwibWFwIiwicHJvcHMiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsImluZGV4IiwicmVuZGVySXRlbXMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFcUJBLFE7Ozs7Ozs7Ozs7O2lDQUNOO0FBQ2IsV0FBTyxpQkFBRUMsR0FBRixDQUFNLEtBQUtDLEtBQUwsQ0FBV0MsU0FBakIsRUFBNEIsVUFBQ0MsUUFBRCxFQUFXQyxLQUFYO0FBQUEsWUFBcUIscUVBQWtCLEtBQUtBLEtBQXZCLElBRWxERCxRQUZrRCxFQUFyQjtBQUFBLEtBQTVCLENBQVA7QUFJQztBQUNBOzs7OztBQUtEOzs7NEJBRVE7QUFDUixXQUNDO0FBQUE7QUFBQTtBQUNDLGtFQUREO0FBRUM7QUFBQTtBQUFBO0FBQ0UsV0FBS0UsV0FBTCxFQURGO0FBRUM7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLFVBQVEsSUFBRyxjQUFYO0FBQUE7QUFBQTtBQUFKO0FBRkQ7QUFGRCxLQUREO0FBU0E7Ozs7R0F4Qm9DLGdCQUFNQyxTOzttQkFBdkJQLFEiLCJmaWxlIjoiMC5kNzE0NmM5YTU4MzgzM2EzYTA2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUXVlc3Rpb25IZWFkZXIgZnJvbSAnLi9xdWVzdGlvbi1oZWFkZXInXG5pbXBvcnQgUXVlc3Rpb25MaXN0SXRlbSBmcm9tICcuL3F1ZXN0aW9uLWxpc3QtaXRlbS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXJJdGVtcygpIHtcblx0XHRyZXR1cm4gXy5tYXAodGhpcy5wcm9wcy5xdWVzdGlvbnMsIChxdWVzdGlvbiwgaW5kZXgpID0+IDxRdWVzdGlvbkxpc3RJdGVtIGtleT17aW5kZXhcblx0XHRcdH0ge1xuXHRcdFx0XHQuLi4gcXVlc3Rpb25cblx0XHRcdH0gLz4pOyBcblx0XHRcdC8vIGNyZWF0ZXMgYSBuZXcgYXJyYXkgd2l0aG91dCBtdXRhdGluZyB0aGUgYXJyYXkuIEZvciBlYWNoIHRvZG8sIGNyZWF0ZSBhIG5ldyB0b2RvIEl0ZW0uIEluZGV4IGlzIGEgdW5pcXVlIGlkXG5cdFx0XHQvKlxuXHRcdFx0XHQuLi4gdG9kbyA9PT0gKGluIEVTNilcblx0XHRcdFx0dGFzaz17dG9kby50YXNrfVxuXHRcdFx0XHRpc0NvbXBsZXRlZD17dG9kby5pc0NvbXBsZXRlZH1cblx0XHRcdCovXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0YWJsZT5cblx0XHRcdFx0PFF1ZXN0aW9uSGVhZGVyLz5cblx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlckl0ZW1zKCl9XG5cdFx0XHRcdFx0PHRkPjxidXR0b24gaWQ9XCJzdWJtaXRidXR0b25cIj5TdWJtaXQ8L2J1dHRvbj48L3RkPlxuXHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0PC90YWJsZT5cblx0XHQpO1xuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=