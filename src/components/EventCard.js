import { createDOMElement, selectDOMElement } from "../utils/domHelper";
import { getEvent, deleteEvent } from "../store/localStorage";
import { eventKeyListener } from "../utils/EventLogic";

/*

*/
export const renderEventCard = (key) => {

    const focusEvent = getEvent(key);

    const eventCardContainer = createDOMElement('div', 'card-container', null);

    const parentContainer = selectDOMElement('#display-edit-wrapper');
    parentContainer.appendChild(eventCardContainer);

    //creating label for each attribute
    const eventCardNameLabel = createDOMElement('label', 'focus-label name', null);
    eventCardNameLabel.innerText = `Name`;
    eventCardNameLabel.htmlFor = "focus-input-name"
    eventCardContainer.appendChild(eventCardNameLabel);

    const eventCardDescriptionLabel = createDOMElement('label', 'focus-label description', null);
    eventCardDescriptionLabel.innerText = 'Description';
    eventCardDescriptionLabel.htmlFor = "focus-input-description"
    eventCardContainer.appendChild(eventCardDescriptionLabel);

    const eventCardDueDateLabel = createDOMElement('label', 'focus-label due-date', null);
    eventCardDueDateLabel.innerText = 'Due Date';
    eventCardDueDateLabel.htmlFor = "focus-input-due-date"
    eventCardContainer.appendChild(eventCardDueDateLabel);

    const eventCardPriorityLabel = createDOMElement('label', 'focus-label priority', null);
    eventCardPriorityLabel.innerText = 'Priority';
    eventCardPriorityLabel.htmlFor = "focus-input-priority"
    eventCardContainer.appendChild(eventCardPriorityLabel);

    const eventCardDifficultyLabel = createDOMElement('label', 'focus-label difficulty', null);
    eventCardDifficultyLabel.innerText = 'Difficulty';
    eventCardDifficultyLabel.htmlFor = "focus-input-difficulty"
    eventCardContainer.appendChild(eventCardDifficultyLabel);

    const eventCardDurationLabel = createDOMElement('label', 'focus-label duration', null);
    eventCardDurationLabel.innerText = 'Duration';
    eventCardDurationLabel.htmlFor = "focus-input-duration"
    eventCardContainer.appendChild(eventCardDurationLabel);


    //creating label for each attribute
    const eventCardName = createDOMElement('input', 'focus-input', 'focus-input-name');
    eventCardName.value = focusEvent.name;
    eventCardContainer.appendChild(eventCardName);

    const eventCardDescription = createDOMElement('input', 'focus-input', 'focus-input-description');
    eventCardDescription.value = focusEvent.description;
    eventCardContainer.appendChild(eventCardDescription);

    const eventCardDueDate = createDOMElement('input', 'focus-input', 'focus-input-due-date');
    eventCardDueDate.value = focusEvent.dueDate;
    eventCardContainer.appendChild(eventCardDueDate);

    const eventCardPriority = createDOMElement('input', 'focus-input', 'focus-input-priority');
    eventCardPriority.value = focusEvent.priority;
    eventCardContainer.appendChild(eventCardPriority);

    const eventCardDifficulty = createDOMElement('input', 'focus-input', 'focus-input-difficulty');
    eventCardDifficulty.value = focusEvent.difficulty;
    eventCardContainer.appendChild(eventCardDifficulty);

    const eventCardDuration = createDOMElement('input', 'focus-input', 'focus-input-duration');
    eventCardDuration.value = focusEvent.duration;
    eventCardContainer.appendChild(eventCardDuration);


    const eventCardButtonContainer = createDOMElement('div', 'focus-button-container', null);

    const cardEditButton = createDOMElement('button', 'card-btn edit', null);
    cardEditButton.innerText = "Edit Task";
    cardEditButton.addEventListener('click', () => {
        const editEventCard = (key) => {

        }
    });
    eventCardButtonContainer.appendChild(cardEditButton)

  
    const cardDeleteButton = createDOMElement('button', 'card-btn finish', null);
    cardDeleteButton.innerText = "Task Finished";
    cardDeleteButton.addEventListener('click', () => {
        const deleteEventCard = (key) => {

        }
    });

    eventCardButtonContainer.appendChild(cardDeleteButton);
    
    eventCardContainer.appendChild(eventCardButtonContainer);
}




