$(document).ready(function(){
    $('.button').click(function(){
        let clicked = $(this).text();
        let output = $('#output');
        switch(clicked){
            case '=':
                calculate( output.text() );
                break;
            case 'backspace':
                backspace( output.text() );
                break;
            case 'clear':
                clearOutput();
                break;
            default:
            output.append(clicked);
        }
    });

    function calculate( str ){
        let output = $('#output');
        if( ! str.length ){
            alert('Error: No input');
        }else{
            regex = /(\d*)+(\+|-|\*|)+(\d*)/g;
            let matches = regex.exec(str);
            // matches[0] = problem
            // matches[1] = first num
            // matches[2] = operator
            // matches[3] = 2nd num
            $('#storage').text(matches[0] + '=');
            switch( matches[2] ){
                case '+':
                    output.text(add(matches[1], matches[3]));
                    break;
                case '-':
                    output.text(subtract(matches[1], matches[3]));
                    break;
                case '*':
                    output.text(multiply(matches[1], matches[3]));
                    break;
                case '÷':
                    output.text(divide(matches[1], matches[3]));
                    break;
                default:
                    alert('error');
            }
            
        }
    }
    function clearOutput(){
        $('#output').text('');
    }
    function backspace(str){
        $('#output').text( str.slice(0, -1) );
    }

    function add(x, y){
        return x + y;
    }
    function subtract(x, y){
        return x - y;
    }
    function multiply(x, y){
        return x * y;
    }
    function divide(x, y){
        return x / y;
    }
});