// Prelims Daily — question bank (built into questions.js by build.js)
// Question fields: id, mode ("easy" | "exam"), subj, topic, type ("mcq" | "statements" | "match" | "assertion"),
//   stem, items (statements), heads + pairs (match), s1 + s2 (assertion), tail, opts (assertion: optional),
//   ans (0-based), take (one-line takeaway), why, rev (where to revise), links [{t,u}],
//   num ("arabic" for statements numbered 1, 2, 3; default is I, II, III),
//   tag + pyq: past papers only — tag "PYQ 2019", pyq {y: 2019, q: <question number in Series A>}.
// "Why this option is wrong" data (also feeds Coffee Break):
//   mcq:        wn  [4 reasons, null at the answer]
//   statements: sv  [1/0 per statement: is it correct?]   sr [one reason per statement]
//   match:      pv  [1/0 per pair: correctly matched?]    pr [one reason per pair]
//   assertion:  av  [I correct?, II correct?, II explains I?]  ar [three reasons]
//   cx: context line for Coffee Break when the stem doesn't give one; cf: false, or indexes to keep out of Coffee Break.
// Coffee Break facts (coffee.js): F.push({id, subj, text, truth: true|false, why, link})
var Q = [];
var F = [];
function W(title, query){ return {t: title, u: "https://en.wikipedia.org/w/index.php?title=Special:Search&go=Go&search=" + encodeURIComponent(query || title)}; }
function WP(title, page){ return {t: title, u: "https://en.wikipedia.org/wiki/" + page}; }
