export default (CDNUrl, name) => new Promise((resolve) => {
    const dom = document.createElement('script');
    dom.src = CDNUrl;
    dom.type = 'text/javascript';
    dom.onload = () => {
        resolve(window[name]);
    };
    document.head.appendChild(dom);
});
