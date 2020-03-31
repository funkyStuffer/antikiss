function md5cycle(f, h) {
    var i = f[0],
        n = f[1],
        r = f[2],
        g = f[3];
    n = ii(n = ii(n = ii(n = ii(n = hh(n = hh(n = hh(n = hh(n = gg(n = gg(n = gg(n = gg(n = ff(n = ff(n = ff(n = ff(n, r = ff(r, g = ff(g, i = ff(i, n, r, g, h[0], 7, -680876936), n, r, h[1], 12, -389564586), i, n, h[2], 17, 606105819), g, i, h[3], 22, -1044525330), r = ff(r, g = ff(g, i = ff(i, n, r, g, h[4], 7, -176418897), n, r, h[5], 12, 1200080426), i, n, h[6], 17, -1473231341), g, i, h[7], 22, -45705983), r = ff(r, g = ff(g, i = ff(i, n, r, g, h[8], 7, 1770035416), n, r, h[9], 12, -1958414417), i, n, h[10], 17, -42063), g, i, h[11], 22, -1990404162), r = ff(r, g = ff(g, i = ff(i, n, r, g, h[12], 7, 1804603682), n, r, h[13], 12, -40341101), i, n, h[14], 17, -1502002290), g, i, h[15], 22, 1236535329), r = gg(r, g = gg(g, i = gg(i, n, r, g, h[1], 5, -165796510), n, r, h[6], 9, -1069501632), i, n, h[11], 14, 643717713), g, i, h[0], 20, -373897302), r = gg(r, g = gg(g, i = gg(i, n, r, g, h[5], 5, -701558691), n, r, h[10], 9, 38016083), i, n, h[15], 14, -660478335), g, i, h[4], 20, -405537848), r = gg(r, g = gg(g, i = gg(i, n, r, g, h[9], 5, 568446438), n, r, h[14], 9, -1019803690), i, n, h[3], 14, -187363961), g, i, h[8], 20, 1163531501), r = gg(r, g = gg(g, i = gg(i, n, r, g, h[13], 5, -1444681467), n, r, h[2], 9, -51403784), i, n, h[7], 14, 1735328473), g, i, h[12], 20, -1926607734), r = hh(r, g = hh(g, i = hh(i, n, r, g, h[5], 4, -378558), n, r, h[8], 11, -2022574463), i, n, h[11], 16, 1839030562), g, i, h[14], 23, -35309556), r = hh(r, g = hh(g, i = hh(i, n, r, g, h[1], 4, -1530992060), n, r, h[4], 11, 1272893353), i, n, h[7], 16, -155497632), g, i, h[10], 23, -1094730640), r = hh(r, g = hh(g, i = hh(i, n, r, g, h[13], 4, 681279174), n, r, h[0], 11, -358537222), i, n, h[3], 16, -722521979), g, i, h[6], 23, 76029189), r = hh(r, g = hh(g, i = hh(i, n, r, g, h[9], 4, -640364487), n, r, h[12], 11, -421815835), i, n, h[15], 16, 530742520), g, i, h[2], 23, -995338651), r = ii(r, g = ii(g, i = ii(i, n, r, g, h[0], 6, -198630844), n, r, h[7], 10, 1126891415), i, n, h[14], 15, -1416354905), g, i, h[5], 21, -57434055), r = ii(r, g = ii(g, i = ii(i, n, r, g, h[12], 6, 1700485571), n, r, h[3], 10, -1894986606), i, n, h[10], 15, -1051523), g, i, h[1], 21, -2054922799), r = ii(r, g = ii(g, i = ii(i, n, r, g, h[8], 6, 1873313359), n, r, h[15], 10, -30611744), i, n, h[6], 15, -1560198380), g, i, h[13], 21, 1309151649), r = ii(r, g = ii(g, i = ii(i, n, r, g, h[4], 6, -145523070), n, r, h[11], 10, -1120210379), i, n, h[2], 15, 718787259), g, i, h[9], 21, -343485551), f[0] = add32(i, f[0]), f[1] = add32(n, f[1]), f[2] = add32(r, f[2]), f[3] = add32(g, f[3])
}

function cmn(f, h, i, n, r, g) {
    return h = add32(add32(h, f), add32(n, g)), add32(h << r | h >>> 32 - r, i)
}

function ff(f, h, i, n, r, g, t) {
    return cmn(h & i | ~h & n, f, h, r, g, t)
}

function gg(f, h, i, n, r, g, t) {
    return cmn(h & n | i & ~n, f, h, r, g, t)
}

function hh(f, h, i, n, r, g, t) {
    return cmn(h ^ i ^ n, f, h, r, g, t)
}

function ii(f, h, i, n, r, g, t) {
    return cmn(i ^ (h | ~n), f, h, r, g, t)
}

function md51(f) {
    txt = "";
    var h, i = f.length,
        n = [1732584193, -271733879, -1732584194, 271733878];
    for (h = 64; h <= f.length; h += 64) md5cycle(n, md5blk(f.substring(h - 64, h)));
    f = f.substring(h - 64);
    var r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (h = 0; h < f.length; h++) r[h >> 2] |= f.charCodeAt(h) << (h % 4 << 3);
    if (r[h >> 2] |= 128 << (h % 4 << 3), h > 55)
        for (md5cycle(n, r), h = 0; h < 16; h++) r[h] = 0;
    return r[14] = 8 * i, md5cycle(n, r), n
}

function md5blk(f) {
    var h, i = [];
    for (h = 0; h < 64; h += 4) i[h >> 2] = f.charCodeAt(h) + (f.charCodeAt(h + 1) << 8) + (f.charCodeAt(h + 2) << 16) + (f.charCodeAt(h + 3) << 24);
    return i
}

function rhex(f) {
    for (var h = "", i = 0; i < 4; i++) h += hex_chr[f >> 8 * i + 4 & 15] + hex_chr[f >> 8 * i & 15];
    return h
}

function hex(f) {
    for (var h = 0; h < f.length; h++) f[h] = rhex(f[h]);
    return f.join("")
}

function md5(f) {
    return hex(md51(f))
}

function add32(f, h) {
    return f + h & 4294967295
}

function add32(f, h) {
    var i = (65535 & f) + (65535 & h);
    return (f >> 16) + (h >> 16) + (i >> 16) << 16 | 65535 & i
}
var hex_chr = "0123456789abcdef".split("");
md5("hello");
