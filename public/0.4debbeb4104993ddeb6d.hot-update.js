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
						{ onClick: this.onSaveClick.bind(this) },
						'Save'
					),
					_react2.default.createElement(
						'button',
						null,
						'Delete'
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
				$("#suggestions").replaceWith("#suggestions".value());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LWl0ZW0uanM/MjI1MyJdLCJuYW1lcyI6WyJzdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb24iLCJRdWVzdGlvbkxpc3RJdGVtIiwicHJvcHMiLCJzdGF0ZSIsImlzRWRpdGluZyIsIm9uU2F2ZUNsaWNrIiwiYmluZCIsImNyZWF0ZVN1Z2dlc3Rpb24iLCJxdWVzdGlvbiIsInJlbmRlckFjdGlvblNlY3Rpb24iLCJzZXRTdGF0ZSIsIiQiLCJyZXBsYWNlV2l0aCIsInZhbHVlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQSxLQUFNQSxjQUFjLENBQ3BCO0FBQ0NDLGNBQWE7QUFEZCxFQURvQixDQUFwQjs7S0FNcUJDLGdCOzs7QUFDcEIsNEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSUFDWkEsS0FEWTs7QUFHbEIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGVBQVcsS0FEQztBQUVaTDtBQUZZLElBQWI7QUFIa0I7QUFPbEI7Ozs7eUNBRW9CO0FBQ3BCLFFBQUcsS0FBS0ksS0FBTCxDQUFXQyxTQUFkLEVBQXdCO0FBQ3ZCLFlBQ0M7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBLFNBQVEsU0FBUyxLQUFLQyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFqQjtBQUFBO0FBQUE7QUFGRixNQUREO0FBTUE7O0FBRUQsV0FDQztBQUFBO0FBQUE7QUFDRztBQUFBO0FBQUEsUUFBUSxTQUFTLEtBQUtELFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQWpCO0FBQUE7QUFBQSxNQURIO0FBRUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZIO0FBR0c7QUFDQyx3QkFBa0IsS0FBS0MsZ0JBQUwsQ0FBc0JELElBQXRCLENBQTJCLElBQTNCO0FBRG5CO0FBSEgsS0FERDtBQVVBOzs7NEJBRVE7QUFDUixXQUNFO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFLLFdBQUtKLEtBQUwsQ0FBV007QUFBaEIsTUFERDtBQUVFLFVBQUtDLG1CQUFMO0FBRkYsS0FERjtBQU1BOzs7aUNBRWE7QUFDWixTQUFLQyxRQUFMLENBQWMsRUFBRU4sV0FBVyxJQUFiLEVBQWQ7QUFDRDs7O2lDQUVhO0FBQ1osU0FBS00sUUFBTCxDQUFjLEVBQUVOLFdBQVcsS0FBYixFQUFkO0FBQ0FPLE1BQUUsY0FBRixFQUFrQkMsV0FBbEIsQ0FBK0IsY0FBRCxDQUFpQkMsS0FBakIsRUFBOUI7QUFDRDs7O29DQUVnQmIsVSxFQUFZO0FBQzVCLFNBQUtHLEtBQUwsQ0FBV0osV0FBWCxDQUF1QmUsSUFBdkIsQ0FBNEI7QUFDM0JkO0FBRDJCLEtBQTVCO0FBR0EsU0FBS1UsUUFBTCxDQUFjLEVBQUNYLGFBQWEsS0FBS0ksS0FBTCxDQUFXSixXQUF6QixFQUFkO0FBQ0FnQixZQUFRQyxHQUFSLENBQVksS0FBS2IsS0FBTCxDQUFXSixXQUF2QjtBQUNBOzs7O0dBeEQ0QyxnQkFBTWtCLFM7O21CQUEvQmhCLGdCIiwiZmlsZSI6IjAuNGRlYmJlYjQxMDQ5OTNkZGViNmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3VnZ2VzdGlvbiBmcm9tICcuL3N1Z2dlc3Rpb24nO1xuXG5cbmNvbnN0IHN1Z2dlc3Rpb25zID0gW1xue1xuXHRzdWdnZXN0aW9uIDogJ3N1Z2dlc3Rpb24nXG59XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvbkxpc3RJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aXNFZGl0aW5nOiBmYWxzZSxcblx0XHRcdHN1Z2dlc3Rpb25zXG5cdFx0fTtcblx0fVxuXG5cdHJlbmRlckFjdGlvblNlY3Rpb24oKXtcblx0XHRpZih0aGlzLnN0YXRlLmlzRWRpdGluZyl7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdDxidXR0b24+U2F2ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uU2F2ZUNsaWNrLmJpbmQodGhpcyl9PkNhbmNlbDwvYnV0dG9uPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25TYXZlQ2xpY2suYmluZCh0aGlzKX0+U2F2ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbj5EZWxldGU8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxTdWdnZXN0aW9uXG5cdFx0XHRcdFx0XHRcdGNyZWF0ZVN1Z2dlc3Rpb249e3RoaXMuY3JlYXRlU3VnZ2VzdGlvbi5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdDwvdGQ+XG5cdFx0KTtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDx0cj5cblx0XHRcdFx0XHQ8dGQ+e3RoaXMucHJvcHMucXVlc3Rpb259PC90ZD5cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJBY3Rpb25TZWN0aW9uKCl9XG5cdFx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fVxuXG5cdG9uRWRpdENsaWNrKCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzRWRpdGluZzogdHJ1ZX0pO1xuXHR9XG5cblx0b25TYXZlQ2xpY2soKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgaXNFZGl0aW5nOiBmYWxzZX0pO1xuXHRcdFx0JChcIiNzdWdnZXN0aW9uc1wiKS5yZXBsYWNlV2l0aCgoXCIjc3VnZ2VzdGlvbnNcIikudmFsdWUoKSk7XG5cdH1cblxuXHRjcmVhdGVTdWdnZXN0aW9uKHN1Z2dlc3Rpb24pIHtcblx0XHR0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zLnB1c2goe1xuXHRcdFx0c3VnZ2VzdGlvblxuXHRcdH0pO1xuXHRcdHRoaXMuc2V0U3RhdGUoe3N1Z2dlc3Rpb25zOiB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zfSk7XG5cdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS5zdWdnZXN0aW9ucyk7XG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL3F1ZXN0aW9uLWxpc3QtaXRlbS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=