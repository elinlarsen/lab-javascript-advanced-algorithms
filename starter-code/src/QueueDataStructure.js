function QueueDataStructure () {

    this.queueControl=new Array()
    this.MAX_SIZE=100; // name from the spec

    this.isEmpty = function ()
    {
        if(this.queueControl.length===0)
        {
            return true
        }
        else 
        {
            return false
        }
    }


    //check if we can push elements to the array
    this.canEnqueue= function(){
        if (this.queueControl.length < this.MAX_SIZE) 
        {
            return true
        }
        else 
        {
            return false
        }
    }

    this.enqueue=function(element){
        if(this.canEnqueue())
        {
            this.queueControl.unshift(element) 
            return this.queueControl
        }
        else
        {
            return "Queue Overflow"
        }

    }

    this.dequeue=function(){
        if (this.isEmpty())
        {
            return "Queue Underflow"
        }
        else
        {
            return this.queueControl.pop()
        }

    }

}
