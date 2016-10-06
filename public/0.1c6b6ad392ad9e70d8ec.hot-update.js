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
			value: function renderActionSection() {
				if (this.state.isEditing) {
					return _react2.default.createElement(
						'td',
						null,
						_react2.default.createElement(
							'button',
							{ onClick: this.onSaveClick.bind(this) },
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
						{ onClick: this.onEditClick.bind(this) },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LWl0ZW0uanM/MjI1MyJdLCJuYW1lcyI6WyJzdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb24iLCJRdWVzdGlvbkxpc3RJdGVtIiwicHJvcHMiLCJzdGF0ZSIsImlzRWRpdGluZyIsIm9uU2F2ZUNsaWNrIiwiYmluZCIsImNyZWF0ZVN1Z2dlc3Rpb24iLCJvbkVkaXRDbGljayIsInF1ZXN0aW9uIiwicmVuZGVyQWN0aW9uU2VjdGlvbiIsInNldFN0YXRlIiwiJCIsInJlcGxhY2VXaXRoIiwidmFsdWUiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBLEtBQU1BLGNBQWMsQ0FDcEI7QUFDQ0MsY0FBYTtBQURkLEVBRG9CLENBQXBCOztLQU1xQkMsZ0I7OztBQUNwQiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1JQUNaQSxLQURZOztBQUdsQixTQUFLQyxLQUFMLEdBQWE7QUFDWkMsZUFBVyxJQURDO0FBRVpMO0FBRlksSUFBYjtBQUhrQjtBQU9sQjs7Ozt5Q0FFb0I7QUFDcEIsUUFBRyxLQUFLSSxLQUFMLENBQVdDLFNBQWQsRUFBd0I7QUFDdkIsWUFDQztBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsU0FBUSxTQUFTLEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQWpCO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFDQyx5QkFBa0IsS0FBS0MsZ0JBQUwsQ0FBc0JELElBQXRCLENBQTJCLElBQTNCO0FBRG5CO0FBRkYsTUFERDtBQVFBOztBQUVELFdBQ0M7QUFBQTtBQUFBO0FBQ0c7QUFBQTtBQUFBLFFBQVEsU0FBUyxLQUFLRSxXQUFMLENBQWlCRixJQUFqQixDQUFzQixJQUF0QixDQUFqQjtBQUFBO0FBQUEsTUFESDtBQUVHO0FBQ0Msd0JBQWtCLEtBQUtDLGdCQUFMLENBQXNCRCxJQUF0QixDQUEyQixJQUEzQjtBQURuQjtBQUZILEtBREQ7QUFTQTs7OzRCQUVRO0FBQ1IsV0FDRTtBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBSyxXQUFLSixLQUFMLENBQVdPO0FBQWhCLE1BREQ7QUFFRSxVQUFLQyxtQkFBTDtBQUZGLEtBREY7QUFNQTs7O2lDQUVhO0FBQ1osU0FBS0MsUUFBTCxDQUFjLEVBQUVQLFdBQVcsSUFBYixFQUFkO0FBQ0Q7OztpQ0FFYTtBQUNaLFNBQUtPLFFBQUwsQ0FBYyxFQUFFUCxXQUFXLEtBQWIsRUFBZDtBQUNBUSxNQUFFLGNBQUYsRUFBa0JDLFdBQWxCLENBQStCRCxFQUFFLGNBQUYsRUFBa0IsQ0FBbEIsRUFBcUJFLEtBQXBEO0FBQ0Q7OztvQ0FFZ0JkLFUsRUFBWTtBQUM1QixTQUFLRyxLQUFMLENBQVdKLFdBQVgsQ0FBdUJnQixJQUF2QixDQUE0QjtBQUMzQmY7QUFEMkIsS0FBNUI7QUFHQSxTQUFLVyxRQUFMLENBQWMsRUFBQ1osYUFBYSxLQUFLSSxLQUFMLENBQVdKLFdBQXpCLEVBQWQ7QUFDQWlCLFlBQVFDLEdBQVIsQ0FBWSxLQUFLZCxLQUFMLENBQVdKLFdBQXZCO0FBQ0E7Ozs7R0F6RDRDLGdCQUFNbUIsUzs7bUJBQS9CakIsZ0IiLCJmaWxlIjoiMC4xYzZiNmFkMzkyYWQ5ZTcwZDhlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdWdnZXN0aW9uIGZyb20gJy4vc3VnZ2VzdGlvbic7XG5cblxuY29uc3Qgc3VnZ2VzdGlvbnMgPSBbXG57XG5cdHN1Z2dlc3Rpb24gOiAnc3VnZ2VzdGlvbidcbn1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uTGlzdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpc0VkaXRpbmc6IHRydWUsXG5cdFx0XHRzdWdnZXN0aW9uc1xuXHRcdH07XG5cdH1cblxuXHRyZW5kZXJBY3Rpb25TZWN0aW9uKCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5pc0VkaXRpbmcpe1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25TYXZlQ2xpY2suYmluZCh0aGlzKX0+U2F2ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PFN1Z2dlc3Rpb25cblx0XHRcdFx0XHRcdFx0Y3JlYXRlU3VnZ2VzdGlvbj17dGhpcy5jcmVhdGVTdWdnZXN0aW9uLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25FZGl0Q2xpY2suYmluZCh0aGlzKX0+RWRpdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PFN1Z2dlc3Rpb25cblx0XHRcdFx0XHRcdFx0Y3JlYXRlU3VnZ2VzdGlvbj17dGhpcy5jcmVhdGVTdWdnZXN0aW9uLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0PC90ZD5cblx0XHQpO1xuXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdDx0ZD57dGhpcy5wcm9wcy5xdWVzdGlvbn08L3RkPlxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlckFjdGlvblNlY3Rpb24oKX1cblx0XHRcdFx0PC90cj5cblx0XHQpO1xuXHR9XG5cblx0b25FZGl0Q2xpY2soKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgaXNFZGl0aW5nOiB0cnVlfSk7XG5cdH1cblxuXHRvblNhdmVDbGljaygpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpc0VkaXRpbmc6IGZhbHNlfSk7XG5cdFx0XHQkKFwiI3N1Z2dlc3Rpb25zXCIpLnJlcGxhY2VXaXRoKCgkKFwiI3N1Z2dlc3Rpb25zXCIpWzBdLnZhbHVlKSk7XG5cdH1cblxuXHRjcmVhdGVTdWdnZXN0aW9uKHN1Z2dlc3Rpb24pIHtcblx0XHR0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zLnB1c2goe1xuXHRcdFx0c3VnZ2VzdGlvblxuXHRcdH0pO1xuXHRcdHRoaXMuc2V0U3RhdGUoe3N1Z2dlc3Rpb25zOiB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zfSk7XG5cdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS5zdWdnZXN0aW9ucyk7XG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL3F1ZXN0aW9uLWxpc3QtaXRlbS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=