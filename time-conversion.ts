// Given a time in 12 hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. 

s = '07:05:45PM';
    
function timeConversion(s: string): string {
    // Write your code here
    let [hours, min, sec] = s.split(':');
    const modifier = `${sec[2]}${sec[3]}`;
    sec = `${sec[0]}${sec[1]}`;
    
    if (hours === '12') hours = '00';
    if (modifier === 'PM') hours = (parseInt(hours, 10) + 12).toString();
    
    return `${hours}:${min}:${sec}`;
}
