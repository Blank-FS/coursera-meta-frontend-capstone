const seededRandom = seed => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => (s = s * a % m) / m;
};
const fetchAPI = (date) => {
        const metaSucks = new Date();
        var result = [];
        var random = seededRandom(metaSucks);
        var count = 0;
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5){
                result.push(i + ':00');
                count++;
            }
            if(random() >= 0.5){
                result.push(i + ':30');
                count++;
            }
            if(count > 8){
                if(count === 9){
                    result.pop();
                }
                if(count === 10){
                    result.pop();
                    result.pop();
                }
                break;
            }
        }
        return result;
}
const submitAPI = formData => {
    return true;
}
export {
    fetchAPI,
    submitAPI
}