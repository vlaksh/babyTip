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
							sindex: this.state.sindex,
							tindex: this.state.tindex
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
						sindex: this.props.sindex,
						tindex: this.state.tindex
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
				$("#suggest" + index).show(); //replaceWith(($("#suggest"+index)[0].value));
				$("#text" + index).hide();
			}
		}, {
			key: 'onSaveClick',
			value: function onSaveClick(index) {
				this.setState({ isEditing: false });
				$("#suggest" + index).hide(); //replaceWith(($("#suggest"+index)[0].value));
				$("#text" + index).innerHtml($("#suggest" + index)[0].value);
				$("#text" + index).show();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LWl0ZW0uanM/MjI1MyJdLCJuYW1lcyI6WyJzdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb24iLCJRdWVzdGlvbkxpc3RJdGVtIiwicHJvcHMiLCJzdGF0ZSIsImlzRWRpdGluZyIsInNpbmRleCIsImluZGV4IiwidGluZGV4Iiwib25TYXZlQ2xpY2siLCJiaW5kIiwiY3JlYXRlU3VnZ2VzdGlvbiIsIm9uRWRpdENsaWNrIiwicXVlc3Rpb24iLCJyZW5kZXJBY3Rpb25TZWN0aW9uIiwic2V0U3RhdGUiLCIkIiwic2hvdyIsImhpZGUiLCJpbm5lckh0bWwiLCJ2YWx1ZSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0EsS0FBTUEsY0FBYyxDQUNwQjtBQUNDQyxjQUFhO0FBRGQsRUFEb0IsQ0FBcEI7O0tBTXFCQyxnQjs7O0FBQ3BCLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUlBQ1pBLEtBRFk7O0FBR2xCLFNBQUtDLEtBQUwsR0FBYTtBQUNaQyxlQUFXLElBREM7QUFFWkMsWUFBTyxZQUFVLE1BQUtILEtBQUwsQ0FBV0ksS0FGaEI7QUFHWkMsWUFBTyxTQUFPLE1BQUtMLEtBQUwsQ0FBV0ksS0FIYjtBQUlaUDtBQUpZLElBQWI7QUFIa0I7QUFTbEI7Ozs7dUNBRW1CTyxLLEVBQU07QUFDekIsUUFBRyxLQUFLSCxLQUFMLENBQVdDLFNBQWQsRUFBd0I7QUFDdkIsWUFDQztBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsU0FBUSxTQUFTLEtBQUtJLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLEVBQTRCSCxLQUE1QixDQUFqQjtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQ0MseUJBQWtCLEtBQUtJLGdCQUFMLENBQXNCRCxJQUF0QixDQUEyQixJQUEzQixDQURuQjtBQUVDLGVBQVEsS0FBS04sS0FBTCxDQUFXRSxNQUZwQjtBQUdDLGVBQVEsS0FBS0YsS0FBTCxDQUFXSTtBQUhwQjtBQUZGLE1BREQ7QUFVQTs7QUFFRCxXQUNDO0FBQUE7QUFBQTtBQUNHO0FBQUE7QUFBQSxRQUFRLFNBQVMsS0FBS0ksV0FBTCxDQUFpQkYsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEJILEtBQTVCLENBQWpCO0FBQUE7QUFBQSxNQURIO0FBRUc7QUFDQyx3QkFBa0IsS0FBS0ksZ0JBQUwsQ0FBc0JELElBQXRCLENBQTJCLElBQTNCLENBRG5CO0FBRUMsY0FBUSxLQUFLUCxLQUFMLENBQVdHLE1BRnBCO0FBR0MsY0FBUSxLQUFLRixLQUFMLENBQVdJO0FBSHBCO0FBRkgsS0FERDtBQVdBOzs7NEJBRVE7QUFDUixXQUNFO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFLLFdBQUtMLEtBQUwsQ0FBV1U7QUFBaEIsTUFERDtBQUVFLFVBQUtDLG1CQUFMLENBQXlCLEtBQUtYLEtBQUwsQ0FBV0ksS0FBcEM7QUFGRixLQURGO0FBTUE7OzsrQkFFV0EsSyxFQUFPO0FBQ2pCLFNBQUtRLFFBQUwsQ0FBYyxFQUFFVixXQUFXLElBQWIsRUFBZDtBQUNBVyxNQUFFLGFBQVdULEtBQWIsRUFBb0JVLElBQXBCLEdBRmlCLENBRVU7QUFDM0JELE1BQUUsVUFBUVQsS0FBVixFQUFpQlcsSUFBakI7QUFDRDs7OytCQUVXWCxLLEVBQU87QUFDakIsU0FBS1EsUUFBTCxDQUFjLEVBQUVWLFdBQVcsS0FBYixFQUFkO0FBQ0FXLE1BQUUsYUFBV1QsS0FBYixFQUFvQlcsSUFBcEIsR0FGaUIsQ0FFVTtBQUMzQkYsTUFBRSxVQUFRVCxLQUFWLEVBQWlCWSxTQUFqQixDQUEyQkgsRUFBRSxhQUFXVCxLQUFiLEVBQW9CLENBQXBCLEVBQXVCYSxLQUFsRDtBQUNBSixNQUFFLFVBQVFULEtBQVYsRUFBaUJVLElBQWpCO0FBQ0Q7OztvQ0FFZ0JoQixVLEVBQVk7QUFDNUIsU0FBS0csS0FBTCxDQUFXSixXQUFYLENBQXVCcUIsSUFBdkIsQ0FBNEI7QUFDM0JwQjtBQUQyQixLQUE1QjtBQUdBLFNBQUtjLFFBQUwsQ0FBYyxFQUFDZixhQUFhLEtBQUtJLEtBQUwsQ0FBV0osV0FBekIsRUFBZDtBQUNBc0IsWUFBUUMsR0FBUixDQUFZLEtBQUtuQixLQUFMLENBQVdKLFdBQXZCO0FBQ0E7Ozs7R0FuRTRDLGdCQUFNd0IsUzs7bUJBQS9CdEIsZ0IiLCJmaWxlIjoiMC42MzE5NTYxMjdhNWUxN2YyNTIxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdWdnZXN0aW9uIGZyb20gJy4vc3VnZ2VzdGlvbic7XG5cblxuY29uc3Qgc3VnZ2VzdGlvbnMgPSBbXG57XG5cdHN1Z2dlc3Rpb24gOiAnc3VnZ2VzdGlvbidcbn1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uTGlzdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpc0VkaXRpbmc6IHRydWUsXG5cdFx0XHRzaW5kZXg6XCJzdWdnZXN0XCIrdGhpcy5wcm9wcy5pbmRleCxcblx0XHRcdHRpbmRleDpcInRleHRcIit0aGlzLnByb3BzLmluZGV4LFxuXHRcdFx0c3VnZ2VzdGlvbnNcblx0XHR9O1xuXHR9XG5cblx0cmVuZGVyQWN0aW9uU2VjdGlvbihpbmRleCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5pc0VkaXRpbmcpe1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25TYXZlQ2xpY2suYmluZCh0aGlzLCBpbmRleCl9PlNhdmU8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxTdWdnZXN0aW9uXG5cdFx0XHRcdFx0XHRcdGNyZWF0ZVN1Z2dlc3Rpb249e3RoaXMuY3JlYXRlU3VnZ2VzdGlvbi5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRzaW5kZXg9e3RoaXMuc3RhdGUuc2luZGV4fVxuXHRcdFx0XHRcdFx0XHR0aW5kZXg9e3RoaXMuc3RhdGUudGluZGV4fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC90ZD5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uRWRpdENsaWNrLmJpbmQodGhpcywgaW5kZXgpfT5FZGl0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8U3VnZ2VzdGlvblxuXHRcdFx0XHRcdFx0XHRjcmVhdGVTdWdnZXN0aW9uPXt0aGlzLmNyZWF0ZVN1Z2dlc3Rpb24uYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0c2luZGV4PXt0aGlzLnByb3BzLnNpbmRleH1cblx0XHRcdFx0XHRcdFx0dGluZGV4PXt0aGlzLnN0YXRlLnRpbmRleH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHQ8L3RkPlxuXHRcdCk7XG5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0PHRkPnt0aGlzLnByb3BzLnF1ZXN0aW9ufTwvdGQ+XG5cdFx0XHRcdFx0e3RoaXMucmVuZGVyQWN0aW9uU2VjdGlvbih0aGlzLnByb3BzLmluZGV4KX1cblx0XHRcdFx0PC90cj5cblx0XHQpO1xuXHR9XG5cblx0b25FZGl0Q2xpY2soaW5kZXgpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpc0VkaXRpbmc6IHRydWV9KTtcblx0XHRcdCQoXCIjc3VnZ2VzdFwiK2luZGV4KS5zaG93KCk7Ly9yZXBsYWNlV2l0aCgoJChcIiNzdWdnZXN0XCIraW5kZXgpWzBdLnZhbHVlKSk7XG5cdFx0XHQkKFwiI3RleHRcIitpbmRleCkuaGlkZSgpO1xuXHR9XG5cblx0b25TYXZlQ2xpY2soaW5kZXgpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpc0VkaXRpbmc6IGZhbHNlfSk7XG5cdFx0XHQkKFwiI3N1Z2dlc3RcIitpbmRleCkuaGlkZSgpOy8vcmVwbGFjZVdpdGgoKCQoXCIjc3VnZ2VzdFwiK2luZGV4KVswXS52YWx1ZSkpO1xuXHRcdFx0JChcIiN0ZXh0XCIraW5kZXgpLmlubmVySHRtbCgkKFwiI3N1Z2dlc3RcIitpbmRleClbMF0udmFsdWUpO1xuXHRcdFx0JChcIiN0ZXh0XCIraW5kZXgpLnNob3coKTtcblx0fVxuXG5cdGNyZWF0ZVN1Z2dlc3Rpb24oc3VnZ2VzdGlvbikge1xuXHRcdHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnMucHVzaCh7XG5cdFx0XHRzdWdnZXN0aW9uXG5cdFx0fSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c3VnZ2VzdGlvbnM6IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnN9KTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zKTtcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC1pdGVtLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==