const express = require('express')
const fs = require('fs')
const { ethers } = require('ethers')

const erc721Address = '...'
const abi = require('./contracts/abi')

const app = express()
const port = 3000

const run = async () => {
	const provider = new ethers.getDefaultProvider(
		'https://dataseed.popcateum.org',
	)
	const NFT = new ethers.Contract(erc721Address, abi, provider)
	const names = fs.readdirSync('./json')
	const jsons = new Map()

	for (const name of names) {
		const jsonFile = fs.readFileSync(`./json/${name}`, 'utf8')
		jsons.set(name, JSON.parse(jsonFile))
	}

	app.get('/:id', async (req, res) => {
		const id = req.params.id
		const total = await NFT.totalSupply()
		if (Number(id) <= total.toNumber()) {
			res.status(200).json(jsons.get(id))
		} else {
			res.status(404).send('NO!')
		}
	})

	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	})
}

run()
