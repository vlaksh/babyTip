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
				sindex: "suggest" + _this.props.index,
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
							createSuggestion: this.createSuggestion.bind(this),
							sindex: this.state.sindex
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
						createSuggestion: this.createSuggestion.bind(this),
						sindex: this.props.index
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
				this.setState({ isEditing: true });
			}
		}, {
			key: 'onSaveClick',
			value: function onSaveClick(index) {
				this.setState({ isEditing: false });
				$("#suggest" + index).replaceWith($("#suggest" + index)[0].value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LWl0ZW0uanM/MjI1MyJdLCJuYW1lcyI6WyJzdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb24iLCJRdWVzdGlvbkxpc3RJdGVtIiwicHJvcHMiLCJzdGF0ZSIsImlzRWRpdGluZyIsInNpbmRleCIsImluZGV4Iiwib25TYXZlQ2xpY2siLCJiaW5kIiwiY3JlYXRlU3VnZ2VzdGlvbiIsIm9uRWRpdENsaWNrIiwicXVlc3Rpb24iLCJyZW5kZXJBY3Rpb25TZWN0aW9uIiwic2V0U3RhdGUiLCIkIiwicmVwbGFjZVdpdGgiLCJ2YWx1ZSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0EsS0FBTUEsY0FBYyxDQUNwQjtBQUNDQyxjQUFhO0FBRGQsRUFEb0IsQ0FBcEI7O0tBTXFCQyxnQjs7O0FBQ3BCLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUlBQ1pBLEtBRFk7O0FBR2xCLFNBQUtDLEtBQUwsR0FBYTtBQUNaQyxlQUFXLElBREM7QUFFWkMsWUFBTyxZQUFVLE1BQUtILEtBQUwsQ0FBV0ksS0FGaEI7QUFHWlA7QUFIWSxJQUFiO0FBSGtCO0FBUWxCOzs7O3VDQUVtQk8sSyxFQUFNO0FBQ3pCLFFBQUcsS0FBS0gsS0FBTCxDQUFXQyxTQUFkLEVBQXdCO0FBQ3ZCLFlBQ0M7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFNBQVEsU0FBUyxLQUFLRyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixFQUE0QkYsS0FBNUIsQ0FBakI7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUNDLHlCQUFrQixLQUFLRyxnQkFBTCxDQUFzQkQsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FEbkI7QUFFQyxlQUFRLEtBQUtMLEtBQUwsQ0FBV0U7QUFGcEI7QUFGRixNQUREO0FBU0E7O0FBRUQsV0FDQztBQUFBO0FBQUE7QUFDRztBQUFBO0FBQUEsUUFBUSxTQUFTLEtBQUtLLFdBQUwsQ0FBaUJGLElBQWpCLENBQXNCLElBQXRCLEVBQTRCRixLQUE1QixDQUFqQjtBQUFBO0FBQUEsTUFESDtBQUVHO0FBQ0Msd0JBQWtCLEtBQUtHLGdCQUFMLENBQXNCRCxJQUF0QixDQUEyQixJQUEzQixDQURuQjtBQUVDLGNBQVEsS0FBS04sS0FBTCxDQUFXSTtBQUZwQjtBQUZILEtBREQ7QUFVQTs7OzRCQUVRO0FBQ1IsV0FDRTtBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBSyxXQUFLSixLQUFMLENBQVdTO0FBQWhCLE1BREQ7QUFFRSxVQUFLQyxtQkFBTCxDQUF5QixLQUFLVixLQUFMLENBQVdJLEtBQXBDO0FBRkYsS0FERjtBQU1BOzs7K0JBRVdBLEssRUFBTztBQUNqQixTQUFLTyxRQUFMLENBQWMsRUFBRVQsV0FBVyxJQUFiLEVBQWQ7QUFDRDs7OytCQUVXRSxLLEVBQU87QUFDakIsU0FBS08sUUFBTCxDQUFjLEVBQUVULFdBQVcsS0FBYixFQUFkO0FBQ0FVLE1BQUUsYUFBV1IsS0FBYixFQUFvQlMsV0FBcEIsQ0FBaUNELEVBQUUsYUFBV1IsS0FBYixFQUFvQixDQUFwQixFQUF1QlUsS0FBeEQ7QUFDRDs7O29DQUVnQmhCLFUsRUFBWTtBQUM1QixTQUFLRyxLQUFMLENBQVdKLFdBQVgsQ0FBdUJrQixJQUF2QixDQUE0QjtBQUMzQmpCO0FBRDJCLEtBQTVCO0FBR0EsU0FBS2EsUUFBTCxDQUFjLEVBQUNkLGFBQWEsS0FBS0ksS0FBTCxDQUFXSixXQUF6QixFQUFkO0FBQ0FtQixZQUFRQyxHQUFSLENBQVksS0FBS2hCLEtBQUwsQ0FBV0osV0FBdkI7QUFDQTs7OztHQTVENEMsZ0JBQU1xQixTOzttQkFBL0JuQixnQiIsImZpbGUiOiIwLjBmZWNkNGY5ZTQ3MzA4ZmNhMTc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN1Z2dlc3Rpb24gZnJvbSAnLi9zdWdnZXN0aW9uJztcblxuXG5jb25zdCBzdWdnZXN0aW9ucyA9IFtcbntcblx0c3VnZ2VzdGlvbiA6ICdzdWdnZXN0aW9uJ1xufVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25MaXN0SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlzRWRpdGluZzogdHJ1ZSxcblx0XHRcdHNpbmRleDpcInN1Z2dlc3RcIit0aGlzLnByb3BzLmluZGV4LFxuXHRcdFx0c3VnZ2VzdGlvbnNcblx0XHR9O1xuXHR9XG5cblx0cmVuZGVyQWN0aW9uU2VjdGlvbihpbmRleCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5pc0VkaXRpbmcpe1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25TYXZlQ2xpY2suYmluZCh0aGlzLCBpbmRleCl9PlNhdmU8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxTdWdnZXN0aW9uXG5cdFx0XHRcdFx0XHRcdGNyZWF0ZVN1Z2dlc3Rpb249e3RoaXMuY3JlYXRlU3VnZ2VzdGlvbi5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRzaW5kZXg9e3RoaXMuc3RhdGUuc2luZGV4fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC90ZD5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uRWRpdENsaWNrLmJpbmQodGhpcywgaW5kZXgpfT5FZGl0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8U3VnZ2VzdGlvblxuXHRcdFx0XHRcdFx0XHRjcmVhdGVTdWdnZXN0aW9uPXt0aGlzLmNyZWF0ZVN1Z2dlc3Rpb24uYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0c2luZGV4PXt0aGlzLnByb3BzLmluZGV4fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdDwvdGQ+XG5cdFx0KTtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDx0cj5cblx0XHRcdFx0XHQ8dGQ+e3RoaXMucHJvcHMucXVlc3Rpb259PC90ZD5cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJBY3Rpb25TZWN0aW9uKHRoaXMucHJvcHMuaW5kZXgpfVxuXHRcdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH1cblxuXHRvbkVkaXRDbGljayhpbmRleCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzRWRpdGluZzogdHJ1ZX0pO1xuXHR9XG5cblx0b25TYXZlQ2xpY2soaW5kZXgpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpc0VkaXRpbmc6IGZhbHNlfSk7XG5cdFx0XHQkKFwiI3N1Z2dlc3RcIitpbmRleCkucmVwbGFjZVdpdGgoKCQoXCIjc3VnZ2VzdFwiK2luZGV4KVswXS52YWx1ZSkpO1xuXHR9XG5cblx0Y3JlYXRlU3VnZ2VzdGlvbihzdWdnZXN0aW9uKSB7XG5cdFx0dGhpcy5zdGF0ZS5zdWdnZXN0aW9ucy5wdXNoKHtcblx0XHRcdHN1Z2dlc3Rpb25cblx0XHR9KTtcblx0XHR0aGlzLnNldFN0YXRlKHtzdWdnZXN0aW9uczogdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc30pO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnMpO1xuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LWl0ZW0uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9