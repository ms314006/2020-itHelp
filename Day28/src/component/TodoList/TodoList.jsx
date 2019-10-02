"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var prop_types_1 = __importDefault(require("prop-types"));
var todolist_1 = require("../../action/todolist");
var Task = function (props) {
    var task = props.task;
    return (<li>
      <react_router_dom_1.Link to={"/list/" + task}>
        {task}
      </react_router_dom_1.Link>
    </li>);
};
Task.propTypes = {
    task: prop_types_1.default.string,
};
Task.defaultProps = {
    task: '',
};
var TodoList = function () {
    var todoList = react_redux_1.useSelector(function (state) { return state.todoList; });
    return todoList.map(function (task) { return (<ul key={task}>
      <Task task={task}/>
    </ul>); });
};
var TodoListPage = function () { return (<div>
    <div>其他內容什麼的</div>
    <TodoList />
  </div>); };
var CurrentTask = function () {
    var todoList = react_redux_1.useSelector(function (state) { return state.todoList; });
    return <div>{"\u4E0B\u4E00\u4EF6\u4E8B\u8981\u505A\uFF1A" + todoList[0]}</div>;
};
var Main = function () {
    var dispatch = react_redux_1.useDispatch();
    var todoList = react_redux_1.useSelector(function (state) { return state.todoList; });
    var _a = react_1.useState(''), newTodo = _a[0], setNewTodo = _a[1];
    return (<div data-testid="todolistBlock">
      <span>{"\u4EE3\u8FA6\u4E8B\u9805\u6578\uFF1A" + todoList.length}</span>
      <div>
        <input value={newTodo} onChange={function (e) { setNewTodo(e.target.value); }}/>
        <button type="button" onClick={function () { dispatch(todolist_1.addTodo(newTodo)); }}>
          新增事項
        </button>
      </div>
      <TodoListPage />
      <CurrentTask />
    </div>);
};
exports.default = Main;
