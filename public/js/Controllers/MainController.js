app.controller('MainController', ['$scope', function($scope){
	$scope.title = 'Welcome to Georgia\'s World';
	$scope.pages = [ 
		{
			name: 'about',
			route:'#/about',
		},
		{
			name: 'works',
			route:'#/works',
		},
		{
			name: 'contact',
			route:'#/contact',
		}
	];
	$scope.socials = [
		{
			media: 'instagram',
			url: 'https://instagram.com/georgiaglassie',
			png: '/img/instagram.png'
		},
		{
			media: 'twitter',
			url: 'https://twitter.com/GstarGface',
			png: '/img/twitter.png'
		},
		{
		media: 'github',
		url: 'https://github.com/gstargface',
		png: '/img/github-2.png'
		},
	];
	$scope.works = [
		{
			name:'Hide and Cheek\'s Design Lab',
			url:'http://hide-cheek-design-lab.herokuapp.com',
			thumbnail:'/img/hidecheek.png'
		},
		{
			name:'#MollyDog Photo Viewer',
			url:'http://slack-attack.herokuapp.com',
			thumbnail:'/img/mollydog.png'
		}
	];

}]);