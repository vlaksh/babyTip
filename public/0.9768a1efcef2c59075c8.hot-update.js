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
				isEditing: true,
				suggestions: suggestions
			};
			return _this;
		}
	
		_createClass(QuestionListItem, [{
			key: 'renderActionSection',
			value: function renderActionSection(index) {
				if (this.state.isEditing) {
					return _react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(
							'button',
							{ onClick: this.onSaveClick.bind(this, index) },
							'Save'
						),
						_react2.default.createElement(_suggestion2.default, {
							createSuggestion: this.createSuggestion.bind(this)
						})
					);
				}
	
				return _react2.default.createElement(
					'td',
					null,
					_react2.default.createElement(
						'button',
						{ onClick: this.onEditClick.bind(this, index) },
						'Edit'
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
					this.renderActionSection(this.props.index)
				);
			}
		}, {
			key: 'onEditClick',
			value: function onEditClick(index) {
				alert(index);
				this.setState({ isEditing: true });
			}
		}, {
			key: 'onSaveClick',
			value: function onSaveClick(index) {
				alert(index);
				this.setState({ isEditing: false });
				$("#suggestions").replaceWith($("#suggestions")[0].value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LWl0ZW0uanM/MjI1MyJdLCJuYW1lcyI6WyJzdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb24iLCJRdWVzdGlvbkxpc3RJdGVtIiwicHJvcHMiLCJzdGF0ZSIsImlzRWRpdGluZyIsImluZGV4Iiwib25TYXZlQ2xpY2siLCJiaW5kIiwiY3JlYXRlU3VnZ2VzdGlvbiIsIm9uRWRpdENsaWNrIiwicXVlc3Rpb24iLCJyZW5kZXJBY3Rpb25TZWN0aW9uIiwiYWxlcnQiLCJzZXRTdGF0ZSIsIiQiLCJyZXBsYWNlV2l0aCIsInZhbHVlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQSxLQUFNQSxjQUFjLENBQ3BCO0FBQ0NDLGNBQWE7QUFEZCxFQURvQixDQUFwQjs7S0FNcUJDLGdCOzs7QUFDcEIsNEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSUFDWkEsS0FEWTs7QUFHbEIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGVBQVcsSUFEQztBQUVaTDtBQUZZLElBQWI7QUFIa0I7QUFPbEI7Ozs7dUNBRW1CTSxLLEVBQU07QUFDekIsUUFBRyxLQUFLRixLQUFMLENBQVdDLFNBQWQsRUFBd0I7QUFDdkIsWUFDQztBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsU0FBUSxTQUFTLEtBQUtFLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLEVBQTRCRixLQUE1QixDQUFqQjtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQ0MseUJBQWtCLEtBQUtHLGdCQUFMLENBQXNCRCxJQUF0QixDQUEyQixJQUEzQjtBQURuQjtBQUZGLE1BREQ7QUFRQTs7QUFFRCxXQUNDO0FBQUE7QUFBQTtBQUNHO0FBQUE7QUFBQSxRQUFRLFNBQVMsS0FBS0UsV0FBTCxDQUFpQkYsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEJGLEtBQTVCLENBQWpCO0FBQUE7QUFBQSxNQURIO0FBRUc7QUFDQyx3QkFBa0IsS0FBS0csZ0JBQUwsQ0FBc0JELElBQXRCLENBQTJCLElBQTNCO0FBRG5CO0FBRkgsS0FERDtBQVNBOzs7NEJBRVE7QUFDUixXQUNFO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFLLFdBQUtMLEtBQUwsQ0FBV1E7QUFBaEIsTUFERDtBQUVFLFVBQUtDLG1CQUFMLENBQXlCLEtBQUtULEtBQUwsQ0FBV0csS0FBcEM7QUFGRixLQURGO0FBTUE7OzsrQkFFV0EsSyxFQUFPO0FBQ2pCTyxVQUFNUCxLQUFOO0FBQ0EsU0FBS1EsUUFBTCxDQUFjLEVBQUVULFdBQVcsSUFBYixFQUFkO0FBQ0Q7OzsrQkFFV0MsSyxFQUFPO0FBQ2pCTyxVQUFNUCxLQUFOO0FBQ0EsU0FBS1EsUUFBTCxDQUFjLEVBQUVULFdBQVcsS0FBYixFQUFkO0FBQ0FVLE1BQUUsY0FBRixFQUFrQkMsV0FBbEIsQ0FBK0JELEVBQUUsY0FBRixFQUFrQixDQUFsQixFQUFxQkUsS0FBcEQ7QUFDRDs7O29DQUVnQmhCLFUsRUFBWTtBQUM1QixTQUFLRyxLQUFMLENBQVdKLFdBQVgsQ0FBdUJrQixJQUF2QixDQUE0QjtBQUMzQmpCO0FBRDJCLEtBQTVCO0FBR0EsU0FBS2EsUUFBTCxDQUFjLEVBQUNkLGFBQWEsS0FBS0ksS0FBTCxDQUFXSixXQUF6QixFQUFkO0FBQ0FtQixZQUFRQyxHQUFSLENBQVksS0FBS2hCLEtBQUwsQ0FBV0osV0FBdkI7QUFDQTs7OztHQTNENEMsZ0JBQU1xQixTOzttQkFBL0JuQixnQiIsImZpbGUiOiIwLjk3NjhhMWVmY2VmMmM1OTA3NWM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN1Z2dlc3Rpb24gZnJvbSAnLi9zdWdnZXN0aW9uJztcblxuXG5jb25zdCBzdWdnZXN0aW9ucyA9IFtcbntcblx0c3VnZ2VzdGlvbiA6ICdzdWdnZXN0aW9uJ1xufVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25MaXN0SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlzRWRpdGluZzogdHJ1ZSxcblx0XHRcdHN1Z2dlc3Rpb25zXG5cdFx0fTtcblx0fVxuXG5cdHJlbmRlckFjdGlvblNlY3Rpb24oaW5kZXgpe1xuXHRcdGlmKHRoaXMuc3RhdGUuaXNFZGl0aW5nKXtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uU2F2ZUNsaWNrLmJpbmQodGhpcywgaW5kZXgpfT5TYXZlPC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8U3VnZ2VzdGlvblxuXHRcdFx0XHRcdFx0XHRjcmVhdGVTdWdnZXN0aW9uPXt0aGlzLmNyZWF0ZVN1Z2dlc3Rpb24uYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybihcblx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5vbkVkaXRDbGljay5iaW5kKHRoaXMsIGluZGV4KX0+RWRpdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PFN1Z2dlc3Rpb25cblx0XHRcdFx0XHRcdFx0Y3JlYXRlU3VnZ2VzdGlvbj17dGhpcy5jcmVhdGVTdWdnZXN0aW9uLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0PC90ZD5cblx0XHQpO1xuXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdDx0ZD57dGhpcy5wcm9wcy5xdWVzdGlvbn08L3RkPlxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlckFjdGlvblNlY3Rpb24odGhpcy5wcm9wcy5pbmRleCl9XG5cdFx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fVxuXG5cdG9uRWRpdENsaWNrKGluZGV4KSB7XG5cdFx0XHRhbGVydChpbmRleCk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgaXNFZGl0aW5nOiB0cnVlfSk7XG5cdH1cblxuXHRvblNhdmVDbGljayhpbmRleCkge1xuXHRcdFx0YWxlcnQoaW5kZXgpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzRWRpdGluZzogZmFsc2V9KTtcblx0XHRcdCQoXCIjc3VnZ2VzdGlvbnNcIikucmVwbGFjZVdpdGgoKCQoXCIjc3VnZ2VzdGlvbnNcIilbMF0udmFsdWUpKTtcblx0fVxuXG5cdGNyZWF0ZVN1Z2dlc3Rpb24oc3VnZ2VzdGlvbikge1xuXHRcdHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnMucHVzaCh7XG5cdFx0XHRzdWdnZXN0aW9uXG5cdFx0fSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c3VnZ2VzdGlvbnM6IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnN9KTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zKTtcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC1pdGVtLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==