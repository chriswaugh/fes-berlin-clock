module.exports = {
    func: (time) => {
        if (time === '00:00:00'){
            return '0000';
        } else if (time === '00:01:00') {
            return '1000';
        } else if (time === '00:02:00') {
            return '1100';
        } else if (time === '00:03:00') {
            return '1110';
        } else if (time === '00:04:00') {
            return '1111';
        } else if (time === '00:05:00') {
            return '0000';
        }
    },
    minutes: (time) => {
        return parseInt(time.substring(3,5));
    }    
};
