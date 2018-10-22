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
import TodoStore from './TodoStore';
import TodoItem from "./TodoItem";
import * as cx from 'classnames';
var Filters = {
    completed: function (todo) { return todo.completed; },
    active: function (todo) { return !todo.completed; },
    all: function (todo) { return true; }
};
var TodoList = /** @class */ (function (_super) {
    __extends(TodoList, _super);
    function TodoList(props) {
        var _this = _super.call(this, props) || this;
        _this.store = new TodoStore();
        _this.updateNewTodo = function (e) {
            _this.setState({ newTodo: e.target.value });
        };
        _this.addTodo = function (e) {
            if (e.key === 'Enter') {
                _this.store.addTodo(_this.state.newTodo);
                _this.setState({ newTodo: '' });
            }
        };
        _this.toggle = function (e) {
            //this.props.onToggle(this.props.todo)
            _this.store.toggleAll(_this.remainingCount > 0);
        };
        _this.setFilter = function (filter) {
            return function (e) {
                _this.setState({ filter: filter });
            };
        };
        _this.state = {
            todos: [],
            newTodo: '',
            filter: 'all'
        };
        _this.store.onChange(function (store) {
            _this.setState({ todos: store.todos });
        });
        _this.toggleTodo = _this.store.toggleTodo.bind(_this.store);
        _this.destroyTodo = _this.store.removeTodo.bind(_this.store);
        _this.updateTitle = _this.store.updateTitle.bind(_this.store);
        _this.clearCompleted = _this.store.clearCompleted.bind(_this.store);
        return _this;
    }
    Object.defineProperty(TodoList.prototype, "remainingCount", {
        get: function () {
            return this.state.todos.reduce(function (count, todo) { return !todo.completed ? count + 1 : count; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoList.prototype, "completedCount", {
        get: function () {
            return this.state.todos.reduce(function (count, todo) { return todo.completed ? count + 1 : count; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    TodoList.prototype.render = function () {
        var _this = this;
        var _a = this.state, todos = _a.todos, newTodo = _a.newTodo, filter = _a.filter;
        var todosFiltered = todos.filter(Filters[filter]);
        var remainingCount = this.remainingCount;
        var completedCount = this.completedCount;
        return React.createElement("section", { className: "todoapp" },
            React.createElement("header", { className: "header" },
                React.createElement("h1", null, "todos"),
                React.createElement("input", { className: "new-todo", value: newTodo, placeholder: "What needs to be done?", onKeyPress: this.addTodo, onInput: this.updateNewTodo })),
            React.createElement("section", { className: "main" },
                todos.length > 0 && React.createElement("input", { className: "toggle-all", type: "checkbox", checked: remainingCount === 0, onChange: this.toggle }),
                React.createElement("label", { htmlFor: "toggle-all" }, "Mark all as complete"),
                React.createElement("ul", { className: "todo-list" }, todosFiltered.map(function (todo) {
                    return React.createElement(TodoItem, { todo: todo, key: todo.id, onToggle: _this.toggleTodo, onDestroy: _this.destroyTodo, onUpdate: _this.updateTitle });
                }))),
            React.createElement("footer", { className: "footer" },
                remainingCount > 0 && React.createElement("span", { className: "todo-count" },
                    React.createElement("strong", null, remainingCount),
                    " item",
                    remainingCount > 1 && 's',
                    " left "),
                React.createElement("ul", { className: "filters" },
                    React.createElement("li", null,
                        React.createElement("a", { href: "#/", className: cx({ selected: filter === 'all' }), onClick: this.setFilter('all') }, "All")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#/active", className: cx({ selected: filter === 'active' }), onClick: this.setFilter('active') }, "Active")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#/completed", className: cx({ selected: filter === 'completed' }), onClick: this.setFilter('completed') }, "Completed"))),
                completedCount > 0 && React.createElement("button", { className: "clear-completed", onClick: this.clearCompleted }, "Clear completed")));
    };
    return TodoList;
}(React.PureComponent));
export default TodoList;
//# sourceMappingURL=TodoList.js.map