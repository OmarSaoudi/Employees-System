module.exports={A:{A:{"2":"J D E F EC","132":"A B"},B:{"1":"C K L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"1":"0 1 2 3 4 5 6 7 8 9 M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"FC uB I w J D E F GC HC","33":"A B C K L G"},D:{"1":"DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"I w J D E F A B","33":"0 1 2 3 4 5 6 7 8 9 C K L G M N O x g y z AB BB CB"},E:{"1":"4B 5B 6B tB 7B 8B 9B AC BC RC","2":"KC 0B","33":"I w J D E LC MC NC","257":"F A B C K L G OC 1B rB sB 2B PC QC 3B"},F:{"1":"0 1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"F B C SC TC UC VC rB CC WC sB","33":"G M N O x g y z"},G:{"1":"4B 5B 6B tB 7B 8B 9B AC BC","33":"E 0B XC DC YC ZC aC bC","257":"cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B"},H:{"2":"rC"},I:{"1":"H","2":"sC tC uC","33":"uB I vC DC wC xC"},J:{"33":"D A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"132":"A B"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:5,C:"CSS3 3D Transforms"};
 ontext_tailwindConfig === void 0 ? void 0 : _context_tailwindConfig.separator) !== null && _context_tailwindConfig_separator !== void 0 ? _context_tailwindConfig_separator : ":";
    // Split by the separator, but ignore the separator inside square brackets:
    //
    // E.g.: dark:lg:hover:[paint-order:markers]
    //           ┬  ┬     ┬            ┬
    //           │  │     │            ╰── We will not split here
    //           ╰──┴─────┴─────────────── We will split here
    //
    base = base !== null && base !== void 0 ? base : candidate.split(new RegExp(`\\${separator}(?![^[]*\\])`)).pop();
    // Parse the selector into an AST
    let selector = (0, _postcssSelectorParser.default)().astSync(current);
    // Normalize escaped classes, e.g.:
    //
    // The idea would be to replace the escaped `base` in the selector with the
    // `format`. However, in css you can escape the same selector in a few
    // different ways. This would result in different strings and therefore we
    // can't replace it properly.
    //
    //               base: bg-[rgb(255,0,0)]
    //   base in selector: bg-\\[rgb\\(255\\,0\\,0\\)\\]
    //       escaped base: bg-\\[rgb\\(255\\2c 0\\2c 0\\)\\]
    //
    selector.walkClasses((node)=>{
        if (node.raws && node.value.includes(base)) {
            node.raws.value = (0, _escapeClassName.default)((0, _unesc.default)(node.raws.value));
        }
    });
    // Remove extraneous selectors that do not include the base candidate
    selector.each((sel)=>eliminateIrrelevantSelectors(sel, base));
    // If there are no formats that means there were no variants added to the candidate
    // so we can just return the selector as-is
    let formatAst = Array.isArray(formats) ? formatVariantSelector(formats, {
        context,
        candidate
    }) : formats;
    if (formatAst === null) {
        return selector.toString();
    }
    let simpleStart = _postcssSelectorParser.default.comment({
        value: "/*__simple__*/"
    });
    let simpleEnd = _postcssSelectorParser.default.comment({
        value: "/*__simple__*/"
    });
    // We can safely replace the escaped base now, since the `base` section is
    // now in a normalized escaped value.
    selector.walkClasses((node)=>{
        if (node.value !== base) {
            return;
        }
        let parent = node.parent;
        let formatNodes = formatAst.nodes[0].nodes;
        // Perf optimization: if the parent is a single class we can just replamodule.exports={A:{A:{"2":"EC","8":"J D E","129":"A B","161":"F"},B:{"1":"N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H","129":"C K L G M"},C:{"1":"0 1 2 3 4 5 6 7 8 9 M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"FC uB","33":"I w J D E F A B C K L G GC HC"},D:{"1":"DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","33":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB"},E:{"1":"F A B C K L G OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","33":"I w J D E KC 0B LC MC NC"},F:{"1":"0 1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e sB","2":"F SC TC","33":"B C G M N O x g y z UC VC rB CC WC"},G:{"1":"cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","33":"E 0B XC DC YC ZC aC bC"},H:{"2":"rC"},I:{"1":"H","33":"uB I sC tC uC vC DC wC xC"},J:{"33":"D A"},K:{"1":"B C h rB CC sB","2":"A"},L:{"1":"H"},M:{"1":"f"},N:{"1":"A B"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:4,C:"CSS3 2D Transforms"};
               rmats */ let MERGE = ":merge";
function formatVariantSelector(formats, { context , candidate  }) {
    var _context_tailwindConfig_prefix;
    let prefix = (_context_tailwindConfig_prefix = context === null || context === void 0 ? void 0 : context.tailwindConfig.prefix) !== null && _context_tailwindConfig_prefix !== void 0 ? _context_tailwindConfig_prefix : "";
    // Parse the format selector into an AST
    let parsedFormats = formats.map((format)=>{
        let ast = (0, _postcssSelectorParser.default)().astSync(format.format);
        return {
            ...format,
            ast: format.isArbitraryVariant ? ast : (0, _prefixSelector.default)(prefix, ast)
        };
    });
    // We start with the candidate selector
    let formatAst = _postcssSelectorParser.default.root({
        nodes: [
            _postcssSelectorParser.default.selector({
                nodes: [
                    _postcssSelectorParser.default.className({
                        value: (0, _escapeClassName.default)(candidate)
                    })
                ]
            })
        ]
    });
    // And iteratively merge each format selector into the candidate selector
    for (let { ast  } of parsedFormats){
        [formatAst, ast] = handleMergePseudo(formatAst, ast);
        // 2. Merge the format selector into the current selector AST
        ast.walkNesting((nesting)=>nesting.replaceWith(...formatAst.nodes[0].nodes));
        // 3. Keep going!
        formatAst = ast;
    }
    return formatAst;
}
/**
 * Given any node in a selector this gets the "simple" selector it's a part of
 * A simple selector is just a list of nodes without any combinators
 * Technically :is(), :not(), :has(), etc… can have combinators but those are nested
 * inside the relevant node and won't be picked up so they're fine to ignore
 *
 * @param {Node} node
 * @returns {Node[]}
 **/ function simpleSelectorForNode(node) {
    /** @type {Node[]} */ let nodes = [];
    // Walk backwards until we hit a combinator node (or the start)
    while(node.prev() && node.prev().type !== "combinator"){
        node = node.prev();
    }
    // Now record all non-combinator nodes until we hit one (or the end)
    while(node && node.type !== "combinator"){
        nodes.push(node);
        node = node.next();
    }
    return nodes;
}
/**
 * Resorts the nodes in a selector to ensure they're in the correct order
 * Tags go before classes, and pseudo classes go after classes
 *
 * @param {Selector} sel
 * @returns {Selector}
 **/ function resortSelector(sel) {
    sel'use strict'

var test = require('tape')
var reusify = require('./')

test('reuse objects', function (t) {
  t.plan(6)

  function MyObject () {
    t.pass('constructor called')
    this.next = null
  }

  var instance = reusify(MyObject)
  var obj = instance.get()

  t.notEqual(obj, instance.get(), 'two instance created')
  t.notOk(obj.next, 'next must be null')

  instance.release(obj)

  // the internals keeps a hot copy ready for reuse
  // putting this one back in the queue
  instance.release(instance.get())

  // comparing the old one with the one we got
  // never do this in real code, after release you
  // should never reuse that instance
  t.equal(obj, instance.get(), 'instance must be reused')
})

test('reuse more than 2 objects', function (t) {
  function MyObject () {
    t.pass('constructor called')
    this.next = null
  }

  var instance = reusify(MyObject)
  var obj = instance.get()
  var obj2 = instance.get()
  var obj3 = instance.get()

  t.notOk(obj.next, 'next must be null')
  t.notOk(obj2.next, 'next must be null')
  t.notOk(obj3.next, 'next must be null')

  t.notEqual(obj, obj2)
  t.notEqual(obj, obj3)
  t.notEqual(obj3, obj2)

  instance.release(obj)
  instance.release(obj2)
  instance.release(obj3)

  // skip one
  instance.get()

  var obj4 = instance.get()
  var obj5 = instance.get()
  var obj6 = instance.get()

  t.equal(obj4, obj)
  t.equal(obj5, obj2)
  t.equal(obj6, obj3)
  t.end()
})
                                                                                                [K.� �I8=!�	���B�78101&2������A����%!�>�����&���������K��������K�������o5  �*8#�!�!�-  tPaU`�]cX[vg��W$%5  )�  �	~)::
A
	yQ0~59G[K.� ����4����F $� �M5Q;
	
"F  	�A  M��>F  &� 
pHop*o3 $� �(	"+2  x-  (72  � ����� $� ��$  �
)  �5  �  Y  -	%  % �*�������%�< .�'=('(]'7('(� � 

+	'$�=���]�7���<  �!�&I7  [(��_"<  8�  �=]7� �����< .� �'3 <  J+7  .""#<  
� ���'P .� �1"$ 	P  =>K  83&6	P  � �����= .%'b(F')(� ���		




��	�$�<  �7  �@,O  ��O  %bF)� ����'�F .� �,=F  7	>A  3'&6	F  � �k����� �( .�'=('(Q'7('(Z � 
	/$�=��	�Q�7���(  �"x!5#  +'3~�K(  �  �=Q7Z �t������������2 .'('('	('('('('('('(%b(%[(� ������	����������������		




���		




����!5.2  �-  sQ-�y\5)2  ��  	
	b[� 
P[OPO3 .'('('	('(c ������	���	2  F-  j2  �  	c .� �� �� 
�<G� .� ��  AA  8^ 
p4o:p .� ��  97  0M .o �o . �  	 
p6o:p  ;7  2K 
P0O(P s s  5#  ,8  
`8_0` � �  =-  4@  "a 
�>G�  CA  :\ P�OPOP)O bXR� ���		




��
$-"-7<CH	=@
		)0
	/	  ��  �i�#  x�  b5#7�	 P�OPzOPO ��	�	
��  Y�  �  INDX( 	 j�A           (   x  �       �                    ��    p ^     ��    ����v��3�n��I�.v��DQ(!v�0       .                . c o v e r a l l s . y m l   ��    h X     ��    _���v��N1�n��I�.v��DQ(!v�                      . t r a v i s . y m l ��    h V     ��    m���v����n���I�.v�xs2f{��                       
 b e n c h m a r k s   ��    ` P     ��    ����v�.�D�n���I�.v�]x-)!v�       :               L I C E N S E ��    p Z     ��    ����v P��n���I�.v��W)!v�       �               p a c k a g e . j s o n       ��    h T     ��    ���v�g�d�n���I�.v�[�l)!v�       1              	 R E A D M E . m d     ��    h V     ��    0���v��-s�n���I�.v�u��)!v��      �              
 r e u s i f y . j s   ��    ` P     ��    ?���v�{{�n���I�.v�[��)!v�       �               t e s t . j s                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        # reusify

[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Coverage Status][coveralls-badge]][coveralls-url]

Reuse your objects and functions for maximum speed. This technique will
make any function run ~10% faster. You call your functions a
lot, and it adds up quickly in hot code paths.

```
$ node benchmarks/createNoCodeFunction.js
Total time 53133
Total iterations 100000000
Iteration/s 1882069.5236482036

$ node benchmarks/reuseNoCodeFunction.js
Total time 50617
Total iterations 100000000
Iteration/s 1975620.838848608
```

The above benchmark uses fibonacci to simulate a real high-cpu load.
The actual numbers might differ for your use case, but the difference
should not.

The benchmark was taken using Node v6.10.0.

This library was extracted from
[fastparallel](http://npm.im/fastparallel).

## Example

```js
var reusify = require('reusify')
var fib = require('reusify/benchmarks/fib')
var instance = reusify(MyObject)

// get an object from the cache,
// or creates a new one when cache is empty
var obj = instance.get()

// set the state
obj.num = 100
obj.func()

// reset the state.
// if the state contains any external object
// do not use delete operator (it is slow)
// prefer set them to null
obj.num = 0

// store an object in the cache
instance.release(obj)

function MyObject () {
  // you need to define this property
  // so V8 can compile MyObject into an
  // hidden class
  this.next = null
  this.num = 0

  var that = this

  // this function is never reallocated,
  // so it can be optimized by V8
  this.func = function () {
    if (null) {
      // do nothing
    } else {
      // calculates fibonacci
      fib(that.num)
    }
  }
}
```

The above example was intended for synchronous code, let's see async:
```js
var reusify = require('reusify')
var instance = reusify(MyObject)

for (var i = 0; i < 100; i++) {
  getData(i, console.log)
}

function getData (value, cb) {
  var obj = instance.get()

  obj.value = value
  obj.cb = cb
  obj.run()
}

function MyObject () {
  this.next = null
  this.value = null

  var that = this

  this.run = function () {
    asyncOperation(that.value, that.handle)
  }

  this.handle = function (err, result) {
    that.cb(err, result)
    that.value = null
    that.cb = null
    instance.release(that)
  }
}
```

Also note how in the above examples, the code, that consumes an istance of `MyObject`,
reset the state to initial condition, just before storing it in the cache.
That's needed so that every subsequent request for an instance from the cache,
could get a clean instance.

## Why

It is faster because V8 doesn't have to collect all the functions you
create. On a short-lived benchmark, it is as fast as creating the
nested function, but on a longer time frame it creates less
pressure on the garbage collector.

## Other examples
If you want to see some complex example, checkout [middie](https://github.com/fastify/middie) and [steed](https://github.com/mcollina/steed).

## Acknowledgements

Thanks to [Trevor Norris](https://github.com/trevnorris) for
getting me down the rabbit hole of performance, and thanks to [Mathias
Buss](http://github.com/mafintosh) for suggesting me to share this
trick.

## License

MIT

[npm-badge]: https://badge.fury.io/js/reusify.svg
[npm-url]: https://badge.fury.io/js/reusify
[travis-badge]: https://api.travis-ci.org/mcollina/reusify.svg
[travis-url]: https://travis-ci.org/mcollina/reusify
[coveralls-badge]: https://coveralls.io/repos/mcollina/reusify/badge.svg?branch=master&service=github
[coveralls-url]:  https://coveralls.io/github/mcollina/reusify?branch=master
                                                                                                                                                                                                                                                                                                                                                                                                                                                                               {
  "name": "reusify",
  "version": "1.0.4",
  "description": "Reuse objects and functions with style",
  "main": "reusify.js",
  "scripts": {
    "lint": "standard",
    "test": "tape test.js | faucet",
    "istanbul": "istanbul cover tape test.js",
    "coverage": "npm run istanbul; cat coverage/lcov.info | coveralls"
  },
  "pre-commit": [
    "lint",
    "test"
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/mcollina/reusify.git"
  },
  "keywords": [
    "reuse",
    "object",
    "performance",
    "function",
    "fast"
  ],
  "author": "Matteo Collina <hello@matteocollina.com>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/mcollina/reusify/issues"
  },
  "homepage": "https://github.com/mcollina/reusify#readme",
  "engines": {
    "node": ">=0.10.0",
    "iojs": ">=1.0.0"
  },
  "devDependencies": {
    "coveralls": "^2.13.3",
    "faucet": "0.0.1",
    "istanbul": "^0.4.5",
    "pre-commit": "^1.2.2",
    "standard": "^10.0.3",
    "tape": "^4.8.0"
  }
}
 �B  $B%�  �  \
`% �W��������4��1�P � �F		���
�
�	?>14�	'
	
�
�
�
�
#$�
�
#$-#$D�
�
�

�
�
�
 �
�
P  	��K  �i�kcJ
1	P  6���  OKM
	
	8
	� 
	P �Q��������5���P � �@	;>���
�
�
?>14�
"
	�
�
!�
�
,�
�
"K�
�
�

�
�
�
#P  	�eK  �~^uhk	P  .���  IH<
	
	.
	� \ ����&���P � �	����
�����?>14�����P  �K  `�V$|4
	P  ���  F)TDE\ ����f�����'��������;��������6���d �
>=	
�>=� �A������RG		�!
�3>	�����>14�((AN	��=RQ����	H�����	H�_`��d(��������'�1���'��qR'HG��{|�� )m�!
�z!*		OH	*)*!!Or!";Qd��*+��/c�>
�����z!w�>y�����/����	�
�in��d  �_  �b"�#61
�	C#
��(&��8��5��8��]d  A��-��N�  D]$O
	R	t-E:">M���'Od ��	��1�d �)���>=| �i����$��)��+T+Q���?��1���3	4G���2m��	�	���d  �
_  �AK�M�>Q/Fd  )@�
  i))�Qf��d �����������d � �A

0+�!
� �3O���������1�����3I;`(>9eAUX

	�"
����	���=ep
2*�����$
���I16	?
@	9.+	J?(&. #	)%//
/d  �!�H�&R&��_  �Z8�������=GG�NNNKd  AgrS��  ��6�
	 
		
	�.� ������d � �Q
	V��^[��L	=	.%��57&:��>��
	��
 %	 SHS&0-R.U&0-TRTY&0-X(��b��������.����h��v
��vP
q0-�.%X"
	�&�-����C0-~/�0/p!u�u0-tCu&0-vGw&0-xGy&0-z/{0/�&	|
O#d  ��_  ��cC
�����9�"5�5f7r=�	�{
d  1 �  �,�� 'The MIT License (MIT)

Copyright (c) 2015 Matteo Collina

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
v	|�(�b ����&���3 &� �,	X2  x&U-  2>�2  � 
@d?@? &� �	  u  %24  
{ 
`=_& m X/%  B#   (%  T 
@Y?3 � �!,!2  ^-  =G  !G  ? ������/��4��2�f � �@
			 	oN;f) "! 	
!"p$�P	?>14 "!i
���oNf  	���a  �??�G
}=52f  >!%O��B�  ��Id f ������1��H�d � �@
			�� }z "! �p "! 	!"x$	��=?>14T"�
���d  	���_  ��D�-.
|W/d  >!"���dz  �<�H4� 0I/0H/0 � �
	



	  �	  � ����+��1�Z � �-	���� 
	
;�*	��!
��
�����Z  ��U  �7?=!'5(Z  %-G|H�  P�	Z ����-�i � �*"��
	"<
!i  ��_
  w�i  *A�u  k� ��	����d � �>
+	 ��
����3&��53 	2&'"	U34D8��d  	����_  ������kd  >K�	x  �+DPG�x ����&�T � �"%r
T  x�0K	  n�T  " �` �"%r
T �R�����M�f � �A8.	I@dBR�#@&)##@*
643E/K221 /K6$#F/.>U8n?=	If  �����a  W���������nJD6f  A��} ����"�T � �%	F !D
"T  �y,K	  �|T  %^�� ������/��.���
����i � �A
	
[hgh0(A8��:
��0"��!�
��
�TS	P		QTst����3��(9��gh����	
<(����-����/(D @
������	������	�������������Ii  �_
  ��X2p ��=�=DQ��4�i  A��^�  jH+DW
	^
	
	%:�@%�.-�'use strict'

var reusify = require('../')
var fib = require('./fib')
var instance = reusify(MyObject)
var max = 100000000
var start = Date.now()

function reuseNoCodeFunction () {
  var obj = instance.get()
  obj.num = 100
  obj.func()
  obj.num = 0
  instance.release(obj)
}

function MyObject () {
  this.next = null
  var that = this
  this.num = 0
  this.func = function () {
    /* eslint no-constant-condition: "off" */
    if (null) {
      // do nothing
    } else {
      fib(that.num)
    }
  }
}

for (var i = 0; i < max; i++) {
  reuseNoCodeFunction()
}

var time = Date.now() - start
console.log('Total time', time)
console.log('Total iterations', max)
console.log('Iteration/s', max / time * 1000)
                                                                                                                                                                                                                                                                                                                       �3 � �8�>2  �!K-  ��2   � ��, � �+  �&  ='*+  � ���, C%I
0X� �.|%{���7F
10��
	��1&��������'
�

po

+  	�&  ��K8	;  &v��  C%#
01� pyo � �
	
	##  ~  a+  +8+ p�o3 H
GHBGU ��
��B�#2  7$3-  3V2  �  
BU `h_`_`_3 � �'
82  �-  'Z2  � P�OPaO F3*Y ����	�*��  �  4@4^  �  F3*Y 0�/0[/2 J
.X2 � ��	�	���2  �-  ?[R2   �  J
.X2 ��
���= �

0�0� �	&"�	��7������
��1��
��������%����������	��7��������1���������)�!��
�"	�9����>���

		�:����<��
�
7<  	�'�%G$/#[!/#47  ���I�~	+>l<G<  &3?���Q  �	

0%	
		
	
0!9>7:<
s 0�/0! 0<;<;� �	�	�	�	�	�	�	$!&
	'  �!  �  0� p�oi N 
7	h-
� �
F�	�	�	�	�	�		�	�	�	
�	�	�	�	
�		�	�	�		�	#�	�	�	
�	�	�	 �	�	�	
�	�	�	
'h  �'s�`!bc  uC`�_�h  . R�  N
7
		h-
� ���f �
-�/:� �^rj
�	 �	�	78
10
�	�	1&
�	�	�	�	-�	�	�	�	78101&2�	�	�	e  	�!(�!�!`  p�e�e`�Ru  &8�  � 
-:.)::u �	��	�	��	< �<�<�	!3�( 	� �Q�	?7F1�
�
�
�
	��1�
�
�
�
�����
0
>�	�	?7F1�
�
�
�
��	��1�
�
�
�
�������
��0
>�	
/%�9=#�:�&%�:��Eg(#	.>;@MZ		,78,:ai	l"<�	781����1�����var test = require('tape');
var resolve = require('../');
var path = require('path');

test('shadowed core modules still return core module', function (t) {
    t.plan(2);

    resolve('util', { basedir: path.join(__dirname, 'shadowed_core') }, function (err, res) {
        t.ifError(err);
        t.equal(res, 'util');
    });
});

test('shadowed core modules still return core module [sync]', function (t) {
    t.plan(1);

    var res = resolve.sync('util', { basedir: path.join(__dirname, 'shadowed_core') });

    t.equal(res, 'util');
});

test('shadowed core modules return shadow when appending `/`', function (t) {
    t.plan(2);

    resolve('util/', { basedir: path.join(__dirname, 'shadowed_core') }, function (err, res) {
        t.ifError(err);
        t.equal(res, path.join(__dirname, 'shadowed_core/node_modules/util/index.js'));
    });
});

test('shadowed core modules return shadow when appending `/` [sync]', function (t) {
    t.plan(1);

    var res = resolve.sync('util/', { basedir: path.join(__dirname, 'shadowed_core') });

    t.equal(res, path.join(__dirname, 'shadowed_core/node_modules/util/index.js'));
});

test('shadowed core modules return shadow with `includeCoreModules: false`', function (t) {
    t.plan(2);

    resolve('util', { basedir: path.join(__dirname, 'shadowed_core'), includeCoreModules: false }, function (err, res) {
        t.ifError(err);
        t.equal(res, path.join(__dirname, 'shadowed_core/node_modules/util/index.js'));
    });
});

test('shadowed core modules return shadow with `includeCoreModules: false` [sync]', function (t) {
    t.plan(1);

    var res = resolve.sync('util', { basedir: path.join(__dirname, 'shadowed_core'), includeCoreModules: false });

    t.equal(res, path.join(__dirname, 'shadowed_core/node_modules/util/index.js'));
});
                                                                                                                                                                                                                                          ��$�--�3�3-��-*�3�3��;&(�)0/%		"??  ���	8  ����?  1 �%  ZQrZrZrZrZr Zr&Zr%,Zr+2Zr18Zr7>Zr=DZrCJZrIPZrOVZrU�\..3aBdcMfZrelW]cr;&(u� ��������2 ��l;&&� �1
�--�3�3-��--�3�3��;&&���&"	
	
		!2  �-  K�3%�2  1�:�  YZrZ`;&&� ����O� �,:3 �6$���:�  	�  _@n  &�  �,:3 
@N? 5 �����
  S  2%  [  5 ��� � ��
  �
  � ������
 ��!�&&&�!� �)*�-*�3�3�
����3�3&&&�4
��3�3�T
  #�c��cB*  0#�y6�	76�	D
  SW]Z
(!�&
&	&f(!�q ��� � ��

  � 
  � ������
 �"�+��+� �)*��
	��
����	��4

��	��T
  #�es�eB*  0#�v@�	9@�	D
  S0"QZ
(+�
	h(+�q ��� �	
 8/!
��
   �  � ��� � �

  n
  x ������
 k���� �&*��	��
������6
����U
  	#�f[�cC+  -#�o/�	7/�	F
  PHY
(�
	h(�s ` h p xvar a = require.resolve('buffer/').replace(process.cwd(), '$CWD');
var b;
var c;

var test = function test() {
    console.log(a, ': require.resolve, preserveSymlinks ' + (process.execArgv.indexOf('preserve-symlinks') > -1 ? 'true' : 'false'));
    console.log(b, ': preserveSymlinks true');
    console.log(c, ': preserveSymlinks false');

    if (a !== b && a !== c) {
        throw 'async: no match';
    }
    console.log('async: success! a matched either b or c\n');
};

require('resolve')('buffer/', { preserveSymlinks: true }, function (err, result) {
    if (err) { throw err; }
    b = result.replace(process.cwd(), '$CWD');
    if (b && c) { test(); }
});
require('resolve')('buffer/', { preserveSymlinks: false }, function (err, result) {
    if (err) { throw err; }
    c = result.replace(process.cwd(), '$CWD');
    if (b && c) { test(); }
});

                                                                                                                                                                      
	
	� 

!
D
������������i(  D
#�4#  "IU9�V(  
�  �� �a��������( 0�
	
	
	
	
	
	� 2 
R������������3	(  �#  :��V(  �  �� ��� 2� D%
	 
	
		
	4  �  1YW�  � ����H�( 2B.�A>$L ^P?@.O
	
<m

d?@)S"	(  �#  bJrX(C(  �  B.�$)L ��������(��I�( 2B.�E$6"O �,.+"
  
m

d!$CNMV	(  �#  bJ�WM.D(  �  B.�#!$6O �F����5�,< 2� �"

	
&"		<  �7  �w)<  "� 06/09/0Q/0D/02 2� �
	
			  �*  � 0�/0/0S/0/0V/0/0/0/0/0/0/0/0/0) 2� �	
$#				`  �!  � 
05/0/ 4f @  O  1   ��� � �  �C
  &aQ 
@<? b b  A  4	% 
0;/0/   4  
S 0�/0/  =^*  l* @�?@� � ���<;		

	
	 )
"*KN
9
				il	
"c	  �F  � ���6 � �,�����(�$5  �0  �*5  �  3(� `�_ � �
 
#	)
  ��
  +{%t  ol3 8 n��8� 0H/0�/0	/0v � �

 
	I"" 
-
  �v  � �,�����'�$5  �+5  3'� 
`6_ �-  ;  ( p�op"op>opop�opRopop�op%op0oZ � �"��
	 '#-��*	�!-
$*


jy
�,	-0)'
$')	%Z  �U  ��:*<wZ  "�-� ����	�( � �-����:.(  �#  l -(  �  4� ���������������^�P �f�g� �68~	k)!j9/�<��




���:OJI$��j	k+ 
12:	9#87@GN		G��:% )��8	9 
8	*			P  	�K  ��w�XP  6=�  �<S f�" g� `�_`M_
 � �i


#RQ	Nq	

 \Y	V
;G

4
9Q

>(E&5'`
  ��!+!(W  L%z2-w�?
  � �Y)'use strict';

var assert = require('assert');
var path = require('path');
var resolve = require('resolve');

var basedir = __dirname + '/node_modules/@my-scope/package-b';

var expected = path.join(__dirname, '../../node_modules/jquery/dist/jquery.js');

/*
 * preserveSymlinks === false
 * will search NPM package from
 * - packages/package-b/node_modules
 * - packages/node_modules
 * - node_modules
 */
assert.equal(resolve.sync('jquery', { basedir: basedir, preserveSymlinks: false }), expected);
assert.equal(resolve.sync('../../node_modules/jquery', { basedir: basedir, preserveSymlinks: false }), expected);

/*
 * preserveSymlinks === true
 * will search NPM package from
 * - packages/package-a/node_modules/@my-scope/packages/package-b/node_modules
 * - packages/package-a/node_modules/@my-scope/packages/node_modules
 * - packages/package-a/node_modules/@my-scope/node_modules
 * - packages/package-a/node_modules/node_modules
 * - packages/package-a/node_modules
 * - packages/node_modules
 * - node_modules
 */
assert.equal(resolve.sync('jquery', { basedir: basedir, preserveSymlinks: true }), expected);
assert.equal(resolve.sync('../../../../../node_modules/jquery', { basedir: basedir, preserveSymlinks: true }), expected);

console.log(' * all monorepo paths successfully resolved through symlinks');
                                                                                                                                                                                                                         3�����X�2 �2012�1s2012D121212�12K1; 6  
��-���5!
�}-�D�����	�����'(<1	2  	�-  gN�6�!h]c
/VO2  6%Z�  �/�s/D
/�; ���������5 X0Q/0/0./0�/05/0F/0/�05/0#/0}/$04/0J/"0/	0/0@/0'/.0	/0/	0B/0'/0/0/0/�0H/
0�/0$/0&/
0&/.0'/5 &		���@����.���
����}1�F���6'/	"

	
9*
)*)*
)*#+	��1�#��}�!n}1�Ji�mjml}
t mn'i 8n	ijk	j}
t kl'i���iji	;0+000	$	|�
�(}
~m�&
&
3"'A5  	�-  ����-��
9Rrgc�u4/8�5  & �  X@&�
4
F	
	�

#A4#}$3J"	 '.		! '�"(!
"m%&# 
.5 ����l���G `2
5213656	5c �9"
)
"""	
F  sCA  �l&F  !�  `
3	c `�_`_`_ � !(,	
  6�  � ������1 �('('('('('('� :L,%%#. ������������		3)����	��chK	LK&d	
	"7k	l)�s"3�	�I�S3{	|9�c
3s	t1�k23�	�A�[23D�	�6@�	�.)	34�	�/0�	�#3�	�Q�K&	6{C	�36	���D�_�C���m	'���	D�m�A�		'qrU	VU+n
�
}	E1  	�,  q0��1��_6JU	 xG	1  &�  �!.�&�+� 
`g_ � 	  l  &"* 
08/0	/ -. 2|y
	  F  4  S  -. ������
 = + 
 
  # c ,4#,	   #    
    ,C2C�=�K  "2F~  !
 &���
���
���#�
��3��	@!|}	~#��,�	���~��{���#�����#$	����
�������	�	���	�	����C��/�
�Z��=����b�"<����)��
�&��~���C
  INDX( 	 �A           (     �       �  _ t               ��    X H     ��    �ʢ�v��L��n���F�.v�Mp0f{��                        b a z ��    p \     ��    �b��v�x2��n���F�.v�o�0f{��                        b r o w s e r _ f i e l d     ��    h V     ��    I{��v����n���F�.v�I{��v�                      
 c u p . c o f f e e   ��    h R     ��    V���v�N"��n���F�.v�H�0f{��                        d o t _ m a i n       ��    p ^     ��    fɴ�v�I~��n ��F�.v���0f{��                        d o t _ s l a s h _ m a i n   ��    h V     ��    s��v��Ǣ�n���F�.v�2�0f{��                       
 f a l s e _ m a i n   ��    ` N     ��    >��v�Ov��n���F�.v��e��v�                       f o o . j s   ��    p ^     ��    �e��v����n��G�.v���0f{��                        i n c o r r e c t _ m a i n   ��    p Z     ��    ����v�����n��G�.v���0f{��                        i n v a l i d _ m a i n       ��    � n    ��    �ڵ�v�����n��G�.v��1f{��                        m a l f o r m e d _ p a c k a g e _ j s o n   ��    h V     ��    ���v��o��n��G�.v����v�                        
 m u g . c o f f e e   ��    ` N     ��    ���v���-�n��;G�.v����v�                         m u g . j s   ��    h T     ��    �(��v�ݽ��n�=�H�.v�]$1f{��                       	 m u l t i r e p o     ��    p `     ��    w���v��n��n�FI�.v�^1f{��                        n e s t e d  s y m l i n k s ��    h V     ��    �h��v�N���n�FI�.v��1f{��                       
 o t h e r _ p a t h   ��    ` J     ��    ����v����n�FI�.v��1f{��                        q u u x       ��    h V     ��    ����v�S9��n�M7I�.v�6�1f{��                       
 s a m e _ n a m e s   ��    h T     ��    : ��v�����n�Y^I�.v���1f{��                       	 s y m l i n k e d     ��    p `     ��    j���v�!��n�Y^I�.v��2f{��                        w i  h o u t _ b a s e d i r                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   var path = require('path');
var test = require('tape');
var resolve = require('../');

var resolverDir = path.join(__dirname, '/pathfilter/deep_ref');

var pathFilterFactory = function (t) {
    return function (pkg, x, remainder) {
        t.equal(pkg.version, '1.2.3');
        t.equal(x, path.join(resolverDir, 'node_modules/deep/ref'));
        t.equal(remainder, 'ref');
        return 'alt';
    };
};

test('#62: deep module references and the pathFilter', function (t) {
    t.test('deep/ref.js', function (st) {
        st.plan(3);

        resolve('deep/ref', { basedir: resolverDir }, function (err, res, pkg) {
            if (err) st.fail(err);

            st.equal(pkg.version, '1.2.3');
            st.equal(res, path.join(resolverDir, 'node_modules/deep/ref.js'));
        });

        var res = resolve.sync('deep/ref', { basedir: resolverDir });
        st.equal(res, path.join(resolverDir, 'node_modules/deep/ref.js'));
    });

    t.test('deep/deeper/ref', function (st) {
        st.plan(4);

        resolve(
            'deep/deeper/ref',
            { basedir: resolverDir },
            function (err, res, pkg) {
                if (err) t.fail(err);
                st.notEqual(pkg, undefined);
                st.equal(pkg.version, '1.2.3');
                st.equal(res, path.join(resolverDir, 'node_modules/deep/deeper/ref.js'));
            }
        );

        var res = resolve.sync(
            'deep/deeper/ref',
            { basedir: resolverDir }
        );
        st.equal(res, path.join(resolverDir, 'node_modules/deep/deeper/ref.js'));
    });

    t.test('deep/ref alt', function (st) {
        st.plan(8);

        var pathFilter = pathFilterFactory(st);

        var res = resolve.sync(
            'deep/ref',
            { basedir: resolverDir, pathFilter: pathFilter }
        );
        st.equal(res, path.join(resolverDir, 'node_modules/deep/alt.js'));

        resolve(
            'deep/ref',
            { basedir: resolverDir, pathFilter: pathFilter },
            function (err, res, pkg) {
                if (err) st.fail(err);
                st.equal(res, path.join(resolverDir, 'node_modules/deep/alt.js'));
                st.end();
            }
        );
    });

    t.end();
});
                                                                                                                                                                                                                                                                                                                        O"3	
'sG6l^a:J2:D �������=��������` �NL� �(	=
���A5��;=�/
-^#%		GH�
+
i_  �.�U
  �2�NC$�7
#,_  (L��  �'@K� iQ$ �		gQn  i)($ �S������5 � �6
 %F��C	��T9:QnG*5,#8!"%4#"!	%%4	
6��%��	$)DGL"-6��.w5  	�%>"��	�B$BM,�+-  �e7��5�u�5  6��
A  ��%��oX ������P �� �[	HLF/"U	(+
#$5
#0''('>%&/")',S(��[T/"SR

O
X4UT/"SX	[\<]^/"U\YZYZ]^56[Z;*-.<56"/"%56
9>	P  	��QS�,i� H"�0K  ��Vl���w�*	P  &5�  �� ���������g�b � �fPMJ
%(
.
9<	4")69
,9	?B�	��Z�����7i^=(-		b  	�.�!#Mvar fs = require('fs');
var path = require('path');
var test = require('tape');
var resolve = require('../');

test('$NODE_PATH', function (t) {
    t.plan(8);

    var isDir = function (dir, cb) {
        if (dir === '/node_path' || dir === 'node_path/x') {
            return cb(null, true);
        }
        fs.stat(dir, function (err, stat) {
            if (!err) {
                return cb(null, stat.isDirectory());
            }
            if (err.code === 'ENOENT' || err.code === 'ENOTDIR') return cb(null, false);
            return cb(err);
        });
    };

    resolve('aaa', {
        paths: [
            path.join(__dirname, '/node_path/x'),
            path.join(__dirname, '/node_path/y')
        ],
        basedir: __dirname,
        isDirectory: isDir
    }, function (err, res) {
        t.error(err);
        t.equal(res, path.join(__dirname, '/node_path/x/aaa/index.js'), 'aaa resolves');
    });

    resolve('bbb', {
        paths: [
            path.join(__dirname, '/node_path/x'),
            path.join(__dirname, '/node_path/y')
        ],
        basedir: __dirname,
        isDirectory: isDir
    }, function (err, res) {
        t.error(err);
        t.equal(res, path.join(__dirname, '/node_path/y/bbb/index.js'), 'bbb resolves');
    });

    resolve('ccc', {
        paths: [
            path.join(__dirname, '/node_path/x'),
            path.join(__dirname, '/node_path/y')
        ],
        basedir: __dirname,
        isDirectory: isDir
    }, function (err, res) {
        t.error(err);
        t.equal(res, path.join(__dirname, '/node_path/x/ccc/index.js'), 'ccc resolves');
    });

    // ensure that relative paths still resolve against the regular `node_modules` correctly
    resolve('tap', {
        paths: [
            'node_path'
        ],
        basedir: path.join(__dirname, 'node_path/x'),
        isDirectory: isDir
    }, function (err, res) {
        var root = require('tap/package.json').main; // eslint-disable-line global-require
        t.error(err);
        t.equal(res, path.resolve(__dirname, '..', 'node_modules/tap', root), 'tap resolves');
    });
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                �����������"  '5�2�5�2����TQ �^$�^$�Y&�Y� ��u�^&�Y9$�Y �Y% �\% �Y$ �Y$�Y$�Y  X%�%�(�%�	�	6+8�YV�Bq�Cq�Cm�Eu9.� B��Cq�Bl�Eo�Bl�Bo�El�Eo�En�En"  )��)  S
�

	��
�$$
= /"!)$f%('�*),
+=.-0
/=212 �34
"	
	
�78"�;< A"" �?@?,DiE=H+%
�IJI:NMP
O=R+!�STMZ
 	
	
	
�WX	!>=<#=>;<;<�[\AFED%EFCDCD�_`GLKJ%KL
IJIJ�cdMRQP%QR
OPOP�ghW\[Z%[\YZYZYZ�klafed efcdcd�opkpon opmnmnmn�stu" pjop-op�opIopcopFopopopop{op:o# � � J;	J+YZO	
X;=^
$ 5'"  �  �(�0b;"  *��� 
`r_ � �
		
  w  H5  } 
�\ x �"  2 ����	�5 �1	
		5  :o-  �+5  SW> ����7����������������������������var path = require('path');
var test = require('tape');
var resolve = require('../');

test('moduleDirectory strings', function (t) {
    t.plan(4);
    var dir = path.join(__dirname, 'module_dir');
    var xopts = {
        basedir: dir,
        moduleDirectory: 'xmodules'
    };
    resolve('aaa', xopts, function (err, res, pkg) {
        t.ifError(err);
        t.equal(res, path.join(dir, '/xmodules/aaa/index.js'));
    });

    var yopts = {
        basedir: dir,
        moduleDirectory: 'ymodules'
    };
    resolve('aaa', yopts, function (err, res, pkg) {
        t.ifError(err);
        t.equal(res, path.join(dir, '/ymodules/aaa/index.js'));
    });
});

test('moduleDirectory array', function (t) {
    t.plan(6);
    var dir = path.join(__dirname, 'module_dir');
    var aopts = {
        basedir: dir,
        moduleDirectory: ['xmodules', 'ymodules', 'zmodules']
    };
    resolve('aaa', aopts, function (err, res, pkg) {
        t.ifError(err);
        t.equal(res, path.join(dir, '/xmodules/aaa/index.js'));
    });

    var bopts = {
        basedir: dir,
        moduleDirectory: ['zmodules', 'ymodules', 'xmodules']
    };
    resolve('aaa', bopts, function (err, res, pkg) {
        t.ifError(err);
        t.equal(res, path.join(dir, '/ymodules/aaa/index.js'));
    });

    var copts = {
        basedir: dir,
        moduleDirectory: ['xmodules', 'ymodules', 'zmodules']
    };
    resolve('bbb', copts, function (err, res, pkg) {
        t.ifError(err);
        t.equal(res, path.join(dir, '/zmodules/bbb/main.js'));
    });
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          \<$#"�!$	!$^!"!"!&%&)(�'*	%	*`'('(%"+k.-.-�2�^/�4345	436H5 ,C+89:;'	:'
"	�<;<	;>G=M ���������b � �&		-K^]	i����c	^��[^�����������
���b  	�Iu�]  ��7b  &�4v  dr	[--_n �����A � �Borq	c��	m	r�Rr��	��������A  	�;d�<  ��YA  &�  Bl	RS&M �����A � �>���	c��	�	��R���	�	���A  	�7`�<  ��]A  &�  >l	RN;M 
pMopoB � �'A  a<  ,A  �  ,w ����	�< � �N���	j��	��T�'




		 '	<  	�Fq+�7  ���<  &(�  Ns	T� 
�V� r ,M  R  ^  f 
@;?@? u �


  (  / ��� �Y � �$ 
5/
>;	>

	
		#  �+�  �F+  �K>7- ����?����, � �$" 		9>
=:
9	
L	
3


"!650/!,  �'  7� X`8,  
� �y��K � �


	


		  .0�  3K,  K9V �d�r( �$ 
		'  �"  72N'  
� ����������l� � �"#	$3	$3	!
T?@:
  �!�  YJ�e  
� �W�����������& � �
&		�(		"����+(-&  �"!!_5'use strict';

var fs = require('fs');
var homedir = require('../lib/homedir');
var path = require('path');

var test = require('tape');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var mv = require('mv');
var copyDir = require('copy-dir');
var tmp = require('tmp');

var HOME = homedir();

var hnm = path.join(HOME, '.node_modules');
var hnl = path.join(HOME, '.node_libraries');

var resolve = require('../sync');

function makeDir(t, dir, cb) {
    mkdirp(dir, function (err) {
        if (err) {
            cb(err);
        } else {
            t.teardown(function cleanup() {
                rimraf.sync(dir);
            });
            cb();
        }
    });
}

function makeTempDir(t, dir, cb) {
    if (fs.existsSync(dir)) {
        var tmpResult = tmp.dirSync();
        t.teardown(tmpResult.removeCallback);
        var backup = path.join(tmpResult.name, path.basename(dir));
        mv(dir, backup, function (err) {
            if (err) {
                cb(err);
            } else {
                t.teardown(function () {
                    mv(backup, dir, cb);
                });
                makeDir(t, dir, cb);
            }
        });
    } else {
        makeDir(t, dir, cb);
    }
}

test('homedir module paths', function (t) {
    t.plan(7);

    makeTempDir(t, hnm, function (err) {
        t.error(err, 'no error with HNM temp dir');
        if (err) {
            return t.end();
        }

        var bazHNMDir = path.join(hnm, 'baz');
        var dotMainDir = path.join(hnm, 'dot_main');
        copyDir.sync(path.join(__dirname, 'resolver/baz'), bazHNMDir);
        copyDir.sync(path.join(__dirname, 'resolver/dot_main'), dotMainDir);

        var bazHNMmain = path.join(bazHNMDir, 'quux.js');
        t.equal(require.resolve('baz'), bazHNMmain, 'sanity check: require.resolve finds HNM `baz`');
        var dotMainMain = path.join(dotMainDir, 'index.js');
        t.equal(require.resolve('dot_main'), dotMainMain, 'sanity check: require.resolve finds `dot_main`');

        makeTempDir(t, hnl, function (err) {
            t.error(err, 'no error with HNL temp dir');
            if (err) {
                return t.end();
            }
            var bazHNLDir = path.join(hnl, 'baz');
            copyDir.sync(path.join(__dirname, 'resolver/baz'), bazHNLDir);

            var dotSlashMainDir = path.join(hnl, 'dot_slash_main');
            var dotSlashMainMain = path.join(dotSlashMainDir, 'index.js');
            copyDir.sync(path.join(__dirname, 'resolver/dot_slash_main'), dotSlashMainDir);

            t.equal(require.resolve('baz'), bazHNMmain, 'sanity check: require.resolve finds HNM `baz`');
            t.equal(require.resolve('dot_slash_main'), dotSlashMainMain, 'sanity check: require.resolve finds HNL `dot_slash_main`');

            t.test('with temp dirs', function (st) {
                st.plan(3);

                st.test('just in `$HOME/.node_modules`', function (s2t) {
                    s2t.plan(1);

                    var res = resolve('dot_main');
                    s2t.equal(res, dotMainMain, '`dot_main` resolves in `$HOME/.node_modules`');
                });

                st.test('just in `$HOME/.node_libraries`', function (s2t) {
                    s2t.plan(1);

                    var res = resolve('dot_slash_main');
                    s2t.equal(res, dotSlashMainMain, '`dot_slash_main` resolves in `$HOME/.node_libraries`');
                });

                st.test('in `$HOME/.node_libraries` and `$HOME/.node_modules`', function (s2t) {
                    s2t.plan(1);

                    var res = resolve('baz');
                    s2t.equal(res, bazHNMmain, '`baz` resolves in `$HOME/.node_modules` when in both');
                });
            });
        });
    });
});
                                                                                                                                                                                                                                                                                                           INDX( 	 �A           (   �  �       �s � j             p�    ` P     o�    ��v�?�n�h�E�.v�
��v�       �               c o r e . j s q�    ` N     o�    
��v��6n�n�t�E�.v�l9.f{��                        d o t d o t   u�    h T     o�    %-��v����n�t�E�.v�%-��v�                     	 d o t d o t . j s     v�    x d     o�    �Ă�v��{�n�t�E�.v��Ă�v�       '               f a u l t y _ b a s e d i r . j s     w�    h T     o�    ���v �i�n�t�E�.v����v�                     	 f i l t e r . j s     x�    p ^     o�    ���v���n�t�E�.v����v�       �               f i l t e r _ s y n c . j s   y�    p \     o�    Ļ��v���n�t�E�.v����v�        x               h o m e _ p a t h s . j s     z�    x f     o�    ���v��� �n�t�E�.v��	��v�       �               h o m e _ p a t h s _ s y n c . j s   {�    ` P     o�    �	��v��Z-�n�t�E�.v��	��v� 0      '               m o c k . j  |�    p Z     o�    �0��v��-�n�t�E�.v��0��v�        �               m o c k _ s y n c . j s       }�    h V     o�    �W��v���v�n��F�.v�v`.f{��                       
 m o d u l e _ d i r   ��    p \     o�    WՌ�v���-�n��F�.v�`���v�                      m o d u l e _ d i r . j s     ��    � l     o�    `���v���.�n��F�.v�`���v�        �               n o d e - m o d u l e s - p a t h s . j s     ��    h T     o�    l#��v�fF��n��QF�.v�Y�.f{�                        	 n o d e _ p a t h     ��    p Z     o�    ٓ�v���-�n��QF�.v� ��v�       P               n o d e _ p a t h . j s       ��    p Z     o�    ����v��.�n��QF�.v�����v��       �                n o n s t r i n g . j s       ��    h V     o�    �˙�v��u��n��xF�.v��Z/f{��                       
 p a t h f i l t e r   ��    p \     o�    ���v�'V/�n��xF�.v����v�       �               p a t h f i l t e r . j s     ��    h V     o�    ���v�����n���F�.v��l/f{��                       
 p r e c e d e n c e   ��    p \     o�    ʣ��v�1}/�n���F�.v�ʣ��v��      �               p r e c e d e n c e . j s     ��    h R     o�    �ʢ�v�! ��n�h�I�.v�Mp0f{��                        r e s o l v e r       ��    h X     o�    ��v���0�n�h�I�.v���v� P      �M               r e s o l v e r . j s ��    x b     o�    4��v�R0�n�h�I�.v�4��v� `      _P               r e s o l v e r _ s y n c .  s       ��    p \     o�    [��v�O��n�h�I�.v��2f{��                        s h a d o w e d _ c o r e     ��    x b     o�    ���v��3�n�h�I�.v����v�                      s h a d o w e d _ c o r e . j s       ��    h V     o�    ���v�+�3�n�m�I�.v����v�h      a              
 s u b d i r s . j s   ��    h X     o�    ���v�.�3�n��I�.v�����v�        �               s y m l i n k s . j s                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            var path = require('path');
var test = require('tape');
var resolve = require('../');

test('filter', function (t) {
    var dir = path.join(__dirname, 'resolver');
    var packageFilterArgs;
    var res = resolve.sync('./baz', {
        basedir: dir,
        // NOTE: in v2.x, this will be `pkg, pkgfile, dir`, but must remain "broken" here in v1.x for compatibility
        packageFilter: function (pkg, /*pkgfile,*/ dir) { // eslint-disable-line spaced-comment
            pkg.main = 'doom'; // eslint-disable-line no-param-reassign
            packageFilterArgs = 'is 1.x' ? [pkg, dir] : [pkg, pkgfile, dir]; // eslint-disable-line no-constant-condition, no-undef
            return pkg;
        }
    });

    t.equal(res, path.join(dir, 'baz/doom.js'), 'changing the package "main" works');

    var packageData = packageFilterArgs[0];
    t.equal(packageData.main, 'doom', 'package "main" was altered');

    if (!'is 1.x') { // eslint-disable-line no-constant-condition
        var packageFile = packageFilterArgs[1];
        t.equal(packageFile, path.join(dir, 'baz', 'package.json'), 'package.json path is correct');
    }

    var packageDir = packageFilterArgs['is 1.x' ? 1 : 2]; // eslint-disable-line no-constant-condition
    // eslint-disable-next-line no-constant-condition
    t.equal(packageDir, path.join(dir, 'baz'), ('is 1.x' ? 'second' : 'third') + ' packageFilter argument is "dir"');

    t.end();
});
                                                                                                             (  i  #^ 
�f�) .F!2 �(�!�
(  k#  A!(  
{  F!2 �����3 .#*
� � ts 
���
�
	�"����"��2  �	"3-  ^fq�N  6�D  #*
='�^ ����) .� �"��'�"����#��(  �	"6#  ?gn�:  '�:  ):"�W 
P/OPO% .p �%  E#  + %  W �����' .`5� �&5)	�'&  �"	""!  &D"$�&  �  `5� 
@[? .

 �'���������
�  `  W  
 
`K_` _1 .� �'0  q+  '80  � 
PO4 .[ �3  "1  3  B �3 �	3 �������Q� .� �
`�	�	��5	
+[:

	/	
�	G7  	�  eH�Om�  =�  a		� �
L ���G .W� �,�
�
�
�F  �A  40IF  �  W� 
 $  4X ,  A  +  D 
`=_`_3 4O < �21��
2  W2    ,< �"!��
2 ���
2 ���= � X,,
)
(!"		!
 1<  �:N7  QVu	<  c� ����4��!����������� �t� �."
:m2+.	KLEH		1F<
wz" /
  	�.=%�  .5�9P���  .�  �t��
 �������.���0 �"
+,+,+,+
,+V�0 � z�����������
"
 ����


	
	
�!�~0  A(�*	"P+  ,�5/
�	0  ��  �
V�0 ����� � � 	�
�

	�	
  ;6�	"X  >j�,  �,  ;
� `�_) � �
��.
(  E$$#  <[(  �  9z �������������� '� �"����	
�	2
+
	*
 




���  v%	"�$	"J  ":�'Z
�  
�  '� `W_`_`_`_#  	O# ����	���#  t#  �   	O# �������<�����F�����^�����[��B�  �
	�@I?� �W=#"h=��	
)-	G	G$-		

w
[�I�b\C;  ��&�  �var path = require('path');
var test = require('tape');
var resolve = require('../');

test('filter', function (t) {
    t.plan(4);
    var dir = path.join(__dirname, 'resolver');
    var packageFilterArgs;
    resolve('./baz', {
        basedir: dir,
        packageFilter: function (pkg, pkgfile) {
            pkg.main = 'doom'; // eslint-disable-line no-param-reassign
            packageFilterArgs = [pkg, pkgfile];
            return pkg;
        }
    }, function (err, res, pkg) {
        if (err) t.fail(err);

        t.equal(res, path.join(dir, 'baz/doom.js'), 'changing the package "main" works');

        var packageData = packageFilterArgs[0];
        t.equal(pkg, packageData, 'first packageFilter argument is "pkg"');
        t.equal(packageData.main, 'doom', 'package "main" was altered');

        var packageFile = packageFilterArgs[1];
        t.equal(
            packageFile,
            path.join(dir, 'baz/package.json'),
            'second packageFilter argument is "pkgfile"'
        );

        t.end();
    });
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ��u#b4�>�<  	�7  �W�63	V�B0<  @���  W%q�
(	d�>< 
@+?@ N �N  0  ' �L �L �������c��+�5 c G
	
	

	� �
/����� �	5	�����
�AVM.\!MBA	B3!('
�	�����	�	���	
+4uf*_4  	�, �/  g��kR	nl�4  / �	  c G
�$� �
L �
L �������$�4 �.[-.-�.-.-.-� �9-		Z&4/&1#(!";	�		�	�	�	&�	�	�	�	�	�	N ! !	
C&!!4  :�/��/  �&��DR	X�6$4  1\A�	  �[�� 
0\/) � � (   "#  R(  q ������:�G � �'4$
  F  �A  h)#pF  
� 
�P� w �:  `  N ����������������I� |� �|������,w	
"	
���	�  	�	  �g�Rc�  5�	  |� �L ����-��;�) @-''2
	
	
	�<( �@�������'�	)����
��&X.�<�(  	�#  �C�(  ,�  @+'2�<( �L �L ����'��0��'��4�����1��'���) 0^!"!"� 8������	&		,
*"3"((1(5z
'	

)22 F�(  �#  `t���]�(  $:�5�  ^� 0L .L ����j��.�3 $/!$'I./2 /��_f���'�&��.X/a2  �-  �b2  $�  /'I./2 $L ����\��,�a &/!%&|-` (/��QX���&�&7J-S`  �[  �``  $�  /&|-` &L 
p;o 0W z2  7 
�C _ �:  H  A 
�8 T �
/  =  4 
�= Y �4  9 0�/ .,6
  (65.6-,.6e
  ; ,,
  FCC  .,@  7    %  ' dc? `X_`_  �5
  |  g �������b��E�) ,�Dw� >@&-
J O	�?4,CDGHG	
&H
GHE	$#H9';9%$$"+,!HS/:MN-rA83$ST$ST$87$WX"WX$0	-R

;�`
	L;Fc( var test = require('tape');
var path = require('path');
var resolve = require('../');

test('faulty basedir must produce error in windows', { skip: process.platform !== 'win32' }, function (t) {
    t.plan(1);

    var resolverDir = 'C:\\a\\b\\c\\d';

    resolve('tape/lib/test.js', { basedir: resolverDir }, function (err, res, pkg) {
        t.equal(!!err, true);
    });
});

test('non-existent basedir should not throw when preserveSymlinks is false', function (t) {
    t.plan(2);

    var opts = {
        basedir: path.join(path.sep, 'unreal', 'path', 'that', 'does', 'not', 'exist'),
        preserveSymlinks: false
    };

    var module = './dotdot/abc';

    resolve(module, opts, function (err, res) {
        t.equal(err.code, 'MODULE_NOT_FOUND');
        t.equal(res, undefined);
    });
});
                                                                                                                                                                                                                         ���	���	dm! 2 j& �!		�����	���	-$&  2		& �����> D3w> �3_		^3�����	���wl>  �9  HS8*>  �  D	3	> ��"� )("("(")"("*"(G-H-K.G-G-J.G-G-J.G-G-J.G-G-J.G-G-J.G-G*C,A*A+A*A*A*F+A-A*A*A*F/
 �)��(���"�(���"�(���"�)���"�(���"�*���!"�(����G��H��K��G��G��J��G��G��J��G��G��J��G��G��J��G��G��J��G��G��C� �A��A��A��A��A��F��A�!�A��A��A��F�/�
  M9696979698969((,((+((+((+((+((+(($ """""'"!"""'  CUUUVUWU^_c
^	^b^^b^^b^^ b"^!$^#&b%(^'*^),\+.X-0Y/2X14X36X58^7:[9<X;>X=@X?B^A  0("(
"(")"("*"(G- H-"K!.$G#-&G%-(J'.*G)-,G+-.J-.0G/-2G1-4J3.6G5-8G7-:J9.<G;->G=-@J?.BGA-DGC*FCE,HAG*JAI+LAK*NAM*PAO*RFQ+TAS-VAU*XAW*ZAY*\F[9  2  6 8 z  | ~ PaOPwOPO � �		  �  y}  � p�opop'o � �
J	

	AB!,#/  �  �I  D� @�?@? �
!/0!  �  �9 
0R/0/0/ � ��	��
���  y  N1    " 
02/ N �

  7     5 �

   0~/0/# #	K N0161!	$"  �	  :

5"  �  #	K @�?@?@>?' X� �
b	a`o)�&inmz*'  �"  -$w>'  �e  7,,>' @�?@1?@A?, \\	
� �
B	A@OI�"INM-(Z-_,  �'  -(ll,  �2m  7
(A, 
`$_0 ^ �/  )-  /  E �/ �/ ����7����0�= F,*/''�1< �7.��7����R������'a	&;)�1�<  �7  �k��<  ,P�  F%*(	
'�
1	< L �L ����[��,� "/!#(I-- 2/��GN���(�&��-@-I  �  �_  $�  /(I-- :L !�pߺ�ߺ�/ߺ�ߺ�ߺ 8� J1�	�				  �	  8Jo  8� ��� � r)*%
  "  ]G
 ���������l����������3��Q� ���module.exports={A:{A:{"2":"J D E F A B EC"},B:{"1":"P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H","2":"C K L G M N O"},C:{"1":"TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"0 1 2 3 4 5 6 7 8 9 FC uB I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB GC HC"},D:{"1":"QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB"},E:{"1":"B C K L G 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I w J D E F A KC 0B LC MC NC OC"},F:{"1":"DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"0 1 2 3 4 5 6 7 8 9 F B C G M N O x g y z AB BB CB SC TC UC VC rB CC WC sB"},G:{"1":"fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"E 0B XC DC YC ZC aC bC cC dC eC"},H:{"2":"rC"},I:{"1":"H","2":"uB I sC tC uC vC DC wC xC"},J:{"2":"D A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"2":"A B"},O:{"1":"yC"},P:{"1":"g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD","2":"I"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"ED","2":"DD"}},B:1,C:"rel=noopener"};
                                                    const exportedTypeSuite = {
  Transform: exports.Transform,
  SourceMapOptions: exports.SourceMapOptions,
  Options: exports.Options,
};
exports. default = exportedTypeSuite;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 module.exports={A:{A:{"2":"J D E F A B EC"},B:{"2":"C K L G M N O","129":"P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"1":"0 1 2 3 4 5 6 7 8 9 uB I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB GC HC","2":"FC"},D:{"2":"I w J D E F A B C","129":"0 1 2 3 4 5 6 7 8 9 K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC"},E:{"2":"I w J D E F A B C K L G KC 0B LC MC NC OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC"},F:{"2":"F B SC TC UC VC rB CC","129":"0 1 2 3 4 5 6 7 8 9 C G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e WC sB"},G:{"2":"E 0B XC DC YC ZC aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC"},H:{"2":"rC"},I:{"2":"uB I H sC tC uC vC DC wC xC"},J:{"2":"D","129":"A"},K:{"2":"A B C h rB CC sB"},L:{"2":"H"},M:{"2":"f"},N:{"2":"A B"},O:{"2":"yC"},P:{"2":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"2":"2B"},R:{"2":"CD"},S:{"2":"DD ED"}},B:1,C:"Custom protocol handling"};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              module.exports={A:{A:{"2":"J D E F A EC","132":"B"},B:{"1":"P Q R S","132":"C K L G M N O","513":"T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"1":"DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V","2":"0 1 2 3 4 5 6 7 8 9 FC uB I w J D E F A B C K L G M N O x g y z AB BB CB GC HC","513":"W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB"},D:{"1":"wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T","2":"I w J D E F A B C K L G M N O x g","260":"0 1 2 3 4 5 6 7 8 9 y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB","513":"U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC"},E:{"1":"C rB sB","2":"I w J D KC 0B LC MC","132":"E F A B NC OC 1B","1025":"K L G 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC"},F:{"1":"0 1 2 3 4 5 6 7 8 9 G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB","2":"F B C SC TC UC VC rB CC WC sB","513":"h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e"},G:{"1":"iC jC kC lC","2":"0B XC DC YC ZC aC","132":"E bC cC dC eC fC gC hC","1025":"mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC"},H:{"2":"rC"},I:{"1":"H","2":"uB I sC tC uC vC DC wC xC"},J:{"2":"D A"},K:{"2":"A B C rB CC sB","513":"h"},L:{"513":"H"},M:{"513":"f"},N:{"2":"A B"},O:{"1":"yC"},P:{"1":"g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD","2":"I"},Q:{"1":"2B"},R:{"513":"CD"},S:{"1":"DD ED"}},B:4,C:"Referrer Policy"};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           module.exports={A:{A:{"1":"J D E F A B","16":"EC"},B:{"1":"C K L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"1":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","16":"FC uB GC HC"},D:{"1":"3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","16":"0 1 2 I w J D E F A B C K L G M N O x g y z"},E:{"1":"J D E F A B C K L G LC MC NC OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","16":"I w KC 0B"},F:{"1":"0 1 2 3 4 5 6 7 8 9 G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","16":"F SC","132":"B C TC UC VC rB CC WC sB"},G:{"1":"E aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","16":"0B XC DC YC ZC"},H:{"1":"rC"},I:{"1":"uB I H uC vC DC wC xC","16":"sC tC"},J:{"1":"D A"},K:{"1":"h","132":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"257":"A B"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:1,C:"readonly attribute of input and textarea elements"};
        ve cannot be used with an absolute path.");
        }
        configPath = _path.default.resolve(_path.default.dirname(relativeTo), inputPath);
        if (!_fs.default.existsSync(configPath)) {
            throw rule.error(`The config file at "${inputPath}" does not exist. Make sure the path is correct and the file exists.`);
        }
        rule.remove();
    });
    return configPath ? configPath : null;
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 /* eslint-disable no-restricted-globals */

// type utils
module.exports.defineConfig = (config) => config

// proxy cjs utils (sync functions)
Object.assign(module.exports, require('./dist/node-cjs/publicUtils.cjs'))

// async functions, can be redirect from ESM build
const asyncFunctions = [
  'build',
  'createServer',
  'preview',
  'transformWithEsbuild',
  'resolveConfig',
  'optimizeDeps',
  'formatPostcssSourceMap',
  'loadConfigFromFile',
  'preprocessCSS',
]
asyncFunctions.forEach((name) => {
  module.exports[name] = (...args) =>
    import('./dist/node/index.js').then((i) => i[name](...args))
})

// some sync functions are marked not supported due to their complexity and uncommon usage
const unsupportedCJS = ['resolvePackageEntry', 'resolvePackageData']
unsupportedCJS.forEach((name) => {
  module.exports[name] = () => {
    throw new Error(
      `"${name}" is not supported in CJS build of Vite 4.\nPlease use ESM or dynamic imports \`const { ${name} } = await import('vite')\`.`,
    )
  }
})
      duction",
		"test:multirepo": "cd ./test/resolver/multirepo && npm install && npm test"
	},
	"devDependencies": {
		"@ljharb/eslint-config": "^21.0.1",
		"array.prototype.map": "^1.0.5",
		"aud": "^2.0.2",
		"copy-dir": "^1.3.0",
		"eclint": "^2.8.1",
		"eslint": "=8.8.0",
		"in-publish": "^2.0.1",
		"mkdirp": "^0.5.5",
		"mv": "^2.1.1",
		"npmignore": "^0.3.0",
		"object-keys": "^1.1.1",
		"rimraf": "^2.7.1",
		"safe-publish-latest": "^2.0.0",
		"semver": "^6.3.0",
		"tap": "0.4.13",
		"tape": "^5.6.3",
		"tmp": "^0.0.31"
	},
	"license": "MIT",
	"author": {
		"name": "James Halliday",
		"email": "mail@substack.net",
		"url": "http://substack.net"
	},
	"funding": {
		"url": "https://github.com/sponsors/ljharb"
	},
	"dependencies": {
		"is-core-module": "^2.12.0",
		"path-parse": "^1.0.7",
		"supports-preserve-symlinks-flag": "^1.0.0"
	},
	"publishConfig": {
		"ignore": [
			".github/workflows",
			"appveyor.yml"
		]
	}
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         {"version":3,"file":"env.mjs","sources":["env.ts"],"sourcesContent":["declare const __MODE__: string\ndeclare const __DEFINES__: Record<string, any>\n\nconst context = (() => {\n  if (typeof globalThis !== 'undefined') {\n    return globalThis\n  } else if (typeof self !== 'undefined') {\n    return self\n  } else if (typeof window !== 'undefined') {\n    return window\n  } else {\n    return Function('return this')()\n  }\n})()\n\n// assign defines\nconst defines = __DEFINES__\nObject.keys(defines).forEach((key) => {\n  const segments = key.split('.')\n  let target = context\n  for (let i = 0; i < segments.length; i++) {\n    const segment = segments[i]\n    if (i === segments.length - 1) {\n      target[segment] = defines[key]\n    } else {\n      target = target[segment] || (target[segment] = {})\n    }\n  }\n})\n"],"names":[],"mappings":"AAGA,MAAM,OAAO,GAAG,CAAC,MAAK;AACpB,IAAA,IAAI,OAAO,UAAU,KAAK,WAAW,EAAE;AACrC,QAAA,OAAO,UAAU,CAAA;AAClB,KAAA;AAAM,SAAA,IAAI,OAAO,IAAI,KAAK,WAAW,EAAE;AACtC,QAAA,OAAO,IAAI,CAAA;AACZ,KAAA;AAAM,SAAA,IAAI,OAAO,MAAM,KAAK,WAAW,EAAE;AACxC,QAAA,OAAO,MAAM,CAAA;AACd,KAAA;AAAM,SAAA;AACL,QAAA,OAAO,QAAQ,CAAC,aAAa,CAAC,EAAE,CAAA;AACjC,KAAA;AACH,CAAC,GAAG,CAAA;AAEJ;AACA,MAAM,OAAO,GAAG,WAAW,CAAA;AAC3B,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,CAAC,OAAO,CAAC,CAAC,GAAG,KAAI;IACnC,MAAM,QAAQ,GAAG,GAAG,CAAC,KAAK,CAAC,GAAG,CAAC,CAAA;IAC/B,IAAI,MAAM,GAAG,OAAO,CAAA;AACpB,IAAA,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,QAAQ,CAAC,MAAM,EAAE,CAAC,EAAE,EAAE;AACxC,QAAA,MAAM,OAAO,GAAG,QAAQ,CAAC,CAAC,CAAC,CAAA;AAC3B,QAAA,IAAI,CAAC,KAAK,QAAQ,CAAC,MAAM,GAAG,CAAC,EAAE;YAC7B,MAAM,CAAC,OAAO,CAAC,GAAG,OAAO,CAAC,GAAG,CAAC,CAAA;AAC/B,SAAA;AAAM,aAAA;AACL,YAAA,MAAM,GAAG,MAAM,CAAC,OAAO,CAAC,KAAK,MAAM,CAAC,OAAO,CAAC,GAAG,EAAE,CAAC,CAAA;AACnD,SAAA;AACF,KAAA;AACH,CAAC,CAAC","x_google_ignoreList":[0]}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Copyright (c) 2011 Debuggable Limited <felix@debuggable.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   } else if (this.tokens.tokens[index].isOptionalChainEnd) {
        depth++;
      }
      if (depth < 0) {
        return false;
      }

      // This subscript token is a later one in the same chain.
      if (depth === 0 && this.tokens.tokens[index].subscriptStartIndex != null) {
        return this.tokens.tokens[index - 1].type === tt._super;
      }
      index--;
    }
  }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                The MIT License (MIT)
Copyright (c) 2015 Dmitry Ivanov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   e syntax
      // relies on the subscript being intact, so leave this token alone.
      this.tokens.tokenAtRelativeIndex(-1).type !== tt._super
    ) {
      const param = this.nameManager.claimFreeName("_");
      let arrowStartSnippet;
      if (
        chainStart > 0 &&
        this.tokens.matches1AtIndex(chainStart - 1, tt._delete) &&
        this.isLastSubscriptInChain()
      ) {
        // Delete operations are special: we already removed the delete keyword, and to still
        // perform a delete, we need to insert a delete in the very last part of the chain, which
        // in correct code will always be a property access.
        arrowStartSnippet = `${param} => delete ${param}`;
      } else {
        arrowStartSnippet = `${param} => ${param}`;
      }
      if (this.tokens.tokens[chainStart].isAsyncOperation) {
        arrowStartSnippet = `async ${arrowStartSnippet}`;
      }
      if (
        this.tokens.matches2(tt.questionDot, tt.parenL) ||
        this.tokens.matches2(tt.questionDot, tt.lessThan)
      ) {
        if (this.justSkippedSuper()) {
          this.tokens.appendCode(".bind(this)");
        }
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${arrowStartSnippet}`);
      } else if (this.tokens.matches2(tt.questionDot, tt.bracketL)) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${arrowStartSnippet}`);
      } else if (this.tokens.matches1(tt.questionDot)) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${arrowStartSnippet}.`);
      } else if (this.tokens.matches1(tt.dot)) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${arrowStartSnippet}.`);
      } else if (this.tokens.matches1(tt.bracketL)) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${arrowStartSnippet}[`);
      } else if (this.tokens.matches1(tt.parenL)) {
        if (this.justSkippedSuper()) {
          this.tokens.appendCode(".bind(this)");
        }
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${arrowStartSnippet}(`);
      } else {
        throw new Error("Unexpected subscript operator in optional chain.");
      }
      return true;
    }
    return false;
  }

  /**
   * Determine if the current token is the last of its chain, so that we know whether it's eligible
   * to have a delete op inserted.
   *
   * We can do this by walking forward until we determine one way or another. Each
   * isOptionalChainStart token must be paired with exactly one isOptionalChainEnd tokINDX( 	 ��<           (      �       �                    ��    h R     ��    �xI�v���e�n�} 6�.v���	� v� p      �n               i n d e x . j s       ��    X H     ��    ѽM�v��9��n�} 6�.v�qf{��                        l i b ��    ` P     ��    �N�v�h���n��'6�.v���	� v�       i               L I C E N S E ��    p Z     ��    �Q�v��J��n��N6�.v�qf{��                        n o d e _ m o d u l e s       ��    p Z     ��    �V�v��d}�n��N6�.v i� v�       (               p a c k a g e . j s o n       ��    h T     ��    �V�v�M���n��N6�.v�{��� v� @      �7              	 R E A D M E . m d     ��    ` L     ��    W�v��n��N6�.v��;f{��                        t y p e s                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    {
  "name": "chokidar",
  "description": "Minimal and efficient cross-platform file watching library",
  "version": "3.5.3",
  "homepage": "https://github.com/paulmillr/chokidar",
  "author": "Paul Miller (https://paulmillr.com)",
  "contributors": [
    "Paul Miller (https://paulmillr.com)",
    "Elan Shanker"
  ],
  "engines": {
    "node": ">= 8.10.0"
  },
  "main": "index.js",
  "dependencies": {
    "anymatch": "~3.1.2",
    "braces": "~3.0.2",
    "glob-parent": "~5.1.2",
    "is-binary-path": "~2.1.0",
    "is-glob": "~4.0.1",
    "normalize-path": "~3.0.0",
    "readdirp": "~3.6.0"
  },
  "optionalDependencies": {
    "fsevents": "~2.3.2"
  },
  "devDependencies": {
    "@types/node": "^14",
    "chai": "^4.3",
    "dtslint": "^3.3.0",
    "eslint": "^7.0.0",
    "mocha": "^7.0.0",
    "nyc": "^15.0.0",
    "rimraf": "^3.0.0",
    "sinon": "^9.0.1",
    "sinon-chai": "^3.3.0",
    "typescript": "~4.4.3",
    "upath": "^1.2.0"
  },
  "files": [
    "index.js",
    "lib/*.js",
    "types/index.d.ts"
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/paulmillr/chokidar.git"
  },
  "bugs": {
    "url": "https://github.com/paulmillr/chokidar/issues"
  },
  "license": "MIT",
  "scripts": {
    "dtslint": "dtslint types",
    "lint": "eslint --report-unused-disable-directives --ignore-path .gitignore .",
    "mocha": "mocha --exit --timeout 90000",
    "test": "npm run lint && npm run mocha"
  },
  "keywords": [
    "fs",
    "watch",
    "watchFile",
    "watcher",
    "watching",
    "file",
    "fsevents"
  ],
  "types": "./types/index.d.ts",
  "nyc": {
    "include": [
      "index.js",
      "lib/*.js"
    ],
    "reporter": [
      "html",
      "text"
    ]
  },
  "funding": [
    {
      "type": "individual",
      "url": "https://paulmillr.com/funding/"
    }
  ]
}
                                                                                                                                                                                                                        a2 ���yF � �#@��������4
�a�F  �FP  W#K 4F  "�  GhfF �#@����� � � � 4
� a�F P�OP7O2 � �$,� � � ��"
�"	�"

	
72  �-  CX02  "�  3
	� P�OP;O5 �%,�!�!�!��$
�$	�$	
;5  �-  Ce45  "�  3
	� p�opao< � �&1�"
�"�"5�"�"	�"
�"\�"<  g3F  J62<  "
�  8
	'a< �������u�< ��� �&,�$�%

4$&		���� �%�%�%�%
5
<�����%�%6<3<  �8��7  ��Ng<  "
�  4�?
	
	Q@� 
@0?@?( �(�&�&	'  >' �t�- �("	>3:9<,  BW,  +~ PbOPGOPOPbO* 9:� �("	
����#

��)$7*  �%  X#!�*  "�  9:� PuOPOPCOP4OPOPpO- W	%f� �*"�(�(�)
�	��)�(�(
+0)�(���(*�)�)69�(�(-  �2>b-  % 
	`
	
	I- �d����F � �+(
 
�F  �A  `	 @	F  (*� ����m�F � �,F�+�+*
�(�)#�)�)!�+�+�)�)#��!�+�+�+�+#��!�)�)
�)�)	%	&')	Z'
'	(��	F(��u?67F  	�A  �44%�E6r
?&�F  F�  IO
	8
	 �
	n� P�OPuO2 � �0

	s@2  ��-  6[�k2  � P�OPOP$O ?� �1"	�$	�$J		�$�$"  l1  "Gj  ?	� PgOP6O G| �1"
{~

  �  B*
  "JA  G| �������I����P �� �2V/ ���1�	�!
7"%�1�0�%�%�0�1�AP  	�$�K  t%/K'^yFP  6 �  �	�
	� {
  "name": "glob-parent",
  "version": "5.1.2",
  "description": "Extract the non-magic parent path from a glob string.",
  "author": "Gulp Team <team@gulpjs.com> (https://gulpjs.com/)",
  "contributors": [
    "Elan Shanker (https://github.com/es128)",
    "Blaine Bublitz <blaine.bublitz@gmail.com>"
  ],
  "repository": "gulpjs/glob-parent",
  "license": "ISC",
  "engines": {
    "node": ">= 6"
  },
  "main": "index.js",
  "files": [
    "LICENSE",
    "index.js"
  ],
  "scripts": {
    "lint": "eslint .",
    "pretes