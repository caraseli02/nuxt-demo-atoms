import { mount } from "@vue/test-utils";
import { it, expect } from "vitest";
import Button from "../components/Button.vue";

it("renders button with provided label", () => {
  const wrapper = mount(Button, {
    props: {
      label: "Test Label",
    },
  });

  const button = wrapper.get('[data-test="btn"]');
  expect(button.text()).toBe("Test Label");
});

it("button has default class 'atoms-button'", () => {
  const wrapper = mount(Button, {
    props: {
      label: "Test Label",
    },
  });

  const button = wrapper.get('[data-test="btn"]');
  expect(button.classes()).toContain("atoms-button");
});
