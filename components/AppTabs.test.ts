import { mount } from "@vue/test-utils";
import { it, expect } from "vitest";
import Tabs from "../components/AppTabs.vue"; // Replace with the actual path to your component

it("renders correct number of tabs", () => {
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  const wrapper = mount(Tabs, {
    props: {
      tabs,
    },
    slots: {
      default: tabs.map((tab) => `<span>${tab}</span>`).join(""),
    },
  });

  const tabButtons = wrapper.findAll(".tab");
  expect(tabButtons.length).toBe(tabs.length);
});

it("changes selected tab on click", async () => {
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  const wrapper = mount(Tabs, {
    props: {
      tabs,
    },
    slots: {
      default: tabs.map((tab) => `<span>${tab}</span>`).join(""),
    },
  });

  const tabButtons = wrapper.findAll(".tab");

  await tabButtons[1].trigger("click");
  expect(wrapper.vm.selectedTab).toBe(tabs[1]);
});

it("applies active class to the selected tab label", async () => {
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  const wrapper = mount(Tabs, {
    props: {
      tabs,
    }
  });

  const tabButtons = wrapper.findAll(".tab");

  await tabButtons[1].trigger("click");
  const selectedTabLabel = tabButtons[1].find(".tab-label");
  expect(selectedTabLabel.classes()).toContain("active");
});
