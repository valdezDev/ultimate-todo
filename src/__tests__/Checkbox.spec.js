import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Checkbox } from "../components/Checkbox";

beforeEach(cleanup); // clean the DOM

// mocks out archiveTask
jest.mock("../firebase", () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.jest.fn(() => ({
        doc: jest.fn(() => ({
          update: jest.fn()
        }))
      }))
    }))
  }
}));

describe("<Checkbox />", () => {
  describe("Success", () => {
    it("renders the task checkbox", () => {
      const { queryByTestId, debug } = render(
        <Checkbox id="1" taskDesc="react test description" />
      );
      // debug();
      expect(queryByTestId("checkbox-action")).toBeTruthy();
    });
  });
});
