/*
 * jQuery Genealogy
 * https://github.com/spicyj/jquery-genealogy
 *
 * Copyright (c) 2011 Ben Alpert
 * Released under the MIT License
 */

(function($) {
	$.fn.extend({
		grandchildren: function() {
			return this.children().children();
		},

		greatGrandchildren: function() {
			return this.grandchildren().children();
		},

		grandparent: function() {
			return this.parent().parent();
		},

		greatGrandparent: function() {
			return this.grandparent().parent();
		},

		aunts: function() {
			return this.parent().siblings();
		},

		prevAunt: function() {
			return this.parent().prev();
		},

		prevAunts: function() {
			return this.parent().prevAll();
		},

		nextAunt: function() {
			return this.parent().next();
		},

		nextAunts: function() {
			return this.parent().nextAll();
		},

		cousins: function() {
			return this.aunts().children();
		},

		prevCousins: function() {
			// Return closest cousins first (by document order)
			return this.prevAunts().map( function () {
				return $( this ).children().get().reverse();
			} );
		},

		nextCousins: function() {
			return this.nextAunts().children();
		},

		nieces: function() {
			return this.siblings().children();
		},

		prevNieces: function() {
			// Return closest nieces first (by document order)
			return this.prevAll().map( function () {
				return $( this ).children().get().reverse();
			} );
		},

		nextNieces: function() {
			return this.nextAll().children();
		}
	});

	$.fn.uncles = $.fn.aunts;
	$.fn.prevUncle = $.fn.prevAunt;
	$.fn.prevUncles = $.fn.prevAunts;
	$.fn.nextUncle = $.fn.nextAunt;
	$.fn.nextUncles = $.fn.nextAunts;

	$.fn.nephews = $.fn.nieces;
	$.fn.prevNephews = $.fn.prevNieces;
	$.fn.nextNephews = $.fn.nextNieces;

	$.fn.brothers = $.fn.sisters = $.fn.siblings;
	$.fn.father = $.fn.mother = $.fn.parent;
})(jQuery);
