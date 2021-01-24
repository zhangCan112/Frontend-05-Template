import {createElement, Component} from './framework';
import { Carousel } from './carousel';

let d = [
    {
        img: 'https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg',
        url: 'https://time.geekbang.org'
    },
    {
        img: 'https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg',
        url: 'https://time.geekbang.org'
    },
    {
        img: 'https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg',
        url: 'https://time.geekbang.org'
    },
    {
        img: 'https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg',
        url: 'https://time.geekbang.org'
    },
]

// document.body.appendChild(a)
let a = <Carousel src={d} 
onChange={e => console.log(e.detail.position)}
onClick={e => window.location.href = e.detail.data.url}
/>
a.mountTo(document.body)