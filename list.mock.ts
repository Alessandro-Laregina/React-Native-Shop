
export interface Data {
    id?: string,
    name: string,
    price: number,
    quantity: number,
    uri?: string,
    avail: boolean
}

export const DATA: Data[] = [
    {
        name: 'PS4',
        price: 200,
        quantity: 10,
        uri: 'http://assets.stickpng.com/images/585ea27bcb11b227491c350b.png',
        avail: true
    },
    {
        name: 'PS4 PRO',
        price: 300,
        quantity: 5,
        uri: 'https://gmedia.playstation.com/is/image/SIEPDC/ps4-pro-console-02-en-26oct18?$facebook$',
        avail: true
    },
    {
        name: 'PS5 DIGITAL',
        price: 400,
        quantity: 2,
        uri: 'https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-digital-edition-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$',
        avail: true
    },
    {
        name: 'PS5',
        price: 500,
        quantity: 0,
        uri: 'https://www.phoneshock.it/wp-content/uploads/2021/05/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20.png',
        avail: false
    },
    {
        name: 'XBOX ONE',
        price: 250,
        quantity: 20,
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Microsoft-Xbox-One-Console-wKinect.png/800px-Microsoft-Xbox-One-Console-wKinect.png',
        avail: true
    },
    {
        name: 'XBOX ONE X',
        price: 350,
        quantity: 10,
        uri: 'https://i.imgur.com/9jBTs7a.png',
        avail: true
    },
    {
        name: 'XBOX SERIES X',
        price: 500,
        quantity: 2,
        uri: 'https://www.notebookcheck.it/fileadmin/Notebooks/News/_nc3/Xbox_Series_X.png',
        avail: true
    },
    {
        name: 'XBOX SERIES S',
        price: 300,
        quantity: 10,
        uri: 'https://compass-ssl.xbox.com/assets/3e/87/3e87b313-21dd-452b-9f1e-09ecf2453542.png?n=0202999-CompleteControl_Console-D.png',
        avail: true
    },
];