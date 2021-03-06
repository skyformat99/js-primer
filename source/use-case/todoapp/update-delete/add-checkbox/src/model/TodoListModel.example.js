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
todoListModel.addTodo(new TodoItemModel({
    title: "新しいTodoアイテム",
    completed: false
}));
// Todoリストにアイテムが増える
console.log(todoListModel.totalCount); // => 1;
