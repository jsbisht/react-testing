window.onload = () => {
  document.getElementById("add").addEventListener("click", (e) => {
    const name = document.getElementById("username").value;
    const age = document.getElementById("userage").value;

    const para = document.createElement("p");
    para.textContent = `${name} ${age}`;
    window.root.append(para);
  });
};
