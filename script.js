class WorldCurrency {
    constructor(apiURL) {
        // Initialize class properties with provided parameters
        this.apiURL = apiURL;

        // Initialize properties for weather data, setting them as 'Empty' initially
        // this.EURUSD = 'Empty';
        // this.EURGBP = 'Empty';
        // this.GBPUSD = 'Empty';
        // this.USDJPY = 'Empty';
        // this.AUDUSD = 'Empty';
        // this.USDCHF = 'Empty';
        // this.NZDUSD = 'Empty';
        // this.USDCAD = 'Empty';
        // this.USDZAR = 'Empty';

        // Initialize properties for weather data, setting them as 'Empty' initially
        this.EURUSD = '1.051469';
        this.EURGBP = '0.867262';
        this.GBPUSD = '1.2124';
        this.USDJPY = '149.560385';
        this.AUDUSD = '0.628811';
        this.USDCHF = '0.904157';
        this.NZDUSD = '0.5888';
        this.USDCAD = '1.36685m';
        this.USDZAR = '19.007304';
    }

    // Asynchronous function to fetch currencyation coordinates using geocoding
    async getCurrency() {
        
        
        const response = await fetch(apiURL);
        let data = await response.json();
        console.log(data);
        
        if (data.length > 0) {
            // If coordinates are available, store them in instance variables
            this.EURUSD = data.quotes;
            // this.longitude = data[0].lon;
        }

        // Update the text content in the UI
        // this.updateText();
    }
    
    // Update the text content in the UI based on stored  data
    updateText() {
        document.getElementById('EURUSD').innerHTML = this.EURUSD;
        document.getElementById('EURGBP').innerHTML = this.EURGBP;
        document.getElementById('GBPUSD').innerHTML = this.GBPUSD;
        document.getElementById('USDJPY').innerHTML = this.USDJPY;
        document.getElementById('AUDUSD').innerHTML = this.AUDUSD;
        document.getElementById('USDCHF').innerHTML = this.USDCHF;
        document.getElementById('NZDUSD').innerHTML = this.NZDUSD;
        document.getElementById('USDCAD').innerHTML = this.USDCAD;
        document.getElementById('USDZAR').innerHTML = this.USDZAR;
    }
}

// Constants for api URLs, etc
const apiURL = "http://apilayer.net/api/live?access_key=4d296dd50a0821fab30c219b11fdafbb&pairs=EURUSD,EURGBP,GBPUSD,USDJPY,AUDUSD,USDCHF,NZDUSD,USDCAD,USDZAR";
// const apiURL = "http://apilayer.net/api/live?access_key=4d296dd50a0821fab30c219b11fdafbb&pairs=EURUSD";


// Create an instance of WorldCurrency with the provided parameters
const currency = new WorldCurrency(apiURL);

// Perform currencyation and weather checks asynchronously
currency.getCurrency()

.catch(error => console.error(error));
