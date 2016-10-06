webpackHotUpdate(0,{

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var QuestionHeader = function (_React$Component) {
		_inherits(QuestionHeader, _React$Component);
	
		function QuestionHeader() {
			_classCallCheck(this, QuestionHeader);
	
			return _possibleConstructorReturn(this, (QuestionHeader.__proto__ || Object.getPrototypeOf(QuestionHeader)).apply(this, arguments));
		}
	
		_createClass(QuestionHeader, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"thead",
					null,
					_react2.default.createElement(
						"tr",
						null,
						_react2.default.createElement(
							"td",
							null,
							"Name"
						),
						_react2.default.createElement(
							"td",
							null,
							_react2.default.createElement("textarea", { type: "text", id: this.props.sindex, "class": "suggestions", placeholder: "My suggestion is..." })
						)
					)
				);
			}
		}]);
	
		return QuestionHeader;
	}(_react2.default.Component);
	
	exports.default = QuestionHeader;
	
	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/vlakshmanan/babyTips/src/components/question-header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/vlakshmanan/babyTips/src/components/question-header.js"); } } })();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi1oZWFkZXIuanM/OTMxZSJdLCJuYW1lcyI6WyJRdWVzdGlvbkhlYWRlciIsInByb3BzIiwic2luZGV4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztLQUVxQkEsYzs7Ozs7Ozs7Ozs7NEJBQ1g7QUFDUixXQUNFO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERDtBQUVDO0FBQUE7QUFBQTtBQUNDLG1EQUFVLE1BQUssTUFBZixFQUFzQixJQUFJLEtBQUtDLEtBQUwsQ0FBV0MsTUFBckMsRUFBNkMsU0FBTSxhQUFuRCxFQUFpRSxhQUFZLHFCQUE3RTtBQUREO0FBRkQ7QUFERCxLQURGO0FBVUE7Ozs7R0FaMEMsZ0JBQU1DLFM7O21CQUE3QkgsYyIsImZpbGUiOiIwLjk4OGRiN2U0ZTI3YmE3ZTUzNzhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvbkhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0PHRkPk5hbWU8L3RkPlxuXHRcdFx0XHRcdFx0PHRkPlx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgaWQ9e3RoaXMucHJvcHMuc2luZGV4fSBjbGFzcz1cInN1Z2dlc3Rpb25zXCIgcGxhY2Vob2xkZXI9XCJNeSBzdWdnZXN0aW9uIGlzLi4uXCIgLz5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90aGVhZD5cblx0XHQpO1xuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi1oZWFkZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9