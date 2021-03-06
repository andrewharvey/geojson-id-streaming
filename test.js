var test = require('tape'),
    geojsonId = require('./');

test('addId', function(t) {
    t.deepEqual(geojsonId.addId({
        type: 'Feature',
        properties: { a: 1, b: 2 }
    }), {
        type: 'Feature',
        properties: { a: 1, b: 2 },
        id: 0
    }, 'first time');

    t.deepEqual(geojsonId.addId({
        type: 'Feature',
        properties: { a: 1, b: 2 }
    }), {
        type: 'Feature',
        properties: { a: 1, b: 2 },
        id: 1
    }, 'second time');

    t.deepEqual(geojsonId.addId({
        type: 'Feature',
        properties: { a: 1, b: 2 }
    }, { property: true }), {
        type: 'Feature',
        properties: { id: 2, a: 1, b: 2 },
    }, 'as property');
    t.end();
});
