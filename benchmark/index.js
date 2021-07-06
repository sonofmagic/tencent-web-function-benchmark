const path = require('path')

const fs = require('fs')

const autocannon = require('autocannon')

const printResult = require('autocannon/lib/printResult')

const { checkPathAndMkdir, wait, stripAnsi } = require('./util')
const queue = require('./req-queue')
const connectionsArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// const connectionsArray = [10]
;(async () => {
  try {
    const duration = 10

    for (const connections of connectionsArray) {
      // const connections = 60
      const dirPath = path.join(
        process.cwd(),
        duration.toString(),
        `/${connections}connections`
      )
      checkPathAndMkdir(dirPath)

      const summaryFilePath = path.join(dirPath, '/summary.md')
      const ws = fs.createWriteStream(summaryFilePath, {
        encoding: 'utf-8'
      })
      for (const q of queue) {
        // const reportOutputPath = path.join(dirPath, `/${q.name}.html`)

        const result = await autocannon({
          url: q.url,
          duration,
          connections
        })

        const strResult = printResult(result, {
          outputStream: process.stderr,
          renderResultsTable: true,
          renderLatencyTable: true
        })

        ws.write(q.name)
        ws.write('\r\n')
        ws.write(stripAnsi(strResult))
        ws.write('\r\n'.repeat(2))
        console.log(
          `[${connections} connections]: ${q.name}·····················OK`
        )
        // const report = reporter.buildReport(result) // the html structure
        // reporter.writeReport(report, reportOutputPath, (err, res) => {
        //   if (err) console.error('Error writting report: ', err)
        //   else console.log('Report written to: ', reportOutputPath)
        // })
        await wait()
      }
      ws.end()
    }
  } catch (err) {
    console.error(err)
  }
})()
