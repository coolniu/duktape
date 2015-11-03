/*===
setter called: bar
name,foo,redirect,bar
name
===*/

function test() {
    var obj1 = { name: 'obj1' };
    var obj2 = { name: 'obj2' };
    var obj1orig = obj1;

    Object.defineProperty(obj1, 'foo', {
        set: function (v) {
            print('setter called:', v);
            obj1.redirect = v;
            obj1 = obj2;  // swap reference in outer scope
        }
    });

    obj1[obj1['foo'] = 'bar'] = 'quux';

    print(Object.getOwnPropertyNames(obj1orig));
    print(Object.getOwnPropertyNames(obj2));
}

try {
    test();
} catch (e) {
    print(e.stack || e);
}
