class TimeObject {

    constructor() {
        this.resetTimeObject();

        this.integerCharRegex = /(\d{1,})(\D{1})/;
        this.integerCharRegexGlobal = /(\d{1,})(\D{1})/g; // 2nd group is char
        this.decimalCharRegex = /(\d{1,})(\.{0,1})(\d{0,})(\D{1})/; // 4th group is char
        this.decimalCharRegexGlobal = /(\d{1,})(\.{0,1})(\d{0,})(\D{1})/g;
    }

    setTime(inputString) {
        this.setUsingDecimal(inputString);
    }

    setUsingInteger(inputString) {
        this.resetTimeObject();
    }

    setUsingDecimal(inputString) {
        this.resetTimeObject();

        let globalMatches = inputString.toLowerCase().match(this.decimalCharRegexGlobal); // to lower to make parsing easier

        if(globalMatches != null) {
            // work through the global matches
            for(let i = 0; i< globalMatches.length; i++) {
                // switch on char
                let singleMatch = globalMatches[i].match(this.decimalCharRegex);
                let timeDiff = singleMatch[4];
                let numberInput = Number.parseFloat(singleMatch[1] + '.' + singleMatch[3]);

                switch (timeDiff) {
                    case 's': 
                        this.second += numberInput;
                        break;
                    case 'm': 
                        this.minute += numberInput;
                        break;
                    case 'h': 
                        this.hour += numberInput;
                        break;
                    case 'd': 
                        this.day += numberInput;
                        break;
                    case 'w': 
                        this.week += numberInput;
                        break;
                }
            }
        }
    }

    resetTimeObject() {
        this.second = 0; //s
        this.minute = 0; // m
        this.hour = 0; // h
        this.day = 0; // d
        this.week = 0; // w
    }
}