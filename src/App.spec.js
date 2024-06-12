import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("renders tasks", () => {
    const wrapper = shallowMount(App, {
      data() {
        return {
          tasks: [
            { id: 1, title: "Learn Vue JS", completed: true },
            { id: 2, title: "Watch netflix", completed: true },
            { id: 3, title: "Go shopping", completed: false },
            { id: 4, title: "Learn guitar", completed: false },
            { id: 5, title: "Send email", completed: true },
          ],
        };
      },
    });
    expect(wrapper.findAll("task-stub").length).toBe(5);
  });
});
