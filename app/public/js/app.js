// Application Controller

console.log("app.js loaded");

var config = require('clientconfig')
    ,domReady = require('domready');

// exports
module.exports = {

    // this is the the whole app init
    init: function () {

        var self = window.app = this;

        // wait for document ready to render our main view
        domReady(function () {

            var $table = $(".linksholder").dataTable();

            $.get('/files').then(function(data){
                $table.fnClearTable();
                $table.fnAddData(data);
            });

            // // init our main view
            // var mainView = self.view = new MainView({
            //     model: self.login,
            //     el: document.body
            // });

            // // ...and render it
            // mainView.render();

            // we have what we need, we can now start our router and show the appropriate page
            //self.router.history.start({pushState: true, root: '/'});
        });
    },


    // methods

};

// run it
module.exports.init();