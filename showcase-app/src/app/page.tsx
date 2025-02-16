"use client";
import { useEffect, useState } from 'react';

export default function Home() {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('/api/data')
            .then((res) => res.text())
            .then((data) => setData(data))
            .catch(() => setData("Error loading data"));
    }, []);

    return (
        <div>
            <h1>Spring Boot Testing</h1>
            <p>Data from Spring Boot: {data}</p>
        </div>
    );
}