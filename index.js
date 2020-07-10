const utils = {
    isNaN:(number)=>{
        return isNaN(number);
    },
    isArray:(obj)=>{
        // only implement if no native implementation is available
        if (typeof Array.isArray === 'undefined') {
            Array.isArray = function(obj) {
                return Object.prototype.toString.call(obj) === '[object Array]';
            }
        };
        return Array.isArray(obj)
    },
    test:()=>{
        console.log("jitu-test npm package is working");
    }

}
module.exports = utils;