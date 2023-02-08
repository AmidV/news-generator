import { render, screen } from '@testing-library/react';
import Navbar from './index.jsx';
import '@testing-library/jest-dom';

describe('Navbar', () => {
    
    it('GitHub link sould be rendered', () => {
      render(<Navbar/>);
      const git= screen.getByTestId(/git/i);
      expect(git).toBeInTheDocument();
    });

    it('LinkedIn link should be rendered', () => {
      render(<Navbar/>);
      const linkIn = screen.getByTestId(/link/i);
      expect(linkIn).toBeInTheDocument();
    });

    it('Logo should be rendered', () => {
        render(<Navbar/>);
        const logo = screen.getByTestId(/logo/i);
        expect(logo).toBeInTheDocument();
    });

})