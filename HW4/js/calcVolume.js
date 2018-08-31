

    function startProcess() {
            var length;
            var width;
            var height;           
            var i;
            var volume;

            for (i = 1; i <= 10; i++) {
                length = i + 2;
                width = i + 3;
                height = i + 4;


    volume = getVolume(length, width, height);

                if ((volume > 0) && (volume <= 300)) {
        document.write('small volume: ' + volume + '<br>');
    }
                else if (volume > 300 && volume <= 600) {
        document.write('medium volume: ' + volume + '<br>');
    }
                else if (volume > 600 && volume <= 1000) {
        document.write('large volume: ' + volume + '<br>');
    }
                else if (volume > 1000) {
        document.write('extra large volume: ' + volume + '<br>');
    }
                else
        document.write('error');
}
}
        function getVolume(length, width, height) {
            var result = (length * width * height);
            return result;
}
  

    
