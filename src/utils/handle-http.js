const handleHttp = async (url, options = { method: 'GET'}) => {
    //console.log(options)

    try {
        const res = await fetch(url, options)

        if (!res.ok) {
            throw new Error('No se pudieron obtener los datos')
        }

        const data = await res.json()

        return data

    } catch (error) {
        console.error(error)
        return []
    }

}

export default handleHttp