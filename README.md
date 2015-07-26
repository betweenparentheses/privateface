## PrivateFace

A Chrome plugin for displaying privacy settings more clearly on Facebook. Written and maintained by Michael Alexander.

Normally, when you look at your newsfeed, it's needlessly difficult to see at a glance the privacy settings of the posts that scroll by. It's easy to misunderstand those microscopic icons that explain who will see when you comment on which post. This plugin aims to fix that poor UX by garishly highlighting the outlines of every article on your newsfeed.

Codes exist currently for: Friends-locked, Public, Private, and Other(advertisements and special mailing lists).

[Link to Chrome Web Store](https://chrome.google.com/webstore/detail/privateface/ljiafphfipdffnefbnpmlembjpdhcehd)


### Technologies

Written entirely in vanilla JS using a MutationListener that watches when new elements enter the DOM.


#### TODOS

* Extend functionality to private timelines
* Extend coverage to photo comments.
* Use pub/sub pattern to allow toggling on and off via plugin button.
