event-node10
┌─────────┬───────┬───────┬───────┬────────┬──────────┬──────────┬─────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%    │ Avg      │ Stdev    │ Max     │
├─────────┼───────┼───────┼───────┼────────┼──────────┼──────────┼─────────┤
│ Latency │ 31 ms │ 37 ms │ 71 ms │ 111 ms │ 44.67 ms │ 111.4 ms │ 3941 ms │
└─────────┴───────┴───────┴───────┴────────┴──────────┴──────────┴─────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Req/Sec   │ 809     │ 809     │ 1096    │ 1296    │ 1105.6  │ 166.34 │ 809     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Bytes/Sec │ 1.64 MB │ 1.64 MB │ 2.23 MB │ 2.63 MB │ 2.25 MB │ 338 kB │ 1.64 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴────────┴─────────┘

Req/Bytes counts sampled once per second.

┌────────────┬──────────────┐
│ Percentile │ Latency (ms) │
├────────────┼──────────────┤
│ 0.001      │ 28           │
├────────────┼──────────────┤
│ 0.01       │ 28           │
├────────────┼──────────────┤
│ 0.1        │ 29           │
├────────────┼──────────────┤
│ 1          │ 30           │
├────────────┼──────────────┤
│ 2.5        │ 31           │
├────────────┼──────────────┤
│ 10         │ 33           │
├────────────┼──────────────┤
│ 25         │ 35           │
├────────────┼──────────────┤
│ 50         │ 37           │
├────────────┼──────────────┤
│ 75         │ 41           │
├────────────┼──────────────┤
│ 90         │ 48           │
├────────────┼──────────────┤
│ 97.5       │ 71           │
├────────────┼──────────────┤
│ 99         │ 111          │
├────────────┼──────────────┤
│ 99.9       │ 2055         │
├────────────┼──────────────┤
│ 99.99      │ 3805         │
├────────────┼──────────────┤
│ 99.999     │ 3941         │
└────────────┴──────────────┘

11k requests in 10.02s, 22.5 MB read


event-node12
┌─────────┬───────┬───────┬───────┬────────┬──────────┬──────────┬─────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%    │ Avg      │ Stdev    │ Max     │
├─────────┼───────┼───────┼───────┼────────┼──────────┼──────────┼─────────┤
│ Latency │ 30 ms │ 37 ms │ 81 ms │ 123 ms │ 41.62 ms │ 47.07 ms │ 1817 ms │
└─────────┴───────┴───────┴───────┴────────┴──────────┴──────────┴─────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Req/Sec   │ 1046    │ 1046    │ 1165    │ 1267    │ 1185.91 │ 67.79  │ 1046    │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Bytes/Sec │ 2.13 MB │ 2.13 MB │ 2.37 MB │ 2.57 MB │ 2.41 MB │ 138 kB │ 2.12 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴────────┴─────────┘

Req/Bytes counts sampled once per second.

┌────────────┬──────────────┐
│ Percentile │ Latency (ms) │
├────────────┼──────────────┤
│ 0.001      │ 27           │
├────────────┼──────────────┤
│ 0.01       │ 27           │
├────────────┼──────────────┤
│ 0.1        │ 28           │
├────────────┼──────────────┤
│ 1          │ 29           │
├────────────┼──────────────┤
│ 2.5        │ 30           │
├────────────┼──────────────┤
│ 10         │ 32           │
├────────────┼──────────────┤
│ 25         │ 34           │
├────────────┼──────────────┤
│ 50         │ 37           │
├────────────┼──────────────┤
│ 75         │ 40           │
├────────────┼──────────────┤
│ 90         │ 46           │
├────────────┼──────────────┤
│ 97.5       │ 81           │
├────────────┼──────────────┤
│ 99         │ 123          │
├────────────┼──────────────┤
│ 99.9       │ 843          │
├────────────┼──────────────┤
│ 99.99      │ 1691         │
├────────────┼──────────────┤
│ 99.999     │ 1817         │
└────────────┴──────────────┘

12k requests in 10.02s, 24.1 MB read


normal-web-node10
┌─────────┬───────┬───────┬───────┬───────┬─────────┬──────────┬─────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg     │ Stdev    │ Max     │
├─────────┼───────┼───────┼───────┼───────┼─────────┼──────────┼─────────┤
│ Latency │ 27 ms │ 33 ms │ 46 ms │ 67 ms │ 35.9 ms │ 67.83 ms │ 3635 ms │
└─────────┴───────┴───────┴───────┴───────┴─────────┴──────────┴─────────┘
┌───────────┬─────────┬─────────┬────────┬─────────┬─────────┬────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%    │ 97.5%   │ Avg     │ Stdev  │ Min     │
├───────────┼─────────┼─────────┼────────┼─────────┼─────────┼────────┼─────────┤
│ Req/Sec   │ 1164    │ 1164    │ 1407   │ 1455    │ 1372.9  │ 86.89  │ 1164    │
├───────────┼─────────┼─────────┼────────┼─────────┼─────────┼────────┼─────────┤
│ Bytes/Sec │ 2.07 MB │ 2.07 MB │ 2.5 MB │ 2.59 MB │ 2.44 MB │ 155 kB │ 2.07 MB │
└───────────┴─────────┴─────────┴────────┴─────────┴─────────┴────────┴─────────┘

Req/Bytes counts sampled once per second.

┌────────────┬──────────────┐
│ Percentile │ Latency (ms) │
├────────────┼──────────────┤
│ 0.001      │ 23           │
├────────────┼──────────────┤
│ 0.01       │ 23           │
├────────────┼──────────────┤
│ 0.1        │ 25           │
├────────────┼──────────────┤
│ 1          │ 26           │
├────────────┼──────────────┤
│ 2.5        │ 27           │
├────────────┼──────────────┤
│ 10         │ 29           │
├────────────┼──────────────┤
│ 25         │ 31           │
├────────────┼──────────────┤
│ 50         │ 33           │
├────────────┼──────────────┤
│ 75         │ 36           │
├────────────┼──────────────┤
│ 90         │ 38           │
├────────────┼──────────────┤
│ 97.5       │ 46           │
├────────────┼──────────────┤
│ 99         │ 67           │
├────────────┼──────────────┤
│ 99.9       │ 151          │
├────────────┼──────────────┤
│ 99.99      │ 3530         │
├────────────┼──────────────┤
│ 99.999     │ 3635         │
└────────────┴──────────────┘

14k requests in 10.03s, 24.4 MB read


normal-web-node12
┌─────────┬───────┬───────┬───────┬───────┬──────────┬─────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev   │ Max    │
├─────────┼───────┼───────┼───────┼───────┼──────────┼─────────┼────────┤
│ Latency │ 26 ms │ 33 ms │ 43 ms │ 64 ms │ 33.44 ms │ 8.16 ms │ 252 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴─────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 1327    │ 1327    │ 1485    │ 1500    │ 1471.3  │ 49.13   │ 1327    │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 2.36 MB │ 2.36 MB │ 2.64 MB │ 2.67 MB │ 2.61 MB │ 87.3 kB │ 2.36 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

┌────────────┬──────────────┐
│ Percentile │ Latency (ms) │
├────────────┼──────────────┤
│ 0.001      │ 22           │
├────────────┼──────────────┤
│ 0.01       │ 22           │
├────────────┼──────────────┤
│ 0.1        │ 24           │
├────────────┼──────────────┤
│ 1          │ 26           │
├────────────┼──────────────┤
│ 2.5        │ 26           │
├────────────┼──────────────┤
│ 10         │ 28           │
├────────────┼──────────────┤
│ 25         │ 30           │
├────────────┼──────────────┤
│ 50         │ 33           │
├────────────┼──────────────┤
│ 75         │ 35           │
├────────────┼──────────────┤
│ 90         │ 37           │
├────────────┼──────────────┤
│ 97.5       │ 43           │
├────────────┼──────────────┤
│ 99         │ 64           │
├────────────┼──────────────┤
│ 99.9       │ 120          │
├────────────┼──────────────┤
│ 99.99      │ 222          │
├────────────┼──────────────┤
│ 99.999     │ 252          │
└────────────┴──────────────┘

15k requests in 11.58s, 26.1 MB read


custom-web-node10
┌─────────┬───────┬───────┬───────┬───────┬──────────┬───────────┬─────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev     │ Max     │
├─────────┼───────┼───────┼───────┼───────┼──────────┼───────────┼─────────┤
│ Latency │ 27 ms │ 33 ms │ 43 ms │ 57 ms │ 35.22 ms │ 107.78 ms │ 9386 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴───────────┴─────────┘
┌───────────┬─────────┬─────────┬─────────┬────────┬─────────┬────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%  │ Avg     │ Stdev  │ Min     │
├───────────┼─────────┼─────────┼─────────┼────────┼─────────┼────────┼─────────┤
│ Req/Sec   │ 1200    │ 1200    │ 1386    │ 1408   │ 1370.9  │ 58.04  │ 1200    │
├───────────┼─────────┼─────────┼─────────┼────────┼─────────┼────────┼─────────┤
│ Bytes/Sec │ 2.13 MB │ 2.13 MB │ 2.46 MB │ 2.5 MB │ 2.44 MB │ 103 kB │ 2.13 MB │
└───────────┴─────────┴─────────┴─────────┴────────┴─────────┴────────┴─────────┘

Req/Bytes counts sampled once per second.

┌────────────┬──────────────┐
│ Percentile │ Latency (ms) │
├────────────┼──────────────┤
│ 0.001      │ 22           │
├────────────┼──────────────┤
│ 0.01       │ 22           │
├────────────┼──────────────┤
│ 0.1        │ 24           │
├────────────┼──────────────┤
│ 1          │ 26           │
├────────────┼──────────────┤
│ 2.5        │ 27           │
├────────────┼──────────────┤
│ 10         │ 29           │
├────────────┼──────────────┤
│ 25         │ 31           │
├────────────┼──────────────┤
│ 50         │ 33           │
├────────────┼──────────────┤
│ 75         │ 35           │
├────────────┼──────────────┤
│ 90         │ 38           │
├────────────┼──────────────┤
│ 97.5       │ 43           │
├────────────┼──────────────┤
│ 99         │ 57           │
├────────────┼──────────────┤
│ 99.9       │ 157          │
├────────────┼──────────────┤
│ 99.99      │ 8440         │
├────────────┼──────────────┤
│ 99.999     │ 9386         │
└────────────┴──────────────┘

14k requests in 10.02s, 24.4 MB read


custom-web-node12
┌─────────┬───────┬───────┬───────┬───────┬──────────┬───────────┬─────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev     │ Max     │
├─────────┼───────┼───────┼───────┼───────┼──────────┼───────────┼─────────┤
│ Latency │ 28 ms │ 34 ms │ 57 ms │ 91 ms │ 40.53 ms │ 191.58 ms │ 8934 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴───────────┴─────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Req/Sec   │ 935     │ 935     │ 1210    │ 1420    │ 1217.1  │ 127.55 │ 935     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Bytes/Sec │ 1.66 MB │ 1.66 MB │ 2.15 MB │ 2.53 MB │ 2.16 MB │ 227 kB │ 1.66 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴────────┴─────────┘

Req/Bytes counts sampled once per second.

┌────────────┬──────────────┐
│ Percentile │ Latency (ms) │
├────────────┼──────────────┤
│ 0.001      │ 23           │
├────────────┼──────────────┤
│ 0.01       │ 24           │
├────────────┼──────────────┤
│ 0.1        │ 25           │
├────────────┼──────────────┤
│ 1          │ 27           │
├────────────┼──────────────┤
│ 2.5        │ 28           │
├────────────┼──────────────┤
│ 10         │ 30           │
├────────────┼──────────────┤
│ 25         │ 32           │
├────────────┼──────────────┤
│ 50         │ 34           │
├────────────┼──────────────┤
│ 75         │ 37           │
├────────────┼──────────────┤
│ 90         │ 40           │
├────────────┼──────────────┤
│ 97.5       │ 57           │
├────────────┼──────────────┤
│ 99         │ 91           │
├────────────┼──────────────┤
│ 99.9       │ 196          │
├────────────┼──────────────┤
│ 99.99      │ 8836         │
├────────────┼──────────────┤
│ 99.999     │ 8934         │
└────────────┴──────────────┘

13k requests in 11.02s, 23.8 MB read


custom-web-node14
┌─────────┬───────┬───────┬───────┬───────┬──────────┬─────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev   │ Max    │
├─────────┼───────┼───────┼───────┼───────┼──────────┼─────────┼────────┤
│ Latency │ 27 ms │ 33 ms │ 48 ms │ 72 ms │ 34.31 ms │ 8.79 ms │ 276 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴─────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg    │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┼─────────┤
│ Req/Sec   │ 1269    │ 1269    │ 1426    │ 1455    │ 1407.6 │ 54.45   │ 1269    │
├───────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┼─────────┤
│ Bytes/Sec │ 2.26 MB │ 2.26 MB │ 2.54 MB │ 2.59 MB │ 2.5 MB │ 96.5 kB │ 2.26 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

┌────────────┬──────────────┐
│ Percentile │ Latency (ms) │
├────────────┼──────────────┤
│ 0.001      │ 22           │
├────────────┼──────────────┤
│ 0.01       │ 23           │
├────────────┼──────────────┤
│ 0.1        │ 24           │
├────────────┼──────────────┤
│ 1          │ 26           │
├────────────┼──────────────┤
│ 2.5        │ 27           │
├────────────┼──────────────┤
│ 10         │ 29           │
├────────────┼──────────────┤
│ 25         │ 31           │
├────────────┼──────────────┤
│ 50         │ 33           │
├────────────┼──────────────┤
│ 75         │ 36           │
├────────────┼──────────────┤
│ 90         │ 38           │
├────────────┼──────────────┤
│ 97.5       │ 48           │
├────────────┼──────────────┤
│ 99         │ 72           │
├────────────┼──────────────┤
│ 99.9       │ 122          │
├────────────┼──────────────┤
│ 99.99      │ 254          │
├────────────┼──────────────┤
│ 99.999     │ 276          │
└────────────┴──────────────┘

14k requests in 10.02s, 25 MB read


custom-web-node16
┌─────────┬───────┬───────┬───────┬───────┬──────────┬─────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5% │ 99%   │ Avg      │ Stdev   │ Max    │
├─────────┼───────┼───────┼───────┼───────┼──────────┼─────────┼────────┤
│ Latency │ 28 ms │ 34 ms │ 48 ms │ 74 ms │ 35.42 ms │ 9.04 ms │ 256 ms │
└─────────┴───────┴───────┴───────┴───────┴──────────┴─────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 1234    │ 1234    │ 1403    │ 1426    │ 1390.9  │ 53.55   │ 1234    │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 2.19 MB │ 2.19 MB │ 2.49 MB │ 2.54 MB │ 2.47 MB │ 95.3 kB │ 2.19 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

┌────────────┬──────────────┐
│ Percentile │ Latency (ms) │
├────────────┼──────────────┤
│ 0.001      │ 24           │
├────────────┼──────────────┤
│ 0.01       │ 24           │
├────────────┼──────────────┤
│ 0.1        │ 26           │
├────────────┼──────────────┤
│ 1          │ 27           │
├────────────┼──────────────┤
│ 2.5        │ 28           │
├────────────┼──────────────┤
│ 10         │ 30           │
├────────────┼──────────────┤
│ 25         │ 32           │
├────────────┼──────────────┤
│ 50         │ 34           │
├────────────┼──────────────┤
│ 75         │ 37           │
├────────────┼──────────────┤
│ 90         │ 39           │
├────────────┼──────────────┤
│ 97.5       │ 48           │
├────────────┼──────────────┤
│ 99         │ 74           │
├────────────┼──────────────┤
│ 99.9       │ 134          │
├────────────┼──────────────┤
│ 99.99      │ 230          │
├────────────┼──────────────┤
│ 99.999     │ 256          │
└────────────┴──────────────┘

14k requests in 10.02s, 24.7 MB read

