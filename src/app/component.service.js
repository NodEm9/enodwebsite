
export  class ComponentService {
   constructor(){
       const inputGroup = document.querySelector('.input-group');
       const form = inputGroup.querySelectorAll('.form');
       const  submitBtn = form[0].querySelector('button[type="submit"]');

       let showForm = [];
          function getDataForm(e) {
          
             e.preventDefault();
             let showForm = {
                id: document.body.getElementsByTagName('label'),
                label: document.querySelectorAll('input-group'), 
             }
             //Collects all form data without having to loop through 
             const formData = new FormData(form[0]);
          
             console.log(formData.get('fname')+ ' - '+ formData.get('fullnameField')+ ' - '+ formData.get('emailField')+ ' - '+ 
             formData.get('subjectTitleField')+ ' - '+ formData.get('messageField'));  
             
             showForm
          }
          document.querySelector('form').reset();
          
          document.addEventListener('DOMContentLoaded', function(){
          
                    submitBtn.addEventListener('click', getDataForm, false);
                 
             }, false);

                

 }
}
