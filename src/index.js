import { eventList, allEventList } from './components/EventList';
import { submitForm } from './utils/form'
import './styles/template.css';
import { getAllEvent } from './store/localStorage';


const submitBtn = document.querySelector('.button-container');

if(localStorage.length > 1) {
allEventList();
}



submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const submittedForm = submitForm();
    
    console.log(localStorage.getItem(localStorage.length-2));
    
    
    
    
    eventList();
    submittedForm.form.reset();

})


