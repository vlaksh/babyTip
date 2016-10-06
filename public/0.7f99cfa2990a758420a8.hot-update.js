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
					_react2.default.createElement("textarea", { type: "text", id: "suggestions", placeholder: "My suggestion is...",
						ref: "submitInput" })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdWdnZXN0aW9uLmpzP2I3YWEiXSwibmFtZXMiOlsiU3VnZ2VzdGlvbiIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlZnMiLCJzdWJtaXRJbnB1dCIsInZhbHVlIiwicHJvcHMiLCJjcmVhdGVTdWdnZXN0aW9uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztLQUVxQkEsVTs7Ozs7Ozs7Ozs7NEJBQ1g7QUFDUixXQUNFO0FBQUE7QUFBQSxPQUFNLFVBQVUsS0FBS0MsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBaEI7QUFDQyxpREFBVSxNQUFLLE1BQWYsRUFBc0IsSUFBRyxhQUF6QixFQUF1QyxhQUFZLHFCQUFuRDtBQUNDLFdBQUksYUFETDtBQURELEtBREY7QUFNQTs7O2dDQUNZQyxLLEVBQU87QUFDbkJBLFVBQU1DLGNBQU4sR0FEbUIsQ0FDSztBQUN4QkMsWUFBUUMsR0FBUixDQUFZLEtBQUtDLElBQUwsQ0FBVUMsV0FBVixDQUFzQkMsS0FBbEM7QUFDQUosWUFBUUMsR0FBUixDQUFZLEtBQUtJLEtBQUwsQ0FBV0MsZ0JBQXZCOztBQUVBLFNBQUtELEtBQUwsQ0FBV0MsZ0JBQVgsQ0FBNEIsS0FBS0osSUFBTCxDQUFVQyxXQUFWLENBQXNCQyxLQUFsRDtBQUNBOzs7O0dBZnNDLGdCQUFNRyxTOzttQkFBekJaLFUiLCJmaWxlIjoiMC43Zjk5Y2ZhMjk5MGE3NTg0MjBhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VnZ2VzdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0PHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzdWdnZXN0aW9uc1wiIHBsYWNlaG9sZGVyPVwiTXkgc3VnZ2VzdGlvbiBpcy4uLlwiIFxuXHRcdFx0XHRcdFx0cmVmPVwic3VibWl0SW5wdXRcIi8+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHQpO1xuXHR9XG5cdGhhbmRsZVN1Ym1pdChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgcmVmcmVzaCBvbiBzdWJtaXRcblx0XHRjb25zb2xlLmxvZyh0aGlzLnJlZnMuc3VibWl0SW5wdXQudmFsdWUpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMuY3JlYXRlU3VnZ2VzdGlvbik7XG5cblx0XHR0aGlzLnByb3BzLmNyZWF0ZVN1Z2dlc3Rpb24odGhpcy5yZWZzLnN1Ym1pdElucHV0LnZhbHVlKTtcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvc3VnZ2VzdGlvbi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=