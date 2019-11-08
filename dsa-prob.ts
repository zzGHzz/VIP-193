import * as math from 'mathjs';

function F(p: number, d: number, f: number): number {
    let r = 0;
    for (let i = d; i <= f; i++) {
        r = r + math.combinations(f, i) * Math.pow(p, i) * Math.pow(1 - p, f - i);
    }
    return r;
}

const f = 33;
const N = 101;
const ds = [5, 10];
const ps = ds.map(x => x / 101 * 1.5);
const ks = [5, 10];
for (let i in ds) {
    const d = ds[i];
    const p = ps[i];
    console.log('> ' + F(p, d, f).toExponential(2));
    for (let j in ks) {
        const k = ks[j];
        console.log('* ' + Math.pow(F(p, d, f), k).toExponential(2));
        console.log('# ' + (Math.pow(F(p, d, f), k) * Math.pow(f / N, k) * math.combinations(Math.ceil(N * p), d)).toExponential(2));
    }
}