import { 
    activeContainerChecker, 
    sortByDueDateFilter, 
    addTask, 
    submitButton, 
    cancelButton, 
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
    submitButton();
    cancelButton();
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