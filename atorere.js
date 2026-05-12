function changeText() {
    document.getElementById('text').innerHTML = 'Text changed!';
} 

var nowDate = new Date();
var year = nowDate.getFullYear();
var month = nowDate.getMonth() + 1;
var date = nowDate.getDate();

/* 曜日追加 */
var day_array = ['日', '月', '火', '水', '木', '金', '土'];
var day = day_array[nowDate.getDay()];
var today = year + '年' + month + '月' + date + '日' + '（' + day + '）';
console.log(today);

document.querySelectorAll('.open').forEach((element, index) => {
    element.addEventListener('click', function () {
        document.getElementById('popup' + (index + 1)).checked = true;
    });
});

document.querySelectorAll('.close').forEach((element, index) => {
    element.addEventListener('click', function () {
        document.getElementById('popup' + (index + 1)).checked = false;
    });
});

window.onload = function () {
    alert("サイトを閲覧いただきありがとうございます、スマートフォンなどの画面解像度が小さい端末でご覧の場合表示が崩れるかの可能性があります、今後修正予定です、ご了承ください");
}


function anime（）{
 document.write（"Hello world"）；
 //はろわーるどって言っちゃうぞ

}
function get_calc(btn) {
    if (btn.value == "=") {
        document.calculator.display.value = eval(document.calculator.display.value);
    } else if (btn.value == "c") {
        document.calculator.display.value = "";
    } else {
        if (btn.value == "×") {
            btn.value = "*";
        } else if (btn.value == "÷") {
            btn.value = "/";
        }
        document.calculator.display.value += btn.value;
        document.calculator.multi_btn.value = "×";
        document.calculator.div_btn.value = "÷";
    }
}



