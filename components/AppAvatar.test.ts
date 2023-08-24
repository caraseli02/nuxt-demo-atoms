import { mount } from "@vue/test-utils";
import { it, expect } from "vitest";
import Avatar from "./AppAvatar.vue";

it("renders avatar with provided title and subtitle", async () => {
  const wrapper = mount(Avatar, {
    props: {
      size: "sm",
      title: "John Doe",
      subtitle: "Software Developer",
    },
  });

  await wrapper.vm.$nextTick();

  const titleElement = wrapper.find(".avatar-text-title");
  const subtitleElement = wrapper.find(".avatar-text-subtitle");

  expect(titleElement.exists()).toBe(true);
  expect(titleElement.text()).toBe("John Doe");
  
  expect(subtitleElement.exists()).toBe(true);
  expect(subtitleElement.text()).toBe("Software Developer");
});

it("renders avatar with default image when imageUrl is not provided", async () => {
  const wrapper = mount(Avatar, {
    props: {
      size: "xl",
    },
  });

  await wrapper.vm.$nextTick();

  const imageElement = wrapper.find(".avatar-img");

  expect(imageElement.exists()).toBe(true);
  expect(imageElement.attributes("src")).toContain("https://via.placeholder.com/84x84");
});

it("renders avatar with provided image when imageUrl is provided", async () => {
  const imageUrl = "https://example.com/avatar.png";
  const wrapper = mount(Avatar, {
    props: {
      size: "xl",
      imageUrl,
    },
  });

  await wrapper.vm.$nextTick();

  const imageElement = wrapper.find(".avatar-img");

  expect(imageElement.exists()).toBe(true);
  expect(imageElement.attributes("src")).toBe(imageUrl);
});

it("applies correct classes for different sizes and directions", async () => {
  const wrapper = mount(Avatar, {
    props: {
      size: "sm",
      direction: "row",
    },
  });

  await wrapper.vm.$nextTick();

  const containerElement = wrapper.find(".avatar-container");

  expect(containerElement.exists()).toBe(true);
  expect(containerElement.classes()).toContain("align-center");
});
