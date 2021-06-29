const eventSCFUrl = 'https://service-lqpo8cnh-1257725330.sh.apigw.tencentcs.com'

const webTypeSCFUrl =
  'https://service-00ohv7wp-1257725330.sh.apigw.tencentcs.com'

const webTypeCustomImageNode12 =
  'https://service-94y9c3qh-1257725330.sh.apigw.tencentcs.com'

const webTypeCustomImageNode14 =
  'https://service-h8xv1r41-1257725330.sh.apigw.tencentcs.com'

const queue = [
  {
    name: 'event',
    url: eventSCFUrl
  },
  {
    name: 'normal-web',
    url: webTypeSCFUrl
  },
  {
    name: 'custom-web-node12',
    url: webTypeCustomImageNode12
  },
  {
    name: 'custom-web-node14',
    url: webTypeCustomImageNode14
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
    for (const q of queue) {
      const reportOutputPath = path.join(process.cwd(), `${q.name}.html`)
      // connections 10
      // pipelining 1
      // duration 10
      const result = await autocannon({
        url: q.url
      })

      const report = reporter.buildReport(result) // the html structure
      reporter.writeReport(report, reportOutputPath, (err, res) => {
        if (err) console.err('Error writting report: ', err)
        else console.log('Report written to: ', reportOutputPath)
      })
      await wait()
    }
  } catch (err) {
    console.error(err)
  }
})()
