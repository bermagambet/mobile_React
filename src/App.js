import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [breakTime, setBreakTime] = React.useState(false);

  React.useEffect(() => {
	  if (minutes === 2 && breakTime === false) {
		  setMinutes(0);
		  setSeconds(0);
		  setBreakTime(true);
	  } else if (minutes === 1 && breakTime === true) {
		setMinutes(0);
		setSeconds(0);
		setBreakTime(false);
	  }
  }, [breakTime, minutes])

  React.useEffect(() => {
	const interval = setInterval(() => setSeconds(seconds + 1), 1000);
	if (seconds === 60) {
		setMinutes(minutes + 1);
		setSeconds(0);
	}
	return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  const formatMinutes = () => {
	  let prefix = '0';
	  if (minutes < 10) {
		  return prefix.concat(minutes.toString());
	  } else {
		  return minutes.toString();
	  }
  }

  const formatSeconds = () => {
	let prefix = '0';
	if (seconds < 10) {
		return prefix.concat(seconds.toString());
	} else {
		return seconds.toString();
	}
	}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<p style={breakTime ? {color: 'red'} : {color: 'white'}}>{breakTime ? 'Break time:' : 'Time:'} {formatMinutes()}:{formatSeconds()}</p>
      </header>
    </div>
  );
}

export default App;
