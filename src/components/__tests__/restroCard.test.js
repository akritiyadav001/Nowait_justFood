import MOCK_DATA from '../mocks/rescardMock.json';
import {render, screen} from '@testing-library/react'; 
import RestroCard from '../restrocard';
import "@testing-library/dom"; 
it("should render restroCard with the data", () =>{
    render(<RestroCard  restobject={MOCK_DATA}/>)
    const name = screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument();
});

