const sayDate = function(str){
        console.log(str, Date.now());
    }

    const intervalId = setInterval(sayDate, 1000, "hi")

    clearInterval(intervalId)