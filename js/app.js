requirejs.config({
    baseUrl: 'js/lib',

    paths: {
        domReady: "domReady",
        zepto: 'zepto',
        require:"require",
        ejs:"ejs"
    }

});

// Start the main app logic.
requirejs(['domReady', 'zepto'],
    function (domReady, $) {
        console.log("fdfdfd");
        //jQuery, canvas and the app/sub module are all
        //loaded and can be used here now.
    }
);