const accounts = [
    {
        id: 1, 
        username: "duong01",
        role: 'user'
    },
    {
        id: 2,
        username: 'tuong01',
        role: 'admin'
    }
]

module.exports = {
    getAccounts: (req, res)=> {
        return res.status(200).json(accounts)
    },
    createAccount: (req, res) =>{
        const body = req.body;
        body.id = Date.now();
        body.role = 'user';
        accounts.push(body);

        return res.status(201).json(body);
    }
}