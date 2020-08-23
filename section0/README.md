# 0.4: new note

## Question:

In chapter Loading a page containing JavaScript - revised the chain of events caused by opening the page https://fullstack-exampleapp.herokuapp.com/notes is depicted as a sequence diagram

The diagram was made using websequencediagrams service as follows:

```
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes
server-->browser: HTML-code
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server-->browser: main.css
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note
```

Create a similar diagram depicting the situation where the user creates a new note on page https://fullstack-exampleapp.herokuapp.com/notes by writing something into the text field and clicking the submit button.

If necessary, show operations on the browser or on the server as comments on the diagram.

The diagram does not have to be a sequence diagram. Any sensible way of presenting the events is fine.

All necessary information for doing this, and the next two exercises, can be found from the text of this part. The idea of these exercises is to read the text through once more, and to think through what is going on where. Reading the application code is not necessary, but it is of course possible.

## Solution:

```
title Exercise 0.4

browser-->server: Form data submitted through HTTP POST to https://fullstack-exampleapp.herokuapp.com/new_note
server->browser: HTTP Status code 302 (a url redirect)
browser-->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes
server->browser: HTML code that structures the page
browser-->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server->browser: main.css
browser-->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
server->browser: main.js


note over browser:
browser executes js-code (main.js)
that requests JSON data from server 
end note

browser-->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
server->browser: [{"content":"HTML is easy","date":"2019-05-23T17:30:31.098Z"},...,{"content":"eggcellent!","date":"2020-08-23T16:26:08.263Z"}]

note over browser:
browser executes the event handler
that renders notes to display (same 
as when the app is not single-paged)
end note
```

![](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgRXhlcmNpc2UgMC40Cgpicm93c2VyLS0-c2VydmVyOiBGb3JtIGRhdGEgc3VibWl0dGVkIHRocm91Z2ggSFRUUCBQT1NUIHRvIGh0dHBzOi8vZnVsbHN0YWNrLWV4YW1wbGVhcHAuaGVyb2t1YXBwLmNvbS9uZXdfbm90ZQoAXwYtPgBwBzoATAZTdGF0dXMgY29kZSAzMDIgKGEgdXJsIHJlZGlyZWN0KQCBExMAgQUFR0VUAFktb3RlcwBvFE1MAHYGdGhhdCBzdHJ1Y3R1cmVzIHRoZSBwYWdlADlHbWFpbi5jcwBwEwARCQAeS2oAUBhqcwoKCm5vdGUgb3ZlciAAgwMIAIQDCCBleGVjdXRlcyBqcy0Agw4FKABJBykKAIIcBXJlcXVlc3RzIEpTT04AhCQGZnJvbSAAhDsGIAplbmQgAINoBQCCcEdkYXRhLmpzb24AhCwSW3siY29udGVudCI6IgCDQwVpcyBlYXN5IiwiZGF0ZSI6IjIwMTktMDUtMjNUMTc6MzA6MzEuMDk4WiJ9LC4uLiwANQxlZ2djZWxsZW50IQA0DDIwLTA4ADsFNjoyNjowOC4yNjNaIn1dAIIgJnRoZSBldmVudCBoYW5kbGVyAII-CG5kZXJzAIIlBXMgdG8gZGlzcGxheSAoc2FtZSAKYXMgd2hlbgCEfwVhcHAgaQAmBSBzaW5nbGUtcGFnZWQpAIJhCg&s=default)