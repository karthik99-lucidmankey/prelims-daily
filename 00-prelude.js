// Prelims Daily — question bank (built from src/*.js by build.js)
// Fields: id, mode ("easy" | "exam"), subj, topic, type ("mcq" | "statements" | "match" | "assertion"),
// stem, items (statements), heads + pairs (match), s1 + s2 (assertion), tail, opts (assertion: optional),
// ans (0-based), take (one-line takeaway), why, rev (where to revise), links [{t,u}],
// tag (e.g. "PYQ 2019"), num ("arabic" for PYQs; default roman numbering in Exam Mode)
var Q = [];
function W(title, query){ return {t: title, u: "https://en.wikipedia.org/w/index.php?title=Special:Search&go=Go&search=" + encodeURIComponent(query || title)}; }
function WP(title, page){ return {t: title, u: "https://en.wikipedia.org/wiki/" + page}; }
