let answer = document.getElementById("answer");
    let res="";
    buttons = document.querySelectorAll("button");
    for (item of buttons) {
        item.addEventListener('click', (e) => {
            buttonText = e.target.innerText;
            console.log(buttonText);
            if (buttonText == "X") {
                buttonText = "*";
                res+=buttonText;
                answer.value=res;
            }
            else if (buttonText == "=") {
                answer.value=eval(res);
            }
            else if(buttonText=="C")
            {
                res="";
                answer.value="";
            }
            else if(buttonText=="<")
            {
                res=res.substr(0,res.length-1);
                answer.value=res;
            }
            else{
                res+=buttonText;
                answer.value=res;
            }
        });
    }