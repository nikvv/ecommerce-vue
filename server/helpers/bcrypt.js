const bcrypt = require('bcrypt')
const saltRound = 10

function encrypt(password){
    return bcrypt.hashSync(password,saltRound)
}
function compare (password,hash){
    return bcrypt.compareSync(password,hash)
}

module.exports = {encrypt,compare}