const analysisRepository = require('../repositories/analysis-repository');

class AnalysisService {
    add(playerId, questionId, analysis) {
        return analysisRepository.save(playerId, questionId, analysis);
    }

    getAll() {
        return analysisRepository.findAll();
    }

    update(id, analysis) {
        return analysisRepository.update(id, analysis);
    }

    delete(id) {
        return analysisRepository.delete(id);
    }
}

module.exports = AnalysisService;