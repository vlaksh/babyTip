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
				tindex: "text" + _this.props.index,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LWl0ZW0uanM/MjI1MyJdLCJuYW1lcyI6WyJzdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb24iLCJRdWVzdGlvbkxpc3RJdGVtIiwicHJvcHMiLCJzdGF0ZSIsImlzRWRpdGluZyIsInNpbmRleCIsImluZGV4IiwidGluZGV4Iiwib25TYXZlQ2xpY2siLCJiaW5kIiwiY3JlYXRlU3VnZ2VzdGlvbiIsIm9uRWRpdENsaWNrIiwicXVlc3Rpb24iLCJyZW5kZXJBY3Rpb25TZWN0aW9uIiwic2V0U3RhdGUiLCIkIiwicmVwbGFjZVdpdGgiLCJ2YWx1ZSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0EsS0FBTUEsY0FBYyxDQUNwQjtBQUNDQyxjQUFhO0FBRGQsRUFEb0IsQ0FBcEI7O0tBTXFCQyxnQjs7O0FBQ3BCLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUlBQ1pBLEtBRFk7O0FBR2xCLFNBQUtDLEtBQUwsR0FBYTtBQUNaQyxlQUFXLElBREM7QUFFWkMsWUFBTyxZQUFVLE1BQUtILEtBQUwsQ0FBV0ksS0FGaEI7QUFHWkMsWUFBTyxTQUFPLE1BQUtMLEtBQUwsQ0FBV0ksS0FIYjtBQUlaUDtBQUpZLElBQWI7QUFIa0I7QUFTbEI7Ozs7dUNBRW1CTyxLLEVBQU07QUFDekIsUUFBRyxLQUFLSCxLQUFMLENBQVdDLFNBQWQsRUFBd0I7QUFDdkIsWUFDQztBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsU0FBUSxTQUFTLEtBQUtJLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLEVBQTRCSCxLQUE1QixDQUFqQjtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQ0MseUJBQWtCLEtBQUtJLGdCQUFMLENBQXNCRCxJQUF0QixDQUEyQixJQUEzQixDQURuQjtBQUVDLGVBQVEsS0FBS04sS0FBTCxDQUFXRTtBQUZwQjtBQUZGLE1BREQ7QUFTQTs7QUFFRCxXQUNDO0FBQUE7QUFBQTtBQUNHO0FBQUE7QUFBQSxRQUFRLFNBQVMsS0FBS00sV0FBTCxDQUFpQkYsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEJILEtBQTVCLENBQWpCO0FBQUE7QUFBQSxNQURIO0FBRUc7QUFDQyx3QkFBa0IsS0FBS0ksZ0JBQUwsQ0FBc0JELElBQXRCLENBQTJCLElBQTNCLENBRG5CO0FBRUMsY0FBUSxLQUFLUCxLQUFMLENBQVdJO0FBRnBCO0FBRkgsS0FERDtBQVVBOzs7NEJBRVE7QUFDUixXQUNFO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFLLFdBQUtKLEtBQUwsQ0FBV1U7QUFBaEIsTUFERDtBQUVFLFVBQUtDLG1CQUFMLENBQXlCLEtBQUtYLEtBQUwsQ0FBV0ksS0FBcEM7QUFGRixLQURGO0FBTUE7OzsrQkFFV0EsSyxFQUFPO0FBQ2pCLFNBQUtRLFFBQUwsQ0FBYyxFQUFFVixXQUFXLElBQWIsRUFBZDtBQUNEOzs7K0JBRVdFLEssRUFBTztBQUNqQixTQUFLUSxRQUFMLENBQWMsRUFBRVYsV0FBVyxLQUFiLEVBQWQ7QUFDQVcsTUFBRSxhQUFXVCxLQUFiLEVBQW9CVSxXQUFwQixDQUFpQ0QsRUFBRSxhQUFXVCxLQUFiLEVBQW9CLENBQXBCLEVBQXVCVyxLQUF4RDtBQUNEOzs7b0NBRWdCakIsVSxFQUFZO0FBQzVCLFNBQUtHLEtBQUwsQ0FBV0osV0FBWCxDQUF1Qm1CLElBQXZCLENBQTRCO0FBQzNCbEI7QUFEMkIsS0FBNUI7QUFHQSxTQUFLYyxRQUFMLENBQWMsRUFBQ2YsYUFBYSxLQUFLSSxLQUFMLENBQVdKLFdBQXpCLEVBQWQ7QUFDQW9CLFlBQVFDLEdBQVIsQ0FBWSxLQUFLakIsS0FBTCxDQUFXSixXQUF2QjtBQUNBOzs7O0dBN0Q0QyxnQkFBTXNCLFM7O21CQUEvQnBCLGdCIiwiZmlsZSI6IjAuYTJjODgwOTUzMTViNzg0NzNmYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3VnZ2VzdGlvbiBmcm9tICcuL3N1Z2dlc3Rpb24nO1xuXG5cbmNvbnN0IHN1Z2dlc3Rpb25zID0gW1xue1xuXHRzdWdnZXN0aW9uIDogJ3N1Z2dlc3Rpb24nXG59XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvbkxpc3RJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aXNFZGl0aW5nOiB0cnVlLFxuXHRcdFx0c2luZGV4Olwic3VnZ2VzdFwiK3RoaXMucHJvcHMuaW5kZXgsXG5cdFx0XHR0aW5kZXg6XCJ0ZXh0XCIrdGhpcy5wcm9wcy5pbmRleCxcblx0XHRcdHN1Z2dlc3Rpb25zXG5cdFx0fTtcblx0fVxuXG5cdHJlbmRlckFjdGlvblNlY3Rpb24oaW5kZXgpe1xuXHRcdGlmKHRoaXMuc3RhdGUuaXNFZGl0aW5nKXtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uU2F2ZUNsaWNrLmJpbmQodGhpcywgaW5kZXgpfT5TYXZlPC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8U3VnZ2VzdGlvblxuXHRcdFx0XHRcdFx0XHRjcmVhdGVTdWdnZXN0aW9uPXt0aGlzLmNyZWF0ZVN1Z2dlc3Rpb24uYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0c2luZGV4PXt0aGlzLnN0YXRlLnNpbmRleH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybihcblx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5vbkVkaXRDbGljay5iaW5kKHRoaXMsIGluZGV4KX0+RWRpdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PFN1Z2dlc3Rpb25cblx0XHRcdFx0XHRcdFx0Y3JlYXRlU3VnZ2VzdGlvbj17dGhpcy5jcmVhdGVTdWdnZXN0aW9uLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdHNpbmRleD17dGhpcy5wcm9wcy5pbmRleH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHQ8L3RkPlxuXHRcdCk7XG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0PHRkPnt0aGlzLnByb3BzLnF1ZXN0aW9ufTwvdGQ+XG5cdFx0XHRcdFx0e3RoaXMucmVuZGVyQWN0aW9uU2VjdGlvbih0aGlzLnByb3BzLmluZGV4KX1cblx0XHRcdFx0PC90cj5cblx0XHQpO1xuXHR9XG5cblx0b25FZGl0Q2xpY2soaW5kZXgpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpc0VkaXRpbmc6IHRydWV9KTtcblx0fVxuXG5cdG9uU2F2ZUNsaWNrKGluZGV4KSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgaXNFZGl0aW5nOiBmYWxzZX0pO1xuXHRcdFx0JChcIiNzdWdnZXN0XCIraW5kZXgpLnJlcGxhY2VXaXRoKCgkKFwiI3N1Z2dlc3RcIitpbmRleClbMF0udmFsdWUpKTtcblx0fVxuXG5cdGNyZWF0ZVN1Z2dlc3Rpb24oc3VnZ2VzdGlvbikge1xuXHRcdHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnMucHVzaCh7XG5cdFx0XHRzdWdnZXN0aW9uXG5cdFx0fSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c3VnZ2VzdGlvbnM6IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnN9KTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zKTtcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC1pdGVtLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==