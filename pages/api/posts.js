import { NextApiRequest, NextApiResponse } from "next";


export default function getAllPost(req, res) {
    if(req.method != 'GET') {
        res.status(500).json({'message': 'sorry we only accept GET request'});
    }
    res.json({hello:'world', method: req.method});
}