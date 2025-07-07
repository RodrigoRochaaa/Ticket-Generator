const eventValidation = document.getElementById("Event-validation");
const ticketData = document.getElementById("ticket-container");
const nameData = localStorage.getItem("valueName");
const email = localStorage.getItem("valueEmail");
const github = localStorage.getItem("valueGithub");
const avatar = localStorage.getItem("newPhoto");

function addInformationNames() {
  eventValidation.innerHTML = `<h1>
              Parabéns, ${nameData}!<br />
              Seu ticket está pronto.
            </h1>
            <div class="information-text">
              Enviamos um e-mail para<br />
              <span class="spacer"></span>
              <span class="email-color">${email}</span> e iremos
              enviar atualizações<br />
              <span class="spacer"></span>
              antes do evento.
            </div>`;
}

function addInformationTicket() {
  ticketData.innerHTML = `<img
            id="pattern-ticket"
            src="./assets/images/pattern-ticket.svg"
            alt="Ticket Com as informações do usuário"
          />

          <div id="overlay">
            <div class="header-overlay">
              <img src="./assets/images/logo-mark.svg" alt="" />
              <div class="coding-conf-container">
                <h3>Coding Conf</h3>
                <p>jan 31, 2025/Austin,tx</p>
              </div>
            </div>
            <div class="inform-overlay">
              <img
                class="avatar-edit"
                src="${avatar}"
                alt=""
              />
              <div id="inform-data">
                <p>${nameData}</p>
                <div class="github-info">
                  <img
                    class="icon-github"
                    src="./assets/images/icon-github.svg"
                    alt=""
                  />
                  <p>${github}</p>`;
}

addInformationNames();
addInformationTicket();
