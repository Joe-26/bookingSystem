let a = 10;
let str = "VWITS";
//str=20;           This gives compilation error as str is of type string & 
                    //we cannot assign number to interface.
//a="vwit";         This is compilation error as 'a' is declared & initialized as int type
let c : any;
c = "vwit";
c = 20;
let d : number = 100; // assigning a datatype

function display(str:string):number
{
    console.log(str);
    return 20;
}

interface Certified
{

}
class Employee implements Certified
{
    //emp_Id : number;
    constructor(public empId : number)
    {

    }
};
let emp = new Employee(7);
console.log(emp.empId);
