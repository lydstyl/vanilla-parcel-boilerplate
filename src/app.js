// import User from './components/User';
import Header from './components/Header';
import OriginalText from './components/OriginalText';
import './scss/app.scss';

const app = async () => {
  document.getElementById('header').innerHTML = Header();
  // document.getElementById('user').innerHTML = await User();
  document.getElementById('original-text').innerHTML = OriginalText();
};

// Load app
app();

console.log('yoo');
