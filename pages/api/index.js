/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { fetchOuraData } from 'lib/oura'

export default async (req, res) => {
  const data = await fetchOuraData()
  res.status(200).json(data)
}
