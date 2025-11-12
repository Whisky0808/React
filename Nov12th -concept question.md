What makes an application a SPA?
A Single Page Application (SPA) loads only one HTML page and dynamically updates content as users interact with it. Unlike traditional websites that reload entire pages, SPAs use JavaScript to render different views without page refreshes. This provides a smoother, more app-like user experience. Popular frameworks like React, Vue, and Angular are commonly used to build SPAs.

What is routing? Why do we need it?
Routing maps different URLs to specific components or views within a SPA. It enables users to bookmark pages, share links, and use browser navigation buttons effectively. Without routing, SPAs would feel like a single static page rather than a multi-page application. Routing also helps with SEO by allowing search engines to index different sections of the application.

What's the difference between the location and history objects?
The location object contains information about the current URL, including pathname, search parameters, and hash fragments. The history object manages the browser's session history and enables programmatic navigation between pages. While location tells you where you are now, history controls where you can go and maintains your navigation trail. Location is about current state, while history is about navigation control.

What is debounce and throttle? What are some use cases?
Debounce delays function execution until after a specified pause in calls, making it ideal for search inputs and form validation. Throttle limits function execution to once per time interval, perfect for scroll events and resize handlers. Both techniques improve performance by reducing unnecessary function calls. Common use cases include search suggestions (debounce) and infinite scrolling (throttle).