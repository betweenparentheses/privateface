

// IMPORTANT
// _4-u2 is where the border lives for each timeline element!!!
// Can directly apply styles here to change border







// ONE OF THESE IS THE PARENT YOU ACTUALLY WANT
// _4-u2 mbm _5jmm _5pat _5v3q _2l4l _4-u8 _x72 _50nb
// <div class="userContentWrapper _5pcr _3ccb"

// For popup photos, <form class = "commentable_item" is another one to watch



// THIS IS THE SHARED-WITH IDENTIFIER
// <div class="_6a _29ee _4f-9 _43_1" data-hover="tooltip" id="u_ps_0_0_p"
//             aria-label="Shared with: Public">
// </div>





// takes a Facebook post object and finds the
// privacy settings inside it. Must be the actual outer
// div that has the border on it, which is class ._4u-2
// adds special classes that override border color

function setPrivacy(node){
  var privacyNode = node.querySelector('.fbStreamPrivacy');
  privacyNode = privacyNode || node.querySelector('div[aria-label*="Shared"]');
  if(!privacyNode){
    console.log("NO PRIVACY NODE");
    return;
  }
  console.log("Node is:")
  console.log(node);
  console.log("Privacy node inside is:")
  console.log(privacyNode);

  var ariaLabel = privacyNode.getAttribute('aria-label');
  console.log("XXXX ARIA LABEL XXXX");
  console.log(ariaLabel);

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
  }
};


function privateFace(node){

  // console.log(node);
  var borders = node.getElementsByClassName('_4-u2');
  Array.prototype.forEach.call(borders, function(el){
    setPrivacy(el);
  });
}



// MAIN SECTION

// runs once document is loaded

var body = document.body;
privateFace(body);

window.onload = function(){
  privateFace(body);

  setInterval(function(){
    privateFace(body);
  }, 7000);
};


