const h1 = document.querySelectorAll('h1')
const span = document.querySelectorAll('span')
const strong = document.querySelectorAll('strong')

async function usersData() {
    try {
        const response = await api.get('/users')

        for (let i = 0; i < response.data.length; i++) {
            const nome = response.data[i].name
            const email = response.data[i].email
            const phone = response.data[i].phone

            h1[i].textContent = nome
            span[i].textContent = email
            strong[i].textContent = phone

            console.log(h1, span, strong)
        }

    } catch (error) {
        console.log(error)
    }
}

usersData()
