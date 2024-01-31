const college = {
    name: 'vnc',
    class: ['11','12'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result:{
            gpa: 5,
            merit: 'top'
        }
    }
}
college.unique.result.gpa = 54
console.log(college.unique.result);
college.events[1] = '16 december'
console.log(college.events[1]);

delete college.name;

console.log(college);