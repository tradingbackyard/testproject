function Framework (config) {
    this.convertCsvToCandle = function (rawData) {
        var allTextLines = rawData.split(/\r\n|\n/);
        
        if (this.remove_last) {
            allTextLines.pop();// remove last element which is empty due to the last /n at the end of the last line
        }

        allTextLines.shift();// remove first line - the headers of the array
        allTextLines = allTextLines.slice(this.offset);
        var d=[], o=[], h=[], l=[], c=[], v=[];
        var adjust = 0;
        for(var i=0; i < allTextLines.length; i++) {
            var entries = allTextLines[i].split(',');
            d.push(new Date(this.format_date(entries[0])));
            var oo = entries[1];
            var hh = entries[2];
            var ll = entries[3];
            var cc = entries[4];
            var vv = entries[5];
            var adjC = entries[6];
            
            o.push(Number(oo));
            h.push(Number(hh));
            l.push(Number(ll));
            c.push(Number(cc));
            v.push(Number(vv));
        }

        return { 
            d:d, 
            o:o, 
            h:h, 
            l:l, 
            c:c, 
            v:v 
        };
    };

    this.drawLine = function () {
      //TODO
    };    

   this.init = function () {
      //TODO init graphing
   };
   
   this.render = function(options) {
      //TODO 
      //Render 1 candle
   };
    
    //==============================================
    return this;
}

function reformat_date (str) {
    // '10.02.1986 19:00:00.000 GMT-0500'
    var parts = str.split(' ');
    var date_parts = parts[0].split('.');
    var fixed_date = date_parts[1] + '-' + date_parts[0] + '-' + date_parts[2];
    return fixed_date + parts[1] + parts[2];
}
