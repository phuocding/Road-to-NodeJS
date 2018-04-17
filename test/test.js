import { equal, deepEqual } from 'assert';

import sumPrimes from '../app/sumAllPrimes';
import sumFibs from '../app/sumFibonacci';
import booWho from '../app/booWho';
import uniteUnique from '../app/sortedUnion';
import convertHTML from '../app/convertHtmlEntities';
import spinalCase from '../app/spinalCase';
import findElement from '../app/finderKeepers';
import dropElements from '../app/dropIt';

/* ======================== Boowho =========================== */
describe('Unit Test Case', () => {
  describe('booWho case 1: ', () => {
    it('return true', (done) => {
      equal(booWho(true), true);
      done();
    });
  });

  describe('booWho case 2: ', () => {
    it('return false', (done) => {
      equal(booWho(false), true);
      done();
    });
  });


  describe('booWho case 3: ', () => {
    it('return false', (done) => {
      equal(booWho([1, 2, 3]), false);
      done();
    });
  });

  describe('booWho case 4: ', () => {
    it('return false', (done) => {
      equal(booWho([].slice), false);
      done();
    });
  });

  describe('booWho case 5: ', () => {
    it('return false', (done) => {
      equal(booWho({ a: 1 }), false);
      done();
    });
  });

  describe('booWho case 6: ', () => {
    it('return false', (done) => {
      equal(booWho(1), false);
      done();
    });
  });

  describe('booWho case 7: ', () => {
    it('return false', (done) => {
      equal(booWho(NaN), false);
      done();
    });
  });

  describe('booWho case 8: ', () => {
    it('return false', (done) => {
      equal(booWho('true'), false);
      done();
    });
  });
});

/* ======================== Sorted Union =========================== */
describe('Unit Test Case', () => {
  describe('Sorted Union Case 1', () => {
    it('should return', (done) => {
      deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
      done();
    });
  });

  describe('Sorted Union Case 2', () => {
    it('should return', (done) => {
      deepEqual(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]), [1, 3, 2, [5], [4]]);
      done();
    });
  });

  describe('Sorted Union Case 3', () => {
    it('should return', (done) => {
      deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
      done();
    });
  });

  describe('Sorted Union Case 4', () => {
    it('should return', (done) => {
      deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [1, 2, 3, 5, 4, 6, 7, 8]);
      done();
    });
  });
});

/* ======================== Convert HTML Entities =========================== */
describe('Unit Test Case', () => {
  describe('htmlEntities case 1: ', () => {
    it('should return', (done) => {
      equal(convertHTML('Dolce & Gabbana'), 'Dolce &amp; Gabbana');
      done();
    });
  });

  describe('htmlEntities case 2: ', () => {
    it('should return', (done) => {
      equal(convertHTML('Hamburgers < Pizza < Tacos'), 'Hamburgers &lt; Pizza &lt; Tacos');
      done();
    });
  });


  describe('htmlEntities case 3: ', () => {
    it('should return', (done) => {
      equal(convertHTML('Sixty > twelve'), 'Sixty &gt; twelve');
      done();
    });
  });

  describe('htmlEntities case 4: ', () => {
    it('should return', (done) => {
      equal(convertHTML('Stuff in "quotation marks"'), 'Stuff in &quot;quotation marks&quot;');
      done();
    });
  });

  describe('htmlEntities case 5: ', () => {
    it('should return', (done) => {
      equal(convertHTML("Shindler's List"), 'Shindler&apos;s List');
      done();
    });
  });

  describe('htmlEntities case 6: ', () => {
    it('should return', (done) => {
      equal(convertHTML('<>'), '&lt;&gt;');
      done();
    });
  });

  describe('htmlEntities case 7: ', () => {
    it('should return', (done) => {
      equal(convertHTML('abc'), 'abc');
      done();
    });
  });
});

/* ======================== Spinal Tap Case =========================== */
describe('Unit Test Case', () => {
  describe('spinalCase case 1: ', () => {
    it('should return', (done) => {
      equal(spinalCase('This Is Spinal Tap'), 'this-is-spinal-tap');
      done();
    });
  });

  describe('spinalCase case 2: ', () => {
    it('should return', (done) => {
      equal(spinalCase('thisIsSpinalTap'), 'this-is-spinal-tap');
      done();
    });
  });


  describe('spinalCase case 3: ', () => {
    it('should return', (done) => {
      equal(spinalCase('The_Andy_Griffith_Show'), 'the-andy-griffith-show');
      done();
    });
  });

  describe('spinalCase case 4: ', () => {
    it('should return', (done) => {
      equal(spinalCase('Teletubbies say Eh-oh'), 'teletubbies-say-eh-oh');
      done();
    });
  });

  describe('spinalCase case 5: ', () => {
    it('should return', (done) => {
      equal(spinalCase('AllThe-small Things'), 'all-the-small-things');
      done();
    });
  });
});

/* ======================== Finders Keepers =========================== */
describe('Unit Test Case', () => {
  describe('Finders Keepers  Case 1', () => {
    it('should return', (done) => {
      equal(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0), 8);
      done();
    });
  });

  describe('Finders Keepers  Case 2', () => {
    it('should return', (done) => {
      equal(findElement([1, 3, 5, 9], num => num % 2 === 0), undefined);
      done();
    });
  });
});

/* ======================== Drop It =========================== */
describe('Unit Test Case', () => {
  describe('dropElements case 1: ', () => {
    it('should return', (done) => {
      deepEqual(dropElements([1, 2, 3, 4], n => n >= 3), [3, 4]);
      done();
    });
  });

  describe('dropElements case 2: ', () => {
    it('should return', (done) => {
      deepEqual(dropElements([0, 1, 0, 1], n => n === 1), [1, 0, 1]);
      done();
    });
  });


  describe('dropElements case 3: ', () => {
    it('should return', (done) => {
      deepEqual(dropElements([1, 2, 3], n => n > 0), [1, 2, 3]);
      done();
    });
  });

  describe('dropElements case 4: ', () => {
    it('should return', (done) => {
      deepEqual(dropElements([1, 2, 3, 4], n => n > 5), []);
      done();
    });
  });

  describe('dropElements case 5: ', () => {
    it('should return', (done) => {
      deepEqual(dropElements([1, 2, 3, 7, 4], n => n > 3), [7, 4]);
      done();
    });
  });

  describe('dropElements case 6: ', () => {
    it('should return', (done) => {
      deepEqual(dropElements([1, 2, 3, 9, 2], n => n > 2), [3, 9, 2]);
      done();
    });
  });
});

/* ======================== Sum all Primes =========================== */
describe('Unit Test Case', () => {
  describe('sumPrimes case 1: ', () => {
    it('should return', (done) => {
      deepEqual(sumPrimes(10), 17);
      done();
    });
  });

  describe('sumPrimes case 2: ', () => {
    it('should return', (done) => {
      deepEqual(sumPrimes(977), 73156);
      done();
    });
  });


  describe('sumPrimes case 3: ', () => {
    it('should return', (done) => {
      deepEqual(sumPrimes(100), 1060);
      done();
    });
  });
});

/* ======================== Sum All Fibonacci =========================== */
describe('Unit Test Case', () => {
  describe('sumFibs case 1: ', () => {
    it('should return', (done) => {
      deepEqual(sumFibs(1), 2);
      done();
    });
  });

  describe('sumFibs case 2: ', () => {
    it('should return', (done) => {
      deepEqual(sumFibs(1000), 1785);
      done();
    });
  });


  describe('sumFibs case 3: ', () => {
    it('should return', (done) => {
      deepEqual(sumFibs(4000000), 4613732);
      done();
    });
  });

  describe('sumFibs case 4: ', () => {
    it('should return', (done) => {
      deepEqual(sumFibs(4), 5);
      done();
    });
  });

  describe('sumFibs case 5: ', () => {
    it('should return', (done) => {
      deepEqual(sumFibs(75024), 60696);
      done();
    });
  });

  describe('sumFibs case 6: ', () => {
    it('should return', (done) => {
      deepEqual(sumFibs(75025), 135721);
      done();
    });
  });
});
