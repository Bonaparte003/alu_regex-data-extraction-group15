export function html_tag_checker(text) {
    let html_tag_regex = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*\/?>/gi;
    let results = text.match(html_tag_regex);
    return results || [];
}