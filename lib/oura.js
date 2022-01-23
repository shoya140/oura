import axios from 'axios'

const fetchReadinessData = async () => {
  const res = await axios.get(
    `https://api.ouraring.com/v1/readiness?access_token=${process.env.OURA_ACCESS_TOKEN}`
  )
  // Return only the data of the last one day.
  return res.data.readiness.slice(-1).pop()
}

const fetchSleepData = async () => {
  const res = await axios.get(
    `https://api.ouraring.com/v1/sleep?access_token=${process.env.OURA_ACCESS_TOKEN}`
  )
  // Return only the data of the last one day.
  return res.data.sleep.slice(-1).pop()
}

export { fetchReadinessData, fetchSleepData }
