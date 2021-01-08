const mediaQueriesMob = window.matchMedia('(max-width: 500px)');
const blocContainer = document.querySelector('.blocContainer');
const skills = document.querySelectorAll('.blocContainer .skills');
const btnSkills = document.querySelectorAll('.btnSkills');
const nbrSkills = skills.length;

let MedQueTrans = (mediaQueriesMob.matches) ? 190 : 240; 

let skillsIndex = 1;
let skillsTranslation = 0;

  function clickFct(evt) {
    if (evt.target.id === 'btnPrev' && skillsIndex !== 1)  {
      skillsIndex--;
      skillsTranslation += MedQueTrans;
    }
    else if (evt.target.id === 'btnNext' && skillsIndex !== nbrSkills) {
      skillsIndex++;
      skillsTranslation -= MedQueTrans;
    }    
    blocContainer.style.transform = `translateX(${skillsTranslation}px)`;
  }

btnSkills.forEach(button => { button.addEventListener('click', clickFct); });