import { TimeLine, Animation } from './animation';
import { easeIn } from './ease';
let tl = new TimeLine();

tl.add(new Animation(document.querySelector("#el").style, 'transform', 0, 500, 2000, 0, easeIn, v => `translateX(${v}px)`));
document.querySelector("#el2").style.transition = '2s ease-in';
document.querySelector("#el2").style.transform = 'translateX(500px)';

document.querySelector("#pause-btn").addEventListener("click", ()=>tl.pause());
document.querySelector("#resume-btn").addEventListener("click", ()=>tl.resume());

tl.start()
