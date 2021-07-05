const eventSCFUrlNode10 =
  'https://service-0lctndet-1257725330.sh.apigw.tencentcs.com'
const eventSCFUrlNode12 =
  'https://service-a7gfk9kz-1257725330.sh.apigw.tencentcs.com'

const webTypeSCFUrlNode10 =
  'https://service-mml88olr-1257725330.sh.apigw.tencentcs.com'

const webTypeSCFUrlNode12 =
  'https://service-nxfqhjs9-1257725330.sh.apigw.tencentcs.com'

const webTypeCustomImageNode10 =
  'https://service-0h09ks4l-1257725330.sh.apigw.tencentcs.com'
const webTypeCustomImageNode12 =
  'https://service-94y9c3qh-1257725330.sh.apigw.tencentcs.com'

const webTypeCustomImageNode14 =
  'https://service-h8xv1r41-1257725330.sh.apigw.tencentcs.com'

const webTypeCustomImageNode16 =
  'https://service-2jglye19-1257725330.sh.apigw.tencentcs.com'
const queue = [
  {
    name: 'event-node10',
    url: eventSCFUrlNode10
  },
  {
    name: 'event-node12',
    url: eventSCFUrlNode12
  },
  {
    name: 'normal-web-node10',
    url: webTypeSCFUrlNode10
  },
  {
    name: 'normal-web-node12',
    url: webTypeSCFUrlNode12
  },
  {
    name: 'custom-web-node10',
    url: webTypeCustomImageNode10
  },
  {
    name: 'custom-web-node12',
    url: webTypeCustomImageNode12
  },
  {
    name: 'custom-web-node14',
    url: webTypeCustomImageNode14
  },
  {
    name: 'custom-web-node16',
    url: webTypeCustomImageNode16
  }
]

function wait (ts = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ts)
  })
}
const autocannon = require('autocannon')
const reporter = require('autocannon-reporter')
const path = require('path')

;(async () => {
  try {
    const duration = 20
    for (const q of queue) {
      const reportOutputPath = path.join(
        process.cwd(),
        duration.toString(),
        `/${q.name}.html`
      )
      // connections 10
      // pipelining 1
      // duration 10
      const result = await autocannon({
        url: q.url,
        duration
      })

      const report = reporter.buildReport(result) // the html structure
      reporter.writeReport(report, reportOutputPath, (err, res) => {
        if (err) console.error('Error writting report: ', err)
        else console.log('Report written to: ', reportOutputPath)
      })
      await wait()
    }
  } catch (err) {
    console.error(err)
  }
})()
