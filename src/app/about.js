import bootstrap from 'bootstrap';

import '../style/main.scss';
import '../style/about.scss';

const AboutMe = () => {

}

const socialIcon = document.querySelector('.social__icon1');

socialIcon.addEventListener('click',  function openGithubIcon(e) {
            e.preventDefault();
            if(socialIcon){
                  window.open('https://github.com/NodEm9')
            }
});
console.log(socialIcon);


//Select the DOM element for Linkedin icon
const linkedinIcon = document.querySelector('.social__icon2');

linkedinIcon.addEventListener('click', function openIinkedinPage(e) {
       e.preventDefault();

       if(linkedinIcon){
             window.open('https://www.linkedin.com/in/emmanuel-nodolomwanyi-60b56246');
       } 
 });

 const para = document.querySelector('p');
 para.setAttribute('id', 'bio-text' );
 para.textContent = `Committed, dedicated, focued and full of fun, as well. I am a team player and 
 also posses the skills and ability to work alone.
  I like summer season because it's most convenient for my hobbies, 
  i like riding bike as well as swimming in my free time amongst others.
  Below are my skill set which I update reqularly `





export { AboutMe };
