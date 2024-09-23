React Real Time learnings

1. Context becomes null / restores to initial value if page refreshes.
2. useEffect works only after the component is loaded so setting a context there will also not work
3. To handle this issue we can store the required data in local storage and set it as an initial value for context.


3 ways of navigation in react

1. Using Link tag with to attribute
2. Making an object of useNavigate and navigate using the object
3. Using Navigate tag with to attribute in jsx return type with ternary condition
