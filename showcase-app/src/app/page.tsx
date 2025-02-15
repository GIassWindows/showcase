"use client";
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api')
        .then((res) => res.text())
        .then((data) => setData(data));
  }, []);

  return (
      <div>
        <h1>Spring Boot testing</h1>
        <p>Data from Spring Boot: {data}</p>
      </div>
  );
}