import express from "express";
const app = express();

app.use(express.json());
const otp_store: Record<string, string> = {}

app.post('/get-otp', (req, res) => {
    const { email } = req.body
    if (!email)
        res.status(500).send("Email is Required")
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    otp_store[email] = otp
    console.log(`OTP for Email ${email} is ${otp}`)
    res.status(200).send("Otp Send To Your Registered Mail")
})

app.post('/reset-password', (req, res) => {
    const { email, otp, newpassword } = req.body
    if (!email || !otp || !newpassword)
        res.status(500).send("Email OTP and New Password Required To Continue")
    if (otp_store[email] === otp) {
        console.log(`password for Email ${email} Changed Successfully To ${newpassword}`)
        res.status(200).json({ message: "Password Changed Successfully" })
        delete otp_store[email]
    }
    else {
        res.status(500).json({ message: "Wrong Otp" })
    }

})

app.listen(3050, () => {
    console.log("Server Active on Port 3050")
})