(
    function(){
        var userName = "Mark";

        function showName(name){
            console.log(userName);
        }

        showName(userName);
    }
    
)()

// passing the parameters inside the iffy

var userName = 'Spencer';

(
    function(name){ 
        
        function showName(name){
            console.log(name);
        }

        showName(name);
    }
)(userName);
