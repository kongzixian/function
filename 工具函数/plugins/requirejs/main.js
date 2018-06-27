require.config({
    baseUrl:"plugins/",
    paths:{
        jquery:"jQuery/jquery.min",
        bootstrap:"bootstrap/js/bootstrap",
        lodash:"lodash/3.10.1/lodash",
        toolFrame:"toolFrame/toolFrame",
        GlobalTools:"globalTools/globalTools",

       
    },
    shim:{
        jquery:{exports:"jquery"},
        bootstrap:{
            deps:["jquery"],
            exports:"bootstrap"
        },
        lodash:{
            deps:["jquery"],
            exports:"lodash"
        },
        GlobalTools:{
            deps:["jquery"],
            exports:"GlobalTools"
        }
    }
});