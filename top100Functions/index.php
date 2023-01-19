<?php


/*ARRAY_MAP*/

//function square($num)
//{
//    return ($num * $num);
//}
//
//$numbers = array(1,2,3,4,5,6,7,89,9,10);
//print_r(array_map('square',$numbers));


//$movies = array('THE MATRIX','BRAVEHEART','LIMITLESS','Gignger');
//$genders = array('Sciene Fiction','Action','Drama');
//$years = array(1999,2000,2003,2018);
//
//function show_movies($movies,$genders,$years){
//    return ("$movies is $genders and was released in $years");
//}
//print_r(array_map('show_movies',$movies,$genders,$years));

/*CALL_THE_USER_FUNCTION*/


//function favourite_game($game,$type)
//{
//    echo 'I love to play ' . $game .',its my favourite ' . $type . ' of game';
//}
//call_user_func('favourite_game','Witcher 3','XBOX360');
//

//class Cards {
//    static function pick_card(){
//        $cards = array('King','Quenn','Jack','Ace','Ten');
//        echo $cards[array_rand($cards)];
//    }
//}
//call_user_func(array('Cards','pick_card'));

//is_callble


$print_array = 'pre_r';
print_r(is_callable($print_array));
die();
