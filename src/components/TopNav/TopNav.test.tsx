import { cleanup, render, screen, waitFor } from '@testing-library/react';
import TopNav from './TopNav';


describe("Tests TopNavbar", () => {
    test("Should have gsynergy Logo on left hand-side", () => {
        render(<TopNav />);
        const linkElement = screen.queryAllByTestId("g-logo-test");
        expect(linkElement[0]).toBeInTheDocument();
    })
    afterEach(cleanup);
    test("Should have auth button right hand-side", () => {
        render(<TopNav />);
        const linkElement = screen.queryAllByTestId("auth-button-test");
        expect(linkElement[0]).toBeInTheDocument();
    })
    afterEach(cleanup);
})