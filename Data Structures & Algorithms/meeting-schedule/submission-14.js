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
        
        const n = intervals.length;
        if(n<= 1) return true;
        for(let i = 0; i < n; i++){
            for(let j = i + 1; j < n; j++){
                const startA = intervals[i].start;
                const endA = intervals[i].end;

                const startB = intervals[j].start;
                const endB = intervals[j].end;

                if(startA < endB && startB < endA){
                    return false;
                }
            }
        }
         return true;
    }
}
