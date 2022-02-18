var ans='';
var res='';
var answer='';

function cal(btnvalue) {
    ans=btnvalue;
    if(ans=='=') {
        res=eval(answer);
        console.log('Answer',res);
        document.getElementById('answer').value=res;
    }
    else if(ans=='<') {
        answer=answer.substr(0,answer.length-1);
        document.getElementById('answer').value=answer;
    }
    else {
        answer+=ans;
        document.getElementById('answer').value=answer;
        console.log('ans',answer);
        console.log('answer',res);
    
    }
}
function clr() {
        ans='';
        res='';
        answer='';
        document.getElementById('answer').value='';
}
function FormingTable() {
    document.write("<link rel=\"stylesheet\" href=\"cal.css\">");
    var arr=[1,2,3,'*',4,5,6,'-',7,8,9,'/','.','<','+','='];
    document.write('<table>');
    document.write('<tr><th colspan=3><input name="input" size="26" id="answer"></th><th><button id="clear" value="C" onclick="clr()">C</button></th></tr>');
    for(let i=1;i<=arr.length;i++) {
        if(i%4==1) {
            document.write('<tr>');
        }
          document.write('<td><button value="' , arr[i-1] , '" onclick=cal(this.value)>',arr[i-1],'</button></td>');    
        if(i%4==0) {
            document.write('</tr>');
        }
    }
}
