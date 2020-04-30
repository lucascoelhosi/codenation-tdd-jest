const filter = require("./filter");
const data = require('./data/data.json');

describe('Filter', () => {

    describe('Status', () => {
        it("Retorna somente personagens vivos", () => {
            const response = filter.filterByStatus(data.results, "Alive");
            expect(response.length).toBe(8);
        })

        it("Retorna somente personagens mortos", () => {
            const response = filter.filterByStatus(data.results, "Dead");
            expect(response.length).toBe(6);
        })

        it("Retorna somente personagens desconhecidos", () => {
            const response = filter.filterByStatus(data.results, "unknown");
            expect(response.length).toBe(6);
        })
    })

    // describe('Sexo', () => {
    //     it("Retorna somente personagens do sexo masculino", () => {
    //         const response = filter.filterBySex(data.results, "Male");
    //         expect(response.length).toBe(15);
    //     })
    // })

})