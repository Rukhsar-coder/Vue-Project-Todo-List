import { shallowMount } from "@vue/test-utils";
import TaskItem from "@/components/TaskItem.vue";

describe("TaskItem.vue", () => {
  const task = { title: "Test Task", completed: false };

  it("renders task title", () => {
    const wrapper = shallowMount(TaskItem, {
      propsData: { task },
    });
    expect(wrapper.text()).toContain(task.title);
  });

  it("emits complete event on button click", async () => {
    const wrapper = shallowMount(TaskItem, {
      propsData: { task },
    });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().complete).toBeTruthy();
  });

  it("emits remove event on button click", async () => {
    const wrapper = shallowMount(TaskItem, {
      propsData: { task },
    });
    await wrapper.findAll("button").at(1).trigger("click");
    expect(wrapper.emitted().remove).toBeTruthy();
  });

  it("applies correct class based on task completion", () => {
    const wrapper = shallowMount(TaskItem, {
      propsData: { task: { ...task, completed: true } },
    });
    expect(wrapper.classes()).toContain("toggle-completed");
  });
});
