// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede, potete usare come esempio lo screenshot,  ma anche realizzare qualcosa di creativo!!!





let contentPage = document.getElementById('container-member');

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

const team = [
    { nome: 'Wayne Barnett', ruolo: 'Founder & CEO', foto: 'wayne-barnett-founder-ceo.jpg' },
    { nome: 'Angela Caroll', ruolo: 'Chief Editor', foto: 'angela-caroll-chief-editor.jpg' },
    { nome: 'Walter Gordon', ruolo: 'Office Manager', foto: 'walter-gordon-office-manager.jpg' },
    { nome: 'Angela Lopez', ruolo: 'Social Media Manager', foto: 'angela-lopez-social-media-manager.jpg' },
    { nome: 'Scott Estrada', ruolo: 'Developer', foto: 'scott-estrada-developer.jpg' },
    { nome: 'Barbara Ramos', ruolo: 'Graphic Designer', foto: 'barbara-ramos-graphic-designer.jpg' }
];



// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// for (let i = 0; i < team.length; i++) {
//     const member = team[i];
//     console.log(`Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`);
//   }




// Stampare le stesse informazioni su DOM sottoforma di stringhe

for (let i = 0; i < team.length; i++) {

    const member = team[i];

    const memberInfo = document.createElement('p');

    memberInfo.textContent = `Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`;

    contentPage.appendChild(memberInfo);
}


// Trasformare la stringa foto in una immagine effettiva