webpackHotUpdate(0,{

/***/ 180:
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
	
	var Submit = function (_React$Component) {
		_inherits(Submit, _React$Component);
	
		function Submit() {
			_classCallCheck(this, Submit);
	
			return _possibleConstructorReturn(this, (Submit.__proto__ || Object.getPrototypeOf(Submit)).apply(this, arguments));
		}
	
		_createClass(Submit, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"form",
					{ onSubmit: this.handleSubmit.bind(this) },
					_react2.default.createElement(
						"table",
						null,
						_react2.default.createElement(
							"tr",
							null,
							_react2.default.createElement(
								"td",
								null,
								_react2.default.createElement(
									"button",
									{ id: "submitbutton", ref: "submitInput" },
									"Submit"
								)
							)
						)
					)
				);
			}
		}, {
			key: "handleSubmit",
			value: function handleSubmit(event) {
				event.preventDefault(); // prevent refresh on submit
				//console.log(this.refs.submitInput.value);
				//console.log(this.props.createSuggestion);
	
				alert($('html').html());
			}
		}]);
	
		return Submit;
	}(_react2.default.Component);
	
	exports.default = Submit;
	
	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/vlakshmanan/babyTips/src/components/submit.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/vlakshmanan/babyTips/src/components/submit.js"); } } })();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdWJtaXQuanM/OWExNCJdLCJuYW1lcyI6WyJTdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJiaW5kIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiJCIsImh0bWwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0tBRXFCQSxNOzs7Ozs7Ozs7Ozs0QkFFWDtBQUNSLFdBQ0M7QUFBQTtBQUFBLE9BQU0sVUFBVSxLQUFLQyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFoQjtBQUNBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxXQUFRLElBQUcsY0FBWCxFQUEwQixLQUFJLGFBQTlCO0FBQUE7QUFBQTtBQUFKO0FBQUo7QUFERjtBQURBLEtBREQ7QUFPQTs7O2dDQUVZQyxLLEVBQU87QUFDbkJBLFVBQU1DLGNBQU4sR0FEbUIsQ0FDSztBQUN4QjtBQUNBOztBQUVBQyxVQUFNQyxFQUFFLE1BQUYsRUFBVUMsSUFBVixFQUFOO0FBQ0E7Ozs7R0FsQmtDLGdCQUFNQyxTOzttQkFBckJSLE0iLCJmaWxlIjoiMC4yMmJjZTNmNDI3OGVmY2QxNDY3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VibWl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cblx0XHRcdDx0YWJsZT5cblx0XHRcdFx0XHQ8dHI+PHRkPjxidXR0b24gaWQ9XCJzdWJtaXRidXR0b25cIiByZWY9XCJzdWJtaXRJbnB1dFwiPlN1Ym1pdDwvYnV0dG9uPjwvdGQ+PC90cj5cblx0XHRcdDwvdGFibGU+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0KTtcblx0fVxuXG5cdGhhbmRsZVN1Ym1pdChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgcmVmcmVzaCBvbiBzdWJtaXRcblx0XHQvL2NvbnNvbGUubG9nKHRoaXMucmVmcy5zdWJtaXRJbnB1dC52YWx1ZSk7XG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzLnByb3BzLmNyZWF0ZVN1Z2dlc3Rpb24pO1xuXG5cdFx0YWxlcnQoJCgnaHRtbCcpLmh0bWwoKSk7XG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL3N1Ym1pdC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=