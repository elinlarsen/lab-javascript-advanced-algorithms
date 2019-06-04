function StackDataStructure (element) {

    this.stackControl=new Array() // name from the spec
    this.MAX_SIZE=100; // name from the spec

    "use strict";


    //method to check if the stackControl is empty
    this.isEmpty = function ()
    {
        if(this.stackControl.length===0)
        {
            return true
        }
        else 
        {
            return false
        }
    }


    //check if we can push elements to the array
    this.canPush= function(){
        if (this.stackControl.length < this.MAX_SIZE) 
        {
            return true
        }
        else 
        {
            return false
        }
    }

    //push elements to the array
    this.push=function(element){
        if(this.canPush())
        {
            this.stackControl.push(element)
            return this.stackControl // returns the stack
        }
        else
        {
            return ("Stack Overflow")
        }
         
    }

    // retrieve from array
    this.pop=function (){
        if(this.isEmpty())
        {
            return "Stack Underflow"    
        }
        else
        {   
            return this.stackControl.pop() // returns the poped out element
        }
        
    }
};

