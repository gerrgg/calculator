$(function(){
    var calculator = {
        $calc: $('#calculator'),
        $output: $('#output'),

        init: function(){
            this.$calc.on( 'click', '.button', this.button_clicked )
        },

        button_clicked: function( e ){
            /**
             * Finds the value of the button clicked, checks it against an array of special case buttons
             * and passed to the appropriate function.
             */
            let input = e.target.innerText;
            let ban_list = ['backspace', 'clear', '='];

            if( ! ban_list.includes( input ) ){
                calculator.display( input, true );
            } else {
                calculator[input]();
            }
        },

        display: function( input, append = false ){
            /**
             * Simply used to change the on screen display
             */
            if( append ){
                this.$output.append( input );
            } else {
                this.$output.html( input );
            }
        },
        
        ['backspace']: function(){
            /**
             * Takes the original string, removes a letter and overwrites the current on-screen value
             */
            let old_input = this.$output.text();
            let new_input = old_input.substring(0, old_input.length - 1 );
            this.display( new_input );
        }, 

        ['clear']: function(){
            /**
             * Clears the calculator screen
             */
            this.display( '' );
        }, 

        ['=']: function(){
            /**
             * uses eval() to calculate the equation the user has created. 
             * Uses a Try/Catch method to prevent JS from crashing when a user inputs bad syntax.
             */
            let problem = this.$output.text();
            try{
                let awnser = eval( problem );
                this.display( awnser );
            } catch( e ){
                if( e instanceof SyntaxError ){
                    setTimeout( this.display( e.message ), 1000  );
                    this['clear']();
                }
            }
        }, 
    }
    calculator.init();
});