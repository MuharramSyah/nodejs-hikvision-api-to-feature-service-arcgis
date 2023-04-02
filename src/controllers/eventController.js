const eventType = require('../helper/eventType');

module.exports = {
    /**
     * Get behaviour event alarm
     * @param {*} req 
     * @param {*} res 
     */
    behaviour: (req, res) => {
        var body = req.param('event');
        
        /* TODO */
    },

    /**
     * Get motion event alarm
     * @param {*} req 
     * @param {*} res 
     */
    motion: (req, res) => {
        var body = req.param('event');
        
        /* TODO */
    },

    /**
     * Get Crowd detection data
     * @param {*} req 
     * @param {*} res 
     */
    density: (req, res) => {
        var body = req.param('event');
    
        /* TODO */
    },
}