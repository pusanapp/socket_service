
const sendPaidOrderNotif = async (req, res, next) => {
    const data = req.body
    req.io.emit('payment', data)
    res.send({
        status: true,
        send_data: data
    })
}
module.exports = {
    sendPaidOrderNotif
}
