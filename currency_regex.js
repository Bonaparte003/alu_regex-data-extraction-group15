export function currency_checker(text) {
    let currency_regex = /(?:\$|€|£)\d{1,3}(?:,\d{3})*(?:\.\d{2})?/gi;
    let results = text.match(currency_regex);
    return results || [];
}
