// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectMongo from "../../src/lib/connectMongo"
import Posts from "../../src/models/Posts"

export default function handler(req, res) {
    switch (req.method) {
        case "GET":
            return getPosts(req, res)
        case "POST":
            return addPosts(req, res)
        default:
            return res.status(405).json({ error: "Method not allowed" })
    }
}

async function getPosts(req, res) {
    try {
        await connectMongo()
        const posts = await Posts.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

async function addPosts(req, res) {
    try {
        await connectMongo()
        const posts = await Posts.create(req.body)
        res.status(201).json(posts)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
