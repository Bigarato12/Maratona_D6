const express = require("express");
const apisauce = require('apisauce')
const routes = express.Router();

const api = apisauce.create({ baseURL: 'http://172.21.86.186:5000' });


routes.post("/echo", async (req, res) => {
    const echo = req.body.echo;
    return res.send({ echo });
});

//8AB_2Z9BMs4U7Eh9RNbBK527ssYkHzyIJblS3Qt_aOGe
const token = 'eyJraWQiOiIyMDIwMTEyMTE4MzQiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC01NTAwMDhGWUZIIiwiaWQiOiJJQk1pZC01NTAwMDhGWUZIIiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiMzdlZTAzY2UtZDA1OC00YWQ3LWExNDgtMzUxY2FjYmMyMmE5IiwiaWRlbnRpZmllciI6IjU1MDAwOEZZRkgiLCJnaXZlbl9uYW1lIjoiTHVjYXMiLCJmYW1pbHlfbmFtZSI6Ik0iLCJuYW1lIjoiTHVjYXMgTSIsImVtYWlsIjoibHVjYXMuY2V6YXIubWFjaGFkb0BnbWFpbC5jb20iLCJzdWIiOiJsdWNhcy5jZXphci5tYWNoYWRvQGdtYWlsLmNvbSIsImFjY291bnQiOnsidmFsaWQiOnRydWUsImJzcyI6IjlhOWExYTcwY2Y5NDQwMTRiZTM2ZDFmZGI2MTc3MjdiIiwiZnJvemVuIjp0cnVlfSwiaWF0IjoxNjA3MTg4MzI5LCJleHAiOjE2MDcxOTE5MjksImlzcyI6Imh0dHBzOi8vaWFtLmNsb3VkLmlibS5jb20vaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.iVpflsBl1ZoulutY31wqyD7SUzbzEzrgyDnHJzZpbCD6_5btdtfZyu6-niss4PuZFXxBOYXlXkKL1GPAgnClQi_kRFavTi_fpxOwD-zbC_l1Jw52TmoGQvhahf7-lpWSItsLW8v_Y2vtViVNNrcnjySpIjjNCXD0JO9bYiNomWw-Yy_I6e_rOH8ujwSW77MXFOFWYxKYeZb6ZI8Kze8ZmkNJfEjMK3ZUs-W7SIlmGQQgchk_oQyM6jca06gYu2msrOpxWmuCDfK3ZcnbvPdJhEsOtVL4RnsjNl7W5pgB27qKvVRE8mZste6ujh6fxTXMqVA5Dy0fjCMNEVMJ2snFMQ'
routes.get('/envia', async (req, res) => {
    const response = await api.post('/submit', {
            "email": "contato.joaobigarato1@gmail.com",
            "assistantId": "7332dfc0-a1cd-42f2-8053-710a94863d82",
            "url": "https://api.us-south.assistant.watson.cloud.ibm.com/instances/c344f301-3f99-4a6f-b8ab-269ae6e3718a",
            "skillId": "3bdc1628-867d-420c-87de-099259ee3f88",
            "apiKey": "rx7B1FY2pF7lQiLKwUfdZl14ZeX1kVUWRV19k7XlR_PR",
            "submitConfirmation": false
        
    })
    return res.send(response.data);
})
module.exports = routes;