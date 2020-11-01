function kmp(source, pattern) {
  //计算PMT（Partial Match Table部分匹配表）
  let table = new Array(pattern.length).fill(0);
  {
    let i = 1,
      j = 0;
    while (i < pattern.length) {
      if (pattern[i] == pattern[j]) {
        ++i, ++j;
        table[i] = j;
      } else {
        if (j > 0) {
          j = table[j];
        } else {
          ++i;
        }
      }
    }
  }

  //计算匹配
  {
    let i = 0,
      j = 0;
    while (i < source.length) {
      if (j === pattern.length) {
        return true;
      }
      if (pattern[j] === source[i]) {
        ++j, ++i;
      } else {
        if (j > 0) {
          j = table[j];
        } else {
          ++i;
        }
      }
    }
  }
  return false;
}

console.log(kmp("abbcaabacdabc", "bac"));
