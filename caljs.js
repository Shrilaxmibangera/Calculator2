var ans='';
var res='';
var answer='';
function cal(btnvalue)
{
    ans=btnvalue;
    if(ans=='=')
    {
        res=eval(answer);
        console.log('Answer',res);
        document.getElementById('answer').value=res;
    }
    else
    {
        answer+=ans;
        document.getElementById('answer').value=answer;
        console.log('ans',answer);
        console.log('answer',res);
    
    }
}
function clr()
{
        ans='';
        res='';
        answer='';
        document.getElementById('answer').value='';
    
}
function FormingTable()
{
    document.write("<link rel=\"stylesheet\" href=\"cal.css\">");
    document.write('<table>');
    document.write('<tr><th colspan=3><input name="input" size="26" id="answer"></th><th><button id="clear" value="C" onclick="clr()">C</button></th></tr>');
    for(let i=1;i<=9;i++)
    {
        if(i%3==1)
        {
            document.write('<tr>');
        }
          document.write('<td><button value="' , i , '" onclick=cal(this.value)>',i,'</button></td>');
        if(i%3==0)
        {
            if (i==3) {
                document.write('<td><button class="operator" value=+ onclick=cal(this.value)>+</button></td></tr>');
            }
            if (i==6) {
                document.write('<td><button value=- onclick=cal(this.value)>-</button></td>');
            }
            if (i==9) {
                document.write('<td><button value=* onclick=cal(this.value)>*</button></td></tr>');
                document.write('<tr><td><button value=/ onclick=cal(this.value)>/</button></td>');
                document.write('<td><button value=0 onclick=cal(this.value)>0</button></td>');
                document.write('<td><button value=. onclick=cal(this.value)>.</button></td>');
                document.write('<td><button value== onclick=cal(this.value)>=</button></td></tr>');
            }   
        }
    }
}
