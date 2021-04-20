export default class B{

    constructor() {
        console.log('Class B was instanciated')
        this.init();
    }

    init(){
        // some ES 2015 for testing IE 11 polyfill
        const array = [1,2,3];
        Array.from(array).forEach(($item) => {
            console.log($item);
        });
    }
}
