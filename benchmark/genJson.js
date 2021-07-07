const fs = require('fs')
const path = require('path')
const { Decimal } = require('decimal.js')

const legendData = [
  'event-node10',
  'event-node12',
  'web-node10',
  'web-node12',
  'web-custom-image-node10',
  'web-custom-image-node12',
  'web-custom-image-node14',
  'web-custom-image-node16'
]
const connectionsArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// const map = {
//   ReqPerSec: {
//     data: []
//   },
//   BytesPerSec: {
//     data: []
//   },
//   Latency: {
//     data: []
//   }
// }
const basePath = path.resolve(process.cwd(), '10')

const obj = legendData.reduce((acc, cur) => {
  acc[cur] = {
    ReqPerSec: {
      data: []
    },
    BytesPerSec: {
      data: []
    },
    Latency: {
      data: []
    }
  }
  return acc
}, {})

for (const connection of connectionsArray) {
  const summary = fs.readFileSync(
    path.resolve(basePath, `${connection}connections/summary.md`),
    {
      encoding: 'utf-8'
    }
  )
  const p = summary.split('\n').reduce((acc, cur) => {
    if (!cur.includes('errors')) {
      acc.push(cur)
    }
    return acc
  }, [])

  for (let index = 0; index < legendData.length; index++) {
    const x = legendData[index]
    const r = index * 53
    const LatencyRow = p[r + 4]
    // while (!/\d+/.test(LatencyRow)) {
    //   r++
    //   LatencyRow = p[r + 4]
    // }
    const ReqPerSecRow = p[r + 9]
    const BytesPerSecRow = p[r + 11]

    const AvgLatency = LatencyRow.split('│')[6]

    const AvgReqPerSec = ReqPerSecRow.split('│')[6]

    const AvgBytesPerSec = BytesPerSecRow.split('│')[6]
    const map = obj[x]
    map.Latency.data.push(parseFloat(AvgLatency))
    map.ReqPerSec.data.push(parseFloat(AvgReqPerSec))
    const part = AvgBytesPerSec.trim().split(' ')
    const unit = part[1].toLocaleLowerCase()
    let value = parseFloat(part[0])
    if (unit === 'mb') {
      value = new Decimal(value).mul(1024).toNumber()
    }
    map.BytesPerSec.data.push(value)

    console.log(AvgLatency, AvgReqPerSec, AvgBytesPerSec)
  }
}

console.log(obj)

fs.writeFileSync(path.resolve(basePath, 'summary.json'), JSON.stringify(obj), {
  encoding: 'utf-8'
})
