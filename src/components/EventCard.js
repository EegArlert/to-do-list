import { createDOMElement, selectDOMElement } from "../utils/domHelper";
import { getEvent } from "../store/localStorage";

/*

*/
export const createEventCard = (key) => {

    const eventCardContainer = createDOMElement('div', 'card-container', null);
    
    const parentContainer = selectDOMElement('.display-event');
    parentContainer.appendChild(eventCardContainer);

    const anEvent = getEvent(key);

    //creating label for each attribute
    const eventCardNameLabel = createDOMElement('div', 'card-label name', null);
    eventCardNameLabel.innerText = 'Name';
    eventCardContainer.appendChild(eventCardNameLabel);

    const eventCardDescriptionLabel = createDOMElement('div', 'card-label description', null);
    eventCardDescriptionLabel.innerText = 'Description';
    eventCardContainer.appendChild(eventCardDescriptionLabel);

    const eventCardDueDateLabel = createDOMElement('div', 'card-label due-date', null);
    eventCardDueDateLabel.innerText = 'Due Date';
    eventCardContainer.appendChild(eventCardDueDateLabel);

    const eventCardPriorityLabel = createDOMElement('div', 'card-label priority', null);
    eventCardPriorityLabel.innerText = 'Priority';
    eventCardContainer.appendChild(eventCardPriorityLabel);

    const eventCardDifficultyLabel = createDOMElement('div', 'card-label difficulty', null);
    eventCardDifficultyLabel.innerText = 'Difficulty';
    eventCardContainer.appendChild(eventCardDifficultyLabel);

    const eventCardDurationLabel = createDOMElement('div', 'card-label duration', null);
    eventCardDurationLabel.innerText = 'Duration';
    eventCardContainer.appendChild(eventCardDurationLabel);


    //creating label for each attribute
    const eventCardName = createDOMElement('div', 'card-input name', null);
    eventCardName.innerText = anEvent.name;
    eventCardContainer.appendChild(eventCardName);

    const eventCardDescription = createDOMElement('div', 'card-input description', null);
    eventCardDescription.innerText = anEvent.description;
    eventCardContainer.appendChild(eventCardDescription);

    const eventCardDueDate = createDOMElement('div', 'card-input due-date', null);
    eventCardDueDate.innerText = anEvent.dueDate;
    eventCardContainer.appendChild(eventCardDueDate);

    const eventCardPriority = createDOMElement('div', 'card-input priority', null);
    eventCardPriority.innerText = anEvent.priority;
    eventCardContainer.appendChild(eventCardPriority);

    const eventCardDifficulty = createDOMElement('div', 'card-input difficulty', null);
    eventCardDifficulty.innerText = anEvent.difficulty;
    eventCardContainer.appendChild(eventCardDifficulty);

    const eventCardDuration = createDOMElement('div', 'card-input duration', null);
    eventCardDuration.innerText = anEvent.duration;
    eventCardContainer.appendChild(eventCardDuration);

    const cardFinishButton = createDOMElement('button', 'finish-btn', null);
    cardFinishButton.innerText = "Task Finished";
    eventCardContainer.appendChild(cardFinishButton);

}


