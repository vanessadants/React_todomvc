var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as cx from 'classnames';
var TodoItem = /** @class */ (function (_super) {
    __extends(TodoItem, _super);
    function TodoItem(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = function () {
            _this.props.onToggle(_this.props.todo);
        };
        _this.destroy = function () {
            _this.props.onDestroy(_this.props.todo);
        };
        _this.startEditing = function (e) {
            _this.setState({ editing: true, title: _this.props.todo.title });
        };
        _this.handleSubmit = function () {
            _this.props.onUpdate(_this.props.todo, _this.state.title);
            _this.setState({ editing: false });
        };
        _this.handleKeyDown = function (e) {
            if (e.key === 'Escape') {
                _this.setState({ editing: false });
            }
            else if (e.key === 'Enter') {
                _this.handleSubmit();
            }
        };
        _this.handleInput = function (e) {
            _this.setState({ title: e.target.value });
        };
        _this.state = {
            editing: false,
            title: ''
        };
        return _this;
    }
    TodoItem.prototype.render = function () {
        var _a = this.props, todo = _a.todo, onDestroy = _a.onDestroy, onToggle = _a.onToggle;
        var _b = this.state, editing = _b.editing, title = _b.title;
        return React.createElement("li", { className: cx({ completed: todo.completed, editing: editing }) },
            React.createElement("div", { className: "view" },
                React.createElement("input", { className: "toggle", type: "checkbox", onChange: this.toggle, checked: todo.completed }),
                React.createElement("label", { onDoubleClick: this.startEditing }, todo.title),
                React.createElement("button", { className: "destroy", onClick: this.destroy })),
            React.createElement("input", { className: "edit", value: title, onBlur: this.handleSubmit, onKeyDown: this.handleKeyDown, onInput: this.handleInput, type: "text" }));
    };
    return TodoItem;
}(React.PureComponent));
export default TodoItem;
//# sourceMappingURL=TodoItem.js.map