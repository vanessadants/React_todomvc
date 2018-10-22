var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var TodoStore = /** @class */ (function () {
    function TodoStore() {
        this.todos = [];
        this.callbacks = [];
    }
    TodoStore.increment = function () {
        return this.i++;
    };
    TodoStore.prototype.inform = function () {
        var _this = this;
        this.callbacks.forEach(function (cb) { return cb(_this); });
    };
    TodoStore.prototype.onChange = function (cb) {
        this.callbacks.push(cb);
    };
    TodoStore.prototype.addTodo = function (title) {
        this.todos = [{
                id: TodoStore.increment(),
                title: title,
                completed: false
            }].concat(this.todos);
        this.inform();
    };
    TodoStore.prototype.removeTodo = function (todo) {
        this.todos = this.todos.filter(function (t) { return t != todo; });
        this.inform();
    };
    TodoStore.prototype.toggleTodo = function (todo) {
        console.log(this);
        this.todos = this.todos.map(function (t) { return t == todo ? __assign({}, t, { completed: !t.completed }) : t; });
        this.inform();
    };
    TodoStore.prototype.updateTitle = function (todo, title) {
        this.todos = this.todos.map(function (t) { return t == todo ? __assign({}, t, { title: title }) : t; });
        this.inform();
    };
    TodoStore.prototype.toggleAll = function (completed) {
        if (completed === void 0) { completed = true; }
        this.todos = this.todos.map(function (t) { return completed !== t.completed ? __assign({}, t, { completed: completed }) : t; });
        this.inform();
    };
    TodoStore.prototype.clearCompleted = function () {
        this.todos = this.todos.filter(function (t) { return !t.completed; });
        this.inform();
    };
    TodoStore.i = 0;
    return TodoStore;
}());
export default TodoStore;
//# sourceMappingURL=TodoStore.js.map