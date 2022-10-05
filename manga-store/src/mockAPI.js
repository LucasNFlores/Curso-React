
const data = [
    {
        id: 1,
        title: "Tales of Demons and Gods",
        img: "https://otakuteca.com/images/books/cover/12956_TMOManga57fa9df9891b2.jpg",
        price: 300,
        detail: "Nie Li, el más fuerte Espiritista Demoníaco, en su vida pasada estuvo en la cima del mundo marcial, sin embargo, perdió la vida durante la batalla con él Sabio Emperador y sus bestias, al morir fue devuelto al pasado cuando tenía 13 años gracias a la ayuda del Libro Temporal del Demonio Espiritual y aunque en este momento él es el más débil de su clase con la ayuda de los vastos conocimientos que acumuló de su vida anterior, se transformara en un guerrero formidable.",
        stock: 10,
        category: "Manhua"
    },
    {
        id: 2,
        title: "Tensei Shitara Slime Datta Ken",
        img: "https://otakuteca.com/images/books/cover/5ff147d088f7c.jpg",
        price: 500,
        detail: 'Un hombre, que al tratar de salvar a su compañero de trabajo y su novia, fue apuñalado por un ladrón que escapaba. Mientras moría desangrado escuchó una voz extraña. Esta voz escuchó su lamento de haber muerto virgen y a causa de eso le dio la Habilidad Única "Gran Sabio" ¿Fue esto una burla? Ahora él ha reencarnado como un Slime en otro mundo, ¿Será este el inicio de una emocionante aventura?',
        stock: 3,
        category: "Manga"
    },
    {
        id: 3,
        title: "Death Candle",
        img: "https://otakuteca.com/images/books/cover/5d97c4997ddca.jpg",
        price: 100,
        detail: "Hanami Mei, quien falló en su intento número 501 para suicidarse, hizo click en una página web que se decía que ayudaba a las personas a fallecer. Como resultado, después de cometer un error, Hanami Mei y el dios de la muerte Tánatos firmaron un contrato y se convirtió en su sustituta. Su objetivo es restaurar la apariencia original del dios de la muerte, en el viaje de la colección de almas. ¿Puedes descubrir los secretos de la vida y la muerte?",
        stock: 20,
        category: "Manhua"
    }
]

export function getArticles() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 1500)
    })
}