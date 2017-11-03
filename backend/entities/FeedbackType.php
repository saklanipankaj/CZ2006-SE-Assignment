/**
 * Enum for feedback type.
 * @readonly
 * @enum {number}
 */
var FeedbackType = {
	BUG: 1,
	NEW_CARPARK : 2,
	UPDATE_CARPARK : 3,
}

<?php

abstract class FeedbackType
{
    const BUG = 1;
    const NEW_CARPARK = 2;
    const UPDATE_CARPARK =3;
    // etc.
}

?>
