self.onmessage = function(message)
{
    let sum = 0;
    for (let i=0; i < 10000; i++){
        sum += 1;
    }
    self.postMessage(sum);
}