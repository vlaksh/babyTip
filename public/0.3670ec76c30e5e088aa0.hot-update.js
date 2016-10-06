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
							index: this.state.sindex
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
						index: this.props.index
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
				debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LWl0ZW0uanM/MjI1MyJdLCJuYW1lcyI6WyJzdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb24iLCJRdWVzdGlvbkxpc3RJdGVtIiwicHJvcHMiLCJzdGF0ZSIsImlzRWRpdGluZyIsInNpbmRleCIsImluZGV4Iiwib25TYXZlQ2xpY2siLCJiaW5kIiwiY3JlYXRlU3VnZ2VzdGlvbiIsIm9uRWRpdENsaWNrIiwicXVlc3Rpb24iLCJyZW5kZXJBY3Rpb25TZWN0aW9uIiwiYWxlcnQiLCJzZXRTdGF0ZSIsIiQiLCJyZXBsYWNlV2l0aCIsInZhbHVlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQSxLQUFNQSxjQUFjLENBQ3BCO0FBQ0NDLGNBQWE7QUFEZCxFQURvQixDQUFwQjs7S0FNcUJDLGdCOzs7QUFDcEIsNEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSUFDWkEsS0FEWTs7QUFHbEIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGVBQVcsSUFEQztBQUVaQyxZQUFPLFlBQVUsTUFBS0gsS0FBTCxDQUFXSSxLQUZoQjtBQUdaUDtBQUhZLElBQWI7QUFIa0I7QUFRbEI7Ozs7dUNBRW1CTyxLLEVBQU07QUFDekIsUUFBRyxLQUFLSCxLQUFMLENBQVdDLFNBQWQsRUFBd0I7QUFDdkIsWUFDQztBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsU0FBUSxTQUFTLEtBQUtHLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLEVBQTRCRixLQUE1QixDQUFqQjtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQ0MseUJBQWtCLEtBQUtHLGdCQUFMLENBQXNCRCxJQUF0QixDQUEyQixJQUEzQixDQURuQjtBQUVDLGNBQU8sS0FBS0wsS0FBTCxDQUFXRTtBQUZuQjtBQUZGLE1BREQ7QUFTQTs7QUFFRCxXQUNDO0FBQUE7QUFBQTtBQUNHO0FBQUE7QUFBQSxRQUFRLFNBQVMsS0FBS0ssV0FBTCxDQUFpQkYsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEJGLEtBQTVCLENBQWpCO0FBQUE7QUFBQSxNQURIO0FBRUc7QUFDQyx3QkFBa0IsS0FBS0csZ0JBQUwsQ0FBc0JELElBQXRCLENBQTJCLElBQTNCLENBRG5CO0FBRUMsYUFBTyxLQUFLTixLQUFMLENBQVdJO0FBRm5CO0FBRkgsS0FERDtBQVVBOzs7NEJBRVE7QUFDUixXQUNFO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFLLFdBQUtKLEtBQUwsQ0FBV1M7QUFBaEIsTUFERDtBQUVFLFVBQUtDLG1CQUFMLENBQXlCLEtBQUtWLEtBQUwsQ0FBV0ksS0FBcEM7QUFGRixLQURGO0FBTUE7OzsrQkFFV0EsSyxFQUFPO0FBQ2pCTyxVQUFNUCxLQUFOO0FBQ0EsU0FBS1EsUUFBTCxDQUFjLEVBQUVWLFdBQVcsSUFBYixFQUFkO0FBQ0Q7OzsrQkFFV0UsSyxFQUFPO0FBQ2pCTyxVQUFNUCxLQUFOO0FBQ0EsU0FBS1EsUUFBTCxDQUFjLEVBQUVWLFdBQVcsS0FBYixFQUFkO0FBQ0E7QUFDQVcsTUFBRSxhQUFXVCxLQUFiLEVBQW9CVSxXQUFwQixDQUFpQ0QsRUFBRSxhQUFXVCxLQUFiLEVBQW9CLENBQXBCLEVBQXVCVyxLQUF4RDtBQUNEOzs7b0NBRWdCakIsVSxFQUFZO0FBQzVCLFNBQUtHLEtBQUwsQ0FBV0osV0FBWCxDQUF1Qm1CLElBQXZCLENBQTRCO0FBQzNCbEI7QUFEMkIsS0FBNUI7QUFHQSxTQUFLYyxRQUFMLENBQWMsRUFBQ2YsYUFBYSxLQUFLSSxLQUFMLENBQVdKLFdBQXpCLEVBQWQ7QUFDQW9CLFlBQVFDLEdBQVIsQ0FBWSxLQUFLakIsS0FBTCxDQUFXSixXQUF2QjtBQUNBOzs7O0dBL0Q0QyxnQkFBTXNCLFM7O21CQUEvQnBCLGdCIiwiZmlsZSI6IjAuMzY3MGVjNzZjMzBlNWUwODhhYTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3VnZ2VzdGlvbiBmcm9tICcuL3N1Z2dlc3Rpb24nO1xuXG5cbmNvbnN0IHN1Z2dlc3Rpb25zID0gW1xue1xuXHRzdWdnZXN0aW9uIDogJ3N1Z2dlc3Rpb24nXG59XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvbkxpc3RJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aXNFZGl0aW5nOiB0cnVlLFxuXHRcdFx0c2luZGV4Olwic3VnZ2VzdFwiK3RoaXMucHJvcHMuaW5kZXgsXG5cdFx0XHRzdWdnZXN0aW9uc1xuXHRcdH07XG5cdH1cblxuXHRyZW5kZXJBY3Rpb25TZWN0aW9uKGluZGV4KXtcblx0XHRpZih0aGlzLnN0YXRlLmlzRWRpdGluZyl7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5vblNhdmVDbGljay5iaW5kKHRoaXMsIGluZGV4KX0+U2F2ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PFN1Z2dlc3Rpb25cblx0XHRcdFx0XHRcdFx0Y3JlYXRlU3VnZ2VzdGlvbj17dGhpcy5jcmVhdGVTdWdnZXN0aW9uLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdGluZGV4PXt0aGlzLnN0YXRlLnNpbmRleH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybihcblx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5vbkVkaXRDbGljay5iaW5kKHRoaXMsIGluZGV4KX0+RWRpdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PFN1Z2dlc3Rpb25cblx0XHRcdFx0XHRcdFx0Y3JlYXRlU3VnZ2VzdGlvbj17dGhpcy5jcmVhdGVTdWdnZXN0aW9uLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdGluZGV4PXt0aGlzLnByb3BzLmluZGV4fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdDwvdGQ+XG5cdFx0KTtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDx0cj5cblx0XHRcdFx0XHQ8dGQ+e3RoaXMucHJvcHMucXVlc3Rpb259PC90ZD5cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJBY3Rpb25TZWN0aW9uKHRoaXMucHJvcHMuaW5kZXgpfVxuXHRcdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH1cblxuXHRvbkVkaXRDbGljayhpbmRleCkge1xuXHRcdFx0YWxlcnQoaW5kZXgpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzRWRpdGluZzogdHJ1ZX0pO1xuXHR9XG5cblx0b25TYXZlQ2xpY2soaW5kZXgpIHtcblx0XHRcdGFsZXJ0KGluZGV4KTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpc0VkaXRpbmc6IGZhbHNlfSk7XG5cdFx0XHRkZWJ1Z2dlcjtcblx0XHRcdCQoXCIjc3VnZ2VzdFwiK2luZGV4KS5yZXBsYWNlV2l0aCgoJChcIiNzdWdnZXN0XCIraW5kZXgpWzBdLnZhbHVlKSk7XG5cdH1cblxuXHRjcmVhdGVTdWdnZXN0aW9uKHN1Z2dlc3Rpb24pIHtcblx0XHR0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zLnB1c2goe1xuXHRcdFx0c3VnZ2VzdGlvblxuXHRcdH0pO1xuXHRcdHRoaXMuc2V0U3RhdGUoe3N1Z2dlc3Rpb25zOiB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zfSk7XG5cdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS5zdWdnZXN0aW9ucyk7XG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL3F1ZXN0aW9uLWxpc3QtaXRlbS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=