(function(){
    var array = ['я','умею','писать','рекурсивные','функции'];
    var n = 0;
    function consoleRec(array,position){

        console.log(array[n]);
        n = n+1;
        if(n <= array.length-1){
            consoleRec(array,n)
        }
    };
    consoleRec(array,n);
}());
