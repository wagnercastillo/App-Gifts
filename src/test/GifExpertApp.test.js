import GifExpertApp from "../GifExpertApp";

describe("Pruebas en el componente <GifExpertApp />", () => {
	
    test("Debe mostrar correctamente el componente", () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();

    });

});
