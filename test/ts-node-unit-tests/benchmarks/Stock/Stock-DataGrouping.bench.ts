import type { BenchmarkContext, BenchmarkResult } from '../../benchmark';
import { generateOHLC } from '../../data-generators';
import { runHCTest } from '../../pupeteer';

export const config = {
    sizes: [1000, 10_000, 100_000, 1_000_000]
};

export function before(size: number) {

    return {
        fileName: `${size}-ohlc.json`,
        func: generateOHLC.bind(undefined, size)
  };
}

export default async function benchmarkTest(
    {
        size,
        data
    }: BenchmarkContext
): Promise<BenchmarkResult> {

        let result = await runHCTest({

            chart: {
                height: 400,
                width: 800
            },
            accessibility: {
                enabled: false
            },
            xAxis: {
                ordinal: false
            },
            plotOptions: {
                series: {
                    animation: false,
                    dataLabels: {
                        defer: false
                    }
                }
            },
            series: [{
                data: data,
                type: 'candlestick',
                dataGrouping: {
                    enabled: true
                }
            }]
        });

    return result;
}
