document.getElementById("login-form").addEventListener("submit", handleLogin);

function handleLogin(e) {
  e.preventDefault();

  const username = document.querySelector(".username").value.trim();
  const password = document.querySelector(".password").value.trim();

  fetch("https://6859be539f6ef96111541b27.mockapi.io/Student")
    .then((res) => res.json())
    .then((students) => validateUser(students, username, password))
    .catch((err) => {
      console.error("Error logging in:", err);
      alert("Something went wrong.");
    });
}

function validateUser(students, username, password) {
  const user = students.find(
    (s) => s.username.toLowerCase() === username.toLowerCase() && s.password === password
  );

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials!");
  }
}
