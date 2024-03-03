const langList = ["ruby", "python", "cpp", "javascript", "swift"]

// langList.forEach(function (name){
//     console.log(name);
// })

// langList.forEach( items=>{
//     console.log(items);
// })

function printMe(computerLang){
    // console.log(computerLang);
}

langList.forEach(printMe)


langList.forEach(function (name, index, arr){
    // console.log(name, index, arr);
})

// ## arrays && object

const condingLanguage = [
    {
        langName: "java",
        extentionName: "java"
    },
    {
        langName: "javascript",
        extentionName: "js"  
    },
    {
        langName: "python",
        extentionName: "py"  
    },
    {
        langName: "c++",
        extentionName: "cpp"  
    }
]

condingLanguage.forEach((langName)=>{
    console.log(langName.langName);
    console.log(langName.extentionName);
})