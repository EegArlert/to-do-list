// Event Class

export function Event(taskId, name, description, dueDate, priority, difficulty, duration, finished) {

    const eventObject = {
        taskId: taskId,
        name: name,
        description: description,
        dueDate: dueDate,
        priority: priority,
        difficulty: difficulty,
        duration: duration,
        finished: finished,
    };

    return JSON.stringify(eventObject);
}