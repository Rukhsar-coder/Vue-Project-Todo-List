import { shallowMount } from "@vue/test-utils";
import Task from "@/components/Task.vue";
import TaskItem from "@/components/Task-item.vue";

describe("Task.vue", () => {
  it("renders a list of tasks", () => {
    const tasks = [
      { id: 1, title: "Test Task 1", completed: false },
      { id: 2, title: "Test Task 2", completed: true },
    ];
    const wrapper = shallowMount(Task, {
      propsData: { tasks },
    });
    expect(wrapper.findAllComponents(TaskItem)).toHaveLength(2);
  });

  it("adds a new task", async () => {
    const tasks = [];
    const wrapper = shallowMount(Task, {
      propsData: { tasks },
    });
    wrapper.setData({ newTask: "New Task" });
    await wrapper.vm.addTask();
    expect(wrapper.props().tasks).toHaveLength(1);
    expect(wrapper.props().tasks[0].title).toBe("New Task");
  });

  it("clears completed tasks", async () => {
    const tasks = [
      { id: 1, title: "Test Task 1", completed: false },
      { id: 2, title: "Test Task 2", completed: true },
    ];
    const wrapper = shallowMount(Task, {
      propsData: { tasks },
    });
    await wrapper.vm.clearCompleted();
    expect(wrapper.props().tasks).toHaveLength(1);
    expect(wrapper.props().tasks[0].title).toBe("Test Task 1");
  });
});
