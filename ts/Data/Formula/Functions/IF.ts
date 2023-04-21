/* *
 *
 *  (c) 2009-2023 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sophie Bremer
 *
 * */


'use strict';


/* *
 *
 *  Imports
 *
 * */


import type {
    Arguments,
    Value
} from '../FormulaTypes';
import type DataTable from '../../DataTable';


import FormulaProcessor from '../FormulaProcessor.js';


/* *
 *
 *  Functions
 *
 * */


/**
 * Processor for the `IF(test, value1, value2)` implementation. Returns one of
 * the values based on the test result. `value1` will be returned, if the test
 * result is not `0` or `FALSE`.
 *
 * @private
 * @function Formula.processorFunctions.IF
 *
 * @param {Highcharts.FormulaArguments} args
 * Arguments to process.
 *
 * @param {Highcharts.DataTable} [table]
 * Table to process.
 *
 * @return {Highcharts.FormulaValue|Array<Highcharts.FormulaValue>}
 * Result value of the process.
 */
function IF(
    args: Arguments,
    table?: DataTable
): (Value|Array<Value>) {
    return (
        FormulaProcessor.getArgumentValue(args[0], table) ?
            FormulaProcessor.getArgumentValue(args[1], table) :
            FormulaProcessor.getArgumentValue(args[2], table)
    );
}


/* *
 *
 *  Registry
 *
 * */


FormulaProcessor.registerProcessorFunction('IF', IF);


/* *
 *
 *  Default Export
 *
 * */


export default IF;
