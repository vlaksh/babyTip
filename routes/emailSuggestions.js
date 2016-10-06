module.exports = function (config) {
    var express = require('express');
    var router = express.Router();

    /* GET home page. */
    router.get('/emailSuggestions', function (req, res) {
        var html = req.query.html;

        //TODO: also read in dates to support deep linking
        console.log(html);
    });

    return router;
}
