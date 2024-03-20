//worker.js
class Worker {

    constructor(config) {
        this.config = config;
    }

    doWork(params) {
        if(params.propA == 1) {
            workA()
        }
        else if(params.propA == 2) {
            //implB
        }
        else {
            //no impl
        }
    }
}

//main.js
worker = new Worker(config);
worker.doWork(paramsA)
worker.doWork(paramsB)

if(statA) {
    //propA=1
}