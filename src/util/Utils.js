class Utils {
    static regexNum(str) {        
        let val = new String(str);
        const regex = /[^0-9]/g;
        val = val.replace(regex, '');        
        
        return val;
    }
}

export default Utils