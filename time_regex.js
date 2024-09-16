export function time_checker(text) {
    let time_regex = /(?:(?:0?[1-9]|1[0-2]):[0-5]\d\s?(?:AM|PM)|(?:[01]?\d|2[0-3]):[0-5]\d)/g;
    let results = text.match(time_regex);
    return results || [];
}