"use strict";
function scheduleTasks(tasks) {
    const taskQueue = tasks.map(([id, execTime]) => ({
        id,
        execTime,
        queuedAt: Date.now()
    }));
    const interval = setInterval(() => {
        // Check if all tasks have been executed
        if (taskQueue.length === 0) {
            clearInterval(interval); // Stop setInterval's execution
            console.log("✅ All tasks have been executed.");
            return;
        }
        const now = Date.now();
        // Split tasks into those waiting at least 50ms and others
        const waitingLongEnough = taskQueue.filter(task => now - task.queuedAt >= 50);
        let nextTask;
        if (waitingLongEnough.length > 0) {
            // Pick the one with the *longest* wait time
            nextTask = waitingLongEnough.reduce((a, b) => a.queuedAt < b.queuedAt ? a : b);
        }
        else {
            // Pick the one with the *shortest* execution time
            nextTask = taskQueue.reduce((a, b) => a.execTime < b.execTime ? a : b);
        }
        // Simulate execution
        console.log(`🛠️ Executing task ${nextTask.id} (execTime: ${nextTask.execTime}ms)`);
        // Remove task from the queue
        const index = taskQueue.findIndex(task => task.id === nextTask.id);
        if (index !== -1)
            taskQueue.splice(index, 1);
    }, 10); // Run every 10ms
}
// Example usage
const tasks = [
    [1, 5],
    [2, 15],
    [3, 68]
];
scheduleTasks(tasks);
