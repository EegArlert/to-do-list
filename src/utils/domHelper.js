export function createDOMELement(tag, className, id) {
    const domObject = document.createElement(tag);

    //check if classname and id will be added to the object
    if (className === null || id === null) {
        if (className === null) {
            domObject.id = id;
            return domObject
        } else {
            domObject.classList.add(className);
            return domObject
        }
    
    } else {
        domObject.classList.add(className);
        domObject.id = id;
    }
}