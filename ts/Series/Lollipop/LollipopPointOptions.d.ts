/* *
 *
 *  (c) 2010-2021 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Imports
 *
 * */

import type ScatterPointOptions from '../Scatter/ScatterPointOptions';
import type ColorType from '../../Core/Color/ColorType';
import DashStyleValue from '../../Core/Renderer/DashStyleValue';

/* *
 *
 *  Declarations
 *
 * */

export interface LollipopPointOptions extends ScatterPointOptions {
    connectorColor?: ColorType;
    connectorWidth?: number;
    dashStyle?: DashStyleValue;
    low?: number;
    lowColor?: ColorType;
}

/* *
 *
 *  Default Export
 *
 * */

export default LollipopPointOptions;
