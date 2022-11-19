// Method 1
// Counting words in a string or array objects
function wordFreq1(string) {
  var words = string.replace(".", "").split(/\s/);
  var freqMap = {};
  words.forEach((element, index) => {
    if (!freqMap[element]) {
      freqMap[element] = 0;
    }
    freqMap[element] += 1;
  });
  return freqMap;
}

// Method 2
function wordFreq2(names) {
  const countedNames = names.reduce((allNames, name) => {
    const currentCount = allNames[name] ?? 0;
    return {
      ...allNames,
      [name]: currentCount + 1,
    };
  }, {});
  return countedNames;
}

console.log(wordFreq2(["Alice", "Bob", "Tiff", "Bruce", "Alice"]));
