// Event Class

export function Event(name, description, dueDate, priority, difficulty, duration) {

    const eventObject = {
        name: name,
        description: description,
        dueDate: dueDate,
        priority: priority,
        difficulty: difficulty,
        duration: duration,
        finished: false,
    };

    return JSON.stringify(eventObject);
}