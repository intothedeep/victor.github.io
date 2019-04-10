---
layout: post
title:  "Javascript ECMAScript6 Array"
date:   2019-04-10 16:24:00 +0900
categories: javascript es6 Array

---



- es5에서 Array Like 객체를 Array로 변환하는 방법

```javascript
const arrLike = document.getElementsByTagName('div');
const arr = Array.prototype.slice.call(arrLike);
```

- es6에서 Array Like 객체를 Array로 변환하는 방법

```javascript
const arrLike = document.getElementsByTagName('div');
let arr = [...arrLike]; // iterable할 경우에 
arr = Array.from();
```



Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]: https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/

