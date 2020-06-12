import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Tasks } from "../components/Tasks";
import { useSelectedProjectValue } from "../context";

jest.mock("../context", () => ({
  useSelectedProjectValue: jest.fn(),
  useProjectsValue: jest.fn(() => ({
    projects: [
      {
        name: "proj-1",
        projectId: "1",
        userId: "adjf0139jc",
        docId: "proj-1-docid",
      },
      {
        name: "proj-2",
        projectId: "2",
        userId: "9dafjadif",
        docId: "proj-2-docid",
      },
      {
        name: "proj-3",
        projectId: "3",
        userId: "cmdsakfj03",
        docId: "proj-3-docid",
      },
    ],
  })),
}));

jest.mock("../hooks"),
  () => ({
    useTasks: () => ({
      tasks: [
        {
          id: "06Q6MUzpskWyxHhdNMn8",
          archived: false,
          date: "18/02/2020",
          projectId: "5",
          task: "testTask",
          userID: "user-collection-value",
        },
      ],
    }),
  });

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
    expect(queryByTestId("project-name").textContent).toBe("proj-1");
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
