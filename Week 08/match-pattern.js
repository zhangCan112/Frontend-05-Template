function match(str, pattern) {
    let state = start
    for (const c of str) {
        state = state(c)        
    }

    return state == end
}

function start(c) {
    
}

function end(c) {
    return end
}

console.log(match("abcajasjkaavcc", "sjkaav"))