const axios = require("axios");
const TurndownService = require('turndown');
const turndownPluginGfm = require('turndown-plugin-gfm');

const mainurl = 'https://www.toptal.com/nodejs/gatsby-js-node-js-static-site-generator-pt-1'

// basic trial
function basicTrial() {

var gfm = turndownPluginGfm.gfm
var turndownService = new TurndownService({
  headingStyle: 'atx',
})

turndownService
  .use(gfm)
  .remove([ 'script', 'style' ])
  
var markdown = turndownService.turndown('<style>body { background: "#000"; }</style><strike>Hello world!</strike><script>console.log(your mom)</script><br><h1>Chad is the shit!</h1>')

console.log(markdown, "\n-- end of markdown --")
}
basicTrial();


//axios.get("https://world.openfoodfacts.org/category/pastas/1.json")

//axios.get("http://webcode.me")
  //.then(response => {
    // access parsed JSON response data using response.data field
    //data = response.data
    //console.log(data.count)
    //console.log(data.products)
    //console.log(data)
  //})
 // .catch(error => {
  //  if (error.response) {
      //get HTTP error code
    //  console.log(error.reponse.status)
 //   } else {
 //     console.log(error.message)
 //   }
//  }) point
  
 

function makeGetRequest() {

  let res = axios.get('https://www.toptal.com/nodejs/gatsby-js-node-js-static-site-generator-pt-1');

  let data = res.data;
  //console.log(data);
  console.log(res)
  var gfm2 = turndownPluginGfm.gfm

  var turndownService2 = new TurndownService({
    headingStyle: 'atx',
  })

  turndownService2
    .remove(['script', 'style'])
    .use(gfm2)

  var markdown2 = turndownService2.turndown(data)

//var markdown2 = await turndownService2.turndown('<h1>Hello world!</h1>')

  console.log(markdown2)
}

function getArticle() {
   const read = require('node-readability');
  read('https://happycoding.io/examples/p5js/', function(err, article, meta) {
  // Main Article
  console.log(article.content);
  // Title
  console.log(`Title = ${article.title}`)
 
 return article 
  // HTML Source Code
  //console.log(article.html);
  // DOM
  //console.log(article.document); the
 
  // Response Object from Request Lib
  //console.log(meta);
 
  // Close article to clean up jsdom and prevent leaks
  //article.close();
  })
  
}
 
console.log(getArticle())
function readabilityTest() {

  // make a new function when you learn hos to pass vars into it
  var gfm = turndownPluginGfm.gfm

  var turndownService = new TurndownService({
    headingStyle: 'atx',
  })
  

  //turndownService
   // .remove(['script', 'style'])
   // .use(gfm)
  
  //var markdown = turndownService.turndown(article.content)
  
  //console.log('# ', article.title, '\n', markdown)
  //console.log(markdown)
  
  
  //let returnArticle = `# ${articleTitle} \n ${markdown}`;
 
 // console.log(returnArticle)
  
  
  // end function

}

//readabilityTest();

//makeGetRequest();

//let res = axios.get('https://www.toptal.com/nodejs/gatsby-js-node-js-static-site-generator-pt-1');
 
 // let data = res.data;
/*
console.log("fs2sń")
var readability = require("readability");
//var html = "<html>xxxxxxxxxxx</html>";
readability.parse(data, function(err, article){
  article = {
    title: "", // page title 
    text: "", //text content
    html: "", //pretty html content
    time: {
      title: 10, //parse title elapsed milliseconds
      article: 100 //parse content elapsed milliseconds
    }
  }
  
});

*/
//makeGetRequest()
readabilityTest()
//function nodeHtmlMarkdownTest(readabilityTest()) {
  //readabilityTest();
//  console.log('console log', readabilityTest)
//}

//nodeHtmlMarkdownTest()
