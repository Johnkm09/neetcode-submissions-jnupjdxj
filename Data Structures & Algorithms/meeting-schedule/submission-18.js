/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        for(let i = 0; i < intervals.length; i++){
            for(let j = i + 1; j < intervals.length; j++){
                let a = intervals[i];
                let b = intervals[j];

                if(a.start < b.end && b.start < a.end){
                    return false;
                }
            }
        }
        return true;
    }
}
