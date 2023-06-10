const store = (set) => ({
  task: [{ title: "TestTask", state: "PLANED" }],
});

export const useStore = create(store);
