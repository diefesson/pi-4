class Questions {
    constructor(createdPlayerId, utterance, answers,id=undefined) {
      this.id = id;
      this.createdPlayerId = createdPlayerId;
      this.utterance = utterance;      
      this.answers = answers;
    }
  }
  
module.exports = Questions;