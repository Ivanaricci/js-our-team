const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// funzione per le card
const createMemeberCard = (member) => {
  const card =  `<div class="col-12 col-md-6 col-lg-4">
                  <div class="card mb-3" style="max-width: 540px;">
                     <div class="row g-0">
                       <div class="col-md-4">
                          <img src="./img/${member.img}" class="img-fluid rounded-start" alt="...">
                        </div>
                       <div class="col-md-8 bg-dark text-white">
                         <div class="card-body">
                            <h5 class="card-title">${member.name}</h5>
                            <p class="card-text">${member.role}</p>
                            <p class="card-text"><a href="#">${member.email}</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>`;

      return card
}

const renderTeam = () => {
  

  // stringa vuota per le colonne
  let cardAll = '';

  // ciclo l'array 
  for (let i=0; i<teamMembers.length; i++){
    cardAll += createMemeberCard(teamMembers[i])
  }

  document.getElementById('team-members').innerHTML = cardAll;

}

renderTeam()


