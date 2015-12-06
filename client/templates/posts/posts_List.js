var postsData = [
	{
		title: 'Introducing Telescope',
		url:  'http://sachagreif.com/introducing-telescope/'
	},

	{
		title: 'Meteor',
		url: 'http://meteor.com'
	},

	{
		title: 'The Meteor Book',
		url: 'http://themeteorbook.com'
	},
	{
		title: 'Descubriendo Meteor',
		url: 'http://es.discovermeteor.com/'
	}

];
Template.postsList.helpers({
	posts: postsData
});

