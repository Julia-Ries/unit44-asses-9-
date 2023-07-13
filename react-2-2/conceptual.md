### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
    React Router is a JS framework that lets us handle client and server side routing in React applications. It allows single-page appliccations that navigate without refreshing the page.Also allows to use browswer history features while preserving the right application view.



- What is a single page application?
    Sites that exclusively use client-side routing are single page applications. They dynamically rewrite the web page instead of loading an entire new page.



- What are some differences between client side and server side routing?
    The biggest difference is that server side routing needs to keep making requests to the server in order for the application to rerender but the client side does not. Client side routing handles mapping between URL bar and page user sees via browser rather than via server.
    Client-side Routing: Potentially improved UI/UX, More modern architecture, Potentially worse SEO
    
    Server-side Routing: Page reload with every URL change, More traditional architecture, Potentially better SEO



- What are two ways of handling redirects with React Router? When would you use each?
    Using the <Redirect> component which is useful for "you shouldnt have gotten here, go here instead" or calling .push method on the history object (useful for "you finished this, now go here")



- What are two different ways to handle page-not-found user experiences using React Router? 
    You can use React Router's <Switch /> and add the NotFound componenet at the bottom of the <Route/> declarations.


- How do you grab URL parameters from within a component using React Router?
    The useParams hook stores info on the URL paramaters. 



- What is context in React? When would you use it?
    Context is universal data across your application and is accessible across all components. React context provides data to components no matter how deep they are in the components tree. The context is used to manage global data, e.g. global state, theme, services, user settings, and more


- Describe some differences between class-based components and function
  components in React.
  A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). A class component requires you to extend from React. Component and create a render function that returns a React element. There is no render method used in functional components.
  
  

- What are some of the problems that hooks were designed to solve?
Hooks are a new addition in React 16.8.
They let you use state and other React features without writing a class.
Hooks are functions that let you “hook into” React state and lifecycle features from function components.
Hooks don’t work inside classes — they let you use React without classes.
