function solution(ranks) {
    // write your code in JavaScript (Node.js 8.9.4) 
    var i = 0;
    var j = 0;
    var result = 0;
    var upperRankFound = false;
    var itemsfound = [];
    for (i = 0; i < ranks.length; i++) {
        if (!itemsfound.includes(ranks[i])) {
            upperRankFound = false;
            for (j = 0; j < ranks.length; j++) {
                if ((ranks[i] + 1) === ranks[j]) {
                    console.log("ajhsdjakhdas")
                    itemsfound.push(ranks[i]);
                    upperRankFound == true;
                    break;
                }
            }
            if (upperRankFound) {
                console.log("i'm here man")
                for (j = 0; j < ranks.length; j++) {

                    if ((ranks[i]) === ranks[j]) {

                        result++;
                    }
                }
            }
        }

    }
    return result;

}