module.exports={A:{A:{"4":"J D E F A B EC"},B:{"4":"C K L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"1":"FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","8":"0 1 2 3 4 5 6 7 8 9 FC uB I w J D E F A B C K L G M N O x g y z AB BB CB DB EB GC HC"},D:{"4":"0 1 2 3 4 5 6 7 8 9 w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","8":"I"},E:{"4":"w J D E F A B C K L G LC MC NC OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","8":"I KC 0B"},F:{"4":"0 1 2 3 4 5 6 7 8 9 G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","8":"F B C SC TC UC VC rB CC WC sB"},G:{"4":"E YC ZC aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","8":"0B XC DC"},H:{"8":"rC"},I:{"4":"uB I H vC DC wC xC","8":"sC tC uC"},J:{"4":"A","8":"D"},K:{"4":"h","8":"A B C rB CC sB"},L:{"4":"H"},M:{"1":"f"},N:{"4":"A B"},O:{"4":"yC"},P:{"4":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"4":"2B"},R:{"4":"CD"},S:{"1":"DD ED"}},B:1,C:"Ruby annotation"};
                                                                         } else {
                groupedOptions[value].flags.push(key);
            }
        }
        console.log();
        console.log("Options:");
        for (let { flags , description , deprecated  } of Object.values(groupedOptions)){
            if (deprecated) continue;
            if (flags.length === 1) {
                console.log(" ".repeat(indent + 4 /* 4 = "-i, ".length */ ), flags.slice().reverse().join(", ").padEnd(20, " "), description);
            } else {
                console.log(" ".repeat(indent), flags.slice().reverse().join(", ").padEnd(24, " "), description);
            }
        }
    }
    console.log();
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     module.exports={A:{A:{"2":"J D E F A B EC"},B:{"1":"P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H","2":"C K L","516":"G M N O"},C:{"1":"LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"FC uB I w J D E F A B C K L G M N O x g y GC HC","33":"0 1 2 3 4 5 6 7 8 9 z AB BB CB DB EB FB GB HB IB JB KB"},D:{"1":"XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"I w J D E F A B C K L G M N O x g y z","33":"0 1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB"},E:{"1":"B C K L G rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I w J D E F A KC 0B LC MC NC OC 1B"},F:{"1":"KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"F B C G M N SC TC UC VC rB CC WC sB","33":"0 1 2 3 4 5 6 7 8 9 O x g y z AB BB CB DB EB FB GB HB IB JB"},G:{"1":"gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"E 0B XC DC YC ZC aC bC cC dC eC fC"},H:{"2":"rC"},I:{"1":"H","2":"uB I sC tC uC vC DC wC xC"},J:{"2":"D","130":"A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"2":"A B"},O:{"1":"yC"},P:{"33":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:5,C:"WebRTC Peer-to-peer connections"};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       module.exports={A:{A:{"2":"J D E F A B EC"},B:{"1":"C K L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"1":"0 1 2 3 4 5 6 7 8 9 G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"FC uB I w J D E F A B C K L GC HC"},D:{"1":"OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB","194":"LB MB NB"},E:{"1":"A B C K L G 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I w J D E F KC 0B LC MC NC OC"},F:{"1":"BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"0 1 2 3 4 5 6 7 F B C G M N O x g y z SC TC UC VC rB CC WC sB","194":"8 9 AB"},G:{"1":"eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"E 0B XC DC YC ZC aC bC cC dC"},H:{"2":"rC"},I:{"1":"H","2":"uB I sC tC uC vC DC wC xC"},J:{"2":"D A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"2":"A B"},O:{"1":"yC"},P:{"1":"g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD","2":"I"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:6,C:"Rest parameters"};
                                             Processor)(args, configPath);
    if (shouldWatch) {
        // Abort the watcher if stdin is closed to avoid zombie processes
        // You can disable this behavior with --watch=always
        if (args["--watch"] !== "always") {
            process.stdin.on("end", ()=>process.exit(0));
        }
        process.stdin.resume();
        await processor.watch();
    } else {
        await processor.build().catch((e)=>{
            console.error(e);
            process.exit(1);
        });
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          module.exports={A:{A:{"2":"J D E F A B EC"},B:{"1":"N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H","2":"C K L G M"},C:{"1":"QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"0 1 2 3 4 5 6 7 8 9 FC uB I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB GC HC"},D:{"1":"VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB","194":"TB UB"},E:{"1":"A B C K L G 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I w J D E F KC 0B LC MC NC OC"},F:{"1":"IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"0 1 2 3 4 5 6 7 8 9 F B C G M N O x g y z AB BB CB DB EB FB GB SC TC UC VC rB CC WC sB","194":"HB"},G:{"1":"eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"E 0B XC DC YC ZC aC bC cC dC"},H:{"2":"rC"},I:{"1":"H","2":"uB I sC tC uC vC DC wC xC"},J:{"2":"D A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"2":"A B"},O:{"1":"yC"},P:{"1":"g 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD","2":"I zC"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"ED","2":"DD"}},B:1,C:"DOM manipulation convenience methods"};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            module.exports={A:{A:{"1":"F A B","2":"J D E EC"},B:{"1":"C K L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"1":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"FC uB GC HC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC"},E:{"1":"J D E F A B C K L G LC MC NC OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I KC 0B","16":"w"},F:{"1":"0 1 2 3 4 5 6 7 8 9 B C G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e rB CC WC sB","2":"F SC TC UC VC"},G:{"1":"E XC DC YC ZC aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","16":"0B"},H:{"1":"rC"},I:{"1":"uB I H uC vC DC wC xC","16":"sC tC"},J:{"1":"D A"},K:{"1":"B C h rB CC sB","2":"A"},L:{"1":"H"},M:{"1":"f"},N:{"1":"A B"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:1,C:"document.head"};
                                                            332,"67":0.00664,"68":0.00332,"69":0.25564,"70":0.09296,"71":0.00332,"72":0.09628,"73":0.01328,"74":0.18924,"75":0.0166,"76":0.00332,"77":0.01328,"78":0.08632,"79":0.06308,"80":0.01992,"81":0.01328,"83":0.07304,"84":0.00996,"85":0.01328,"86":0.08964,"87":0.02988,"88":0.00664,"89":0.00996,"90":0.05312,"91":0.08964,"92":0.07968,"93":0.01328,"94":0.01328,"95":0.00996,"96":0.0332,"97":0.06308,"98":0.12616,"99":0.12948,"100":0.05976,"101":0.03984,"102":0.03652,"103":0.08964,"104":0.0332,"105":0.04316,"106":0.0332,"107":0.05312,"108":0.07304,"109":0.22244,"110":0.4482,"111":0.53452,"112":0.00664,"113":0.00332,"114":0},F:{"9":0,"11":0,"12":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0.00332,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"60":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0.00664,"9.5-9.6":0,"10.0-10.1":0,"10.5":0,"10.6":0,"11.1":0,"11.5":0,"11.6":0,"12.1":0},B:{"12":0,"13":0,"14":0,"15":0,"16":0.00332,"17":0.00332,"18":0.01992,"79":0,"80":0,"81":0,"83":0,"84":0,"85":0,"86":0,"87":0.00332,"88":0,"89":0,"90":0,"91":0,"92":0.01328,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0,"99":0.00332,"100":0.00332,"101":0.00332,"102":0.00332,"103":0.00332,"104":0.00332,"105":0.00332,"106":0.01328,"107":0.03984,"108":0.13612,"109":0.083,"110":0.94952,"111":0.79016},E:{"4":0,"5":0,"6":0,"7":0,"8":0,"9":0.00332,"10":0,"11":0,"12":0,"13":0.00664,"14":0.01992,"15":0.00332,_:"0","3.1":0,"3.2":0,"5.1":0,"6.1":0,"7.1":0,"9.1":0,"10.1":0,"11.1":0,"12.1":0.00332,"13.1":0.01992,"14.1":0.02324,"15.1":0.00332,"15.2-15.3":0.00332,"15.4":0.01328,"15.5":0.0166,"15.6":0.06972,"16.0":0.01328,"16.1":0.02656,"16.2":0.0332,"16.3":0.11288,"16.4":0.00332,"16.5":0},G:{"8":0,"3.2":0,"4.0-4.1":0,"4.2-4.3":0.07252,"5.0-5.1":0.03361,"6.0-6.1":0.04245,"7.0-7.1":0.00708,"8.1-8.4":0.01061,"9.0-9.2":0.08137,"9.3":0.03715,"10.0-10.2":0.0283,"10.3":0.21934,"11.0-11.2":0.1875,"11.3-11.4":0.08844,"12.0-12.1":0.11498,"12.2-12.5":0.36792,"13.0-13.1":0.04953,"13.2":0.03361,"13.3":0.22995,"13.4-13.7":0.63502,"14.0-14.4":1.10022,"14.5-14.8":1.14798,"15.0-15.1":0.58549,"15.2-15.3":0.52358,"15.4":0.96402,"15.5":0.70577,"15.6":1.05777,"16.0":1.08254,"16.1":2.3508,"16module.exports={A:{A:{"2":"J D E F A B EC"},B:{"1":"L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H","16":"C K"},C:{"1":"PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"0 1 2 3 4 5 6 7 8 9 FC uB I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB GC HC"},D:{"1":"LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB"},E:{"1":"F A B C K L G OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I w J D E KC 0B LC MC NC"},F:{"1":"8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"0 1 2 3 4 5 6 7 F B C G M N O x g y z SC TC UC VC rB CC WC sB"},G:{"1":"cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"E 0B XC DC YC ZC aC bC"},H:{"2":"rC"},I:{"1":"H","2":"uB I sC tC uC vC DC wC xC"},J:{"2":"D A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"2":"A B"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:5,C:"document.scrollingElement"};
                                                  ald/es6-promise).

## TypeScript

axios includes [TypeScript](https://typescriptlang.org) definitions and a type guard for axios errors.

```typescript
let user: User = null;
try {
  const { data } = await axios.get('/user?ID=12345');
  user = data.userDetails;
} catch (error) {
  if (axios.isAxiosError(error)) {
    handleAxiosError(error);
  } else {
    handleUnexpectedError(error);
  }
}
```

Because axios dual publishes with an ESM default export and a CJS `module.exports`, there are some caveats.
The recommended setting is to use `"moduleResolution": "node16"` (this is implied by `"module": "node16"`). Note that this requires TypeScript 4.7 or greater.
If use ESM, your settings should be fine.
If you compile TypeScript to CJS and you can’t use `"moduleResolution": "node 16"`, you have to enable `esModuleInterop`.
If you use TypeScript to type check CJS JavaScript code, your only option is to use `"moduleResolution": "node16"`.

## Online one-click setup

You can use Gitpod, an online IDE(which is free for Open Source) for contributing or running the examples online.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/axios/axios/blob/main/examples/server.js)


## Resources

* [Changelog](https://github.com/axios/axios/blob/v1.x/CHANGELOG.md)
* [Ecosystem](https://github.com/axios/axios/blob/v1.x/ECOSYSTEM.md)
* [Contributing Guide](https://github.com/axios/axios/blob/v1.x/CONTRIBUTING.md)
* [Code of Conduct](https://github.com/axios/axios/blob/v1.x/CODE_OF_CONDUCT.md)

## Credits

axios is heavily inspired by the [$http service](https://docs.angularjs.org/api/ng/service/$http) provided in [AngularJS](https://angularjs.org/). Ultimately axios is an effort to provide a standalone `$http`-like service for use outside of AngularJS.

## License

[MIT](LICENSE)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          module.exports={A:{A:{"2":"J D E F A B EC"},B:{"2":"C K L G M N O P Q R S T","132":"U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"2":"0 1 2 3 4 5 6 7 8 9 FC uB I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB GC HC"},D:{"2":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T","132":"U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC"},E:{"2":"I w J D E F A B C K L G KC 0B LC MC NC OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC"},F:{"2":"0 1 2 3 4 5 6 7 8 9 F B C G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB SC TC UC VC rB CC WC sB","132":"kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e"},G:{"2":"E 0B XC DC YC ZC aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC"},H:{"2":"rC"},I:{"2":"uB I sC tC uC vC DC wC xC","132":"H"},J:{"2":"D A"},K:{"2":"A B C rB CC sB","132":"h"},L:{"132":"H"},M:{"2":"f"},N:{"2":"A B"},O:{"2":"yC"},P:{"2":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"2":"2B"},R:{"132":"CD"},S:{"2":"DD ED"}},B:7,C:"Document Policy"};
                                                                 foo',
  'file': document.querySelector('#fileInput').files[0]
});
```

or multiple files as `multipart/form-data`:

```js
await axios.postForm('https://httpbin.org/post', {
  'files[]': document.querySelector('#fileInput').files
});
```

`FileList` object can be passed directly:

```js
await axios.postForm('https://httpbin.org/post', document.querySelector('#fileInput').files)
```

All files will be sent with the same field names: `files[]`.

## 🆕 HTML Form Posting (browser)

Pass HTML Form element as a payload to submit it as `multipart/form-data` content.

```js
await axios.postForm('https://httpbin.org/post', document.querySelector('#htmlForm'));
```

`FormData` and `HTMLForm` objects can also be posted as `JSON` by explicitly setting the `Content-Type` header to `application/json`:

```js
await axios.post('https://httpbin.org/post', document.querySelector('#htmlForm'), {
  headers: {
    'Content-Type': 'application/json'
  }
})
```

For example, the Form

```html
<form id="form">
  <input type="text" name="foo" value="1">
  <input type="text" name="deep.prop" value="2">
  <input type="text" name="deep prop spaced" value="3">
  <input type="text" name="baz" value="4">
  <input type="text" name="baz" value="5">

  <select name="user.age">
    <option value="value1">Value 1</option>
    <option value="value2" selected>Value 2</option>
    <option value="value3">Value 3</option>
  </select>

  <input type="submit" value="Save">
</form>
```

will be submitted as the following JSON object:

```js
{
  "foo": "1",
  "deep": {
    "prop": {
      "spaced": "3"
    }
  },
  "baz": [
    "4",
    "5"
  ],
  "user": {
    "age": "value2"
  }
}
````

Sending `Blobs`/`Files` as JSON (`base64`) is not currently supported.

## 🆕 Progress capturing

Axios supports both browser and node environments to capture request upload/download progress.

```js    
await axios.post(url, data, {
  onUploadProgress: function (axiosProgressEvent) {
    /*{
      loaded: number;
      total?: number;
      progress?: number; // in range [0..1]
      bytes: number; // how many bytes have been transferred since the last trigger (delta)
      estimated?: number; // estimated time in seconds
      rate?: number; // upload speed in bytes
      upload: true; // upload sign
    }*/
  },

  onDownloadProgress: function (axiosProgressEvent) {
    /*{
      loaded: number;
      total?: number;
      progress?: number;
      bytes: number; 
      estimated?: number;
      rate?: number; // download speed in bytes
      download: true; // downloadmodule.exports={A:{A:{"1":"J D E F A B EC"},B:{"1":"C K L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"1":"0 1 2 3 4 5 6 7 8 9 F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"FC uB I w J D E GC HC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC"},E:{"1":"J D E F A B C K L G MC NC OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","16":"I w KC 0B LC"},F:{"1":"0 1 2 3 4 5 6 7 8 9 B C G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e TC UC VC rB CC WC sB","16":"F SC"},G:{"1":"E aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"0B XC","16":"DC YC ZC"},H:{"2":"rC"},I:{"1":"H vC DC wC xC","2":"uB I sC tC uC"},J:{"1":"A","2":"D"},K:{"1":"A B C h rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"1":"B","2":"A"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:7,C:"Document.execCommand()"};
                                                   ``

## Using `multipart/form-data` format

### FormData

To send the data as a `multipart/formdata` you need to pass a formData instance as a payload.
Setting the `Content-Type` header is not required as Axios guesses it based on the payload type.

```js
const formData = new FormData();
formData.append('foo', 'bar');

axios.post('https://httpbin.org/post', formData);
```

In node.js, you can use the [`form-data`](https://github.com/form-data/form-data) library as follows:

```js
const FormData = require('form-data');

const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form)
```

### 🆕 Automatic serialization to FormData

Starting from `v0.27.0`, Axios supports automatic object serialization to a FormData object if the request `Content-Type`
header is set to `multipart/form-data`.

The following request will submit the data in a FormData format (Browser & Node.js):

```js
import axios from 'axios';

axios.post('https://httpbin.org/post', {x: 1}, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}).then(({data}) => console.log(data));
```

In the `node.js` build, the ([`form-data`](https://github.com/form-data/form-data)) polyfill is used by default.

You can overload the FormData class by setting the `env.FormData` config variable,
but you probably won't need it in most cases:

```js
const axios = require('axios');
var FormData = require('form-data');

axios.post('https://httpbin.org/post', {x: 1, buf: new Buffer(10)}, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}).then(({data}) => console.log(data));
```

Axios FormData serializer supports some special endings to perform the following operations:

- `{}` - serialize the value with JSON.stringify
- `[]` - unwrap the array-like object as separate fields with the same key

> **Note**
> unwrap/expand operation will be used by default on arrays and FileList objects

FormData serializer supports additional options via `config.formSerializer: object` property to handle rare cases:

- `visitor: Function` - user-defined visitor function that will be called recursively to serialize the data object
to a `FormData` object by following custom rules.

- `dots: boolean = false` - use dot notation instead of brackets to serialize arrays and objects;

- `metaTokens: boolean = true` - add the special ending (e.g `user{}: '{"name": "John"}'`) in the FormData key.
The back-end body-parser could potentialmodule.exports={A:{A:{"2":"J D E F A B EC"},B:{"1":"C K L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"1":"0 1 2 3 4 5 6 7 8 9 uB I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB GC HC","16":"FC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC"},E:{"1":"I w J D E F A B C K L G KC 0B LC MC NC OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC"},F:{"1":"0 1 2 3 4 5 6 7 8 9 B C G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e SC TC UC VC rB CC WC sB","16":"F"},G:{"1":"E 0B XC DC YC ZC aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC"},H:{"1":"rC"},I:{"1":"uB I H sC tC uC vC DC wC xC"},J:{"1":"D A"},K:{"1":"A B C h rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"2":"A B"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:7,C:"document.evaluate & XPath"};
                                                                                     
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancel the request (the message parameter is optional)
source.cancel('Operation canceled by the user.');
```

You can also create a cancel token by passing an executor function to the `CancelToken` constructor:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // An executor function receives a cancel function as a parameter
    cancel = c;
  })
});

// cancel the request
cancel();
```

> **Note:** you can cancel several requests with the same cancel token/abort controller.
> If a cancellation token is already cancelled at the moment of starting an Axios request, then the request is cancelled immediately, without any attempts to make a real request.

> During the transition period, you can use both cancellation APIs, even for the same request:

## Using `application/x-www-form-urlencoded` format

### URLSearchParams

By default, axios serializes JavaScript objects to `JSON`. To send data in the [`application/x-www-form-urlencoded` format](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) instead, you can use the [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) API, which is [supported](http://www.caniuse.com/#feat=urlsearchparams) in the vast majority of browsers,and [ Node](https://nodejs.org/api/url.html#url_class_urlsearchparams) starting with v10 (released in 2018).

```js
const params = new URLSearchParams({ foo: 'bar' });
params.append('extraparam', 'value');
axios.post('/foo', params);
```

### Query string (Older browsers)

For compatibility with very old browsers, there is a [polyfill](https://github.com/WebReflection/url-search-params) available (make sure to polyfill the global environment).

Alternatively, you can encode data using the [`qs`](https://github.com/ljharb/qs) library:

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

Or in another way (ES6),

```js
import qs from 'qs';
const data = { 'bar': 123 };
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url,
};
axios(options);
```

### Older Node.js versions

For older Node.js engines, you can use the [`querystring`](https://nodejs.org/api/querystring.html) module as follows:

```js
const querystring = require('querystring');
axios.post('https://something.com/', querystring.stringify({ foo:module.exports={A:{A:{"2":"J D E F A B EC"},B:{"1":"C K L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"1":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"FC uB GC HC"},D:{"1":"6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"0 1 2 3 4 5 I w J D E F A B C K L G M N O x g y z"},E:{"1":"E F A B C K L G OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I w J D KC 0B LC MC NC"},F:{"1":"0 1 2 3 4 5 6 7 8 9 M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"F B C G SC TC UC VC rB CC WC sB"},G:{"1":"E bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"0B XC DC YC ZC aC"},H:{"2":"rC"},I:{"1":"H wC xC","2":"uB I sC tC uC vC DC"},J:{"2":"D A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"2":"A B"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:1,C:"document.currentScript"};
                                                            nchronous you can add a flag
to the options object that will tell axios to run the code synchronously and avoid any delays in request execution.

```js
axios.interceptors.request.use(function (config) {
  config.headers.test = 'I am only a header!';
  return config;
}, null, { synchronous: true });
```

If you want to execute a particular interceptor based on a runtime check,
you can add a `runWhen` function to the options object. The interceptor will not be executed **if and only if** the return
of `runWhen` is `false`. The function will be called with the config
object (don't forget that you can bind your own arguments to it as well.) This can be handy when you have an
asynchronous request interceptor that only needs to run at certain times.

```js
function onGetCall(config) {
  return config.method === 'get';
}
axios.interceptors.request.use(function (config) {
  config.headers.test = 'special get headers';
  return config;
}, null, { runWhen: onGetCall });
```

### Multiple Interceptors

Given you add multiple response interceptors
and when the response was fulfilled
- then each interceptor is executed
- then they are executed in the order they were added
- then only the last interceptor's result is returned
- then every interceptor receives the result of its predecessor
- and when the fulfillment-interceptor throws
    - then the following fulfillment-interceptor is not called
    - then the following rejection-interceptor is called
    - once caught, another following fulfill-interceptor is called again (just like in a promise chain).

Read [the interceptor tests](./test/specs/interceptors.spec.js) for seeing all this in code.

## Handling Errors

the default behavior is to reject every response that returns with a status code that falls out of the range of 2xx and treat it as an error.

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    consolemodule.exports={A:{A:{"2":"J D E EC","164":"F A","260":"B"},B:{"1":"N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H","260":"C K L G M"},C:{"1":"9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"FC uB I w J D E GC HC","516":"0 1 2 3 4 5 6 7 8 F A B C K L G M N O x g y z"},D:{"1":"0 1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"I w J D E F A B C K L G M N O x g y z"},E:{"1":"J A B C LC OC 1B rB","2":"I w K L G KC 0B sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","1028":"D E F MC NC"},F:{"1":"0 1 2 3 4 5 6 7 8 9 C G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e sB","2":"F B SC TC UC VC rB CC WC"},G:{"1":"cC dC eC fC gC hC iC","2":"0B XC DC YC ZC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","1028":"E aC bC"},H:{"1":"rC"},I:{"1":"H wC xC","2":"uB I sC tC uC vC DC"},J:{"16":"D","1028":"A"},K:{"1":"h sB","16":"A B C rB CC"},L:{"1":"H"},M:{"1":"f"},N:{"164":"A","260":"B"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:7,C:"Do Not Track API"};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           nse will be available through the `error` object as explained in the [Handling Errors](#handling-errors) section.

## Config Defaults

You can specify config defaults that will be applied to every request.

### Global axios defaults

```js
axios.defaults.baseURL = 'https://api.example.com';

// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### Custom instance defaults

```js
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### Config order of precedence

Config will be merged with an order of precedence. The order is library defaults found in [lib/defaults.js](https://github.com/axios/axios/blob/master/lib/defaults/index.js#L28), then `defaults` property of the instance, and finally `config` argument for the request. The latter will take precedence over the former. Here's an example.

```js
// Create an instance using the config defaults provided by the library
// At this point the timeout config value is `0` as is the default for the library
const instance = axios.create();

// Override timeout default for the library
// Now all requests using this instance will wait 2.5 seconds before timing out
instance.defaults.timeout = 2500;

// Override timeout for this request as it's known to take a long time
instance.get('/longRequest', {
  timeout: 5000
});
```

## Interceptors

You can intercept requests or responses before they are handled by `then` or `catch`.

```js
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request emodule.exports={A:{A:{"132":"J D E F A B EC"},B:{"132":"C K L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"132":"0 1 2 3 4 5 6 7 8 9 FC uB I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB GC HC"},D:{"132":"8 9 I w AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","388":"0 1 2 3 4 5 6 7 J D E F A B C K L G M N O x g y z"},E:{"132":"I w J D E F A B C K L G KC 0B LC MC NC OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC"},F:{"132":"0 1 2 3 4 5 6 7 8 9 F B C G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e SC TC UC VC rB CC WC sB"},G:{"132":"E 0B XC DC YC ZC aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC"},H:{"132":"rC"},I:{"132":"uB I H sC tC uC vC DC wC xC"},J:{"132":"D A"},K:{"132":"A B C h rB CC sB"},L:{"132":"H"},M:{"132":"f"},N:{"132":"A B"},O:{"132":"yC"},P:{"132":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"132":"2B"},R:{"132":"CD"},S:{"132":"DD ED"}},B:6,C:"DNSSEC and DANE"};
                                                               ration, you can also define a `no_proxy` environment
  // variable as a comma-separated list of domains that should not be proxied.
  // Use `false` to disable proxies, ignoring environment variables.
  // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
  // supplies credentials.
  // This will set an `Proxy-Authorization` header, overwriting any existing
  // `Proxy-Authorization` custom headers you have set using `headers`.
  // If the proxy server uses HTTPS, then you must set the protocol to `https`.
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    // hostname: '127.0.0.1' // Takes precedence over 'host' if both are defined
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` specifies a cancel token that can be used to cancel the request
  // (see Cancellation section below for details)
  cancelToken: new CancelToken(function (cancel) {
  }),

  // an alternative way to cancel Axios requests using AbortController
  signal: new AbortController().signal,

  // `decompress` indicates whether or not the response body should be decompressed
  // automatically. If set to `true` will also remove the 'content-encoding' header
  // from the responses objects of all decompressed responses
  // - Node only (XHR cannot turn off decompression)
  decompress: true // default

  // `insecureHTTPParser` boolean.
  // Indicates where to use an insecure HTTP parser that accepts invalid HTTP headers.
  // This may allow interoperability with non-conformant HTTP implementations.
  // Using the insecure parser should be avoided.
  // see options https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_http_request_url_options_callback
  // see also https://nodejs.org/en/blog/vulnerability/february-2020-security-releases/#strict-http-header-parsing-none
  insecureHTTPParser: undefined // default

  // transitional options for backward compatibility that may be removed in the newer versions
  transitional: {
    // silent JSON parsing mode
    // `true`  - ignore JSON parsing errors and set response.data to null if parsing failed (old behaviour)
    // `false` - throw SyntaxError if JSON parsing failed (Note: responseType must be set to 'json')
    silentJSONParsing: true, // default value for the current Axios version

    // try to parse the response string as JSON even if `responseType` is not 'json'
    forcedJSONParsing: true,

    // throw ETIMEDOUT error instead of generic ECONNABORTED on request timeouts
    clarifymodule.exports={A:{A:{"1":"B","16":"EC","129":"F A","130":"J D E"},B:{"1":"C K L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"1":"0 1 2 3 4 5 6 7 8 9 FC uB I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB GC HC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC"},E:{"1":"I w J D E F A B C K L G 0B LC MC NC OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","16":"KC"},F:{"1":"0 1 2 3 4 5 6 7 8 9 B C G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e SC TC UC VC rB CC WC sB","16":"F"},G:{"1":"E XC DC YC ZC aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","16":"0B"},H:{"1":"rC"},I:{"1":"uB I H uC vC DC wC xC","16":"sC tC"},J:{"1":"D A"},K:{"1":"A B C h rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"1":"B","129":"A"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:1,C:"EventTarget.dispatchEvent"};
                                        plies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  // Please note that only HTTP Basic auth is configurable through this parameter.
  // For Bearer tokens and such, use `Authorization` custom headers instead.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` indicates the type of data that the server will respond with
  // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
  //   browser only: 'blob'
  responseType: 'json', // default

  // `responseEncoding` indicates encoding to use for decoding responses (Node.js only)
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default

  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

  // `onUploadProgress` allows handling of progress events for uploads
  // browser & node.js
  onUploadProgress: function ({loaded, total, progress, bytes, estimated, rate, upload = true}) {
    // Do whatever you want with the Axios progress event
  },

  // `onDownloadProgress` allows handling of progress events for downloads
  // browser & node.js
  onDownloadProgress: function ({loaded, total, progress, bytes, estimated, rate, download = true}) {
    // Do whatever you want with the Axios progress event
  },

  // `maxContentLength` defines the max size of the http response content in bytes allowed in node.js
  maxContentLength: 2000,

  // `maxBodyLength` (Node only option) defines the max size of the http request content in bytes allowed
  maxBodyLength: 2000,

  // `validateStatus` defines whether to resolve or reject the promise for a given
  // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
  // or `undefined`), the promise will be resolved; otherwise, the promise will be
  // rejected.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  maxRedirects: 21, // default

  // `beforeRedirect` defines a function that will be called before redirect.
  // Use this to adjust the request options upon redirecting,
  // to inspect the latest response headers,
  // omodule.exports={A:{A:{"2":"J D E F A B EC"},B:{"1":"P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H","2":"C K L G M N O"},C:{"1":"k l m n o p q r s t u v f H yB zB","2":"0 1 2 3 4 5 6 7 8 9 FC uB I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB GC HC","194":"UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P","1218":"Q R xB S T U V W X Y Z a b c d e i j"},D:{"1":"EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"0 1 2 3 4 5 6 7 8 I w J D E F A B C K L G M N O x g y z","322":"9 AB BB CB DB"},E:{"1":"4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I w J D E F A B C K L G KC 0B LC MC NC OC 1B rB sB 2B PC QC 3B"},F:{"1":"1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"F B C G M N O SC TC UC VC rB CC WC sB","578":"0 x g y z"},G:{"1":"4B 5B 6B tB 7B 8B 9B AC BC","2":"E 0B XC DC YC ZC aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B"},H:{"2":"rC"},I:{"1":"H","2":"uB I sC tC uC vC DC wC xC"},J:{"2":"D A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"2":"A B"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"2":"DD ED"}},B:1,C:"Dialog element"};
                             

### Creating an instance

You can create a new instance of axios with a custom config.

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### Instance methods

The available instance methods are listed below. The specified config will be merged with the instance config.

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])

## Request Config

These are the available config options for making requests. Only the `url` is required. Requests will default to `GET` if `method` is not specified.

```js
{
  // `url` is the server URL that will be used for the request
  url: '/user',

  // `method` is the request method to be used when making the request
  method: 'get', // default

  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` allows changes to the request data before it is sent to the server
  // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
  // FormData or Stream
  // You may modify the headers object.
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: [function (data) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `headers` are custom headers to be sent
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  params: {
    ID: 12345
  },

  // `paramsSerializer` is an optional config in charge of serializing `params`
  paramsSerializer: {
    encode?: (param: string): string => { /* Do custom ops here and return transformed string */ }, // custom encoder function; sends Key/Values in an iterative fashion
    serialize?: (params: Record<string, any>, optmodule.exports={A:{A:{"1":"A B","2":"J D E F EC"},B:{"1":"C K L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"1":"CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"0 1 2 3 4 5 6 7 FC uB I w J D E F A B C K L G M N O x g y z GC HC","194":"8 9 AB BB"},D:{"1":"2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"0 1 I w J D E F A B C K L G M N O x g y z"},E:{"1":"C K L G rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I w J D E F A KC 0B LC MC NC OC 1B","260":"B"},F:{"1":"0 1 2 3 4 5 6 7 8 9 G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"F B C SC TC UC VC rB CC WC sB"},G:{"1":"gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"E 0B XC DC YC ZC aC bC cC dC eC fC"},H:{"2":"rC"},I:{"1":"H wC xC","2":"uB I sC tC uC vC DC"},J:{"2":"D A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"1":"A B"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:4,C:"Resource Timing"};
                                              registerTS;

 function registerTSX(hookOptions) {
  return addHook(".tsx", {transforms: ["imports", "typescript", "jsx"]}, hookOptions);
} exports.registerTSX = registerTSX;

 function registerTSLegacyModuleInterop(hookOptions) {
  return addHook(
    ".ts",
    {
      transforms: ["imports", "typescript"],
      enableLegacyTypeScriptModuleInterop: true,
    },
    hookOptions,
  );
} exports.registerTSLegacyModuleInterop = registerTSLegacyModuleInterop;

 function registerTSXLegacyModuleInterop(hookOptions) {
  return addHook(
    ".tsx",
    {
      transforms: ["imports", "typescript", "jsx"],
      enableLegacyTypeScriptModuleInterop: true,
    },
    hookOptions,
  );
} exports.registerTSXLegacyModuleInterop = registerTSXLegacyModuleInterop;

 function registerAll(hookOptions) {
  const reverts = [
    registerJS(hookOptions),
    registerJSX(hookOptions),
    registerTS(hookOptions),
    registerTSX(hookOptions),
  ];

  return () => {
    for (const fn of reverts) {
      fn();
    }
  };
} exports.registerAll = registerAll;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <?php

/*
 Copyright (c) 2009 hamcrest.org
 */

class GlobalFunctionFile extends FactoryFile
{
    /**
     * @var string containing function definitions
     */
    private $functions;

    public function __construct($file)
    {
        parent::__construct($file, '    ');
        $this->functions = '';
    }

    public function addCall(FactoryCall $call)
    {
        $this->functions .= "\n" . $this->generateFactoryCall($call);
    }

    public function build()
    {
        $this->addFileHeader();
        $this->addPart('functions_imports');
        $this->addPart('functions_header');
        $this->addCode($this->functions);
        $this->addPart('functions_footer');
    }

    public function generateFactoryCall(FactoryCall $call)
    {
        $code = "if (!function_exists('{$call->getName()}')) {\n";
        $code.= parent::generateFactoryCall($call);
        $code.= "}\n";

        return $code;
    }
}
                                                                                              ions);
}

export function registerTSX(hookOptions) {
  return addHook(".tsx", {transforms: ["imports", "typescript", "jsx"]}, hookOptions);
}

export function registerTSLegacyModuleInterop(hookOptions) {
  return addHook(
    ".ts",
    {
      transforms: ["imports", "typescript"],
      enableLegacyTypeScriptModuleInterop: true,
    },
    hookOptions,
  );
}

export function registerTSXLegacyModuleInterop(hookOptions) {
  return addHook(
    ".tsx",
    {
      transforms: ["imports", "typescript", "jsx"],
      enableLegacyTypeScriptModuleInterop: true,
    },
    hookOptions,
  );
}

export function registerAll(hookOptions) {
  const reverts = [
    registerJS(hookOptions),
    registerJSX(hookOptions),
    registerTS(hookOptions),
    registerTSX(hookOptions),
  ];

  return () => {
    for (const fn of reverts) {
      fn();
    }
  };
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       <?php

/*
 Copyright (c) 2009 hamcrest.org
 */

class FactoryParameter
{
    /**
     * @var FactoryMethod
     */
    private $method;

    /**
     * @var ReflectionParameter
     */
    private $reflector;

    public function __construct(FactoryMethod $method, ReflectionParameter $reflector)
    {
        $this->method = $method;
        $this->reflector = $reflector;
    }

    /**
     * Compute the declaration code.
     *
     * @return string
     */
    public function getDeclaration()
    {
        $code = $this->getTypeCode() . $this->getInvocation();

        if ($this->reflector->isOptional()) {
            $default = $this->reflector->getDefaultValue();
            if (is_null($default)) {
                $default = 'null';
            } elseif (is_bool($default)) {
                $default = $default ? 'true' : 'false';
            } elseif (is_string($default)) {
                $default = "'" . $default . "'";
            } elseif (is_numeric($default)) {
                $default = strval($default);
            } elseif (is_array($default)) {
                $default = 'array()';
            } else {
                echo 'Warning: unknown default type for ' . $this->getMethod()->getFullName() . "\n";
                var_dump($default);
                $default = 'null';
            }
            $code .= ' = ' . $default;
        }
        return $code;
    }

    /**
     * Compute the type code for the paramater.
     *
     * @return string
     */
    private function getTypeCode()
    {
        // Handle PHP 5 separately
        if (PHP_VERSION_ID < 70000) {
            if ($this->reflector->isArray()) {
                return 'array';
            }

            $class = $this->reflector->getClass();

            return $class ? sprintf('\\%s ', $class->getName()) : '';
        }

        if (!$this->reflector->hasType()) {
            return '';
        }

        $type = $this->reflector->getType();
        $name = self::getQualifiedName($type);

        // PHP 7.1+ supports nullable types via a leading question mark
        return (PHP_VERSION_ID >= 70100 && $type->allowsNull()) ? sprintf('?%s ', $name) : sprintf('%s ', $name);
    }

    /**
     * Compute qualified name for the given type.
     *
     * This function knows how to prefix class names with a leading slash and
     * also how to handle PHP 8's union types.
     *
     * @param ReflectionType $type
     *
     * @return string
     */
    private static function getQualifiedName(ReflectionType $type)
    {
        // PHP 8 union types can be recursively processed
        if ($type instanceof ReflectionUnionType) {
            return implode('|', array_map(function (ReflectionType $type) {
                // The "self::" call within a Closure is fine here because this
                // code will only ever be executed on PHP 7.0+
                return self::getQualifiedName($type);
            }, $type->getTypes()));
        }

        // PHP 7.0 doesn't have named types, but 7.1+ does
        $name = $type instanceof ReflectionNamedType ? $type->getName() : (string) $type;

        return $type->isBuiltin() ? $name : sprintf('\\%s', $name);
    }

    /**
     * Compute the invocation code.
     *
     * @return string
     */
    public function getInvocation()
    {
        return sprintf('$%s', $this->reflector->getName());
    }

    /**
     * Compute the method name.
     *
     * @return string
     */
    public function getMethod()
    {
        return $this->method;
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             INDX( 	 %           (   �  �       e                     *�    p `     )�    @�($$u� �=�U����G$u�@�($$u�h      c               F a c t o r y C a l l . p h p +�    x b     )�    @�($$u� �=�U����G$u�N�($$u�       j               F a c t o r y C l a s s . p h p       ,�    p `     )�    

,$$u� �=�U����G$u�1,$$u�       �               F a c t o r y F i l e . p h p -�    � j     )�    1,$$u� �=�U����G$u�1,$$u�       �               F a c t o r y G e n  r a t o r . p h p       .�    x d     )�    ��2$$u� �=�U����G$u��3$$u�                       F a c t o r y M e t h o d . p h p     /�    � j     )�    �3$$u� �=�U���G$u��43$$u�       �               F a c t o r y P a r a m e t e r . p h p       0�    � n     )�    �43$$u� �=�U���G$u��43$$u�       �               G l o b a l F u n c t i o n F i l e . p h p   1�    ` L     )�    �A6$$u��p;$$u��C�G$u�t�{��                        p a r t s     9�    ` P    )�    @�<$$u� �=�U��C�G$u�@�<$$u�       ;               r u n . p h p :�    � j     )�    �g?$$u� �=�U��C�G$u��g?$$u�                      S t a t i c M e t h o d F i l e . p h p                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               import type { InferCustomEventPayload } from './customEvent'

export type ModuleNamespace = Record<string, any> & {
  [Symbol.toStringTag]: 'Module'
}

export interface ViteHotContext {
  readonly data: any

  accept(): void
  accept(cb: (mod: ModuleNamespace | undefined) => void): void
  accept(dep: string, cb: (mod: ModuleNamespace | undefined) => void): void
  accept(
    deps: readonly string[],
    cb: (mods: Array<ModuleNamespace | undefined>) => void,
  ): void

  acceptExports(
    exportNames: string | readonly string[],
    cb?: (mod: ModuleNamespace | undefined) => void,
  ): void

  dispose(cb: (data: any) => void): void
  prune(cb: (data: any) => void): void
  invalidate(message?: string): void

  on<T extends string>(
    event: T,
    cb: (payload: InferCustomEventPayload<T>) => void,
  ): void
  send<T extends string>(event: T, data?: InferCustomEventPayload<T>): void
}
                                                                                                                             s`, `./a.ts`, ... from `./a`
    for (let ext of extensions){
        let full = `${file}${ext}`;
        if (_fs.default.existsSync(full) && _fs.default.statSync(full).isFile()) {
            return full;
        }
    }
    // Try to find `./a/index.js` from `./a`
    for (let ext1 of extensions){
        let full1 = `${file}/index${ext1}`;
        if (_fs.default.existsSync(full1)) {
            return full1;
        }
    }
    return null;
}
function* _getModuleDependencies(filename, base, seen, ext = _path.default.extname(filename)) {
    // Try to find the file
    let absoluteFile = resolveWithExtension(_path.default.resolve(base, filename), jsExtensions.includes(ext) ? jsResolutionOrder : tsResolutionOrder);
    if (absoluteFile === null) return; // File doesn't exist
    // Prevent infinite loops when there are circular dependencies
    if (seen.has(absoluteFile)) return; // Already seen
    seen.add(absoluteFile);
    // Mark the file as a dependency
    yield absoluteFile;
    // Resolve new base for new imports/requires
    base = _path.default.dirname(absoluteFile);
    ext = _path.default.extname(absoluteFile);
    let contents = _fs.default.readFileSync(absoluteFile, "utf-8");
    // Find imports/requires
    for (let match of [
        ...contents.matchAll(/import[\s\S]*?['"](.{3,}?)['"]/gi),
        ...contents.matchAll(/import[\s\S]*from[\s\S]*?['"](.{3,}?)['"]/gi),
        ...contents.matchAll(/require\(['"`](.+)['"`]\)/gi)
    ]){
        // Bail out if it's not a relative file
        if (!match[1].startsWith(".")) continue;
        yield* _getModuleDependencies(match[1], base, seen, ext);
    }
}
function getModuleDependencies(absoluteFilePath) {
    if (absoluteFilePath === null) return new Set();
    return new Set(_getModuleDependencies(absoluteFilePath, _path.default.dirname(absoluteFilePath), new Set()));
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     export type HMRPayload =
  | ConnectedPayload
  | UpdatePayload
  | FullReloadPayload
  | CustomPayload
  | ErrorPayload
  | PrunePayload

export interface ConnectedPayload {
  type: 'connected'
}

export interface UpdatePayload {
  type: 'update'
  updates: Update[]
}

export interface Update {
  type: 'js-update' | 'css-update'
  path: string
  acceptedPath: string
  timestamp: number
  /**
   * @experimental internal
   */
  explicitImportRequired?: boolean | undefined
}

export interface PrunePayload {
  type: 'prune'
  paths: string[]
}

export interface FullReloadPayload {
  type: 'full-reload'
  path?: string
}

export interface CustomPayload {
  type: 'custom'
  event: string
  data?: any
}

export interface ErrorPayload {
  type: 'error'
  err: {
    [name: string]: any
    message: string
    stack: string
    id?: string
    frame?: string
    plugin?: string
    pluginCode?: string
    loc?: {
      file?: string
      line: number
      column: number
    }
  }
}
                                 G M N O x g y z SC TC UC VC rB CC WC sB"},G:{"2":"E 0B XC DC YC ZC aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC"},H:{"2":"rC"},I:{"1":"H","2":"uB I sC tC uC vC DC wC xC"},J:{"2":"D A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"2":"f"},N:{"2":"A B"},O:{"1":"yC"},P:{"1":"g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD","2":"I"},Q:{"1":"2B"},R:{"1":"CD"},S:{"2":"DD ED"}},B:6,C:"Client Hints: DPR, Width, Viewport-Width"};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <?php

/*
 Copyright (c) 2009 hamcrest.org
 */

/**
 * Controls the process of extracting @factory doctags
 * and generating factory method files.
 *
 * Uses File_Iterator to scan for PHP files.
 */
class FactoryGenerator
{
    /**
     * Path to the Hamcrest PHP files to process.
     *
     * @var string
     */
    private $path;

    /**
     * @var array of FactoryFile
     */
    private $factoryFiles;

    public function __construct($path)
    {
        $this->path = $path;
        $this->factoryFiles = array();
    }

    public function addFactoryFile(FactoryFile $factoryFile)
    {
        $this->factoryFiles[] = $factoryFile;
    }

    public function generate()
    {
        $classes = $this->getClassesWithFactoryMethods();
        foreach ($classes as $class) {
            foreach ($class->getMethods() as $method) {
                foreach ($method->getCalls() as $call) {
                    foreach ($this->factoryFiles as $file) {
                        $file->addCall($call);
                    }
                }
            }
        }
    }

    public function write()
    {
        foreach ($this->factoryFiles as $file) {
            $file->build();
            $file->write();
        }
    }

    public function getClassesWithFactoryMethods()
    {
        $classes = array();
        $files = $this->getSortedFiles();
        foreach ($files as $file) {
            $class = $this->getFactoryClass($file);
            if ($class !== null) {
                $classes[] = $class;
            }
        }

        return $classes;
    }

    public function getSortedFiles()
    {
        $iter = $this->getFileIterator();
        $files = array();
        foreach ($iter as $file) {
            $files[] = $file;
        }
        sort($files, SORT_STRING);

        return $files;
    }

    private function getFileIterator()
    {
        $factoryClass = class_exists('File_Iterator_Factory') ? 'File_Iterator_Factory' : 'SebastianBergmann\FileIterator\Factory';

        $factory = new $factoryClass();

        return $factory->getFileIterator($this->path, '.php');
    }

    public function getFactoryClass($file)
    {
        $name = $this->getFactoryClassName($file);
        if ($name !== null) {
            require_once $file;

            if (class_exists($name)) {
                $class = new FactoryClass(substr($file, strpos($file, 'Hamcrest/')), new ReflectionClass($name));
                if ($class->isFactory()) {
                    return $class;
                }
            }
        }

        return null;
    }

    public function getFactoryClassName($file)
    {
        $content = file_get_contents($file);
        if (preg_match('/namespace\s+(.+);/', $content, $namespace)
            && preg_match('/\n\s*class\s+(\w+)\s+extends\b/', $content, $className)
            && preg_match('/@factory\b/', $content)
        ) {
            return $namespace[1] . '\\' . $className[1];
        }

        return null;
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            module.exports={A:{A:{"2":"J D E F A B EC"},B:{"1":"P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H","2":"C K L G M N O"},C:{"1":"iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"0 1 2 3 4 5 6 7 8 9 FC uB I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB GC HC"},D:{"1":"dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB","194":"VB WB XB YB ZB vB aB wB bB cB"},E:{"1":"L G 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I w J D E F A B C KC 0B LC MC NC OC 1B rB sB","66":"K"},F:{"1":"TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"0 1 2 3 4 5 6 7 8 9 F B C G M N O x g y z AB BB CB DB EB FB GB HB SC TC UC VC rB CC WC sB","194":"IB JB KB LB MB NB OB PB QB RB SB"},G:{"1":"nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"E 0B XC DC YC ZC aC bC cC dC eC fC gC hC iC jC kC lC mC"},H:{"2":"rC"},I:{"1":"H","2":"uB I sC tC uC vC DC wC xC"},J:{"2":"D A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"2":"A B"},O:{"1":"yC"},P:{"1":"g 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD","2":"I zC 0C 1C 2C"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"ED","2":"DD"}},B:5,C:"Resize Observer"};
                          gEnabled)(config, feature)).map((feature)=>features[feature]);
    return [
        config,
        ...experimentals,
        ...configs
    ];
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              module.exports={A:{A:{"2":"J D E F A B EC"},B:{"1":"P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H","2":"C K L G M N O"},C:{"1":"WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"0 1 2 3 4 5 6 7 8 9 FC uB I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB GC HC","194":"UB VB"},D:{"1":"OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB"},E:{"2":"I w J D E F A B C K KC 0B LC MC NC OC 1B rB sB","322":"L G 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC"},F:{"1":"BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"0 1 2 3 4 5 6 7 8 9 F B C G M N O x g y z AB SC TC UC VC rB CC WC sB"},G:{"2":"E 0B XC DC YC ZC aC bC cC dC eC fC gC hC iC jC kC lC mC","322":"nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC"},H:{"2":"rC"},I:{"1":"H","2":"uB I sC tC uC vC DC wC xC"},J:{"2":"D A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"2":"A B"},O:{"1":"yC"},P:{"1":"g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD","2":"I"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"ED","2":"DD"}},B:5,C:"requestIdleCallback"};
                                 n;
  }

  while (pos < _base.input.length) {
    const ch = _base.input.charCodeAt(pos);
    if (_identifier.IS_IDENTIFIER_CHAR[ch]) {
      pos++;
    } else if (ch === _charcodes.charCodes.backslash) {
      // \u
      pos += 2;
      if (_base.input.charCodeAt(pos) === _charcodes.charCodes.leftCurlyBrace) {
        while (pos < _base.input.length && _base.input.charCodeAt(pos) !== _charcodes.charCodes.rightCurlyBrace) {
          pos++;
        }
        pos++;
      }
    } else if (ch === _charcodes.charCodes.atSign && _base.input.charCodeAt(pos + 1) === _charcodes.charCodes.atSign) {
      pos += 2;
    } else {
      break;
    }
  }
  _base.state.pos = pos;
  _index.finishToken.call(void 0, _types.TokenType.name);
} exports.default = readWord;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <?php

namespace Faker\Provider\kk_KZ;

class Address extends \Faker\Provider\Address
{
    protected static $citySuffix = ['қаласы'];

    protected static $regionSuffix = ['облысы'];
    protected static $streetSuffix = [
        'көшесі', 'даңғылы',
    ];

    protected static $buildingNumber = ['%##'];
    protected static $postcode = ['0#####'];
    // TODO list all country names in the world
    protected static $country = [
        'Қазақстан',
        'Ресей',
    ];

    protected static $region = [
        'Алматы',
        'Ақтау',
        'Ақтөбе',
        'Астана',
        'Атырау',
        'Байқоңыр',
        'Қарағанды',
        'Көкшетау',
        'Қостанай',
        'Қызылорда',
        'Маңғыстау',
        'Павлодар',
        'Петропавл',
        'Талдықорған',
        'Тараз',
        'Орал',
        'Өскемен',
        'Шымкент',
    ];

    protected static $city = [
        'Алматы',
        'Ақтау',
        'Ақтөбе',
        'Астана',
        'Атырау',
        'Байқоңыр',
        'Қарағанды',
        'Көкшетау',
        'Қостанай',
        'Қызылорда',
        'Маңғыстау',
        'Павлодар',
        'Петропавл',
        'Талдықорған',
        'Тараз',
        'Орал',
        'Өскемен',
        'Шымкент',
    ];

    protected static $street = [
        'Абай',
        'Гоголь',
        'Кенесары',
        'Бейбітшілік',
        'Достық',
        'Бұқар жырау',
    ];

    protected static $addressFormats = [
        '{{postcode}}, {{region}} {{regionSuffix}}, {{city}} {{citySuffix}}, {{street}} {{streetSuffix}}, {{buildingNumber}}',
    ];

    protected static $streetAddressFormats = [
        '{{street}} {{streetSuffix}}, {{buildingNumber}}',
    ];

    public static function buildingNumber()
    {
        return static::numerify(static::randomElement(static::$buildingNumber));
    }

    public static function regionSuffix()
    {
        return static::randomElement(static::$regionSuffix);
    }

    public static function region()
    {
        return static::randomElement(static::$region);
    }

    public function city()
    {
        return static::randomElement(static::$city);
    }

    public static function street()
    {
        return static::randomElement(static::$street);
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 INDX( 	 3J           (   �  �                            ��    h X     ��    F���v� �&m��$p�.v�F���v� @      �:               A d d r e s s . p h p ��    h T     ��    F���v� �&m��$p�.v�I���v�       F              	 C o l o r . p h p     ��    h X     ��    �?��v� �&m��$p�.v��?��v�       �               C o m p a n y . p h p ��    p Z     ��    �f��v� �&m��$p�.v��f��v�       �               D a t e T i m e . p h p       ��    p Z     ��    �b��v� �&m��$p�.v�����v��      �               I n t e r n e t . p h p       ��    h X     ��    ����v� �&m��$p�.v�����v�       �               P a y m e n t . p h p ��    h V     ��    �6��v� �&m��$p�.v��]��v� 0      p'              
 P e r s o n . p h p   ��    p `     ��    �]��v� �&m��$p�.v��]��v�      
               P h o n e N u m b e r . p h p ��    h R     ��    ���v� �&m��$p�.v�ӈ�v�       ��              T e x t . p h p                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <?php

namespace Faker\Provider\ka_GE;

class Payment extends \Faker\Provider\Payment
{
    /**
     * @see list of Georgian banks (2015-12-26), source: https://www.nbg.gov.ge/index.php?m=403
     */
    protected static $banks = [
        'ბანკი რესპუბლიკა',
        'თიბისი ბანკი',
        'საქართველოს ბანკი',
        'ლიბერთი ბანკი',
        'ბაზისბანკი',
        'ვითიბი ბანკი ჯორჯია',
        'ბანკი ქართუ',
        'პროკრედიტ ბანკი',
        'სილქ როუდ ბანკი ',
        'კაპიტალ ბანკი ',
        'აზერბაიჯანის საერთაშორისო ბანკი - საქართველო ',
        'ზირაათ ბანკის თბილისის ფილიალი ',
        'კავკასიის განვითარების ბანკი - საქართველო',
        'იშ ბანკი საქართველო',
        'პროგრეს ბანკი',
        'კორ სტანდარტ ბანკი',
        'ხალიკ ბანკი საქართველო ',
        'პაშა ბანკი საქართველო',
        'ფინკა ბანკი საქართველო',
    ];

    /**
     * @example 'თიბისი ბანკი'
     */
    public static function bank()
    {
        return static::randomElement(static::$banks);
    }

    /**
     * International Bank Account Number (IBAN)
     *
     * @see http://en.wikipedia.org/wiki/International_Bank_Account_Number
     *
     * @param string $prefix      for generating bank account number of a specific bank
     * @param string $countryCode ISO 3166-1 alpha-2 country code
     * @param int    $length      total length without country code and 2 check digits
     *
     * @return string
     */
    public static function bankAccountNumber($prefix = '', $countryCode = 'GE', $length = null)
    {
        return static::iban($countryCode, $prefix, $length);
    }
}
                                                                                                                                                                                                                                                                                             .split('\n')
                    .slice(1, -1) // Remove selector and closing '}'
                    .map((line) => line.trim())
                    .map((x) => `      ${x}`) // Re-indent
                    .join('\n')
                )
                .join('\n\n')

              messages.push(
                `  Use \`${candidate.replace('[', `[${type}:`)}\` for \`${rules.trim()}\``
              )
              break
            }
          }

          log.warn([
            `The class \`${candidate}\` is ambiguous and matches multiple utilities.`,
            ...messages,
            `If this is content and not a class, replace it with \`${candidate
              .replace('[', '&lsqb;')
              .replace(']', '&rsqb;')}\` to silence this warning.`,
          ])
          continue
        }
      }

      matches = matches.map((list) => list.filter((match) => isParsableNode(match[1])))
    }

    matches = matches.flat()
    matches = Array.from(recordCandidates(matches, classCandidate))
    matches = applyPrefix(matches, context)

    if (important) {
      matches = applyImportant(matches, classCandidate)
    }

    for (let variant of variants) {
      matches = applyVariant(variant, matches, context)
    }

    for (let match of matches) {
      match[1].raws.tailwind = { ...match[1].raws.tailwind, candidate }

      // Apply final format selector
      match = applyFinalFormat(match, { context, candidate, original })

      // Skip rules with invalid selectors
      // This will cause the c<?php

namespace Faker\Provider\ka_GE;

class DateTime extends \Faker\Provider\DateTime
{
    public static function dayOfWeek($max = 'now')
    {
        $map = [
            'Sunday' => 'კვირა',
            'Monday' => 'ორშაბათი',
            'Tuesday' => 'სამშაბათი',
            'Wednesday' => 'ოთხშაბათი',
            'Thursday' => 'ხუთშაბათი',
            'Friday' => 'პარასკევი',
            'Saturday' => 'შაბათი',
        ];
        $week = static::dateTime($max)->format('l');

        return $map[$week] ?? $week;
    }

    public static function monthName($max = 'now')
    {
        $map = [
            'January' => 'იანვარი',
            'February' => 'თებერვალი',
            'March' => 'მარტი',
            'April' => 'აპრილი',
            'May' => 'მაისი',
            'June' => 'ივნისი',
            'July' => 'ივლისი',
            'August' => 'აგვისტო',
            'September' => 'სექტემბერი',
            'October' => 'ოქტომბერი',
            'November' => 'ნოემბერი',
            'December' => 'დეკემბერი',
        ];
        $month = static::dateTime($max)->format('F');

        return $map[$month] ?? $month;
    }
}
                                                                                                            se positives
  // function sortAgainst(toSort, against) {
  //   return toSort.slice().sort((a, z) => {
  //     return bigSign(against.get(a)[0] - against.get(z)[0])
  //   })
  // }
  // let sorted = sortAgainst(variants, context.variantMap)
  // if (sorted.toString() !== variants.toString()) {
  //   let corrected = sorted.reverse().concat(classCandidate).join(':')
  //   throw new Error(`Class ${candidate} should be written as ${corrected}`)
  // }

  for (let matchedPlugins of resolveMatchedPlugins(classCandidate, context)) {
    let matches = []
    let typesByMatches = new Map()

    let [plugins, modifier] = matchedPlugins
    let isOnlyPlugin = plugins.length === 1

    for (let [sort, plugin] of plugins) {
      let matchesPerPlugin = []

      if (typeof plugin === 'function') {
        for (let ruleSet of [].concat(plugin(modifier, { isOnlyPlugin }))) {
          let [rules, options] = parseRules(ruleSet, context.postCssNodeCache)
          for (let rule of rules) {
            matchesPerPlugin.push([{ ...sort, options: { ...sort.options, ...options } }, rule])
          }
        }
      }
      // Only process static plugins on exact matches
      else if (modifier === 'DEFAULT' || modifier === '-DEFAULT') {
        let ruleSet = plugin
        let [rules, options] = parseRules(ruleSet, context.postCssNodeCache)
        for (let rule of rules) {
          matchesPerPlugin.push([{ ...sort, options: { ...sort.options, ...options } }, rule])
        }
      }

      if (matchesPerPlugin.length > 0) {
        let matchingTypes = Array.from(
          getMatchingTypes(
            sort.options?.types ?? [],
            modifier,
            sort.options ?? {},
            context.tailwindConfig
          )
        ).map(([_, type]) => type)

        if (matchingTypes.length > 0) {
          typesByMatches.set(matchesPerPlugin, matchingTypes)
        }

        matches.push(matchesPerPlugin)
      }
    }

    if (isArbitraryValue(modifier)) {
      if (matches.length > 1) {
        // Partition plugins in 2 categories so that we can start searching in the plugins that
        // don't have `any` as a type first.
        let [withAny, withoutAny] = matches.reduce(
          (group, plugin) => {
            let hasAnyType = plugin.some(([{ options }]) =>
              options.types.some(({ type }) => type === 'any')
            )

            if (hasAnyType) {
              group[0].push(plugin)
            } else {
              group[1].push(plugin)
            }
            return group
          },
     <?php

namespace Faker\Provider\ka_GE;

class Company extends \Faker\Provider\Company
{
    protected static $companyPrefixes = [
        'შპს', 'შპს', 'შპს', 'სს', 'სს', 'სს', 'კს', 'სს კორპორაცია', 'იმ', 'სპს', 'კოოპერატივი',
    ];

    protected static $companyNameSuffixes = [
        'საბჭო', 'ექსპედიცია', 'პრომი', 'კომპლექსი', 'ავტო', 'ლიზინგი', 'თრასთი', 'ეიდი', 'პლუსი',
        'ლაბი', 'კავშირი', ' და კომპანია',
    ];

    protected static $companyElements = [
        'ცემ', 'გეო', 'ქარ', 'ქიმ', 'ლიფტ', 'ტელე', 'რადიო', 'ტრანს', 'ალმას', 'მეტრო',
        'მოტორ', 'ტექ', 'სანტექ', 'ელექტრო', 'რეაქტო', 'ტექსტილ', 'კაბელ', 'მავალ', 'ტელ',
        'ტექნო',
    ];

    protected static $companyNameFormats = [
        '{{companyPrefix}} {{companyNameElement}}{{companyNameSuffix}}',
        '{{companyPrefix}} {{companyNameElement}}{{companyNameElement}}{{companyNameSuffix}}',
        '{{companyPrefix}} {{companyNameElement}}{{companyNameElement}}{{companyNameElement}}{{companyNameSuffix}}',
        '{{companyPrefix}} {{companyNameElement}}{{companyNameElement}}{{companyNameElement}}{{companyNameSuffix}}',
    ];

    /**
     * @example 'იმ ელექტროალმასგეოსაბჭო'
     */
    public function company()
    {
        $format = static::randomElement(static::$companyNameFormats);

        return $this->generator->parse($format);
    }

    public static function companyPrefix()
    {
        return static::randomElement(static::$companyPrefixes);
    }

    public static function companyNameElement()
    {
        return static::randomElement(static::$companyElements);
    }

    public static function companyNameSuffix()
    {
        return static::randomElement(static::$companyNameSuffixes);
    }
}
                                                                                                                                                                                                                                                                                                                                                                          andidate, context) {
  let [, property, value] = classCandidate.match(/^\[([a-zA-Z0-9-_]+):(\S+)\]$/) ?? []

  if (value === undefined) {
    return null
  }

  if (!isValidPropName(property)) {
    return null
  }

  if (!isValidArbitraryValue(value)) {
    return null
  }

  let normalized = normalize(value)

  if (!isParsableCssValue(property, normalized)) {
    return null
  }

  let sort = context.offsets.arbitraryProperty()

  return [
    [
      { sort, layer: 'utilities' },
      () => ({
        [asClass(classCandidate)]: {
          [property]: normalized,
        },
      }),
    ],
  ]
}

function* resolveMatchedPlugins(classCandidate, context) {
  if (context.candidateRuleMap.has(classCandidate)) {
    yield [context.candidateRuleMap.get(classCandidate), 'DEFAULT']
  }

  yield* (function* (arbitraryPropertyRule) {
    if (arbitraryPropertyRule !== null) {
      yield [arbitraryPropertyRule, 'DEFAULT']
    }
  })(extractArbitraryProperty(classCandidate, context))

  let candidatePrefix = classCandidate
  let negative = false

  const twConfigPrefix = context.tailwindConfig.prefix

  const twConfigPrefixLen = twConfigPrefix.length

  const hasMatchingPrefix =
    candidatePrefix.startsWith(twConfigPrefix) || candidatePrefix.startsWith(`-${twConfigPrefix}`)

  if (candidatePrefix[twConfigPrefixLen] === '-' && hasMatchingPrefix) {
    negative = true
    candidatePrefix = twConfigPrefix + candidatePrefix.slice(twConfigPrefixLen + 1)
  }

  if (negative && context.candidateRuleMap.has(candidatePrefix)<?php

namespace Faker\Provider\ka_GE;

class Color extends \Faker\Provider\Color
{
    protected static $safeColorNames = [
        'ალისფერი', 'ვარდისფერი', 'თეთრი', 'იასამნისფერი', 'ლურჯი', 'მუქი ლურჯი', 'მწვანე', 'ნარინჯისფერი',
        'ნაცრისფერი', 'სალათისფერი', 'ღია მწვანე', 'ყავისფერი', 'ყვითელი', 'ცისფერი', 'წითელი',
    ];

    protected static $allColorNames = [
        'ალისფერი', 'ვარდისფერი', 'თეთრი', 'იასამნისფერი', 'ლურჯი', 'მუქი ლურჯი', 'მწვანე', 'ნარინჯისფერი',
        'ნაცრისფერი', 'სალათისფერი', 'ღია მწვანე', 'ყავისფერი', 'ყვითელი', 'ცისფერი', 'წითელი',
    ];
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                          99":0.00874,"100":0,"101":0,"102":0,"103":0.0568,"104":0,"105":0.14418,"106":0.04369,"107":0.0568,"108":0.0568,"109":0.61603,"110":5.66659,"111":8.86033,"112":0,"113":0,"114":0},F:{"9":0,"11":0,"12":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"60":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"9.5-9.6":0,"10.0-10.1":0,"10.5":0,"10.6":0,"11.1":0,"11.5":0,"11.6":0,"12.1":0},B:{"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"79":0,"80":0,"81":0,"83":0,"84":0.00437,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0,"96":0,"97":0,"98":0,"99":0,"100":0,"101":0,"102":0,"103":0,"104":0,"105":0,"106":0,"107":0,"108":0.02185,"109":0.00874,"110":0.53739,"111":0.35826},E:{"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0.00437,"14":0.10486,"15":0.02185,_:"0","3.1":0,"3.2":0,"5.1":0,"6.1":0,"7.1":0,"9.1":0,"10.1":0,"11.1":0,"12.1":0.01311,"13.1":0.03495,"14.1":0.02621,"15.1":0.00437,"15.2-15.3":0,"15.4":0.00437,"15.5":0.06554,"15.6":0.23593,"16.0":0.03495,"16.1":0.00437,"16.2":0.10923,"16.3":0.35826,"16.4":0,"16.5":0},G:{"8":0,"3.2":0,"4.0-4.1":0,"4.2-4.3":0,"5.0-5.1":0,"6.0-6.1":0,"7.0-7.1":0,"8.1-8.4":0,"9.0-9.2":0,"9.3":0.01539,"10.0-10.2":0,"10.3":0.02154,"11.0-11.2":0,"11.3-11.4":0,"12.0-12.1":0,"12.2-12.5":0.12311,"13.0-13.1":0.02462,"13.2":0,"13.3":0.01539,"13.4-13.7":0.01847,"14.0-14.4":0.68323,"14.5-14.8":1.69269,"15.0-15.1":0.86174,"15.2-15.3":0.43395,"15.4":0.29853,"15.5":1.0587,"15.6":2.4067,"16.0":2.24974,"16.1":5.24427,"16.2":4.72723,"16.3":9.90996,"16.4":0.05232,"16.5":0},P:{"4":0.03021,"20":3.35352,"5.0-5.4":0,"6.2-6.4":0,"7.2-7.4":0.07049,"8.2":0,"9.2":0.03021,"10.1":0.03021,"11.1-11.2":0.74523,"12.0":0.05035,"13.0":0.01007,"14.0":0.10071,"15.0":0.05035,"16.0":0.15106,"17.0":0.03021,"18.0":0.44311,"19.0":0.47332},I:{"0":0,"3":0,"4":0,"2.1":0,"2.2":0,"2.3":0,"4.1":0,"4.2-4.3":0,"4.4":0,"4.4.3-4.4.4":0.00874},K:{_:"0 10 11 12 11.1 11.5 12.1"},A:{"6":0,"7":0,"8":0,"9":0,"10":0.01311,"11":0.07427,"5.5":0},S:{"2.5":0,_:"3.0-3.1"},J:{"7":0,"10":0},N:{"10":0,"11":0},R:{_:"0"},M:{"0":0.18019},Q:{"13.1":0},O:{"0":0.21961},H:{"0<?php

namespace Faker\Provider\ja_JP;

class Internet extends \Faker\Provider\Internet
{
    protected static $userNameFormats = [
        '{{lastNameAscii}}.{{firstNameAscii}}',
        '{{firstNameAscii}}.{{lastNameAscii}}',
        '{{firstNameAscii}}##',
        '?{{lastNameAscii}}',
    ];

    protected static $safeEmailTld = [
        'org', 'com', 'net', 'jp', 'jp', 'jp',
    ];

    protected static $freeEmailDomain = [
        'gmail.com', 'yahoo.co.jp', 'hotmail.co.jp', 'mail.goo.ne.jp',
    ];

    protected static $tld = [
        'com', 'com', 'com', 'biz', 'info', 'net', 'org', 'jp', 'jp', 'jp',
    ];

    /**
     * {@link} http://dic.nicovideo.jp/a/%E6%97%A5%E6%9C%AC%E3%81%AE%E8%8B%97%E5%AD%97%28%E5%90%8D%E5%AD%97%29%E3%81%AE%E4%B8%80%E8%A6%A7
     */
    protected static $lastNameAscii = [
        'aota', 'aoyama', 'ishida', 'idaka', 'ito', 'uno', 'ekoda', 'ogaki',
        'kato', 'kanou', 'kijima', 'kimura', 'kiriyama', 'kudo', 'koizumi', 'kobayashi', 'kondo',
        'saito', 'sakamoto', 'sasaki', 'sato', 'sasada', 'suzuki', 'sugiyama',
        'takahashi', 'tanaka', 'tanabe', 'tsuda',
        'nakajima', 'nakamura', 'nagisa', 'nakatsugawa', 'nishinosono', 'nomura',
        'harada', 'hamada', 'hirokawa', 'fujimoto',
        'matsumoto', 'miyake', 'miyazawa', 'murayama',
        'yamagishi', 'yamaguchi', 'yamada', 'yamamoto', 'yoshida', 'yoshimoto',
        'wakamatsu', 'watanabe',
    ];

    /**
     * {@link} http://dic.nicovideo.jp/a/%E6%97%A5%E6%9C%AC%E4%BA%BA%E3%81%AE%E5%90%8D%E5%89%8D%E4%B8%80%E8%A6%A7
     * {@link} http://www.meijiyasuda.co.jp/enjoy/ranking/
     */
    protected static $firstNameAscii = [
        'akira', 'atsushi', 'osamu',
        'akemi', 'asuka',
        'kazuya', 'kyosuke', 'kenichi',
        'kaori', 'kana', 'kumiko',
        'shuhei', 'shota', 'jun', 'soutaro',
        'sayuri', 'satomi',
        'taichi', 'taro', 'takuma', 'tsubasa', 'tomoya',
        'chiyo',
        'naoki', 'naoto',
        'naoko', 'nanami',
        'hideki', 'hiroshi',
        'hanako', 'haruka',
        'manabu', 'mitsuru', 'minoru',
        'maaya', 'mai', 'mikako', 'miki', 'momoko',
        'yuki', 'yuta', 'yasuhiro', 'youichi', 'yosuke',
        'yui', 'yumiko', 'yoko',
        'ryosuke', 'ryohei', 'rei',
        'rika',
    ];

    public static function lastNameAscii()
    {
        return static::randomElement(static::$lastNameAscii);
    }

    public static function firstNameAscii()
    {
        return static::randomElement(static::$firstNameAscii);
    }

    /**
     * @example 'suzuki.taro'
     */
    public function userName()
    {
        $format = static::randomElement(static::$userNameFormats);

        return static::bothify($this->generator->parse($format));
    }

    /**
     * @example 'yamada.jp'
     */
    public function domainName()
    {
        return static::randomElement(static::$lastNameAscii) . '.' . $this->tld();
    }
}
                                                                                                                                       ��I=��0.�O"M$�%)G��z:!���1�4#|4���v
��#���!!B%�(f?�Bd7B%\  9�8  �(
�
	
�	�g	�	�1
�
2

!�>+��\ ���Q "� �>0�3
4'P  	g��"";K  Yl8p�P  6� �������f���; "�
 �6	
'@,<'E'*'::;  @@PCH8Y:  	�.J*!�((a.+�5  ���R7� �/8R  6�	R ������' "��� �:'.)V2�
.42�T�&  	�"L""�!  J49p	��&  &�  ��� ���E "G��.vX �8��u�
(16�v�D  �"C"&"#?  wnq
�	D  8�  G��vX �����������( "p�� �:'��'=Q:;'=?N��nE'  	�((�!# vite ⚡

> Next Generation Frontend Tooling

- 💡 Instant Server Start
- ⚡️ Lightning Fast HMR
- 🛠️ Rich Features
- 📦 Optimized Build
- 🔩 Universal Plugin Interface
- 🔑 Fully Typed APIs

Vite (French word for "fast", pronounced `/vit/`) is a new breed of frontend build tool that significantly improves the frontend development experience. It consists of two major parts:

- A dev server that serves your source files over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), with [rich built-in features](https://vitejs.dev/guide/features.html) and astonishingly fast [Hot Module Replacement (HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement).

- A [build command](https://vitejs.dev/guide/build.html) that bundles your code with [Rollup](https://rollupjs.org), pre-configured to output highly optimized static assets for production.

In addition, Vite is highly extensible via its [Plugin API](https://vitejs.dev/guide/api-plugin.html) and [JavaScript API](https://vitejs.dev/guide/api-javascript.html) with full typing support.

[Read the Docs to Learn More](https://vitejs.dev).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               INDX( 	 j�           (   `  �       �                    �    X H     �    )��$u����$u��[�G$u�Q���{��                        b i n �    h X     �    �މ$u�7��n��[�G$u��މ$u�        �               c l i e n t . d . t s �    ` J     �    1ڋ$u�g\+$u����G$u����{��                        d i s t       '�    h T     �    }�+$u��Q��n����G$u���+$u�       �              	 i n d e x . c j s     (�    h V     �    ��+$u�� ϸn����G$u���+$u  �     Kv             
 L I C E N S E . m d   )�    p Z     �    �,$u�p"��n����G$u��,$u�        �               p a c k a g e . j s o n       *�    h T     �    �,$u��'ϸn����G$u��F,$u�       �              	 R E A D M E . m d     +�    ` L     �    �m,$u���-$u���G$u�L/��{��                        t y p e s                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    module.exports={A:{A:{"1":"A B","2":"J D E F EC"},B:{"1":"C K L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"1":"0 1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"FC uB GC HC","33":"B C K L G M N O x g y z","164":"I w J D E F A"},D:{"1":"1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"I w J D E F","33":"0 z","164":"O x g y","420":"A B C K L G M N"},E:{"1":"D E F A B C K L G MC NC OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I w KC 0B LC","33":"J"},F:{"1":"0 1 2 3 4 5 6 7 8 9 G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"F B C SC TC UC VC rB CC WC sB"},G:{"1":"E aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"0B XC DC YC","33":"ZC"},H:{"2":"rC"},I:{"1":"H wC xC","2":"uB I sC tC uC vC DC"},J:{"1":"A","2":"D"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"1":"A B"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:1,C:"requestAnimationFrame"};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             n")}
  leaveModule(module);
})();`;
  }

  process() {
    return false;
  }
} exports.default = ReactHotLoaderTransformer;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    module.exports={A:{A:{"1":"B","2":"J D E EC","132":"F A"},B:{"1":"C K L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"1":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB HC","2":"FC uB GC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC"},E:{"1":"w J D E F A B C K L G LC MC NC OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I KC 0B"},F:{"1":"0 1 2 3 4 5 6 7 8 9 C G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e WC sB","2":"F B SC TC UC VC rB CC"},G:{"1":"E XC DC ZC aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"0B","260":"YC"},H:{"1":"rC"},I:{"1":"uB I H sC tC uC vC DC wC xC"},J:{"1":"D A"},K:{"1":"C h sB","2":"A B rB CC"},L:{"1":"H"},M:{"1":"f"},N:{"1":"A B"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:4,C:"rem (root em) units"};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     module.exports={A:{A:{"2":"J D E F A B EC"},B:{"1":"O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H","2":"C K L G M","132":"N"},C:{"1":"7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"0 1 2 3 4 5 6 FC uB I w J D E F A B C K L G M N O x g y z GC HC"},D:{"1":"eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB","132":"RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB"},E:{"1":"F A B C K L G OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I w J D E KC 0B LC MC NC"},F:{"1":"TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"0 1 2 3 4 5 6 7 8 9 F B C G M N O x g y z AB BB CB DB SC TC UC VC rB CC WC sB","132":"EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB"},G:{"1":"cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"E 0B XC DC YC ZC aC bC"},H:{"2":"rC"},I:{"1":"H","2":"uB I sC tC uC vC DC wC xC"},J:{"2":"D A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"2":"A B"},O:{"1":"yC"},P:{"1":"g 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD","2":"I","132":"zC 0C 1C 2C"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:1,C:"relList (DOMTokenList)"};
                loader').leaveModule;
  if (!reactHotLoader) {
    return;
  }
${namesToRegister
  .map(
    ({variableName, uniqueLocalName}) =>
      `  reactHotLoader.register(${variableName}, "${uniqueLocalName}", ${JSON.stringify(
        this.filePath || "",
      )});`,
  )
  .join("\n")}
  leaveModule(module);
})();`;
  }

  process() {
    return false;
  }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             "use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/index.ts
var _path = require('path');
var _picocolors = require('picocolors'); var _picocolors2 = _interopRequireDefault(_picocolors);
var _picomatch = require('picomatch'); var _picomatch2 = _interopRequireDefault(_picomatch);
var _vite = require('vite');
function normalizePaths(root, path) {
  return (Array.isArray(path) ? path : [path]).map((path2) => _path.resolve.call(void 0, root, path2)).map(_vite.normalizePath);
}
var src_default = (paths, config = {}) => ({
  name: "vite-plugin-full-reload",
  apply: "serve",
  config: () => ({ server: { watch: { disableGlobbing: false } } }),
  configureServer({ watcher, ws, config: { logger } }) {
    const { root = process.cwd(), log = true, always = true, delay = 0 } = config;
    const files = normalizePaths(root, paths);
    const shouldReload = _picomatch2.default.call(void 0, files);
    const checkReload = (path) => {
      if (shouldReload(path)) {
        setTimeout(() => ws.send({ type: "full-reload", path: always ? "*" : path }), delay);
        if (log)
          logger.info(`${_picocolors2.default.green("page reload")} ${_picocolors2.default.dim(_path.relative.call(void 0, root, path))}`, { clear: true, timestamp: true });
      }
    };
    watcher.add(files);
    watcher.on("add", checkReload);
    watcher.on("change", checkReload);
  }
});



exports.default = src_default; exports.normalizePaths = normalizePaths;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            \n  }\n}\n\nAxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);\n\nutils.freezeMethods(AxiosHeaders.prototype);\nutils.freezeMethods(AxiosHeaders);\n\nexport default AxiosHeaders;\n","'use strict';\n\nimport utils from './../utils.js';\nimport defaults from '../defaults/index.js';\nimport AxiosHeaders from '../core/AxiosHeaders.js';\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Array|Function} fns A single function or Array of functions\n * @param {?Object} response The response object\n *\n * @returns {*} The resulting transformed data\n */\nexport default function transformData(fns, response) {\n  const config = this || defaults;\n  const context = response || config;\n  const headers = AxiosHeaders.from(context.headers);\n  let data = context.data;\n\n  utils.forEach(fns, function transform(fn) {\n    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);\n  });\n\n  headers.normalize();\n\n  return data;\n}\n","'use strict';\n\nexport default function isCancel(value) {\n  return !!(value && value.__CANCEL__);\n}\n","'use strict';\n\nimport AxiosError from '../core/AxiosError.js';\nimport utils from '../utils.js';\n\n/**\n * A `CanceledError` is an object that is thrown when an operation is canceled.\n *\n * @param {string=} message The message.\n * @param {Object=} config The config.\n * @param {Object=} request The request.\n *\n * @returns {CanceledError} The created error.\n */\nfunction CanceledError(message, config, request) {\n  // eslint-disable-next-line no-eq-null,eqeqeq\n  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);\n  this.name = 'CanceledError';\n}\n\nutils.inherits(CanceledError, AxiosError, {\n  __CANCEL__: true\n});\n\nexport default CanceledError;\n","'use strict';\n\nimport utils from './../utils.js';\nimport platform from '../platform/index.js';\n\nexport default platform.isStandardBrowserEnv ?\n\n// StINDX( 	 ƉE           (   H  �       s                     ��    x b     ��    ʈd�v�A;��n���V�.v�ʈd�v�8      5               c u s t o m E v e n t . d . t s       ��    p `     ��    ��g�v�p���n���V�.v���g�v�       �               h m r P a y l o a d . d . t s ��    h R     ��    ��g�v��s��n���V�.v���g�v�       �               h o t . d . t s       ��    p `     ��    ��g�v�����n���V�.v���g�v�       �	               i m p o r t G l o b . d . t  ��    p `     ��    �vl�v�����n���V�.v�ԝl�v�       �               i m p o r t M e t a . d . t s ��    p \     ��    ��l�v�ß�n���V�.v���l�v��       �                m e t a d a t a . d . t s     ��    p Z     ��    ��l�v�~p��n���V�.v���l�v�X       W                p a c k a g e . j s o n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              // This file is an augmentation to the built-in ImportMeta interface
// Thus cannot contain any top-level imports
// <https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation>

/* eslint-disable @typescript-eslint/consistent-type-imports */

interface ImportMetaEnv {
  [key: string]: any
  BASE_URL: string
  MODE: string
  DEV: boolean
  PROD: boolean
  SSR: boolean
}

interface ImportMeta {
  url: string

  readonly hot?: import('./hot').ViteHotContext

  readonly env: ImportMetaEnv

  glob: import('./importGlob').ImportGlobFunction
  /**
   * @deprecated Use `import.meta.glob('*', { eager: true })` instead
   */
  globEager: import('./importGlob').ImportGlobEagerFunction
}
                                                                                                                                                                                                                                                                                                                   tatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  },\n\n  headers: {\n    common: {\n      'Accept': 'application/json, text/plain, */*'\n    }\n  }\n};\n\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\n  defaults.headers[method] = {};\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\n});\n\nexport default defaults;\n","'use strict';\n\nimport utils from '../utils.js';\nimport toFormData from './toFormData.js';\nimport platform from '../platform/index.js';\n\nexport default function toURLEncodedForm(data, options) {\n  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({\n    visitor: function(value, key, path, helpers) {\n      if (platform.isNode && utils.isBuffer(value)) {\n        this.append(key, value.toString('base64'));\n        return false;\n      }\n\n      return helpers.defaultVisitor.apply(this, arguments);\n    }\n  }, options));\n}\n","'use strict';\n\nimport utils from './../utils.js';\n\n// RawAxiosHeaders whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nconst ignoreDuplicateOf = utils.toObjectSet([\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\n  'referer', 'retry-after', 'user-agent'\n]);\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} rawHeaders Headers needing to be parsed\n *\n * @returns {Object} Headers parsed into an object\n */\nexport default rawHeaders => {\n  const parsed = {};\n  let key;\n  let val;\n  let i;\n\n  rawHeaders && rawHeaders.split('\\n').forEach(function parser(line) {\n    i = line.indexOf(':');\n    key = line.substring(0, i).trim().toLowerCase();\n    val = line.substring(i + 1).trim();\n\n    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {\n      return;\n    }\n\n    if (key === 'set-cookie') {\n      if (parsed[key]) {\n        parsed[key].push(val);\n      } else {\n        parsed[key] = [val];\n      }\n    } else {\n      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n    }\n  });\n\n  return parsed;\n};\n","'use strict';\n\nimport utils from '../utils.js';\nimport parseHeaders from '../helpers/parseHeaders.js';\n\nconst $internals = Symbol('internals');\n\nfunction normalizeHeader(header) {\n  return header && String(header).trim().toLowerCase();\n}\n\nfunction normalizeValue(value) {\n  if (value === false || value == null) {\n    return value;\n  }\n\n  return utils.isArray(value) ? value.map(normalizeValue) : String(value);\n}\n\nfunction parseTokens(str) {\n  const tokens = Object.create(null);\n  const tokensRE = /([^\\s,;=]+)\\s*(?:=\\s*([^,;]+))?/g;\n  lexport interface ImportGlobOptions<
  Eager extends boolean,
  AsType extends string,
> {
  /**
   * Import type for the import url.
   */
  as?: AsType
  /**
   * Import as static or dynamic
   *
   * @default false
   */
  eager?: Eager
  /**
   * Import only the specific named export. Set to `default` to import the default export.
   */
  import?: string
  /**
   * Custom queries
   */
  query?: string | Record<string, string | number | boolean>
  /**
   * Search files also inside `node_modules/` and hidden directories (e.g. `.git/`). This might have impact on performance.
   *
   * @default false
   */
  exhaustive?: boolean
}

export type GeneralImportGlobOptions = ImportGlobOptions<boolean, string>

export interface KnownAsTypeMap {
  raw: string
  url: string
  worker: Worker
}

export interface ImportGlobFunction {
  /**
   * Import a list of files with a glob pattern.
   *
   * Overload 1: No generic provided, infer the type from `eager` and `as`
   */
  <
    Eager extends boolean,
    As extends string,
    T = As extends keyof KnownAsTypeMap ? KnownAsTypeMap[As] : unknown,
  >(
    glob: string | string[],
    options?: ImportGlobOptions<Eager, As>,
  ): (Eager extends true ? true : false) extends true
    ? Record<string, T>
    : Record<string, () => Promise<T>>
  /**
   * Import a list of files with a glob pattern.
   *
   * Overload 2: Module generic provided, infer the type from `eager: false`
   */
  <M>(
    glob: string | string[],
    options?: ImportGlobOptions<false, string>,
  ): Record<string, () => Promise<M>>
  /**
   * Import a list of files with a glob pattern.
   *
   * Overload 3: Module generic provided, infer the type from `eager: true`
   */
  <M>(
    glob: string | string[],
    options: ImportGlobOptions<true, string>,
  ): Record<string, M>
}

export interface ImportGlobEagerFunction {
  /**
   * Eagerly import a list of files with a glob pattern.
   *
   * Overload 1: No generic provided, infer the type from `as`
   */
  <
    As extends string,
    T = As extends keyof KnownAsTypeMap ? KnownAsTypeMap[As] : unknown,
  >(
    glob: string | string[],
    options?: Omit<ImportGlobOptions<boolean, As>, 'eager'>,
  ): Record<string, T>
  /**
   * Eagerly import a list of files with a glob pattern.
   *
   * Overload 2: Module generic provided
   */
  <M>(
    glob: string | string[],
    options?: Omit<ImportGlobOptions<boolean, string>, 'eager'>,
  ): Record<string, M>
}
                                                                                                               if (isFormData) {\n      if (!hasJSONContentType) {\n        return data;\n      }\n      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;\n    }\n\n    if (utils.isArrayBuffer(data) ||\n      utils.isBuffer(data) ||\n      utils.isStream(data) ||\n      utils.isFile(data) ||\n      utils.isBlob(data)\n    ) {\n      return data;\n    }\n    if (utils.isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (utils.isURLSearchParams(data)) {\n      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);\n      return data.toString();\n    }\n\n    let isFileList;\n\n    if (isObjectPayload) {\n      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {\n        return toURLEncodedForm(data, this.formSerializer).toString();\n      }\n\n      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {\n        const _FormData = this.env && this.env.FormData;\n\n        return toFormData(\n          isFileList ? {'files[]': data} : data,\n          _FormData && new _FormData(),\n          this.formSerializer\n        );\n      }\n    }\n\n    if (isObjectPayload || hasJSONContentType ) {\n      headers.setContentType('application/json', false);\n      return stringifySafely(data);\n    }\n\n    return data;\n  }],\n\n  transformResponse: [function transformResponse(data) {\n    const transitional = this.transitional || defaults.transitional;\n    const forcedJSONParsing = transitional && transitional.foimport type { InferCustomEventPayload } from './customEvent'

export type ModuleNamespace = Record<string, any> & {
  [Symbol.toStringTag]: 'Module'
}

export interface ViteHotContext {
  readonly data: any

  accept(): void
  accept(cb: (mod: ModuleNamespace | undefined) => void): void
  accept(dep: string, cb: (mod: ModuleNamespace | undefined) => void): void
  accept(
    deps: readonly string[],
    cb: (mods: Array<ModuleNamespace | undefined>) => void,
  ): void

  acceptExports(
    exportNames: string | readonly string[],
    cb?: (mod: ModuleNamespace | undefined) => void,
  ): void

  dispose(cb: (data: any) => void): void
  prune(cb: (data: any) => void): void
  invalidate(message?: string): void

  on<T extends string>(
    event: T,
    cb: (payload: InferCustomEventPayload<T>) => void,
  ): void
  send<T extends string>(event: T, data?: InferCustomEventPayload<T>): void
}
                                                                                                                             igator.product -> 'ReactNative'\n * nativescript\n *  navigator.product -> 'NativeScript' or 'NS'\n *\n * @returns {boolean}\n */\nconst isStandardBrowserEnv = (() => {\n  let product;\n  if (typeof navigator !== 'undefined' && (\n    (product = navigator.product) === 'ReactNative' ||\n    product === 'NativeScript' ||\n    product === 'NS')\n  ) {\n    return false;\n  }\n\n  return typeof window !== 'undefined' && typeof document !== 'undefined';\n})();\n\n/**\n * Determine if we're running in a standard browser webWorker environment\n *\n * Although the `isStandardBrowserEnv` method indicates that\n * `allows axios to run in a web worker`, the WebWorker will still be\n * filtered out due to its judgment standard\n * `typeof window !== 'undefined' && typeof document !== 'undefined'`.\n * This leads to a problem when axios post `FormData` in webWorker\n */\n const isStandardBrowserWebWorkerEnv = (() => {\n  return (\n    typeof WorkerGlobalScope !== 'undefined' &&\n    // eslint-disable-next-line no-undef\n    self instanceof WorkerGlobalScope &&\n    typeof self.importScripts === 'function'\n  );\n})();\n\n\nexport default {\n  isBrowser: true,\n  classes: {\n    URLSearchParams,\n    FormData,\n    Blob\n  },\n  isStandardBrowserEnv,\n  isStandardBrowserWebWorkerEnv,\n  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']\n};\n","'use strict';\n\nimport AxiosURLSearchParams from '../../../helpers/AxiosURLSearchParams.js';\nexport default typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;\n","'use strict';\n\nexport default typeof FormData !== 'undefined' ? FormData : null;\n","'use strict'\n\nexport default typeof Blob !== 'undefined' ? Blob : null\n","'use strict';\n\nimport utils from '../utils.js';\n\n/**\n * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']\n *\n * @param {string} name - The name of the property to get.\n *\n * @returns An array of strings.\n */\nfunction parsePropPath(name) {\n  // foo[x][y][z]\n  // foo.x.y.z\n  // foo-x-y-z\n  // foo x y z\n  return utils.matchAll(/\\w+|\\[(\\w*)]/g, name).map(match => {\n    return match[0] === '[]' ? '' : match[1] || match[0];\n  });\n}\n\n/**\n * Convert an array to an object.\n *\n * @param {Array<any>} arr - The array to convert to an object.\n *\n * @returns An object with the same keys and values as the array.\n */\nfunction arrayToObject(arr) {\n  const obj = {};\n  const keys = Object.keys(arr);\n  let i;\n  const len = keys.length;\n  let key;\n  for (i = 0; i < len; i++) {\n    key = keys[i];\n    obj[key] = arr[key];\n  }\n  return obj;\n}\n\n/**\n * It takes a FormData object and returns a JavaScript object\n *\n * @param {string} formData The FormData object to convert to JSON.\n *\n * @returns {Object<string, any> | null} The converted object.\n */\nfunction formDataToJSON(formData) {\n  function buildPath(path, value, target, index) {\n    let name = path[index++];\n    const isNumericKey = Number.isFinite(+name);\n    const isLast = index >= path.length;\n    name = export type HMRPayload =
  | ConnectedPayload
  | UpdatePayload
  | FullReloadPayload
  | CustomPayload
  | ErrorPayload
  | PrunePayload

export interface ConnectedPayload {
  type: 'connected'
}

export interface UpdatePayload {
  type: 'update'
  updates: Update[]
}

export interface Update {
  type: 'js-update' | 'css-update'
  path: string
  acceptedPath: string
  timestamp: number
  /**
   * @experimental internal
   */
  explicitImportRequired?: boolean | undefined
}

export interface PrunePayload {
  type: 'prune'
  paths: string[]
}

export interface FullReloadPayload {
  type: 'full-reload'
  path?: string
}

export interface CustomPayload {
  type: 'custom'
  event: string
  data?: any
}

export interface ErrorPayload {
  type: 'error'
  err: {
    [name: string]: any
    message: string
    stack: string
    id?: string
    frame?: string
    plugin?: string
    pluginCode?: string
    loc?: {
      file?: string
      line: number
      column: number
    }
  }
}
                                 der.call(this, value, encode);\n  } : encode;\n\n  return this._pairs.map(function each(pair) {\n    return _encode(pair[0]) + '=' + _encode(pair[1]);\n  }, '').join('&');\n};\n\nexport default AxiosURLSearchParams;\n","'use strict';\n\nimport utils from '../utils.js';\nimport AxiosURLSearchParams from '../helpers/AxiosURLSearchParams.js';\n\n/**\n * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their\n * URI encoded counterparts\n *\n * @param {string} val The value to be encoded.\n *\n * @returns {string} The encoded value.\n */\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @param {?object} options\n *\n * @returns {string} The formatted url\n */\nexport default function buildURL(url, params, options) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n  \n  const _encode = options && options.encode || encode;\n\n  const serializeFn = options && options.serialize;\n\n  let serializedParams;\n\n  if (serializeFn) {\n    serializedParams = serializeFn(params, options);\n  } else {\n    serializedParams = utils.isURLSearchParams(params) ?\n      params.toString() :\n      new AxiosURLSearchParams(params, options).toString(_encode);\n  }\n\n  if (serializedParams) {\n    const hashmarkIndex = url.indexOf(\"#\");\n\n    if (hashmarkIndex !== -1) {\n      url = url.slice(0, hashmarkIndex);\n    }\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n}\n","'use strict';\n\nimport utils from './../utils.js';\n\nclass InterceptorManager {\n  constructor() {\n    this.handlers = [];\n  }\n\n  /**\n   * Add a new interceptor to the stack\n   *\n   * @param {Function} fulfilled The function to handle `then` for a `Promise`\n   * @param {Function} rejected The function to handle `reject` for a `Promise`\n   *\n   * @return {Number} An ID used to remove interceptor later\n   */\n  use(fulfilled, rejected, options) {\n    this.handlers.push({\n      fulfilled,\n      rejected,\n      synchronous: options ? options.synchronous : false,\n      runWhen: options ? options.runWhen : null\n    });\n    return this.handlers.length - 1;\n  }\n\n  /**\n   * Remove an interceptor from the stack\n   *\n   * @param {Number} id The ID that was returned by `use`\n   *\n   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise\n   */\n  eject(id) {\n    if (this.handlers[id]) {\n      this.handlers[id] = null;\n    }\n  }\n\n  /**\n   * Clear all interceptors from the stack\n   *\n   * @returns {void}\n   */\n  clear() {\n    if (this.handlers) {\n      this.handlers = [];\n    }\n  }\n\n  /**\n   * Iterate over all the registered interceptors\n   *\n   * Th# vite ⚡

> Next Generation Frontend Tooling

- 💡 Instant Server Start
- ⚡️ Lightning Fast HMR
- 🛠️ Rich Features
- 📦 Optimized Build
- 🔩 Universal Plugin Interface
- 🔑 Fully Typed APIs

Vite (French word for "fast", pronounced `/vit/`) is a new breed of frontend build tool that significantly improves the frontend development experience. It consists of two major parts:

- A dev server that serves your source files over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), with [rich built-in features](https://vitejs.dev/guide/features.html) and astonishingly fast [Hot Module Replacement (HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement).

- A [build command](https://vitejs.dev/guide/build.html) that bundles your code with [Rollup](https://rollupjs.org), pre-configured to output highly optimized static assets for production.

In addition, Vite is highly extensible via its [Plugin API](https://vitejs.dev/guide/api-plugin.html) and [JavaScript API](https://vitejs.dev/guide/api-javascript.html) with full typing support.

[Read the Docs to Learn More](https://vitejs.dev).
                                                                                                                                                                                                                                                                                                                                                                                    or.\n   *\n   * @param {*} value\n   * @param {String|Number} key\n   * @param {Array<String|Number>} path\n   * @this {FormData}\n   *\n   * @returns {boolean} return true to visit the each prop of the value recursively\n   */\n  function defaultVisitor(value, key, path) {\n    let arr = value;\n\n    if (value && !path && typeof value === 'object') {\n      if (utils.endsWith(key, '{}')) {\n        // eslint-disable-next-line no-param-reassign\n        key = metaTokens ? key : key.slice(0, -2);\n        // eslint-disable-next-line no-param-reassign\n        value = JSON.stringify(value);\n      } else if (\n        (utils.isArray(value) && isFlatArray(value)) ||\n        ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))\n        )) {\n        // eslint-disable-next-line no-param-reassign\n        key = removeBrackets(key);\n\n        arr.forEach(function each(el, index) {\n          !(utils.isUndefined(el) || el === null) && formData.append(\n            // eslint-disable-next-line no-nested-ternary\n            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),\n            convertValue(el)\n          );\n        });\n        return false;\n      }\n    }\n\n    if (isVisitable(value)) {\n      return true;\n    }\n\n    formData.append(renderKey(path, key, dots), convertValue(value));\n\n    return false;\n  }\n\n  const stack = [];\n\n  const exposedHelpers = Object.assign(predicates, {\n    defaultVisitor,\n    convertValue,\n    isVisitable\n  });\n\n  function build(value, path) {\n    if (utils.isUndefined(value)) return;\n\n    if (stack.indexOf(value) !== -1) {\n      throw Error('Circular reference detected in ' + path.join('.'));\n    }\n\n    stack.push(value);\n\n    utils.forEach(value, function each(el, key) {\n      const result = !(utils.isUndefined(el) || el === null) && visitor.call(\n        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers\n      );\n\n      if (result === true) {\n        build(el, path ? path.concat(key) : [key]);\n      }\n    });\n\n    stack.pop();\n  }\n\n  if (!utils.isObject(obj)) {\n    throw new TypeError('data must be an object');\n  }\n\n  build(obj);\n\n  return formData;\n}\n\nexport default toFormData;\n","'use strict';\n\nimport toFormData from './toFormData.js';\n\n/**\n * It encodes a string by replacing all characters that are not in the unreserved set with\n * their percent-encoded equivalents\n *\n * @param {string} str - The string to encode.\n *\n * @reINDX( 	 HE           (   `  �       �                    e�    X H     d�    �yH�v�lf��n��{V�.v�g�Sf{��                        b i n h�    h X     d�    ~�K�v�7��n��{V�.v�~�K�v�        �               c l i e n t . d . t s i�    ` J     d�    ��K�v��ҋ�n���V�.v��Vf{��                        d i s t       |�    h T     d�    ��c�v��Q��n���V�.v���c�v�       �              	 i n d e x . c j s     }�    h V     d�    ��c�v�� ϸn���V�.v��d�v  �     Kv             
 L I C E N S E . m d   ~�    p Z     d�    �d�v�p"��n���V�.v��:d�v�        �               p a c k a g e . j s o n       �    h T     d�    �:d�v��'ϸn���V�.v��ad�v�       �              	 R E A D M E . m d     ��    ` L     d�    ʈd�v����n���V�.v��=Wf{��                        t y p e s                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    module.exports={A:{A:{"2":"J D E F A EC","132":"B"},B:{"1":"K L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H","16":"C"},C:{"1":"AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"0 1 2 3 4 5 6 7 8 9 FC uB I w J D E F A B C K L G M N O x g y z GC HC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","16":"I w J D E F A B C K L G"},E:{"1":"w J D E F A B C K L G LC MC NC OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I KC 0B"},F:{"1":"0 1 2 3 4 5 6 7 8 9 G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"F B C SC TC UC VC rB CC WC sB"},G:{"1":"E XC DC YC ZC aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"0B"},H:{"2":"rC"},I:{"1":"uB I H uC vC DC wC xC","16":"sC tC"},J:{"1":"D A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"2":"A B"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:1,C:"Link type \"noreferrer\""};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         module.exports={A:{A:{"1":"A B","2":"J D E F EC"},B:{"1":"C K L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"1":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"FC uB GC HC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"I w J D E F A B C"},E:{"1":"J D E F A B C K L G MC NC OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I KC 0B","132":"w LC"},F:{"1":"0 1 2 3 4 5 6 7 8 9 C G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e WC sB","2":"F B SC TC UC VC rB CC"},G:{"1":"E YC ZC aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"0B XC DC"},H:{"1":"rC"},I:{"1":"uB I H vC DC wC xC","2":"sC tC uC"},J:{"1":"D A"},K:{"1":"C h CC sB","2":"A B rB"},L:{"1":"H"},M:{"1":"f"},N:{"1":"A B"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:6,C:"ECMAScript 5 Strict Mode"};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            module.exports={A:{A:{"2":"J D E F A B EC"},B:{"1":"N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H","2":"C K L G M"},C:{"1":"LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"0 1 2 3 4 5 FC uB I w J D E F A B C K L G M N O x g y z GC HC","132":"6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB"},D:{"1":"QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB"},E:{"1":"B C K L G 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I w J D E F A KC 0B LC MC NC OC"},F:{"1":"DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"0 1 2 3 4 5 6 7 8 9 F B C G M N O x g y z AB BB CB SC TC UC VC rB CC WC sB"},G:{"1":"fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"E 0B XC DC YC ZC aC bC cC dC eC"},H:{"2":"rC"},I:{"1":"H","2":"uB I sC tC uC vC DC wC xC"},J:{"2":"D A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"2":"A B"},O:{"1":"yC"},P:{"1":"g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD","2":"I"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:1,C:"URLSearchParams"};
                                               used instead of a single colon
// (:). This distinguishes pseudo-classes from pseudo-elements. However, since
// this distinction was not present in older versions of the W3C spec, most
// browsers support both syntaxes for the original pseudo-elements.
let pseudoElementsBC = [':before', ':after', ':first-line', ':first-letter']

// These pseudo-elements _can_ be combined with other pseudo selectors AND the order does matter.
let pseudoElementExceptions = [
  '::file-selector-button',

  // Webkit scroll bar pseudo elements can be combined with user-action pseudo classes
  '::-webkit-scrollbar',
  '::-webkit-scrollbar-button',
  '::-webkit-scrollbar-thumb',
  '::-webkit-scrollbar-track',
  '::-webkit-scrollbar-track-piece',
  '::-webkit-scrollbar-corner',
  '::-webkit-resizer',
]

/**
 * This will make sure to move pseudo's to the correct spot (the end for
 * pseudo elements) because otherwise the selector will never work
 * anyway.
 *
 * E.g.:
 *  - `before:hover:text-center` would result in `.before\:hover\:text-center:hover::before`
 *  - `hover:before:text-center` would result in `.hover\:before\:text-center:hover::before`
 *
 * `::before:hover` doesn't work, which means that we can make it work for you by flipping the order.
 *
 * @param {Selector} selector
 * @param {boolean} force
 **/
export function collectPseudoElements(selector, force = false) {
  /** @type {Node[]} */
  let nodes = []
  let seenPseudoElement = null

  for (let node of [...selector.nodes]) {
    if (isPseudoElement(node, force)) {
      nodes.push(node)
      selector.removeChild(node)
      seenPseudoElement = node.value
    } else if (seenPseudoElement !== null) {
      if (pseudoElementExceptions.includes(seenPseudoElement) && isPseudoClass(node, force)) {
        nodes.push(node)
        selector.removeChild(node)
      } else {
        seenPseudoElement = null
      }
    }

    if (node?.nodes) {
      let hasPseudoElementRestrictions =
        node.type === 'pseudo' && (node.value === ':is' || node.value === ':has')

      let [collected, seenPseudoElementInSelector] = collectPseudoElements(
        node,
        force || hasPseudoElementRestrictions
      )

      if (seenPseudoElementInSelector) {
        seenPseudoElement = seenPseudoElementInSelector
      }

      nodes.push(...collected)
    }
  }

  return [nodes, seenPseudoElement]
}

// This will make sure to move pseudo's to the correct spot (the end for
// pseudo elements) because otherwise the selector will never work
// anyway.
//
// E.g.:
//  - `before:hover:text-cenmodule.exports={A:{A:{"2":"J D E F A B EC"},B:{"1":"C K L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"1":"3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"0 1 2 FC uB I w J D E F A B C K L G M N O x g y z GC HC"},D:{"1":"9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"I w J D E F A B C K L G M N O x g y z","130":"0 1 2 3 4 5 6 7 8"},E:{"1":"E F A B C K L G NC OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I w J KC 0B LC MC","130":"D"},F:{"1":"0 1 2 3 4 5 6 7 8 9 x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"F B C SC TC UC VC rB CC WC sB","130":"G M N O"},G:{"1":"E bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"0B XC DC YC ZC","130":"aC"},H:{"2":"rC"},I:{"1":"H xC","2":"uB I sC tC uC vC DC","130":"wC"},J:{"2":"D","130":"A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"2":"A B"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:1,C:"URL API"};
                           scaped base: bg-\\[rgb\\(255\\2c 0\\2c 0\\)\\]
  //
  selector.walkClasses((node) => {
    if (node.raws && node.value.includes(base)) {
      node.raws.value = escapeClassName(unescape(node.raws.value))
    }
  })

  // Remove extraneous selectors that do not include the base candidate
  selector.each((sel) => eliminateIrrelevantSelectors(sel, base))

  // If there are no formats that means there were no variants added to the candidate
  // so we can just return the selector as-is
  let formatAst = Array.isArray(formats)
    ? formatVariantSelector(formats, { context, candidate })
    : formats

  if (formatAst === null) {
    return selector.toString()
  }

  let simpleStart = selectorParser.comment({ value: '/*__simple__*/' })
  let simpleEnd = selectorParser.comment({ value: '/*__simple__*/' })

  // We can safely replace the escaped base now, since the `base` section is
  // now in a normalized escaped value.
  selector.walkClasses((node) => {
    if (node.value !== base) {
      return
    }

    let parent = node.parent
    let formatNodes = formatAst.nodes[0].nodes

    // Perf optimization: if the parent is a single class we can just replace it and be done
    if (parent.nodes.length === 1) {
      node.replaceWith(...formatNodes)
      return
    }

    let simpleSelector = simpleSelectorForNode(node)
    parent.insertBefore(simpleSelector[0], simpleStart)
    parent.insertAfter(simpleSelector[simpleSelector.length - 1], simpleEnd)

    for (let child of formatNodes) {
      parent.insertBefore(simpleSelector[0], child.clone())
    }

    node.remove()

    // Re-sort the simple selector to ensure it's in the correct order
    simpleSelector = simpleSelectorForNode(simpleStart)
    let firstNode = parent.index(simpleStart)

    parent.nodes.splice(
      firstNode,
      simpleSelector.length,
      ...resortSelector(selectorParser.selector({ nodes: simpleSelector })).nodes
    )

    simpleStart.remove()
    simpleEnd.remove()
  })

  // Remove unnecessary pseudo selectors that we used as placeholders
  selector.walkPseudos((p) => {
    if (p.value === MERGE) {
      p.replaceWith(p.nodes)
    }
  })

  // Move pseudo elements to the end of the selector (if necessary)
  selector.each((sel) => {
    let [pseudoElements] = collectPseudoElements(sel)
    if (pseudoElements.length > 0) {
      sel.nodes.push(...pseudoElements.sort(sortSelector))
    }
  })

  return selector.toString()
}

/**
 *
 * @param {Selector} selector
 * @param {Selector} format
 */
export function handleMergePseudo(selector, format) module.exports={A:{A:{"2":"J D E F A B EC"},B:{"1":"S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H","2":"C K L G M N O","66":"P Q R"},C:{"2":"0 1 2 3 4 5 6 7 8 9 FC uB I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB GC HC"},D:{"1":"R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h","66":"mB nB oB pB qB P Q"},E:{"1":"7B 8B 9B AC BC RC","2":"I w J D E F A B C K L G KC 0B LC MC NC OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB"},F:{"1":"hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"0 1 2 3 4 5 6 7 8 9 F B C G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB SC TC UC VC rB CC WC sB","66":"fB gB"},G:{"1":"7B 8B 9B AC BC","2":"E 0B XC DC YC ZC aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB"},H:{"2":"rC"},I:{"1":"H","2":"uB I sC tC uC vC DC wC xC"},J:{"2":"D A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"2":"f"},N:{"2":"A B"},O:{"2":"yC"},P:{"1":"g 6C 7C 8C tB 9C AD BD","2":"I zC 0C 1C 2C 3C 1B 4C 5C"},Q:{"2":"2B"},R:{"1":"CD"},S:{"2":"DD ED"}},B:7,C:"URL Scroll-To-Text Fragment"};
                            o the candidate selector
  for (let { ast } of parsedFormats) {
    // 1. Handle :merge() special pseudo-class
    ;[formatAst, ast] = handleMergePseudo(formatAst, ast)

    // 2. Merge the format selector into the current selector AST
    ast.walkNesting((nesting) => nesting.replaceWith(...formatAst.nodes[0].nodes))

    // 3. Keep going!
    formatAst = ast
  }

  return formatAst
}

/**
 * Given any node in a selector this gets the "simple" selector it's a part of
 * A simple selector is just a list of nodes without any combinators
 * Technically :is(), :not(), :has(), etc… can have combinators but those are nested
 * inside the relevant node and won't be picked up so they're fine to ignore
 *
 * @param {Node} node
 * @returns {Node[]}
 **/
function simpleSelectorForNode(node) {
  /** @type {Node[]} */
  let nodes = []

  // Walk backwards until we hit a combinator node (or the start)
  while (node.prev() && node.prev().type !== 'combinator') {
    node = node.prev()
  }

  // Now record all non-combinator nodes until we hit one (or the end)
  while (node && node.type !== 'combinator') {
    nodes.push(node)
    node = node.next()
  }

  return nodes
}

/**
 * Resorts the nodes in a selector to ensure they're in the correct order
 * Tags go before classes, and pseudo classes go after classes
 *
 * @param {Selector} sel
 * @returns {Selector}
 **/
function resortSelector(sel) {
  sel.sort((a, b) => {
    if (a.type === 'tag' && b.type === 'class') {
      return -1
    } else if (a.type === 'class' && b.type === 'tag') {
      return 1
    } else if (a.type === 'class' && b.type === 'pseudo' && b.value.startsWith('::')) {
      return -1
    } else if (a.type === 'pseudo' && a.value.startsWith('::') && b.type === 'class') {
      return 1
    }

    return sel.index(a) - sel.index(b)
  })

  return sel
}

/**
 * Remove extraneous selectors that do not include the base class/candidate
 *
 * Example:
 * Given the utility `.a, .b { color: red}`
 * Given the candidate `sm:b`
 *
 * The final selector should be `.sm\:b` and not `.a, .sm\:b`
 *
 * @param {Selector} ast
 * @param {string} base
 */
export function eliminateIrrelevantSelectors(sel, base) {
  let hasClassesMatchingCandidate = false

  sel.walk((child) => {
    if (child.type === 'class' && child.value === base) {
      hasClassesMatchingCandidate = true
      return false // Stop walking
    }
  })

  if (!hasClassesMatchingCandidate) {
    sel.remove()
  }

  // We do NOT recursively eliminate sub selectors that don't have the base class
  // as this is module.exports={A:{A:{"2":"J D E F A B EC"},B:{"1":"N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H","2":"C K L G M"},C:{"1":"JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"0 1 2 3 4 5 6 7 8 9 FC uB I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB GC HC"},D:{"1":"KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB"},E:{"1":"B C K L G 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I w J D E F A KC 0B LC MC NC OC"},F:{"1":"7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"0 1 2 3 4 5 6 F B C G M N O x g y z SC TC UC VC rB CC WC sB"},G:{"1":"fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"E 0B XC DC YC ZC aC bC cC dC eC"},H:{"2":"rC"},I:{"1":"H","2":"uB I sC tC uC vC DC wC xC"},J:{"2":"D A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"2":"A B"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:4,C:"Upgrade Insecure Requests"};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   module.exports={A:{A:{"2":"J D E F A B EC"},B:{"1":"P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H","2":"C K L G M N O"},C:{"1":"iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"0 1 2 3 4 5 6 7 8 9 FC uB I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB GC HC"},D:{"1":"QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB"},E:{"1":"B C K L G rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I w J D E F A KC 0B LC MC NC OC 1B"},F:{"1":"DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"0 1 2 3 4 5 6 7 8 9 F B C G M N O x g y z AB BB CB SC TC UC VC rB CC WC sB"},G:{"1":"hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"E 0B XC DC YC ZC aC bC cC dC eC fC","16":"gC"},H:{"2":"rC"},I:{"1":"H","2":"uB I sC tC uC vC DC wC xC"},J:{"2":"D A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"2":"A B"},O:{"1":"yC"},P:{"1":"g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD","2":"I"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"ED","2":"DD"}},B:1,C:"unhandledrejection/rejectionhandled events"};
               .copyToken();
      } else {
        this.tokens.copyToken();
        this.tokens.copyToken();
        this.tokens.copyToken();
      }
      this.tryProcessCreateClassCall(startIndex);
      return true;
    }
    return false;
  }

  /**
   * This is called with the token position at the open-paren.
   */
   tryProcessCreateClassCall(startIndex) {
    const displayName = this.findDisplayName(startIndex);
    if (!displayName) {
      return;
    }

    if (this.classNeedsDisplayName()) {
      this.tokens.copyExpectedToken(tt.parenL);
      this.tokens.copyExpectedToken(tt.braceL);
      this.tokens.appendCode(`displayName: '${displayName}',`);
      this.rootTransformer.processBalancedCode();
      this.tokens.copyExpectedToken(tt.braceR);
      this.tokens.copyExpectedToken(tt.parenR);
    }
  }

   findDisplayName(startIndex) {
    if (startIndex < 2) {
      return null;
    }
    if (this.tokens.matches2AtIndex(startIndex - 2, tt.name, tt.eq)) {
      // This is an assignment (or declaration) and the LHS is either an identifier or a member
      // expression ending in an identifier, so use that identifier name.
      return this.tokens.identifierNameAtIndex(startIndex - 2);
    }
    if (
      startIndex >= 2 &&
      this.tokens.tokens[startIndex - 2].identifierRole === IdentifierRole.ObjectKey
    ) {
      // This is an object literal value.
      return this.tokens.identifierNameAtIndex(startIndex - 2);
    }
    if (this.tokens.matches2AtIndex(startIndex - 2, tt._export, tt._default)) {
      return this.getDisplayNameFromFilename();
    }
    return null;
  }

   getDisplayNameFromFilename() {
    const filePath = this.options.filePath || "unknown";
    const pathSegments = filePath.split("/");
    const filename = pathSegments[pathSegments.length - 1];
    const dotIndex = filename.lastIndexOf(".");
    const baseFilename = dotIndex === -1 ? filename : filename.slice(0, dotIndex);
    if (baseFilename === "index" && pathSegments[pathSegments.length - 2]) {
      return pathSegments[pathSegments.length - 2];
    } else {
      return baseFilename;
    }
  }

  /**
   * We only want to add a display name when this is a function call containing
   * one argument, which is an object literal without `displayName` as an
   * existing key.
   */
   classNeedsDisplayName() {
    let index = this.tokens.currentIndex();
    if (!this.tokens.matches2(tt.parenL, tt.braceL)) {
      return false;
    }
    // The block starts on the {, and we expect any displayName key to be in
    // that context. We need to igmodule.exports={A:{A:{"2":"J D E F A B EC"},B:{"2":"C K L G M N O s t u v f H","513":"P Q R S T U V W X Y Z a b c d e i j k l m n o p q r"},C:{"1":"gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H","2":"0 1 2 3 4 5 6 7 8 9 FC uB I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB GC HC","322":"OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB yB zB"},D:{"2":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB s t u v f H yB zB IC JC","130":"FB GB HB","513":"IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j","578":"k l m n o p q r"},E:{"1":"K L G 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I w J D E F A B C KC 0B LC MC NC OC 1B rB sB"},F:{"2":"0 1 2 3 4 5 6 7 8 9 F B C G M N O x g y z AB BB CB DB EB FB GB IB SC TC UC VC rB CC WC sB","513":"HB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e"},G:{"1":"mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"E 0B XC DC YC ZC aC bC cC dC eC fC gC hC iC jC kC lC"},H:{"2":"rC"},I:{"2":"uB I H sC tC uC vC DC wC xC"},J:{"2":"D A"},K:{"2":"A B C h rB CC sB"},L:{"2":"H"},M:{"1":"f"},N:{"2":"A B"},O:{"2":"yC"},P:{"2":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"2":"2B"},R:{"2":"CD"},S:{"1":"ED","322":"DD"}},B:7,C:"FIDO U2F API"};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      module.exports={A:{A:{"1":"B","2":"J D E F EC","132":"A"},B:{"1":"C K L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"1":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB","2":"FC uB GC HC"},D:{"1":"0 1 2 3 4 5 6 7 8 9 D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"I w J"},E:{"1":"J D E F A B C K L G MC NC OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC","2":"I w KC 0B","260":"LC"},F:{"1":"0 1 2 3 4 5 6 7 8 9 C G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e WC sB","2":"F B SC TC UC VC rB CC"},G:{"1":"E YC ZC aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"0B XC","260":"DC"},H:{"1":"rC"},I:{"1":"I H vC DC wC xC","2":"uB sC tC uC"},J:{"1":"A","2":"D"},K:{"1":"C h sB","2":"A B rB CC"},L:{"1":"H"},M:{"1":"f"},N:{"132":"A B"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:6,C:"Typed Arrays"};
                                .00636,"79":0.06357,"80":0.01271,"81":0.00636,"83":0.00636,"84":0.02543,"85":0.01907,"86":0.01271,"87":0.06357,"88":0.01271,"89":0.01271,"90":0.00636,"91":0.01907,"92":0.01271,"93":0.01271,"94":0.00636,"95":0,"96":0.00636,"97":0.01271,"98":0.01907,"99":0.03179,"100":0.02543,"101":0.03179,"102":0.06357,"103":0.23521,"104":0.0445,"105":0.0445,"106":0.03179,"107":0.07628,"108":0.24792,"109":1.25233,"110":5.60687,"111":11.01032,"112":0.01271,"113":0,"114":0},F:{"9":0,"11":0,"12":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0.00636,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"60":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0.03814,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0.01907,"95":0.37506,"9.5-9.6":0,"10.0-10.1":0,"10.5":0,"10.6":0,"11.1":0,"11.5":0,"11.6":0,"12.1":0},B:{"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0.00636,"79":0,"80":0,"81":0,"83":0,"84":0,"85":0.00636,"86":0,"87":0,"88":0,"89":0,"90":0.00636,"91":0,"92":0.01271,"93":0,"94":0,"95":0,"96":0.00636,"97":0.01271,"98":0.01907,"99":0.01271,"100":0.00636,"101":0.00636,"102":0.00636,"103":0.01271,"104":0.00636,"105":0.01271,"106":0.01271,"107":0.05086,"108":0.10807,"109":0.26064,"110":3.62985,"111":4.74232},E:{"4":0,"5":0,"6":0,"7":0,"8":0.00636,"9":0,"10":0,"11":0,"12":0.00636,"13":0.01907,"14":0.10171,"15":0.02543,_:"0","3.1":0,"3.2":0,"5.1":0,"6.1":0,"7.1":0,"9.1":0.00636,"10.1":0,"11.1":0.00636,"12.1":0.089,"13.1":0.24792,"14.1":0.33056,"15.1":0.05086,"15.2-15.3":0.0445,"15.4":0.10807,"15.5":0.21614,"15.6":0.83277,"16.0":0.12078,"16.1":0.29242,"16.2":0.52127,"16.3":2.09145,"16.4":0.0445,"16.5":0},G:{"8":0,"3.2":0,"4.0-4.1":0,"4.2-4.3":0,"5.0-5.1":0,"6.0-6.1":0.0035,"7.0-7.1":0.0035,"8.1-8.4":0.007,"9.0-9.2":0.59491,"9.3":0.13998,"10.0-10.2":0.007,"10.3":0.10848,"11.0-11.2":0.014,"11.3-11.4":0.10498,"12.0-12.1":0.0175,"12.2-12.5":0.47943,"13.0-13.1":0.007,"13.2":0.007,"13.3":0.0315,"13.4-13.7":0.10148,"14.0-14.4":0.30445,"14.5-14.8":0.69989,"15.0-15.1":0.20647,"15.2-15.3":0.28696,"15.4":0.31495,"15.5":0.78038,"15.6":2.41814,"16.0":3.16003,"16.1":5.88612,"16.2":4.17487,"16.3":13.61646,"16.4":0.12248,"16.5":0},P:{"4":0.06195,"20":2.76727,"5.0-5.4":0.02065,"6.2-6.4":0,"7.2-7.4":0,"8.2":0,"9.2":0.010module.exports={A:{A:{"2":"J D E EC","132":"F A B"},B:{"1":"C K L G M N O P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H"},C:{"1":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB GC HC","2":"FC uB"},D:{"1":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC"},E:{"1":"I w J D E F A B C K L G KC 0B LC MC NC OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC"},F:{"1":"0 1 2 3 4 5 6 7 8 9 B C G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e TC UC VC rB CC WC sB","2":"F SC"},G:{"1":"E DC YC ZC aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC","2":"0B XC"},H:{"2":"rC"},I:{"1":"uB I H tC uC vC DC wC xC","2":"sC"},J:{"1":"D A"},K:{"1":"A B C h rB CC sB"},L:{"1":"H"},M:{"1":"f"},N:{"132":"A B"},O:{"1":"yC"},P:{"1":"I g zC 0C 1C 2C 3C 1B 4C 5C 6C 7C 8C tB 9C AD BD"},Q:{"1":"2B"},R:{"1":"CD"},S:{"1":"DD ED"}},B:6,C:"TTF/OTF - TrueType and OpenType font support"};
                                              ator" ^ z.type === "combinator") {
        return 0;
    }
    // One of the items is a pseudo and the other one isn't. Let's move
    // the pseudo to the right.
    if (a.type === "pseudo" ^ z.type === "pseudo") {
        return (a.type === "pseudo") - (z.type === "pseudo");
    }
    // Both are pseudo's, move the pseudo elements (except for
    // ::file-selector-button) to the right.
    return isPseudoElement(a) - isPseudoElement(z);
}
function isPseudoElement(node, force = false) {
    if (node.type !== "pseudo") return false;
    if (pseudoElementExceptions.includes(node.value) && !force) return false;
    return node.value.startsWith("::") || pseudoElementsBC.includes(node.value);
}
function isPseudoClass(node, force) {
    return node.type === "pseudo" && !isPseudoElement(node, force);
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       module.exports={A:{A:{"2":"J D E F A B EC"},B:{"1":"S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H","2":"C K L G M N O P Q R"},C:{"2":"0 1 2 3 4 5 6 7 8 9 FC uB I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB GC HC"},D:{"1":"S T U V W X Y Z a b c d e i j k l m n o p q r s t u v f H yB zB IC JC","2":"0 1 2 3 4 5 6 7 8 9 I w J D E F A B C K L G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB vB aB wB bB cB dB eB fB gB hB iB jB kB lB h mB nB oB pB qB P Q R"},E:{"2":"I w J D E F A B C K L G KC 0B LC MC NC OC 1B rB sB 2B PC QC 3B 4B 5B 6B tB 7B 8B 9B AC BC RC"},F:{"1":"iB jB kB lB h mB nB oB pB qB P Q R xB S T U V W X Y Z a b c d e","2":"0 1 2 3 4 5 6 7 8 9 F B C G M N O x g y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB SC TC UC VC rB CC WC sB"},G:{"2":"E 0B XC DC YC ZC aC bC cC dC eC fC gC hC iC jC kC lC mC nC oC pC qC 3B 4B 5B 6B tB 7B 8B 9B AC BC"},H:{"2":"rC"},I:{"1":"H","2":"uB I sC tC uC vC DC wC xC"},J:{"2":"D A"},K:{"1":"h","2":"A B C rB CC sB"},L:{"1":"H"},M:{"2":"f"},N:{"2":"A B"},O:{"2":"yC"},P:{"1":"g 6C 7C 8C tB 9C AD BD","2":"I zC 0C 1C 2C 3C 1B 4C 5C"},Q:{"2":"2B"},R:{"1":"CD"},S:{"2":"DD ED"}},B:7,C:"Trusted Types for DOM manipulation"};
                                                      ind all :merge() pseudo-classes in `selector`
    selector.walkPseudos((pseudo)=>{
        if (pseudo.value === MERGE) {
            merges.push({
                pseudo,
                value: pseudo.nodes[0].toString()
            });
        }
    });
    // Find all :merge() "attachments" in `format` and attach them to the matching selector in `selector`
    format.walkPseudos((pseudo)=>{
        if (pseudo.value !== MERGE) {
            return;
        }
        let value = pseudo.nodes[0].toString();
        // Does `selector` contain a :merge() pseudo-class with the sam