webpackHotUpdate(0,{

/***/ 179:
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
	
	var Suggestion = function (_React$Component) {
		_inherits(Suggestion, _React$Component);
	
		function Suggestion() {
			_classCallCheck(this, Suggestion);
	
			return _possibleConstructorReturn(this, (Suggestion.__proto__ || Object.getPrototypeOf(Suggestion)).apply(this, arguments));
		}
	
		_createClass(Suggestion, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"form",
					{ onSubmit: this.handleSubmit.bind(this) },
					_react2.default.createElement("input", { type: "", "class": "suggestions", placeholder: "My suggestion is...",
						ref: "submitInput" }),
					_react2.default.createElement(
						"button",
						null,
						"Submit"
					)
				);
			}
		}, {
			key: "handleSubmit",
			value: function handleSubmit(event) {
				event.preventDefault(); // prevent refresh on submit
				console.log(this.refs.submitInput.value);
				console.log(this.props.createSuggestion);
	
				this.props.createSuggestion(this.refs.submitInput.value);
			}
		}]);
	
		return Suggestion;
	}(_react2.default.Component);
	
	exports.default = Suggestion;
	
	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/vlakshmanan/babyTips/src/components/suggestion.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/vlakshmanan/babyTips/src/components/suggestion.js"); } } })();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdWdnZXN0aW9uLmpzP2I3YWEiXSwibmFtZXMiOlsiU3VnZ2VzdGlvbiIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlZnMiLCJzdWJtaXRJbnB1dCIsInZhbHVlIiwicHJvcHMiLCJjcmVhdGVTdWdnZXN0aW9uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztLQUVxQkEsVTs7Ozs7Ozs7Ozs7NEJBQ1g7QUFDUixXQUNFO0FBQUE7QUFBQSxPQUFNLFVBQVUsS0FBS0MsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBaEI7QUFDQyw4Q0FBTyxNQUFLLEVBQVosRUFBZSxTQUFNLGFBQXJCLEVBQW1DLGFBQVkscUJBQS9DO0FBQ0MsV0FBSSxhQURMLEdBREQ7QUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEQsS0FERjtBQU9BOzs7Z0NBQ1lDLEssRUFBTztBQUNuQkEsVUFBTUMsY0FBTixHQURtQixDQUNLO0FBQ3hCQyxZQUFRQyxHQUFSLENBQVksS0FBS0MsSUFBTCxDQUFVQyxXQUFWLENBQXNCQyxLQUFsQztBQUNBSixZQUFRQyxHQUFSLENBQVksS0FBS0ksS0FBTCxDQUFXQyxnQkFBdkI7O0FBRUEsU0FBS0QsS0FBTCxDQUFXQyxnQkFBWCxDQUE0QixLQUFLSixJQUFMLENBQVVDLFdBQVYsQ0FBc0JDLEtBQWxEO0FBQ0E7Ozs7R0FoQnNDLGdCQUFNRyxTOzttQkFBekJaLFUiLCJmaWxlIjoiMC44MzE1OTcwMGIwYjc2MDc5NjQzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VnZ2VzdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJcIiBjbGFzcz1cInN1Z2dlc3Rpb25zXCIgcGxhY2Vob2xkZXI9XCJNeSBzdWdnZXN0aW9uIGlzLi4uXCIgXG5cdFx0XHRcdFx0XHRyZWY9XCJzdWJtaXRJbnB1dFwiLz5cblx0XHRcdFx0XHQ8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0KTtcblx0fVxuXHRoYW5kbGVTdWJtaXQoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IHJlZnJlc2ggb24gc3VibWl0XG5cdFx0Y29uc29sZS5sb2codGhpcy5yZWZzLnN1Ym1pdElucHV0LnZhbHVlKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzLmNyZWF0ZVN1Z2dlc3Rpb24pO1xuXG5cdFx0dGhpcy5wcm9wcy5jcmVhdGVTdWdnZXN0aW9uKHRoaXMucmVmcy5zdWJtaXRJbnB1dC52YWx1ZSk7XG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL3N1Z2dlc3Rpb24uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9