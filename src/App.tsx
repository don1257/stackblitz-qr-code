import * as React from 'react';
import './style.css';
import Card from './Card/Card'

export default function App() {
  return (
    <div>
      <Card
        title = 'Improve your front-end skills by building projects'
        description = 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
      ></Card>
    </div>
  );
}
