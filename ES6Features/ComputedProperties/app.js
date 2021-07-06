var osPrefix = 'os_';

var isSupported = function(os) {
    return Math.random() >= 0.5;
}
var support = {
    [osPrefix + 'windows'] : isSupported('Windows'),
    [osPrefix + 'os_iOS'] : isSupported('iOS'),
    [osPrefix + 'os_Android'] : isSupported('Android')
}

console.log(support);