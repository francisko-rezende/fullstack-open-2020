# 0.4: new note

## Exercise:

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

Here's my diagram:

![](https://www.websequencediagrams.com/files/render?link=Ssl5cngLP03pdvohSWdvJe4SEsoI7o9Kxb7xYunY5NB3yFYfzn4VKE4Kt684QUQl)

And the code to get the diagram from [web sequenced diagrams](https://www.websequencediagrams.com/):

```
title Exercise 0.4

browser-->server: Form data submitted through HTTP POST to https://studies.cs.helsinki.fi/exampleapp/new_note
server->browser: HTTP Status code 302 (url redirect to reload the notes)
browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server->browser: HTML-code in the form of a document
browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->browser: main.css
browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server->browser: main.js


note over browser:
browser executes js-code (main.js)
that requests JSON data from server 
end note

browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->browser: [{"content":"HTML is easy","date":"2019-05-23T17:30:31.098Z"},...,{"content":"öh","date":"2020-09-01T20:48:57.505Z"}]

note over browser:
browser executes the event handler
that renders notes to display (same 
as multi-paged apps)
end note
```
# 0.5: Single page app

## Exercise:

Create a diagram depicting the situation where the user goes to the single page app version of the notes app at https://fullstack-exampleapp.herokuapp.com/spa.

## Solution:

Here's my diagram:

![](https://www.websequencediagrams.com/files/render?link=8SdUUVv6rGQ5iXBIGOuEbImlhAgECXa1inmCXNY1nY5XPDnJfjXmELP8xVhuvZ2s)

And the code to get the diagram from [web sequenced diagrams](https://www.websequencediagrams.com/):

```
title Exercise 0.5

browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server->browser: HTML-code
browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->browser: main.css
browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server->browser: spa.js

note over browser:
browser executes js-code (spa.js)
that requests JSON data from server 
end note

browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->browser: [{"content":"HTML is easy","date":"2019-05-23T17:30:31.098Z"},...,{"content":"joo","date":"2020-09-01T20:25:08.889Z"}]

note over browser:
browser creates executes the event handler
that renders notes to display the page
end note
```

# 0.6: New note

## Exercise:

Create a diagram depicting the situation where user creates a new note using the single page version of the app.

## Solution:


Here's my diagram:

![](https://www.websequencediagrams.com/files/render?link=LbO1D8ryoF0yTtXNzd89OCeZx9hrYJsogRsw1rbPGIIT6FbcnUlcV8GbZb0lIzXX)

And the code to get the diagram from [web sequenced diagrams](https://www.websequencediagrams.com/):

```
title Exercise 0.5

browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server->browser: HTML-code
browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->browser: main.css
browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server->browser: spa.js

note over browser:
browser executes js-code (spa.js)
that requests JSON data from server 
end note

browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->browser: [{"content":"HTML is easy","date":"2019-05-23T17:30:31.098Z"},...,{"content":"joo","date":"2020-09-01T20:25:08.889Z"}]

note over browser:
browser creates executes the event handler
that renders notes to display the page
end note
```