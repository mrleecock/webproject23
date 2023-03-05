// helpper for formatting date string
export function time_passed_str(str)
    {
        let a = new Date();
        let b = new Date(str);
        let millis = a.getTime() - b.getTime();
        if (millis < 1000*60*2) return `${Math.floor(millis/1000)} seconds ago`;
        if (millis < 1000*60*60*2) return `${Math.floor(millis/60000)} minutes ago`;
        if (millis < 1000*60*60*24*2) return `${Math.floor(millis/3600000)} hours ago`;
        if (millis < 1000*60*60*24*30) return `${Math.floor(millis/86400000)} days ago`;
        return str;
        
    }