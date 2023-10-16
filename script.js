class WorldCurrency {
    constructor(apiURL) {
        // Initialize class properties with provided parameters
        this.apiURL = apiURL;

        // Initialize properties for weather data, setting them as 'Empty' initially
        this.EURUSD = 'Empty';
        this.EURGBP = 'Empty';
        this.GBPUSD = 'Empty';
        this.USDJPY = 'Empty';
        this.AUDUSD = 'Empty';
        this.USDCHF = 'Empty';
        this.NZDUSD = 'Empty';
        this.USDCAD = 'Empty';
        this.USDZAR = 'Empty';
    }

    // Asynchronous function to fetch currencyation coordinates using geocoding
    async getCurrency() {
        // Update the text content in the UI
        this.updateText();


        const response = await fetch(apiURL);
        let data = await response.json();
        console.log(data);

        if (data.length > 0) {
            // If coordinates are available, store them in instance variables
            this.EURUSD = data.quotes;
            // this.longitude = data[0].lon;
        }

    }

    // Update the text content in the UI based on stored  data
    updateText() {
        document.querySelector('.EURUSD').textContent = this.EURUSD;
        document.querySelector('.EURGBP').textContent = this.EURGBP;
        document.querySelector('.GPBUSD').textContent = this.GPBUSD;
        document.querySelector('.USDJPY').textContent = this.USDJPY;
        document.querySelector('.AUDUSD').textContent = this.AUDUSD;
        document.querySelector('.USDCHF').textContent = this.USDCHF;
        document.querySelector('.NZDUSD').textContent = this.NZDUSD;
        document.querySelector('.USDCAD').textContent = this.USDCAD;
        document.querySelector('.USDZAR').textContent = this.USDZAR;
    }
}

// Constants for api URLs, etc
const apiURL = "http://apilayer.net/api/live?access_key=4d296dd50a0821fab30c219b11fdafbb&pairs=EURUSD";


// Create an instance of WorldCurrency with the provided parameters
const currency = new WorldCurrency(apiURL);

// Perform currencyation and weather checks asynchronously
currency.getCurrency()

.catch(error => console.error(error));
