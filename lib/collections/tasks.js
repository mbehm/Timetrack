Tasks = new Meteor.Collection('tasks');
Tasks.allow({
	insert: function(userId, task) {
		task.user_id = userId;
		return !!userId;
	}
})
if (Meteor.isServer) {
	Meteor.publish('tasks', function() {
		return Tasks.find({user_id: this.userId});
	});
} else if (Meteor.isClient) {
	Meteor.subscribe('tasks');
}