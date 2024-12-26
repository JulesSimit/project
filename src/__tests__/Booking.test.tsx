import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import Booking from "../pages/Booking";

describe("Booking Component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Booking />
            </BrowserRouter>
        );
    });

    it("renders the booking form", () => {
        expect(screen.getByText("Book a Table")).toBeInTheDocument();
    });

    it("validates required fields", async () => {
        const submitButton = screen.getByText("Book Now");
        fireEvent.click(submitButton);

        expect(screen.getByText("Date is required")).toBeInTheDocument();
        expect(screen.getByText("Time is required")).toBeInTheDocument();
        expect(screen.getByText("Name is required")).toBeInTheDocument();
        expect(screen.getByText("Email is required")).toBeInTheDocument();
        expect(screen.getByText("Phone is required")).toBeInTheDocument();
    });

    it("validates email format", () => {
        const emailInput = screen.getByLabelText("Email");
        fireEvent.change(emailInput, { target: { value: "invalid-email" } });

        const submitButton = screen.getByText("Book Now");
        fireEvent.click(submitButton);

        expect(screen.getByText("Invalid email format")).toBeInTheDocument();
    });

    it("validates phone format", () => {
        const phoneInput = screen.getByLabelText("Phone Number");
        fireEvent.change(phoneInput, { target: { value: "123" } });

        const submitButton = screen.getByText("Book Now");
        fireEvent.click(submitButton);

        expect(screen.getByText("Invalid phone format")).toBeInTheDocument();
    });
});
