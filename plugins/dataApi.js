export default function(context,inject){
    const appId = "OO8AK7ZHDE"
    const apiKey = "a6e5c238101cc050e60d1b91f4d74161"
    const headers = {
        'X-Algolia-API-Key': apiKey,
        'X-Algolia-Application-Id': appId
    }

    inject('dataApi', {
        getProject,
        getActus,
        getContacts
    })

    async function getProject(projectID){
        try{
            return unwrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/projets/${projectID}`, {headers} ))
        } catch (error){
            return getErrorResponse(error)
        }
    }

    async function getActus(projectID){
        try{
            return unwrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/actus/${projectID}`, {headers} ))
        } catch (error){
            return getErrorResponse(error)
        }
    }

    async function getContacts(projectID){
        try{
            return unwrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/contacts/${projectID}`, {headers} ))
        } catch (error){
            return getErrorResponse(error)
        }
    }

    async function unwrap(response){
        const json = await response.json()
        const {ok, status, statusText} = response
        return {
            json,
            ok,
            status,
            statusText,
        }
    }

    function getErrorResponse(error){
        return {
            ok: false,
            status: 500,
            statusText: error.message,
            json: []
        }
    }
}