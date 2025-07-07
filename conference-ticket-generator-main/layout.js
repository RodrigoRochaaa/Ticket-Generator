const nameInput = document.getElementById("input-Name");
const emailInput = document.getElementById("input-email");
const githubInput = document.getElementById("input-GitHub");
const ticketButton = document.getElementById("ticket-button");
const form = document.getElementById("myForm");
const input = document.getElementById("fileInput");
const preview = document.getElementById("image-preview");

input.addEventListener("change", function () {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      preview.src = event.target.result;
      localStorage.setItem("newPhoto", event.target.result);
    };
    reader.readAsDataURL(file);
  }
});

ticketButton.addEventListener("click", function validationForm(event) {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  if (nameValue === "") {
    notie.alert({ type: 3, text: "Nome precisa ser preenchido" });
    validation = false;
  } else if (/\d/.test(nameValue)) {
    notie.alert({ type: 3, text: "Erro: Seu nome não pode conter números" });
    validation = false;
  } else {
    localStorage.setItem("valueName", nameValue);
  }
  const emailValue = emailInput.value.trim();
  const githubValue = githubInput.value.trim();

  if (emailValue === "") {
    notie.alert({ type: 3, text: "Email precisa ser preenchido" });
    validation = false;
  } else if (!emailValue.includes("@") || !emailValue.includes(".com")) {
    notie.alert({ type: 3, text: "Erro: Email deve conter @ e .com" });
    validation = false;
  } else {
    localStorage.setItem("valueEmail", emailValue);
  }

  if (githubValue === "") {
    notie.alert({ type: 3, text: "Github precisa ser preenchido" });
    validation = false;
  } else {
    localStorage.setItem("valueGithub", githubValue);
  }
  let validation;
  if ((validation = true)) {
    form.submit();
    locationTicket();
  }
});

function locationTicket() {
  window.location.href = "./ticket.html";
}
