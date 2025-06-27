// dashboard.js
const user = JSON.parse(localStorage.getItem("loggedInUser"));
// if no records are found dashboard cant be accessed
if (!user) {
  window.location.href = "index.html";
}
  // admin section
  if (user.role === "admin") {
  document.body.innerHTML = `<h1>STUDENT LIST</h1>
    <button class="logout" onclick="logout()">Logout</button> 
    <div id='admin-view'></div>`;

  fetch("https://6859be539f6ef96111541b27.mockapi.io/Student")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("admin-view");
      data.forEach(s => {
        // creating addmin dashboard class for styling
        const div = document.createElement("div");
        div.className = "student-card";
        div.innerHTML = `
          <img src="${s.image}" class="student-avatar" />
          <div>
            <strong>${s.username}</strong> - ${s.subject} - ${s.score} pts
            <span class="${s.score >= 50 ? 'pass' : 'fail'}">
              ${s.score >= 50 ? 'Passed' : 'Failed'}
            </span>
          </div>
        `;
        container.appendChild(div);
      });
    });
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


