/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { fetchReadinessData } from 'lib/oura'

export default async (req, res) => {
  const data = await fetchReadinessData()
  res.status(200).json(data)
}
