function filterByStatus(personagens, status) {
    return personagens.filter(personagem => personagem.status === status);
}

module.exports = {
    filterByStatus
}