//KMP的算法基础是暴力算法Brute-Force算法
//时间复杂度O(M*N)
//空间复杂度O(1)
function bruteForce(source, pattern) {
    let i = 0, j = 0
    while (i < source.length && j < pattern.length) {
        if (source[i] == pattern[j]) {
            //如果当前字符匹配成功，则双指针继续向下匹配
            i++
            j++
        } else {
            //如果当前字符失配，则需要进行i的回溯(回溯到上次开始匹配的下一位) 和j的重置（0）
            i = i - j + 1
            j = 0
        }
    }
    if (j == pattern.length) {
        return true
    } else {
        return false
    }
}

console.log(bruteForce("abbabacabc", "bac"))