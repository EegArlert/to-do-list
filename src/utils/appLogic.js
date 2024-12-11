import { selectDOMElement, toggle } from "./domHelper";
import { submitForm } from "./form";
import { renderEvent, resetEventList, renderAllEventList } from "../components/EventList";
import { deleteEvent, getAllEvent } from "../store/localStorage";
import { renderEventCard } from "../components/EventCard";
import { sortByDueDate, sortByDuration, sortByPriority } from "./sort";


const activeContainer = document.querySelectorAll('.blur');

// This returns the key of the container event being clicked
export function eventKeyListener(element, callback) {
    console.log(element);
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

//This function add the eventListener for content list when click,
//and return the key if there is any that active
export function selectEventListener() {
    const containerArr = document.querySelectorAll('.list-card-container');
    containerArr.forEach(container => {
        container.addEventListener('click', () => {
            toggle(container, 'active');
        })
    })
};

// Check which container has active class and return the key of it.
function activeContainerChecker() {
    console.log('active container checker function called');
    let activeKey = [];
    const containerArr = document.querySelectorAll('.list-card-container');
    console.log(containerArr)
    containerArr.forEach(container => {
        container
        if (container.classList.contains('active')) {
            eventKeyListener(container, (key) => {
                console.log("inserting key");
                activeKey.push(key);
            })
        };
    });
    if (activeKey.length <= 0) {
        console.log('there are no active key');
        return []
    }
    return activeKey;
}

// Submit button on form, submit form and go back to main screen
export function formSubmitButton() {
    const submitButton = selectDOMElement('#submit-btn');
    submitButton.addEventListener('click', () => {
        submitForm(renderEvent);
        renderAllEventList();
        toggle(activeContainer, 'active');
    })
}

// Cancel button on form page
export function formCancelButton() {
    const cancelButton = selectDOMElement('#cancel-btn');
    cancelButton.addEventListener('click', () => {
        toggle(activeContainer, 'active');
    });
}

// Edit button on main page
export function editButton() {
    const editTaskButton = selectDOMElement('#edit-btn');
    editTaskButton.addEventListener('click', () => {
        const activeKey = activeContainerChecker();
        console.log('edit button clicked')
        console.log(activeKey)
        if (activeKey.length <= 0) {
            alert('Please choose a task to edit');
            return
        } else if (activeKey.length > 1) {
            alert('Please choose only one task to edit');
            return
        }
        renderEventCard(activeContainerChecker());
        
        const editContainer = selectDOMElement('#display-edit-wrapper');
        toggle(editContainer, 'active')
    });
}


//Delete Task Button on main page that delete an event user focus on

export function deleteButton() {
    const deleteTaskButton = selectDOMElement('#delete-btn');

    deleteTaskButton.addEventListener('click', () => {
        console.log(activeContainerChecker());
        if (activeContainerChecker().length < 1) {
            return
        }

        activeContainerChecker().forEach(key => {
            deleteEvent(key);
        })
        renderAllEventList();
    })
}

export function checkBoxClicked() {

    const containerArr = document.querySelectorAll(".list-card-container");

    const finishedContentParentContainer = selectDOMElement('#finished-task-content-grid');
    const contentParentContainer = selectDOMElement('#list-content-event');

    containerArr.forEach(container => {
        let checkbox = selectDOMElement(`#${container.id} .event-checkbox`);
        if (checkbox.checked && contentParentContainer.contains(container)) {
            finishedContentParentContainer.appendChild(container);
        } else if (!checkbox.checked && finishedContentParentContainer.contains(container)) {
            contentParentContainer.appendChild(container);
        }
    })

}



export function sortByDueDateFilter() {
    
    const filterDueDateButton = selectDOMElement('#sort-date');
    const arr = sortByDueDate();
    
    filterDueDateButton.addEventListener('click', () => {
        resetEventList();
        
        arr.forEach(key => {
            renderEvent(key); 
        })
        
        checkBoxClicked();
        selectEventListener();
    })
}

export function sortByPriorityFilter() {
    const filterPriorityButton = selectDOMElement('#sort-priority');
    const arr = sortByPriority();

    filterPriorityButton.addEventListener('click', () => {
        resetEventList();
        
        arr.forEach(key => {
            renderEvent(key);
        })

        checkBoxClicked();
        selectEventListener();
    })
}

export function sortByDurationFilter() {
    const filterDurationButton = selectDOMElement('#sort-duration');
    const arr = sortByDuration();

    console.log('sortbyduration filter invoked')
    filterDurationButton.addEventListener('click', () => {
        resetEventList();
        
        arr.forEach(key => {
            renderEvent(key);
        })

        checkBoxClicked();
        selectEventListener();
    })
}