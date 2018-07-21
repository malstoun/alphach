# alphach

[![CircleCI](https://circleci.com/gh/malstoun/alphach/tree/master.svg?style=shield)](https://circleci.com/gh/malstoun/alphach/tree/master) [![codecov](https://codecov.io/gh/malstoun/alphach/branch/master/graph/badge.svg)](https://codecov.io/gh/malstoun/alphach)

This package helps you to add and modify alpha channel in existing rgb or rgba strings.

Small example:

```js
import color from 'alphach';

color('rgba(0, 255, 0, .6)', '.1'); // returns rgba(0, 255, 0, .1) string
```

Currently only rgb(a) strings are supported.
