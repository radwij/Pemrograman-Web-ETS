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
        document.querySelector('.EURGBP').textContent = this.EURUSD;
        document.querySelector('.GPBUSD').textContent = this.EURUSD;
        document.querySelector('.USDJPY').textContent = this.EURUSD;
        document.querySelector('.AUDUSD').textContent = this.EURUSD;
        document.querySelector('.USDCHF').textContent = this.EURUSD;
        document.querySelector('.NZDUSD').textContent = this.EURUSD;
        document.querySelector('.USDCAD').textContent = this.EURUSD;
        document.querySelector('.USDZAR').textContent = this.EURUSD;
    }
}

// Constants for api URLs, etc
// const apiURL = "http://apilayer.net/api/live?access_key=4d296dd50a0821fab30c219b11fdafbb&pairs=EURUSD,EURGBP,GBPUSD,USDJPY,AUDUSD,USDCHF,NZDUSD,USDCAD,USDZAR";


// Create an instance of WorldCurrency with the provided parameters
const currency = new WorldCurrency(apiURL);

// Perform currencyation and weather checks asynchronously
currency.getCurrency()

.catch(error => console.error(error));
