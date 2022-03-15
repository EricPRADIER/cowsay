import cowsay from 'cowsay';
import userInfo from '../information.js';


console.log(cowsay.say({
    text : `Hello I'm ${userInfo.name} from ${userInfo.campus} campus!`,
    e : "oO",
    T : "U "
}));

