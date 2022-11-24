## How to fetch data with React Hooks?

```jsx
function App() {
    const [fact, setFact] = useState('No name');

    useEffect(() => {
        const fetchFact = async () => {
            const response = await fetch(
                `https://catfact.ninja/fact`
            );
            setFact (response.data)
        }
        
        fetchFact()
    }, []);

    return (
        <p> { fact } </p>
    );
}
```

**[Back to List of Questions](../React Interview Questions.md#core-react)**
