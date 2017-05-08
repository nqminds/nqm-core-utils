(function() {
    var exLog = console.log;
    console.log = function(msg) {
        exLog.apply(this, arguments);
        alert(msg);
    }
})();

export default console.log;
