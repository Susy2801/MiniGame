function checkResult() {
  var inputResult = document.getElementById("q2-result");
  var userResult = inputResult.value;
  var result = "hello";
  var correctAnswer = document.getElementById("correct");

  if (userResult != "" && userResult === result) {
    correctAnswer.style.display = "flex";
    correctAnswer.innerHTML = "CHÍNH XÁC!";
    correctAnswer.style.color = "green";
    setTimeout(function () {
      correctAnswer.style.display = "none";
    }, 3000);
    console.log("ĐÚNG");
  } else {
    correctAnswer.style.display = "flex";
    correctAnswer.innerHTML = "SAI!";
    correctAnswer.style.color = "red";
    setTimeout(function () {
      correctAnswer.style.display = "none";
    }, 3000);

    console.log("SAI");
  }
}

function checkAnswer(result) {
  var question = document.getElementById("question");
  var answers = document.querySelector(".choice");
  var tick = document.querySelector(".tick");

  // Đặt màu nền cho đáp án được chọn
  for (var i = 0; i < answers.length; i++) {
    answers[i].classList.remove("correct", "incorrect");
  }

  if (result === "correct") {
    // Nếu đáp án đúng
    tick.innerHTML = "<i class='fa-solid fa-check'></i>";
    tick.style.color = "green";
    setTimeout(function () {
      tick.innerHTML = "";
    }, 3000);
    console.log("đáp án đúng");
  } else {
    tick.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    tick.style.color = "red";
    setTimeout(function () {
      tick.innerHTML = "";
    }, 3000);
    console.log("đáp án sai");
  }
}
