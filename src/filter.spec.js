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

    describe('Sexo', () => {
        it("Retorna somente personagens do sexo masculino", () => {
            const response = filter.filterByGender(data.results, "Male");
            expect(response.length).toBe(15);
        })

        it("Retorna somente personagens do sexo feminino", () => {
            const response = filter.filterByGender(data.results, "Female");
            expect(response.length).toBe(4);
        })

        it("Retorna somente personagens sem sexo definido", () => {
            const response = filter.filterByGender(data.results, "unknown");
            expect(response.length).toBe(1);
        })
    })

    describe('Episódios', () => {
        
        it("Retorna o Ep 6 da URL", () => {
            const url = "https://rickandmortyapi.com/api/episode/6";
            expect(filter.getEpisodeFromURL(url)).toBe('6');
        })

        it("Retorna um array de números dos episódios", () => {
            const personagem = data.results[6];
            expect(personagem.name).toBe('Abradolf Lincler');
            expect(filter.generateEpisodeList(personagem)).toEqual(['10', '11']);
        })

        it("Retorna um array de números dos episódios", () => {
            const personagem = data.results[6];
            const ricky = data.results[0];
            const episodes = {
                "10": [ricky],
                "11": [ricky]
            }
            const response = filter.mapCharacterToEpisodes(episodes, personagem);
            expect(response["10"].length).toBe(2);
        })
    })

})