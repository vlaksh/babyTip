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
				$("#suggest" + index).css("display", "block"); //replaceWith(($("#suggest"+index)[0].value));
				$("#text" + index).css("display", "none");
			}
		}, {
			key: 'onSaveClick',
			value: function onSaveClick(index) {
				this.setState({ isEditing: false });
				$("#suggest" + index).css("display", "none"); //replaceWith(($("#suggest"+index)[0].value));
				$("#text" + index).text($("#suggest" + index)[0].value);
				$("#text" + index).css("display", "block");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LWl0ZW0uanM/MjI1MyJdLCJuYW1lcyI6WyJzdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb24iLCJRdWVzdGlvbkxpc3RJdGVtIiwicHJvcHMiLCJzdGF0ZSIsImlzRWRpdGluZyIsInNpbmRleCIsImluZGV4IiwidGluZGV4Iiwib25TYXZlQ2xpY2siLCJiaW5kIiwiY3JlYXRlU3VnZ2VzdGlvbiIsIm9uRWRpdENsaWNrIiwicXVlc3Rpb24iLCJyZW5kZXJBY3Rpb25TZWN0aW9uIiwic2V0U3RhdGUiLCIkIiwiY3NzIiwidGV4dCIsInZhbHVlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQSxLQUFNQSxjQUFjLENBQ3BCO0FBQ0NDLGNBQWE7QUFEZCxFQURvQixDQUFwQjs7S0FNcUJDLGdCOzs7QUFDcEIsNEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSUFDWkEsS0FEWTs7QUFHbEIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGVBQVcsSUFEQztBQUVaQyxZQUFPLFlBQVUsTUFBS0gsS0FBTCxDQUFXSSxLQUZoQjtBQUdaQyxZQUFPLFNBQU8sTUFBS0wsS0FBTCxDQUFXSSxLQUhiO0FBSVpQO0FBSlksSUFBYjtBQUhrQjtBQVNsQjs7Ozt1Q0FFbUJPLEssRUFBTTtBQUN6QixRQUFHLEtBQUtILEtBQUwsQ0FBV0MsU0FBZCxFQUF3QjtBQUN2QixZQUNDO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxTQUFRLFNBQVMsS0FBS0ksV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEJILEtBQTVCLENBQWpCO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFDQyx5QkFBa0IsS0FBS0ksZ0JBQUwsQ0FBc0JELElBQXRCLENBQTJCLElBQTNCLENBRG5CO0FBRUMsZUFBUSxLQUFLTixLQUFMLENBQVdFLE1BRnBCO0FBR0MsZUFBUSxLQUFLRixLQUFMLENBQVdJO0FBSHBCO0FBRkYsTUFERDtBQVVBOztBQUVELFdBQ0M7QUFBQTtBQUFBO0FBQ0c7QUFBQTtBQUFBLFFBQVEsU0FBUyxLQUFLSSxXQUFMLENBQWlCRixJQUFqQixDQUFzQixJQUF0QixFQUE0QkgsS0FBNUIsQ0FBakI7QUFBQTtBQUFBLE1BREg7QUFFRztBQUNDLHdCQUFrQixLQUFLSSxnQkFBTCxDQUFzQkQsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FEbkI7QUFFQyxjQUFRLEtBQUtQLEtBQUwsQ0FBV0csTUFGcEI7QUFHQyxjQUFRLEtBQUtGLEtBQUwsQ0FBV0k7QUFIcEI7QUFGSCxLQUREO0FBV0E7Ozs0QkFFUTtBQUNSLFdBQ0U7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUssV0FBS0wsS0FBTCxDQUFXVTtBQUFoQixNQUREO0FBRUUsVUFBS0MsbUJBQUwsQ0FBeUIsS0FBS1gsS0FBTCxDQUFXSSxLQUFwQztBQUZGLEtBREY7QUFNQTs7OytCQUVXQSxLLEVBQU87QUFDakIsU0FBS1EsUUFBTCxDQUFjLEVBQUVWLFdBQVcsSUFBYixFQUFkO0FBQ0FXLE1BQUUsYUFBV1QsS0FBYixFQUFvQlUsR0FBcEIsQ0FBd0IsU0FBeEIsRUFBa0MsT0FBbEMsRUFGaUIsQ0FFMEI7QUFDM0NELE1BQUUsVUFBUVQsS0FBVixFQUFpQlUsR0FBakIsQ0FBcUIsU0FBckIsRUFBK0IsTUFBL0I7QUFDRDs7OytCQUVXVixLLEVBQU87QUFDakIsU0FBS1EsUUFBTCxDQUFjLEVBQUVWLFdBQVcsS0FBYixFQUFkO0FBQ0FXLE1BQUUsYUFBV1QsS0FBYixFQUFvQlUsR0FBcEIsQ0FBd0IsU0FBeEIsRUFBa0MsTUFBbEMsRUFGaUIsQ0FFeUI7QUFDMUNELE1BQUUsVUFBUVQsS0FBVixFQUFpQlcsSUFBakIsQ0FBc0JGLEVBQUUsYUFBV1QsS0FBYixFQUFvQixDQUFwQixFQUF1QlksS0FBN0M7QUFDQUgsTUFBRSxVQUFRVCxLQUFWLEVBQWlCVSxHQUFqQixDQUFxQixTQUFyQixFQUErQixPQUEvQjtBQUNEOzs7b0NBRWdCaEIsVSxFQUFZO0FBQzVCLFNBQUtHLEtBQUwsQ0FBV0osV0FBWCxDQUF1Qm9CLElBQXZCLENBQTRCO0FBQzNCbkI7QUFEMkIsS0FBNUI7QUFHQSxTQUFLYyxRQUFMLENBQWMsRUFBQ2YsYUFBYSxLQUFLSSxLQUFMLENBQVdKLFdBQXpCLEVBQWQ7QUFDQXFCLFlBQVFDLEdBQVIsQ0FBWSxLQUFLbEIsS0FBTCxDQUFXSixXQUF2QjtBQUNBOzs7O0dBbkU0QyxnQkFBTXVCLFM7O21CQUEvQnJCLGdCIiwiZmlsZSI6IjAuZDNkMzM3OTBiM2Q1NDhjZTI0OWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3VnZ2VzdGlvbiBmcm9tICcuL3N1Z2dlc3Rpb24nO1xuXG5cbmNvbnN0IHN1Z2dlc3Rpb25zID0gW1xue1xuXHRzdWdnZXN0aW9uIDogJ3N1Z2dlc3Rpb24nXG59XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvbkxpc3RJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aXNFZGl0aW5nOiB0cnVlLFxuXHRcdFx0c2luZGV4Olwic3VnZ2VzdFwiK3RoaXMucHJvcHMuaW5kZXgsXG5cdFx0XHR0aW5kZXg6XCJ0ZXh0XCIrdGhpcy5wcm9wcy5pbmRleCxcblx0XHRcdHN1Z2dlc3Rpb25zXG5cdFx0fTtcblx0fVxuXG5cdHJlbmRlckFjdGlvblNlY3Rpb24oaW5kZXgpe1xuXHRcdGlmKHRoaXMuc3RhdGUuaXNFZGl0aW5nKXtcblx0XHRcdHJldHVybihcblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uU2F2ZUNsaWNrLmJpbmQodGhpcywgaW5kZXgpfT5TYXZlPC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8U3VnZ2VzdGlvblxuXHRcdFx0XHRcdFx0XHRjcmVhdGVTdWdnZXN0aW9uPXt0aGlzLmNyZWF0ZVN1Z2dlc3Rpb24uYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0c2luZGV4PXt0aGlzLnN0YXRlLnNpbmRleH1cblx0XHRcdFx0XHRcdFx0dGluZGV4PXt0aGlzLnN0YXRlLnRpbmRleH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybihcblx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5vbkVkaXRDbGljay5iaW5kKHRoaXMsIGluZGV4KX0+RWRpdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PFN1Z2dlc3Rpb25cblx0XHRcdFx0XHRcdFx0Y3JlYXRlU3VnZ2VzdGlvbj17dGhpcy5jcmVhdGVTdWdnZXN0aW9uLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdHNpbmRleD17dGhpcy5wcm9wcy5zaW5kZXh9XG5cdFx0XHRcdFx0XHRcdHRpbmRleD17dGhpcy5zdGF0ZS50aW5kZXh9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0PC90ZD5cblx0XHQpO1xuXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdDx0ZD57dGhpcy5wcm9wcy5xdWVzdGlvbn08L3RkPlxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlckFjdGlvblNlY3Rpb24odGhpcy5wcm9wcy5pbmRleCl9XG5cdFx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fVxuXG5cdG9uRWRpdENsaWNrKGluZGV4KSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgaXNFZGl0aW5nOiB0cnVlfSk7XG5cdFx0XHQkKFwiI3N1Z2dlc3RcIitpbmRleCkuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7Ly9yZXBsYWNlV2l0aCgoJChcIiNzdWdnZXN0XCIraW5kZXgpWzBdLnZhbHVlKSk7XG5cdFx0XHQkKFwiI3RleHRcIitpbmRleCkuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcblx0fVxuXG5cdG9uU2F2ZUNsaWNrKGluZGV4KSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgaXNFZGl0aW5nOiBmYWxzZX0pO1xuXHRcdFx0JChcIiNzdWdnZXN0XCIraW5kZXgpLmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7Ly9yZXBsYWNlV2l0aCgoJChcIiNzdWdnZXN0XCIraW5kZXgpWzBdLnZhbHVlKSk7XG5cdFx0XHQkKFwiI3RleHRcIitpbmRleCkudGV4dCgkKFwiI3N1Z2dlc3RcIitpbmRleClbMF0udmFsdWUpO1xuXHRcdFx0JChcIiN0ZXh0XCIraW5kZXgpLmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpO1xuXHR9XG5cblx0Y3JlYXRlU3VnZ2VzdGlvbihzdWdnZXN0aW9uKSB7XG5cdFx0dGhpcy5zdGF0ZS5zdWdnZXN0aW9ucy5wdXNoKHtcblx0XHRcdHN1Z2dlc3Rpb25cblx0XHR9KTtcblx0XHR0aGlzLnNldFN0YXRlKHtzdWdnZXN0aW9uczogdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc30pO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnMpO1xuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LWl0ZW0uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9