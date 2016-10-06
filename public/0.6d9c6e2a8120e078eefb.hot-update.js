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
						'//',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LWl0ZW0uanM/MjI1MyJdLCJuYW1lcyI6WyJzdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb24iLCJRdWVzdGlvbkxpc3RJdGVtIiwicHJvcHMiLCJzdGF0ZSIsImlzRWRpdGluZyIsInNpbmRleCIsImluZGV4IiwidGluZGV4Iiwib25TYXZlQ2xpY2siLCJiaW5kIiwiY3JlYXRlU3VnZ2VzdGlvbiIsIm9uRWRpdENsaWNrIiwicXVlc3Rpb24iLCJyZW5kZXJBY3Rpb25TZWN0aW9uIiwic2V0U3RhdGUiLCIkIiwiY3NzIiwidGV4dCIsInZhbHVlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQSxLQUFNQSxjQUFjLENBQ3BCO0FBQ0NDLGNBQWE7QUFEZCxFQURvQixDQUFwQjs7S0FNcUJDLGdCOzs7QUFDcEIsNEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSUFDWkEsS0FEWTs7QUFHbEIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGVBQVcsSUFEQztBQUVaQyxZQUFPLFlBQVUsTUFBS0gsS0FBTCxDQUFXSSxLQUZoQjtBQUdaQyxZQUFPLFNBQU8sTUFBS0wsS0FBTCxDQUFXSSxLQUhiO0FBSVpQO0FBSlksSUFBYjtBQUhrQjtBQVNsQjs7Ozt1Q0FFbUJPLEssRUFBTTtBQUN6QixRQUFHLEtBQUtILEtBQUwsQ0FBV0MsU0FBZCxFQUF3QjtBQUN2QixZQUNDO0FBQUE7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLFNBQVEsU0FBUyxLQUFLSSxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixFQUE0QkgsS0FBNUIsQ0FBakI7QUFBQTtBQUFBLE9BREo7QUFFRTtBQUNDLHlCQUFrQixLQUFLSSxnQkFBTCxDQUFzQkQsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FEbkI7QUFFQyxlQUFRLEtBQUtOLEtBQUwsQ0FBV0UsTUFGcEI7QUFHQyxlQUFRLEtBQUtGLEtBQUwsQ0FBV0k7QUFIcEI7QUFGRixNQUREO0FBVUE7O0FBRUQsV0FDQztBQUFBO0FBQUE7QUFDRztBQUFBO0FBQUEsUUFBUSxTQUFTLEtBQUtJLFdBQUwsQ0FBaUJGLElBQWpCLENBQXNCLElBQXRCLEVBQTRCSCxLQUE1QixDQUFqQjtBQUFBO0FBQUEsTUFESDtBQUVHO0FBQ0Msd0JBQWtCLEtBQUtJLGdCQUFMLENBQXNCRCxJQUF0QixDQUEyQixJQUEzQixDQURuQjtBQUVDLGNBQVEsS0FBS1AsS0FBTCxDQUFXRyxNQUZwQjtBQUdDLGNBQVEsS0FBS0YsS0FBTCxDQUFXSTtBQUhwQjtBQUZILEtBREQ7QUFXQTs7OzRCQUVRO0FBQ1IsV0FDRTtBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBSyxXQUFLTCxLQUFMLENBQVdVO0FBQWhCLE1BREQ7QUFFRSxVQUFLQyxtQkFBTCxDQUF5QixLQUFLWCxLQUFMLENBQVdJLEtBQXBDO0FBRkYsS0FERjtBQU1BOzs7K0JBRVdBLEssRUFBTztBQUNqQixTQUFLUSxRQUFMLENBQWMsRUFBRVYsV0FBVyxJQUFiLEVBQWQ7QUFDQVcsTUFBRSxhQUFXVCxLQUFiLEVBQW9CVSxHQUFwQixDQUF3QixTQUF4QixFQUFrQyxPQUFsQyxFQUZpQixDQUUwQjtBQUMzQ0QsTUFBRSxVQUFRVCxLQUFWLEVBQWlCVSxHQUFqQixDQUFxQixTQUFyQixFQUErQixNQUEvQjtBQUNEOzs7K0JBRVdWLEssRUFBTztBQUNqQixTQUFLUSxRQUFMLENBQWMsRUFBRVYsV0FBVyxLQUFiLEVBQWQ7QUFDQVcsTUFBRSxhQUFXVCxLQUFiLEVBQW9CVSxHQUFwQixDQUF3QixTQUF4QixFQUFrQyxNQUFsQyxFQUZpQixDQUV5QjtBQUMxQ0QsTUFBRSxVQUFRVCxLQUFWLEVBQWlCVyxJQUFqQixDQUFzQkYsRUFBRSxhQUFXVCxLQUFiLEVBQW9CLENBQXBCLEVBQXVCWSxLQUE3QztBQUNBSCxNQUFFLFVBQVFULEtBQVYsRUFBaUJVLEdBQWpCLENBQXFCLFNBQXJCLEVBQStCLE9BQS9CO0FBQ0Q7OztvQ0FFZ0JoQixVLEVBQVk7QUFDNUIsU0FBS0csS0FBTCxDQUFXSixXQUFYLENBQXVCb0IsSUFBdkIsQ0FBNEI7QUFDM0JuQjtBQUQyQixLQUE1QjtBQUdBLFNBQUtjLFFBQUwsQ0FBYyxFQUFDZixhQUFhLEtBQUtJLEtBQUwsQ0FBV0osV0FBekIsRUFBZDtBQUNBcUIsWUFBUUMsR0FBUixDQUFZLEtBQUtsQixLQUFMLENBQVdKLFdBQXZCO0FBQ0E7Ozs7R0FuRTRDLGdCQUFNdUIsUzs7bUJBQS9CckIsZ0IiLCJmaWxlIjoiMC42ZDljNmUyYTgxMjBlMDc4ZWVmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdWdnZXN0aW9uIGZyb20gJy4vc3VnZ2VzdGlvbic7XG5cblxuY29uc3Qgc3VnZ2VzdGlvbnMgPSBbXG57XG5cdHN1Z2dlc3Rpb24gOiAnc3VnZ2VzdGlvbidcbn1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uTGlzdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpc0VkaXRpbmc6IHRydWUsXG5cdFx0XHRzaW5kZXg6XCJzdWdnZXN0XCIrdGhpcy5wcm9wcy5pbmRleCxcblx0XHRcdHRpbmRleDpcInRleHRcIit0aGlzLnByb3BzLmluZGV4LFxuXHRcdFx0c3VnZ2VzdGlvbnNcblx0XHR9O1xuXHR9XG5cblx0cmVuZGVyQWN0aW9uU2VjdGlvbihpbmRleCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5pc0VkaXRpbmcpe1xuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHQvLzxidXR0b24gb25DbGljaz17dGhpcy5vblNhdmVDbGljay5iaW5kKHRoaXMsIGluZGV4KX0+U2F2ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PFN1Z2dlc3Rpb25cblx0XHRcdFx0XHRcdFx0Y3JlYXRlU3VnZ2VzdGlvbj17dGhpcy5jcmVhdGVTdWdnZXN0aW9uLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdHNpbmRleD17dGhpcy5zdGF0ZS5zaW5kZXh9XG5cdFx0XHRcdFx0XHRcdHRpbmRleD17dGhpcy5zdGF0ZS50aW5kZXh9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25FZGl0Q2xpY2suYmluZCh0aGlzLCBpbmRleCl9PkVkaXQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxTdWdnZXN0aW9uXG5cdFx0XHRcdFx0XHRcdGNyZWF0ZVN1Z2dlc3Rpb249e3RoaXMuY3JlYXRlU3VnZ2VzdGlvbi5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRzaW5kZXg9e3RoaXMucHJvcHMuc2luZGV4fVxuXHRcdFx0XHRcdFx0XHR0aW5kZXg9e3RoaXMuc3RhdGUudGluZGV4fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdDwvdGQ+XG5cdFx0KTtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDx0cj5cblx0XHRcdFx0XHQ8dGQ+e3RoaXMucHJvcHMucXVlc3Rpb259PC90ZD5cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJBY3Rpb25TZWN0aW9uKHRoaXMucHJvcHMuaW5kZXgpfVxuXHRcdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH1cblxuXHRvbkVkaXRDbGljayhpbmRleCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzRWRpdGluZzogdHJ1ZX0pO1xuXHRcdFx0JChcIiNzdWdnZXN0XCIraW5kZXgpLmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpOy8vcmVwbGFjZVdpdGgoKCQoXCIjc3VnZ2VzdFwiK2luZGV4KVswXS52YWx1ZSkpO1xuXHRcdFx0JChcIiN0ZXh0XCIraW5kZXgpLmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XG5cdH1cblxuXHRvblNhdmVDbGljayhpbmRleCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzRWRpdGluZzogZmFsc2V9KTtcblx0XHRcdCQoXCIjc3VnZ2VzdFwiK2luZGV4KS5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpOy8vcmVwbGFjZVdpdGgoKCQoXCIjc3VnZ2VzdFwiK2luZGV4KVswXS52YWx1ZSkpO1xuXHRcdFx0JChcIiN0ZXh0XCIraW5kZXgpLnRleHQoJChcIiNzdWdnZXN0XCIraW5kZXgpWzBdLnZhbHVlKTtcblx0XHRcdCQoXCIjdGV4dFwiK2luZGV4KS5jc3MoXCJkaXNwbGF5XCIsXCJibG9ja1wiKTtcblx0fVxuXG5cdGNyZWF0ZVN1Z2dlc3Rpb24oc3VnZ2VzdGlvbikge1xuXHRcdHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnMucHVzaCh7XG5cdFx0XHRzdWdnZXN0aW9uXG5cdFx0fSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c3VnZ2VzdGlvbnM6IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnN9KTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zKTtcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC1pdGVtLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==