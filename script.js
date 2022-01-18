/*Toggle Menu*/

let navLinks = document.getElementById("navLinks");

let dateActuelle = new Date();


let date = new Date().toISOString().slice(0, 10); 
    let copyright = `<br/> ${date}<br/> Aless4ndro`;
    document.getElementById('data').innerHTML = copyright;

function showMenu(){
  navLinks.style.right = "0";
}
function hideMenu(){
  navLinks.style.right = "-200px";
}




//------------------------mode sombre

let btn  = document.querySelector('#mode');
  let span = document.querySelector('span');

  if(localStorage.getItem('theme')) {
      if(localStorage.getItem('theme') == 'sombre') {
          modeSombre();
      }
  } 

  //rendre btn fonctionnel
  btn.addEventListener('click', () => {
      //voir si element body a une classe
  if(document.body.classList.contains('dark')) {
      //Retirez toutes les classes de l'élément Body
  document.body.className = '';
  //Changez le texte du bouton grâce à votre élément span en "Thème sombre"
  span.textContent = 'Theme sombre';
  //Définissez un élément localStorage, qui s'appellera 'theme' et qui aura pour valeur 'clair'
  localStorage.setItem('theme', 'clair');

  } else {
      //Appelez la fonction modeSombre()
    modeSombre()
  }
  
  });

  function modeSombre() {
      //Ajouter la classe 'dark' sur l'élément Body
    document.body.className = 'dark';
    //Changer le texte du bouton grâce à l'élément span en "Thème clair"
    span.textContent        = 'Theme clair';
    localStorage.setItem('theme', 'sombre');
  }