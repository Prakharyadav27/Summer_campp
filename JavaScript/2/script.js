const uname = document.getElementById("uname");
const button = document.getElementById("button");
const ans = document.getElementById("hello");

button.addEventListener("click", () => {
  const val = uname.value;
  localStorage.setItem("name", val);
//   const name = localStorage.getItem("name");
//   ans.innerText = `Hello, ${name}`;
});

window.addEventListener("load", () => {
  const name = localStorage.getItem("name");
  ans.innerText = `Hello, ${name}`;
});
