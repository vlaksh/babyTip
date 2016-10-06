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
				var index = this.props.index;
				var suggestionName = "suggestions" + index;
				return _react2.default.createElement(
					"form",
					{ onSubmit: this.handleSubmit.bind(this) },
					_react2.default.createElement("textarea", { type: "text", id: this.props.index, "class": "suggestions", placeholder: "My suggestion is...",
						ref: "submitInput" }),
					_react2.default.createElement("div", null)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdWdnZXN0aW9uLmpzP2I3YWEiXSwibmFtZXMiOlsiU3VnZ2VzdGlvbiIsImluZGV4IiwicHJvcHMiLCJzdWdnZXN0aW9uTmFtZSIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlZnMiLCJzdWJtaXRJbnB1dCIsInZhbHVlIiwiY3JlYXRlU3VnZ2VzdGlvbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7S0FFcUJBLFU7Ozs7Ozs7Ozs7OzRCQUNYO0FBQ1IsUUFBSUMsUUFBUSxLQUFLQyxLQUFMLENBQVdELEtBQXZCO0FBQ0EsUUFBSUUsaUJBQWlCLGdCQUFjRixLQUFuQztBQUNBLFdBQ0U7QUFBQTtBQUFBLE9BQU0sVUFBVSxLQUFLRyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFoQjtBQUNDLGlEQUFVLE1BQUssTUFBZixFQUFzQixJQUFJLEtBQUtILEtBQUwsQ0FBV0QsS0FBckMsRUFBNEMsU0FBTSxhQUFsRCxFQUFnRSxhQUFZLHFCQUE1RTtBQUNDLFdBQUksYUFETCxHQUREO0FBR0M7QUFIRCxLQURGO0FBT0E7OztnQ0FDWUssSyxFQUFPO0FBQ25CQSxVQUFNQyxjQUFOLEdBRG1CLENBQ0s7QUFDeEJDLFlBQVFDLEdBQVIsQ0FBWSxLQUFLQyxJQUFMLENBQVVDLFdBQVYsQ0FBc0JDLEtBQWxDO0FBQ0FKLFlBQVFDLEdBQVIsQ0FBWSxLQUFLUCxLQUFMLENBQVdXLGdCQUF2Qjs7QUFFQSxTQUFLWCxLQUFMLENBQVdXLGdCQUFYLENBQTRCLEtBQUtILElBQUwsQ0FBVUMsV0FBVixDQUFzQkMsS0FBbEQ7QUFDQTs7OztHQWxCc0MsZ0JBQU1FLFM7O21CQUF6QmQsVSIsImZpbGUiOiIwLjM2ZGZmY2VmZjIyMDliZWVlMGM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWdnZXN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdHZhciBpbmRleCA9IHRoaXMucHJvcHMuaW5kZXg7XG5cdFx0dmFyIHN1Z2dlc3Rpb25OYW1lID0gXCJzdWdnZXN0aW9uc1wiK2luZGV4O1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHQ8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBpZD17dGhpcy5wcm9wcy5pbmRleH0gY2xhc3M9XCJzdWdnZXN0aW9uc1wiIHBsYWNlaG9sZGVyPVwiTXkgc3VnZ2VzdGlvbiBpcy4uLlwiIFxuXHRcdFx0XHRcdFx0cmVmPVwic3VibWl0SW5wdXRcIi8+XG5cdFx0XHRcdFx0PGRpdj48L2Rpdj5cdFxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0KTtcblx0fVxuXHRoYW5kbGVTdWJtaXQoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IHJlZnJlc2ggb24gc3VibWl0XG5cdFx0Y29uc29sZS5sb2codGhpcy5yZWZzLnN1Ym1pdElucHV0LnZhbHVlKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzLmNyZWF0ZVN1Z2dlc3Rpb24pO1xuXG5cdFx0dGhpcy5wcm9wcy5jcmVhdGVTdWdnZXN0aW9uKHRoaXMucmVmcy5zdWJtaXRJbnB1dC52YWx1ZSk7XG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL3N1Z2dlc3Rpb24uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9