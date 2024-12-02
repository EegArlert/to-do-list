export function eventKeyListener(arr, callback) {
    // This returns the key of the container event being clicked
    arr.forEach((container) => {
        container.addEventListener('click', () => {
            const key = container.id.split("-")[1];
            callback(key);
        })
    })
};


export function toggle(containerArr, handleToggle) {
    containerArr.forEach(element => {
        element.addEventListener('click', () => {
            handleToggle(classList);
        })
    });
}




