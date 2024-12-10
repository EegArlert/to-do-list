import {  
    sortByDueDateFilter, 
    addTask, 
    cardSubmitButton,
    cardCancelButton, 
    deleteButton, 
    editButton, 
    checkBoxClicked, 
    sortByPriorityFilter, 
    sortByDurationFilter
} from './utils/appLogic';
import { renderAllEventList } from './components/EventList';
import './styles/template.css'


// APP LOGIC

document.addEventListener('DOMContentLoaded', () => {
    renderAllEventList();
    checkBoxClicked();
    addTask();
    editButton();
    deleteButton();
    sortByDueDateFilter();
    sortByPriorityFilter();
    sortByDurationFilter();
})





// renderAllEventList();

// // const formSubmitButton = document.querySelector('#submit-btn');
// // const arr = document.querySelectorAll('.list-card-container');



// // formSubmitButton.addEventListener('click', (e) => {
// //     e.preventDefault();
// //     submitForm();
// //     renderEvent();
    
// //     // const updateArr = getAllEvent();
// //     // eventKeyListener(updateArr, consoleKey);
// // })

// submittedForm(renderEvent);