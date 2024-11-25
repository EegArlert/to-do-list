import { submitForm } from './utils/form'
import './styles/template.css'
import { deleteEvent, getEvent, getAllEvent } from './store/localStorage';

localStorage.clear();


const submitButton = document.querySelector('#submit-btn');

const toggleForm = document.querySelector('form');
toggleForm.classList.add('test')

submitButton.addEventListener('click', (e) => {
    toggleForm.classList.remove('test')
    e.preventDefault();
    submitForm();

    console.log(getEvent("0"));
    getAllEvent();

})

