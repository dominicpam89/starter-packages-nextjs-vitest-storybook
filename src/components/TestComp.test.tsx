import TestComp from "./TestComp";
import { screen, render } from "@testing-library/react";
import { it, expect, vi } from "vitest";

vi.mock("@/components/ui/button", () => ({
	Button: ({ children }: any) => <button>{children}</button>,
}));

it("Test Button does visible", () => {
	render(<TestComp />);
	const el = screen.getByText("Test Button");
	expect(el).toBeVisible();
});
