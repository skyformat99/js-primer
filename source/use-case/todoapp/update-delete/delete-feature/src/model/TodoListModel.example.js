import { TodoItemModel } from "./TodoItemModel";
import { TodoListModel } from "./TodoListModel";
// 新しいTodoリストを作成する
const todoListModel = new TodoListModel();
// 現在のTodoアイテム数は0
console.log(todoListModel.totalCount); // => 0
// Todoリストが変更されたら呼ばれるイベントハンドラを登録する
todoListModel.onChange(() => {
    console.log("TodoListの状態が変わりました");
});
// 新しいTodoアイテムを追加する
// => `onChange`で登録したイベントハンドラが呼び出される
const todoItemModel = new TodoItemModel({
    title: "新しいTodoアイテム",
    completed: false
});
todoListModel.addTodo(todoItemModel);
// Todoリストにアイテムが増える
console.log(todoListModel.totalCount); // => 1
// アイテムを削除する
todoListModel.deleteTodo({
    id: todoItemModel.id
});
console.log(todoListModel.totalCount); // => 0
