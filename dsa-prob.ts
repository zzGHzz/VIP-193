import * as math from 'mathjs';

function F(a: number, b: number, p: number): number {
    return math.combinations(b, a) * Math.pow(p, a) * Math.pow(1 - p, b - a)
}

/**
 * Probability of a block being generated by malicious nodes
 * 
 * @param n - number of backer signatures in the block
 * @param p - probability of a node qualified being a backer
 * @param f - total number of malicious nodes
 * @param N - total number of nodes
 */
function Pr(n: number, p: number, f: number, N: number): number {
    let s = 0;
    for (let i = n; i <= f; i++) {
        s += F(i, f, p);
    }
    return s * f / N;
}

function b(d: number, p: number, f: number, N: number): number {
    let s = 0;
    for (let i = d; i < N; i++) {
        s += F(i, N, p) * math.combinations(i, d)
    }
    return s * f / N;
}

function theta(d: number, k: number, p: number, f: number, N: number): number {
    return b(d, p, f, N) * Math.pow(Pr(d, p, f, N), k)
}

let f = 20;
let N = 101;
let p = 8 / 101;
let k = 5;
let d = 4;
console.log(theta(d, k, p, f, N))