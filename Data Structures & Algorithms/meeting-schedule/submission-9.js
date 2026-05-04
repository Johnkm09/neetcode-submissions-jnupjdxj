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
        if(intervals.length <= 1) return true;

        intervals.sort((a,b) => a.start - b.start);

        for(let i = 1; i < intervals.length; i++){
            const prev = intervals[i - 1];
            const curr = intervals[i];

            if(curr.start < prev.end){
                return false;
            }
        }
        return true;
    }
}
