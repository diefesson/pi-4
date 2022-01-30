const statisticsRepository = require('../repositories/statistics-repository');

class StatisticsService {
    add(playerId, statistics) {
        return statisticsRepository.save(playerId, statistics);
    }

    getAll() {
        return statisticsRepository.findAll();
    }

    update(id, statistics) {
        return statisticsRepository.update(id, statistics);
    }

    delete(id) {
        return statisticsRepository.delete(id);
    }
}

module.exports = StatisticsService;