import React, { Component } from 'react';
import './App.css';

class App extends Component {
	addToHome() {
		// Show the prompt
		let { deferredPrompt } = window;
		deferredPrompt.prompt();
		// Wait for the user to respond to the prompt
		deferredPrompt.userChoice
			.then((choiceResult) => {
				if (choiceResult.outcome === 'accepted') {
					console.log('User accepted the A2HS prompt');
				} else {
					console.log('User dismissed the A2HS prompt');
				}
				deferredPrompt = null;
			});
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Experimenting with Desktop PWAs
          </h1>
		  <button onClick={this.addToHome}>Add to Home Screen</button>
		  <a href="https://developers.google.com/web/progressive-web-apps">PWAs</a>
		  <a href="https://developers.google.com/web/progressive-web-apps/desktop">Desktop PWAs</a>
		  <a href="https://developers.google.com/web/fundamentals/app-install-banners/">App install banners</a>
		  <a href="chrome://flags/">Chrome Flags</a>
        </header>
      </div>
    );
  }
}

export default App;
