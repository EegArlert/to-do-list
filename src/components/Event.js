// Event Class

export function Event(name, description, priority, difficulty, duration) {

    const eventObject = {
        name: name,
        description: description,
        priority: priority,
        difficulty: difficulty,
        duration: duration  
    };

    return JSON.stringify(eventObject);
}