import './sub';
import './app.scss';


const init = async () => {
  console.log('this is a main js file');
  await asyncFn();
}

const asyncFn = async () => {
  console.log("I'm async functon");
}

init();
