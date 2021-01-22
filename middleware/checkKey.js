//wouldnt be hardcoded like this 
const apiKeys = new Map()
apiKeys.set('12345')
apiKeys.set('123456')


const blackList = ['123456']

const checkKey = (req, res, next) => {
    // you can require the api key however you see fie, maybe by the query or the specific x-api-key of the api 
    const key = req.query.key || req.get('X-API-KEY')

    if(apiKeys.has(key) && !blackList.includes(key)){
        return next()
    } else if(blackList.includes(key)){
        res.status(401).json({
            message: "You can hack me bro contact me for more info, if your not doing that "
        })
    } else {
        res.status(401).json({ message: "Invalid Api Key" })
    }
}

module.exports = checkKey