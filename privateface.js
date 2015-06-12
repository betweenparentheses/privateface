

// IMPORTANT
// _4-u2 is where the border lives for each timeline element!!!
// Can directly apply styles here to change border



// For popup photos, <form class = "commentable_item" is another one to watch




// takes a Facebook post object and finds the
// privacy settings inside it. Must be the actual outer
// div that has the border on it, which is class ._4u-2
// adds special classes that override border color

function setPrivacy(node){
  var privacyNode = node.querySelector('.fbStreamPrivacy');
  privacyNode = privacyNode || node.querySelector('div[aria-label*="Shared"]');
  if(!privacyNode){ return; }

  var ariaLabel = privacyNode.getAttribute('aria-label');
  if(!ariaLabel){ return; }

  if (ariaLabel.match("Public")){
    node.classList.add('public-post');
  } else if(ariaLabel.match("Only Me")){
    console.log("private!");
    node.classList.add('private-post');
  } else if (ariaLabel.match("friends")){
    console.log("friends")
    node.classList.add('friends-post');
  } else if (ariaLabel.match("Custom")){
    node.classList.add('custom-post');
  } else if (ariaLabel.match("Members of")){
    node.classList.add('group-post')
  }
};


function privateFace(node){

  var borders = node.getElementsByClassName('_4-u2');
  Array.prototype.forEach.call(borders, function(el){
    setPrivacy(el);
  });

}






// MAIN SECTION

// run as soon as you've loaded
privateFace(document.body);

// run as soon as everything's loaded
window.onload = function(){
  privateFace(document.body);
};


// run any time the DOM adds new children to the document.body
// throttled down to once a second
var throttled = false;
var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {

    // run if not throttled
    if(mutation.type==="childList" && !throttled) {

        privateFace(document.body);

        // throttle back the redraw
        throttled = true;
        setTimeout(function(){
          throttled = false;
        }, 200);
    }
  });
});

var config = { attributes: true, childList: true, characterData: true }
observer.observe(document.body, config);



