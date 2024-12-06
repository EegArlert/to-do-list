import { selectDOMElement, toggle } from "./domHelper";
import { submitForm } from "./form";
import { renderEvent,resetEventList, renderAllEventList } from "../components/EventList";
import { deleteEvent, getAllEventKey } from "../store/localStorage";
import { renderEventCard } from "../components/EventCard";


const activeContainer = document.querySelectorAll('.blur');

export function eventKeyListener(element, callback) {
    // This returns the key of the container event being clicked
    const key = element.id.split("-")[1];
    callback(key);
};

// Add New Task Button that invoke form
export function addTask() {
    const addButton = selectDOMElement('#add-btn');
    addButton.addEventListener('click', () => {
        toggle(activeContainer, 'active');
    })
}


// Submit button on form, submit form and go back to main screen
export function submitButton() {
    const submitButton = selectDOMElement('#submit-btn');
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        submitForm(renderEvent);
        toggle(activeContainer, 'active');
        renderAllEventList();
    })
}

// Cancel button on form, close form

export function cancelButton() {
    const cancelButton = selectDOMElement('#cancel-btn');
    cancelButton.addEventListener('click', () => {
        toggle(activeContainer, 'active');
    });
}




// export function selectEventListener() {
//     console.log('select event listener function run')
//     const containerArr = document.querySelectorAll('.list-card-container');
//     let selectedEventKeys = [];
//     containerArr.forEach(container => {
//         container.addEventListener('click', () => {
//             toggle(container, 'active')
//             selectedEventKeys = activeContainerChecker(containerArr);
//             console.log(`selected event listener function: ${selectedEventKeys}`)
//         });
//     });
    
//     return selectedEventKeys
// };

// Check which container has active class and return the key of it.


/* TODO, NEED TO REDO THE FUNCTION CALL FOR CONTAINER CHECKER.
    THIS NEEDS TO RUN ON APPLOGIC.JS NOT ON INDEX.
*/

export function activeContainerChecker() {
    console.log('active container checker function called');
    let activeKey = [];
    const containerArr = document.querySelectorAll('.list-card-container');
    containerArr.forEach(container => {
        if (container.classList.contains('active')) {
                eventKeyListener(container, (key) => {
                    activeKey.push(key);
                    console.log(activeKey);
                })
            }
        
        if (activeKey.length > 0) {
            return activeKey

        } else {
            return 'The are no active key';
        }
    })
}


export function editButton() {
    const editTaskButton = selectDOMElement('#edit-btn');
    editTaskButton.addEventListener('click', () => {
        console.log('edit button clicked')
        console.log(selectedEventKeys)
        if (selectedEventKeys.length <= 0) {
            alert('Please choose a task to edit');
            return
        } else if (selectedEventKeys.length > 1){
            alert('Please choose only one task to edit');
            return
        }
        renderEventCard(selectedEventKeys);
    });
}


//Delete Task Button that delete an event user focus on

export function deleteButton() {
    const deleteTaskButton = selectDOMElement('#delete-btn');

    deleteTaskButton.addEventListener('click', () => {
        
        if(selectedEventKeys.length < 1){
            return
        }

        selectedEventKeys.forEach(key => {
            deleteEvent(key);
        })

        resetEventList();
        renderAllEventList();
    })
}

export function checkBoxClicked() {

}



