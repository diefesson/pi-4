// Controle sobre o valor do premio

const hit = [
    {
        "round":1 , "value": 1000
    },
    {
        "round":2 , "value": 5000
    },
    {
        "round":3 , "value": 50000
    },
    {
        "round":4 , "value": 100000
    },
    {
        "round":5 , "value": 300000
    },
    {
        "round":6 , "value": 500000
    },
    {
        "round":7 , "value": 1000000
    }
];

const stop = [
    {
        "round":1 , "value": 0
    },
    {
        "round":2 , "value": 1000
    },
    {
        "round":3 , "value": 5000
    },
    {
        "round":4 , "value": 50000
    },
    {
        "round":5 , "value": 100000
    },
    {
        "round":6 , "value": 300000
    },
    {
        "round":7 , "value": 500000
    }
];

const wrong = [
    {
        "round":1 , "value": 0
    },
    {
        "round":2 , "value": 500
    },
    {
        "round":3 , "value": 2500
    },
    {
        "round":4 , "value": 25000
    },
    {
        "round":5 , "value": 50000
    },
    {
        "round":6 , "value": 150000
    },
    {
        "round":7 , "value": 0
    }
];


module.exports = {hit, stop, wrong};