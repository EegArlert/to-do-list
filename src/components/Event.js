// Event Class

export function Event(name, description, dueDate, priority, difficulty, duration, key) {

    const eventObject = {
        name: name,
        description: description,
        dueDate: dueDate,
        priority: priority,
        difficulty: difficulty,
        duration: duration ,
    };

    return JSON.stringify(eventObject);
}