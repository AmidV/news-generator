import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from './index.jsx';
import '@testing-library/jest-dom';

describe('SearchBar', () => {
    
  it('updates value on change', () => {
    render(<SearchBar/>);
    const searchInput = screen.queryByPlaceholderText(/Search for news/i);
    const test = "test";
    fireEvent.change(searchInput, { target: { value: test } });
    expect(searchInput.value).toBe(test);
    });

  it('search input should be rendered', () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText(/Search for news/i);
    expect(searchInput).toBeInTheDocument();
  });

  it('search input should be empty', () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText(/Search for news/i);
    expect(searchInput.value).toBe("");
  });

  it('submit button should be rendered', () => {
    render(<SearchBar />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

})













  // import { render, fireEvent, screen, cleanup } from '@testing-library/react';
// import SearchBar from '../components/search-bar';
// import App from './index';

// afterEach(cleanup);

// describe("App", () => {

//   it("App has a search bar", () => {
//     const {getByRole, getByText} = render(<App>
//                           <SearchBar />
//                          </App>);
//     expect(screen.getByText(/""/i).toContent).toBe("")
//     fireEvent.click(screen.getByRole("button", { name: /Add Button/i }))                     
    
//   }) 
// })

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });