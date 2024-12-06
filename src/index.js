import { activeContainerChecker, addTask, submitButton, cancelButton, deleteButton, editButton } from './utils/appLogic';
import { renderAllEventList } from './components/EventList';
import { getAllEventKey, addEvent } from './store/localStorage';
import './styles/template.css'

// APP LOGIC



renderAllEventList();

document.addEventListener('DOMContentLoaded', () => {
    // renderAllEventList();
    addTask();
    editButton();
    submitButton();
    cancelButton();
    deleteButton();
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