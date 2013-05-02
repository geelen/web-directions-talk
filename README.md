# Javascript's Slightly Stricter Mode

From the [Web Directions Code](http://code13melb.webdirections.org/#JulioCesarOdy) page:

> "use strict";
> 
> You might have seen someone else type in this magical incantation at the top of a file. Maybe you’ve seen it in an open-source library. Maybe you first used it when Yeoman generated it for you (hint: I did). In this short, sharp session, we’ll cover what Strict Mode really is, when to use it, why you probably want to, and how to do so safely.
> 
> _Glen Maddern is a reformed backend developer, coming around once he realised that the internet was a Cool Place™ where people do Interesting Things™. So he helped start the super awesome movie review site Goodfilms. Now he works on making it the coolest, most interesting and most internet-famous movie site of all._

## View the Slides

If you want to relive the wonder, hit up http://geelen.github.io/web-directions-talk (you'll need Chrome, and want a fast connection - there are 20Mb+ of gifs in there). If you don't have Chrome but want to check the slides, you can download a PDF here: http://d.pr/f/1Z4q

## Further Reading

* [Understanding JavaScript Function Invocation and “this” - Yehuda Katz](http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/)
* [Transitioning to Strict Mode - MDN](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode/Transitioning_to_strict_mode)
* [Strict Mode - MDN](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode?redirectlocale=en-US&redirectslug=JavaScript%2FStrict_mode)
* [Your browser's Strict Mode compatibility - Kangax](http://kangax.github.io/es5-compat-table/strict-mode/)
* [ES5 Compatibility Table (inc Strict Mode) - Kangax](http://kangax.github.io/es5-compat-table/)

## Run the tests!

Dependencies: `npm`, `PhantomJS`
    
    git clone https://github.com/geelen/web-directions-talk.git
    npm install -g yo karma
    karma start
