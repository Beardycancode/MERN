var obj = {
    "first_name": "Aayush",
    "last_name": "Sinha",
    "email": "aayush.aryan@me.com",
    "website": "sdfhsdhfjds",
    "k": "This is Key K's value",
    "students": [
	{
	    "name": "Name 1",
	    "marks": 1
	},
	{
	    "name": "Name 2",
	    "marks": 54
	},
	{
	    "name": "Name 3",
	    "marks": 44
	},
	{
	    "name": "Name 4",
	    "marks": 3
	},
	{
	    "name": "Name 5",
	    "marks": 5
	},
        {
	    "name": "Name 6",
	    "marks": 23
	},
    ],
};

pass = prompt("Enter marks");
pass = parseInt(pass)

len = obj.students.length

var passed_stu = [];

for (i=0; i<len; i++){
    new1 = obj.students[i];
    
    if(new1["marks"] >= pass){
        passed_stu.push(new1["name"]);
    }

}

console.log(passed_stu);
