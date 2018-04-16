const booWho = require('../app/booWho');
const uniteUnique = require('../app/sortedUnion');
const convertHTML = require('../app/convertHtmlEntities');
const spinalCase = require('../app/spinalCase');
const findElement = require('../app/finderKeepers');
const dropElements = require('../app/dropIt');
const assert = require('assert');

/* ======================== Boowho =========================== */
describe('Unit Test Case', () => {
  describe('booWho case 1: ', () => {
    it('return true', (done) => {
      assert.equal(booWho(true), true);
      done();
    });
  });

  describe('booWho case 2: ', () => {
    it('return false', (done) => {
      assert.equal(booWho(false), true);
      done();
    });
  });


  describe('booWho case 3: ', () => {
    it('return false', (done) => {
      assert.equal(booWho([1, 2, 3]), false);
      done();
    });
  });

  describe('booWho case 4: ', () => {
    it('return false', (done) => {
      assert.equal(booWho([].slice), false);
      done();
    });
  });

  describe('booWho case 5: ', () => {
    it('return false', (done) => {
      assert.equal(booWho({ a: 1 }), false);
      done();
    });
  });

  describe('booWho case 6: ', () => {
    it('return false', (done) => {
      assert.equal(booWho(1), false);
      done();
    });
  });

  describe('booWho case 7: ', () => {
    it('return false', (done) => {
      assert.equal(booWho(NaN), false);
      done();
    });
  });

  describe('booWho case 8: ', () => {
    it('return false', (done) => {
      assert.equal(booWho('true'), false);
      done();
    });
  });
});

/* ======================== Sorted Union =========================== */
describe('Unit Test Case', () => {
  describe('Sorted Union Case 1', () => {
    it('should return', (done) => {
      assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
      done();
    });
  });

  describe('Sorted Union Case 2', () => {
    it('should return', (done) => {
      assert.deepEqual(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]), [1, 3, 2, [5], [4]]);
      done();
    });
  });

  describe('Sorted Union Case 3', () => {
    it('should return', (done) => {
      assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
      done();
    });
  });

  describe('Sorted Union Case 4', () => {
    it('should return', (done) => {
      assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [1, 2, 3, 5, 4, 6, 7, 8]);
      done();
    });
  });
});

/* ======================== Convert HTML Entities =========================== */
describe('Unit Test Case', () => {
  describe('htmlEntities case 1: ', () => {
    it('should return', (done) => {
      assert.equal(convertHTML("Dolce & Gabbana"), 'Dolce &amp; Gabbana');
      done();
    });
  });

  describe('htmlEntities case 2: ', () => {
    it('should return', (done) => {
      assert.equal(convertHTML("Hamburgers < Pizza < Tacos"), 'Hamburgers &lt; Pizza &lt; Tacos');
      done();
    });
  });


  describe('htmlEntities case 3: ', () => {
    it('should return', (done) => {
      assert.equal(convertHTML("Sixty > twelve"), 'Sixty &gt; twelve');
      done();
    });
  });

  describe('htmlEntities case 4: ', () => {
    it('should return', (done) => {
      assert.equal(convertHTML('Stuff in "quotation marks"'), 'Stuff in &quot;quotation marks&quot;');
      done();
    });
  });

  describe('htmlEntities case 5: ', () => {
    it('should return', (done) => {
      assert.equal(convertHTML("Shindler's List"), 'Shindler&apos;s List');
      done();
    });
  });

  describe('htmlEntities case 6: ', () => {
    it('should return', (done) => {
      assert.equal(convertHTML("<>"), '&lt;&gt;');
      done();
    });
  });

  describe('htmlEntities case 7: ', () => {
    it('should return', (done) => {
      assert.equal(convertHTML("abc"), 'abc');
      done();
    });
  });
});

/* ======================== Spinal Tap Case =========================== */
describe('Unit Test Case', () => {
  describe('spinalCase case 1: ', () => {
    it('should return', (done) => {
      assert.equal(spinalCase("This Is Spinal Tap"), "this-is-spinal-tap");
      done();
    });
  });

  describe('spinalCase case 2: ', () => {
    it('should return', (done) => {
      assert.equal(spinalCase("thisIsSpinalTap"), "this-is-spinal-tap");
      done();
    });
  });


  describe('spinalCase case 3: ', () => {
    it('should return', (done) => {
      assert.equal(spinalCase("The_Andy_Griffith_Show"), "the-andy-griffith-show");
      done();
    });
  });

  describe('spinalCase case 4: ', () => {
    it('should return', (done) => {
      assert.equal(spinalCase("Teletubbies say Eh-oh"), "teletubbies-say-eh-oh");
      done();
    });
  });

  describe('spinalCase case 5: ', () => {
    it('should return', (done) => {
      assert.equal(spinalCase("AllThe-small Things"), "all-the-small-things");
      done();
    });
  });
});

/* ======================== Finders Keepers =========================== */
describe('Unit Test Case', () => {
  describe('Finders Keepers  Case 1', () => {
    it('should return', (done) => {
      assert.equal(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; }), 8);
      done();
    });
  });

  describe('Finders Keepers  Case 2', () => {
    it('should return', (done) => {
      assert.equal(findElement([1, 3, 5, 9], function (num) { return num % 2 === 0; }), undefined);
      done();
    });
  });
});

/* ======================== Drop It =========================== */
describe('Unit Test Case', () => {
  describe('dropElements case 1: ', () => {
    it('should return', (done) => {
      assert.deepEqual(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }), [3, 4]);
      done();
    });
  });

  describe('dropElements case 2: ', () => {
    it('should return', (done) => {
      assert.deepEqual(dropElements([0, 1, 0, 1], function (n) { return n === 1; }), [1, 0, 1]);
      done();
    });
  });


  describe('dropElements case 3: ', () => {
    it('should return', (done) => {
      assert.deepEqual(dropElements([1, 2, 3], function (n) { return n > 0; }), [1, 2, 3]);
      done();
    });
  });

  describe('dropElements case 4: ', () => {
    it('should return', (done) => {
      assert.deepEqual(dropElements([1, 2, 3, 4], function (n) { return n > 5; }), []);
      done();
    });
  });

  describe('dropElements case 5: ', () => {
    it('should return', (done) => {
      assert.deepEqual(dropElements([1, 2, 3, 7, 4], function (n) { return n > 3; }), [7, 4]);
      done();
    });
  });

  describe('dropElements case 6: ', () => {
    it('should return', (done) => {
      assert.deepEqual(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; }), [3, 9, 2]);
      done();
    });
  });
});
