body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #1c1c1c, #383838);
  color: #fff;
}

.container {
  text-align: center;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

#countdown {
  font-size: 2em;
  color: #ffea00; /* Yellow color for the countdown */
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black background */
  padding: 10px;
  border-radius: 10px;
}

.scrolling-text {
  font-size: 1.5em;
  color: #00ff00; /* Green color for the scrolling text */
  overflow: hidden;
  white-space: nowrap;
}

.scrolling-text span {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
