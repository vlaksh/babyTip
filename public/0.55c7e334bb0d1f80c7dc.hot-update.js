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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi1saXN0LWl0ZW0uanM/MjI1MyJdLCJuYW1lcyI6WyJzdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb24iLCJRdWVzdGlvbkxpc3RJdGVtIiwicHJvcHMiLCJzdGF0ZSIsImlzRWRpdGluZyIsInNpbmRleCIsImluZGV4IiwidGluZGV4Iiwib25TYXZlQ2xpY2siLCJiaW5kIiwiY3JlYXRlU3VnZ2VzdGlvbiIsIm9uRWRpdENsaWNrIiwicXVlc3Rpb24iLCJyZW5kZXJBY3Rpb25TZWN0aW9uIiwic2V0U3RhdGUiLCIkIiwic2hvdyIsImhpZGUiLCJjc3MiLCJ0ZXh0IiwidmFsdWUiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUdBLEtBQU1BLGNBQWMsQ0FDcEI7QUFDQ0MsY0FBYTtBQURkLEVBRG9CLENBQXBCOztLQU1xQkMsZ0I7OztBQUNwQiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1JQUNaQSxLQURZOztBQUdsQixTQUFLQyxLQUFMLEdBQWE7QUFDWkMsZUFBVyxJQURDO0FBRVpDLFlBQU8sWUFBVSxNQUFLSCxLQUFMLENBQVdJLEtBRmhCO0FBR1pDLFlBQU8sU0FBTyxNQUFLTCxLQUFMLENBQVdJLEtBSGI7QUFJWlA7QUFKWSxJQUFiO0FBSGtCO0FBU2xCOzs7O3VDQUVtQk8sSyxFQUFNO0FBQ3pCLFFBQUcsS0FBS0gsS0FBTCxDQUFXQyxTQUFkLEVBQXdCO0FBQ3ZCLFlBQ0M7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFNBQVEsU0FBUyxLQUFLSSxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixFQUE0QkgsS0FBNUIsQ0FBakI7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUNDLHlCQUFrQixLQUFLSSxnQkFBTCxDQUFzQkQsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FEbkI7QUFFQyxlQUFRLEtBQUtOLEtBQUwsQ0FBV0UsTUFGcEI7QUFHQyxlQUFRLEtBQUtGLEtBQUwsQ0FBV0k7QUFIcEI7QUFGRixNQUREO0FBVUE7O0FBRUQsV0FDQztBQUFBO0FBQUE7QUFDRztBQUFBO0FBQUEsUUFBUSxTQUFTLEtBQUtJLFdBQUwsQ0FBaUJGLElBQWpCLENBQXNCLElBQXRCLEVBQTRCSCxLQUE1QixDQUFqQjtBQUFBO0FBQUEsTUFESDtBQUVHO0FBQ0Msd0JBQWtCLEtBQUtJLGdCQUFMLENBQXNCRCxJQUF0QixDQUEyQixJQUEzQixDQURuQjtBQUVDLGNBQVEsS0FBS1AsS0FBTCxDQUFXRyxNQUZwQjtBQUdDLGNBQVEsS0FBS0YsS0FBTCxDQUFXSTtBQUhwQjtBQUZILEtBREQ7QUFXQTs7OzRCQUVRO0FBQ1IsV0FDRTtBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBSyxXQUFLTCxLQUFMLENBQVdVO0FBQWhCLE1BREQ7QUFFRSxVQUFLQyxtQkFBTCxDQUF5QixLQUFLWCxLQUFMLENBQVdJLEtBQXBDO0FBRkYsS0FERjtBQU1BOzs7K0JBRVdBLEssRUFBTztBQUNqQixTQUFLUSxRQUFMLENBQWMsRUFBRVYsV0FBVyxJQUFiLEVBQWQ7QUFDQVcsTUFBRSxhQUFXVCxLQUFiLEVBQW9CVSxJQUFwQixHQUZpQixDQUVVO0FBQzNCRCxNQUFFLFVBQVFULEtBQVYsRUFBaUJXLElBQWpCO0FBQ0Q7OzsrQkFFV1gsSyxFQUFPO0FBQ2pCLFNBQUtRLFFBQUwsQ0FBYyxFQUFFVixXQUFXLEtBQWIsRUFBZDtBQUNBVyxNQUFFLGFBQVdULEtBQWIsRUFBb0JZLEdBQXBCLENBQXdCLFNBQXhCLEVBQWtDLE1BQWxDLEVBRmlCLENBRXlCO0FBQzFDSCxNQUFFLFVBQVFULEtBQVYsRUFBaUJhLElBQWpCLENBQXNCSixFQUFFLGFBQVdULEtBQWIsRUFBb0IsQ0FBcEIsRUFBdUJjLEtBQTdDO0FBQ0FMLE1BQUUsVUFBUVQsS0FBVixFQUFpQlksR0FBakIsQ0FBcUIsU0FBckIsRUFBK0IsT0FBL0I7QUFDRDs7O29DQUVnQmxCLFUsRUFBWTtBQUM1QixTQUFLRyxLQUFMLENBQVdKLFdBQVgsQ0FBdUJzQixJQUF2QixDQUE0QjtBQUMzQnJCO0FBRDJCLEtBQTVCO0FBR0EsU0FBS2MsUUFBTCxDQUFjLEVBQUNmLGFBQWEsS0FBS0ksS0FBTCxDQUFXSixXQUF6QixFQUFkO0FBQ0F1QixZQUFRQyxHQUFSLENBQVksS0FBS3BCLEtBQUwsQ0FBV0osV0FBdkI7QUFDQTs7OztHQW5FNEMsZ0JBQU15QixTOzttQkFBL0J2QixnQiIsImZpbGUiOiIwLjU1YzdlMzM0YmIwZDFmODBjN2RjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN1Z2dlc3Rpb24gZnJvbSAnLi9zdWdnZXN0aW9uJztcblxuXG5jb25zdCBzdWdnZXN0aW9ucyA9IFtcbntcblx0c3VnZ2VzdGlvbiA6ICdzdWdnZXN0aW9uJ1xufVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25MaXN0SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlzRWRpdGluZzogdHJ1ZSxcblx0XHRcdHNpbmRleDpcInN1Z2dlc3RcIit0aGlzLnByb3BzLmluZGV4LFxuXHRcdFx0dGluZGV4OlwidGV4dFwiK3RoaXMucHJvcHMuaW5kZXgsXG5cdFx0XHRzdWdnZXN0aW9uc1xuXHRcdH07XG5cdH1cblxuXHRyZW5kZXJBY3Rpb25TZWN0aW9uKGluZGV4KXtcblx0XHRpZih0aGlzLnN0YXRlLmlzRWRpdGluZyl7XG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5vblNhdmVDbGljay5iaW5kKHRoaXMsIGluZGV4KX0+U2F2ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PFN1Z2dlc3Rpb25cblx0XHRcdFx0XHRcdFx0Y3JlYXRlU3VnZ2VzdGlvbj17dGhpcy5jcmVhdGVTdWdnZXN0aW9uLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdHNpbmRleD17dGhpcy5zdGF0ZS5zaW5kZXh9XG5cdFx0XHRcdFx0XHRcdHRpbmRleD17dGhpcy5zdGF0ZS50aW5kZXh9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25FZGl0Q2xpY2suYmluZCh0aGlzLCBpbmRleCl9PkVkaXQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxTdWdnZXN0aW9uXG5cdFx0XHRcdFx0XHRcdGNyZWF0ZVN1Z2dlc3Rpb249e3RoaXMuY3JlYXRlU3VnZ2VzdGlvbi5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRzaW5kZXg9e3RoaXMucHJvcHMuc2luZGV4fVxuXHRcdFx0XHRcdFx0XHR0aW5kZXg9e3RoaXMuc3RhdGUudGluZGV4fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdDwvdGQ+XG5cdFx0KTtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDx0cj5cblx0XHRcdFx0XHQ8dGQ+e3RoaXMucHJvcHMucXVlc3Rpb259PC90ZD5cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJBY3Rpb25TZWN0aW9uKHRoaXMucHJvcHMuaW5kZXgpfVxuXHRcdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH1cblxuXHRvbkVkaXRDbGljayhpbmRleCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzRWRpdGluZzogdHJ1ZX0pO1xuXHRcdFx0JChcIiNzdWdnZXN0XCIraW5kZXgpLnNob3coKTsvL3JlcGxhY2VXaXRoKCgkKFwiI3N1Z2dlc3RcIitpbmRleClbMF0udmFsdWUpKTtcblx0XHRcdCQoXCIjdGV4dFwiK2luZGV4KS5oaWRlKCk7XG5cdH1cblxuXHRvblNhdmVDbGljayhpbmRleCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzRWRpdGluZzogZmFsc2V9KTtcblx0XHRcdCQoXCIjc3VnZ2VzdFwiK2luZGV4KS5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpOy8vcmVwbGFjZVdpdGgoKCQoXCIjc3VnZ2VzdFwiK2luZGV4KVswXS52YWx1ZSkpO1xuXHRcdFx0JChcIiN0ZXh0XCIraW5kZXgpLnRleHQoJChcIiNzdWdnZXN0XCIraW5kZXgpWzBdLnZhbHVlKTtcblx0XHRcdCQoXCIjdGV4dFwiK2luZGV4KS5jc3MoXCJkaXNwbGF5XCIsXCJibG9ja1wiKTtcblx0fVxuXG5cdGNyZWF0ZVN1Z2dlc3Rpb24oc3VnZ2VzdGlvbikge1xuXHRcdHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnMucHVzaCh7XG5cdFx0XHRzdWdnZXN0aW9uXG5cdFx0fSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c3VnZ2VzdGlvbnM6IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnN9KTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zKTtcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC1pdGVtLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==