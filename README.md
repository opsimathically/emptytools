# emptytools

This package provides utility functions for determining the "emptiness" of
values wherein "empty" is defined below. The purpose of this is for runtime
validation of data to quickly determine if a value falls outside of expected
"presentness." This is a basic, but foundationally useful bit of code that can
be utilized to quickly determine the present/empty state of a value.

```typescript
/*
  Definition of "empty":
    zero length buffer
    undefined
    null
    zero length array
    zero length string
    object with no keys
    set with no entries
    map with no entries
    date with invalid/unparsable date

  Empty is NOT 0 or false, wherein these are both considered valid non-empty values.
*/
```

## Install

```bash
npm install @opsimathically/emptytools
```

## Building from source

This package is intended to be run via npm, but if you'd like to build from source,
clone this repo, enter directory, and run `npm install` for dev dependencies, then run
`npm run build`.

## Usage

```typescript
import {
  isEmpty,
  isNotEmpty,
  valuesAreEmpty,
  valuesAreNotEmpty
} from '@src/emptytools';

(async function () {
  assert.strictEqual(isEmpty(undefined), true);
  // true
  isEmpty(null);
  isEmpty(new Date(''));
  isEmpty(new Set());
  isEmpty(new Map());
  isEmpty(Buffer.alloc(0));
  isEmpty([]);
  isEmpty('');
  isEmpty({});

  // false
  isEmpty({ a: 1 });
  isEmpty(0);
  isEmpty(false);
  isEmpty([1, 2, 3]);

  // false
  isNotEmpty({});

  // true
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
  ]);

  // true
  valuesAreNotEmpty([
    undefined,
    null,
    new Date(''),
    new Set(),
    new Map(),
    Buffer.alloc(0),
    [],
    '',
    { a: 1 } // not empty val
  ]);
})();
```
