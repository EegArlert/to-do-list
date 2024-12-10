export function createDOMElement(tag, className, id) {
    const domObject = document.createElement(tag);

    //check if classname and id will be added to the object
    if (className === null && id === null){
        return domObject;
    }
    else if (className === null || id === null) {
        if (className === null) {
            domObject.id = id;
            return domObject
        } else {
            const classNameArr = className.split(" ");
            classNameArr.forEach(className => {
                domObject.classList.add(className);
            });
            return domObject
        }
    }
    else {
    const classNameArr = className.split(" ");
    classNameArr.forEach(className => {
        domObject.classList.add(className);
    });

    domObject.id = id;

    return domObject;
}
}

export function selectDOMElement(elementName) {
    const domObject = document.querySelector(elementName);
    return domObject;
}


export function styleCard(element) {

    element.style.backgroundColor = '#ADD8E6'

}
export function toggle(containerArr, className) {
    // Check if containerArr is an array or NodeList
    if (containerArr instanceof NodeList || Array.isArray(containerArr)) {
        // Loop through the elements
        containerArr.forEach(element => {
            element.classList.toggle(className);
        });
    } else if (containerArr instanceof HTMLElement) {
        // Single HTMLElement
        containerArr.classList.toggle(className);
    } else {
        console.error("Invalid input passed to toggle: ", containerArr);
    }
}