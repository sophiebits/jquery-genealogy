// jQuery Genealogy
// https://github.com/spicyj/jquery-genealogy
//
// Copyright (c) 2011 Ben Alpert
// Released under the MIT License

jQuery.fn.extend({
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
			return jQuery( this ).children().get().reverse();
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
			return jQuery( this ).children().get().reverse();
		} );
	},

	nextNieces: function() {
		return this.nextAll().children();
	}
});

jQuery.fn.uncles = jQuery.fn.aunts;
jQuery.fn.prevUncle = jQuery.fn.prevAunt;
jQuery.fn.prevUncles = jQuery.fn.prevAunts;
jQuery.fn.nextUncle = jQuery.fn.nextAunt;
jQuery.fn.nextUncles = jQuery.fn.nextAunts;

jQuery.fn.nephews = jQuery.fn.nieces;
jQuery.fn.prevNephews = jQuery.fn.prevNieces;
jQuery.fn.nextNephews = jQuery.fn.nextNieces;

jQuery.fn.brothers = jQuery.fn.sisters = jQuery.fn.siblings;
jQuery.fn.father = jQuery.fn.mother = jQuery.fn.parent;
