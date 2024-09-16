export function hashtag_checker(text) {
    let hashtag_regex = /#[\w]+/g;
    let results = text.match(hashtag_regex);
    return results || [];
}