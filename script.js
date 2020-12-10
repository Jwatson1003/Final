var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

document.getElementById("quiz_1_answer_1").addEventListener("click", function() {
  document.getElementById("quiz_1_incorrect").style.visibility = "visible";
  document.getElementById("quiz_1_correct").style.visibility = "hidden";
});

document.getElementById("quiz_1_answer_2").addEventListener("click", function() {
  document.getElementById("quiz_1_incorrect").style.visibility = "hidden";
  document.getElementById("quiz_1_correct").style.visibility = "visible";
});

document.getElementById("quiz_1_answer_3").addEventListener("click", function() {
  document.getElementById("quiz_1_incorrect").style.visibility = "visible";
  document.getElementById("quiz_1_correct").style.visibility = "hidden";
});

document.getElementById("quiz_2_answer_1").addEventListener("click", function() {
  document.getElementById("quiz_2_incorrect").style.visibility = "visible";
  document.getElementById("quiz_2_correct").style.visibility = "hidden";
});

document.getElementById("quiz_2_answer_2").addEventListener("click", function() {
  document.getElementById("quiz_2_incorrect").style.visibility = "hidden";
  document.getElementById("quiz_2_correct").style.visibility = "visible";
});

document.getElementById("quiz_2_answer_3").addEventListener("click", function() {
  document.getElementById("quiz_2_incorrect").style.visibility = "visible";
  document.getElementById("quiz_2_correct").style.visibility = "hidden";
});

document.getElementById("quiz_3_answer_1").addEventListener("click", function() {
  document.getElementById("quiz_3_incorrect").style.visibility = "visible";
  document.getElementById("quiz_3_correct").style.visibility = "hidden";
});

document.getElementById("quiz_3_answer_2").addEventListener("click", function() {
  document.getElementById("quiz_3_incorrect").style.visibility = "hidden";
  document.getElementById("quiz_3_correct").style.visibility = "visible";
});

document.getElementById("quiz_3_answer_3").addEventListener("click", function() {
  document.getElementById("quiz_3_incorrect").style.visibility = "visible";
  document.getElementById("quiz_3_correct").style.visibility = "hidden";
});
document.getElementById("quiz_4_answer_1").addEventListener("click", function() {
  document.getElementById("quiz_4_incorrect").style.visibility = "visible";
  document.getElementById("quiz_4_correct").style.visibility = "hidden";
});

document.getElementById("quiz_4_answer_2").addEventListener("click", function() {
  document.getElementById("quiz_4_incorrect").style.visibility = "hidden";
  document.getElementById("quiz_4_correct").style.visibility = "visible";
});

document.getElementById("quiz_4_answer_3").addEventListener("click", function() {
  document.getElementById("quiz_4_incorrect").style.visibility = "visible";
  document.getElementById("quiz_4_correct").style.visibility = "hidden";
});
document.getElementById("quiz_5_answer_1").addEventListener("click", function() {
  document.getElementById("quiz_5_incorrect").style.visibility = "visible";
  document.getElementById("quiz_5_correct").style.visibility = "hidden";
});

document.getElementById("quiz_5_answer_2").addEventListener("click", function() {
  document.getElementById("quiz_5_incorrect").style.visibility = "hidden";
  document.getElementById("quiz_5_correct").style.visibility = "visible";
});

document.getElementById("quiz_5_answer_3").addEventListener("click", function() {
  document.getElementById("quiz_5_incorrect").style.visibility = "visible";
  document.getElementById("quiz_5_correct").style.visibility = "hidden";
});
document.getElementById("quiz_6_answer_1").addEventListener("click", function() {
  document.getElementById("quiz_6_incorrect").style.visibility = "visible";
  document.getElementById("quiz_6_correct").style.visibility = "hidden";
});

document.getElementById("quiz_6_answer_2").addEventListener("click", function() {
  document.getElementById("quiz_6_incorrect").style.visibility = "hidden";
  document.getElementById("quiz_6_correct").style.visibility = "visible";
});

document.getElementById("quiz_6_answer_3").addEventListener("click", function() {
  document.getElementById("quiz_6_incorrect").style.visibility = "visible";
  document.getElementById("quiz_6_correct").style.visibility = "hidden";
});
document.getElementById("quiz_7_answer_1").addEventListener("click", function() {
  document.getElementById("quiz_7_incorrect").style.visibility = "visible";
  document.getElementById("quiz_7_correct").style.visibility = "hidden";
});

document.getElementById("quiz_7_answer_2").addEventListener("click", function() {
  document.getElementById("quiz_7_incorrect").style.visibility = "hidden";
  document.getElementById("quiz_7_correct").style.visibility = "visible";
});

document.getElementById("quiz_7_answer_3").addEventListener("click", function() {
  document.getElementById("quiz_7_incorrect").style.visibility = "visible";
  document.getElementById("quiz_7_correct").style.visibility = "hidden";
});
document.getElementById("quiz_8_answer_1").addEventListener("click", function() {
  document.getElementById("quiz_8_incorrect").style.visibility = "visible";
  document.getElementById("quiz_8_correct").style.visibility = "hidden";
});

document.getElementById("quiz_8_answer_2").addEventListener("click", function() {
  document.getElementById("quiz_8_incorrect").style.visibility = "hidden";
  document.getElementById("quiz_8_correct").style.visibility = "visible";
});

document.getElementById("quiz_8_answer_3").addEventListener("click", function() {
  document.getElementById("quiz_8_incorrect").style.visibility = "visible";
  document.getElementById("quiz_8_correct").style.visibility = "hidden";
});
document.getElementById("quiz_9_answer_1").addEventListener("click", function() {
  document.getElementById("quiz_9_incorrect").style.visibility = "visible";
  document.getElementById("quiz_9_correct").style.visibility = "hidden";
});

document.getElementById("quiz_9_answer_2").addEventListener("click", function() {
  document.getElementById("quiz_9_incorrect").style.visibility = "hidden";
  document.getElementById("quiz_9_correct").style.visibility = "visible";
});

document.getElementById("quiz_9_answer_3").addEventListener("click", function() {
  document.getElementById("quiz_9_incorrect").style.visibility = "visible";
  document.getElementById("quiz_9_correct").style.visibility = "hidden";
});
document.getElementById("quiz_10_answer_1").addEventListener("click", function() {
  document.getElementById("quiz_10_incorrect").style.visibility = "visible";
  document.getElementById("quiz_10_correct").style.visibility = "hidden";
});

document.getElementById("quiz_10_answer_2").addEventListener("click", function() {
  document.getElementById("quiz_10_incorrect").style.visibility = "hidden";
  document.getElementById("quiz_10_correct").style.visibility = "visible";
});

document.getElementById("quiz_10_answer_3").addEventListener("click", function() {
  document.getElementById("quiz_10_incorrect").style.visibility = "visible";
  document.getElementById("quiz_10_correct").style.visibility = "hidden";
});
