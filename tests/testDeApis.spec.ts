import { test, expect, request, Page } from '@playwright/test';
import { log } from 'console';

test('Probando Api con metodo GET', async ({ request }) => {
    
    const responseApi = await request.get("https://reqres.in/api/users?page=2")
    await expect(responseApi.status()).toBe(200)

    console.log(await responseApi.json());
    
    const responseJson = await responseApi.json()

    console.log("la respuesta que estoy consiguiente es " + responseJson.data[0].id)
    
})

test('Probando Api con metodo Post', async ({ request }) => {
    
    const responseApi = await request.post("https://reqres.in/api/users",{
        data:{
            "name": "TOTHINO",
            "job": "ASDESQ"
        },

    })
    expect(responseApi.status()).toBe(401)
    
})


test('Probando una api de pokemon', async ({ request, page }) => {
    
    const responseApi2 = await request.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    
    const responseApiPOkemon = await responseApi2.json()

    console.log(responseApiPOkemon.results[0].name);

    const urlPokeApi = responseApiPOkemon.results[0].url
    console.log(urlPokeApi);
    
    await expect(urlPokeApi).toBe("https://pokeapi.co/api/v2/pokemon/1/");

    await page.goto(urlPokeApi)

})
