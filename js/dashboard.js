// dashboard.js
const user = JSON.parse(localStorage.getItem("loggedInUser"));

if (!user) {
  window.location.href = "index.html";
}


  document.querySelector(".student-dashboard").style.display = "block";
  welcome.textContent = `Welcome, ${user.username}`;
  

  function updateDashboardInfo() {
    const grade = getGrade(user.score);
    
  }

  updateDashboardInfo();

  window.updateStudent = function () {
    const updatedSubject = subjectSelect.value;
    const updatedScore = parseInt(scoreInput.value);
    user.subject = updatedSubject;
    user.score = updatedScore;
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    updateDashboardInfo();
    alert("Info updated!");
  };


