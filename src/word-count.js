var jbsApp = {};
jbsApp.getWordCount = function(userStr) {
    if(userStr.length <=0) {
        return;
    }
    getWordsObj(userStr);

    function getWordsObj(str) {
       var arr = str.split(' '), _wordsObj = {}, i = 0, arrLength = arr.length;
        for(i; i<arrLength; i++) {
            (_wordsObj[arr[i]]) ? _wordsObj[arr[i]].count++ : _wordsObj[arr[i]] = {count : 1};
        }
        return _wordsObj;
    }
};

jbsApp.getWordCount('hootcode is fun. hootcode is for javascript and java');
