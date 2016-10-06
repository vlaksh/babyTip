webpackHotUpdate(0,{

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _suggestion = __webpack_require__(179);
	
	var _suggestion2 = _interopRequireDefault(_suggestion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var suggestions = [{
		suggestion: 'suggestion'
	}];
	
	var QuestionListItem = function (_React$Component) {
		_inherits(QuestionListItem, _React$Component);
	
		function QuestionListItem(props) {
			_classCallCheck(this, QuestionListItem);
	
			var _this = _possibleConstructorReturn(this, (QuestionListItem.__proto__ || Object.getPrototypeOf(QuestionListItem)).call(this, props));
	
			_this.state = {
				isEditing: false,
				suggestions: suggestions
			};
			return _this;
		}
	
		_createClass(QuestionListItem, [{
			key: 'renderActionSection',
			value: function renderActionSection() {
				if (this.state.isEditing) {
					return _react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(
							'button',
							null,
							'Save'
						),
						_react2.default.createElement(
							'button',
							{ onClick: this.onSaveClick.bind(this) },
							'Cancel'
						)
					);
				}
	
				return _react2.default.createElement(
					'td',
					null,
					_react2.default.createElement(
						'button',
						{ onClick: this.onEditClick.bind(this) },
						'Edit'
					),
					_react2.default.createElement(
						'button',
						null,
						'Save'
					),
					_react2.default.createElement(_suggestion2.default, {
						createSuggestion: this.createSuggestion.bind(this)
					})
				);
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						this.props.question
					),
					this.renderActionSection()
				);
			}
		}, {
			key: 'onEditClick',
			value: function onEditClick() {
				this.setState({ isEditing: true });
			}
		}, {
			key: 'onSaveClick',
			value: function onSaveClick() {
				this.setState({ isEditing: false });
			}
		}, {
			key: 'createSuggestion',
			value: function createSuggestion(suggestion) {
				this.state.suggestions.push({
					suggestion: suggestion
				});
				this.setState({ suggestions: this.state.suggestions });
				console.log(this.state.suggestions);
			}
		}]);
	
		return QuestionListItem;
	}(_react2.default.Component);
	
	exports.default = QuestionListItem;
	
	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/vlakshmanan/babyTips/src/components/question-list-item.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/vlakshmanan/babyTips/src/components/question-list-item.js"); } } })();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LWl0ZW0uanM/MjI1MyJdLCJuYW1lcyI6WyJzdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb24iLCJRdWVzdGlvbkxpc3RJdGVtIiwicHJvcHMiLCJzdGF0ZSIsImlzRWRpdGluZyIsIm9uU2F2ZUNsaWNrIiwiYmluZCIsIm9uRWRpdENsaWNrIiwiY3JlYXRlU3VnZ2VzdGlvbiIsInF1ZXN0aW9uIiwicmVuZGVyQWN0aW9uU2VjdGlvbiIsInNldFN0YXRlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQSxLQUFNQSxjQUFjLENBQ3BCO0FBQ0NDLGNBQWE7QUFEZCxFQURvQixDQUFwQjs7S0FNcUJDLGdCOzs7QUFDcEIsNEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSUFDWkEsS0FEWTs7QUFHbEIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGVBQVcsS0FEQztBQUVaTDtBQUZZLElBQWI7QUFIa0I7QUFPbEI7Ozs7eUNBRW9CO0FBQ3BCLFFBQUcsS0FBS0ksS0FBTCxDQUFXQyxTQUFkLEVBQXdCO0FBQ3ZCLFlBQ0M7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBLFNBQVEsU0FBUyxLQUFLQyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFqQjtBQUFBO0FBQUE7QUFGRixNQUREO0FBTUE7O0FBRUQsV0FDQztBQUFBO0FBQUE7QUFDRztBQUFBO0FBQUEsUUFBUSxTQUFTLEtBQUtDLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQWpCO0FBQUE7QUFBQSxNQURIO0FBRUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZIO0FBR0c7QUFDQyx3QkFBa0IsS0FBS0UsZ0JBQUwsQ0FBc0JGLElBQXRCLENBQTJCLElBQTNCO0FBRG5CO0FBSEgsS0FERDtBQVVBOzs7NEJBRVE7QUFDUixXQUNFO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFLLFdBQUtKLEtBQUwsQ0FBV087QUFBaEIsTUFERDtBQUVFLFVBQUtDLG1CQUFMO0FBRkYsS0FERjtBQU1BOzs7aUNBRWE7QUFDWixTQUFLQyxRQUFMLENBQWMsRUFBRVAsV0FBVyxJQUFiLEVBQWQ7QUFDRDs7O2lDQUVhO0FBQ1osU0FBS08sUUFBTCxDQUFjLEVBQUVQLFdBQVcsS0FBYixFQUFkO0FBQ0Q7OztvQ0FFZ0JKLFUsRUFBWTtBQUM1QixTQUFLRyxLQUFMLENBQVdKLFdBQVgsQ0FBdUJhLElBQXZCLENBQTRCO0FBQzNCWjtBQUQyQixLQUE1QjtBQUdBLFNBQUtXLFFBQUwsQ0FBYyxFQUFDWixhQUFhLEtBQUtJLEtBQUwsQ0FBV0osV0FBekIsRUFBZDtBQUNBYyxZQUFRQyxHQUFSLENBQVksS0FBS1gsS0FBTCxDQUFXSixXQUF2QjtBQUNBOzs7O0dBdkQ0QyxnQkFBTWdCLFM7O21CQUEvQmQsZ0IiLCJmaWxlIjoiMC5jMmM0YjE0ZWE1NGZiODBhZTc2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdWdnZXN0aW9uIGZyb20gJy4vc3VnZ2VzdGlvbic7XG5cblxuY29uc3Qgc3VnZ2VzdGlvbnMgPSBbXG57XG5cdHN1Z2dlc3Rpb24gOiAnc3VnZ2VzdGlvbidcbn1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uTGlzdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpc0VkaXRpbmc6IGZhbHNlLFxuXHRcdFx0c3VnZ2VzdGlvbnNcblx0XHR9O1xuXHR9XG5cblx0cmVuZGVyQWN0aW9uU2VjdGlvbigpe1xuXHRcdGlmKHRoaXMuc3RhdGUuaXNFZGl0aW5nKXtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbj5TYXZlPC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25TYXZlQ2xpY2suYmluZCh0aGlzKX0+Q2FuY2VsPC9idXR0b24+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybihcblx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5vbkVkaXRDbGljay5iaW5kKHRoaXMpfT5FZGl0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uPlNhdmU8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxTdWdnZXN0aW9uXG5cdFx0XHRcdFx0XHRcdGNyZWF0ZVN1Z2dlc3Rpb249e3RoaXMuY3JlYXRlU3VnZ2VzdGlvbi5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdDwvdGQ+XG5cdFx0KTtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDx0cj5cblx0XHRcdFx0XHQ8dGQ+e3RoaXMucHJvcHMucXVlc3Rpb259PC90ZD5cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJBY3Rpb25TZWN0aW9uKCl9XG5cdFx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fVxuXG5cdG9uRWRpdENsaWNrKCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzRWRpdGluZzogdHJ1ZX0pO1xuXHR9XG5cblx0b25TYXZlQ2xpY2soKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgaXNFZGl0aW5nOiBmYWxzZX0pO1xuXHR9XG5cblx0Y3JlYXRlU3VnZ2VzdGlvbihzdWdnZXN0aW9uKSB7XG5cdFx0dGhpcy5zdGF0ZS5zdWdnZXN0aW9ucy5wdXNoKHtcblx0XHRcdHN1Z2dlc3Rpb25cblx0XHR9KTtcblx0XHR0aGlzLnNldFN0YXRlKHtzdWdnZXN0aW9uczogdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc30pO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnMpO1xuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LWl0ZW0uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9