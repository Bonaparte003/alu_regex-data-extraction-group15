export function phone_checker(text) {
    let phone_regex = /(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}/g;
    let results = text.match(phone_regex) || [];
    results = results.filter(phone => {
        let digits = phone.replace(/\D/g, '');
        return digits.length === 10;
    });

    return results;
}