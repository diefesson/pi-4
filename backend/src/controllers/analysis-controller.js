const Analysis = require("../domain/analysis");
const AnalysisService = require("../services/analysis-service");
var analysisService = new AnalysisService();

exports.get = async (req, res) => {
  res.json(await analysisService.getAll());
};

exports.post = async (req, res) => {
    let analysis = await analysisService.add(
        req.body.playerId,
        req.body.questionId,
        new Analysis(req.body.status)
    );
  
    if (analysis != null) {
        res.status(201).json(analysis);
    } else {
        res.status(409).send();
    }
};

exports.put = async (req, res) => {
  res.json(
    await analysisService.update(
      req.params.id,
      new Analysis(req.body.status)
    )
  );
};

exports.delete = (req, res) => {
  res.json(analysisService.delete(req.params.id));
};