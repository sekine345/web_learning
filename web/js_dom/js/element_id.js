// IDをキーに要素を取得
// getElementByIdメソッド

// 現在のid:resultの内容（テキスト）をコンソールに表示。
// id:resultの内容（テキスト）を、現在時刻（日時）に書き換え。
function show() {
    var result = document.getElementById('result');
    console.log(result.innerText);
    // result.innerText : id の要素の中の、テキストを取得

    var nowDate = new Date()
    // 現在時刻取得

    result.innerText = nowDate.toLocaleString();
    //toLocaleString : 地域に応じた時刻表期にしてくれる
}
