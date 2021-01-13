1. Import HTTP Client in your Villager Service and inject the http client in the constructor (private http: HttpClient)
2. Create a method in the service called getVillagers()
3. Use the HTTP Client to call http://acnhapi.com/v1/villagers/
4. Map the response from the HTTP client to match our Villager[] interface
5. Set this.villagers = the mapped response.
