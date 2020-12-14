var currentPrice = new XMLHttpRequest();

currentPrice.open('GET', 'https://api.gdax.com/products/BTC-USD/book', true);
currentPrice.onreadystatechange = function(){
  if(currentPrice.readyState == 4){
    var ticker = JSON.parse(currentPrice.responseText);
    var price = ticker.bids[0][0];
    document.getElementById('btc').innerHTML = "$" + price;
  };
};
currentPrice.send();