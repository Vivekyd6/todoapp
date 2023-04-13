// mockApi.js

// A mock database of tasks
const mockData = [
  {
    id: 1,
    createdTimestamp: "2022-04-10T10:30:00Z",
    title: "Buy Groceries",
    description: "Buy milk, eggs, bread, and cheese",
    dueDate: "2022-04-12T10:30:00Z",
    tags: ["groceries", "shopping"],
    status: "OPEN",
  },
  {
    id: 2,
    createdTimestamp: "2022-04-11T13:45:00Z",
    title: "Do Laundry",
    description: "Wash clothes and fold them",
    dueDate: "2022-04-15T13:45:00Z",
    tags: ["chores"],
    status: "OPEN",
  },
];

// Get a list of all tasks
export const getTodoList = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
};

// Create a new task
export const createTodoItem = async (newTask) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const nextId = mockData.length + 1;
      const newTaskWithId = { ...newTask, id: nextId };
      mockData.push(newTaskWithId);
      resolve(newTaskWithId);
    }, 1000);
  });
};

// Update an existing task
export const updateTodoItem = async (taskId, updatedTask) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = mockData.findIndex((task) => task.id === taskId);
      if (index === -1) {
        resolve(null);
        return;
      }
      const updatedTaskWithId = { ...updatedTask, id: taskId };
      mockData[index] = updatedTaskWithId;
      resolve(updatedTaskWithId);
    }, 1000);
  });
};

// Delete an existing task
export const deleteTodoItem = async (taskId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = mockData.findIndex((task) => task.id === taskId);
      if (index === -1) {
        resolve(null);
        return;
      }
      const deletedTask = mockData.splice(index, 1);
      resolve(deletedTask[0]);
    }, 1000);
  });
};


export const mockApi = {
  createTodoItem,
  getTodoList,
  updateTodoItem,
  deleteTodoItem
};
