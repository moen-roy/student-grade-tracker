// dashboard.js
const user = JSON.parse(localStorage.getItem("loggedInUser"));
// if no records are found dashboard cant be accessed

if (!user) {
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}

function getGrade(score) {
  if (score < 0 || score > 100) {
    alert("Please enter a score between 0 and 100");
  }
  if (score <= 25) return "E";
  if (score <= 35) return "D";
  if (score <= 49) return "C";
  if (score <= 59) return "C+";
  if (score <= 74) return "B";
  return "A";
}
   // admin section will run if role is admin
function renderAdminView() {
  document.body.innerHTML = `
    <h1>STUDENT LIST</h1>
    <button class="logout" onclick="logout()">Logout</button>
    <div id="admin-view"></div>
  `;

  fetch("https://6859be539f6ef96111541b27.mockapi.io/Student")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("admin-view");
      data.forEach(student => {
        const div = document.createElement("div");
        div.className = "student-card";
        div.innerHTML = `
          <img src="${student.image}" class="student-avatar" />
          <div>
            <strong>${student.username}</strong> - ${student.subject} - ${student.score} pts
            <span class="${student.score >= 50 ? 'pass' : 'fail'}">
              ${student.score >= 50 ? 'Passed' : 'Failed'}
            </span>
          </div>
        `;
        container.appendChild(div);
      });
    })
    .catch(err => console.error("Failed to fetch student data:", err));
}
  // student section will run if role is
function renderStudentView() {
  const welcome = document.querySelector(".welcome");
  const usernameEl = document.getElementById("username");
  const studentImg = document.getElementById("student-img");
  const scoreInput = document.getElementById("score");
  const subjectSelect = document.getElementById("subject");
  const statusEl = document.querySelector(".status");

  document.querySelector(".student-dashboard").style.display = "block";
  welcome.textContent = `Welcome, ${user.username}`;
  usernameEl.textContent = user.username;
  studentImg.src = user.image || "https://via.placeholder.com/150";
  scoreInput.value = user.score;
  subjectSelect.value = user.subject;

  function updateDashboardInfo() {
    const grade = getGrade(user.score);
    const statusText = user.score >= 50 ? "Passed" : "Failed";
    statusEl.textContent = `${statusText} - Grade: ${grade}`;
    statusEl.classList.toggle("failed", user.score < 50);
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
}

if (user.role === "admin") {
  renderAdminView();
} else if (user.role === "student") {
  renderStudentView();
}
