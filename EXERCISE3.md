1.  Import HTTPClient in the app module and add it to the imports array
2.  Import HTTP Client in your Villager Service and inject the http client in the constructor (private http: HttpClient)
3.  Create a method in the service called getVillagers()
4.  Use the HTTP Client to call http://acnhapi.com/v1/villagers/
5.  `console.log` the response from the HttpClient to see what the data looks like
6.  Map the response from the HTTP client to match our Villager[] interface
7.  Set this.villagers = the mapped response.
