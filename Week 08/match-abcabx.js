
function match(str) {
    let state = start
    for (const c of str) {
        state = state(c)        
    }

    return state == end
}

function start(c) {
    if (c === 'a') {
        return foundA
    }    
    return start
}

function end(c) {
    return end
}

function foundA(c) {
    if (c === 'b') {
        return foundB
    }
    return start(c)
}

function foundB(c) {
    if (c === 'c') {
        return foundC
    }
    return start(c)
}

function foundC(c) {
    if (c === 'a') {
        return found2thA
    }
    return start(c)
}

function found2thA(c) {
    if (c === 'b') {
        return found2thB
    }
    return start(c)
}

function found2thB(c) {
    if (c === 'x') {
        return end
    } 
   return foundB(c)
}

console.log(match("abcabeabcabxjabcd"))