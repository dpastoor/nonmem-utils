/**
 * 
 * Created by devin on 3/6/2016.
 */
import fs from 'fs-extra';
import nmUtils from './src'

let thetaBlock = fs.readFileSync("test/fixtures/blocks/theta-block1.lst")
    .toString()
    .split('\n');

nmUtils.parseThetaResults(thetaBlock);
