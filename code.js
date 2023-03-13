var result = [];
var dataPoint = null;
var length = data.length;

for (var i = length - 1; i > 0; i--) {
    dataPoint = {
        "x": length-i,
        "y1": data[i].value
    };
    result.push(dataPoint);
}
return result;
