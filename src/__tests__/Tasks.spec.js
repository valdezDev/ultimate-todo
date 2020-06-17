import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Tasks } from "../components/Tasks";
import { useSelectedProjectValue } from "../context";

jest.mock("../context", () => ({
  useSelectedProjectValue: jest.fn(),
  useProjectsValue: jest.fn(() => ({
    projects: [
      {
        name: "devtodo",
        projectId: "1",
        userId: "jlIFXIwyAL3tzHMtzRbw",
        docId: "paul-valdez",
      },
      {
        name: "Daily",
        projectId: "2",
        userId: "jlIFXIwyAL3tzHMtzRbw",
        docId: "daily-paul",
      },
      {
        name: "Future",
        projectId: "3",
        userId: "jlIFXIwyAL3tzHMtzRbw",
        docId: "workout",
      },
      {
        name: "words",
        projectId: "4",
        userId: "jlIFXIwyAL3tzHMtzRbw",
        docId: "journal",
      },
      {
        name: "blog",
        projectId: "5",
        userId: "jlIFXIwyAL3tzHMtzRbw",
        docId: "dev-blog",
      },
    ],
  })),
}));

jest.mock("../hooks", () => ({
  useTasks: () => ({
    tasks: [
      {
        id: "mx2taaXpF38vYqMGbVtY",
        archived: false,
        date: "6/16/2020",
        projectId: "1",
        task: "go grocery shopping",
        userId: "jlIFXIwyAL3tzHMtzRbw",
      },
    ],
  }),
}));

beforeEach(cleanup);

describe("<Tasks />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders tasks", () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => "INBOX"),
      selectedProject: "INBOX",
    }));

    const { queryByTestId } = render(<Tasks />);
    expect(queryByTestId("tasks")).toBeTruthy();
    expect(queryByTestId("project-name").textContent).toBe("Inbox");
  });

  it("renders a task with a project title", () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => "1"),
      selectedProject: "1",
    }));

    const { queryByTestId } = render(<Tasks />);
    expect(queryByTestId("tasks")).toBeTruthy();
    expect(queryByTestId("project-name").textContent).toBe("devtodo");
  });

  it("renders a task with a collated title", () => {
    useSelectedProjectValue.mockImplementation(() => ({
      setSelectedProject: jest.fn(() => "INBOX"),
      selectedProject: "INBOX",
    }));

    const { queryByTestId } = render(<Tasks />);
    expect(queryByTestId("tasks")).toBeTruthy();
    expect(queryByTestId("project-name").textContent).toBe("Inbox");
  });
});
