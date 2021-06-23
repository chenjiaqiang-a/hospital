import server from './server'
import url from './serverAPI.config'

export function loginAuth(username, password) {
    let data = new FormData()
    data.append('grant_type', 'password')
    data.append('client_id', "client01")
    data.append('client_secret', "client01-secret")
    data.append('username', username)
    data.append('password', password)
    data.append('scope', "all")

    return server({
        url: url.auth,
        method: "post",
        dataType: "form",
        data: data
    })
}

export function getBooks() {
    const accessToken = localStorage.getItem('__config_center_token')
    return server({
        url: url.books,
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken,
        }
    })
}