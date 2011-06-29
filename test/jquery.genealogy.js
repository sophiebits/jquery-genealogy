test( "grandchildren", function() {
	var set = jQuery( "#A" ).grandchildren();
	equal( set.length, 3 );
	equal( set[0].id, "C" );
	equal( set[1].id, "E" );
	equal( set[2].id, "F" );
} );

test( "greatGrandchildren", function() {
	var set = jQuery( "#A" ).greatGrandchildren();
	equal( set.length, 1 );
	equal( set[0].id, "G" );
} );

test( "grandparent", function() {
	var set = jQuery( "#C" ).grandparent();
	equal( set.length, 1 );
	equal( set[0].id, "A" );
} );

test( "greatGrandparent", function() {
	var set = jQuery( "#G" ).greatGrandparent();
	equal( set.length, 1 );
	equal( set[0].id, "A" );
} );

test( "aunts", function() {
	var set = jQuery( "#L" ).aunts();
	equal( set.length, 4 );
	equal( set[0].id, "I" );
	equal( set[1].id, "J" );
	equal( set[2].id, "M" );
	equal( set[3].id, "N" );

	equal( jQuery.fn.aunts, jQuery.fn.uncles );
} );

test( "prevAunt", function() {
	var set = jQuery( "#L" ).prevAunt();
	equal( set.length, 1 );
	equal( set[0].id, "J" );

	equal( jQuery.fn.prevAunt, jQuery.fn.prevUncle );
} );

test( "prevAunts", function() {
	var set = jQuery( "#L" ).prevAunts();
	equal( set.length, 2 );
	equal( set[0].id, "J" );
	equal( set[1].id, "I" );

	equal( jQuery.fn.prevAunts, jQuery.fn.prevUncles );
} );

test( "nextAunt", function() {
	var set = jQuery( "#L" ).nextAunt();
	equal( set.length, 1 );
	equal( set[0].id, "M" );

	equal( jQuery.fn.nextAunt, jQuery.fn.nextUncle );
} );

test( "nextAunts", function() {
	var set = jQuery( "#L" ).nextAunts();
	equal( set.length, 2 );
	equal( set[0].id, "M" );
	equal( set[1].id, "N" );

	equal( jQuery.fn.nextAunts, jQuery.fn.nextUncles );
} );

test( "cousins", function() {
	var set = jQuery( "#V" ).cousins();
	equal( set.length, 5 );
	equal( set[0].id, "Q" );
	equal( set[1].id, "R" );
	equal( set[2].id, "T" );
	equal( set[3].id, "Y" );
	equal( set[4].id, "Z" );
} );

test( "prevCousins", function() {
	var set = jQuery( "#V" ).prevCousins();
	equal( set.length, 3 );
	equal( set[0].id, "T" );
	equal( set[1].id, "R" );
	equal( set[2].id, "Q" );
} );

test( "nextCousins", function() {
	var set = jQuery( "#V" ).nextCousins();
	equal( set.length, 2 );
	equal( set[0].id, "Y" );
	equal( set[1].id, "Z" );
} );

test( "nieces", function() {
	var set = jQuery( "#S" ).nieces();
	equal( set.length, 6 );
	equal( set[0].id, "Q" );
	equal( set[1].id, "R" );
	equal( set[2].id, "V" );
	equal( set[3].id, "W" );
	equal( set[4].id, "Y" );
	equal( set[5].id, "Z" );

	equal( jQuery.fn.nieces, jQuery.fn.nephews );
} );

test( "prevNieces", function() {
	var set = jQuery( "#S" ).prevNieces();
	equal( set.length, 2 );
	equal( set[0].id, "R" );
	equal( set[1].id, "Q" );

	equal( jQuery.fn.prevNieces, jQuery.fn.prevNephews );
} );

test( "nextNieces", function() {
	var set = jQuery( "#S" ).nextNieces();
	equal( set.length, 4 );
	equal( set[0].id, "V" );
	equal( set[1].id, "W" );
	equal( set[2].id, "Y" );
	equal( set[3].id, "Z" );

	equal( jQuery.fn.nextNieces, jQuery.fn.nextNephews );
} );
