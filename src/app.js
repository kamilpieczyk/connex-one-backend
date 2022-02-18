"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    function App(app, port) {
        app.listen(port, function () {
            console.log("\uD83D\uDE80 app is running at port: \u2693".concat(port));
        });
    }
    return App;
}());
exports["default"] = App;
