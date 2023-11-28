import { useState, useEffect } from 'react'

export function useCounter(seconds) {
    const [counter, setCounter] = useState(seconds)
    const [doSomething, setDoSomething] = useState(false)
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter - 1);
        }, 1000)

        const timer = setTimeout(() => {
            clearInterval(interval);
            setDoSomething(true);
        }, seconds * 1000)
        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        }
    }, [doSomething])

    return { counter, doSomething }
}