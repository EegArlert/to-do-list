import { format, intlFormat, isAfter, isBefore, parseISO } from "date-fns";
import { getAllEvent } from "../store/localStorage";


export function sortByDueDate() {

    const objArr = getAllEvent();

    const keyValuePair = objArr.map((event, index) => ({
        key: event.taskId,
        dueDate: event.dueDate,
    }));

    let sortedResult = []

    // Insertion sort implementation
    for (let i = keyValuePair.length - 2; i >= 0; i--) {
        const tempPointer = keyValuePair[i];
        let j = i + 1;

        while (
            //checking if the sorted index pointer pointing on the last index
            // and not go pass it
            (j < keyValuePair.length) &&
            //checking if the greater index has date that is less recent
            // than the smaller index 
            (isBefore(keyValuePair[j].dueDate, tempPointer.dueDate))) {
            //we swap the value of the bigger index to the index that is bigger
            //and the value that is smaller to the index that is smaller
            keyValuePair[j - 1] = keyValuePair[j];

            j++
        }

        keyValuePair[j - 1] = tempPointer


    }

    // console.log("After Sorting:", keyValuePair);


    keyValuePair.forEach(obj => {
        sortedResult.push(obj.key);
    });
    return sortedResult
}


export function sortByPriority() {

    const objArr = getAllEvent();


    const keyValuePair = objArr.map((event) => ({
        key: event.taskId,
        priority: callBackPriority(event)
    }));

    console.log(keyValuePair)

    let sortedResult = []

    for (let i = 1; i < keyValuePair.length; i++) {
        //instantiate for temporary pointer
        const tempPointer = keyValuePair[i];
        // console.log(tempPointer)

        //instantiate for sorted pointer
        let j = i - 1;

        //handle swapping between less important and more important
        //priority

        //this part check if condition of the value of array[temp] is smaller than array[j] (before temp)
        while (j >= 0 &&
            (tempPointer.priority < keyValuePair[j].priority)
        ) {
            keyValuePair[j + 1] = keyValuePair[j];
            j--
        }
        keyValuePair[j + 1] = tempPointer
    }

    keyValuePair.forEach(set => {
        sortedResult.push(set.key)
    });

    return sortedResult
}


function callBackPriority(event) {
    if (event.priority === 'low') {
        return 1
    } else if (event.priority === 'medium') {
        return 2
    } else {
        return 3
    }
}

export function sortByDuration() {
    let resultSet = [];

    //get all available  event in form of an array
    const objArr = getAllEvent();
    console.log(objArr)

    //create an array of object key-duration from all event
    const keyValuePair = objArr.map((event) => ({
        key: event.taskId,
        duration: callBackDuration(event.duration)
    }));
    console.log(keyValuePair)

    //insertion sort
    for (let i = 1; i < keyValuePair.length; i++) {
        const tempValue = keyValuePair[i];
        let j = i - 1;

        while(j >= 0 && 
            tempValue.duration < keyValuePair[j].duration) {
                keyValuePair[j + 1] = keyValuePair[j];
                j--
            }

            keyValuePair[j + 1] = tempValue;
    }

    keyValuePair.forEach(event => {
        resultSet.push(event.key)
    })

    return resultSet
}

function callBackDuration(param) {
    if(param == "long"){
        return 3
    }
    else if (param == "medium") {
        return 2
    }
    else {
        return 1
    }
}