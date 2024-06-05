document.getElementById('checkButton').onclick = function() {
    var answer = document.getElementById('answer').value;
    var resultText = "";

    if (answer === "") {
        resultText = "Оберіть хоч якусь відповідь.";
    } else if (answer === "2") {
        resultText = "Правильна відповідь";
    } else {
        resultText = "Неправильна відповідь";
    }
    document.getElementById('result').innerText = resultText;
};