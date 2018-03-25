"use strict";

describe("rle", function() {
  const tests = [
    "Буквы",
    "Буквы, пробелы",
    "Буквы, пробелы, знаки",
    "Буквы, пробелы, цифры",
    "Буквы, пробелы, цифры, знаки"
  ];
  const str = [
    "AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD",
    "AVVVBBBVV XDH JFF FFDDDDDDHAAAAJJJD DSLSSSDDDD",
    "AAVVVBBB/VV XDH JFF FFDDDDDD!!HAAA$AJJJD DSLSSSD&^DDD",
    "AAVVV4BBBVV XDH JFF FFDDDD667DDHAAA9AJJJD DSLSSS8DDDD",
    "AAVVV4BBB/VV XDH JFF FFDDDD667DD!!HAAA$AJJJD DSLSSS8D&^DDD"
  ];

  describe("compress", function() {
    function makeTest(name, str, result) {
      it(name, function() {
        assert.equal(rle(str), result);
      });
    }

    for (i = 0; i < tests.length; i++) {
      let result = rle(str[i]);
      makeTest(tests[i], str[i], result);
    }
  });

  describe("uncompress", function() {
    function makeTest(name, str, result) {
      it(name, function() {
        assert.equal(rerle(result), str);
      });
    }

    for (i = 0; i < tests.length; i++) {
      let result = rle(str[i]);
      makeTest(tests[i], str[i], result);
    }
  });
});
