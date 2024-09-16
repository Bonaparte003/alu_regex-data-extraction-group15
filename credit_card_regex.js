export function credit_card_checker(text) {
    let credit_card_regex = /\b(?:\d{4}[-\s]?){3}\d{4}\b/g;
    let results = text.match(credit_card_regex);
    return results || [];
}
