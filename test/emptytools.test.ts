import test from 'node:test';
import assert from 'node:assert';

import {
  isEmpty,
  isNotEmpty,
  valuesAreEmpty,
  valuesAreNotEmpty
} from '@src/emptytools';

(async function () {
  test('Test isEmpty', async function () {
    assert.strictEqual(isEmpty(undefined), true);
    assert.strictEqual(isEmpty(null), true);
    assert.strictEqual(isEmpty(new Date('')), true);
    assert.strictEqual(isEmpty(new Set()), true);
    assert.strictEqual(isEmpty(new Map()), true);
    assert.strictEqual(isEmpty(Buffer.alloc(0)), true);
    assert.strictEqual(isEmpty([]), true);
    assert.strictEqual(isEmpty(''), true);
    assert.strictEqual(isEmpty({}), true);
    assert.strictEqual(isEmpty({ a: 1 }), false);
  });

  test('Test isNotEmpty', async function () {
    assert.strictEqual(isNotEmpty(undefined), false);
    assert.strictEqual(isNotEmpty(null), false);
    assert.strictEqual(isNotEmpty(new Date('')), false);
    assert.strictEqual(isNotEmpty(new Set()), false);
    assert.strictEqual(isNotEmpty(new Map()), false);
    assert.strictEqual(isNotEmpty(Buffer.alloc(0)), false);
    assert.strictEqual(isNotEmpty([]), false);
    assert.strictEqual(isNotEmpty(''), false);
    assert.strictEqual(isNotEmpty({}), false);
    assert.strictEqual(isNotEmpty(0), true);
    assert.strictEqual(isNotEmpty(false), true);
    assert.strictEqual(isNotEmpty({ a: 1 }), true);
  });

  test('Test valuesAreEmpty', async function () {
    assert.strictEqual(
      valuesAreEmpty([
        undefined,
        null,
        new Date(''),
        new Set(),
        new Map(),
        Buffer.alloc(0),
        [],
        '',
        {}
      ]),
      true
    );
  });

  test('Test valuesAreNotEmpty', async function () {
    assert.strictEqual(
      valuesAreNotEmpty([
        undefined,
        null,
        new Date(''),
        new Set(),
        new Map(),
        Buffer.alloc(0),
        [],
        '',
        {}
      ]),
      false
    );
    assert.strictEqual(
      valuesAreNotEmpty([
        undefined,
        null,
        new Date(''),
        new Set(),
        new Map(),
        Buffer.alloc(0),
        [],
        '',
        { a: 1 }
      ]),
      true
    );
  });
})();
