## Why class method sometimes doesn’t have access to ‘this’? How to solve it?
- In JavaScript, the value of this is determined by how a function is called, not where it is defined. When class methods are passed as callbacks (like event handlers), they lose their original context and this becomes undefined.

Solutions:

Bind methods in the constructor

Use arrow function class properties

Use inline binding (not recommended for performance)

Use arrow functions in render (can cause performance issues)
## Explain what lifecycle method is in simple and clear way.
- Lifecycle methods are special methods in class components that automatically execute at specific phases of a component's existence. They allow you to run code at precise moments: when a component is created, updated, or destroyed. These methods provide hooks into the component's birth, growth, and death cycle, enabling you to manage side effects, optimize performance, and clean up resources.
## When was functional components introduced? What’s the difference between class and functional components?
- Timeline:

React 0.14 (2015): Functional components introduced as stateless components

React 16.8 (2019): Hooks introduced, enabling state and lifecycle features in functional components

Class vs Functional Components Differences
Before Hooks:

Class components had state and lifecycle methods

Functional components were stateless and presentational only

After Hooks:

Syntax: Class components use ES6 classes; functional components use functions

State Management: Class components use this.state and this.setState(); functional components use useState hook

Lifecycle: Class components use lifecycle methods (componentDidMount, etc.); functional components use useEffect hook

this Binding: Class components require this binding; functional components have no this context

Code Structure: Class components are more verbose; functional components are more concise

Modern Recommendation: Functional components with hooks are now the preferred approach

Mental Model: Class components use imperative lifecycle thinking; functional components use declarative effects thinking