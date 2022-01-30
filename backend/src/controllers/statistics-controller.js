const Statistics = require("../domain/statistics");
const StatisticsService = require("../services/statistics-service");
var statisticsService = new StatisticsService();

exports.get = async (req, res) => {
  res.json(await statisticsService.getAll());
};

exports.post = async (req, res) => {
    let statistics = await statisticsService.add(
        req.body.playerId,
        new Statistics(req.body.status, req.body.statusDescription, req.body.correctTotal)
    );
  
    if (statistics != null) {
        res.status(201).json(statistics);
    } else {
        res.status(409).send();
    }
};

exports.put = async (req, res) => {
  res.json(
    await statisticsService.update(
      req.params.id,
      new Statistics(req.body.status, req.body.statusDescription, req.body.correctTotal)
    )
  );
};

exports.delete = (req, res) => {
  res.json(statisticsService.delete(req.params.id));
};