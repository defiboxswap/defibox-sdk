function symbol_to_pair_id( symbol: string ) {
    let id = 0;
    let depth = 0;
    const multiplier = 26
    const chars = symbol.replace(/^BOX/, "").split("").reverse();
    for ( const c of chars ) {
        const value = c.charCodeAt(0) - "A".charCodeAt(0) + 1;
        if ( depth ) id += multiplier ** depth * value
        else id += value;
        depth += 1;
    }
    return id;
}

function pair_id_to_symbol( id: number )
{
    let symbols = "";
    while ( id > 0 ) {
        symbols = String.fromCharCode('A'.charCodeAt(0) + (id - 1) % 26 ) + symbols;
        id = Math.floor((id - 1) / 26);
    }
    return "BOX" + symbols;
}

// tests
console.log("BOXAA", symbol_to_pair_id("BOXAA"), 27, pair_id_to_symbol(27));
console.log("BOXAB", symbol_to_pair_id("BOXAB"), 28, pair_id_to_symbol(28));
console.log("BOXAD", symbol_to_pair_id("BOXAD"), 30, pair_id_to_symbol(30));
console.log("BOXAZ", symbol_to_pair_id("BOXAZ"), 52, pair_id_to_symbol(52));
console.log("BOXBA", symbol_to_pair_id("BOXBA"), 53, pair_id_to_symbol(53));
console.log("BOXZA", symbol_to_pair_id("BOXZA"), 677, pair_id_to_symbol(677));
console.log("BOXZB", symbol_to_pair_id("BOXZB"), 678, pair_id_to_symbol(678));
console.log("BOXZZ", symbol_to_pair_id("BOXZZ"), 702, pair_id_to_symbol(702));
console.log("BOXAAA",symbol_to_pair_id("BOXAAA"),703, pair_id_to_symbol(703));

