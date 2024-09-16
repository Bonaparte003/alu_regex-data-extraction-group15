export function email_checker(text) {
    let email_regex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/g;
    let results = text.match(email_regex);
    return results || [];
}