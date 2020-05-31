// テキストボックスとボタンを配置、
// ボタンをクリックしたら、
// name属性が’result’の要素を取得して、その入力内容（テキスト）をコンソール表示する。

function showElements() {
    var elements = document.getElementsByName("result");
    console.log(elements);
    console.log(elements[0]);
    console.log(elements[0].value);
    // .value で入力を取得できる
}